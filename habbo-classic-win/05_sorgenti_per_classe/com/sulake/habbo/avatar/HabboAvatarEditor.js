// Estratto da HabboAirLauncher.deobf.js, riga 165908.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/HabboAvatarEditor.as
// Nome offuscato: _iebf3ec4c001c8f

class a {
  static {
    n(this, "HabboAvatarEditor");
  }
  static DEFAULT_MALE_FIGURE = "hr-100.hd-180-7.ch-215-66.lg-270-79.sh-305-62.ha-1002-70.wa-2007";
  static DEFAULT_FEMALE_FIGURE = "hr-515-33.hd-600-1.ch-635-70.lg-716-66-62.sh-735-68";
  static MAX_COLOR_LAYERS = 2;
  var_3974;
  var_41;
  var_1989;
  _view = null;
  var_217 = !1;
  _categories = null;
  _r0dcfdec899bbb2 = null;
  _rd11fbef6771049 = new Map();
  var_106 = Ra.MALE;
  _figureString = "";
  var_1805 = null;
  var_3602 = !1;
  _r4e0f825c6aaad8 = !1;
  _r4d294ea9342c1a = null;
  _rf60da0560ae82b = 0;
  var_5124 = !1;
  var_2081 = null;
  var_2361 = null;
  _r761762eb26f1ab = a.DEFAULT_MALE_FIGURE;
  _r12b57fbbc4e6e8 = Ra.MALE;
  _r56869b707c921c = a.DEFAULT_MALE_FIGURE;
  _r6b734aec222830 = Ra.MALE;
  constructor(e, r, t = !1) {
    ((this.var_3974 = e),
      (this.var_41 = r),
      (this.var_1989 = this.var_41._rf0eb5f07c94cfb._rfcf470f2a585c5()),
      (this.var_5124 = t));
  }
  dispose() {
    this.var_2081 != null &&
      (this.var_41.communication?._r7668362bf55fdd(this.var_2081),
      (this.var_2081 = null));
    for (let e of this._categories?.getValues() ?? []) e.dispose();
    for (let e of this._r0dcfdec899bbb2?.getValues() ?? []) e.dispose();
    ((this._categories = null),
      (this._r0dcfdec899bbb2 = null),
      this._view?.dispose(),
      (this._view = null),
      (this.var_1989 = null),
      this._rd11fbef6771049.clear(),
      (this.var_1805 = null));
  }
  openWindow(e, r = null, t = !1, i = null, s = class_1962.GENERIC) {
    return (
      (this.var_1805 = e),
      (this.var_3602 = t),
      this.init(r),
      this._rdb751caff0731b(r, s),
      this._view?.getFrame(r, i) ?? null
    );
  }
  embedToContext(e = null, r = null, t = null, i = !1) {
    return (
      (this.var_1805 = r),
      (this.var_3602 = i),
      this.init(t),
      this._view?.embedToContext(e, t),
      this._rdb751caff0731b(t),
      !0
    );
  }
  loadAvatarInEditor(e, r, t = 0) {
    switch (r) {
      case Ra.MALE:
      case "m":
      case "M":
        r = Ra.MALE;
        break;
      case Ra.const_140:
      case "f":
      case "F":
        r = Ra.const_140;
        break;
      default:
        r = Ra.MALE;
        break;
    }
    this.clubMemberLevel = t;
    let i = !1,
      s = this._rd11fbef6771049.get(r) ?? null;
    if (s != null) {
      if (
        (s.loadAvatarData(e, r),
        r !== this.var_106 && ((this.gender = r), (i = !0)),
        this._figureString !== e && ((this._figureString = e), (i = !0)),
        this._categories != null && i)
      )
        for (let o of this._categories.getValues()) o.reset();
      this._view?.update();
    }
  }
  getFigureSetType(e) {
    return this.var_1989?.getSetType(e) ?? null;
  }
  getPalette(e) {
    return this.var_1989?.getPalette(e) ?? null;
  }
  hide() {
    this._view?.hide();
  }
  _r4f55c92004138f(e) {
    return this._categories?.getValue(e)?.getWindowContainer() ?? null;
  }
  _r5415e1b9ed2b71(e) {
    this._categories?.getValue(e)?.switchCategory();
  }
  _ra3b3be725340e6(e) {
    return this._r0dcfdec899bbb2?.getValue(e)?.getWindowContainer() ?? null;
  }
  _r8272d61a8bc2d8(e) {
    this._view?.toggleCategoryView(e, !1);
  }
  _r45c1106fa7aebd() {
    this._categories != null && this.update();
  }
  _rdebb8ed32752a2() {
    this._categories != null && this.update();
  }
  get figureData() {
    return this._rd11fbef6771049.get(this.var_106);
  }
  get _rf995f276280e41() {
    return this.var_3974;
  }
  _r5b1559620030ae() {
    let e = this.figureData.parseFigureString(),
      r = this.figureData.gender;
    this.var_1805 != null
      ? this.var_1805.saveFigure(e, r)
      : (this.var_41.communication != null &&
          (this._r4d294ea9342c1a != null
            ? (this.var_41.communication.connection?.send(new _i3b334c840d7acd(this._r4d294ea9342c1a.id)),
              this._r6305f24e0e4dbd(),
              (this._r4d294ea9342c1a = null))
            : this.var_41.communication.connection?.send(new _i4a93efd1b68d0b(e, r))),
        this._r8af0d93e259a36() && (this.var_2361 = null),
        this.var_41.events.dispatchEvent?.(new m1e(e)),
        this._r4e0f825c6aaad8 &&
          (this.figureData.isDevelopmentEditor !== -1
            ? this.var_41.inventory?.setEffectSelected(this.figureData.isDevelopmentEditor)
            : this.var_41.inventory?._rddf4cd2390c8eb(!0)),
        (this._r4e0f825c6aaad8 = !1));
  }
  generateDataContent(e, r) {
    if (e == null || r == null) return null;
    let t = [],
      i = [];
    for (let p = 0; p < a.MAX_COLOR_LAYERS; p++) i.push([]);
    let s = this.getFigureSetType(r);
    if (s == null) return null;
    let o = this.getPalette(s.paletteID);
    if (o == null) return null;
    let d = this.figureData._r5e44c31846098f(r) ?? [],
      c = new Array(d.length).fill(null),
      f = this.showClubItemsDimmedConfiguration();
    for (let p of o.colors.values())
      if (p.isSelectable && (f || this.clubMemberLevel >= p.clubLevel)) {
        for (let m = 0; m < a.MAX_COLOR_LAYERS; m++) {
          let v = this.clubMemberLevel < p.clubLevel;
          i[m].push(new l6e(wm._re230ffbc465611.clone(), e, p, v));
        }
        if (r !== AvatarFigurePartType.HEAD) for (let m = 0; m < d.length; m++) p.id === d[m] && (c[m] = p);
      }
    if (
      this.var_41._rf0eb5f07c94cfb
        ._rdd772e8be27574(this.gender, f ? 2 : this.clubMemberLevel)
        .indexOf(r) === -1
    ) {
      let m =
          this.var_41.windowManager.assets
            .getAssetByName("avatar_editor_generic_remove_selection")
            ?.content?.clone() ?? null,
        v = wm._rf08f47ede879b1.clone();
      v.name = "REMOVE_ITEM";
      let w = new Fj(v, e, null, null, !1);
      ((w._r145cc0394d677f = m), t.push(w));
    }
    let _ = r !== AvatarFigurePartType.HEAD,
      h = s.partSets;
    for (let p = h.length - 1; p >= 0; p--) {
      let m = h.getWithIndex(p);
      if (m == null) continue;
      let v = m.gender === Ra.const_113 || m.gender === this.gender;
      if (m.isSelectable && v && (f || this.clubMemberLevel >= m.clubLevel)) {
        let w = this.clubMemberLevel < m.clubLevel;
        (!m.isSellable ||
          this.var_41.inventory?.manager(m.id) ||
          this._rbe34c96e95ae2b()) &&
          t.push(new Fj(wm._rf08f47ede879b1.clone(), e, m, c, _, w));
      }
    }
    if (
      (t.sort(this.showClubItemsFirst ? this._r79e508ee6dc754 : this._r8391d6e8c3c103),
      this.var_5124 || this.var_41.getBoolean("avatareditor.support.sellablefurni"))
    ) {
      let m =
          this.var_41.windowManager.assets.getAssetByName("camera_zoom_in")?.content?.clone() ??
          null,
        v = wm._rf08f47ede879b1.clone();
      v.name = "GET_MORE";
      let w = new Fj(v, e, null, null, !1);
      ((w._r145cc0394d677f = m), t.push(w));
    }
    for (let p of i) p.sort(this._r8e19cff1657eac);
    return new Oj(t, i);
  }
  _re5f6495f0a60f7() {
    return this.var_3602;
  }
  _rd7d66acd2357e4() {
    return this._re1a88ff3ad5869().some((e) => e._r0ee987ccb85c3c(this.clubMemberLevel));
  }
  _r94a3064a5ce3d6() {
    return this._re1a88ff3ad5869().some((e) => e._r94a3064a5ce3d6(this.var_41.inventory));
  }
  _r5adbfe08bb0631() {
    for (let e of this._re1a88ff3ad5869()) e._r31613d6b0496d9(this.clubMemberLevel);
    this.figureData.updateView();
  }
  stripInvalidSellableItems() {
    for (let e of this._re1a88ff3ad5869()) e.stripInvalidSellableItems();
    this.figureData.updateView();
  }
  _re8278712fcbdc6(e) {
    let r = this.getFigureSetType(e),
      t = r != null ? this.getPalette(r.paletteID) : null;
    for (let i of t?.colors.values() ?? [])
      if (i.isSelectable && this.clubMemberLevel >= i.clubLevel) return i.id;
    return -1;
  }
  get gender() {
    return this.var_106;
  }
  set gender(e) {
    if (this.var_106 !== e) {
      this.var_106 = e;
      for (let r of this._categories?.getValues() ?? []) r.reset();
      this._view?.update();
    }
  }
  get wardrobe() {
    return this.var_217 ? this._r0dcfdec899bbb2?.getValue(class_1962.WARDROBE) : null;
  }
  get effects() {
    return this.var_217 ? this._categories?.getValue(class_1962.const_65) : null;
  }
  set clubMemberLevel(e) {
    this._rf60da0560ae82b = e;
  }
  get clubMemberLevel() {
    return this._rf60da0560ae82b || this.var_41.sessionData?.clubLevel || 0;
  }
  _r3d62135cd02425() {
    return this.var_41.catalog?._r3d62135cd02425() ?? !1;
  }
  get manager() {
    return this.var_41;
  }
  get handler() {
    return this.var_41.handler;
  }
  update() {
    for (let e of this._categories?.getValues() ?? []) e.reset();
    for (let e of this._r0dcfdec899bbb2?.getValues() ?? []) e.reset();
    this._view?.update();
  }
  setAvatarEffectType(e) {
    ((this.figureData.isDevelopmentEditor = e),
      this.figureData.updateView(),
      (this._r4e0f825c6aaad8 = !0));
  }
  _r8427368247be40(e) {
    ((this._r4d294ea9342c1a = e),
      (this._r56869b707c921c = this.figureData.parseFigureString()),
      (this._r6b734aec222830 = this.figureData.gender));
  }
  _r4eda9eafc5a876() {
    return this._r4d294ea9342c1a != null;
  }
  _rb588712468c380() {
    if (this._r4d294ea9342c1a != null) {
      this.loadAvatarInEditor(
        this._r4d294ea9342c1a.figure,
        this._r4d294ea9342c1a.gender,
        this._rf60da0560ae82b,
      );
      return;
    }
    if (this.var_2361 != null) {
      let r =
        this._categories?.getValue(class_1962.NFT_FIGURES)?._rbdb61fb55bd7bb(this.var_2361) ?? null;
      r != null &&
        (this._r8427368247be40(r), this.loadAvatarInEditor(r.figure, r.gender, this._rf60da0560ae82b));
    }
  }
  _rd7297977441107() {
    this._r4d294ea9342c1a != null &&
      this.loadAvatarInEditor(this._r56869b707c921c, this._r6b734aec222830, this._rf60da0560ae82b);
  }
  _rea3b3a64aa10ff() {
    this._r761762eb26f1ab !== "" &&
      this.loadAvatarInEditor(this._r761762eb26f1ab, this._r12b57fbbc4e6e8, this._rf60da0560ae82b);
  }
  _r8af0d93e259a36() {
    return this.var_2361 != null;
  }
  get view() {
    if (this._view == null) throw new Error("Avatar editor view is not available.");
    return this._view;
  }
  _rdb48c761d7df2c() {
    this.var_41.catalog?.openClubCenter();
  }
  _rbe34c96e95ae2b() {
    return this.var_3974 === _ic723960da8d613._r565a0d8736f4c5;
  }
  init(e = null) {
    this.var_217 ||
      (this.var_41.communication != null &&
        ((this.var_2081 = new class_3300(this.onUserNftWardrobeMessage)),
        this.var_41.communication._r2e106e2349a0b6(this.var_2081),
        this._r6305f24e0e4dbd()),
      (this._categories = new B()),
      (this._r0dcfdec899bbb2 = new B()),
      this._r0dcfdec899bbb2.add(class_1962.WARDROBE, new WardrobeModel(this)),
      (this._view = new wm(this, e)),
      this._rd11fbef6771049.set(Ra.MALE, new Ra(this)),
      this._rd11fbef6771049.set(Ra.const_140, new Ra(this)),
      this._rd11fbef6771049
        .get(Ra.MALE)
        ?.loadAvatarData(a.DEFAULT_MALE_FIGURE, Ra.MALE),
      this._rd11fbef6771049
        .get(Ra.const_140)
        ?.loadAvatarData(a.DEFAULT_FEMALE_FIGURE, Ra.const_140),
      this._categories.add(class_1962.GENERIC, new BodyModel(this)),
      this._categories.add(class_1962.HEAD, new _i0d9384304fee3f(this)),
      this._categories.add(class_1962.TORSO, new _i2b6b9bb6456430(this)),
      this._categories.add(class_1962.const_94, new _i6a786085638bcc(this)),
      this.var_41.getBoolean("clothing.misc.tab.enabled") &&
        this._categories.add(class_1962.MISC, new _i96bce6165e38ba(this)),
      (e == null || e.indexOf(class_1962.const_99) > -1) &&
        this._categories.add(class_1962.const_99, new Y1e(this)),
      this.var_41.getBoolean("effects.in.avatar.editor") &&
        this._categories.add(class_1962.const_65, new EffectsModel(this)),
      this._categories.add(class_1962.NFT_FIGURES, new NftAvatarsModel(this)),
      (this.var_217 = !0));
  }
  _r6305f24e0e4dbd() {
    this.var_41.communication?.connection?.send(new _i56dae50eda62b0());
  }
  _rdb751caff0731b(e, r = class_1962.GENERIC) {
    let t = e != null && e.length > 0;
    r != null && (!t || e.indexOf(r) >= 0)
      ? this._r8272d61a8bc2d8(r)
      : t
        ? this._r8272d61a8bc2d8(e[0])
        : this._r8272d61a8bc2d8(class_1962.GENERIC);
  }
  _re1a88ff3ad5869() {
    return this._categories?.getValues() ?? [];
  }
  _r8391d6e8c3c103 = n((e, r) => {
    let t = e.partSet?.clubLevel ?? -1,
      i = r.partSet?.clubLevel ?? -1,
      s = e.partSet?.isSellable ?? !1,
      o = r.partSet?.isSellable ?? !1;
    return s && !o ? 1 : (o && !s) || t < i ? -1 : t > i ? 1 : (e.partSet?.id ?? -1) - (r.partSet?.id ?? -1);
  }, "_r8391d6e8c3c103");
  _r79e508ee6dc754 = n((e, r) => {
    let t = e.partSet?.clubLevel ?? Number.MAX_SAFE_INTEGER,
      i = r.partSet?.clubLevel ?? Number.MAX_SAFE_INTEGER,
      s = e.partSet?.isSellable ?? !1,
      o = r.partSet?.isSellable ?? !1;
    return s && !o ? 1 : (o && !s) || t > i ? -1 : t < i ? 1 : (r.partSet?.id ?? -1) - (e.partSet?.id ?? -1);
  }, "_r79e508ee6dc754");
  _r8e19cff1657eac = n((e, r) => {
    let t = e._r050571dc2ea50e?.clubLevel ?? -1,
      i = r._r050571dc2ea50e?.clubLevel ?? -1;
    return t < i ? -1 : t > i ? 1 : (e._r050571dc2ea50e?.index ?? -1) - (r._r050571dc2ea50e?.index ?? -1);
  }, "_r8e19cff1657eac");
  get showClubItemsFirst() {
    return this.var_41.getBoolean("avatareditor.show.clubitems.first");
  }
  showClubItemsDimmedConfiguration() {
    return this.var_41.getBoolean("avatareditor.show.clubitems.dimmed");
  }
  onUserNftWardrobeMessage = n((e) => {
    ((this.var_2361 = e.getParser()._re16664a649474c),
      (this._r761762eb26f1ab = e.getParser()._r4eee39ab4f8d6d),
      (this._r12b57fbbc4e6e8 = e.getParser()._rdb41bed1130bfc),
      this._r8af0d93e259a36() &&
        this._view?._r74b6b05b2b5b84 !== class_1962.NFT_FIGURES &&
        this._rea3b3a64aa10ff());
  }, "onUserNftWardrobeMessage");
}
