// Estratto da HabboAirLauncher.deobf.js, riga 305611.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/contextmenu/ButtonMenuView.as
// Nome offuscato: _i6f10aa89d93021

class a extends Dc {
  static {
    n(this, "ButtonMenuView");
  }
  static ICON_MARGIN = 8;
  static LINK_COLOR_MODERATE_DEFAULT = 16744755;
  static LINK_COLOR_MODERATE_HOVER = 16756591;
  static ICON_VIP = "icon_vip";
  static ICON_DUCKET = "icon_ducket";
  static ICON_ARROW_LEFT = "arrow_left";
  static ICON_ARROW_RIGHT = "arrow_right";
  var_34 = null;
  _r8b6e9f027ac5db = n((e, r) => {
    this._rb8ed727c592c36(e, r);
  }, "_r8b6e9f027ac5db");
  constructor(e) {
    super(e);
  }
  dispose() {
    ((this.var_34 = null), super.dispose());
  }
  showButtonGrid(e, r = !0) {
    let t = this.var_34?.getListItemByName(e);
    if (t != null) {
      t.visible = r;
      for (let i = 0; i < t._r72acf104e2c444; i++) {
        let o = t.getGridItemAt(i)?.findChildByTag("icon");
        o != null && this.setImageAsset(o, o.name, !0);
      }
    }
  }
  showButton(e, r = !0, t = !0, i = !1, s = !1) {
    let o = this.var_34?.getListItemByName(e);
    if (o == null) return;
    o.visible = r;
    let d = o.getChildByName("button"),
      c = t || i;
    c ? d?.enable() : d?.disable();
    let f = d?.getChildByName("label");
    f != null && (f.textColor = c && !i ? Dc._r83ef7af05e7ef8 : Dc._r4eb01c2a360c76);
    let l = d?.getChildByName("icon");
    l != null &&
      f != null &&
      ((l.color = c ? Dc.ICON_COLOR_ENABLED : Dc._rd929b163ff00b1),
      l.tags.indexOf(a.ICON_ARROW_LEFT) > -1 &&
        (l.x = f.x + (f.width - f.textWidth) / 2 - l.width - a.ICON_MARGIN),
      l.tags.indexOf(a.ICON_ARROW_RIGHT) > -1 &&
        (l.x = f.x + (f.width + f.textWidth) / 2 + a.ICON_MARGIN),
      (l.visible = i || s));
    let b = d?.getChildByName(a.ICON_VIP);
    b != null && (b.visible = i);
    let _ = d?.getChildByName(a.ICON_DUCKET);
    _ != null && (_.visible = s);
  }
  _rb8ed727c592c36(e, r) {
    if (!(this.disposed || this._window?.disposed !== !1)) {
      if (e.type === u.OVER) {
        if (
          (r.name === "button"
            ? (r.color = r.tags.indexOf("moderate") > -1 ? Dc.const_599 : Dc.BUTTON_COLOR_HOVER)
            : r.tags.indexOf("link") > -1 &&
              (r.tags.indexOf("actions") > -1
                ? r.getChildAt(0) && (r.getChildAt(0).textColor = Dc.LINK_COLOR_ACTIONS_HOVER)
                : r.tags.indexOf("moderate") > -1 && (r.getChildAt(0).textColor = a.LINK_COLOR_MODERATE_HOVER)),
          r.name === "profile_link")
        ) {
          let t = r.findChildByName("name");
          t != null && (t.textColor = Dc.LINK_COLOR_ACTIONS_HOVER);
        }
      } else if (
        e.type === u.OUT &&
        (r.name === "button"
          ? (r.color = Dc.BUTTON_COLOR_DEFAULT)
          : r.tags.indexOf("link") > -1 &&
            (r.tags.indexOf("actions") > -1
              ? (r.getChildAt(0).textColor = Dc.LINK_COLOR_ACTIONS_DEFAULT)
              : r.tags.indexOf("moderate") > -1 && (r.getChildAt(0).textColor = a.LINK_COLOR_MODERATE_DEFAULT)),
        r.name === "profile_link")
      ) {
        let t = r.findChildByName("name");
        t != null && (t.textColor = Dc.LINK_COLOR_ACTIONS_DEFAULT);
      }
    }
  }
}
