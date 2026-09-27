// Estratto da HabboAirLauncher.deobf.js, riga 76274.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_2508.as
// Nome offuscato: _i82b17acf6262ad

class {
    static {
      n(this, "class_2508");
    }
    static {
      xpr(this, "class_2508");
    }
    var_4408;
    var_4834;
    var_971;
    _petFigureString;
    var_3865;
    _productCode;
    var_3700;
    constructor(e) {
      ((this.var_4408 = e.readShort()),
        (this.var_4834 = e.readString()),
        (this.var_971 = e.readInteger()),
        this.readAdditionalParams(e),
        (this._petFigureString = e.readString()),
        (this.var_3865 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_3865.push(e.readInteger());
      ((this._productCode = e.readString()), (this.var_3700 = e.readString()));
    }
    get productTypeId() {
      return this.var_4408;
    }
    get itemTypeId() {
      return this.var_4834;
    }
    get score() {
      return this.var_971;
    }
    get _r48777043299a0c() {
      return this._petFigureString;
    }
    get _r465eb48d84170b() {
      return this.var_3865;
    }
    get _raeb033db5aa083() {
      return this._productCode;
    }
    get rarity() {
      return this.var_3700;
    }
    readAdditionalParams(e) {}
  }
