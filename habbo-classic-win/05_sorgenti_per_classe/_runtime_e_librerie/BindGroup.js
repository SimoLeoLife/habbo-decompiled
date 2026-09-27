// Estratto da HabboAirLauncher.deobf.js, riga 8310.

class {
      static {
        n(this, "BindGroup");
      }
      constructor(e) {
        ((this.resources = Object.create(null)), (this._dirty = !0));
        let r = 0;
        for (let t in e) {
          let i = e[t];
          this.setResource(i, r++);
        }
        this._updateKey();
      }
      _updateKey() {
        if (!this._dirty) return;
        this._dirty = !1;
        let e = [],
          r = 0;
        for (let t in this.resources) e[r++] = this.resources[t]._resourceId;
        this._key = e.join("|");
      }
      setResource(e, r) {
        let t = this.resources[r];
        e !== t &&
          (t?.off?.("change", this.onResourceChange, this),
          e.on?.("change", this.onResourceChange, this),
          (this.resources[r] = e),
          (this._dirty = !0));
      }
      getResource(e) {
        return this.resources[e];
      }
      _touch(e, r) {
        let t = this.resources;
        for (let i in t) ((t[i]._gcLastUsed = e), (t[i]._touched = r));
      }
      destroy() {
        let e = this.resources;
        for (let r in e) e[r]?.off?.("change", this.onResourceChange, this);
        this.resources = null;
      }
      onResourceChange(e) {
        ((this._dirty = !0), e.destroyed ? this.destroy() : this._updateKey());
      }
    }
