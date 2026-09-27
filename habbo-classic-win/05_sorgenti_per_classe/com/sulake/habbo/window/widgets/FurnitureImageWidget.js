// Extracted from HabboAirLauncher.deobf.js, line 148756.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/FurnitureImageWidget.as
// Obfuscated name: _i891fa9dcb71dfc

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("furniture_image_xml")?.content,
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
    n(this, "FurnitureImageWidget");
  }
  static TYPE = "furniture_image";
  static _rba73a89beded43 = `${a.TYPE}:furnitureType`;
  static _r3019e2ab59cd63 = `${a.TYPE}:scale`;
  static _r24a400a53a6839 = `${a.TYPE}:direction`;
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
  static _r397c4c7f36e946 = new ne(a._rba73a89beded43, "table_plasto_square", ne.STRING, !1);
  static _r9e17e5e02bc7e9 = new ne(a._r3019e2ab59cd63, 64, ne.INT, !1, a._rb4cc0a2d866d6c);
  static _r87a0401cf950ad = new ne(
    a._r24a400a53a6839,
    a._rca58edc720ff52[UnkConstants_6c0c96._r20a7fb2cb94dc0],
    ne.STRING,
    !1,
    a._rca58edc720ff52,
  );
  static _r7104dc659f492e = 0;
  static ITEM_TYPE_WALL = 1;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _bitmap = null;
  var_133 = null;
  _r27cf3c6c4d3fcf = String(a._r397c4c7f36e946.value);
  _scale = Number(a._r9e17e5e02bc7e9.value);
  var_81 = a._rca58edc720ff52.indexOf(String(a._r87a0401cf950ad.value));
  _r3c71099420c43e = new B();
  var_3191 = null;
  var_828 = a._r7104dc659f492e;
  var_2364 = null;
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
          a._r397c4c7f36e946.withValue(this._r27cf3c6c4d3fcf),
          a._r9e17e5e02bc7e9.withValue(this._scale),
          a._r87a0401cf950ad.withValue(
            a._rca58edc720ff52[this.var_81] ?? a._rca58edc720ff52[0],
          ),
        ];
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case a._rba73a89beded43:
          this.furnitureType = String(r.value);
          break;
        case a._r3019e2ab59cd63:
          this.scale = Number(r.value);
          break;
        case a._r24a400a53a6839:
          this.direction = a._rca58edc720ff52.indexOf(String(r.value));
          break;
      }
  }
  get furnitureType() {
    return this._r27cf3c6c4d3fcf;
  }
  set furnitureType(e) {
    ((this._r27cf3c6c4d3fcf = e), this.refresh());
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
  imageReady(e, r) {
    this._r3c71099420c43e.getValue(e) === this._r27cf3c6c4d3fcf && this.refresh();
  }
  imageFailed(e) {}
  refresh() {
    if (this._bitmap == null) return;
    this._bitmap.bitmap = null;
    let e = this._windowManager?.roomEngine ?? null;
    if (e != null) {
      let i = e._r05b4d7c9f899e6(this._r27cf3c6c4d3fcf),
        s =
          this.var_828 === a._r7104dc659f492e
            ? e._r5db1beeb89d785(
                i,
                new k(this.var_81 * 45, 0, 0),
                this._scale,
                this,
                0,
                this.var_3191,
                -1,
                -1,
                this.var_2364,
              )
            : e._r3ac60c12dafe70(
                i,
                new k(this.var_81 * 45, 0, 0),
                this._scale,
                this,
                0,
                this.var_2364?.getLegacyString() ?? "",
              );
      s != null && this._r60d39358270928(s);
    }
    let r = this._bitmap.bitmap;
    if (r == null || r.width < 2) {
      let i = `placeholder_furni${this._scale === 32 ? "_small" : ""}_png`;
      ((this._bitmap.bitmap = this._windowManager?.assets.getAssetByName(i)?.content),
        (this._bitmap.disposesBitmap = !1));
    }
    this._bitmap.invalidate();
    let t = this._bitmap.bitmap;
    t != null &&
      this.var_220 != null &&
      ((this.var_220.width = t.width), (this.var_220.height = t.height));
  }
  _r60d39358270928(e) {
    this._bitmap != null &&
      (this._r3c71099420c43e.remove(e.id),
      e.id > 0 && this._r3c71099420c43e.add(e.id, this._r27cf3c6c4d3fcf),
      (this._bitmap.bitmap = e.data),
      (this._bitmap.disposesBitmap = !0));
  }
}
