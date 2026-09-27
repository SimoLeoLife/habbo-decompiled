// Extracted from HabboAirLauncher.deobf.js, line 74343.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_5/class_2157.as
// Obfuscated name: _ia02c93ec36a7e1

class a {
    static {
      n(this, "class_2157");
    }
    static {
      a9r(this, "class_2157");
    }
    static const_219 = 0;
    static const_480 = 2;
    static const_160 = 1;
    position = 0;
    itemName = "";
    itemPromoImage = "";
    type = 0;
    _r3ef0fc613bba28 = "";
    _raeb033db5aa083 = "";
    _r01d6d09c7bea95 = 0;
    _expirationTime = 0;
    constructor(e) {
      if (e == null) return;
      switch (
        ((this.position = e.readInteger()),
        (this.itemName = e.readString()),
        (this.itemPromoImage = e.readString()),
        (this.type = e.readInteger()),
        this.type)
      ) {
        case a.const_219:
          this._r3ef0fc613bba28 = e.readString();
          break;
        case a.const_480:
          this._raeb033db5aa083 = e.readString();
          break;
        case a.const_160:
          this._r01d6d09c7bea95 = e.readInteger();
          break;
      }
      let r = e.readInteger();
      this._expirationTime = r > 0 ? r * 1e3 + _ia411d8d8194a3a() : 0;
    }
    get _rca6e9deaadb268() {
      return this._expirationTime > 0;
    }
    get secondsToExpiration() {
      return this._expirationTime - _ia411d8d8194a3a();
    }
  }
