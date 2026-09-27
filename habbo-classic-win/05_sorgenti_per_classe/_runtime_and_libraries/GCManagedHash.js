// Extracted from HabboAirLauncher.deobf.js, line 14261.

class {
      static {
        n(this, "GCManagedHash");
      }
      constructor(e) {
        this.items = Object.create(null);
        let { renderer: r, type: t, onUnload: i, priority: s, name: o } = e;
        ((this._renderer = r),
          r.gc.addResourceHash(this, "items", t, s ?? 0),
          (this._onUnload = i),
          (this.name = o));
      }
      add(e) {
        return this.items[e.uid]
          ? !1
          : ((this.items[e.uid] = e),
            e.once("unload", this.remove, this),
            (e._gcLastUsed = this._renderer.gc.now),
            !0);
      }
      remove(e, ...r) {
        if (!this.items[e.uid]) return;
        let t = e._gpuData[this._renderer.uid];
        t &&
          (this._onUnload?.(e, ...r),
          t.destroy(),
          (e._gpuData[this._renderer.uid] = null),
          (this.items[e.uid] = null));
      }
      removeAll(...e) {
        Object.values(this.items).forEach((r) => r && this.remove(r, ...e));
      }
      destroy(...e) {
        (this.removeAll(...e),
          (this.items = Object.create(null)),
          (this._renderer = null),
          (this._onUnload = null));
      }
    }
