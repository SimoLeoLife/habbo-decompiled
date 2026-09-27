// Estratto da HabboAirLauncher.deobf.js, riga 7275.

class {
      static {
        n(this, "AlphaMask");
      }
      constructor(e) {
        ((this.priority = 0), (this.inverse = !1), (this.pipe = "alphaMask"), e?.mask && this.init(e.mask));
      }
      init(e) {
        ((this.mask = e),
          (this.renderMaskToTexture = !(e instanceof Jt)),
          (this.mask.renderable = this.renderMaskToTexture),
          (this.mask.includeInBuild = !this.renderMaskToTexture),
          (this.mask.measurable = !1));
      }
      reset() {
        this.mask !== null && ((this.mask.measurable = !0), (this.mask = null));
      }
      addBounds(e, r) {
        this.inverse || addMaskBounds(this.mask, e, r);
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
        return e instanceof Jt;
      }
    }
