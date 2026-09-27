// Extracted from HabboAirLauncher.deobf.js, line 110434.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/trade/requirements/rules/TradeRequirementRules.as
// Obfuscated name: _ia64b05a20ff5fc

class {
    static {
      n(this, "TradeRequirementRules");
    }
    static {
      fit(this, "TradeRequirementRules");
    }
    _r96d205b4862128;
    var_2466;
    var_5714;
    _type;
    constructor(e) {
      ((this.var_2466 = e0.readFromMessage(e)), (this._type = e.readInteger()));
      let r = 1,
        t = 1;
      (this._type === class_4343.var_5774
        ? (r = e.readInteger())
        : this._type === class_4343._rca36b8a1fa6523 && (t = e.readInteger()),
        (this.var_5714 = r),
        (this._r96d205b4862128 = t));
    }
    get _r6f70d655857f72() {
      return this.var_2466._r6f70d655857f72;
    }
    get youGiveRule() {
      return this.var_2466.youGiveRule;
    }
    get type() {
      return this._type;
    }
    get multiplier() {
      return this.var_5714;
    }
    get _r3a143a83eb1a1b() {
      return this._r96d205b4862128;
    }
  }
