// Estratto da HabboAirLauncher.deobf.js, riga 373802.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/contracts/subcontrollers/RewardContract.as
// Nome offuscato: _ie1bf70fefc3dd0

class extends AbstractContract {
  static {
    n(this, "RewardContract");
  }
  createRuleEditorPreset;
  var_3073;
  _rb19a0a34767db6;
  var_3350;
  _showByDefault;
  constructor(e, r) {
    (super(e, r),
      (this.createRuleEditorPreset = r._r318831a25a6133(
        "${wiredcontracts.reward_rule}",
        e.addEditContractElement.onEdit,
        e.addEditContractElement.onAdd,
        null,
        this._rfae6643aef1331,
      )));
    let t = r.createSection("${wiredcontracts.reward_requirements}", this.createRuleEditorPreset);
    ((this.var_3350 = r._r1cb85c1e1927d4(
      new TextAreaParam(52, -1, 3, -1, 200, "", "${wiredcontracts.reward_contract.reward_popup.text.tooltip}"),
    )),
      (this._showByDefault = r.createCheckboxGroup([
        new CheckboxOptionParam("${wiredcontracts.reward_contract.reward_popup.show_by_default}"),
      ])));
    let i = r.createSimpleListView(!0, [this.var_3350, this._showByDefault]),
      s = r.createSection("${wiredcontracts.reward_contract.reward_popup}", i),
      o = [
        new ExpandableDropdownOption(11, "${wiredfurni.params.earnings_category.11}"),
        new ExpandableDropdownOption(13, "${wiredfurni.params.earnings_category.13}"),
      ];
    ((this.var_3073 = r.createDropdown(
      new DropdownParam("${wiredcontracts.reward_contract.earnings_category}", o),
    )),
      (this._rb19a0a34767db6 = r.createSection(
        "${wiredcontracts.reward_contract.earnings_category}",
        this.var_3073,
        Hr.COLLAPSED,
      )),
      (this.framePreset = r._r2c9ac233cf1a70(
        [t, s, this._rb19a0a34767db6, this._r43e1962e8d351e],
        this._rf4d9b06810c6a7,
      )),
      this.framePreset.resizeToWidth(262),
      (this.framePreset.title = "${wiredcontracts.reward_contract.title}"));
  }
  _rfae6643aef1331 = n(() => {
    this._rb19a0a34767db6.disabled = !this.hasCreditNode();
  }, "_rfae6643aef1331");
  hasCreditNode() {
    let e = this.createRuleEditorPreset._r85539ae3d0f4bc();
    for (let r of e.nodes) if (r.type === xn.TYPE_COIN) return !0;
    return !1;
  }
  _r5219b66c580835() {
    return new e0(null, this.createRuleEditorPreset._r85539ae3d0f4bc());
  }
  show(e) {
    e._rfb746ff09ca5d8 !== this._rfb746ff09ca5d8() ||
      e.definition?.youGiveRule == null ||
      (super.show(e),
      (this.createRuleEditorPreset.rule = e.definition.youGiveRule),
      (this._showByDefault.get(0).selected = e._r4ca4d5562c4790),
      (this.var_3073.selectedId = e.rewardCategory),
      (this.var_3350.text = e.rewardText ?? ""),
      this.showFrame());
  }
  addContentsToComposer(e) {
    (super.addContentsToComposer(e),
      e.push(new Short(this.var_3073.selectedId)),
      e.push(this._showByDefault.get(0).selected),
      e.push(this.var_3350.text));
  }
  _rfb746ff09ca5d8() {
    return Gf.const_902;
  }
  dispose() {
    this.disposed ||
      ((this.createRuleEditorPreset = null),
      (this.var_3073 = null),
      (this._rb19a0a34767db6 = null),
      (this.var_3350 = null),
      (this._showByDefault = null),
      super.dispose());
  }
}
