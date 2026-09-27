// Estratto da HabboAirLauncher.deobf.js, riga 110084.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/trade/requirements/rules/TradeRequirementRulesDefinition.as
// Nome offuscato: _idfae257226e730

class a {
    static {
      n(this, "TradeRequirementRulesDefinition");
    }
    static {
      Lat(this, "TradeRequirementRulesDefinition");
    }
    _r190621eb09b85e;
    var_1524;
    constructor(e, r) {
      ((this.var_1524 = e), (this._r190621eb09b85e = r));
    }
    static readFromMessage(e) {
      let r = null,
        t = null;
      if (e.readBoolean()) {
        r = [];
        let i = e.readInteger();
        for (let s = 0; s < i; s += 1) r.push(J_.readFromMessage(e));
      }
      return (e.readBoolean() && (t = J_.readFromMessage(e)), new a(r, t));
    }
    get _r6f70d655857f72() {
      return this.var_1524;
    }
    get youGiveRule() {
      return this._r190621eb09b85e;
    }
    addToComposer(e) {
      if ((e.push(this.var_1524 !== null), this.var_1524 !== null)) {
        e.push(this.var_1524.length);
        for (let r of this.var_1524) r.addToComposer(e);
      }
      (e.push(this._r190621eb09b85e !== null),
        this._r190621eb09b85e !== null && this._r190621eb09b85e.addToComposer(e));
    }
    deepCopy() {
      let e = null,
        r = null;
      if (this.var_1524 !== null) {
        e = [];
        for (let t of this.var_1524) e.push(t.deepCopy());
      }
      return (this._r190621eb09b85e !== null && (r = this._r190621eb09b85e.deepCopy()), new a(e, r));
    }
  }
