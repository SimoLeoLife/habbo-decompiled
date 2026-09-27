// Estratto da HabboAirLauncher.deobf.js, riga 7315.

class {
      static {
        n(this, "ColorMask");
      }
      constructor(e) {
        ((this.priority = 0), (this.pipe = "colorMask"), e?.mask && this.init(e.mask));
      }
      init(e) {
        this.mask = e;
      }
      destroy() {}
      static test(e) {
        return typeof e == "number";
      }
    }
