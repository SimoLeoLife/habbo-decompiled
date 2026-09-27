// Extracted from HabboAirLauncher.deobf.js, line 95465.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _icefa1bd77eaad0

class {
    static {
      n(this, "UnkMessageParser_I_cefa1b");
    }
    static {
      sOr(this, "UnkMessageParser_I_cefa1b");
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
