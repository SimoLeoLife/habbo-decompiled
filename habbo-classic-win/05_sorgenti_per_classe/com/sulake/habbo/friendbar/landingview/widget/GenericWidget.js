// Extracted from HabboAirLauncher.deobf.js, line 208381.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/GenericWidget.as
// Obfuscated name: _i616e40d7c4c1d9

class a {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "GenericWidget");
  }
  _container = null;
  var_2507 = 0;
  _configurationCode = "";
  _elements = new B();
  set slot(e) {
    this.var_2507 = e;
  }
  get configurationCode() {
    return this._configurationCode;
  }
  set configurationCode(e) {
    this._configurationCode = e;
  }
  get container() {
    return this._container;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    ((this._landingView = null), (this._container = null));
    for (let e of this._elements.getValues()) e.dispose != null && e.dispose();
    this._elements.dispose();
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("generic_widget")),
      this.configureContentColumn(),
      this._landingView != null &&
        this._container != null &&
        a.configureLayout(
          this._landingView,
          this.var_2507,
          this._configurationCode,
          this._container,
        ));
  }
  getElementByName(e) {
    return this._elements.getValue(e) ?? null;
  }
  refresh() {
    for (let e of this._elements.getValues()) e.refresh();
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  disable() {
    for (let e of this._elements.getValues()) "disable" in e && e.disable();
  }
  configureContentColumn() {
    if (this._landingView == null || this._container == null) return;
    let e = a.getConf(this._landingView, this.var_2507, this._configurationCode, "conf");
    if (e == null || e === "") return;
    let r = this._container.findChildByName("content_container");
    if (r != null)
      for (let t of e.split(";")) {
        let i = t.split(","),
          s = i[0] ?? "",
          o = w9e.createHandler(s),
          d = o != null && "layoutName" in o ? o.layoutName : `element_${s}`,
          c = null;
        try {
          c = this._landingView.getXmlWindow(d);
        } catch {
          return;
        }
        if (c == null) return;
        (o != null && (o.initialize(this._landingView, c, i, this), this._elements.add(s, o)),
          o != null && "isFloating" in o && o.isFloating(a.isWideSlot(this.var_2507))
            ? (o instanceof TitleElementHandler &&
                (c.width = a.isWideSlot(this.var_2507)
                  ? this._landingView.dynamicLayoutLeftPaneWidth
                  : this._landingView.dynamicLayoutRightPaneWidth),
              this._container.addChild(c))
            : r.addListItem(c));
      }
  }
  static configureLayout(e, r, t, i) {
    let s = this.getConf(e, r, t, "layout"),
      o = i.findChildByName("bitmap"),
      d = i.findChildByName("content_container");
    if (d != null) {
      ((d.x = this.isWideSlot(r) ? II.CONTENT_AREA_START_X : 0),
        (i.width = this.isWideSlot(r) ? e.dynamicLayoutLeftPaneWidth : e.dynamicLayoutRightPaneWidth));
      for (let c of s.split(";")) {
        let [f, l] = c.split(",");
        switch (f) {
          case "bitmap.uri":
            o != null && (o.assetUri = l);
            break;
          case "bitmap.width":
            o != null && (o.width = Number.parseInt(l));
            break;
          case "bitmap.height":
            o != null && (o.height = Number.parseInt(l));
            break;
          case "bitmap.x":
            o != null && (o.x = Number.parseInt(l));
            break;
          case "bitmap.y":
            o != null && (o.y = Number.parseInt(l));
            break;
          case "content.x":
            d.x = Number.parseInt(l);
            break;
          case "content.y":
            d.y = Number.parseInt(l);
            break;
          case "content.width":
            d.width = Number.parseInt(l);
            break;
          case "container.height":
            i.height = Math.max(Number.parseInt(l), i.height);
            break;
        }
      }
    }
  }
  static getConf(e, r, t, i) {
    let s = t != null && t !== "" ? `landing.view.${t}.${i}` : `landing.view.dynamic.slot.${r}.${i}`;
    return e.getProperty(s);
  }
  static isWideSlot(e) {
    return e !== 3 && e !== 5;
  }
}
