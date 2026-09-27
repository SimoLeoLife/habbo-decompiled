// Extracted from HabboAirLauncher.deobf.js, line 327534.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/class_2749.as
// Obfuscated name: _i40e41479ebf1d6

class a {
  static {
    n(this, "class_2749");
  }
  static ROOM_VIEW = "room_view";
  static ROOM_NEW_CHAT = "room_new_chat";
  static ROOM_WIDGET = "room_widget";
  static BOTTOM_MARGIN = 47;
  _layoutContainer = null;
  dispose() {
    (this._layoutContainer?.dispose(), (this._layoutContainer = null));
  }
  setLayout(e, r, t) {
    if (e == null || r == null) throw new Error("Unable to set room desktop layout.");
    if (((this._layoutContainer = r.buildFromXML(e, 0)), this._layoutContainer == null))
      throw new Error("Failed to build layout from XML.");
    ((this._layoutContainer.width = this._layoutContainer.desktop.width),
      (this._layoutContainer.height = this._layoutContainer.desktop.height),
      this._layoutContainer.desktop?.addChild(this._layoutContainer));
    let s = this._layoutContainer.findChildByTag("room_widget_infostand");
    s != null && (s.y -= a.BOTTOM_MARGIN);
    for (let o = 0; o < this._layoutContainer.numChildren; o++) {
      let d = this._layoutContainer.getChildAt(o),
        c = N._r6c0e19da97f0e1 | N._r653836e7633f44;
      d != null && d.testParamFlag(c) && d.addEventListener(y.const_906, this._r9c042a41d89614);
    }
  }
  _r9c042a41d89614 = n((e) => {
    let r = e.window;
    if (r == null || r.numChildren !== 1) return;
    let t = r.getChildAt(0);
    t != null && ((r.width = t.width), (r.height = t.height));
  }, "_r9c042a41d89614");
  _r25204819cdaad6(e, r) {
    if (r == null || this._layoutContainer == null) return null;
    if (e === RoomWidgetEnum.const_121 || e === RoomWidgetEnum.const_328)
      return this._layoutContainer.getChildByName("background_widgets");
    if (e === RoomWidgetEnum.CHAT_INPUT_WIDGET) return r.desktop;
    let t = null;
    for (let i of r.tags) {
      let s = String(i);
      if (s.indexOf(a.ROOM_WIDGET) === 0) {
        t = s;
        break;
      }
    }
    return t == null ? null : this._layoutContainer.getChildByTag(t);
  }
  _rbb11c125f45682(e, r) {
    if (r == null) return !1;
    let t = this._r25204819cdaad6(e, r);
    return t == null
      ? !1
      : e === RoomWidgetEnum.CHAT_INPUT_WIDGET
        ? (t.addChild(r), !0)
        : ((r.x = 0), (r.y = 0), t.addChild(r), (t.width = r.width), (t.height = r.height), !0);
  }
  _rc1d348b71b4a5f(e, r) {
    let t = this._r25204819cdaad6(e, r);
    t != null && r != null && t.removeChild(r);
  }
  _rdd069f4d54f48d(e) {
    if (e == null || this._layoutContainer == null) return !1;
    let r = this._layoutContainer.getChildByTag(a.ROOM_VIEW);
    return r == null ? !1 : (r.addChild(e), !0);
  }
  get roomViewRect() {
    if (this._layoutContainer == null) return null;
    let e = this._layoutContainer.findChildByTag(a.ROOM_VIEW);
    if (e == null) return null;
    let r = e.rectangle;
    return r == null ? null : (r.offset(this._layoutContainer.x, this._layoutContainer.y), r);
  }
  _radab2f28e7a338() {
    if (this._layoutContainer == null) return null;
    let e = this._layoutContainer.findChildByTag(a.ROOM_VIEW);
    return e != null && e.numChildren > 0 ? e.getChildAt(0) : null;
  }
  _rd462b5fb8d2881() {
    return this._layoutContainer == null ? null : this._layoutContainer.findChildByTag(a.ROOM_NEW_CHAT);
  }
}
