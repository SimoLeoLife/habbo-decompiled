// Estratto da HabboAirLauncher.deobf.js, riga 213731.

class a {
  constructor(e, r, t) {
    this._bitmapData = e;
    this._r90c3eb7fad06e5 = r;
    this._r60c14a367c9611 = t;
  }
  static {
    n(this, "_i729a2649bf00e6");
  }
  static _r557672103479f2 = new a(_i198ea9f0f21815("border_sunk_png", 4279840845, 20, 20), [12, 2, 6], [14, 2, 4]);
  static _r7a62f8b171367f = new a(_i198ea9f0f21815("frame_png", 4279644746, 20, 20), [4, 3, 4], [5, 1, 7]);
  static _r1bc7f92d262924 = new a(_i198ea9f0f21815("input_corrected_png", 4281167449, 20, 20), [5, 2, 5], [5, 2, 6]);
  static _r7f7c8fccf8cd14 = new a(_i198ea9f0f21815("input_error_png", 4287507500, 20, 20), [5, 2, 5], [5, 2, 6]);
  static _re26d60a2b7d2ac = new a(_i198ea9f0f21815("input_field_png", 4280632672, 20, 20), [5, 4, 5], [7, 2, 5]);
  static _ra62a24b4ab6747 = new a(
    _i198ea9f0f21815("input_field_hitch_png", 4279318356, 330, 31),
    [10, 310, 10],
    [5, 21, 5],
  );
  static _rfcd7a65b425acd = new a(
    _i198ea9f0f21815("input_error_hitch_png", 4287310645, 330, 31),
    [10, 310, 10],
    [5, 21, 5],
  );
  static _rb9acc8b72de55a = new a(
    _i198ea9f0f21815("input_field_hitch_png", 4279318356, 330, 31),
    [10, 310, 10],
    [5, 21, 5],
  );
  static block_dark_point_up_png = new a(_i198ea9f0f21815("block_dark_base_png", 4279185998, 20, 20), [5, 4, 5], [11, 1, 5]);
  render(e, r) {
    let t = new _i3a5c6f457acdad();
    return ((t.bitmapData = new A(e, r, !0, 16777215)), this._rc2d6cfb3d02830(t, new D(0, 0, e, r)), t);
  }
  _rc2d6cfb3d02830(e, r) {
    let t = [0, this._r90c3eb7fad06e5[0], this._r90c3eb7fad06e5[0] + this._r90c3eb7fad06e5[1]],
      i = [0, this._r60c14a367c9611[0], this._r60c14a367c9611[0] + this._r60c14a367c9611[1]],
      s = this._r90c3eb7fad06e5,
      o = this._r60c14a367c9611,
      d = [r.x, r.x + this._r90c3eb7fad06e5[0], r.x + r.width - this._r90c3eb7fad06e5[2]],
      c = [r.y, r.y + this._r60c14a367c9611[0], r.y + r.height - this._r60c14a367c9611[2]],
      f = [
        this._r90c3eb7fad06e5[0],
        r.width - this._r90c3eb7fad06e5[0] - this._r90c3eb7fad06e5[2],
        this._r90c3eb7fad06e5[2],
      ],
      l = [
        this._r60c14a367c9611[0],
        r.height - this._r60c14a367c9611[0] - this._r60c14a367c9611[2],
        this._r60c14a367c9611[2],
      ];
    if (e.bitmapData != null)
      for (let b = 0; b < 3; b++)
        for (let _ = 0; _ < 3; _++) {
          if (f[b] < 1 || l[_] < 1 || s[b] < 1 || o[_] < 1) continue;
          let h = new D(t[b], i[_], s[b], o[_]);
          if (b !== 1 && _ !== 1) e.bitmapData.copyPixels(this._bitmapData, h, new E(d[b], c[_]));
          else {
            let p = new D(d[b], c[_], f[b], l[_]);
            e.bitmapData.draw(this._bitmapData, In.rectangleTransformMatrix(h, p), null, null, p, !1);
          }
        }
  }
  get bitmapData() {
    return this._bitmapData;
  }
}
