// Estratto da HabboAirLauncher.deobf.js, riga 13478.

class Dje {
      static {
        n(this, "_GCSystem");
      }
      constructor(e) {
        ((this._managedResources = []),
          (this._managedResourceHashes = []),
          (this._managedCollections = []),
          (this._ready = !1),
          (this._renderer = e));
      }
      init(e) {
        ((e = { ...Dje.defaultOptions, ...e }),
          (this.maxUnusedTime = e.gcMaxUnusedTime),
          (this._frequency = e.gcFrequency),
          (this.enabled = e.gcActive),
          (this.now = performance.now()));
      }
      get enabled() {
        return !!this._handler;
      }
      set enabled(e) {
        this.enabled !== e &&
          (e
            ? ((this._handler = this._renderer.scheduler.repeat(
                () => {
                  this._ready = !0;
                },
                this._frequency,
                !1,
              )),
              (this._collectionsHandler = this._renderer.scheduler.repeat(() => {
                for (let r of this._managedCollections) {
                  let { context: t, collection: i, type: s } = r;
                  s === "hash" ? (t[i] = cleanHash(t[i])) : (t[i] = cleanArray(t[i]));
                }
              }, this._frequency)))
            : (this._renderer.scheduler.cancel(this._handler),
              this._renderer.scheduler.cancel(this._collectionsHandler),
              (this._handler = 0),
              (this._collectionsHandler = 0)));
      }
      prerender({ container: e }) {
        ((this.now = performance.now()),
          (e.renderGroup.gcTick = this._renderer.tick++),
          this._updateInstructionGCTick(e.renderGroup, e.renderGroup.gcTick));
      }
      postrender() {
        !this._ready || !this.enabled || (this.run(), (this._ready = !1));
      }
      _updateInstructionGCTick(e, r) {
        ((e.instructionSet.gcTick = r), (e.gcTick = r));
        for (let t of e.renderGroupChildren) this._updateInstructionGCTick(t, r);
      }
      addCollection(e, r, t) {
        this._managedCollections.push({ context: e, collection: r, type: t });
      }
      addResource(e, r) {
        if (e._gcLastUsed !== -1) {
          ((e._gcLastUsed = this.now), e._onTouch?.(this.now));
          return;
        }
        let t = this._managedResources.length;
        ((e._gcData = { index: t, type: r }),
          (e._gcLastUsed = this.now),
          e._onTouch?.(this.now),
          e.once("unload", this.removeResource, this),
          this._managedResources.push(e));
      }
      removeResource(e) {
        let r = e._gcData;
        if (!r) return;
        let t = r.index,
          i = this._managedResources.length - 1;
        if (t !== i) {
          let s = this._managedResources[i];
          ((this._managedResources[t] = s), (s._gcData.index = t));
        }
        (this._managedResources.length--, (e._gcData = null), (e._gcLastUsed = -1));
      }
      addResourceHash(e, r, t, i = 0) {
        (this._managedResourceHashes.push({ context: e, hash: r, type: t, priority: i }),
          this._managedResourceHashes.sort((s, o) => s.priority - o.priority));
      }
      run() {
        let e = performance.now(),
          r = this._managedResourceHashes;
        for (let i of r) this.runOnHash(i, e);
        let t = 0;
        for (let i = 0; i < this._managedResources.length; i++) {
          let s = this._managedResources[i];
          t = this.runOnResource(s, e, t);
        }
        this._managedResources.length = t;
      }
      updateRenderableGCTick(e, r) {
        let t = e.renderGroup ?? e.parentRenderGroup,
          i = t?.instructionSet?.gcTick ?? -1;
        (t?.gcTick ?? 0) === i && ((e._gcLastUsed = r), e._onTouch?.(r));
      }
      runOnResource(e, r, t) {
        let i = e._gcData;
        return (
          i.type === "renderable" && this.updateRenderableGCTick(e, r),
          r - e._gcLastUsed < this.maxUnusedTime || !e.autoGarbageCollect
            ? ((this._managedResources[t] = e), (i.index = t), t++)
            : (e.unload(),
              (e._gcData = null),
              (e._gcLastUsed = -1),
              e.off("unload", this.removeResource, this)),
          t
        );
      }
      _createHashClone(e, r) {
        let t = Object.create(null);
        for (let i in e) {
          if (i === r) break;
          e[i] !== null && (t[i] = e[i]);
        }
        return t;
      }
      runOnHash(e, r) {
        let { context: t, hash: i, type: s } = e,
          o = t[i],
          d = null,
          c = 0;
        for (let f in o) {
          let l = o[f];
          if (l === null) {
            (c++, c === 1e4 && !d && (d = this._createHashClone(o, f)));
            continue;
          }
          if (l._gcLastUsed === -1) {
            ((l._gcLastUsed = r), l._onTouch?.(r), d && (d[f] = l));
            continue;
          }
          if (
            (s === "renderable" && this.updateRenderableGCTick(l, r),
            !(r - l._gcLastUsed < this.maxUnusedTime) && l.autoGarbageCollect)
          ) {
            if (
              (d || (c + 1 !== 1e4 ? ((o[f] = null), c++) : (d = this._createHashClone(o, f))),
              s === "renderable")
            ) {
              let _ = l,
                h = _.renderGroup ?? _.parentRenderGroup;
              h && (h.structureDidChange = !0);
            }
            (l.unload(), (l._gcData = null), (l._gcLastUsed = -1));
          } else d && (d[f] = l);
        }
        d && (t[i] = d);
      }
      destroy() {
        ((this.enabled = !1),
          this._managedResources.forEach((e) => {
            e.off("unload", this.removeResource, this);
          }),
          (this._managedResources.length = 0),
          (this._managedResourceHashes.length = 0),
          (this._managedCollections.length = 0),
          (this._renderer = null));
      }
    }
