// Extracted from HabboAirLauncher.deobf.js, line 112594.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i349c042adc961f

class {
    static {
      n(this, "UnkMessageParser_II_349c04");
    }
    static {
      Cot(this, "UnkMessageParser_II_349c04");
    }
    giverUserId = -1;
    handItemType = 0;
    flush() {
      return ((this.giverUserId = -1), (this.handItemType = 0), !0);
    }
    parse(e) {
      return ((this.giverUserId = e.readInteger()), (this.handItemType = e.readInteger()), !0);
    }
  }
