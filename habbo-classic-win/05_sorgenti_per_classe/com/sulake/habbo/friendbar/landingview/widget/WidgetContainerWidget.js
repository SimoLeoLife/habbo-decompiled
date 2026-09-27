// Extracted from HabboAirLauncher.deobf.js, line 209246.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/WidgetContainerWidget.as
// Obfuscated name: _i2623b9e8c97b66

class a {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "WidgetContainerWidget");
  }
  _container = null;
  _r89f7688b2a17aa = new Map();
  var_1529 = null;
  var_2507 = 0;
  _schedulingStr = "";
  _r8faa775b84bbe9 = null;
  set slot(e) {
    this.var_2507 = e;
  }
  get container() {
    return this._container;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    ((this._landingView = null), (this._container = null));
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("widget_container_widget")),
      (this.var_1529 = this._landingView == null ? null : new Dz(this._landingView)),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3464((e) => {
          this.onTimingCode(e);
        }),
      ),
      (this._schedulingStr =
        this._landingView?.getProperty(`landing.view.dynamic.slot.${this.var_2507}.conf`) ?? ""));
  }
  refresh() {
    this._landingView?.send(new class_2726(this._schedulingStr));
  }
  static hideChildren(e) {
    for (let r = 0; r < e.numChildren; r++) {
      let t = e.getChildAt(r);
      t != null && (t.visible = !1);
    }
  }
  refreshContent() {
    this._container != null &&
      (a.hideChildren(this._container),
      this._r8faa775b84bbe9 != null &&
        (this._r8faa775b84bbe9.refresh(this._container),
        this._r8faa775b84bbe9.container != null &&
          ((this._r8faa775b84bbe9.container.visible = !0),
          (this._container.height = this._r8faa775b84bbe9.container.height),
          (this._container.width = this._r8faa775b84bbe9.container.width))));
  }
  createWidgetContainer(e) {
    if (this._landingView == null || this._container == null) return null;
    let r = this._landingView.getProperty(`landing.view.${e}.widget`),
      t = Ro.getWidgetForType(r, this._landingView);
    if (t == null) return null;
    ("slot" in t && (t.slot = this.var_2507), "configurationCode" in t && (t.configurationCode = e));
    let i = new WidgetContainer(t, null, this.var_1529, this._container);
    return (this._r89f7688b2a17aa.set(e, i), i);
  }
  onTimingCode(e) {
    let r = ClassUtils.getParser(e, class_4171);
    r != null &&
      r?.schedulingStr === this._schedulingStr &&
      !this.disposed &&
      (this.switchCurrentWidget(r.code), this.refreshContent());
  }
  switchCurrentWidget(e) {
    if (e === "") {
      this._r8faa775b84bbe9 = null;
      return;
    }
    let r = this._r89f7688b2a17aa.get(e) ?? null;
    (r == null && (r = this.createWidgetContainer(e)), (this._r8faa775b84bbe9 = r));
  }
}
