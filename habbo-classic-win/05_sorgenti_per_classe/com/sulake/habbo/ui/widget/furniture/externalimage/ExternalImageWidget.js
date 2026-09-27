// Estratto da HabboAirLauncher.deobf.js, riga 316973.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/externalimage/ExternalImageWidget.as
// Nome offuscato: _i61bb441827e106

class a extends RoomWidgetBase {
  static {
    n(this, "ExternalImageWidget");
  }
  static TYPE_PHOTO_POSTER = "photo_poster";
  static TYPE_SELFIE = "selfie";
  static TYPE_LEGACY = "legacy";
  static HORIZONTAL_ITEM_SPACING = 10;
  static VERTICAL_SPACE = 71;
  _window;
  var_184;
  _reefdd0ef3be445;
  _inventory;
  _habboHelp;
  _roomEngine;
  _rc6b02514c64793 = 0;
  _r21fcda32c1b3fb = null;
  var_1250 = 0;
  _r4c5d0b6a622c5e = null;
  _rac1023becf17eb = "";
  _r95dc848fd03f3b = 0;
  var_3552 = !1;
  var_82;
  _rebe675007b9f13 = 1;
  _r708bb29b78ce5f = 1;
  _rf62c4dad9a3906 = null;
  _r8a19ce384ecc77 = null;
  constructor(e, r, t, i, s, o, d, c) {
    super(e, r, t, i);
    let f = t.getAssetByName("stories_image_widget_xml");
    if (
      ((this._window = r.buildFromXML(f?.content)),
      (this.var_184 = this._window?.findChildByName("imageLoader")),
      (this._reefdd0ef3be445 = this._window?.findChildByName("moderationText")),
      (this._inventory = s),
      (this._habboHelp = o),
      (this._roomEngine = d),
      (this.var_82 = c),
      (this.ownHandler.widget = this),
      this._reefdd0ef3be445?.addEventListener(kd.const_180, this._r864466b37a6e3d),
      this._window != null)
    ) {
      ((this._window.procedure = this.onWindowEvent), this._window.center());
      let l = this._window.findChildByName("shareArea");
      l != null && (l.visible = !1);
    }
    this.hide();
  }
  get ownHandler() {
    return this._handler;
  }
  _ra56b220b7d53ae(e) {
    ((this._rc6b02514c64793 = e.getId()),
      (this._rac1023becf17eb = e.getType()),
      (this.var_3552 = !1));
    let r = this._window?.findChildByName("removeButtonContainer"),
      t = this._window?.findChildByName("reportButtonContainer");
    (r != null && (r.visible = this.ownHandler._r323167d04fe54f()),
      t != null &&
        (t.visible = this.getType() === a.TYPE_PHOTO_POSTER || this.ownHandler.isSelfieReportingEnabled()),
      this.show(e.getStringToStringMap()?.getString("furniture_data") ?? null));
    let s = this._rc5e257e35d2238().indexOf(e);
    s >= 0 && (this._r95dc848fd03f3b = s);
  }
  _r955a0cc29e2d58(e) {
    let r = this._inventory?._reb9eeb9dd127ca(e);
    if (r == null) return;
    ((this._rc6b02514c64793 = e),
      (this._rac1023becf17eb = this._roomEngine?._ra7e35114872e5d(r.type) ?? ""),
      (this.var_3552 = !0));
    let t = this._window?.findChildByName("removeButtonContainer"),
      i = this._window?.findChildByName("reportButtonContainer");
    (t != null && (t.visible = !1),
      i != null && (i.visible = !1),
      this.show(r.stuffData.getLegacyString()));
  }
  hide() {
    this._window != null && (this._window.visible = !1);
  }
  dispose() {
    (this._r41c64f5d9d7f4f(),
      this._r44442c4c5d0dc7(),
      (this.var_184 = null),
      (this._reefdd0ef3be445 = null),
      (this._inventory = null),
      (this._habboHelp = null),
      (this._roomEngine = null),
      (this.var_82 = null),
      this._window?.dispose(),
      (this._window = null),
      super.dispose());
  }
  release() {
    (this.hide(), super.release());
  }
  show(e) {
    this.ownHandler.storiesImageUrlBase !== "disabled" &&
      (this._rd076abd1ede6e8(), e != null && this._re90651322a893e(e));
  }
  _re90651322a893e(e) {
    try {
      let r = JSON.parse(e);
      if (
        ((this._r21fcda32c1b3fb = typeof r.id == "string" ? r.id : null),
        this._r21fcda32c1b3fb != null && this._r21fcda32c1b3fb.length > 0)
      ) {
        this._r73b4261ab48b98();
        return;
      }
      this.loadPhoto(e, this.getImageUrl(r));
    } catch {}
  }
  getImageUrl(e) {
    let r = this.getJsonValue(e, "w", "url");
    if (!r.startsWith("http")) {
      let t = "postcards/selfie/";
      (this.getType() === a.TYPE_PHOTO_POSTER && (t = ""),
        r.endsWith(".png") || (r += ".png"),
        (r = this.ownHandler.storiesImageUrlBase + t + r));
    }
    return r;
  }
  loadPhoto(e, r) {
    let t;
    try {
      t = JSON.parse(e);
    } catch {
      return;
    }
    let i = r ?? this.getImageUrl(t);
    this._ra334951a4a0f09(i);
    let s = this.getJsonValue(t, "n", "creator_name"),
      o = this.getJsonValue(t, "s", "creator_id"),
      d = this.getJsonValue(t, "u", "unique_id"),
      c = this.getJsonValue(t, "t", "time"),
      f = new Date(Number(c));
    if (
      (s.length > 0 &&
        (((this._window?.findChildByName("senderName")).caption = s),
        this._window?.findChildByName("senderNameButton") &&
          (this._window.findChildByName("senderNameButton").visible = !0),
        (this.var_1250 = Number.parseInt(o, 10) || 0),
        ((this._window?.findChildByName("creationDate")).caption =
          `${f.getDate()}-${f.getMonth() + 1}-${f.getFullYear()}`)),
      (this.ownHandler.storiesImageShareUrl?.length ?? 0) > 4)
    ) {
      let _ = this.ownHandler.storiesImageShareUrl.replace("%id%", d),
        h = this._window?.findChildByName("urlField");
      (h && (h.caption = _), (this._r4c5d0b6a622c5e = _));
    }
    let l = this.getJsonValue(t, "m", "caption"),
      b = this._window?.findChildByName("captionText");
    b && (b.text = l);
  }
  getJsonValue(e, r, t = null) {
    let i = n(
        (o) => (typeof o == "string" ? o : typeof o == "number" || typeof o == "boolean" ? String(o) : ""),
        "_ib4f248cdae1b6b",
      ),
      s = i(e[r]);
    return s.length > 0 ? s : t == null ? "" : i(e[t]);
  }
  _ra334951a4a0f09(e) {
    ua.getJSONValue(e) ||
      (this._r41c64f5d9d7f4f(),
      (this._rf62c4dad9a3906 = new StringUtil("image/png")),
      this._rf62c4dad9a3906.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rf309bbcc5112ed),
      this._rf62c4dad9a3906.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._ra189ddc9cb67d6),
      this._rf62c4dad9a3906.load(new _i636490202c0f9a(e)));
  }
  drawImage(e) {
    if (this._window == null || this.var_184 == null) return;
    ((this._rebe675007b9f13 = e.width),
      (this._r708bb29b78ce5f = e.height),
      (this.var_184.width = e.width + 2),
      (this.var_184.height = e.height + 2),
      this.var_184.bitmap?.dispose(),
      (this.var_184.bitmap = new A(
        this.var_184.width,
        this.var_184.height,
        !0,
        0,
      )));
    let r = new Pe(),
      t = new _i4210dc3239901d();
    ((t.color = 0),
      (r.ty += 1),
      this.var_184.bitmap.draw(e, r, t),
      (r.tx += 1),
      (r.ty -= 1),
      this.var_184.bitmap.draw(e, r, t),
      (r.ty += 2),
      this.var_184.bitmap.draw(e, r, t),
      (r.ty -= 1),
      (r.tx += 1),
      this.var_184.bitmap.draw(e, r, t),
      (r.tx -= 1),
      this.var_184.bitmap.draw(e, r),
      (this._window.visible = !0));
    let i = this._window.findChildByName("previousButton"),
      s = this._window.findChildByName("nextButton"),
      o = this._window.findChildByName("bgBorder"),
      d = this._window.findChildByName("buttonContainer"),
      c = this._window.findChildByName("senderNameButton"),
      f = this._window.findChildByName("creationDate");
    if (!(i == null || s == null || o == null || d == null)) {
      if (
        ((i.x = a.HORIZONTAL_ITEM_SPACING),
        (o.x = 0),
        (o.y = 0),
        (this.var_184.x = a.HORIZONTAL_ITEM_SPACING * 2 + i.width),
        (this.var_184.y = a.VERTICAL_SPACE),
        (o.height = this._window.height = this.var_184.height + a.VERTICAL_SPACE * 2),
        (o.width = this._window.width =
          this.var_184.width + a.HORIZONTAL_ITEM_SPACING * 4 + i.width * 2),
        c && (c.x = this.var_184.right - c.width - 3),
        c && (c.y = this.var_184.bottom),
        f && (f.x = this.var_184.x + 3),
        f && (f.y = this.var_184.bottom),
        (d.y = 0),
        (d.x = o.right - d.width),
        (s.x = this.var_184.right + a.HORIZONTAL_ITEM_SPACING),
        this.var_3552)
      )
        ((i.visible = !1), (s.visible = !1));
      else {
        let l = this._rc5e257e35d2238().length > 1;
        ((i.visible = l), (s.visible = l));
      }
      (this._window.activate(), this.updateWindowPosition());
    }
  }
  _r73b4261ab48b98() {
    let e = this.ownHandler.extraDataServiceUrl + this._r21fcda32c1b3fb;
    (this._r44442c4c5d0dc7(),
      (this._r8a19ce384ecc77 = new _ib182ac399b1881()),
      this._r8a19ce384ecc77.addEventListener(_i9006bf9233cf9a._re0bd97c8c9195c, this._r11ef5c1f202325),
      this._r8a19ce384ecc77.addEventListener(M.ComponentDependency, this._r3257c8a9ebdc48),
      this._r8a19ce384ecc77.addEventListener(_i207e0270849f6a._rb9739f8a5177c3, this._reaca6a7ba03893),
      this._r8a19ce384ecc77.load(new _i636490202c0f9a(e)));
  }
  _rd076abd1ede6e8() {
    ((this._r21fcda32c1b3fb = null),
      (this.var_1250 = 0),
      (this._r4c5d0b6a622c5e = null),
      ((this._window?.findChildByName("captionText")).text = ""),
      this._window?.findChildByName("senderNameButton") &&
        (this._window.findChildByName("senderNameButton").visible = !1),
      ((this._window?.findChildByName("senderName")).caption = ""),
      ((this._window?.findChildByName("creationDate")).caption = ""),
      this._reefdd0ef3be445 && (this._reefdd0ef3be445.visible = !1),
      this.drawImage(
        new A(
          Math.max((this.var_184?.width ?? 3) - 2, 1),
          Math.max((this.var_184?.height ?? 3) - 2, 1),
          !1,
          0,
        ),
      ));
  }
  _r41c64f5d9d7f4f() {
    (this._rf62c4dad9a3906?.removeEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rf309bbcc5112ed),
      this._rf62c4dad9a3906?.removeEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._ra189ddc9cb67d6),
      (this._rf62c4dad9a3906 = null));
  }
  _r44442c4c5d0dc7() {
    (this._r8a19ce384ecc77?.removeEventListener(_i9006bf9233cf9a._re0bd97c8c9195c, this._r11ef5c1f202325),
      this._r8a19ce384ecc77?.removeEventListener(M.ComponentDependency, this._r3257c8a9ebdc48),
      this._r8a19ce384ecc77?.removeEventListener(_i207e0270849f6a._rb9739f8a5177c3, this._reaca6a7ba03893),
      (this._r8a19ce384ecc77 = null));
  }
  updateWindowPosition() {
    if (this._window == null || this.var_82?.context?.dispatchEvent?.stage == null) {
      this._window?.center();
      return;
    }
    let e = this.var_82.context.dispatchEvent.stage,
      r = (e.stageWidth - 100) / this._rebe675007b9f13,
      t = (e._rcc0ac91bd808af - 200) / this._r708bb29b78ce5f;
    ((this._window.x = r < 1 ? 50 : (e.stageWidth - this._window.width) * 0.5),
      (this._window.y = t < 1 ? 50 : (e._rcc0ac91bd808af - this._window.height) * 0.5));
    let i = this._window.findChildByName("previousButton"),
      s = this._window.findChildByName("nextButton"),
      o = this._window.findChildByName("bgBorder");
    if (i != null && s != null && o != null) {
      let d =
        o.height > e._rcc0ac91bd808af ? e._rcc0ac91bd808af / 2 - i.height / 2 : o.height / 2 - i.height / 2;
      ((i.y = d), (s.y = d));
    }
  }
  onWindowEvent = n((e, r) => {
    if (
      (r === this._window && e.type === y.const_411 && this.updateWindowPosition(),
      e.type === u.CLICK)
    )
      switch (r.name) {
        case "closebutton":
          this.hide();
          break;
        case "removebutton": {
          this.windowManager
            ?.confirm(
              this.localizations?.getLocalization("inventory.remove.external_image_wallitem_header") ?? "",
              this.localizations?.getLocalization("inventory.remove.external_image_wallitem_body") ?? "",
              0,
              this._r1d33f1d035928f,
            )
            ?._r3fecca3423f155(
              HabboAlertDialogFlag.const_427,
              new _iada4b60c6952bf(
                this.localizations?.getLocalization("inventory.remove.external_image_wallitem_delete") ?? "",
                "",
                !0,
              ),
            );
          break;
        }
        case "makeOwnButton":
          if (this.getType() === a.TYPE_PHOTO_POSTER) {
            let t = new HabboToolbarEvent(HabboToolbarEvent.CAMERA_TOGGLE);
            ((t.iconName = HabboToolbarEvent.CAMERA_LAUNCH_ORIGIN_EIW_MAKE_OWN),
              this.ownHandler.container?.toolbar?.events?.dispatchEvent?.(t),
              this.hide());
          } else
            (this.var_82?.getInteger("spaweb", 0) ?? 0) === 1
              ? Ae.openPage("/stories/cards/selfie/edit")
              : this.var_82?.context._r6b6c989018eb05(
                  "games/play/elisa_habbo_stories?ref=btn_selfie_myo",
                );
          break;
        case "shareButton":
          (this._window?.findChildByName("shareArea") &&
            (this._window.findChildByName("shareArea").visible = !0),
            this.ownHandler.container?._r697386a8fb5bf8?.trackEventLog(
              "Stories",
              "shareopened",
              "stories.share.clicked",
              this._rac1023becf17eb,
            ));
          break;
        case "twitterShare":
          (this._r4c5d0b6a622c5e &&
            _i7dcfde9cf3179b(new _i636490202c0f9a("http://www.twitter.com/share?url=" + this._r4c5d0b6a622c5e), "_blank"),
            this.ownHandler.container?._r697386a8fb5bf8?.trackEventLog(
              "Stories",
              "twitter",
              "stories.share.clicked",
              this._rac1023becf17eb,
            ));
          break;
        case "fbShare":
          (this._r4c5d0b6a622c5e &&
            _i7dcfde9cf3179b(new _i636490202c0f9a("https://www.facebook.com/sharer/sharer.php?u=" + this._r4c5d0b6a622c5e), "_blank"),
            this.ownHandler.container?._r697386a8fb5bf8?.trackEventLog(
              "Stories",
              "facebook",
              "stories.share.clicked",
              this._rac1023becf17eb,
            ));
          break;
        case "senderNameButton":
          this.ownHandler._rb13ed3a89b85ae(new class_2134(this.var_1250));
          break;
        case "urlField": {
          let t = this._window?.findChildByName("urlField");
          (t?._r1c386c8571c5d9(0, t.length),
            this.ownHandler.container?._r697386a8fb5bf8?.trackEventLog(
              "Stories",
              "fieldselected",
              "stories.share.clicked",
              this._rac1023becf17eb,
            ));
          break;
        }
        case "reportButton":
          this._rf3a54d83e39d08();
          break;
        case "nextButton":
          this._ra84695f3038e51();
          break;
        case "previousButton":
          this._rccb79bfc15a522();
          break;
      }
  }, "onWindowEvent");
  _rf309bbcc5112ed = n((e) => {
    let r = e.target;
    if (!(r == null || r !== this._rf62c4dad9a3906))
      try {
        let t = new _ifdd92074c780c7().decode(r.bytes);
        t != null && this.drawImage(t);
      } catch {
      } finally {
        this._r41c64f5d9d7f4f();
      }
  }, "_rf309bbcc5112ed");
  _ra189ddc9cb67d6 = n((e) => {
    this._r41c64f5d9d7f4f();
  }, "_ra189ddc9cb67d6");
  _r864466b37a6e3d = n((e) => {
    e != null && !ua.getJSONValue(e.link) && _i7dcfde9cf3179b(new _i636490202c0f9a(e.link), "_blank");
  }, "_r864466b37a6e3d");
  _r11ef5c1f202325 = n((e) => {
    e.status === 403 &&
      this.ownHandler._r323167d04fe54f() &&
      this._reefdd0ef3be445 != null &&
      (this._reefdd0ef3be445.visible = !0);
  }, "_r11ef5c1f202325");
  _reaca6a7ba03893 = n((e) => {
    (this._reefdd0ef3be445?.visible, this._r44442c4c5d0dc7());
  }, "_reaca6a7ba03893");
  _r3257c8a9ebdc48 = n((e) => {
    let r = e.target,
      t = typeof r?.data == "string" ? r.data : "";
    (this._r44442c4c5d0dc7(), t.length > 0 && this.loadPhoto(t, null));
  }, "_r3257c8a9ebdc48");
  _rf3a54d83e39d08() {
    this._habboHelp?._rb3ae2d581b50de(
      this.var_1250,
      this._window?.findChildByName("senderName")?.caption ?? "",
      this._r21fcda32c1b3fb ?? "",
      this._rc6b02514c64793,
    );
  }
  getType() {
    switch (this._rac1023becf17eb) {
      case "external_image_wallitem_poster":
      case "external_image_wallitem_poster_small":
        return a.TYPE_PHOTO_POSTER;
      case "external_image_wallitem":
        return a.TYPE_SELFIE;
      default:
        return a.TYPE_LEGACY;
    }
  }
  _r1d33f1d035928f = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 && this.ownHandler._r6bb1cbe225bc83(this._rc6b02514c64793));
  }, "_r1d33f1d035928f");
  _ra84695f3038e51() {
    let e = this._rc5e257e35d2238();
    e.length > 0 &&
      (this._r95dc848fd03f3b++,
      this._r95dc848fd03f3b > e.length - 1 && (this._r95dc848fd03f3b = 0),
      this._ra56b220b7d53ae(e[this._r95dc848fd03f3b]));
  }
  _rccb79bfc15a522() {
    let e = this._rc5e257e35d2238();
    e.length > 0 &&
      (this._r95dc848fd03f3b--,
      this._r95dc848fd03f3b < 0 && (this._r95dc848fd03f3b = e.length - 1),
      this._ra56b220b7d53ae(e[this._r95dc848fd03f3b]));
  }
  _rc5e257e35d2238() {
    let e = [],
      r = this._roomEngine?._r674ea2583b28b6(RoomObjectCategoryEnum.const_909) ?? [];
    for (let t of r) t.getType() === this._rac1023becf17eb && e.push(t);
    return e;
  }
}
