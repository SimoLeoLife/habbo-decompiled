// Extracted from HabboAirLauncher.deobf.js, line 351266.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/applications/ItemTypeSelectionSection.as
// Obfuscated name: _i0470c12df453ab

class extends AbstractSectionPreset {
  static {
    n(this, "ItemTypeSelectionSection");
  }
  var_1191;
  var_2033;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    ((this.var_1191 = this.var_102._r0879e4ec3f0bd0()),
      (this.var_2033 = this.var_102._rb18365443e97a2()));
    let e = new Hr();
    (e.addHeaderOption(this.var_2033._r16de5f519fc4ea()),
      this.initializeSection("${wiredcontracts.element.itemtype.selection}", this.var_1191, e),
      this.var_1191.addListener(this._r44536aaa1fef2f));
  }
  _r44536aaa1fef2f = n((e) => {
    this.var_2033.item = e;
  }, "_r44536aaa1fef2f");
  get selectedItem() {
    return this.var_1191.selectedItem;
  }
  get var_868() {
    return this.var_1191.var_868;
  }
  resetInteractions() {
    this.var_1191.resetInteractions();
  }
  set selectedItem(e) {
    this.var_1191.selectedItem = e;
  }
  dispose() {
    this.disposed || (super.dispose(), (this.var_1191 = null), (this.var_2033 = null));
  }
}
