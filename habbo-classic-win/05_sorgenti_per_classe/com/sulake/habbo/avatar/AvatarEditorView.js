// Extracted from HabboAirLauncher.deobf.js, line 165248.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarEditorView.as
// Obfuscated name: _ic4f18ac7675c85

class a {
  static {
    n(this, "AvatarEditorView");
  }
  static _rf08f47ede879b1;
  static _re230ffbc465611;
  static TAB_BACKGROUND_COLOUR = 6710886;
  static SAVE_TIMEOUT_MS = 1500;
  static DEFAULT_LOCATION = new E(100, 30);
  _editor;
  var_52 = null;
  _r61da1e056ed1bd = "";
  var_476 = null;
  var_124 = null;
  var_1871 = null;
  var_851;
  var_2021 = 4;
  _r999eb871029bb7 = "";
  _rbfdf1d091d01a3 = !0;
  _r2c4608823874c4 = [];
  _allCategories = [
    class_1962.GENERIC,
    class_1962.HEAD,
    class_1962.TORSO,
    class_1962.const_94,
    class_1962.const_99,
    class_1962.WARDROBE,
    class_1962.NFT_FIGURES,
  ];
  _r75a52bdcba124f = new Map();
  _r23af78f6d498ca = null;
  _r6e4e1eff798999 = null;
  _ref42b17e53a2b0 = null;
  constructor(e, r) {
    ((this._editor = e),
      (this.var_851 = new UnkEventDispatcherWrapperSubclass_05394e(a.SAVE_TIMEOUT_MS, 1)),
      this.var_851.addEventListener(DeBouncer.addEventListener, this.onUpdate),
      e.manager.getBoolean("effects.in.avatar.editor") && this._allCategories.push(class_1962.const_65),
      e.manager.getBoolean("clothing.misc.tab.enabled") && this._allCategories.push(class_1962.MISC),
      r == null && (r = this._allCategories),
      (this._r2c4608823874c4 = [...r]),
      this.createWindow());
  }
  dispose() {
    (this.var_851?.stop(),
      this.var_851?.removeEventListener(DeBouncer.addEventListener, this.onUpdate),
      (this.var_851 = null),
      this.var_476?.dispose(),
      (this.var_476 = null),
      this.var_52?.dispose(),
      (this.var_52 = null),
      this.var_1871?.dispose(),
      (this.var_1871 = null),
      this.var_124?.dispose(),
      (this.var_124 = null),
      this._r23af78f6d498ca?.dispose(),
      (this._r23af78f6d498ca = null),
      this._r6e4e1eff798999?.dispose(),
      (this._r6e4e1eff798999 = null),
      (this._editor = null));
  }
  getFrame(e, r = null) {
    if (this.var_124 != null)
      return ((this.var_124.visible = !0), this.var_124.activate(), this.var_124);
    let t = this._editor?.manager.assets.getAssetByName("AvatarEditorFrame");
    if (
      ((this.var_124 =
        t != null ? this._editor?.manager.windowManager.buildFromXML(t.content) : null),
      this.var_124 == null)
    )
      return null;
    let i = this.var_124.findChildByName("maincontent");
    if (!this.embedToContext(i, e))
      return (this.var_124.dispose(), (this.var_124 = null), null);
    (r != null &&
      this.var_124.header?.title != null &&
      (this.var_124.header.title.text = r),
      (this.var_124.position = a.DEFAULT_LOCATION));
    let s = this.var_124.findChildByName("header_button_close");
    return (s != null && (s.procedure = this.windowEventProc), this.var_124);
  }
  embedToContext(e, r) {
    if (!this.validateAvailableCategories(r)) return !1;
    if (e != null && this.var_52 != null) {
      let t = e.getChildIndex(this.var_52);
      (t >= 0 && e.removeChildAt(t), e.addChild(this.var_52));
    } else
      this.var_52 != null &&
        ((this.var_1871 ??= this._editor?.manager.windowManager.createWindow(
          "avatarEditorContainer",
          "",
          0,
          0,
          0,
          this.var_52.rectangle,
          null,
          0,
        )),
        this.var_1871.addChild(this.var_52),
        (this.var_1871.visible = !0));
    return !0;
  }
  validateAvailableCategories(e) {
    let r = e ?? this._allCategories;
    return r.length !== this._r2c4608823874c4.length
      ? !1
      : r.every((t) => this._r2c4608823874c4.indexOf(t) >= 0);
  }
  show() {
    this.var_124 != null
      ? (this.var_124.visible = !0)
      : this.var_52 != null && (this.var_52.visible = !0);
  }
  hide() {
    this.var_124 != null
      ? (this.var_124.visible = !1)
      : this.var_52 != null && (this.var_52.visible = !1);
  }
  update() {
    let e = this.var_52?.findChildByName("wardrobeButtonContainer");
    e != null && this._editor?.manager.sessionData != null && (e.visible = this._editor._re5f6495f0a60f7());
    let r = class_2721.NOTHING;
    ((this._r999eb871029bb7 === class_2721.WARDROBE || this._rbfdf1d091d01a3) && (r = class_2721.WARDROBE),
      this._editor?._re5f6495f0a60f7() || (r = class_2721.NOTHING),
      this._editor?._rd7d66acd2357e4() && (this._editor._r5adbfe08bb0631(), this._editor._rdebb8ed32752a2()),
      this._editor?._r94a3064a5ce3d6() && this._editor.stripInvalidSellableItems(),
      this._r2343f5bef436bf(r),
      this._r7cc87a2b8f843b(this._r61da1e056ed1bd));
  }
  toggleCategoryView(e, r = !1) {
    this._r7cc87a2b8f843b(e);
  }
  get effectsParamViewContainer() {
    return this.var_52?.findChildByName("effectParamsContainer");
  }
  get collectiblesAvatarInfoContainer() {
    return this.var_52?.findChildByName("collectible_avatar_info");
  }
  getCategoryContainer(e) {
    return this._r75a52bdcba124f.get(e) ?? null;
  }
  get _rec117ee421e0a7() {
    if (this._r23af78f6d498ca == null) throw new Error("Avatar editor grid view is not available.");
    return this._r23af78f6d498ca;
  }
  get _r86b806224cc448() {
    if (this._r6e4e1eff798999 == null) throw new Error("Avatar editor effects grid view is not available.");
    return this._r6e4e1eff798999;
  }
  getFigureContainer() {
    return this.var_52?.findChildByName("avatarWidget");
  }
  get editor() {
    if (this._editor == null) throw new Error("Avatar editor is not available.");
    return this._editor;
  }
  get _r3d2f3ad58a83b5() {
    return this._ref42b17e53a2b0;
  }
  get _r74b6b05b2b5b84() {
    return this._r61da1e056ed1bd;
  }
  onUpdate = n((e) => {
    (this.var_851?.stop(), this.var_52?.findChildByName("save")?.enable());
  }, "onUpdate");
  createWindow() {
    if (this.var_52 == null) {
      let i = this._editor?.manager.assets.getAssetByName("AvatarEditorContent");
      this.var_52 = i != null ? this._editor?.manager.windowManager.buildFromXML(i.content) : null;
    }
    if (this.var_52 == null) return;
    if (
      (a._rf08f47ede879b1 == null &&
        ((a._rf08f47ede879b1 = this.var_52.findChildByName("thumb_template")),
        this.var_52.removeChild(a._rf08f47ede879b1)),
      a._re230ffbc465611 == null &&
        ((a._re230ffbc465611 = this.var_52.findChildByName("palette_template")),
        this.var_52.removeChild(a._re230ffbc465611)),
      this._editor?.manager.sessionData != null)
    ) {
      let i = this.var_52.findChildByName("avatar_name");
      i != null && (i.caption = this._editor.manager.sessionData.userName);
      let s = this.var_52.findChildByName("avatar_name_change");
      s != null && (s.visible = this._editor.manager.getBoolean("premium.name.change.enabled"));
    }
    ((this.var_52.procedure = this.windowEventProc),
      (this.var_476 = this.var_52.findChildByName("mainTabs")));
    let e = [];
    for (let i = (this.var_476?.numTabItems ?? 0) - 1; i >= 0; i--) {
      let s = this.var_476?.getTabItemAt(i) ?? null;
      if (s != null && (e.push(s.name), this._r2c4608823874c4.indexOf(s.name) < 0)) {
        this.var_476?._ra8b044f5467c44(s);
        for (let o = i + 1; o < (this.var_476?.numTabItems ?? 0); o++) {
          let d = this.var_476?.getTabItemAt(o);
          d != null && (d.x -= s.width);
        }
      }
    }
    let r = this.var_52.findChildByName("contentArea");
    for (let i of e) {
      let s = r?.findChildByName(`${i}_content`) ?? null;
      s != null && r != null && this._r75a52bdcba124f.set(i, r.removeChild(s));
    }
    ((this._r23af78f6d498ca = new o6e(this.var_52.findChildByName("grid_container"))),
      (this._r6e4e1eff798999 = new AvatarEditorGridViewEffects(this.var_52.findChildByName("grid_container"))));
    let t = this.var_476?.getTabItemAt(0) ?? null;
    (t != null && this.var_476?.selector?.setSelected(t), this.update());
  }
  toggleWardrobe() {
    this._r999eb871029bb7 === class_2721.WARDROBE
      ? ((this._rbfdf1d091d01a3 = !1), this._r2343f5bef436bf(class_2721.NOTHING))
      : this._r2343f5bef436bf(class_2721.WARDROBE);
  }
  _r2343f5bef436bf(e) {
    if (this._r999eb871029bb7 === e) return;
    let r = this.var_52?.findChildByName("sideContainer");
    if (r == null) return;
    let t = null;
    switch (e) {
      case class_2721.WARDROBE:
        t = this._editor?._ra3b3be725340e6(class_2721.WARDROBE) ?? null;
        break;
    }
    let i = r.numChildren > 0 ? r.removeChildAt(0) : null;
    (i != null && this.var_52 != null && (this.var_52.width -= i.width),
      t != null ? (r.addChild(t), (t.visible = !0), (r.width = t.width)) : (r.width = 1),
      (this._r999eb871029bb7 = e),
      this.var_124?.content != null &&
        this.var_52 != null &&
        (this.var_124.content.width = this.var_52.width));
  }
  _r7cc87a2b8f843b(e) {
    if (e == null || e === "" || this.var_52 == null) return;
    let r = this.var_52.findChildByName("contentArea");
    if (r == null) return;
    ((this.effectsParamViewContainer.visible = e === class_1962.const_65), (this.collectiblesAvatarInfoContainer.visible = !1));
    let t = this.var_52.findChildByName("wardrobe");
    if (
      (class_1962.NFT_FIGURES === e
        ? ((this._rbfdf1d091d01a3 = !1), t?.disable(), this._r2343f5bef436bf(class_2721.NOTHING))
        : t?.enable(),
      r.numChildren > 0)
    ) {
      let o = r.getChildAt(0);
      o != null && (r.removeChild(o), r.invalidate());
    }
    let i = this._editor?._r4f55c92004138f(e) ?? null;
    if (i == null) return;
    (this._r23af78f6d498ca?.window && (this._r23af78f6d498ca.window.visible = !1),
      this._r6e4e1eff798999?.window && (this._r6e4e1eff798999.window.visible = !1),
      (i.visible = !0),
      r.addChild(i),
      this._editor?._r5415e1b9ed2b71(e),
      (this._r61da1e056ed1bd = e));
    let s = this.var_476?._r7efb7a6593b71d(e) ?? null;
    s != null && this.var_476?.selector?.setSelected(s);
  }
  windowEventProc = n((e, r) => {
    if (e.type === y.const_238) {
      let t = r.selector?.getSelected()?.name ?? "";
      if (t !== this._r61da1e056ed1bd) {
        let i = !1,
          s = !1,
          o = !1;
        (t !== class_1962.const_65 &&
          t !== class_1962.const_99 &&
          (this._editor?._r8af0d93e259a36() && class_1962.NFT_FIGURES === t
            ? (o = !0)
            : this._editor?._r8af0d93e259a36() && t !== class_1962.NFT_FIGURES
              ? (i = !0)
              : this._editor?._r4eda9eafc5a876() && t !== class_1962.NFT_FIGURES && (s = !0)),
          this._editor?._r8af0d93e259a36() && t === class_1962.const_65 && (o = !0),
          this._editor?._r8272d61a8bc2d8(t),
          i
            ? this._editor?._rea3b3a64aa10ff()
            : s
              ? this._editor?._rd7297977441107()
              : o && this._editor?._rb588712468c380());
      }
      return;
    }
    if (e.type === u.CLICK)
      switch (r.name) {
        case "save":
          if (this._editor != null && !this._editor._rbe34c96e95ae2b() && this._editor._r94a3064a5ce3d6()) {
            (this.startSellablePurchase(),
              this.var_851?.start(),
              this.var_52?.findChildByName("save")?.disable());
            return;
          }
          if (this._editor != null && !this._editor._rbe34c96e95ae2b() && this._editor._rd7d66acd2357e4()) {
            (this._editor._rdb48c761d7df2c(),
              this.var_851?.start(),
              this.var_52?.findChildByName("save")?.disable());
            return;
          }
          (this.var_851?.start(),
            this.var_52?.findChildByName("save")?.disable(),
            this._editor?._r5b1559620030ae(),
            this._editor != null && this._editor.manager.close(this._editor._rf995f276280e41));
          break;
        case "cancel":
        case "header_button_close":
          (this._editor?._rd7d66acd2357e4() &&
            (this._editor._r5adbfe08bb0631(), this._editor._rdebb8ed32752a2()),
            this._editor != null && this._editor.manager.close(this._editor._rf995f276280e41));
          break;
        case "rotate_avatar":
          (this.var_2021++,
            this.var_2021 > 7 && (this.var_2021 = 0),
            this._editor != null && (this._editor.figureData.direction = this.var_2021));
          break;
        case "wardrobe":
          this.toggleWardrobe();
          break;
        case "avatar_name_change":
          this._ref42b17e53a2b0 != null
            ? this._ref42b17e53a2b0.focus()
            : this.var_52 != null &&
              (this._ref42b17e53a2b0 = new f6e(
                this,
                this.var_52.x + this.var_52.width,
                this.var_52.y,
              ));
          break;
      }
  }, "windowEventProc");
  startSellablePurchase() {
    this._editor?.manager.catalog?.openCatalogPage(this._editor.manager.getProperty("catalog.clothes.page"));
  }
}
