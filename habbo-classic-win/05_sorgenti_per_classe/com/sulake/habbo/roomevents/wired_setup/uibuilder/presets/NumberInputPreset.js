// Extracted from HabboAirLauncher.deobf.js, line 346163.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/NumberInputPreset.as
// Obfuscated name: _i7a1832ad618dde

class a extends WiredUIPreset {
  static {
    n(this, "NumberInputPreset");
  }
  var_457;
  var_73;
  var_45;
  _r7ad0e8d2c1f121 = 0;
  _r12d68cf1a8e9e1 = "";
  _min = 0;
  _max = 0;
  var_707 = 0;
  var_1985 = !1;
  Exception = 0;
  _r96d7866415721a = 0;
  _r445383def8d447 = null;
  _r66526b0d5ff393 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this.var_457 = this.var_40.createTextInputView()),
      this.var_457.enableLookupCache(),
      (this.var_73 = this.var_457.findChildByName("field")),
      (this.var_45 = e),
      (this.Exception = this.var_457.width - this.var_73.width),
      e.width >= 0 && (this.var_457.width = e.width + this.Exception),
      (this.var_73.restrict = `0123456789${e.min < 0 ? "\\-" : ""}${e.precision > 0 ? ",." : ""}${e._r063d8b29dca86e ? "xba-fA-F" : ""}`),
      (this.var_1985 = e.endsWithFive),
      (this._min = this.var_1985 ? e.min * 5 : e.min),
      (this._max = this.var_1985 ? e.max * 5 : e.max),
      (this.var_707 = e.precision),
      e.tooltip != null && (this.var_73.toolTipCaption = e.tooltip),
      this._rfaf140befdcf55(),
      this.setValue(e.initialValue),
      this.var_73.addEventListener(y.WINDOW_EVENT_CHANGE, this._r91dd5015e6f9bf));
  }
  set _r53e08e0209a3cd(e) {
    this._r445383def8d447 = e;
  }
  displayValue(e) {
    let r = e.toString();
    if (this.var_707 > 0) {
      for (; r.length < this.var_707 + 1;) r = `0${r}`;
      for (
        r = `${r.substring(0, r.length - this.var_707)}.${r.substring(r.length - this.var_707)}`;
        r.endsWith("0");
      )
        r = r.substring(0, r.length - 1);
      r.endsWith(".") && (r = r.substring(0, r.length - 1));
    }
    if (this.var_707 < 0) for (let t = 0; t > this.var_707; t -= 1) r += "0";
    return r;
  }
  setValue(e) {
    ((this._r66526b0d5ff393 = !0),
      (this._r7ad0e8d2c1f121 = e),
      (this._r12d68cf1a8e9e1 = this.displayValue(this.var_1985 ? e * 5 : e)),
      (this.var_73.text = this._r12d68cf1a8e9e1),
      this._r532b5c4a44c83b(null),
      (this._r66526b0d5ff393 = !1));
  }
  set value(e) {
    this.setValue(e);
  }
  reset() {
    this.setValue(this.var_45.initialValue);
  }
  static swapChars(e, r, t) {
    let i = e.split(""),
      s = i[r];
    return ((i[r] = i[t]), (i[t] = s), i.join(""));
  }
  _r91dd5015e6f9bf = n((...e) => {
    if (this._r66526b0d5ff393) return;
    let r = this.parseDisplayValue(this.var_73.text);
    if (Number.isNaN(r)) {
      this._r532b5c4a44c83b(this.invalidNumberMessage());
      return;
    }
    let t = r | 0;
    if (t < this._min || t > this._max) {
      this._r532b5c4a44c83b(this.rangeValidationMessage());
      return;
    }
    (this._r532b5c4a44c83b(null),
      (this._r12d68cf1a8e9e1 = this.var_73.text),
      this._r1e9df4ad2a56a3(this.var_1985 ? (t / 5) | 0 : t));
  }, "_r91dd5015e6f9bf");
  parseDisplayValue(e) {
    if (e === "" || (e === "-" && this.var_45.min < 0)) return NaN;
    let r = e.charAt(e.length - 1);
    if (this.var_707 === 0 && this.var_1985 && r !== "0" && r !== "5") return NaN;
    if (this.var_45._r063d8b29dca86e && (e.indexOf("0b") === 0 || e.indexOf("0x") === 0))
      return e.indexOf("0b") === 0 ? Number.parseInt(e.substring(2), 2) : Number.parseInt(e.substring(2), 16);
    let t = e.replace(",", ".");
    if (this.var_707 > 0) {
      if ((t.endsWith(".") && (t = t.substring(0, t.length - 1)), !/^-?([0-9]*[.])?[0-9]+$/.test(t)))
        return NaN;
      for (let s = 0; s < this.var_707; s += 1) {
        let o = t.indexOf(".");
        o === -1
          ? (t += "0")
          : ((t = a.swapChars(t, o, o + 1)), t.endsWith(".") && (t = t.substring(0, t.length - 1)));
      }
    } else if (this.var_707 < 0)
      for (let i = 0; i > this.var_707 && !(t === "0" || t === "-0" || t === ""); i -= 1)
        if (t.endsWith("0")) t = t.substring(0, t.length - 1);
        else return NaN;
    return this.var_1985 && !t.endsWith("0") && !t.endsWith("5")
      ? NaN
      : a.isValidInt(t)
        ? Number(t) | 0
        : NaN;
  }
  static isValidInt(e) {
    return /^-?\d+$/.test(e);
  }
  _r1e9df4ad2a56a3(e) {
    ((this._r7ad0e8d2c1f121 = e), this._r445383def8d447?.(e));
  }
  _rfaf140befdcf55() {
    this._r96d7866415721a = this.var_457.color;
  }
  _r532b5c4a44c83b(e) {
    let r = e != null && e.length > 0;
    this.errorText == null ||
      this.warningDisplay == null ||
      (r
        ? ((this.var_457.color = this.var_40._rd0446e3f3ad08b),
          (this.errorText.text = e),
          (this.warningDisplay.visible = !0))
        : ((this.var_457.color = this._r96d7866415721a), (this.warningDisplay.visible = !1)));
  }
  invalidNumberMessage() {
    return this.localizations.getLocalization("wiredfurni.params.number_input.invalid", "Number is invalid");
  }
  rangeValidationMessage() {
    let e = this._min !== -2147483648,
      r = this._max !== 2147483647;
    return e && r
      ? this.localizations.getLocalizationWithParams(
          "wiredfurni.params.number_input.between",
          "Number needs to be between %min% and %max%",
          "min",
          this.displayValue(this._min),
          "max",
          this.displayValue(this._max),
        )
      : e
        ? this.localizations.getLocalizationWithParams(
            "wiredfurni.params.number_input.min",
            "Number needs to be %min% or higher",
            "min",
            this.displayValue(this._min),
          )
        : r
          ? this.localizations.getLocalizationWithParams(
              "wiredfurni.params.number_input.max",
              "Number needs to be %max% or lower",
              "max",
              this.displayValue(this._max),
            )
          : this.invalidNumberMessage();
  }
  get warningDisplay() {
    return this.var_457.findChildByName("warning_display");
  }
  get errorText() {
    return this.var_457.findChildByName("error_text");
  }
  get value() {
    return this._r7ad0e8d2c1f121;
  }
  get number() {
    return Number(this._r12d68cf1a8e9e1);
  }
  hasStaticWidth() {
    return this.var_45.width >= 0;
  }
  get staticWidth() {
    if (this.var_45.width >= 0) return this.var_45.width + this.Exception;
    throw new Error("Number input with -1 width has no static width");
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
    let r = this.var_45.width >= 0 ? this.var_45.width + this.Exception : e;
    this.var_457.width = r;
  }
  get window() {
    return this.var_457;
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this.var_457.dispose(),
      (this.var_457 = null),
      (this.var_45 = null),
      (this._r445383def8d447 = null));
  }
}
