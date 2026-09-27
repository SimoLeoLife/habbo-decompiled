// Estratto da HabboAirLauncher.deobf.js, riga 110473.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/trade/requirements/TradeRequirement.as
// Nome offuscato: _i08d5ca8b19fc3c

class a {
    static {
      n(this, "TradeRequirement");
    }
    static {
      bit(this, "TradeRequirement");
    }
    static var_5775 = 2;
    static var_5789 = 0;
    static var_5767 = 1;
    static var_3917 = 4;
    var_4693;
    _rules;
    _type;
    var_5426;
    constructor(e) {
      ((this._type = e.readInteger()),
        (this.var_5426 = e.readString()),
        (this.var_4693 = e.readString()),
        (this._rules = this._type === a.var_3917 ? new TradeRequirementRules(e) : null));
    }
    get type() {
      return this._type;
    }
    get _r5c478e496e27d3() {
      return this.var_5426;
    }
    get _rc4b0045dac224f() {
      return this.var_4693;
    }
    get rules() {
      return this._rules;
    }
    isPaymentOnly() {
      return this._type === a.var_3917
        ? this._rules?.youGiveRule == null ||
            this._rules.youGiveRule.nodes.length === 0
        : !0;
    }
  }
