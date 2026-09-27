// Estratto da HabboAirLauncher.deobf.js, riga 79740.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/utils/ColorConverter.as
// Nome offuscato: _i41c0129447cb9b

class a {
  static {
    n(this, "ColorConverter");
  }
  static _r6ca1d657712155(e) {
    let r = ((e >> 16) & 255) / 255,
      t = ((e >> 8) & 255) / 255,
      i = (e & 255) / 255,
      s = Math.max(r, t, i),
      o = Math.min(r, t, i),
      d = s - o,
      c = 0,
      f = 0,
      l = 0;
    (d === 0
      ? (c = 0)
      : s === r
        ? (c = t > i ? (60 * (t - i)) / d : (60 * (t - i)) / d + 360)
        : s === t
          ? (c = (60 * (i - r)) / d + 120)
          : s === i && (c = (60 * (r - t)) / d + 240),
      (f = 0.5 * (s + o)),
      d === 0 ? (l = 0) : f <= 0.5 ? (l = (d / f) * 0.5) : (l = (d / (1 - f)) * 0.5));
    let b = Math.round((c / 360) * 255),
      _ = Math.round(l * 255),
      h = Math.round(f * 255);
    return (b << 16) + (_ << 8) + h;
  }
  static hslToRGB(e) {
    let r = ((e >> 16) & 255) / 255,
      t = ((e >> 8) & 255) / 255,
      i = (e & 255) / 255,
      s = 0,
      o = 0,
      d = 0;
    if (t > 0) {
      let b = 0;
      i < 0.5 ? (b = i * (1 + t)) : (b = i + t - i * t);
      let _ = 2 * i - b,
        h = r + 1 / 3,
        p = r,
        m = r - 1 / 3;
      (h < 0 ? (h += 1) : h > 1 && (h -= 1),
        p < 0 ? (p += 1) : p > 1 && (p -= 1),
        m < 0 ? (m += 1) : m > 1 && (m -= 1),
        h * 6 < 1
          ? (s = _ + (b - _) * 6 * h)
          : h * 2 < 1
            ? (s = b)
            : h * 3 < 2
              ? (s = _ + (b - _) * 6 * (2 / 3 - h))
              : (s = _),
        p * 6 < 1
          ? (o = _ + (b - _) * 6 * p)
          : p * 2 < 1
            ? (o = b)
            : p * 3 < 2
              ? (o = _ + (b - _) * 6 * (2 / 3 - p))
              : (o = _),
        m * 6 < 1
          ? (d = _ + (b - _) * 6 * m)
          : m * 2 < 1
            ? (d = b)
            : m * 3 < 2
              ? (d = _ + (b - _) * 6 * (2 / 3 - m))
              : (d = _));
    } else ((s = i), (o = i), (d = i));
    let c = Math.round(s * 255),
      f = Math.round(o * 255),
      l = Math.round(d * 255);
    return (c << 16) + (f << 8) + l;
  }
  static _rcbbb6e22124c89(e) {
    let r = ((e >> 16) & 255) / 255,
      t = ((e >> 8) & 255) / 255,
      i = (e & 255) / 255;
    return (
      (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92),
      (t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92),
      (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92),
      (r *= 100),
      (t *= 100),
      (i *= 100),
      new k(
        r * 0.4124 + t * 0.3576 + i * 0.1805,
        r * 0.2126 + t * 0.7152 + i * 0.0722,
        r * 0.0193 + t * 0.1192 + i * 0.9505,
      )
    );
  }
  static _r76d7a824d3d422(e) {
    let r = e.x / 95.047,
      t = e.y / 100,
      i = e.z / 108.883;
    return (
      (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116),
      (t = t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116),
      (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
      new k(116 * t - 16, 500 * (r - t), 200 * (t - i))
    );
  }
  static _rd5a73912f7d1b1(e) {
    return a._r76d7a824d3d422(a._rcbbb6e22124c89(e));
  }
  static hexToUint(e) {
    return Number.parseInt(e.replace(/^#/, ""), 16) >>> 0;
  }
}
