// Estratto da HabboAirLauncher.deobf.js, riga 150206.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/PetImageWidget.as
// Nome offuscato: _i05e007cd6d0ed2

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("pet_image_xml")?.content,
    )),
      (this._bitmap = this._rf8f9fc25599fa4?.findChildByName("bitmap")),
      (this.var_133 = this._rf8f9fc25599fa4?.findChildByName("region")),
      this.refresh(),
      this.var_220 != null &&
        ((this.var_220.rootWindow = this._rf8f9fc25599fa4),
        this._rf8f9fc25599fa4 != null &&
          ((this._rf8f9fc25599fa4.width = this.var_220.width),
          (this._rf8f9fc25599fa4.height = this.var_220.height))));
  }
  static {
    n(this, "PetImageWidget");
  }
  static TYPE = "pet_image";
  static _r92df576dfd6155 = `${a.TYPE}:figure`;
  static _r3019e2ab59cd63 = `${a.TYPE}:scale`;
  static _r24a400a53a6839 = `${a.TYPE}:direction`;
  static _r30470b9ded88a4 = `${a.TYPE}:zoomX`;
  static _rfcf9ee2d19f69a = `${a.TYPE}:zoomY`;
  static _rca37176343e75e = `${a.TYPE}:shrink_on_overflow`;
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
  static _rb4cc0a2d866d6c = [32, 64];
  static _rea630a9f314ce4 = new ne(a._r92df576dfd6155, "1 0 ffffff", ne.STRING);
  static _r9e17e5e02bc7e9 = new ne(a._r3019e2ab59cd63, 64, ne.INT, !1, a._rb4cc0a2d866d6c);
  static _r87a0401cf950ad = new ne(
    a._r24a400a53a6839,
    a._rca58edc720ff52[_i6c0c96c1d5cea5._r20a7fb2cb94dc0],
    ne.STRING,
    !1,
    a._rca58edc720ff52,
  );
  static _r8a82b1e240b239 = new ne(a._r30470b9ded88a4, 1, ne.NUMBER);
  static _read75edbf4d8df = new ne(a._rfcf9ee2d19f69a, 1, ne.NUMBER);
  static _rc08433e1897ad9 = new ne(a._rca37176343e75e, !1, ne.BOOLEAN);
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _bitmap = null;
  var_133 = null;
  var_1129 = String(a._rea630a9f314ce4.value);
  _scale = Number(a._r9e17e5e02bc7e9.value);
  var_81 = a._rca58edc720ff52.indexOf(String(a._r87a0401cf950ad.value));
  _r87d319c0304c68 = Number(a._r8a82b1e240b239.value);
  _r565c818f1b65b5 = Number(a._read75edbf4d8df.value);
  _r52f7aff3923525 = !!a._rc08433e1897ad9.value;
  _r3c71099420c43e = new B();
  _r906a48eec48dec = null;
  dispose() {
    this._disposed ||
      (this.var_133?.dispose(),
      (this.var_133 = null),
      (this._bitmap = null),
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
    return this._disposed
      ? []
      : [
          a._rea630a9f314ce4.withValue(this.var_1129),
          a._r9e17e5e02bc7e9.withValue(this._scale),
          a._r87a0401cf950ad.withValue(
            a._rca58edc720ff52[this.var_81] ?? a._rca58edc720ff52[0],
          ),
          a._r8a82b1e240b239.withValue(this._r87d319c0304c68),
          a._read75edbf4d8df.withValue(this._r565c818f1b65b5),
          a._rc08433e1897ad9.withValue(this._r52f7aff3923525),
        ];
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case a._r92df576dfd6155:
          this.figure = String(r.value);
          break;
        case a._r3019e2ab59cd63:
          this.scale = Number(r.value);
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
        case a._rca37176343e75e:
          this._rd0906cb90ed19b = !!r.value;
          break;
      }
  }
  get figure() {
    return this.var_1129;
  }
  set figure(e) {
    ((this.var_1129 = a.cleanupAvatarString(e)), this.refresh());
  }
  get scale() {
    return this._scale;
  }
  set scale(e) {
    ((this._scale = Math.trunc(e)), this.refresh());
  }
  get direction() {
    return this.var_81;
  }
  set direction(e) {
    ((this.var_81 = e), this.refresh());
  }
  get _rd0906cb90ed19b() {
    return this._r52f7aff3923525;
  }
  set _rd0906cb90ed19b(e) {
    ((this._r52f7aff3923525 = e), this.refresh());
  }
  imageReady(e, r) {
    let t = this._r3c71099420c43e.getValue(e);
    t != null && a.cleanupAvatarString(t) === this.var_1129 && this.refresh();
  }
  imageFailed(e) {}
  refresh() {
    if (this._bitmap == null) return;
    ((this._bitmap.bitmap = null),
      (this._bitmap.blend = this.var_220?.blend ?? 1));
    let e = new class_3800(this.var_1129),
      r = this._windowManager?.roomEngine ?? null;
    if (r != null) {
      let o = r.getPetImage(
        e.typeId,
        e.paletteId,
        e.color,
        new k(this.var_81 * 45),
        this._scale,
        this,
        !0,
        0,
        e.customParts,
        "std",
      );
      o != null && this._r60d39358270928(o);
    }
    let t = this._bitmap.bitmap;
    if (t == null || t.width < 2) {
      let o = `placeholder_pet${this._scale === 32 ? "_small" : ""}_png`;
      ((this._bitmap.bitmap = this._windowManager?.assets.getAssetByName(o)?.content),
        (this._bitmap.disposesBitmap = !1));
    }
    let i = this._r87d319c0304c68,
      s = this._r565c818f1b65b5;
    ((this._r906a48eec48dec = this._bitmap.bitmap),
      this._r52f7aff3923525 &&
        this._r906a48eec48dec != null &&
        this.var_220 != null &&
        (this._r906a48eec48dec.width * this._r87d319c0304c68 > this.var_220.width ||
          this._r906a48eec48dec.height * this._r565c818f1b65b5 > this.var_220.height) &&
        ((i *= 0.5), (s *= 0.5)),
      this._bitmap.bitmap != null &&
        (i !== 1 || s !== 1) &&
        (this._bitmap.bitmap = this.zoomBitmapData(this._bitmap.bitmap, i, s)),
      this._bitmap.invalidate());
  }
  _r60d39358270928(e) {
    this._bitmap != null &&
      (this._r3c71099420c43e.remove(e.id),
      e.id > 0 && this._r3c71099420c43e.add(e.id, this.var_1129),
      (this._bitmap.bitmap = e.data),
      (this._bitmap.disposesBitmap = !0));
  }
  zoomBitmapData(e, r, t) {
    let i = new A(e.width * r, e.height * t, !0, 0),
      s = new Pe();
    return (s.scale(r, t), i.draw(e, s), i);
  }
  static cleanupAvatarString(e) {
    return e == null ? String(a._rea630a9f314ce4.value) : e.replace(/NaN/g, "");
  }
  get zoomX() {
    return this._r87d319c0304c68;
  }
  set zoomX(e) {
    ((this._r87d319c0304c68 = e), this.refresh());
  }
  get zoomY() {
    return this._r565c818f1b65b5;
  }
  set zoomY(e) {
    ((this._r565c818f1b65b5 = e), this.refresh());
  }
  get _rad983a6679229b() {
    return this._r906a48eec48dec?.width ?? 0;
  }
  get _rc8c1845551e3a6() {
    return this._r906a48eec48dec?.height ?? 0;
  }
}
