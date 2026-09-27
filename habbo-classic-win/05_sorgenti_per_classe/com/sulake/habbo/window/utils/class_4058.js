// Extracted from HabboAirLauncher.deobf.js, line 148495.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/class_4058.as
// Obfuscated name: _i5dd122ce9050aa

class a {
  static {
    n(this, "class_4058");
  }
  static GLYPH_ASSET_PREFIX = "unique_item_number_glyph_";
  static createBitmap(e, r, t, i) {
    let s = new A(t, i, !0, 0);
    if (r < 0 || r > 999999) return s;
    let o = r % 10,
      d = Math.floor(r / 10) % 10,
      c = Math.floor(r / 100) % 10,
      f = Math.floor(r / 1e3) % 10,
      l = Math.floor(r / 1e4) % 10,
      b = Math.floor(r / 1e5) % 10,
      _ = [],
      h = 0,
      p = n((v) => {
        let w = e.getAssetByName(`${a.GLYPH_ASSET_PREFIX}${v}`);
        w != null && (_.push(w), (h += w.rectangle.width));
      }, "_ie966ae9002e247");
    (b > 0 && p(b),
      (b > 0 || l > 0) && p(l),
      (b > 0 || l > 0 || f > 0) && p(f),
      (b > 0 || l > 0 || f > 0 || c > 0) && p(c),
      (b > 0 || l > 0 || f > 0 || c > 0 || d > 0) && p(d),
      p(o),
      (h -= 1));
    let m = new E((t - h) / 2, 0);
    for (let v of _) {
      let w = v.content;
      w != null && (s.copyPixels(w, v.rectangle, m), (m.x += v.rectangle.width));
    }
    return s;
  }
}
