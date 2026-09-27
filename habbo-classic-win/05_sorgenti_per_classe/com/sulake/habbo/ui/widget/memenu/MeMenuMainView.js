// Estratto da HabboAirLauncher.deobf.js, riga 323276.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/memenu/MeMenuMainView.as
// Nome offuscato: _ia8a8bd0c654777

class a {
  static {
    n(this, "MeMenuMainView");
  }
  static VIEW_ELEMENT_TYPE_MINI_MAIL = "minimail";
  var_17 = null;
  _window = null;
  _r9085b30609bb99 = new Map();
  communication = null;
  _config;
  constructor(e) {
    this._config = e;
  }
  init(e, r) {
    ((this._r9085b30609bb99 = new Map([
      ["rooms_icon", ["gohome_white", "gohome_color"]],
      ["dance_icon", ["dance_white", "dance_color"]],
      ["clothes_icon", ["clothes_white", "clothes_color"]],
      ["effects_icon", ["effects_white", "effects_color"]],
      ["badges_icon", ["badges_white", "badges_color"]],
      ["wave_icon", ["wave_white", "wave_color"]],
      ["hc_icon", ["_white", "_color"]],
      ["settings_icon", ["settings_white", "settings_color"]],
      ["credits_icon", ["credits_white", "credits_color"]],
      ["minimail_icon", ["minimail_white", "minimail_color"]],
      ["profile_icon", ["profile_white", "profile_color"]],
      ["achievements_icon", ["achievements_white", "achievements_color"]],
      ["talents_icon", ["compass_white", "compass_color"]],
      ["guide_icon", ["lighthouse_white", "lighthouse_color"]],
    ])),
      (this.var_17 = e),
      (this.communication = new _i2c7b489ce44a85(this._r773ce30a57f0a5)),
      this.var_17.handler.container?.connection?.addMessageEvent(this.communication),
      this.createWindow(r));
  }
  dispose() {
    (this.communication != null &&
      (this.var_17?.handler.container?.connection?.removeMessageEvent(this.communication),
      (this.communication = null)),
      (this.var_17 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get window() {
    return this._window;
  }
  setIconAssets(e, r, t = null, i = null) {
    let s = this._r9085b30609bb99.get(e);
    s != null && (t != null && (s[0] = t), i != null && (s[1] = i), this.setElementImage(e, t ?? s[0]));
  }
  updateUnseenItemCount(e, r) {
    switch (e) {
      case a.VIEW_ELEMENT_TYPE_MINI_MAIL:
        this.updateUnseenCounter("minimail", this.var_17?.habboClubPeriods ?? 0);
        break;
    }
  }
  createWindow(e) {
    if (this.var_17 == null) return;
    let r = "memenu_main",
      t = !1;
    (this.var_17.config?.getBoolean("simple.memenu.enabled") ?? !1) && ((r += "_simple"), (t = !0));
    let i = this.var_17.assets?.getAssetByName(r);
    if (
      (i != null && (this._window = this.var_17.windowManager?.buildFromXML(i.content)),
      this._window == null)
    )
      throw new Error("Failed to construct me menu main window from XML!");
    if (
      ((this._window.name = e),
      !(this.var_17.config?.getBoolean("talent.track.enabled") ?? !1) && t)
    ) {
      let s = this._window.findChildByName("guide"),
        o = this._window.findChildByName("talents");
      s != null && o != null && ((s.rectangle = o.rectangle.clone()), (o.visible = !1));
    }
    (this.var_17.config?.getBoolean("guides.enabled") ?? !1) &&
      this.setGuideToolVisibility(
        this.var_17.handler.container?.sessionDataManager?.isPerkAllowed(class_2156.USE_GUIDE_TOOL) ?? !1,
      );
    for (let [s, o] of this._r9085b30609bb99.entries()) {
      let d = o[0],
        c = 1;
      switch (s) {
        case "dance_icon":
        case "wave_icon":
          this.var_17._r8077167eb58f3e && (c = 0.5);
          break;
        case "effects_icon":
          this.var_17.isDancing && (c = 0.5);
          break;
        case "hc_icon":
          if (((d = `${this.getClubAssetNameBase() ?? ""}${d}`), !this.var_17._r05fa11693c7edb))
            this.setElementText(
              "hc_text",
              this.var_17.localizations?.getLocalization("widget.memenu.hc.join") ?? "",
            );
          else {
            let f =
              this.var_17._rec83777ad37c63 === dr.VIP ? "widget.memenu.vip" : "widget.memenu.hc";
            (this.var_17._r7877526841e248 > 0 && (f += ".long"),
              this.var_17.localizations?._r43eae9731f5b27(
                f,
                "days",
                String(this.var_17._rb69c468195d1cc),
              ),
              this.var_17.localizations?._r43eae9731f5b27(
                f,
                "months",
                String(this.var_17._r7877526841e248),
              ),
              this.setElementText(
                "hc_text",
                this.var_17.localizations?.getLocalization(f) ?? "",
              ));
          }
          break;
        case "minimail_icon":
          if (!this.var_17.habboClubLevel) c = 0.5;
          else {
            let f = this.var_17.habboClubPeriods;
            (f === -1 || f > 0) && this.updateUnseenCounter("minimail", f);
          }
          break;
      }
      this.setElementImage(s, d, c);
    }
    for (let s = 0; s < this._window.numChildren; s++) {
      let o = this._window.getChildAt(s);
      (o?.addEventListener(u.CLICK, this.onButtonClicked),
        o?.addEventListener(u.OVER, this._r66486072db3ae8),
        o?.addEventListener(u.OUT, this._r66486072db3ae8));
    }
  }
  updateUnseenCounter(e, r) {
    let t = this._window?.findChildByName(e);
    if (t == null) return;
    let i = t.findChildByName("unseen_counter");
    if (r === 0) {
      i != null && (t.removeChild(i), t.invalidate());
      return;
    }
    if (i == null) {
      if (((i = this.var_17?.windowManager?.createUnseenItemCounter() ?? null), i == null)) return;
      ((i.name = "unseen_counter"), t.addChild(i));
    }
    let s = i.findChildByName(class_4005.VALUE_ELEMENT_NAME);
    (s != null && (s.text = r > 0 ? r.toString() : " "), (i.x = t.width - i.width - 5), (i.y = 5));
  }
  getClubAssetNameBase() {
    switch (this.var_17?._rec83777ad37c63) {
      case dr.NO_CLUB:
      case dr.CLUB:
        return "club";
      case dr.VIP:
        return "vip";
      default:
        return null;
    }
  }
  setElementImage(e, r, t = 1) {
    let i = this._window?.findChildByName(e),
      o = this.var_17?.assets?.getAssetByName(r)?.content?.clone() ?? null;
    if (i == null || o == null) return;
    i.bitmap = new A(i.width, i.height, !0, 0);
    let d = Math.floor((i.width - o.width) / 2),
      c = Math.floor((i.height - o.height) / 2);
    (i.bitmap.copyPixels(o, o.rect, new E(d, c)), (i.blend = t));
  }
  setElementText(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.text = r);
  }
  onButtonClicked = n((e) => {
    let t = e.target?.name ?? "";
    switch (t) {
      case "dance":
        if (this.var_17?._r8077167eb58f3e) return;
        this.var_17?.changeView(pb.const_634);
        break;
      case "wave":
      case "blow": {
        if (this.var_17?._r8077167eb58f3e) return;
        this.var_17?.isDancing &&
          (this.var_17._r1515e6bde00451?.RoomWidgetLetUserInMessage(new sc(sc._r7ab15ec5563b55)),
          (this.var_17.isDancing = !1));
        let i = jo.WAVE;
        (t === "blow" && (i = jo.BLOW),
          this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new Jl(i)),
          this.var_17?.hide());
        break;
      }
      case "effects":
        if (this.var_17?.isDancing) return;
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetRequestWidgetMessage(RoomWidgetRequestWidgetMessage.REQUEST_EFFECTS)),
          this.var_17?.hide());
        break;
      case "rooms":
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new bI()), this.var_17?.hide());
        break;
      case "badges":
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new s_(s_.INVENTORY_BADGES)),
          this.var_17?.hide());
        break;
      case "clothes":
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetAvatarEditorMessage(RoomWidgetAvatarEditorMessage.const_198)),
          this.var_17?.hide());
        break;
      case "hc":
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new v1(v1.CATALOG_CLUB)),
          this.var_17?.hide());
        break;
      case "settings":
        this.var_17?.changeView(pb.const_723);
        break;
      case "minimail":
        this.var_17?.habboClubLevel &&
          (Ae.openMinimail("#mail/inbox/"), this.var_17.hide());
        break;
      case "credits":
        (Ae.openWebPageAndMinimizeClient(this._config?.getProperty("web.shop.relativeUrl") ?? ""),
          this.var_17?.hide());
        break;
      case "profile":
        (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
          new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, this.var_17.userId, "me_menu"),
        ),
          this.var_17?.hide());
        break;
      case "achievements":
        (this.var_17?.handler.container?.questEngine?._r771098bda9d4ec(),
          this.var_17?.hide());
        break;
      case "guide":
        (this.var_17?.handler.container?.toolbar?._r2b0be5baed9721("GUIDE"),
          this.var_17?.hide());
        break;
      case "talents": {
        let i = this.var_17?.handler.container?.sessionDataManager?.currentTalentTrack ?? "";
        (this.var_17?.handler.container?._r697386a8fb5bf8?.trackTalentTrackOpen(i, "memenu"),
          this.var_17?.handler.container?.connection?.send(new class_2687(i)));
        break;
      }
      default:
        break;
    }
    this.var_17?.handler.container?._r697386a8fb5bf8?.trackEventLog("MeMenu", "click", t);
  }, "onButtonClicked");
  _rea09cc3c4c3c3d(e, r) {
    e.dispose();
  }
  _r66486072db3ae8 = n((e) => {
    let t = e.target?.name ?? "",
      i = "",
      s = e.type === u.OVER ? 1 : 0;
    switch (t) {
      case "dance":
      case "wave":
        if (this.var_17?._r8077167eb58f3e) return;
        break;
      case "minimail":
        if (!this.var_17?.habboClubLevel) return;
        break;
      case "effects":
        if (this.var_17?.isDancing) return;
        break;
      case "hc":
        i = this.getClubAssetNameBase() ?? "";
        break;
    }
    let o = `${t}_icon`,
      d = this._r9085b30609bb99.get(o);
    d != null && this.setElementImage(o, `${i}${d[s]}`);
  }, "_r66486072db3ae8");
  _r773ce30a57f0a5 = n((e) => {
    let r = ClassUtils.getParser(e, class_2880);
    r != null && this.setGuideToolVisibility(r.isPerkAllowed(class_2156.USE_GUIDE_TOOL));
  }, "_r773ce30a57f0a5");
  setGuideToolVisibility(e) {
    if (this._window == null || this.var_17 == null) return;
    let r = this._window.findChildByName("guide"),
      t = this._window.findChildByName("achievements");
    r != null &&
      ((r.visible = e),
      (this._window.height = e ? r.bottom : (t?.bottom ?? this._window.height)),
      this.var_17.updateSize());
  }
}
