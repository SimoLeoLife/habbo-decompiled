// Extracted from HabboAirLauncher.deobf.js, line 13192.

class {
      static {
        n(this, "BlendModePipe");
      }
      constructor(e) {
        ((this._blendModeStack = []),
          (this._isAdvanced = !1),
          (this._filterHash = Object.create(null)),
          (this._renderer = e),
          this._renderer.runners.prerender.add(this));
      }
      prerender() {
        ((this._activeBlendMode = "normal"), (this._isAdvanced = !1));
      }
      pushBlendMode(e, r, t) {
        (this._blendModeStack.push(r), this.setBlendMode(e, r, t));
      }
      popBlendMode(e) {
        this._blendModeStack.pop();
        let r = this._blendModeStack[this._activeBlendMode.length - 1] ?? "normal";
        this.setBlendMode(null, r, e);
      }
      setBlendMode(e, r, t) {
        let i = e instanceof RenderGroup;
        if (this._activeBlendMode === r) {
          this._isAdvanced && e && !i && this._renderableList?.push(e);
          return;
        }
        (this._isAdvanced && this._endAdvancedBlendMode(t),
          (this._activeBlendMode = r),
          e && ((this._isAdvanced = !!IK[r]), this._isAdvanced && this._beginAdvancedBlendMode(e, t)));
      }
      _beginAdvancedBlendMode(e, r) {
        this._renderer.renderPipes.batch.break(r);
        let t = this._activeBlendMode;
        if (!IK[t]) {
          warn_(
            `Unable to assign BlendMode: '${t}'. You may want to include: import 'pixi.js/advanced-blend-modes'`,
          );
          return;
        }
        let i = this._ensureFilterEffect(t),
          s = e instanceof RenderGroup,
          o = {
            renderPipeId: "filter",
            action: "pushFilter",
            filterEffect: i,
            renderables: s ? null : [e],
            container: s ? e.root : null,
            canBundle: !1,
          };
        ((this._renderableList = o.renderables), r.add(o));
      }
      _ensureFilterEffect(e) {
        let r = this._filterHash[e];
        return (r || ((r = this._filterHash[e] = new FilterEffect()), (r.filters = [new IK[e]()])), r);
      }
      _endAdvancedBlendMode(e) {
        ((this._isAdvanced = !1),
          (this._renderableList = null),
          this._renderer.renderPipes.batch.break(e),
          e.add({ renderPipeId: "filter", action: "popFilter", canBundle: !1 }));
      }
      buildStart() {
        this._isAdvanced = !1;
      }
      buildEnd(e) {
        this._isAdvanced && this._endAdvancedBlendMode(e);
      }
      destroy() {
        ((this._renderer = null), (this._renderableList = null));
        for (let e in this._filterHash) this._filterHash[e].destroy();
        this._filterHash = null;
      }
    }
