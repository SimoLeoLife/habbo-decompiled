// Estratto da HabboAirLauncher.deobf.js, riga 141629.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/WidgetWindowController.as
// Nome offuscato: _i449f268347d783

class extends st {
  static {
    n(this, "WidgetWindowController");
  }
  var_3511 = null;
  var_4107 = "";
  var_17 = null;
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((this.var_3511 = s._re73471af245b96()),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  dispose() {
    this.disposed ||
      (this.var_17 != null && (this.var_17.dispose(), (this.var_17 = null)),
      (this.var_3511 = null),
      super.dispose());
  }
  get properties() {
    let e = this.var_17 != null ? [...this.var_17.properties] : [];
    return (
      e.unshift(this.createProperty(class_3436.WIDGET_TYPE, this.var_4107)),
      [...super.properties, ...e]
    );
  }
  set properties(e) {
    for (let r of e)
      if (r.key === class_3436.WIDGET_TYPE) {
        let t = String(r.value);
        (this.var_4107 !== t || this.var_17 == null) &&
          (this.var_17 != null && (this.removeChildAt(0), this.var_17.dispose()),
          (this.var_17 = this.var_3511?.createWidget(t, this) ?? null),
          (this.var_4107 = t));
        break;
      }
    (this.var_17 != null && (this.var_17.properties = e), (super.properties = e));
  }
  set color(e) {
    super.color = e;
    let r = [];
    this.groupChildrenWithTag(st.TAG_COLORIZE, r, -1);
    for (let t of r) t.color = e;
  }
  get color() {
    return super.color;
  }
  get iterator() {
    return this.var_17 != null ? this.var_17.iterator : Lt.INSTANCE;
  }
  get widget() {
    return this.var_17;
  }
  get rootWindow() {
    return this.getChildAt(0);
  }
  set rootWindow(e) {
    (this.removeChildAt(0),
      e != null &&
        (this.addChild(e), e.tags.indexOf(st.TAG_EXCLUDE) < 0 && e.tags.push(st.TAG_EXCLUDE)));
  }
}
