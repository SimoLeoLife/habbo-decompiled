// Extracted from HabboAirLauncher.deobf.js, line 350870.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/SliderSection.as
// Obfuscated name: _i4734d8a125de31

class extends AbstractSectionPreset {
  static {
    n(this, "SliderSection");
  }
  static CONVERTER_ECHO = new class_4181();
  static CONVERTER_PULSES = new SliderValuePulses();
  var_1007;
  var_3739;
  _localizationKey = "";
  _r49d3f5363c84a2 = "";
  var_1181 = null;
  _r66526b0d5ff393 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i = 0, s = 1, o = 0, d = !0, c = null) {
    ((this.var_3739 = t),
      (this._localizationKey = e),
      (this._r49d3f5363c84a2 = r),
      (this.var_1007 = this.var_102._r5805d92f5d7823(i, s, o)),
      d &&
        (!c || c._r5dcacbb0f4a4c3 == null) &&
        ((this.var_1181 = this.var_102.createNumberInput(
          new NumberInputParam(0, i, s, 40, t.precision, t.endsWithFive),
        )),
        (this.var_1181._r53e08e0209a3cd = this._r81a66ba3923cb8),
        c == null && (c = new Hr()),
        (c._r5dcacbb0f4a4c3 = this.var_1181),
        (c._r176ecc19700a82 = this.var_40._r67711c14f11b19)),
      this.initializeSection(
        this._roomEvents.localization.getLocalization(e, e),
        this.var_1007,
        c,
      ),
      d || this.updateName(),
      this.var_1007.addEventListener(M._ra3d93f66ba77c2, this._r78140478f191cc));
  }
  _r81a66ba3923cb8 = n((e) => {
    this._r66526b0d5ff393 ||
      ((this._r66526b0d5ff393 = !0), (this.var_1007.value = e), (this._r66526b0d5ff393 = !1));
  }, "_r81a66ba3923cb8");
  _r78140478f191cc = n((e) => {
    this._r66526b0d5ff393 ||
      (this.var_1181 != null
        ? ((this._r66526b0d5ff393 = !0),
          (this.var_1181.value = this.var_1007.value),
          (this._r66526b0d5ff393 = !1))
        : this.updateName());
  }, "_r78140478f191cc");
  updateName() {
    this.sectionTitle = this.localizations.getLocalizationWithParams(
      this._localizationKey,
      "",
      this._r49d3f5363c84a2,
      this.var_3739.toString(this.value),
    );
  }
  get value() {
    return this.var_1007.value;
  }
  set value(e) {
    ((this._r66526b0d5ff393 = !0),
      (this.var_1007.value = e),
      this.var_1181 != null && (this.var_1181.value = e),
      this.updateName(),
      (this._r66526b0d5ff393 = !1));
  }
  addEventListener(e, r) {
    this.var_1007.addEventListener(e, r);
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_1007 = null),
      (this.var_3739 = null),
      (this.var_1181 = null));
  }
}
