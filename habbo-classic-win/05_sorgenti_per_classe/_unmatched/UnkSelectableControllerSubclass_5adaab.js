// Extracted from HabboAirLauncher.deobf.js, line 139658.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5adaabc7fca0d0

class a extends SelectableController {
  static {
    n(this, "UnkSelectableControllerSubclass_5adaab");
  }
  static TEXT_FIELD_NAME = "_CAPTION_TEXT";
  get caption() {
    return super.caption;
  }
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    ((i |= N._re3bd61027cfd94), super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  set caption(e) {
    super.caption = e;
    let r = this.getChildByName(a.TEXT_FIELD_NAME);
    r !== null && (r.caption = this.caption);
  }
  setRectangle(e, r, t, i) {
    super.setRectangle(e, r, t, i);
    let s = this.getChildByName(a.TEXT_FIELD_NAME);
    s !== null && (s.width = t);
  }
}
