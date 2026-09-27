// Extracted from HabboAirLauncher.deobf.js, line 78581.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i67ec3c4cd980f8

class {
    static {
      n(this, "UnkClass_67ec3c");
    }
    static {
      Zvr(this, "UnkClass_67ec3c");
    }
    avatarId;
    _r0cc16a9a7a5c7d;
    _r493001f1ed1270;
    _ra7e2d3fcc5ef21;
    _r1323b055608a37;
    _r3c5ec5f2cb2509;
    _r1d581899499554;
    _r3cf022f8dd01d7 = "";
    realName;
    constructor(e) {
      ((this.avatarId = e.readInteger()),
        (this._r0cc16a9a7a5c7d = e.readString()),
        (this._r493001f1ed1270 = e.readString()),
        (this._ra7e2d3fcc5ef21 = e.readBoolean()),
        (this._r1323b055608a37 = e.readBoolean()),
        e.readString(),
        (this._r3c5ec5f2cb2509 = e.readInteger()),
        (this._r1d581899499554 = e.readString()),
        (this.realName = e.readString()));
    }
  }
