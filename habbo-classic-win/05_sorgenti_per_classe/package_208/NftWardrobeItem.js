// Estratto da HabboAirLauncher.deobf.js, riga 96266.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_208/NftWardrobeItem.as
// Nome offuscato: _ib5b625d6c305a9

class {
    static {
      n(this, "NftWardrobeItem");
    }
    static {
      wFr(this, "NftWardrobeItem");
    }
    _id;
    var_106;
    _figureString;
    var_5062;
    _contractKey;
    constructor(e) {
      ((this._id = e.readString()),
        (this._figureString = e.readString()),
        (this.var_106 = e.readString()),
        (this.var_5062 = e.readString()),
        (this._contractKey = e.readString()));
    }
    get id() {
      return this._id;
    }
    get gender() {
      return this.var_106;
    }
    get figureString() {
      return this._figureString;
    }
    get _re76aca2629c84c() {
      return this._contractKey;
    }
    get _r6e0cb14ba16999() {
      return this.var_5062;
    }
  }
