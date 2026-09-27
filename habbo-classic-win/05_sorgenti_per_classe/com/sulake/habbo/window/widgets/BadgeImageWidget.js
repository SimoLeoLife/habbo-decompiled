// Extracted from HabboAirLauncher.deobf.js, line 147863.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/BadgeImageWidget.as
// Obfuscated name: _i71a1b22dcbc6bf

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("badge_image_xml")?.content,
    )),
      (this._bitmap = this._rf8f9fc25599fa4?.findChildByName("bitmap")),
      (this.var_133 = this._rf8f9fc25599fa4?.findChildByName("region")),
      this.var_133?.addEventListener(u.CLICK, this.onClick),
      this.var_220 != null &&
        ((this.var_220.rootWindow = this._rf8f9fc25599fa4),
        this._rf8f9fc25599fa4 != null &&
          ((this._rf8f9fc25599fa4.width = this.var_220.width),
          (this._rf8f9fc25599fa4.height = this.var_220.height))));
  }
  static {
    n(this, "BadgeImageWidget");
  }
  static TYPE = "badge_image";
  static _r6ea9ca98f7f10f = `${a.TYPE}:type`;
  static _r30e6e100235106 = `${a.TYPE}:badge_id`;
  static _r272cde9f87d6ba = -1;
  static _rda13a98adc9b71 = 1e3;
  static _rf2b462fb7c43b3 = 1e3 / 60;
  static PENDING_GLOW_MAX_WAIT_MS = 5e3;
  static const_1108 = 0.7;
  static INNER_GLOW_MAX_ALPHA = 0.22;
  static COLOR_MATRIX_MIX_MAX = 0.48;
  static COLOR_MATRIX_OFFSET_MAX = 80;
  static _r6c97b3636d1dae = new ne(a._r6ea9ca98f7f10f, Wo.NORMAL, ne.STRING, !1, Wo.ALL);
  static _r74e5034a2d97aa = new ne(a._r30e6e100235106, "", ne.STRING);
  _disposed = !1;
  var_1341 = !1;
  _rf8f9fc25599fa4 = null;
  _bitmap = null;
  var_133 = null;
  _type = String(a._r6c97b3636d1dae.value);
  var_595 = String(a._r74e5034a2d97aa.value);
  _groupId = 0;
  _re3998ce3e575a0 = a._r272cde9f87d6ba;
  _r78911d17f8f085 = null;
  _r6b72ab6df117f9 = null;
  _r3a15d553973bbc = null;
  _r829c35a93e556f = !1;
  _rc42b74557bdb1c = null;
  _ra6a9e3e582b0a0 = null;
  _rf3ff3e1a982426 = null;
  _r46a223eae0a800 = a._r272cde9f87d6ba;
  _r25c5d219050551 = a._rda13a98adc9b71;
  dispose() {
    this._disposed ||
      (this.clearGlow(),
      (this.groupId = 0),
      this.var_133?.removeEventListener(u.CLICK, this.onClick),
      this.var_133?.dispose(),
      (this.var_133 = null),
      (this._bitmap = null),
      (this._rc42b74557bdb1c = null),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  get properties() {
    if (this._disposed || this._bitmap == null) return [];
    let e = [
      a._r6c97b3636d1dae.withValue(this._type),
      a._r74e5034a2d97aa.withValue(this.var_595),
    ];
    for (let r of this._bitmap.properties)
      r.key !== class_3436.ASSET_URI && e.push(r.withNameSpace(a.TYPE));
    return e;
  }
  set properties(e) {
    this.var_1341 = !0;
    let r = [];
    for (let t of e) {
      switch (t.key) {
        case a._r6ea9ca98f7f10f:
          this.type = String(t.value);
          break;
        case a._r30e6e100235106:
          this.badgeId = String(t.value);
          break;
      }
      t.key !== `${a.TYPE}:${class_3436.ASSET_URI}` && r.push(t.withoutNameSpace());
    }
    (this._bitmap != null && (this._bitmap.properties = r),
      (this.var_1341 = !1),
      this.refresh());
  }
  get type() {
    return this._type;
  }
  set type(e) {
    ((this._type = e), this.refresh());
  }
  get badgeId() {
    return this.var_595;
  }
  set badgeId(e) {
    (this.var_595 !== e && (this.clearGlow(), (this._re3998ce3e575a0 = a._r272cde9f87d6ba)),
      (this.var_595 = e),
      this.refresh());
  }
  get groupId() {
    return this._groupId;
  }
  set groupId(e) {
    this._groupId = e;
    let r = this._type === Wo.GROUP && this._groupId > 0,
      t = this._windowManager?.communication ?? null;
    t != null &&
      (!r && this._r6b72ab6df117f9 != null
        ? (t._r7668362bf55fdd(this._r78911d17f8f085),
          t._r7668362bf55fdd(this._r6b72ab6df117f9),
          (this._r78911d17f8f085 = null),
          (this._r6b72ab6df117f9 = null))
        : r &&
          this._r6b72ab6df117f9 == null &&
          ((this._r78911d17f8f085 = new UnkMessageEvent_00aa3a(this._r063f1cfd507d66)),
          (this._r6b72ab6df117f9 = new class_2723(this._rfaff84536ada7c)),
          t._r2e106e2349a0b6(this._r78911d17f8f085),
          t._r2e106e2349a0b6(this._r6b72ab6df117f9)));
  }
  get glowColor() {
    return this._re3998ce3e575a0;
  }
  set glowColor(e) {
    ((this._re3998ce3e575a0 = e),
      this._re3998ce3e575a0 < 0 &&
        (this._r829c35a93e556f || this._rf3ff3e1a982426 != null) &&
        this.clearGlow());
  }
  get bitmapData() {
    return this._bitmap?.bitmapData ?? null;
  }
  set bitmapData(e) {
    this._bitmap != null && (this._bitmap.bitmapData = e);
  }
  get _rc42ef752c39ce9() {
    return this._bitmap?._rc42ef752c39ce9 ?? Vt.CENTER;
  }
  set _rc42ef752c39ce9(e) {
    this._bitmap != null &&
      ((this._bitmap._rc42ef752c39ce9 = e), this._bitmap.invalidate());
  }
  get _r9d5f7918ae45e9() {
    return this._bitmap?._r9d5f7918ae45e9 ?? !1;
  }
  set _r9d5f7918ae45e9(e) {
    this._bitmap != null &&
      ((this._bitmap._r9d5f7918ae45e9 = e), this._bitmap.invalidate());
  }
  get _r1b6896589e83da() {
    return this._bitmap?._r1b6896589e83da ?? !1;
  }
  set _r1b6896589e83da(e) {
    this._bitmap != null &&
      ((this._bitmap._r1b6896589e83da = e), this._bitmap.invalidate());
  }
  get zoomX() {
    return this._bitmap?.zoomX ?? 1;
  }
  set zoomX(e) {
    this._bitmap != null && ((this._bitmap.zoomX = e), this._bitmap.invalidate());
  }
  get zoomY() {
    return this._bitmap?.zoomY ?? 1;
  }
  set zoomY(e) {
    this._bitmap != null && ((this._bitmap.zoomY = e), this._bitmap.invalidate());
  }
  get greyscale() {
    return this._bitmap?.greyscale ?? !1;
  }
  set greyscale(e) {
    this._bitmap != null &&
      ((this._bitmap.greyscale = e), this._bitmap.invalidate());
  }
  get etchingColor() {
    return this._bitmap?.etchingColor ?? 0;
  }
  set etchingColor(e) {
    this._bitmap != null &&
      ((this._bitmap.etchingColor = e), this._bitmap.invalidate());
  }
  get fitSizeToContents() {
    return this._bitmap?.fitSizeToContents ?? !1;
  }
  set fitSizeToContents(e) {
    this._bitmap != null &&
      ((this._bitmap.fitSizeToContents = e), this._bitmap.invalidate());
  }
  refresh() {
    if (this.var_1341 || this._bitmap == null) return;
    let e = this.assetUri;
    (this._rf3ff3e1a982426 != null && this._rf3ff3e1a982426 !== e && this._r1ce998487d5087(),
      (this._bitmap.assetUri = e),
      this.var_220 != null && (this._bitmap.blend = this.var_220.blend),
      this._bitmap.invalidate());
  }
  playGlow(e, r = 500, t = 1.04) {
    if (this._disposed || this._bitmap == null || this.var_220 == null) return;
    ((this._re3998ce3e575a0 = e & 16777215), r <= 0 && (r = a._rda13a98adc9b71), this.clearGlow());
    let i = this.assetUri;
    i.length === 0 ||
      this._windowManager?._r55bb54da384802 == null ||
      ((this._rf3ff3e1a982426 = i),
      (this._r46a223eae0a800 = this._re3998ce3e575a0),
      (this._r25c5d219050551 = r),
      (this._ra6a9e3e582b0a0 = new UnkEventDispatcherWrapperSubclass_05394e(a.PENDING_GLOW_MAX_WAIT_MS, 1)),
      this._ra6a9e3e582b0a0.addEventListener(DeBouncer._rf33144eac61595, this._r0e2ebff6244838),
      this._ra6a9e3e582b0a0.start(),
      this._windowManager._r55bb54da384802.retrieveAsset(this._rf3ff3e1a982426, this));
  }
  clearGlow() {
    (this._r1ce998487d5087(),
      this._r3a15d553973bbc != null &&
        (this._r3a15d553973bbc.stop(),
        this._r3a15d553973bbc.removeEventListener(DeBouncer.addEventListener, this._r2d0cd8de38e0cd),
        this._r3a15d553973bbc.removeEventListener(DeBouncer._rf33144eac61595, this._r5b3858adba142d),
        (this._r3a15d553973bbc = null)),
      this._r829c35a93e556f &&
        (this.var_220 != null &&
          (this.var_220.filters = this._rc42b74557bdb1c != null ? this._rc42b74557bdb1c : []),
        this.refresh(),
        (this._r829c35a93e556f = !1)));
  }
  receiveAsset(e, r) {
    if (
      this._disposed ||
      this._rf3ff3e1a982426 == null ||
      this._windowManager?._r55bb54da384802 == null ||
      !this._windowManager._r55bb54da384802.isSameAsset(this._rf3ff3e1a982426, r) ||
      this._bitmap == null ||
      this._bitmap.assetUri !== this._rf3ff3e1a982426 ||
      this.bitmapData == null
    )
      return;
    let t = this._r46a223eae0a800,
      i = this._r25c5d219050551;
    (this._r1ce998487d5087(), this._r5af7129143c558(t, i));
  }
  get etchingPoint() {
    return new E(0, 1);
  }
  get _r2eecf82f5b04f2() {
    return !1;
  }
  set _r2eecf82f5b04f2(e) {}
  get _r738070fc30728d() {
    return !1;
  }
  set _r738070fc30728d(e) {}
  get flipX() {
    return this._bitmap?.flipX ?? !1;
  }
  set flipX(e) {
    this._bitmap != null && ((this._bitmap.flipX = e), this._bitmap.invalidate());
  }
  get flipY() {
    return this._bitmap?.flipY ?? !1;
  }
  set flipY(e) {
    this._bitmap != null && ((this._bitmap.flipY = e), this._bitmap.invalidate());
  }
  get rotation() {
    return 0;
  }
  set rotation(e) {}
  onClick = n(() => {
    this._groupId > 0 &&
      this._windowManager?.communication?.connection?.send(new class_1949(this._groupId, !0));
  }, "onClick");
  get assetUri() {
    if (this.var_595 == null || this.var_595.length === 0) return "";
    switch (this._type) {
      case Wo.NORMAL:
        return `\${image.library.url}album1584/${this.var_595}.png`;
      case Wo.GROUP:
        return a._rc0f2eca4f5cb8b(
          this._windowManager
            ?.getProperty("group.badge.url")
            .replace("%imagerdata%", this.var_595) ?? "",
        );
      case Wo.PERK:
        return `\${image.library.url}perk/${this.var_595}.png`;
      default:
        return "";
    }
  }
  static _rc0f2eca4f5cb8b(e) {
    return e.replace(/\.gif(?=([?#].*)?$)/i, ".png");
  }
  _r5a06f450cc174a(e, r) {
    e === this._groupId &&
      ((this.var_595 = r),
      this._windowManager?._r55bb54da384802?.removeAsset(this.assetUri),
      this.refresh());
  }
  _racbe682890f8a8(e) {
    if (this.var_220 == null) return;
    e = a.clamp01(e);
    let r = this._rc42b74557bdb1c != null ? this._rc42b74557bdb1c.concat() : [];
    (e > 0.001 &&
      this._re3998ce3e575a0 >= 0 &&
      (r.push(this._re97691ce3af339(this._re3998ce3e575a0, e)),
      r.push(this._r7dd6b5ef127ca7(this._re3998ce3e575a0, e)),
      r.push(this._r1ca38445aae451(this._re3998ce3e575a0, e))),
      (this.var_220.filters = r));
  }
  _r5af7129143c558(e, r) {
    ((this._re3998ce3e575a0 = e & 16777215),
      (this._rc42b74557bdb1c =
        this.var_220?.filters != null ? [...this.var_220.filters] : []),
      (this._r829c35a93e556f = !0),
      this._racbe682890f8a8(0));
    let t = Math.max(1, Math.trunc(r / a._rf2b462fb7c43b3));
    ((this._r3a15d553973bbc = new UnkEventDispatcherWrapperSubclass_05394e(a._rf2b462fb7c43b3, t)),
      this._r3a15d553973bbc.addEventListener(DeBouncer.addEventListener, this._r2d0cd8de38e0cd),
      this._r3a15d553973bbc.addEventListener(DeBouncer._rf33144eac61595, this._r5b3858adba142d),
      this._r3a15d553973bbc.start());
  }
  _r1ce998487d5087() {
    (this._ra6a9e3e582b0a0 != null &&
      (this._ra6a9e3e582b0a0.stop(),
      this._ra6a9e3e582b0a0.removeEventListener(DeBouncer._rf33144eac61595, this._r0e2ebff6244838),
      (this._ra6a9e3e582b0a0 = null)),
      (this._rf3ff3e1a982426 = null),
      (this._r46a223eae0a800 = a._r272cde9f87d6ba),
      (this._r25c5d219050551 = a._rda13a98adc9b71));
  }
  _re97691ce3af339(e, r) {
    return new UnkClass_baf84c(e, a.const_1108 * r, 4 + r * 4, 4 + r * 4, 1 + r * 1.2, 2, !1, !1);
  }
  _r7dd6b5ef127ca7(e, r) {
    return new UnkClass_baf84c(e, a.INNER_GLOW_MAX_ALPHA * r, 2 + r * 2, 2 + r * 2, 0.8 + r * 0.6, 1, !0, !1);
  }
  _r1ca38445aae451(e, r) {
    let t = ((e >> 16) & 255) / 255,
      i = ((e >> 8) & 255) / 255,
      s = (e & 255) / 255,
      o = a.COLOR_MATRIX_MIX_MAX * r,
      d = o * 0.05,
      c = a.COLOR_MATRIX_OFFSET_MAX * r;
    return new ColorMatrixFilter_([
      1 - o + o * t,
      d * i,
      d * s,
      0,
      t * c,
      d * t,
      1 - o + o * i,
      d * s,
      0,
      i * c,
      d * t,
      d * i,
      1 - o + o * s,
      0,
      s * c,
      0,
      0,
      0,
      1,
      0,
    ]);
  }
  static easeInOutCubic(e, r, t, i) {
    let s = e / i,
      o = -(s * 1.75 - 0.7) * (s * 1.75 - 0.7) + 1;
    return r + t * o;
  }
  static clamp01(e) {
    return e < 0 ? 0 : e > 1 ? 1 : e;
  }
  _r2d0cd8de38e0cd = n((e) => {
    if (this._r3a15d553973bbc == null) return;
    let r = a.easeInOutCubic(
      this._r3a15d553973bbc._rdf3dbbec26e6b1,
      0,
      1,
      this._r3a15d553973bbc.repeatCount,
    );
    this._racbe682890f8a8(r);
  }, "_r2d0cd8de38e0cd");
  _r5b3858adba142d = n((e) => {
    this.clearGlow();
  }, "_r5b3858adba142d");
  _r0e2ebff6244838 = n((e) => {
    this._r1ce998487d5087();
  }, "_r0e2ebff6244838");
  _r063f1cfd507d66 = n((e) => {
    this._r5a06f450cc174a(e.groupId, this.var_595);
  }, "_r063f1cfd507d66");
  _rfaff84536ada7c = n((e) => {
    e.badges.hasKey(this._groupId) &&
      this._r5a06f450cc174a(this._groupId, e.badges.getValue(this._groupId) ?? "");
  }, "_rfaff84536ada7c");
}
