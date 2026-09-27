// Estratto da HabboAirLauncher.deobf.js, riga 141062.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/TabButtonController.as
// Nome offuscato: _ie09dfc29b34183

class a extends SelectableController {
  static {
    n(this, "TabButtonController");
  }
  static CONTENT_TAG = "TAB_BUTTON_CONTENT";
  static LABEL_TAG = "TAB_BUTTON_TITLE";
  static ICON_TAG = "TAB_BUTTON_ICON";
  get caption() {
    return super.caption;
  }
  set caption(e) {
    super.caption = e;
    let r = this.findChildByTag(a.LABEL_TAG);
    r !== null && (r.caption = e);
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((i |= N._re3bd61027cfd94), super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  update(e, r) {
    return (r.type === y.const_906 && st.resizeToAccommodateChildren(this), super.update(e, r));
  }
}
