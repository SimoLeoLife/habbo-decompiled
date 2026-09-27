// Estratto da HabboAirLauncher.deobf.js, riga 99039.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_51/PrizeMessageData.as
// Nome offuscato: _iba5fe10c4cffeb

class {
    static {
      n(this, "PrizeMessageData");
    }
    static {
      bGr(this, "PrizeMessageData");
    }
    var_3990 = 1;
    _productCode;
    _ra00c321ec70e69 = [];
    var_3394 = "";
    var_3967 = 0;
    constructor(e) {
      if (
        ((this._productCode = e.readString()),
        (this.var_3990 = e.readInteger()),
        !this.isDeal)
      )
        ((this.var_3394 = e.readString()), (this.var_3967 = e.readInteger()));
      else for (let r = 0; r < this.var_3990; r++) this._ra00c321ec70e69.push(new PrizeMessageSubProduct(e));
    }
    get productItemType() {
      return this.var_3394;
    }
    get productItemTypeId() {
      return this.var_3967;
    }
    get isDeal() {
      return this.var_3990 > 1;
    }
    get _ref140d0201ea74() {
      return this._ra00c321ec70e69;
    }
    get _raeb033db5aa083() {
      return this._productCode;
    }
  }
