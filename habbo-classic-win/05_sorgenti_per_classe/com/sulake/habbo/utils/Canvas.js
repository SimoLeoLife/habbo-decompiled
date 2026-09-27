// Extracted from HabboAirLauncher.deobf.js, line 61466.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/Canvas.as
// Obfuscated name: _i3e316b7663035d

class a extends A {
  static {
    n(this, "Canvas");
  }
  constructor(e, r, t = !0, i = 0) {
    super(e, r, t, i);
  }
  drawQuad(e, r, t = 4294967295) {
    if (e.length !== 4) return;
    let i, s;
    (e[1]?.x === e[3]?.x
      ? ((i = e[3] ?? new E()),
        (s = (e[0]?.y ?? 0) < (e[1]?.y ?? 0) ? a.sampleLeftWallTexture : a.sampleRightWallTexture))
      : ((i = e[3] ?? new E()), (s = a.sampleFloorTexture)),
      this.fillTriangle(e.slice(0, 3), r, i, s, t),
      this.fillTriangle(e.slice(1, 4), r, i, s, t));
  }
  fillTriangle(e, r, t, i, s) {
    if (e.length !== 3) return;
    let o = e.map((l) => l.clone());
    o.sort(a.sortByVerticalPosition);
    let d = new E((o[1]?.x ?? 0) - (o[0]?.x ?? 0), (o[1]?.y ?? 0) - (o[0]?.y ?? 0)),
      c = new E((o[2]?.x ?? 0) - (o[0]?.x ?? 0), (o[2]?.y ?? 0) - (o[0]?.y ?? 0)),
      f = new E((o[2]?.x ?? 0) - (o[1]?.x ?? 0), (o[2]?.y ?? 0) - (o[1]?.y ?? 0));
    if (d.y !== 0 && c.y !== 0)
      for (let l = 0; l < d.y; l++) {
        let b = (o[0]?.x ?? 0) + (d.x / d.y) * l,
          _ = (o[0]?.x ?? 0) + (c.x / c.y) * l;
        this.drawHorizontalLine(b, _, (o[0]?.y ?? 0) + l, r, t, i, s);
      }
    if (c.y !== 0 && f.y !== 0)
      for (let l = 0; l < f.y; l++) {
        let b = (o[1]?.x ?? 0) + (f.x / f.y) * l,
          _ = (o[0]?.x ?? 0) + (c.x / c.y) * ((d.y ?? 0) + l);
        this.drawHorizontalLine(b, _, (o[1]?.y ?? 0) + l, r, t, i, s);
      }
  }
  static colorize(e, r) {
    if (r === 4294967295) return e;
    let t = (r >> 16) & 255,
      i = (r >> 8) & 255,
      s = r & 255;
    return (
      (t = (((e >> 16) & 255) * t) / 255),
      (i = (((e >> 8) & 255) * i) / 255),
      (s = ((e & 255) * s) / 255),
      (e && 4278190080) | (t << 16) | (i << 8) | s
    );
  }
  static averageColor(e) {
    if (e == null) return 16777215;
    let r = 0,
      t = 0,
      i = 0,
      s = 0;
    for (let o = 0; o < e.width; o++)
      for (let d = 0; d < e.height; d++) {
        let c = e.getPixel32(o, d);
        ((c >> 24) & 255) > 0 && ((r += (c >> 16) & 255), (t += (c >> 8) & 255), (i += c & 255), s++);
      }
    return s === 0 ? 16777215 : ((r /= s), (t /= s), (i /= s), (r << 16) | (t << 8) | i);
  }
  static sortByVerticalPosition(e, r) {
    return e.y > r.y ? 1 : e.y < r.y ? -1 : 0;
  }
  drawHorizontalLine(e, r, t, i, s, o, d) {
    if (e < r) for (let c = e; c < r; c++) this.setPixel32(c, t, o(i, s, c, t, d));
    else for (let c = r; c < e; c++) this.setPixel32(c, t, o(i, s, c, t, d));
  }
  static sampleLeftWallTexture(e, r, t, i, s) {
    if (e == null) return s;
    let o = t - r.x,
      d = i - r.y,
      c = o % e.width,
      f = (d + o / 2) % e.height,
      l = e.getPixel32(c, f);
    return a.colorize(l, s);
  }
  static sampleRightWallTexture(e, r, t, i, s) {
    if (e == null) return s;
    let o = t - r.x,
      d = i - r.y,
      c = o % e.width,
      f = (d - o / 2) % e.height,
      l = e.getPixel32(c, f);
    return a.colorize(l, s);
  }
  static sampleFloorTexture(e, r, t, i, s) {
    if (e == null) return s;
    let o = t - r.x,
      d = i - r.y,
      c = (d + o / 2) % e.width,
      f = (d - o / 2) % e.height,
      l = e.getPixel32(c, f);
    return a.colorize(l, s);
  }
}
