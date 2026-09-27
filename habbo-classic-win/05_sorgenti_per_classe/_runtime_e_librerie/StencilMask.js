// Estratto da HabboAirLauncher.deobf.js, riga 7339.

class {
      static {
        n(this, "StencilMask");
      }
      constructor(e) {
        ((this.priority = 0), (this.pipe = "stencilMask"), e?.mask && this.init(e.mask));
      }
      init(e) {
        ((this.mask = e), (this.mask.includeInBuild = !1), (this.mask.measurable = !1));
      }
      reset() {
        this.mask !== null &&
          ((this.mask.measurable = !0), (this.mask.includeInBuild = !0), (this.mask = null));
      }
      addBounds(e, r) {
        addMaskBounds(this.mask, e, r);
      }
      addLocalBounds(e, r) {
        addMaskLocalBounds(this.mask, e, r);
      }
      containsPoint(e, r) {
        let t = this.mask;
        return r(t, e);
      }
      destroy() {
        this.reset();
      }
      static test(e) {
        return e instanceof Ii;
      }
    }
