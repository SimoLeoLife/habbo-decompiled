// Extracted from HabboAirLauncher.deobf.js, line 171446.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/class_573.as

class a extends ue {
  static {
    n(this, "AvatarRenderManager");
  }
  static AVATAR_PLACEHOLDER_FIGURE = "hd-99999-99999";
  static BUILT_IN_ANIMATION_ASSET_NAMES = ["dance_sixseven_animation"];
  _localization = null;
  _r01bc8b35b953c4 = "";
  AvatarImage = null;
  _r8c5e25facbc967 = null;
  _r60738a4c1ddef8 = null;
  _rc7c314b78c1297 = null;
  _r91a92e178690c6 = !1;
  _rd31b10e336225a = !1;
  var_5564 = !1;
  var_1306 = !1;
  _inNuxFlow;
  _rd66182b0ff78dd = !1;
  _r4cb3c9a3e96beb = !1;
  _rfe400ac25af72d = [];
  _r17619d0c16dbed = [];
  constructor(e, r = 0, t = null, i = !1) {
    (super(e, r | ue.COMPONENT_FLAG_DISPOSABLE, t), (this._inNuxFlow = i));
  }
  get dependencies() {
    return this._inNuxFlow
      ? super.dependencies
      : super.dependencies.concat([
          new ComponentDependency(
            new IIDHabboLocalizationManager(),
            (e) => {
              this._localization = e;
            },
            !1,
          ),
          new ComponentDependency(new IIDHabboConfigurationManager(), null, !0, [
            { type: M.ComponentDependency, callback: n((...e) => this.IIDHabboConfigurationManager(...e), "callback") },
          ]),
        ]);
  }
  initComponent() {
    ((this._mode = RenderMode.COMPONENT), (this._rd9cf5731d6d158 = new Map()));
    let e = _i43f307bcd771c1();
    ((this.var_71 = new AvatarStructure(this)),
      this.var_71.AvatarStructure(_i2de4077bf0631e__(this.assets.getAssetByName("HabboAvatarGeometry")?.content)),
      this.var_71.initPartSets(_i2de4077bf0631e__(this.assets.getAssetByName("HabboAvatarPartSets")?.content)),
      this.var_71._re6b7e7ea8a3895(this.assets, e),
      this.var_71._r71bfd6e99e9d4c(_i2de4077bf0631e__(this.assets.getAssetByName("HabboAvatarAnimation")?.content)),
      this.var_71._r38540d5840f7e7(_i2de4077bf0631e__(this.assets.getAssetByName("HabboAvatarFigure")?.content)),
      (this._r21c0516429b8a3 = new AssetAliasCollection(this, _id6a8cface5305e(this.context))),
      this._r21c0516429b8a3.init(),
      this.checkIfReady());
  }
  dispose() {
    this.disposed ||
      (this.var_71?.dispose(),
      (this.var_71 = null),
      this._r21c0516429b8a3?.dispose(),
      (this._r21c0516429b8a3 = null),
      this._rd9cf5731d6d158.clear(),
      this.AvatarImage?.removeEventListener?.(M.ComponentDependency, this._r7e4324f6dd2df7),
      this.AvatarImage?.dispose(),
      (this.AvatarImage = null),
      this._r8c5e25facbc967?.removeEventListener?.(M.ComponentDependency, this._r6c1c2c4e7ea194),
      this._r8c5e25facbc967?.dispose(),
      (this._r8c5e25facbc967 = null),
      (this._rfe400ac25af72d = []),
      (this._r17619d0c16dbed = []),
      (this._localization = null),
      (this._r01bc8b35b953c4 = ""),
      super.dispose());
  }
  requestActions() {
    let e = `${this.getProperty("flash.dynamic.avatar.download.url")}HabboAvatarActions.xml`;
    this.assets
      .loadAssetFromFile("HabboAvatarActions", new UnkClass_636490(e), "text/xml")
      .addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r6c7ed74dd84e33);
  }
  _r6c7ed74dd84e33 = n((e = null) => {
    if (this.var_71 == null) return;
    let r = _i43f307bcd771c1();
    (this.var_71._r449b626ad44655(
      _i2de4077bf0631e__(this.assets.getAssetByName("HabboAvatarActions")?.content) ?? r,
    ),
      this._r8a78cd9ac20e0d(),
      (this._rd66182b0ff78dd = !0),
      this.checkIfReady());
  }, "_r6c7ed74dd84e33");
  _r8a78cd9ac20e0d() {
    if (this.var_71 != null)
      for (let e of a.BUILT_IN_ANIMATION_ASSET_NAMES) {
        let r = _i2de4077bf0631e__(this.assets.getAssetByName(e)?.content);
        r != null && this.var_71._re86089c94947df(r);
      }
  }
  IIDHabboConfigurationManager = n((e) => {
    if ((this.requestActions(), this.var_71 == null)) return;
    let r = this._rd975cd115f3260();
    this._r01bc8b35b953c4 = r;
    let t = this.assets.getAssetByName(this._r01bc8b35b953c4);
    if (
      (t != null && this.assets.removeAsset(t)?.dispose(),
      new Kj(this.assets, r, this.var_71.figureData).addEventListener(
        Kj.STRUCTURE_DONE,
        this._r0b52c1bba9cbad,
      ),
      this.AvatarImage == null)
    ) {
      let s = this.getProperty("flash.dynamic.avatar.download.configuration"),
        o = this.getProperty("flash.dynamic.avatar.download.url"),
        d = this.getProperty("flash.dynamic.avatar.download.name.template");
      ((this.AvatarImage = new hJ(this, this.context.assets, s, o, this.var_71, d)),
        this.AvatarImage.addEventListener(M.ComponentDependency, this._r7e4324f6dd2df7),
        this.AvatarImage.addEventListener(hJ.LIBRARY_LOADED, this._r191eeb6a869ca6));
    }
    if (this._r8c5e25facbc967 == null) {
      let s = `${this.getProperty("flash.dynamic.avatar.download.url")}effectmap.xml`,
        o = this.getProperty("flash.dynamic.avatar.download.url"),
        d = this.getProperty("flash.dynamic.avatar.download.name.template");
      ((this._r8c5e25facbc967 = new vJ(this.context.assets, s, o, this.var_71, d)),
        this._r8c5e25facbc967.addEventListener(M.ComponentDependency, this._r6c1c2c4e7ea194),
        this._r8c5e25facbc967.addEventListener(vJ.LIBRARY_LOADED, this._r2f1f1197b70142));
    }
  }, "IIDHabboConfigurationManager");
  onMandatoryLibrariesReady() {
    ((this.var_5564 = !0), this.checkIfReady());
  }
  _r191eeb6a869ca6 = n((e) => {
    this._r21c0516429b8a3?._r191eeb6a869ca6(e.library);
  }, "_r191eeb6a869ca6");
  _r2f1f1197b70142 = n((e) => {
    this._r21c0516429b8a3?._r191eeb6a869ca6(e.library);
  }, "_r2f1f1197b70142");
  _r0b52c1bba9cbad = n((e = null) => {
    let r = this.assets.getAssetByName(this._r01bc8b35b953c4);
    (r != null && this.assets.removeAsset(r)?.dispose(),
      (this._rd31b10e336225a = !0),
      this.var_71?.init(),
      this.checkIfReady());
  }, "_r0b52c1bba9cbad");
  _rd975cd115f3260() {
    let e = this._localization?._rd76d40bf1474dc() ?? null,
      r = e?._ree3072b72b0943() ?? "",
      t = e?._r15c3a689bf0cb4() ?? "";
    return r.length > 0 && t.length > 0 ? `${r}/${t}` : "";
  }
  _r7e4324f6dd2df7 = n((e = null) => {
    ((this._r91a92e178690c6 = !0), this.checkIfReady());
  }, "_r7e4324f6dd2df7");
  _r6c1c2c4e7ea194 = n((e = null) => {
    ((this._r4cb3c9a3e96beb = !0), this.checkIfReady());
  }, "_r6c1c2c4e7ea194");
  get _rdabc30b337a9ce() {
    return this._r4cb3c9a3e96beb ? (this._r8c5e25facbc967?.map ?? null) : null;
  }
  checkIfReady() {
    this.var_1306 ||
      (this.var_5564 &&
        this._r91a92e178690c6 &&
        this._rd31b10e336225a &&
        this._rd66182b0ff78dd &&
        this._r4cb3c9a3e96beb &&
        ((this.var_1306 = !0),
        this.events.dispatchEvent?.(new M(AvatarRenderEvent.AVATAR_RENDER_READY)),
        this.events()));
  }
  events() {
    if (this.AvatarImage != null) {
      for (let [e, r] of this._rfe400ac25af72d)
        (r == null || !r.disposed) && this.AvatarImage.loadFigureSetData(e, r);
      this._rfe400ac25af72d = [];
    }
  }
  _r2d55396cf4177f(e) {
    return new class_1984(e);
  }
  _r74e7e07da14064(e) {
    return e == null || this.AvatarImage == null ? !1 : this.AvatarImage.isReady(e);
  }
  _rc5aabe10f74a58(e, r) {
    if (e != null) {
      if (this.AvatarImage == null) {
        this._rfe400ac25af72d.push([e, r]);
        return;
      }
      this.AvatarImage.loadFigureSetData(e, r);
    }
  }
  _r274f6640e76241(e, r, t = null, i = null, s = null) {
    let o = new class_1984(e);
    if (this.var_71 == null) return (this._rfe400ac25af72d.push([o, i]), null);
    if (this.AvatarImage == null && this._mode !== RenderMode.LOCAL)
      return (this._rfe400ac25af72d.push([o, i]), null);
    if (
      (t != null && this.validateAvatarFigure(o, t),
      this._mode === RenderMode.LOCAL || this.AvatarImage?.isReady(o))
    ) {
      let c = new Im(this.var_71, this._r21c0516429b8a3, o, r, this._r8c5e25facbc967, s);
      return (this._r17619d0c16dbed.push(c), c);
    }
    this._r60738a4c1ddef8 == null && (this._r60738a4c1ddef8 = new class_1984(a.AVATAR_PLACEHOLDER_FIGURE));
    let d = new H6e(
      this.var_71,
      this._r21c0516429b8a3,
      this._r60738a4c1ddef8,
      r,
      this._r8c5e25facbc967,
    );
    return (this.AvatarImage?.loadFigureSetData(o, i), d);
  }
  _r4c2be8de7358b0(e, r) {
    return (
      this._rc7c314b78c1297 == null && (this._rc7c314b78c1297 = new class_1984(a.AVATAR_PLACEHOLDER_FIGURE)),
      new O6e(this.var_71, this._r21c0516429b8a3, this._rc7c314b78c1297, r, this._r8c5e25facbc967)
    );
  }
  _ra1bcc47f8932bc(e) {
    let r = this._r17619d0c16dbed.indexOf(e);
    r >= 0 && this._r17619d0c16dbed.splice(r, 1);
  }
  _rfcf470f2a585c5() {
    return this.var_71?.figureData ?? null;
  }
  isValidFigureSetForGender(e, r) {
    let t = this._rfcf470f2a585c5()?._rd076350a4cba8e(e) ?? null;
    return t == null ? !1 : t.gender.toUpperCase() === "U" || t.gender.toUpperCase() === r.toUpperCase();
  }
  _r3e7ac99da303de(e, r, t) {
    let i = new yne();
    i.loadAvatarData(e, r);
    for (let s of this._rfe5a2d7712bc93(t)) i.savePartData(s.type, s.id, i._r5e44c31846098f(s.type));
    return i.parseFigureString();
  }
  _rfe5a2d7712bc93(e) {
    let r = this._rfcf470f2a585c5(),
      t = [];
    for (let i of e) {
      let s = r?._rd076350a4cba8e(i) ?? null;
      s != null && t.push(s);
    }
    return t;
  }
  getItemIds() {
    return this.var_71?.getItemIds() ?? [];
  }
  _re2ed9334dbcf82() {
    return this.var_71?._r43413fcfc7ae10 ?? null;
  }
  _rdd772e8be27574(e, r) {
    return this.var_71?._r19bcbb82e4be75(e, r) ?? [];
  }
  getAssetByName(e) {
    return this._r21c0516429b8a3?.getAssetByName(e) ?? null;
  }
  get mode() {
    return this._mode;
  }
  set mode(e) {
    this._mode = e;
  }
  _rcd39fca6b6f83a(e) {
    this.var_71?._rcd39fca6b6f83a(_i2de4077bf0631e__(e));
  }
  validateAvatarFigure(e, r) {
    if (this.var_71 == null)
      return (ErrorReportStorage.addDebugData("AvatarRenderManager", "validateAvatarFigure: structure is null!"), !1);
    let t = !1,
      s = this.var_71._r19bcbb82e4be75(r, 2),
      o = this.var_71.figureData;
    for (let d of s) {
      if (!e._r1c5fbe40a0ba54(d)) {
        let b = this.var_71.getDefaultPartSet(d, r);
        b != null && (e.updatePart(d, b.id, [0]), (t = !0));
        continue;
      }
      let c = o.getSetType(d);
      if (c == null) {
        ErrorReportStorage.addDebugData("AvatarRenderManager", "validateAvatarFigure: setType is null!");
        continue;
      }
      if (c.getPartSet(e.getPartSetId(d)) != null) continue;
      let l = this.var_71.getDefaultPartSet(d, r);
      l != null && (e.updatePart(d, l.id, [0]), (t = !0));
    }
    return !t;
  }
  _rb5bd4544228d96(e, r, t = null) {
    if (e == null || this.var_71 == null) return 0;
    let i = 0,
      s = this.var_71.figureData,
      o = e.getPartTypeIds();
    for (let d of o) {
      let c = s.getSetType(d);
      if (c == null) continue;
      let f = c.getPartSet(e.getPartSetId(d));
      if (f == null) continue;
      i = Math.max(f.clubLevel, i);
      let l = s.getPalette(c.paletteID);
      if (l != null)
        for (let b of e.getPartColorIds(d)) {
          let _ = l.getColor(b);
          _ != null && (i = Math.max(_.clubLevel, i));
        }
    }
    t == null && (t = this.var_71._rcf4273ac73e1c9(class_2123.const_252));
    for (let d of t) {
      let c = s.getSetType(d);
      c == null || o.includes(d) || (i = Math.max(c._r5f5a1fec502ecd(r), i));
    }
    return i;
  }
  _r569e2311495896() {
    this._r21c0516429b8a3?.reset();
  }
  _rdd20fca63d8e19() {
    let e = [];
    for (let r of this._r17619d0c16dbed) r.disposed || (r._r69ae4baa700b24(), e.push(r));
    this._r17619d0c16dbed = e;
  }
  _r6b7fecdbcdadae() {
    this.AvatarImage?.purge();
  }
  get isReady() {
    return this.var_1306;
  }
}
