// Extracted from HabboAirLauncher.deobf.js, line 343739.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/purse/indicators/SeasonalCurrencyIndicator.as
// Obfuscated name: _ia0b696a4f4206b

class a extends kg {
  static {
    n(this, "SeasonalCurrencyIndicator");
  }
  static BG_COLOR_LIGHT = 4286084205;
  static BG_COLOR_DARK = 4283781966;
  _catalog;
  var_4143 = -1;
  _r0451d2f58daad1;
  _toolbar;
  constructor(e, r, t, i, s, o, d) {
    (super(r, t),
      (this._toolbar = e),
      (this._catalog = i),
      (this._r0451d2f58daad1 = o),
      (this._r49d167ac2cb5e2 = a.BG_COLOR_LIGHT),
      (this._r761b35156780ed = a.BG_COLOR_DARK),
      (this.textElementName = "amount"),
      (this.amountZeroText = s.getLocalization("purse.snowflakes.zero.amount.text", "Info")),
      this.createWindow("purse_indicator_seasonal_xml", null),
      this.setAmount(0),
      e.extensionView?._ra96f07968c4ed0(this.attachExtension, this.window, d),
      this.registerUpdateEvents(i.events),
      this.initializeCurrencyLayouts());
  }
  get _rdcf400e073e0d8() {
    return this._r0451d2f58daad1;
  }
  registerUpdateEvents(e) {
    e?.addEventListener?.(Mo.ACTIVITY_POINT_BALANCE, this._r100bf6283d85e5);
  }
  _r924c497b99bcc8(e) {
    this._catalog?.openCatalogPage(this.catalogPageName);
  }
  _r100bf6283d85e5(e) {
    e.activityPointType === this._rdcf400e073e0d8 &&
      (this.setAmount(e.balance),
      this.var_4143 !== -1 && this.animateChange(this.var_4143, e.balance),
      (this.var_4143 = e.balance));
  }
  setAmount(e, r = -1) {
    let t = e.toString();
    (e === 0 ? ((t = this.amountZeroText ?? "Info"), this.setTextUnderline(!0)) : this.setTextUnderline(!1),
      this.setText(t));
  }
  initializeCurrencyLayouts() {
    if (this._toolbar == null || this._catalog == null) return;
    let e = this._rdcf400e073e0d8,
      r = this.window.findChildByName("seasonal_icon");
    r != null && ((r.style = et.getIconStyleFor(e, this._toolbar, !0)), r.fitToSize());
    let t = this.window.findChildByName("seasonal_name");
    t != null &&
      ((t.text = this._catalog.getActivityPointName(e)), (t.textColor = this.currencyTextColor));
    let i = this.window.findChildByName("seasonal_bg");
    i != null && (i.color = this.currencyBackgroundColor);
    let s = this.window.findChildByName("change_overlay");
    s != null && (s.color = this.currencyBackgroundColor);
  }
  get attachExtension() {
    return `${ToolbarDisplayExtensionIds.const_1262}_${this._r0451d2f58daad1}`;
  }
  get seasonalCurrencyId() {
    return this._toolbar?.getProperty(`seasonalcurrency.id.${this._rdcf400e073e0d8}`) ?? "";
  }
  get catalogPageName() {
    return this._toolbar?.getProperty("seasonalcurrencyindicator.page") ?? "";
  }
  get currencyColor() {
    return this._toolbar?.getProperty(`seasonalcurrency.${this.seasonalCurrencyId}.color`) ?? "";
  }
  get currencyBackgroundColor() {
    return qn.hexToUint(
      this._toolbar?.getProperty(`seasonalcurrency.preset.${this.currencyColor}.border`) ?? "",
    );
  }
  get currencyTextColor() {
    return qn.hexToUint(
      this._toolbar?.getProperty(`seasonalcurrency.preset.${this.currencyColor}.font`) ?? "",
    );
  }
}
