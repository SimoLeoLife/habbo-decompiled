// Estratto da HabboAirLauncher.deobf.js, riga 70787.

class a {
  constructor(e, r, t) {
    this._bitmapData = e;
    this._r90c3eb7fad06e5 = r;
    this._r60c14a367c9611 = t;
  }
  static {
    n(this, "_i729a2649bf00e6");
  }
  static _r5fe5a38cdd7135 = null;
  static _r92d58ac03aa0b0 = null;
  static _rcfad9ba308618a = null;
  static _r300d5363faaae9 = null;
  static _rc8e90ebc8f4568 = null;
  static _frame = null;
  static _rdd1ef167e69033 = null;
  static _r28f51f76fa6c60 = null;
  static var_30 = null;
  static _r81d820e6c03a1e = null;
  static _r27d23181025b18 = null;
  static _r76f61ba20a6463 = null;
  static _r8cb2a221783047 = null;
  static get _r0bacdc96513f9d() {
    return (a._r5fe5a38cdd7135 ??= new a(_i4b01ea81f74ef8("white_balloon_png"), [5, 4, 5], [11, 1, 5]));
  }
  static get _r6c4ae87b80df49() {
    return (a._r92d58ac03aa0b0 ??= new a(_i4b01ea81f74ef8("white_balloon_png"), [5, 4, 5], [5, 1, 11]));
  }
  static get _r557672103479f2() {
    return (a._rcfad9ba308618a ??= new a(_i4b01ea81f74ef8("border_sunk_png"), [12, 2, 6], [14, 2, 4]));
  }
  static get _red130cf2d13cc9() {
    return (a._r300d5363faaae9 ??= new a(_i4b01ea81f74ef8("dark_popup_png"), [5, 5, 5], [5, 12, 5]));
  }
  static get _rd7a815bfe34633() {
    return (a._rc8e90ebc8f4568 ??= new a(_i4b01ea81f74ef8("divider_png"), [2, 2, 2], [8, 0, 0]));
  }
  static get _r7a62f8b171367f() {
    return (a._frame ??= new a(_i4b01ea81f74ef8("frame_png"), [4, 3, 4], [5, 1, 7]));
  }
  static get _r1bc7f92d262924() {
    return (a._rdd1ef167e69033 ??= new a(_i4b01ea81f74ef8("input_corrected_png"), [5, 2, 5], [5, 2, 6]));
  }
  static get _r7f7c8fccf8cd14() {
    return (a._r28f51f76fa6c60 ??= new a(_i4b01ea81f74ef8("input_error_png"), [5, 2, 5], [5, 2, 6]));
  }
  static get _re26d60a2b7d2ac() {
    return (a.var_30 ??= new a(_i4b01ea81f74ef8("input_field_png"), [5, 4, 5], [7, 2, 5]));
  }
  static get _ra62a24b4ab6747() {
    return (a._r81d820e6c03a1e ??= new a(_i4b01ea81f74ef8("input_field_hitch_png"), [10, 310, 10], [5, 21, 5]));
  }
  static get _rfcd7a65b425acd() {
    return (a._r27d23181025b18 ??= new a(_i4b01ea81f74ef8("input_error_hitch_png"), [10, 310, 10], [5, 21, 5]));
  }
  static get _rb9acc8b72de55a() {
    return (a._r76f61ba20a6463 ??= new a(_i4b01ea81f74ef8("input_field_hitch_png"), [10, 310, 10], [5, 21, 5]));
  }
  static get block_dark_point_up_png() {
    return (a._r8cb2a221783047 ??= new a(_i4b01ea81f74ef8("block_dark_base_png"), [5, 4, 5], [11, 1, 5]));
  }
  render(e, r) {
    let t = new _i3a5c6f457acdad(new A(e, r, !0, 16777215));
    return (this._rc2d6cfb3d02830(t, new D(0, 0, e, r)), t);
  }
  _rc2d6cfb3d02830(e, r) {
    let t = r.x,
      i = r.y,
      s = r.width,
      o = r.height,
      d = [0, this._r90c3eb7fad06e5[0], this._r90c3eb7fad06e5[0] + this._r90c3eb7fad06e5[1]],
      c = [0, this._r60c14a367c9611[0], this._r60c14a367c9611[0] + this._r60c14a367c9611[1]],
      f = this._r90c3eb7fad06e5,
      l = this._r60c14a367c9611,
      b = [t, t + this._r90c3eb7fad06e5[0], t + s - this._r90c3eb7fad06e5[2]],
      _ = [i, i + this._r60c14a367c9611[0], i + o - this._r60c14a367c9611[2]],
      h = [
        this._r90c3eb7fad06e5[0],
        s - this._r90c3eb7fad06e5[0] - this._r90c3eb7fad06e5[2],
        this._r90c3eb7fad06e5[2],
      ],
      p = [
        this._r60c14a367c9611[0],
        o - this._r60c14a367c9611[0] - this._r60c14a367c9611[2],
        this._r60c14a367c9611[2],
      ];
    for (let m = 0; m < 3; m++)
      for (let v = 0; v < 3; v++) {
        if (h[m] < 1 || p[v] < 1 || f[m] < 1 || l[v] < 1) continue;
        let w = new D(d[m], c[v], f[m], l[v]);
        if (m !== 1 && v !== 1) e.bitmapData?.copyPixels(this._bitmapData, w, new E(b[m], _[v]));
        else {
          let I = new D(b[m], _[v], h[m], p[v]);
          e.bitmapData?.draw(this._bitmapData, In.rectangleTransformMatrix(w, I), null, null, I, !1);
        }
      }
  }
  get bitmapData() {
    return this._bitmapData;
  }
}
