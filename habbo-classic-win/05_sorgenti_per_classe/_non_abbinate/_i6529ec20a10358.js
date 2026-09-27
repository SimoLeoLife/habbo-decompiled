// Estratto da HabboAirLauncher.deobf.js, riga 111679.

class {
    static {
      n(this, "_i6529ec20a10358");
    }
    static {
      est(this, "_i6529ec20a10358");
    }
    id;
    color;
    constructor(e) {
      ((this.id = e.readInteger()), (this.color = Number.parseInt(e.readString(), 16) >>> 0));
    }
    get red() {
      return (this.color >> 16) & 255;
    }
    get green() {
      return (this.color >> 8) & 255;
    }
    get blue() {
      return this.color & 255;
    }
  }
