// Extracted from HabboAirLauncher.deobf.js, line 67869.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/HabboFaceFocuser.as
// Obfuscated name: _i157831f1e5a5f1

class a {
  static {
    n(this, "HabboFaceFocuser");
  }
  static _r42c724e9bf1461 = [-100, -100, 21, 21, -100, -100, -100, -100, -100];
  static _r19b1c59865feb6 = [-100, -100, 28, 30, -100, -100, -100, -100, -100];
  static _r927d3388cb9774 = 50;
  static _r8f1af017a5bfa4 = 50;
  static focusUserFace(e, r, t, i, s = -1, o = -1) {
    let d = a._r8f1af017a5bfa4 * i,
      c = a._r927d3388cb9774 * i;
    (s === -1 && (s = d), o === -1 && (o = c));
    let f = e;
    f.setDirection(r, t);
    let l = f._rb09602dca8db26(r, !0, i),
      b = new A(s, o, !0, 0);
    if (l == null) return b;
    let _ = (o - c) / 2,
      h = new D((a._r42c724e9bf1461[t] ?? 0) * i, (a._r19b1c59865feb6[t] ?? 0) * i, d, c);
    return (b.copyPixels(l, h, new E(0, _)), b);
  }
  static cutCircleFromBitmap(e, r) {
    let t = e.width,
      i = e.height,
      s = new A(t, i, !0, 0),
      o = t / 2,
      d = i / 2,
      c = r * r;
    for (let f = 0; f < i; f++)
      for (let l = 0; l < t; l++) {
        let b = l - o,
          _ = f - d;
        b * b + _ * _ <= c && s.setPixel32(l, f, e.getPixel32(l, f));
      }
    return s;
  }
}
