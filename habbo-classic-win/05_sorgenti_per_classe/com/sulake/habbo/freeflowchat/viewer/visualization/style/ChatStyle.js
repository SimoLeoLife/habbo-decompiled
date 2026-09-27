// Extracted from HabboAirLauncher.deobf.js, line 203046.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/visualization/style/ChatStyle.as
// Obfuscated name: _i2918945789cfd0

class {
  static {
    n(this, "ChatStyle");
  }
  _background;
  _scale9Grid;
  var_596;
  _pointerY;
  _pointerXMargins;
  var_5737;
  var_2321;
  var_4879;
  var_3994;
  var_3752;
  var_3424;
  var_1072;
  var_4611;
  var_4690;
  _color;
  var_5747;
  _overlap;
  var_5516;
  var_5614;
  var_4710;
  var_4877;
  var_5144;
  _isAnonymous;
  _allowHTML;
  var_5058;
  var_5555;
  _usePixelPerfectNineSlice;
  constructor(
    e,
    r,
    t,
    i,
    s,
    o,
    d,
    c,
    f,
    l,
    b,
    _,
    h,
    p,
    m,
    v,
    w,
    I,
    C,
    W,
    R,
    T = null,
    S = null,
    z = null,
    K = !1,
    $ = null,
    Y = !1,
  ) {
    ((this._background = e),
      (this._scale9Grid = r),
      (this.var_596 = t),
      (this._pointerY = i),
      (this._pointerXMargins = s),
      (this.var_5737 = o),
      (this.var_2321 = d),
      (this._isAnonymous = c),
      (this.var_4879 = f),
      (this.var_3994 = l),
      (this.var_3752 = b),
      (this.var_3424 = _),
      (this.var_4611 = h),
      (this.var_1072 = p),
      (this.var_4690 = m),
      (this.var_5516 = v),
      (this.var_5614 = w),
      (this.var_4710 = I),
      (this.var_4877 = W),
      (this.var_5144 = C),
      (this._color = T),
      (this.var_5747 = S),
      (this._overlap = z),
      (this._allowHTML = K),
      (this.var_5058 = $),
      (this.var_5555 = R),
      (this._usePixelPerfectNineSlice = Y));
  }
  _r3abb3c4d9f4245(e = 16777215) {
    let r;
    if (this._color != null) {
      ((r = new A(this._background.width, this._background.height, this._background.transparent, 0)),
        r.copyPixels(this._background, this._background.rect, new E(0, 0)));
      let t = (e >> 16) & 255,
        i = (e >> 8) & 255,
        s = e & 255;
      r.draw(this._color, void 0, new UnkClass_4210dc(t / 255, i / 255, s / 255), ie.DARKEN);
    } else r = this._background;
    return this._usePixelPerfectNineSlice ? new Tz(this._scale9Grid, r) : _ie2bd349331c380(this._scale9Grid, r);
  }
  get _r39fa5000b657f2() {
    return this.var_2321;
  }
  get styleSheet() {
    return this.var_5058;
  }
  get pointer() {
    return this.var_596;
  }
  get _r7685c14b89e55a() {
    return this._background.height - this._pointerY;
  }
  _r899d4d870cbac2(e) {
    return this._pointerXMargins == null || this._pointerXMargins.length < 1 ? e : this._pointerXMargins[0];
  }
  _r65da3bd2926418(e) {
    return this._pointerXMargins == null || this._pointerXMargins.length < 2 ? e : this._pointerXMargins[1];
  }
  get alpha() {
    return this._isAnonymous;
  }
  get max() {
    return this.var_4611;
  }
  _r92826090b9bdba(e = !1) {
    return e && this.var_3752 != null && this.var_3424 != null
      ? this.var_3752
      : this.var_3994 != null
        ? this.var_4879
        : null;
  }
  getEmblem(e = !1) {
    return e && this.var_3752 != null && this.var_3424 != null
      ? this.var_3424
      : this.var_3994;
  }
  get _r145cc0394d677f() {
    return this.var_1072;
  }
  get textFieldMargins() {
    return this.var_5737;
  }
  get overlap() {
    return this._overlap;
  }
  get _r270592cedf0213() {
    return this.var_4690;
  }
  get _r16cfd05b0ddda9() {
    return this.var_5516;
  }
  get purchasable() {
    return this.var_5614;
  }
  get isHcOnly() {
    return this.var_4710;
  }
  get isAmbassadorOnly() {
    return this.var_4877;
  }
  get isStaffOverrideable() {
    return this.var_5144;
  }
  get allowHTML() {
    return this._allowHTML;
  }
  get mask() {
    return this.var_5555;
  }
}
