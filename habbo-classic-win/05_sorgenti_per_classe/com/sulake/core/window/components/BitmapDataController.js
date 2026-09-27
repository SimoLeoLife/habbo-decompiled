// Extracted from HabboAirLauncher.deobf.js, line 130955.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/BitmapDataController.as
// Obfuscated name: _i501382b48f2e73

class extends st {
  static {
    n(this, "BitmapDataController");
  }
  _bitmapData = null;
  _pivot = Vt.CENTER;
  _r133159e328bffc = !1;
  _re49e6216c014c6 = !1;
  _r87d319c0304c68 = 1;
  _r565c818f1b65b5 = 1;
  var_2825 = !1;
  _etchingColor = 0;
  _r88633b683e4314 = new E(0, -1);
  _rc771b52d2c5e10 = !1;
  var_1854 = !1;
  var_1729 = !1;
  _r207803b940aa2e = !1;
  _r163e6456d07ef0 = !1;
  _rotation = 0;
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    let h = s._rf5e87151b3d9ca().getThemeManager()._r421a2291c74c01(t),
      p = Vt.pivotFromName(String(h.get(class_3436.const_1133).value)),
      m = !!h.get(class_3436.STRETCHED_X).value,
      v = !!h.get(class_3436.STRETCHED_Y).value,
      w = Number(h.get(class_3436.const_533).value),
      I = Number(h.get(class_3436.const_1207).value),
      C = !!h.get(class_3436.const_412).value,
      W = !!h.get(class_3436.const_178).value,
      R = !!h.get(class_3436.const_1359).value,
      T = !!h.get(class_3436.const_209).value,
      S = Number(h.get(class_3436.ROTATION).value);
    ((this._bitmapData = null),
      (this._pivot = p),
      (this._r133159e328bffc = m),
      (this._re49e6216c014c6 = v),
      (this._r87d319c0304c68 = w),
      (this._r565c818f1b65b5 = I),
      (this.var_2825 = !1),
      (this._etchingColor = 0),
      (this._r88633b683e4314 = new E(0, -1)),
      (this._rc771b52d2c5e10 = !1),
      (this.var_1854 = R),
      (this.var_1729 = T),
      (this._r207803b940aa2e = C),
      (this._r163e6456d07ef0 = W),
      (this._rotation = S),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  dispose() {
    ((this._bitmapData = null), super.dispose());
  }
  get bitmapData() {
    return this._bitmapData;
  }
  get _rc42ef752c39ce9() {
    return this._pivot;
  }
  set _rc42ef752c39ce9(e) {
    this._pivot = e;
  }
  get _r9d5f7918ae45e9() {
    return this._r133159e328bffc;
  }
  set _r9d5f7918ae45e9(e) {
    this._r133159e328bffc = e;
  }
  get _r1b6896589e83da() {
    return this._re49e6216c014c6;
  }
  set _r1b6896589e83da(e) {
    this._re49e6216c014c6 = e;
  }
  get zoomX() {
    return this._r87d319c0304c68;
  }
  set zoomX(e) {
    ((this._r87d319c0304c68 = e), this.fitSize());
  }
  get zoomY() {
    return this._r565c818f1b65b5;
  }
  set zoomY(e) {
    ((this._r565c818f1b65b5 = e), this.fitSize());
  }
  get greyscale() {
    return this.var_2825;
  }
  set greyscale(e) {
    this.var_2825 = e;
  }
  get etchingColor() {
    return this._etchingColor;
  }
  set etchingColor(e) {
    this._etchingColor = e;
  }
  get fitSizeToContents() {
    return this._rc771b52d2c5e10;
  }
  set fitSizeToContents(e) {
    ((this._rc771b52d2c5e10 = e), this.fitSize());
  }
  get etchingPoint() {
    return this._r88633b683e4314 ?? (this._r88633b683e4314 = new E(0, -1));
  }
  set etching(e) {
    ((this.etchingColor = Number(e[0] ?? 0)),
      (this._r88633b683e4314 = new E(Number(e[1] ?? 0), Number(e[2] ?? 0))));
  }
  get _r2eecf82f5b04f2() {
    return this._r207803b940aa2e;
  }
  set _r2eecf82f5b04f2(e) {
    this._r207803b940aa2e = e;
  }
  get _r738070fc30728d() {
    return this._r163e6456d07ef0;
  }
  set _r738070fc30728d(e) {
    this._r163e6456d07ef0 = e;
  }
  get flipX() {
    return this.var_1854;
  }
  set flipX(e) {
    this.var_1854 = e;
  }
  get flipY() {
    return this.var_1729;
  }
  set flipY(e) {
    this.var_1729 = e;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    this._rotation = e;
  }
  fitSize() {
    this._rc771b52d2c5e10 &&
      this._bitmapData != null &&
      ((this.width = Math.abs(this._bitmapData.width * this._r87d319c0304c68)),
      (this.height = Math.abs(this._bitmapData.height * this._r565c818f1b65b5)));
  }
  get properties() {
    let e = [...super.properties];
    return (
      e.push(this.createProperty(class_3436.const_1133, Vt.PIVOT_NAMES[this._pivot])),
      e.push(this.createProperty(class_3436.STRETCHED_X, this._r133159e328bffc)),
      e.push(this.createProperty(class_3436.STRETCHED_Y, this._re49e6216c014c6)),
      e.push(this.createProperty(class_3436.const_412, this._r207803b940aa2e)),
      e.push(this.createProperty(class_3436.const_178, this._r163e6456d07ef0)),
      e.push(this.createProperty(class_3436.const_1359, this.var_1854)),
      e.push(this.createProperty(class_3436.const_209, this.var_1729)),
      e.push(this.createProperty(class_3436.const_533, this._r87d319c0304c68)),
      e.push(this.createProperty(class_3436.const_1207, this._r565c818f1b65b5)),
      e.push(this.createProperty(class_3436.GREYSCALE, this.var_2825)),
      e.push(this.createProperty(class_3436.ETCHING_COLOR, this._etchingColor)),
      e.push(this.createProperty(class_3436.FIT_SIZE_TO_CONTENTS, this._rc771b52d2c5e10)),
      e.push(this.createProperty(class_3436.ROTATION, this._rotation)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case class_3436.const_1133:
          this._pivot = Vt.pivotFromName(String(r.value));
          break;
        case class_3436.STRETCHED_X:
          this._r133159e328bffc = !!r.value;
          break;
        case class_3436.STRETCHED_Y:
          this._re49e6216c014c6 = !!r.value;
          break;
        case class_3436.const_533:
          this._r87d319c0304c68 = Number(r.value);
          break;
        case class_3436.const_1207:
          this._r565c818f1b65b5 = Number(r.value);
          break;
        case class_3436.const_412:
          this._r207803b940aa2e = !!r.value;
          break;
        case class_3436.const_178:
          this._r163e6456d07ef0 = !!r.value;
          break;
        case class_3436.const_1359:
          this.var_1854 = !!r.value;
          break;
        case class_3436.const_209:
          this.var_1729 = !!r.value;
          break;
        case class_3436.GREYSCALE:
          this.var_2825 = !!r.value;
          break;
        case class_3436.ETCHING_COLOR:
          this._etchingColor = Number(r.value);
          break;
        case class_3436.FIT_SIZE_TO_CONTENTS:
          this.fitSizeToContents = r.value;
          break;
        case class_3436.ROTATION:
          this._rotation = Number(r.value);
          break;
      }
    super.properties = e;
  }
}
