// Estratto da HabboAirLauncher.deobf.js, riga 203216.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/visualization/style/ChatStyleLibrary.as
// Nome offuscato: _ic8d39cbda79f5d

class a {
  static {
    n(this, "ChatStyleLibrary");
  }
  static DEFAULT_STYLE = 0;
  _assets;
  _styles = new B();
  constructor(e) {
    this._assets = e;
    let r = rr(String(this._assets.getAssetByName("chatstyles_xml")?.content ?? ""));
    for (let t of r.child("style").toDomElements()) {
      let i = Number(t.getAttribute("id") ?? 0),
        s = t.getAttribute("assetId") ?? "",
        o = t.getAttribute("systemStyle") === "true",
        d = t.getAttribute("purchasable") === "true",
        c = t.getAttribute("hcOnly") === "true",
        f = t.getAttribute("staffOverrideable") === "true",
        l = t.getAttribute("allowHTML") === "true",
        b = t.getAttribute("ambassadorOnly") === "true",
        _ = t.getAttribute("notification") === "true";
      try {
        let h = this.initializeStyleFromAssets(s, o, d, c, f, l, b, _);
        this._styles.add(i, h);
      } catch (h) {
        let p = h instanceof Error ? h.message : String(h);
      }
    }
  }
  dispose() {
    (this._styles.dispose(), (this._styles = null), (this._assets = null));
  }
  get disposed() {
    return this._assets == null;
  }
  getStyleIds() {
    return this._styles.getKeys();
  }
  _r22c9347ecec607(e) {
    return this._styles.getValue(e) ?? this._styles.getValue(a.DEFAULT_STYLE) ?? null;
  }
  initializeStyleFromAssets(e, r, t, i, s, o, d, c) {
    let f = this._assets,
      l = String(f.getAssetByName(`style_${e}_regpoints`)?.content ?? ""),
      b = f.getAssetByName(`style_${e}_chat_bubble_base`)?.content,
      _ = this._r5a014a2c907d07(l, "9sliceXY"),
      h = this._r5a014a2c907d07(l, "9sliceWH"),
      p = new D(_.x, _.y, h.x, h.y),
      m = this._r3f57c20b07a318(l, "faceXY") ? this._r5a014a2c907d07(l, "faceXY") : null,
      v = null,
      w = 0,
      I = null,
      C = this._r3f57c20b07a318(l, "anonymous") ? this.getConfigBoolean(l, "anonymous") : !1;
    C ||
      ((v = f.getAssetByName(`style_${e}_chat_bubble_pointer`)?.content),
      (w = Number(this.getConfigCSV(l, "pointerY")[0] ?? 0)),
      (I = this._r3f57c20b07a318(l, "pointerXMargins") ? this._r655449e891858f(l, "pointerXMargins") : null));
    let W = null,
      R = null;
    this._r3f57c20b07a318(l, "emblemXY") &&
      f.hasAsset(`style_${e}_chat_bubble_emblem`) &&
      ((W = f.getAssetByName(`style_${e}_chat_bubble_emblem`)?.content),
      (R = this._r5a014a2c907d07(l, "emblemXY")));
    let T = null,
      S = null;
    this._r3f57c20b07a318(l, "emblemMultilineXY") &&
      f.hasAsset(`style_${e}_chat_bubble_emblem_multiline`) &&
      ((T = f.getAssetByName(`style_${e}_chat_bubble_emblem_multiline`)?.content),
      (S = this._r5a014a2c907d07(l, "emblemMultilineXY")));
    let z = f.hasAsset(`style_${e}_icon`) ? f.getAssetByName(`style_${e}_icon`)?.content : null,
      K = this._r9515e70a9b3f08(l, "textFieldMargins"),
      $ = f.getAssetByName(`style_${e}_selector_preview`)?.content,
      Y = f.hasAsset(`style_${e}_chat_bubble_color`)
        ? f.getAssetByName(`style_${e}_chat_bubble_color`)?.content
        : null,
      oe = this._r3f57c20b07a318(l, "colorXY") ? this._r5a014a2c907d07(l, "colorXY") : null,
      be = this._r3f57c20b07a318(l, "overlapRect") ? this._r9515e70a9b3f08(l, "overlapRect") : null,
      ye = this._r3f57c20b07a318(l, "textColorRGB")
        ? Number(this.getConfigCSV(l, "textColorRGB")[0] ?? 0)
        : 0,
      ir = this._r3f57c20b07a318(l, "fontFace")
        ? String(this.getConfigCSV(l, "fontFace")[0] ?? "Volter")
        : "Volter",
      pe = this._r3f57c20b07a318(l, "fontSize") ? Number(this.getConfigCSV(l, "fontSize")[0] ?? 9) : 9,
      lr = new _i(ir, pe, ye),
      wr = this._r3f57c20b07a318(l, "linkColorRGB")
        ? Number(this.getConfigCSV(l, "linkColorRGB")[0] ?? ye)
        : ye,
      q = this._r3f57c20b07a318(l, "linkHoverColorRGB")
        ? Number(this.getConfigCSV(l, "linkHoverColorRGB")[0] ?? ye)
        : ye,
      de = this._r3f57c20b07a318(l, "linkActiveColorRGB")
        ? Number(this.getConfigCSV(l, "linkActiveColorRGB")[0] ?? ye)
        : ye,
      Be = new _ib0061b42edfac2();
    (Be._r14e5354d420daf("a:link", { textDecoration: "underline", color: this.toHexString(wr) }),
      Be._r14e5354d420daf("a:active", { color: this.toHexString(de) }),
      Be._r14e5354d420daf("a:hover", { color: this.toHexString(q) }));
    let Ie = this._r3f57c20b07a318(l, "usePixelPerfectNineSlice")
      ? this.getConfigBoolean(l, "usePixelPerfectNineSlice")
      : !1;
    return new ChatStyle(b, p, v, w, I, K, lr, C, W, R, T, S, m, z, $, r, t, i, s, d, c, Y, oe, be, o, Be, Ie);
  }
  toHexString(e) {
    let r = e.toString(16);
    for (; r.length < 6;) r = `0${r}`;
    return `#${r}`;
  }
  _r3f57c20b07a318(e, r) {
    return e.indexOf(r) !== -1;
  }
  getConfigCSV(e, r) {
    let t = e.indexOf(r);
    if (t === -1) return [];
    let i = e.indexOf("=", t),
      s = e.indexOf(
        `\r
`,
        i,
      );
    (s === -1 &&
      (s = e.indexOf(
        `
`,
        i,
      )),
      s === -1 && (s = e.length));
    let o = e.charAt(i + 1) === " ";
    return e.substring(i + (o ? 2 : 1), s).split(",");
  }
  _r5a014a2c907d07(e, r) {
    let t = this.getConfigCSV(e, r);
    return new E(Number(t[0] ?? 0), Number(t[1] ?? 0));
  }
  _r655449e891858f(e, r) {
    return this.getConfigCSV(e, r).map((t) => Number(t));
  }
  _r9515e70a9b3f08(e, r) {
    let t = this.getConfigCSV(e, r);
    return new D(Number(t[0] ?? 0), Number(t[1] ?? 0), Number(t[2] ?? 0), Number(t[3] ?? 0));
  }
  getConfigBoolean(e, r) {
    return this.getConfigCSV(e, r)[0] === "true";
  }
}
