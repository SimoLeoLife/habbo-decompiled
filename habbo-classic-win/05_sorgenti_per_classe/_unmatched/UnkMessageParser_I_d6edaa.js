// Extracted from HabboAirLauncher.deobf.js, line 104122.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id6edaadc893d80

class {
    static {
      n(this, "UnkMessageParser_I_d6edaa");
    }
    static {
      BKr(this, "UnkMessageParser_I_d6edaa");
    }
    _flatId = 0;
    get flatId() {
      return this._flatId;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), !0);
    }
  }
