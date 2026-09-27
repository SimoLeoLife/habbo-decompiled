// Extracted from HabboAirLauncher.deobf.js, line 217697.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifffc223d172097

class {
    static {
      n(this, "UnkClass_fffc22_______");
    }
    constructor(e) {
      this._gameManager = e;
      let r = this._gameManager?.communication;
      (r?._r2e106e2349a0b6(new class_3615(this._r275c7516b4845a)),
        r?._r2e106e2349a0b6(new class_3305(this._r275c7516b4845a)),
        r?._r2e106e2349a0b6(new UnkMessageEvent_d00f03(this._r275c7516b4845a)));
    }
    static {
      Lar(this, "UnkClass_fffc22_______");
    }
    var_1271 = !1;
    dispose() {
      ((this._gameManager = null), (this.var_1271 = !0));
    }
    get disposed() {
      return this.var_1271;
    }
    _r275c7516b4845a = Lar((e) => {
      this._gameManager != null && (this._gameManager.hotelClosed = !0);
    }, "_r275c7516b4845a");
  }
