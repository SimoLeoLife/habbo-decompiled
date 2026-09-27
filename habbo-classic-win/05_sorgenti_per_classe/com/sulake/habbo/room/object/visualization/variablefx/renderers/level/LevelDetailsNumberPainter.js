// Estratto da HabboAirLauncher.deobf.js, riga 288715.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/level/LevelDetailsNumberPainter.as
// Nome offuscato: _i6994f7e62f42e0

class a {
  static {
    n(this, "LevelDetailsNumberPainter");
  }
  static GLYPH_HEIGHT = 9;
  static GLYPH_SPACING_X = -1;
  static _rb193bbf47576b9 = {
    0: { sourceX: 0, width: 7 },
    1: { sourceX: 8, width: 4 },
    2: { sourceX: 13, width: 7 },
    3: { sourceX: 21, width: 7 },
    4: { sourceX: 29, width: 7 },
    5: { sourceX: 37, width: 7 },
    6: { sourceX: 45, width: 7 },
    7: { sourceX: 53, width: 7 },
    8: { sourceX: 61, width: 7 },
    9: { sourceX: 69, width: 7 },
    "/": { sourceX: 77, width: 12 },
    "...": { sourceX: 90, width: 8 },
  };
  _numbers;
  var_1777 = {};
  constructor(e) {
    this._numbers = e;
  }
  createRenderPlan(e, r, t) {
    let i = Math.max(0, t | 0),
      s = this.createPlan("full:" + e + "/" + r, [e, "/", r]);
    if (s.width <= i) return s;
    let o = this.createPlan("current:" + e, [e]);
    return o.width <= i ? o : this.createTruncatedCurrentPlan(e, i);
  }
  draw(e, r, t, i) {
    let s = t;
    for (let o of r.parts)
      (e.drawLayer(this._r27efdbbd6c646b(o.text), s, i, ie.NORMAL, 255),
        (s += (o.width | 0) + a.GLYPH_SPACING_X));
  }
  dispose() {
    for (let e in this.var_1777) this.var_1777[e]?.dispose();
    this.var_1777 = {};
  }
  createTruncatedCurrentPlan(e, r) {
    for (let i = e.length; i > 0; i--) {
      let s = e.substr(0, i),
        o = this.createPlan("truncated:" + s + "...", [s, "..."]);
      if (o.width <= r) return o;
    }
    let t = this.createPlan("truncated:...", ["..."]);
    return t.width <= r ? t : { key: "empty", parts: [], width: 0 };
  }
  createPlan(e, r) {
    let t = [];
    for (let i of r) i.length > 0 && t.push({ text: i, width: this.measureText(i) });
    return { key: e, parts: t, width: this._r424eb5d0ac9788(t) };
  }
  _r424eb5d0ac9788(e) {
    let r = 0,
      t = 0;
    for (let i of e) ((r += i.width | 0), t++);
    return t === 0 ? 0 : r + a.GLYPH_SPACING_X * (t - 1);
  }
  measureText(e) {
    let r = this.resolveGlyphs(e),
      t = 0;
    if (r.length === 0) return 0;
    for (let i of r) t += i.width | 0;
    return t + a.GLYPH_SPACING_X * (r.length - 1);
  }
  _r27efdbbd6c646b(e) {
    let r = this.var_1777[e];
    if (r != null) return r;
    ((r = new A(Math.max(1, this.measureText(e)), a.GLYPH_HEIGHT, !0, 0)), r.lock());
    try {
      let t = new Tt(r);
      (t.clear(0), this.drawTextGlyphs(t, e, 0, 0));
    } finally {
      r.unlock();
    }
    return ((this.var_1777[e] = r), r);
  }
  drawTextGlyphs(e, r, t, i) {
    let s = t;
    for (let o of this.resolveGlyphs(r))
      (e.drawLayer(
        this._numbers,
        s - (o.sourceX | 0),
        i,
        ie.NORMAL,
        255,
        new VariableFxClipRect(s, i, o.width, a.GLYPH_HEIGHT),
      ),
        (s += (o.width | 0) + a.GLYPH_SPACING_X));
  }
  resolveGlyphs(e) {
    let r = [],
      t = 0;
    for (; t < e.length;) {
      if (e.substr(t, 3) === "...") {
        (r.push(a._rb193bbf47576b9["..."]), (t += 3));
        continue;
      }
      let i = a._rb193bbf47576b9[e.charAt(t)];
      (i != null && r.push(i), t++);
    }
    return r;
  }
}
