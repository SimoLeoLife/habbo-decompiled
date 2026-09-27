// Estratto da HabboAirLauncher.deobf.js, riga 88515.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_2740.as
// Nome offuscato: _idac8ceb559b3dd

class {
    static {
      n(this, "class_2740");
    }
    static {
      kBr(this, "class_2740");
    }
    var_5121 = 0;
    _requesterName = "";
    var_5201 = "";
    var_5332 = 0;
    _guideName = "";
    var_4836 = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_5121 = e.readInteger()),
        (this._requesterName = e.readString()),
        (this.var_5201 = e.readString()),
        (this.var_5332 = e.readInteger()),
        (this._guideName = e.readString()),
        (this.var_4836 = e.readString()),
        !0
      );
    }
    get requesterUserId() {
      return this.var_5121;
    }
    get _r19234559776703() {
      return this._requesterName;
    }
    get _r92ee533e1c3c13() {
      return this.var_5201;
    }
    get _rcd57c4e33d2e39() {
      return this.var_5332;
    }
    get guideName() {
      return this._guideName;
    }
    get _reea2dd8bfffc6d() {
      return this.var_4836;
    }
  }
