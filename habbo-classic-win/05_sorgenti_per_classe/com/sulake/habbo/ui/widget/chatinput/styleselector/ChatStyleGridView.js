// Extracted from HabboAirLauncher.deobf.js, line 310319.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chatinput/styleselector/ChatStyleGridView.as
// Obfuscated name: _i9ac24a3f19afb1

class a {
  constructor(e) {
    this._selector = e;
    let t = this._selector?._r95d7112e402b2a.widget.assets?.getAssetByName(
      "styleselector_menu_new_xml",
    )?.content;
    ((this._window =
      t != null ? this._selector?._r95d7112e402b2a.widget.windowManager?.buildFromXML(t) : null),
      this._window != null && (this._window.visible = !1));
  }
  static {
    n(this, "ChatStyleGridView");
  }
  static CHAT_BAR_POPUP_OFFSET = 55;
  static SCREEN_LEFT_BORDER = 92;
  _window;
  dispose() {
    (this._window?.dispose(), (this._window = null), (this._selector = null));
  }
  get disposed() {
    return this._window == null;
  }
  get grid() {
    return this._window?.findChildByName("itemgrid");
  }
  get fontSizeList() {
    return this._window?.findChildByName("font_size_list");
  }
  get window() {
    return this._window;
  }
  alignToSelector(e) {
    if (this._window == null || this._window.parent == null) return;
    let r = new D();
    e.getGlobalRectangle(r);
    let t = this._window.parent;
    ((t.x = r.right - this._window.width), (t.y = r.bottom - this._window.height));
    let i = new E();
    (t.getGlobalPosition(i),
      i.x < a.SCREEN_LEFT_BORDER && (t.x += a.SCREEN_LEFT_BORDER - i.x),
      (t.x = r.x),
      (t.y = r.bottom - a.CHAT_BAR_POPUP_OFFSET - this._window.height));
  }
}
