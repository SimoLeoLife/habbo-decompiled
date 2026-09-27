// Estratto da HabboAirLauncher.deobf.js, riga 303818.

class a {
  static {
    n(this, "_i17b2041e2f8a1c");
  }
  static _assets = new Map();
  static var_325 = null;
  static _re0d9f8c3ab422c = [];
  static _rfa880eec4954ff = "";
  _r1fd2f6f72ccf7d = !1;
  static init(e, r) {
    this.var_325 == null &&
      ((this._assets = new Map()),
      (this._rfa880eec4954ff = e),
      (this._re0d9f8c3ab422c = [...r]),
      (this.var_325 = new a()));
  }
  static _r9d95529f4d996a() {
    return this.var_325?._r1fd2f6f72ccf7d ?? !1;
  }
  static _rb09602dca8db26(e) {
    return this._assets.get(e) ?? null;
  }
  constructor() {
    this._r9866b4caac6230();
  }
  async _r9866b4caac6230() {
    if (a._re0d9f8c3ab422c.length < 1) {
      this._r1fd2f6f72ccf7d = !0;
      return;
    }
    let e = a._re0d9f8c3ab422c[0],
      r = `${a._rfa880eec4954ff}Habbo-Stories/${e}.png`;
    try {
      let t = await this._r6dc693b333c923(r);
      t != null && a._assets.set(e, t);
    } catch {}
    (a._re0d9f8c3ab422c.shift(), await this._r9866b4caac6230());
  }
  async _r6dc693b333c923(e) {
    let r = null;
    if (typeof fetch == "function" && typeof createImageBitmap == "function")
      try {
        let t = await fetch(e);
        if (!t.ok) throw new Error(`HTTP ${t.status}`);
        let i = await createImageBitmap(await t.blob());
        try {
          return this._r71bb5a3a46fe10(i, i.width, i.height);
        } finally {
          i.close();
        }
      } catch (t) {
        r = t instanceof Error ? t : new Error(String(t));
      }
    if (typeof Image < "u")
      try {
        let t = await this.loadImage(e);
        return this._r71bb5a3a46fe10(t, t.naturalWidth || t.width, t.naturalHeight || t.height);
      } catch (t) {
        r = t instanceof Error ? t : new Error(String(t));
      }
    if (r != null) throw r;
    return null;
  }
  loadImage(e) {
    return new Promise((r, t) => {
      if (typeof Image > "u") {
        t(new Error("Image is unavailable"));
        return;
      }
      let i = new Image();
      ((i.crossOrigin = "anonymous"),
        (i.onload = () => r(i)),
        (i.onerror = () => t(new Error(`Failed to load ${e}`))),
        (i.src = e));
    });
  }
  _r71bb5a3a46fe10(e, r, t) {
    let i = Math.max(1, Math.ceil(r)),
      s = Math.max(1, Math.ceil(t)),
      o =
        typeof OffscreenCanvas < "u"
          ? new OffscreenCanvas(i, s)
          : typeof document < "u"
            ? document.createElement("canvas")
            : null;
    if (o == null) throw new Error("Missing canvas support");
    ((o.width = i), (o.height = s));
    let d = o.getContext("2d", { willReadFrequently: !0 });
    if (d == null) throw new Error("Missing 2D context");
    d.drawImage(e, 0, 0, i, s);
    let c = d.getImageData(0, 0, i, s);
    return A._r0a52af92aacbc7(i, s, c.data);
  }
}
