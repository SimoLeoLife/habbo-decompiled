// Extracted from HabboAirLauncher.deobf.js, line 110052.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/trade/requirements/rules/TradeRequirementRule.as
// Obfuscated name: _i481debb1da19a9

class a {
    static {
      n(this, "TradeRequirementRule");
    }
    static {
      Sat(this, "TradeRequirementRule");
    }
    _nodes;
    constructor(e) {
      this._nodes = e;
    }
    static readFromMessage(e) {
      let r = [],
        t = e.readInteger();
      for (let i = 0; i < t; i += 1) r.push(xn.readFromMessage(e));
      return new a(r);
    }
    get nodes() {
      return this._nodes;
    }
    addToComposer(e) {
      e.push(this._nodes.length);
      for (let r of this._nodes) r.addToComposer(e);
    }
    deepCopy() {
      let e = [];
      for (let r of this._nodes) e.push(r.deepCopy());
      return new a(e);
    }
  }
