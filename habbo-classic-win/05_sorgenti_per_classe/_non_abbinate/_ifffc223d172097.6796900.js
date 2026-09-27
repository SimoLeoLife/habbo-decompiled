// Estratto da HabboAirLauncher.deobf.js, riga 217697.

class {
    static {
      n(this, "_ifffc223d172097");
    }
    constructor(e) {
      this._gameManager = e;
      let r = this._gameManager?.communication;
      (r?._r2e106e2349a0b6(new class_3615(this._r275c7516b4845a)),
        r?._r2e106e2349a0b6(new class_3305(this._r275c7516b4845a)),
        r?._r2e106e2349a0b6(new _id00f038bc86c19(this._r275c7516b4845a)));
    }
    static {
      Lar(this, "_ifffc223d172097");
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
