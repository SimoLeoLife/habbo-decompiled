// Extracted from HabboAirLauncher.deobf.js, line 147584.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/AvatarImageWidget.as
// Obfuscated name: _i855faa876ca501

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("avatar_image_xml")?.content,
    )),
      (this._bitmap = this._rf8f9fc25599fa4?.findChildByName("bitmap")),
      (this.var_133 = this._rf8f9fc25599fa4?.findChildByName("region")),
      this.var_133?.addEventListener(u.CLICK, this.onClick),
      this.refresh(),
      this.var_220 != null &&
        ((this.var_220.rootWindow = this._rf8f9fc25599fa4),
        this._rf8f9fc25599fa4 != null &&
          ((this._rf8f9fc25599fa4.width = this.var_220.width),
          (this._rf8f9fc25599fa4.height = this.var_220.height))));
  }
  static {
    n(this, "AvatarImageWidget");
  }
  static TYPE = "avatar_image";
  static _r92df576dfd6155 = `${a.TYPE}:figure`;
  static _r3019e2ab59cd63 = `${a.TYPE}:scale`;
  static _rb40ccd01457a25 = `${a.TYPE}:only_head`;
  static _rf05cf3f23278ac = `${a.TYPE}:cropped`;
  static _r24a400a53a6839 = `${a.TYPE}:direction`;
  static _r30470b9ded88a4 = `${a.TYPE}:zoomX`;
  static _rfcf9ee2d19f69a = `${a.TYPE}:zoomY`;
  static _rca58edc720ff52 = [
    "northeast",
    "east",
    "southeast",
    "south",
    "southwest",
    "west",
    "northwest",
    "north",
  ];
  static _rea630a9f314ce4 = new ne(a._r92df576dfd6155, "hd-180-1.ch-210-66.lg-270-82.sh-290-81", ne.STRING);
  static _r9e17e5e02bc7e9 = new ne(a._r3019e2ab59cd63, fr.LARGE, ne.STRING, !1, [
    fr.SMALL,
    fr.LARGE,
  ]);
  static _r1427022ae3ed75 = new ne(a._rb40ccd01457a25, !1, ne.BOOLEAN);
  static _rcb650da268a1f7 = new ne(a._rf05cf3f23278ac, !1, ne.BOOLEAN);
  static _r8a82b1e240b239 = new ne(a._r30470b9ded88a4, 1, ne.NUMBER);
  static _read75edbf4d8df = new ne(a._rfcf9ee2d19f69a, 1, ne.NUMBER);
  static _r87a0401cf950ad = new ne(
    a._r24a400a53a6839,
    a._rca58edc720ff52[UnkConstants_6c0c96._r20a7fb2cb94dc0],
    ne.STRING,
    !1,
    a._rca58edc720ff52,
  );
  static _r13ddeeab7a6558 = new ColorMatrixFilter_([
    1 / 3,
    1 / 3,
    1 / 3,
    0,
    0,
    1 / 3,
    1 / 3,
    1 / 3,
    0,
    0,
    1 / 3,
    1 / 3,
    1 / 3,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
  ]);
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _bitmap = null;
  var_133 = null;
  var_1129 = String(a._rea630a9f314ce4.value);
  _r70d45b59f7e6f8 = !1;
  _scale = String(a._r9e17e5e02bc7e9.value);
  _r005d84920dd501 = !!a._r1427022ae3ed75.value;
  _cropped = !!a._rcb650da268a1f7.value;
  var_81 = a._rca58edc720ff52.indexOf(String(a._r87a0401cf950ad.value));
  _r87d319c0304c68 = Number(a._r8a82b1e240b239.value);
  _r565c818f1b65b5 = Number(a._read75edbf4d8df.value);
  _userId = 0;
  _re787e5c4924cd5 = !1;
  dispose() {
    this._disposed ||
      (this.var_133?.removeEventListener(u.CLICK, this.onClick),
      this.var_133?.dispose(),
      (this.var_133 = null),
      (this._bitmap = null),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._re787e5c4924cd5 &&
        this._windowManager?.avatarRenderer?.events?.removeEventListener?.(
          AvatarRenderEvent.AVATAR_RENDER_READY,
          this._rc64c09400e2dae,
        ),
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
    return this._disposed
      ? []
      : [
          a._rea630a9f314ce4.withValue(this.var_1129),
          a._r9e17e5e02bc7e9.withValue(this._scale),
          a._r1427022ae3ed75.withValue(this._r005d84920dd501),
          a._rcb650da268a1f7.withValue(this._cropped),
          a._r87a0401cf950ad.withValue(
            a._rca58edc720ff52[this.var_81] ?? a._rca58edc720ff52[0],
          ),
          a._r8a82b1e240b239.withValue(this._r87d319c0304c68),
          a._read75edbf4d8df.withValue(this._r565c818f1b65b5),
        ];
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case a._r92df576dfd6155:
          this.figure = String(r.value);
          break;
        case a._r3019e2ab59cd63:
          this.scale = String(r.value);
          break;
        case a._rb40ccd01457a25:
          this._r33e0e5ced18d5a = !!r.value;
          break;
        case a._rf05cf3f23278ac:
          this.cropped = !!r.value;
          break;
        case a._r24a400a53a6839:
          this.direction = a._rca58edc720ff52.indexOf(String(r.value));
          break;
        case a._r30470b9ded88a4:
          this.zoomX = Number(r.value);
          break;
        case a._rfcf9ee2d19f69a:
          this.zoomY = Number(r.value);
          break;
      }
  }
  get figure() {
    return this.var_1129;
  }
  set figure(e) {
    e !== this.var_1129 &&
      ((this._r70d45b59f7e6f8 = e == null || e.length === 0),
      (this.var_1129 = a.cleanupAvatarString(e)),
      this.refresh());
  }
  get scale() {
    return this._scale;
  }
  set scale(e) {
    e !== this._scale && ((this._scale = e), this.refresh());
  }
  get _r33e0e5ced18d5a() {
    return this._r005d84920dd501;
  }
  set _r33e0e5ced18d5a(e) {
    e !== this._r005d84920dd501 && ((this._r005d84920dd501 = e), this.refresh());
  }
  get cropped() {
    return this._cropped;
  }
  set cropped(e) {
    e !== this._cropped && ((this._cropped = e), this.refresh());
  }
  get direction() {
    return this.var_81;
  }
  set direction(e) {
    e !== this.var_81 && ((this.var_81 = e), this.refresh());
  }
  get userId() {
    return this._userId;
  }
  get zoomX() {
    return this._r87d319c0304c68;
  }
  set zoomX(e) {
    e !== this._r87d319c0304c68 && ((this._r87d319c0304c68 = e), this.refresh());
  }
  get zoomY() {
    return this._r565c818f1b65b5;
  }
  set zoomY(e) {
    e !== this._r565c818f1b65b5 && ((this._r565c818f1b65b5 = e), this.refresh());
  }
  set userId(e) {
    e !== this._userId &&
      ((this._userId = e),
      this.var_133 != null && (this.var_133.visible = this._userId > 0));
  }
  avatarImageReady(e) {
    a.cleanupAvatarString(e) === this.var_1129 && this.refresh();
  }
  _rc64c09400e2dae = n(() => {
    ((this._re787e5c4924cd5 = !1),
      this._windowManager?.avatarRenderer?.events?.removeEventListener?.(
        AvatarRenderEvent.AVATAR_RENDER_READY,
        this._rc64c09400e2dae,
      ),
      this.refresh());
  }, "_rc64c09400e2dae");
  refresh() {
    if (this._bitmap == null) return;
    this._bitmap.bitmap = null;
    let e = this._windowManager?.avatarRenderer ?? null;
    if (e != null)
      if (!e.isReady)
        this._re787e5c4924cd5 ||
          (e.events?.addEventListener?.(AvatarRenderEvent.AVATAR_RENDER_READY, this._rc64c09400e2dae),
          (this._re787e5c4924cd5 = !0));
      else {
        let i = this._scale === fr.LARGE ? 1 : 0.5,
          s = e._r274f6640e76241(this.var_1129, fr.LARGE, null, this);
        s != null && (this._r6c50d5d81f8132(s, i), s.dispose());
      }
    let r = this._bitmap.bitmap;
    if (r == null || r.width < 2) {
      let i = `placeholder_avatar${this._scale === fr.SMALL ? "_small" : ""}${this._r005d84920dd501 ? "_head" : ""}${this._cropped ? "_cropped" : ""}_png`;
      ((this._bitmap.bitmap = this._windowManager?.assets.getAssetByName(i)?.content),
        (this._bitmap.disposesBitmap = !1),
        this._r2563250d197ca7());
    }
    ((this._r87d319c0304c68 !== 1 || this._r565c818f1b65b5 !== 1) &&
      this._bitmap.bitmap != null &&
      ((this._bitmap.bitmap = this.zoomBitmapData(
        this._bitmap.bitmap,
        this._r87d319c0304c68,
        this._r565c818f1b65b5,
      )),
      (this._bitmap.disposesBitmap = !0)),
      this._bitmap.invalidate());
    let t = this._bitmap.bitmap;
    t != null &&
      this.var_220 != null &&
      ((this.var_220.width = t.width), (this.var_220.height = t.height));
  }
  _r6c50d5d81f8132(e, r) {
    this._bitmap != null &&
      (e.setDirection(this._r005d84920dd501 ? class_2123.HEAD : class_2123.const_252, this.var_81),
      (this._bitmap.bitmap = this._cropped
        ? e._rb2bd48e3b4d265(this._r005d84920dd501 ? class_2123.HEAD : class_2123.const_252, r)
        : e._rb09602dca8db26(this._r005d84920dd501 ? class_2123.HEAD : class_2123.const_252, !0, r)),
      this._r70d45b59f7e6f8 && this._r2563250d197ca7(),
      (this._bitmap.disposesBitmap = !0));
  }
  zoomBitmapData(e, r, t) {
    let i = new A(Math.trunc(e.width * r), Math.trunc(e.height * t), !0, 0),
      s = new Pe();
    return (s.scale(r, t), i.draw(e, s), i);
  }
  _r2563250d197ca7() {
    let e = this._bitmap?.bitmap ?? null;
    e?.applyFilter(e, e.rect, new E(), a._r13ddeeab7a6558);
  }
  static cleanupAvatarString(e) {
    return e == null || e.length === 0 ? String(a._rea630a9f314ce4.value) : e.replace(/NaN/g, "");
  }
  onClick = n(() => {
    this._userId > 0 && this._windowManager?.communication?.connection?.send(new class_2134(this._userId));
  }, "onClick");
}
