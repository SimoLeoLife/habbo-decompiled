// Extracted from HabboAirLauncher.deobf.js, line 107900.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/incoming/userdefinedroomevents/class_3028.as
// Obfuscated name: _i830fb070bfb87a

class extends class_2396 {
    static {
      n(this, "class_3028");
    }
    static {
      yet(this, "class_3028");
    }
    _quantifierCode = 0;
    _r2448ac591a9170 = 0;
    var_3725 = !1;
    constructor(e) {
      super(e);
    }
    readDefinitionSpecifics(e) {
      this._quantifierCode = e.readInteger();
    }
    _r946f1591888dbb(e) {
      ((this._r2448ac591a9170 = e.readByte()), (this.var_3725 = e.readBoolean()));
    }
    get quantifierCode() {
      return this._quantifierCode;
    }
    set quantifierCode(e) {
      this._quantifierCode = e;
    }
    get quantifierType() {
      return this._r2448ac591a9170;
    }
    get isInvert() {
      return this.var_3725;
    }
    get _r81b758a563d02c() {
      return super._r81b758a563d02c || this.quantifierCode !== 0;
    }
  }
