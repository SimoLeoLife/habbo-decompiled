// Estratto da HabboAirLauncher.deobf.js, riga 351315.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/applications/PlaceholderNameSection.as
// Nome offuscato: _iefddc27b30a9da

class extends AbstractSectionPreset {
  static {
    n(this, "PlaceholderNameSection");
  }
  _name;
  _preview;
  var_122;
  var_3402 = "";
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this.var_3402 = r),
      (this._name = this.var_102._r178edc7e663bd7(new it("", 32, null, -1, "a-zA-Z_0-9 "))),
      (this._preview = this.var_102.createHtml(
        this.l("texts.placeholder_preview").replace(
          "#ffffaa",
          we.uintToHexColor(this.var_40._r7e92fef08f7bc0),
        ),
        new Sg(Se.MODE_MULTILINE, !0, 2),
      )),
      (this.var_122 = this.var_102.createSimpleListView(!0, [
        this._name,
        this._preview._r43cee6f3403ff1(this._preview.fontSize * 3),
      ])),
      this._name.addListener(this._r57a7c28f772638),
      this.initializeSection(e, this.var_122));
  }
  _r57a7c28f772638 = n((e) => {
    let r = this._name.text,
      t = e.split(" ").join("_").toLowerCase();
    r !== t && (this._name.text = t);
    let i = this._roomEvents.localization
      .getLocalizationWithParams(
        "wiredfurni.params.texts.placeholder_preview",
        "",
        "placeholder",
        `${this.var_3402}(${t.toLowerCase()})`,
      )
      .replace("#ffffaa", we.uintToHexColor(this.var_40._r7e92fef08f7bc0));
    this._preview.text = i;
  }, "_r57a7c28f772638");
  set placeholderName(e) {
    ((this._name.text = e), this._r57a7c28f772638(e));
  }
  get placeholderName() {
    return this._name.text.split(" ").join("_").toLowerCase();
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_122 = null),
      (this._name = null),
      (this._preview = null),
      (this.var_3402 = null));
  }
}
