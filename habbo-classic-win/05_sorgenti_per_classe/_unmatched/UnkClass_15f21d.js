// Extracted from HabboAirLauncher.deobf.js, line 111588.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i15f21debe6a435

class a {
    static {
      n(this, "UnkClass_15f21d");
    }
    static {
      Qnt(this, "UnkClass_15f21d");
    }
    static _r7806e0cc3ec7cb = 0;
    static _recc96882026309 = 1;
    static _racef5df85e9be4 = 2;
    static _r8f7690f592bbc6 = 3;
    static _rca30bbf94eb7b2 = 4;
    _type;
    userId;
    userName;
    figure;
    memberSince;
    constructor(e) {
      ((this._type = e.readInteger()),
        (this.userId = e.readInteger()),
        (this.userName = e.readString()),
        (this.figure = e.readString()),
        (this.memberSince = e.readString()));
    }
    get admin() {
      return this._type === a._recc96882026309;
    }
    get owner() {
      return this._type === a._r7806e0cc3ec7cb;
    }
    get member() {
      return this._type !== a._r8f7690f592bbc6;
    }
    get blocked() {
      return this._type === a._rca30bbf94eb7b2;
    }
  }
