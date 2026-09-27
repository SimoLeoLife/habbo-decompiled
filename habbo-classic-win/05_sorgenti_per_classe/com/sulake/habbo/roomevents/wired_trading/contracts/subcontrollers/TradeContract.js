// Extracted from HabboAirLauncher.deobf.js, line 373888.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/contracts/subcontrollers/TradeContract.as
// Obfuscated name: _i26498b7676dd41

class extends AbstractContract {
  static {
    n(this, "TradeContract");
  }
  var_1852;
  createRuleEditorPreset;
  constructor(e, r) {
    (super(e, r),
      (this.var_1852 = r._rda46c8d1dccbc7(
        e.addEditContractElement.onEdit,
        e.addEditContractElement.onAdd,
      )));
    let t = r.createSection("${wiredcontracts.payment_requirements}", this.var_1852);
    this.createRuleEditorPreset = r._r318831a25a6133(
      "${wiredcontracts.reward_rule}",
      e.addEditContractElement.onEdit,
      e.addEditContractElement.onAdd,
    );
    let i = r.createSection("${wiredcontracts.reward_requirements}", this.createRuleEditorPreset);
    ((this.framePreset = r._r2c9ac233cf1a70([t, i, this._r43e1962e8d351e], this._rf4d9b06810c6a7)),
      this.framePreset.resizeToWidth(262),
      (this.framePreset.title = "${wiredcontracts.trade_contract.title}"));
  }
  _r5219b66c580835() {
    return new e0(this.var_1852._r14b03f12f49678(), this.createRuleEditorPreset._r85539ae3d0f4bc());
  }
  show(e) {
    e._rfb746ff09ca5d8 !== this._rfb746ff09ca5d8() ||
      e.definition?._r6f70d655857f72 == null ||
      e.definition.youGiveRule == null ||
      (super.show(e),
      (this.var_1852.rules = e.definition._r6f70d655857f72),
      (this.createRuleEditorPreset.rule = e.definition.youGiveRule),
      this.showFrame());
  }
  _rfb746ff09ca5d8() {
    return Gf._rcf8d21c9b3a6bd;
  }
  dispose() {
    this.disposed || ((this.var_1852 = null), (this.createRuleEditorPreset = null), super.dispose());
  }
}
