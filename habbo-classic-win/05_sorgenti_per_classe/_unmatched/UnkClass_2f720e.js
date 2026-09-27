// Extracted from HabboAirLauncher.deobf.js, line 212094.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2f720ebb619618

class a extends Sn {
  static {
    n(this, "UnkClass_2f720e");
  }
  static _r98fa37a25d1e4e = "friend_request_tab_xml";
  static BUBBLE = "bubble";
  static BUTTON_ACCEPT = "button_accept";
  static const_259 = "button_close";
  static _r1874b1a5691e93 = "click_region_reject";
  static _rd854cb1da3730a = "link_reject";
  static DEFAULT_COLOR = 16435481;
  static const_535 = 16767334;
  static REGION_REJECT_COLOR_EXPOSED = 16770666;
  static REGION_REJECT_COLOR_NORMAL = 16777215;
  static var_4024 = null;
  static allocate(e) {
    let r = a.var_4024 ?? new a();
    if (((r.var_119 = !1), r.friend != null && r.friend.figure !== e.figure)) {
      let t = r._window?.findChildByName(Sn.CANVAS);
      t != null && (t.bitmap = br.VIEW._rac9072fcec5669(e.figure));
    }
    return ((r.friend = new Vm(e.id, e.name, "", "", -1, !1, !1, e.figure, 0, "")), r);
  }
  constructor() {
    (super(), (this._window = this._r8a7edee4b46227()));
    let e = this._window?.findChildByName(a.BUBBLE);
    e != null && (e.visible = !1);
  }
  dispose() {
    (this._window != null &&
      (this._r9d954c82968ce6(this._window), (this._window = null)),
      super.dispose());
  }
  recycle() {
    !this.disposed &&
      !this.var_119 &&
      ((this.var_144 = null), (this.var_119 = !0), (a.var_4024 = this));
  }
  select(e) {
    if (!this.selected) {
      let r = this._window?.findChildByName(a.BUBBLE);
      (r != null && (r.visible = !0), super.select(e));
    }
  }
  deselect(e) {
    if (this.selected) {
      let r = this._window?.findChildByName(a.BUBBLE);
      (r != null && (r.visible = !1), super.deselect(e));
    }
  }
  _rff101a3ebedfdf() {
    (super._rff101a3ebedfdf(),
      this._window != null &&
        (this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR));
  }
  conceal() {
    (super.conceal(),
      this._window != null &&
        (this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR));
  }
  avatarImageReady(e, r) {
    if (this.disposed || this.friend == null || this.friend.figure !== e.figure) return;
    let t = this._window?.findChildByName(Sn.CANVAS),
      i = br.VIEW._rac9072fcec5669(e.figure);
    t != null && i != null && ((t.bitmap = i), (t.width = i.width), (t.height = i.height));
  }
  _r8a7edee4b46227() {
    let e = br._r4280a9b33bac0a.buildFromXML(br._rb32e1e294172ec.getAssetByName(a._r98fa37a25d1e4e)?.content);
    if (e == null) return null;
    let r = e.findChildByName(Sn.CANVAS),
      t = e.findChildByName(Sn.HEADER),
      i = e.findChildByName(Sn.PROFILE),
      s = e.findChildByName(Sn._ra044f7f5780fe7),
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
        (i.addEventListener(u.CLICK, this._r1a3578f3616ac3),
        (i.toolTipCaption = br._r9470351e58eba2.getLocalization("infostand.profile.link.tooltip", "")),
        (i.toolTipDelay = 100)),
      s?.addEventListener(u.CLICK, this.onMouseClick),
      s?.addEventListener(u.OVER, this._rad325cc53260a0),
      s?.addEventListener(u.OUT, this.onMousetOut),
      r != null && (r.disposesBitmap = !0),
      o != null &&
        ((o.procedure = this._r1d07186e07163c), (o.y = -(o.height - (o.height - o.margins.bottom)) - 1)));
    let d = br._r4280a9b33bac0a.createWindow(
      "ICON",
      "",
      class_2090.const_1384,
      class_2025.WINDOW_STYLE_DEFAULT,
      N._re3bd61027cfd94,
      new D(0, 0, 25, 25),
    );
    if (d != null) {
      d.mouseThreshold = 0;
      let c = br._r4280a9b33bac0a.createWindow(
        "BITMAP",
        "",
        class_2090.WINDOW_TYPE_BITMAP_WRAPPER,
        class_2025.WINDOW_STYLE_DEFAULT,
        N.const_421,
        new D(0, 0, 25, 25),
      );
      (c != null &&
        ((c.disposesBitmap = !1),
        (c.bitmap = br._rb32e1e294172ec.getAssetByName("plus_friend_icon_png")?.content),
        d.addChild(c)),
        e.findChildByName(Sn._ra044f7f5780fe7)?.addListItemAt(d, 0));
    }
    return e;
  }
  _r9d954c82968ce6(e) {
    if (e.disposed) return;
    ((e.procedure = null),
      e.removeEventListener(u.CLICK, this.onMouseClick),
      e.removeEventListener(u.OVER, this._rad325cc53260a0),
      e.removeEventListener(u.OUT, this.onMousetOut));
    let r = e.findChildByName(Sn.HEADER);
    (r?.removeEventListener(u.CLICK, this.onMouseClick),
      r?.removeEventListener(u.OVER, this._rad325cc53260a0),
      r?.removeEventListener(u.OUT, this.onMousetOut));
    let t = e.findChildByName(Sn._ra044f7f5780fe7);
    (t?.removeEventListener(u.CLICK, this.onMouseClick),
      t?.removeEventListener(u.OVER, this._rad325cc53260a0),
      t?.removeEventListener(u.OUT, this.onMousetOut),
      e.findChildByName(Sn.PROFILE)?.removeEventListener(u.CLICK, this._r1a3578f3616ac3),
      (e.width = a.WIDTH),
      (e.height = a.HEIGHT),
      (e.color = a.DEFAULT_COLOR));
    let s = e.findChildByName(Sn.CANVAS);
    s != null && (s.bitmap = null);
    let o = e.findChildByTag(Sn.LABEL);
    o != null && (o.underline = !1);
  }
  _r1d07186e07163c = n((e, r) => {
    if (this.var_144 != null) {
      if (e.type === u.CLICK)
        switch (r.name) {
          case a.BUTTON_ACCEPT:
            br._ra38a77a0a4203f._r2261fa54b0d7ce(this.var_144.id);
            break;
          case a.const_259:
            this.selected && br.VIEW._r0574cac632096b(!0);
            break;
          case Sn._rcf76f43468fc87:
            (br._r6eff1f661c015f.trackGoogle("extendedProfile", "friendBar_friendRequestButton"),
              br._ra38a77a0a4203f._r44cfd4df9a8991(this.var_144.id));
            break;
          case a._r1874b1a5691e93:
            br._ra38a77a0a4203f._r62afd2c361c783(this.var_144.id);
            break;
        }
      else if (e.type === u.OVER) {
        if (r.name === a._r1874b1a5691e93) {
          let t = r.getChildByName(a._rd854cb1da3730a);
          t != null && (t.textColor = a.REGION_REJECT_COLOR_EXPOSED);
        }
        if (r.name === Sn._rcf76f43468fc87) {
          let t = r.findChildByName("icon");
          t != null && (t.style = 22);
        }
        if (r.name === Sn.PROFILE) {
          let t = r.getChildByName("name");
          t != null && (t.underline = !0);
        }
      } else if (e.type === u.OUT) {
        if (r.name === a._r1874b1a5691e93) {
          let t = r.getChildByName(a._rd854cb1da3730a);
          t != null && (t.textColor = a.REGION_REJECT_COLOR_NORMAL);
        }
        if (r.name === Sn._rcf76f43468fc87) {
          let t = r.findChildByName("icon");
          t != null && (t.style = 21);
        }
        if (r.name === Sn.PROFILE) {
          let t = r.getChildByName("name");
          t != null && (t.underline = !1);
        }
      }
    }
  }, "_r1d07186e07163c");
}
