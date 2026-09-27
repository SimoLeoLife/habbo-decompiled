// Extracted from HabboAirLauncher.deobf.js, line 105575.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic139991eac2c36

class {
    static {
      n(this, "UnkMessageParser_I_c13999");
    }
    static {
      LZr(this, "UnkMessageParser_I_c13999");
    }
    _flatId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), !0);
    }
    get flatId() {
      return this._flatId;
    }
  }
