// Estratto da HabboAirLauncher.deobf.js, riga 134298.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/HeaderController.as
// Nome offuscato: _i87845c9dc35959

class a extends ContainerController {
  static {
    n(this, "HeaderController");
  }
  static TAG_TITLE_ELEMENT = "_TITLE";
  static TAG_CONTROLS_ELEMENT = "_CONTROLS";
  get title() {
    return this.findChildByTag(a.TAG_TITLE_ELEMENT);
  }
  get controls() {
    return this.findChildByTag(a.TAG_CONTROLS_ELEMENT);
  }
  get caption() {
    return super.caption;
  }
  set caption(e) {
    super.caption = e;
    try {
      let r = this.title;
      r !== null && (r.text = e);
    } catch {}
  }
  get color() {
    return super.color;
  }
  set color(e) {
    super.color = e;
    let r = [];
    this.groupChildrenWithTag(st.TAG_COLORIZE, r, -1);
    for (let t of r) t.color = e;
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((i |= N._re3bd61027cfd94), super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
}
