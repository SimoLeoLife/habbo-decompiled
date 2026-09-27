// Extracted from HabboAirLauncher.deobf.js, line 336446.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/product/ProductDataParser.as
// Obfuscated name: _ida43bde8bb5d5f

class a extends Ft {
  constructor(r, t) {
    super();
    this.var_438 = t;
    ((this.var_3952 = r), (this._downloadRetriesLeft = a.MAX_DOWNLOAD_RETRIES), this.requestData(r));
  }
  static {
    n(this, "ProductDataParser");
  }
  static READY = "PDP_product_data_ready";
  static MAX_DOWNLOAD_RETRIES = 2;
  URLRequest = new Na("ProductDataParserAssetLib");
  var_3952 = null;
  _downloadRetriesLeft = 0;
  requestData(r) {
    let t = this.URLRequest?.getAssetByName("productdata") ?? null;
    t != null && (this.URLRequest?.removeAsset(t) ?? null)?.dispose();
    let i = this.URLRequest?.loadAssetFromFile("productdata", new UnkClass_636490(r), "text/plain") ?? null;
    i != null &&
      (i.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r8ffc183e74766c),
      i.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._ra043558ac49c64));
  }
  dispose() {
    (super.dispose(),
      this.URLRequest?.dispose(),
      (this.URLRequest = null),
      (this.var_438 = null));
  }
  _r70310e3618db17(r) {
    r != null &&
      (r.removeEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r8ffc183e74766c),
      r.removeEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._ra043558ac49c64));
  }
  retryLoadIfPossible() {
    if (this.var_3952 == null || this._downloadRetriesLeft <= 0) return !1;
    let r = a.appendRetryParam(this.var_3952, this._downloadRetriesLeft);
    return (this._downloadRetriesLeft--, this.requestData(r), !0);
  }
  static appendRetryParam(r, t) {
    return r.indexOf("?") > 0 ? `${r}&retry=${t}` : `${r}?retry=${t}`;
  }
  onMalformedData(r) {
    this.retryLoadIfPossible() ||
      (Ae.logEventLog(`productdata malformed data ${r}`),
      class_14.error("XML Product data was malformed", !0, class_14.ERROR_CATEGORY_PRODUCT_DATA));
  }
  _r8ffc183e74766c = n((r) => {
    let t = r.target;
    if ((this._r70310e3618db17(t), t == null)) {
      this.onMalformedData(r.status);
      return;
    }
    let i = t?._r7ea1029131e026?.content ?? null;
    if (i == null) {
      this.onMalformedData(r.status);
      return;
    }
    let s;
    if (
      (i instanceof re ? ((i.position = 0), (s = i.readUTFBytes(i.length))) : (s = String(i)), s.length === 0)
    ) {
      this.onMalformedData(r.status);
      return;
    }
    let o = s.trimStart();
    o.startsWith("{")
      ? this._r8f698d85a5e897(o) || this.onMalformedData(r.status)
      : o.startsWith("<")
        ? this._rc2fbe0240e3200(o) || this.onMalformedData(r.status)
        : this.parseLingoFormat(s);
  }, "_r8ffc183e74766c");
  _r8f698d85a5e897(r) {
    if (this.var_438 == null) return !1;
    let t = null;
    try {
      t = JSON.parse(r);
    } catch {
      return !1;
    }
    if (t == null) return !1;
    for (let i of a.asArray(t.productdata?.product)) {
      let s = a._r2bb782be179832(i.code);
      s.length !== 0 &&
        (this.var_438[s] = new UnkClass_cdf87d(s, a._r2bb782be179832(i.name), a._r2bb782be179832(i.description)));
    }
    return (this.dispatchEvent(new M(a.READY)), !0);
  }
  _rc2fbe0240e3200(r) {
    let t = null;
    try {
      t = rr(r);
    } catch {
      return !1;
    }
    if (t == null || this.var_438 == null) return !1;
    for (let i of a.getChildren(t, "product")) {
      let s = a.getAttribute(i, "code");
      this.var_438[s] = new UnkClass_cdf87d(
        s,
        a._rd13735678592b7(i, "name"),
        a._rd13735678592b7(i, "description"),
      );
    }
    return (this.dispatchEvent(new M(a.READY)), !0);
  }
  parseLingoFormat(r) {
    if (this.var_438 == null) return;
    let t = r.replace(/"{1,}/g, "").split(/\n\r{1,}|\n{1,}|\r{1,}/gm);
    for (let i of t) {
      let s = i.match(/\[+?((.)*?)\]/g) ?? [];
      for (let o of s) {
        o = o.replace(/\[{1,}/g, "").replace(/\]{1,}/g, "");
        let d = o.split(","),
          c = d.shift() ?? "",
          f = d.shift() ?? "";
        this.var_438[c] = new UnkClass_cdf87d(c, f);
      }
    }
    this.dispatchEvent(new M(a.READY));
  }
  _ra043558ac49c64 = n((r) => {
    let t = r.target;
    (this._r70310e3618db17(t),
      !this.retryLoadIfPossible() &&
        (Ae.logEventLog(`productdata download error ${r.status}`),
        class_14.error("Could not download productdata", !0, class_14.ERROR_CATEGORY_PRODUCT_DATA)));
  }, "_ra043558ac49c64");
  static getAttribute(r, t) {
    return r.attribute(t).toString();
  }
  static _rd13735678592b7(r, t) {
    return r.child(t).toString();
  }
  static getChildren(r, t) {
    return r
      .child(t)
      .toArray()
      .filter((i) => i instanceof yi);
  }
  static _r2bb782be179832(r) {
    return r == null ? "" : String(r);
  }
  static asArray(r) {
    return r == null ? [] : Array.isArray(r) ? r : [r];
  }
}
