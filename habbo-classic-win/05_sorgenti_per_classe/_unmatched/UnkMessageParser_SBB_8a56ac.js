// Extracted from HabboAirLauncher.deobf.js, line 111351.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8a56acf458abaa

class {
    static {
      n(this, "UnkMessageParser_SBB_8a56ac");
    }
    static {
      Mnt(this, "UnkMessageParser_SBB_8a56ac");
    }
    email = "";
    _rc18b0feae00674 = !1;
    _reeba4d1cb720d9 = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.email = e.readString()),
        (this._rc18b0feae00674 = e.readBoolean()),
        (this._reeba4d1cb720d9 = e.readBoolean()),
        !0
      );
    }
  }
