// Estratto da HabboAirLauncher.deobf.js, riga 173636.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/clubcenter/ClubSpecialInfoBubbleView.as
// Nome offuscato: _i8ae9398e39f4c6

class a {
  constructor(e, r, t, i) {
    this.var_63 = e;
    this._data = t;
    if (
      ((this._window = r.buildFromXML(
        this.var_63?.assets.getAssetByName("club_center_special_info_xml")?.content,
      )),
      this._window == null)
    )
      return;
    ((this._window.procedure = this._r64e450f8ad70fb),
      this.positionWindow(i),
      this.setElementText(
        "info_creditsspent",
        this.getLocalization("hccenter.breakdown.creditsspent").replace(
          "%credits%",
          String(this._data.var_5493),
        ),
      ));
    let s = Math.trunc(this._data.var_4458 * 100),
      o =
        this.var_63?.localization?.getLocalization(
          "hccenter.breakdown.paydayfactor.percent",
          "",
        ) ?? "";
    (o.length > 0
      ? (o = o.replace("%percent%", String(s)).replace("%multiplier%", String(this._data.var_4458)))
      : (o = this.getLocalization("hccenter.breakdown.paydayfactor").replace(
          "%percent%",
          String(this._data.var_4458),
        )),
      this.setElementText("info_factor", o),
      this.setElementText(
        "info_streakbonus",
        this.getLocalization("hccenter.breakdown.streakbonus").replace(
          "%credits%",
          String(this._data.var_5685),
        ),
      ));
    let d =
        Math.trunc(
          (this._data.var_4458 * this._data.var_5493 + this._data.var_5685) * 100,
        ) / 100,
      c = Math.trunc((this._data.var_4397 + this._data.var_5685) * 100) / 100;
    (this.setElementText(
      "info_total",
      this.getLocalization("hccenter.breakdown.total")
        .replace("%credits%", String(c))
        .replace("%actual%", String(d)),
    ),
      this._window.activate(),
      this.var_63?.stage?.addEventListener(_ifd7c1208e3417e.CLICK, this._r20e8e12397dc16));
  }
  static {
    n(this, "ClubSpecialInfoBubbleView");
  }
  static MARGIN = 8;
  _window = null;
  dispose() {
    (this.var_63?.stage?.removeEventListener(_ifd7c1208e3417e.CLICK, this._r20e8e12397dc16),
      this._window?.dispose(),
      (this._window = null),
      (this.var_63 = null));
  }
  _r64e450f8ad70fb = n((e, r) => {
    let t = e,
      i = r;
    t?.type !== u.DOWN ||
      i == null ||
      this.var_63 == null ||
      (t.stopImmediatePropagation(),
      i.name === "special_infolink" && this.var_63.openPaydayHelpPage(),
      this.var_63._re1ff9ebb42c02f());
  }, "_r64e450f8ad70fb");
  _r20e8e12397dc16 = n(() => {
    this.var_63?._re1ff9ebb42c02f();
  }, "_r20e8e12397dc16");
  positionWindow(e) {
    if (e == null || this._window == null || this.var_63?.stage == null) return;
    let r = new E();
    (e.getGlobalPosition(r),
      this.var_63.stage.stageWidth <
        r.x + e.width + this._window.width + a.MARGIN &&
      r.x > this._window.width + a.MARGIN
        ? ((this._window.direction = "right"),
          (r.x -= this._window.width + a.MARGIN))
        : (r.x += e.width + a.MARGIN),
      (r.y += e.height * 0.5 - this._window.height * 0.5),
      (this._window.position = r));
  }
  setElementText(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.text = r);
  }
  getLocalization(e) {
    return this.var_63?.localization?.getLocalization(e, e) ?? "";
  }
}
