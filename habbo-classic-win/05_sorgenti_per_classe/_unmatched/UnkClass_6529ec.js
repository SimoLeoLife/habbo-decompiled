// Extracted from HabboAirLauncher.deobf.js, line 111679.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6529ec20a10358

class {
    static {
      n(this, "UnkClass_6529ec");
    }
    static {
      est(this, "UnkClass_6529ec");
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
