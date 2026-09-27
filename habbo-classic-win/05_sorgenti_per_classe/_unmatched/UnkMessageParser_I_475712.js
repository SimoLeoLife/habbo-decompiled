// Extracted from HabboAirLauncher.deobf.js, line 104086.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4757128457b59d

class {
    static {
      n(this, "UnkMessageParser_I_475712");
    }
    static {
      CKr(this, "UnkMessageParser_I_475712");
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
