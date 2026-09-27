// Estratto da HabboAirLauncher.deobf.js, riga 212293.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/tabs/FriendRequestsTab.as
// Nome offuscato: _i40950a8922808f

class a extends br {
  static {
    n(this, "FriendRequestsTab");
  }
  static REQUESTS_WINDOW_RESOURCE = "friend_requests_tab_xml";
  static ICON = "icon";
  static LABEL = "label";
  static HEADER = "header";
  static CANVAS = "canvas";
  static BUBBLE = "bubble";
  static REQUEST_LIST = "request_entity_list";
  static NAME = "name";
  static COUNTER = "badge_counter";
  static REGION_PROFILE = "region_profile";
  static REGION_PROFILE_NAME = "region_profile_name";
  static const_596 = "button_accept_all";
  static const_247 = "click_area_discard_all";
  static const_259 = "button_close";
  static BUTTON_ACCEPT = "button_accept";
  static const_494 = "click_area_discard";
  static const_977 = "text_discard";
  static var_4024 = null;
  static DEFAULT_COLOR = 4294625561;
  static const_535 = 4294957414;
  static const_280 = 4289431312;
  static const_244 = 4290616362;
  static REGION_REJECT_COLOR_EXPOSED = 16770666;
  static REGION_REJECT_COLOR_NORMAL = 16777215;
  _ra75e017568ad17 = null;
  _rde5b0a85afbf34 = !1;
  _r59869ee7e8dbc5 = null;
  static allocate(e) {
    let r = a.var_4024 ?? new a();
    ((r.var_119 = !1), (r._ra75e017568ad17 = e));
    let t = r._window?.findChildByName(a.COUNTER);
    return (t != null && (t.caption = String(e.length)), r);
  }
  constructor() {
    (super(), (this._window = this._ra78c66af259ae6()));
  }
  dispose() {
    (this._window != null &&
      (this._r22ff2b1bbaa168(this._window), (this._window = null)),
      this._r59869ee7e8dbc5?.dispose(),
      (this._r59869ee7e8dbc5 = null),
      super.dispose());
  }
  recycle() {
    if (!this.disposed && !this.var_119) {
      let r = this._window?.findChildByName(a.BUBBLE)?.content.getChildByName(a.REQUEST_LIST);
      if (r != null) for (; r.numListItems > 0;) r.removeListItemAt(0)?.dispose();
      ((this._rde5b0a85afbf34 = !1),
        (this._ra75e017568ad17 = null),
        (this.var_119 = !0),
        (a.var_4024 = this));
    }
  }
  select(e) {
    if (!this.selected && this._window != null) {
      let r = this._window.findChildByName(a.BUBBLE);
      if (r != null) {
        if (((r.visible = !0), !this._rde5b0a85afbf34)) {
          let t = r.content.getChildByName(a.REQUEST_LIST);
          if (t != null && this._r59869ee7e8dbc5 != null && this._ra75e017568ad17 != null) {
            let i = 0;
            for (let s = 0; s < this._ra75e017568ad17.length; s++) {
              let o = this._r59869ee7e8dbc5.clone(),
                d = this._ra75e017568ad17[s],
                c = o.findChildByName(a.CANVAS);
              ((o.color = s % 2 === 0 ? a.const_280 : a.const_244),
                (o.id = d.id),
                (o.findChildByName(a.NAME).caption = d.name));
              let f = br.VIEW._rac9072fcec5669(d.figure);
              (c != null &&
                f != null &&
                ((c.disposesBitmap = !1),
                (c.bitmap = f),
                (c.width = f.width),
                (c.height = f.height),
                (c.disposesBitmap = !0)),
                t.addListItem(o),
                (i += o.height + t.spacing));
            }
            t.height = i;
          }
        }
        this._rde5b0a85afbf34 = !0;
      }
      super.select(e);
    }
  }
  deselect(e) {
    if (this.selected) {
      let r = this._window?.findChildByName(a.BUBBLE);
      (r != null && (r.visible = !1), super.deselect(e));
    }
  }
  _rff101a3ebedfdf() {
    if ((super._rff101a3ebedfdf(), this._window != null)) {
      this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR;
      let e = this._window.findChildByTag(a.LABEL);
      e != null && (e.underline = this.exposed);
    }
  }
  conceal() {
    if ((super.conceal(), this._window != null)) {
      this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR;
      let e = this._window.findChildByTag(a.LABEL);
      e != null && (e.underline = this.exposed);
    }
  }
  avatarImageReady(e, r) {
    if (this.disposed) return;
    let i = this._window?.findChildByName(a.BUBBLE)?.content.getChildByName(a.REQUEST_LIST);
    if (i != null)
      for (let s = 0; s < i.numListItems; s++) {
        let o = i.getListItemAt(s);
        if (o != null && o.id === e.id) {
          let d = o.findChildByName(a.CANVAS);
          d != null &&
            ((d.disposesBitmap = !0), (d.bitmap = r), (d.width = r.width), (d.height = r.height));
          return;
        }
      }
  }
  _ra78c66af259ae6() {
    let e = br._r4280a9b33bac0a.buildFromXML(br._rb32e1e294172ec.getAssetByName(a.REQUESTS_WINDOW_RESOURCE)?.content);
    if (e == null) return null;
    let r = e.findChildByName(a.CANVAS),
      t = e.findChildByName(a.HEADER),
      i = e.findChildByName(a.REGION_PROFILE),
      s = e.findChildByName(a.REGION_PROFILE_NAME),
      o = e.findChildByName(a.BUBBLE);
    ((e.x = 0),
      (e.y = 0),
      (e.width = a.WIDTH),
      (e.height = a.HEIGHT),
      e.addEventListener(u.CLICK, this.onMouseClick),
      e.addEventListener(u.OVER, this._rad325cc53260a0),
      e.addEventListener(u.OUT, this.onMousetOut),
      t?.addEventListener(u.CLICK, this.onMouseClick),
      t?.addEventListener(u.OVER, this._rad325cc53260a0),
      t?.addEventListener(u.OUT, this.onMousetOut),
      i != null &&
        ((i.toolTipCaption = br._r9470351e58eba2.getLocalization("infostand.profile.link.tooltip", "")),
        (i.toolTipDelay = 100)),
      s != null &&
        ((s.toolTipCaption = br._r9470351e58eba2.getLocalization("infostand.profile.link.tooltip", "")),
        (s.toolTipDelay = 100)),
      r != null && (r.disposesBitmap = !0),
      o != null &&
        ((o.visible = !1),
        (o.y = -(o.height - (o.height - o.margins.bottom)) - 1),
        (o.procedure = this._r1d07186e07163c)));
    let d = e.findChildByName(a.ICON);
    d != null &&
      ((d.disposesBitmap = !1),
      (d.bitmap = br._rb32e1e294172ec.getAssetByName("add_friends_icon_png")?.content));
    let c = o?.content.getChildByName(a.REQUEST_LIST);
    return ((this._r59869ee7e8dbc5 = c?.removeListItemAt(0)), e);
  }
  _r22ff2b1bbaa168(e) {
    if (e.disposed) return;
    ((e.procedure = null),
      e.removeEventListener(u.CLICK, this.onMouseClick),
      e.removeEventListener(u.OVER, this._rad325cc53260a0),
      e.removeEventListener(u.OUT, this.onMousetOut));
    let r = e.findChildByName(a.HEADER);
    (r?.removeEventListener(u.CLICK, this.onMouseClick),
      r?.removeEventListener(u.OVER, this._rad325cc53260a0),
      r?.removeEventListener(u.OUT, this.onMousetOut),
      (e.width = a.WIDTH),
      (e.height = a.HEIGHT),
      (e.color = a.DEFAULT_COLOR));
    let t = e.findChildByName(a.CANVAS);
    t != null && (t.bitmap = null);
    let i = e.findChildByTag(a.LABEL);
    i != null && (i.underline = !1);
  }
  _r1d07186e07163c = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case a.const_259:
          this.selected && br.VIEW._r0574cac632096b(!0);
          break;
        case a.const_596:
          br._ra38a77a0a4203f._r36a1959e9c4470();
          break;
        case a.const_247:
          br._ra38a77a0a4203f._r64b082e60ec4ab();
          break;
        case a.BUTTON_ACCEPT:
          br._ra38a77a0a4203f._r2261fa54b0d7ce(r.parent?.id ?? 0);
          break;
        case a.const_494:
          br._ra38a77a0a4203f._r62afd2c361c783(r.parent?.id ?? 0);
          break;
        case a.REGION_PROFILE:
          (br._r6eff1f661c015f.trackGoogle("extendedProfile", "friendBar_multipleFriendRequestsAvatar"),
            br._ra38a77a0a4203f._r44cfd4df9a8991(r.parent?.id ?? 0));
          break;
        case a.REGION_PROFILE_NAME:
          (br._r6eff1f661c015f.trackGoogle("extendedProfile", "friendBar_multipleFriendRequestsName"),
            br._ra38a77a0a4203f._r44cfd4df9a8991(r.parent?.id ?? 0));
          break;
      }
    else if (e.type === u.OVER) {
      if (r.name === a.const_494) {
        let t = r.getChildByName(a.const_977);
        t != null && (t.textColor = a.REGION_REJECT_COLOR_EXPOSED);
      }
      if (r.name === a.REGION_PROFILE_NAME) {
        let t = r.getChildByName(a.NAME);
        t != null && (t.underline = !0);
      }
    } else if (e.type === u.OUT) {
      if (r.name === a.const_494) {
        let t = r.getChildByName(a.const_977);
        t != null && (t.textColor = a.REGION_REJECT_COLOR_NORMAL);
      }
      if (r.name === a.REGION_PROFILE_NAME) {
        let t = r.getChildByName(a.NAME);
        t != null && (t.underline = !1);
      }
    }
  }, "_r1d07186e07163c");
}
