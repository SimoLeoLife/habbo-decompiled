// Extracted from HabboAirLauncher.deobf.js, line 335972.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/furniture/FurnitureDataParser.as
// Obfuscated name: _ifce5f118c136d0

class a extends Ft {
  constructor(r, t, i, s, o, d = !0) {
    super();
    this._rfbc234a8ce8403 = r;
    this._wallItems = t;
    this.var_3742 = i;
    this.var_1091 = s;
    this._localization = o;
    this.var_4097 = d;
  }
  static {
    n(this, "FurnitureDataParser");
  }
  static READY = "FDP_furniture_data_ready";
  static MAX_DOWNLOAD_RETRIES = 2;
  URLRequest = new Na("FurniDataParserAssetLib");
  var_3952 = null;
  _downloadRetriesLeft = 0;
  dispose() {
    (super.dispose(),
      this.URLRequest?.dispose(),
      (this.URLRequest = null),
      (this._localization = null),
      (this._rfbc234a8ce8403 = null),
      (this._wallItems = null),
      (this.var_3742 = null),
      (this.var_1091 = null));
  }
  _r71f563669978dc(r) {
    ((this.var_3952 = r), (this._downloadRetriesLeft = a.MAX_DOWNLOAD_RETRIES), this.requestData(r));
  }
  requestData(r) {
    let t = this.URLRequest?.getAssetByName("furnidata") ?? null;
    t != null && (this.URLRequest?.removeAsset(t) ?? null)?.dispose();
    let i = this.URLRequest?.loadAssetFromFile("furnidata", new UnkClass_636490(r), "text/plain") ?? null;
    i != null &&
      (i.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rba4dcacb65a77e),
      i.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._r3ea5090b7b9316));
  }
  _r70310e3618db17(r) {
    r != null &&
      (r.removeEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rba4dcacb65a77e),
      r.removeEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._r3ea5090b7b9316));
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
      (Ae.logEventLog(`furnituredata malformed data ${r}`),
      class_14.error("XML furni data was malformed", this.var_4097, class_14.ERROR_CATEGORY_FURNIDATA_DOWNLOAD));
  }
  _rba4dcacb65a77e = n((r) => {
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
  }, "_rba4dcacb65a77e");
  _r8f698d85a5e897(r) {
    let t = null;
    try {
      t = JSON.parse(r);
    } catch {
      return !1;
    }
    if (t == null) return !1;
    for (let i of a.asArray(t.roomitemtypes?.furnitype)) {
      let s = this._rf126eee8d05825(i);
      (this._r4097837d8a8898(s), this.registerFurnitureLocalization(s));
    }
    for (let i of a.asArray(t.wallitemtypes?.furnitype)) {
      let s = this.parseFurnitureData(i);
      (this._r4097837d8a8898(s), this.registerFurnitureLocalization(s));
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
    if (t == null) return !1;
    for (let i of a._r22b248f722230e(t, "roomitemtypes", "furnitype")) {
      let s = this._rdd2a23c54bef33(i);
      (this._r4097837d8a8898(s), this.registerFurnitureLocalization(s));
    }
    for (let i of a._r22b248f722230e(t, "wallitemtypes", "furnitype")) {
      let s = this._r43aec110c06534(i);
      (this._r4097837d8a8898(s), this.registerFurnitureLocalization(s));
    }
    return (this.dispatchEvent(new M(a.READY)), !0);
  }
  _rdd2a23c54bef33(r) {
    let t = Number.parseInt(a.getAttribute(r, "id") || "0", 10),
      i = [];
    for (let m of a._r22b248f722230e(r, "partcolors", "color")) {
      let v = String(m);
      v.startsWith("#") ? i.push(Number.parseInt(v.slice(1), 16)) : i.push(-Number.parseInt(v, 10));
    }
    let s = a.getAttribute(r, "classname"),
      o = s.split("*"),
      d = o[0] ?? "",
      c = o.length > 1 ? Number.parseInt(o[1] ?? "0", 10) : 0,
      f = o.length > 1,
      l = Number.parseInt(a._rd13735678592b7(r, "specialtype") || "0", 10),
      b = a._rd13735678592b7(r, "category") || a.getAttribute(r, "category"),
      _ = a._rd13735678592b7(r, "canputstuffon") === "1",
      h = Number(a._rd13735678592b7(r, "height") || "0"),
      p = (a._rd13735678592b7(r, "recyclable") || "1") === "1";
    return new UnkClass_232051__(
      UnkClass_232051__.const_1234,
      t,
      s,
      d,
      a._rd13735678592b7(r, "name"),
      "",
      Number.parseInt(a._rd13735678592b7(r, "revision") || "0", 10),
      Number.parseInt(a._rd13735678592b7(r, "xdim") || "0", 10),
      Number.parseInt(a._rd13735678592b7(r, "ydim") || "0", 10),
      0,
      i,
      f,
      c,
      a._rd13735678592b7(r, "adurl"),
      Number.parseInt(a._rd13735678592b7(r, "offerid") || "0", 10),
      a._rd13735678592b7(r, "buyout") === "1",
      Number.parseInt(a._rd13735678592b7(r, "rentofferid") || "0", 10),
      a._rd13735678592b7(r, "rentbuyout") === "1",
      a._rd13735678592b7(r, "bc") === "1",
      a._rd13735678592b7(r, "customparams"),
      l,
      b,
      a._rd13735678592b7(r, "canstandon") === "1",
      a._rd13735678592b7(r, "cansiton") === "1",
      a._rd13735678592b7(r, "canlayon") === "1",
      _,
      h,
      a._rd13735678592b7(r, "excludeddynamic") === "1",
      a._rd13735678592b7(r, "furniline"),
      Number.parseInt(a._rd13735678592b7(r, "bcofferid") || "-1", 10),
      (a._rd13735678592b7(r, "tradeable") || "1") === "1",
      p,
    );
  }
  _rf126eee8d05825(r) {
    let t = a._r2bb782be179832(r.classname),
      i = t.split("*"),
      s = i[0] ?? "",
      o = i.length > 1 ? a._r9b25849cc8356c(i[1], 0) : 0,
      d = i.length > 1;
    return new UnkClass_232051__(
      UnkClass_232051__.const_1234,
      a._r9b25849cc8356c(r.id),
      t,
      s,
      a._r2bb782be179832(r.name),
      a._r2bb782be179832(r.description),
      a._r9b25849cc8356c(r.revision),
      a._r9b25849cc8356c(r.xdim),
      a._r9b25849cc8356c(r.ydim),
      0,
      a._rd331d4adaa60b3(r.partcolors?.color),
      d,
      o,
      a._r2bb782be179832(r.adurl),
      a._r9b25849cc8356c(r.offerid),
      a._r6b660b476538d5(r.buyout),
      a._r9b25849cc8356c(r.rentofferid, -1),
      a._r6b660b476538d5(r.rentbuyout),
      a._r6b660b476538d5(r.bc),
      a._r2bb782be179832(r.customparams),
      a._r9b25849cc8356c(r.specialtype),
      a._r2bb782be179832(r.category),
      a._r6b660b476538d5(r.canstandon),
      a._r6b660b476538d5(r.cansiton),
      a._r6b660b476538d5(r.canlayon),
      a._r6b660b476538d5(r.canputstuffon),
      a.parseFloat(r.height, 0),
      a._r6b660b476538d5(r.excludeddynamic),
      a._r2bb782be179832(r.furniline),
      a._r9b25849cc8356c(r.bcofferid, -1),
      a._r6b660b476538d5(r.tradeable, !0),
      a._r6b660b476538d5(r.recyclable, !0),
    );
  }
  _r43aec110c06534(r) {
    let t = (a._rd13735678592b7(r, "recyclable") || "1") === "1";
    return new UnkClass_232051__(
      UnkClass_232051__.const_320,
      Number.parseInt(a.getAttribute(r, "id") || "0", 10),
      a.getAttribute(r, "classname"),
      a.getAttribute(r, "classname"),
      a._rd13735678592b7(r, "name"),
      "",
      Number.parseInt(a._rd13735678592b7(r, "revision") || "0", 10),
      0,
      0,
      0,
      null,
      !1,
      0,
      a._rd13735678592b7(r, "adurl"),
      Number.parseInt(a._rd13735678592b7(r, "offerid") || "0", 10),
      a._rd13735678592b7(r, "buyout") === "1",
      Number.parseInt(a._rd13735678592b7(r, "rentofferid") || "0", 10),
      a._rd13735678592b7(r, "rentbuyout") === "1",
      a._rd13735678592b7(r, "bc") === "1",
      "",
      Number.parseInt(a._rd13735678592b7(r, "specialtype") || "0", 10),
      a._rd13735678592b7(r, "category") || a.getAttribute(r, "category"),
      !1,
      !1,
      !1,
      !1,
      0,
      a._rd13735678592b7(r, "excludeddynamic") === "1",
      a._rd13735678592b7(r, "furniline"),
      Number.parseInt(a._rd13735678592b7(r, "bcofferid") || "-1", 10),
      (a._rd13735678592b7(r, "tradeable") || "1") === "1",
      t,
    );
  }
  parseFurnitureData(r) {
    return new UnkClass_232051__(
      UnkClass_232051__.const_320,
      a._r9b25849cc8356c(r.id),
      a._r2bb782be179832(r.classname),
      a._r2bb782be179832(r.classname),
      a._r2bb782be179832(r.name),
      a._r2bb782be179832(r.description),
      a._r9b25849cc8356c(r.revision),
      0,
      0,
      0,
      null,
      !1,
      0,
      a._r2bb782be179832(r.adurl),
      a._r9b25849cc8356c(r.offerid),
      a._r6b660b476538d5(r.buyout),
      a._r9b25849cc8356c(r.rentofferid, -1),
      a._r6b660b476538d5(r.rentbuyout),
      a._r6b660b476538d5(r.bc),
      "",
      a._r9b25849cc8356c(r.specialtype),
      a._r2bb782be179832(r.category),
      !1,
      !1,
      !1,
      !1,
      0,
      a._r6b660b476538d5(r.excludeddynamic),
      a._r2bb782be179832(r.furniline),
      a._r9b25849cc8356c(r.bcofferid, -1),
      a._r6b660b476538d5(r.tradeable, !0),
      a._r6b660b476538d5(r.recyclable, !0),
    );
  }
  parseLingoFormat(r) {
    let t = r.split(/\n\r{1,}|\n{1,}|\r{1,}/gm);
    for (let i of t) {
      let s = i.match(/\[+?((.)*?)\]/g) ?? [];
      for (let o of s) {
        o = o.replace(/\[{1,}/g, "").replace(/\]{1,}/g, "");
        let d = o.split('"');
        if (
          (a.removePatternFrom(d, ", "),
          a.removePatternFrom(d, ","),
          d.splice(0, 1),
          d.splice(d.length - 1, 1),
          d.length < 18)
        ) {
          class_14.error(`Lingo furni data was malformed: ${r}`, !0, class_14.ERROR_CATEGORY_FURNIDATA_DOWNLOAD);
          return;
        }
        let c = d[0] ?? "",
          f = Number.parseInt(d[1] ?? "0", 10),
          l = d[2] ?? "",
          b = l.split("*"),
          _ = b[0] ?? "",
          h = b.length > 1 ? Number.parseInt(b[1] ?? "0", 10) : 0,
          p = b.length > 1,
          m = Number.parseInt(d[3] ?? "0", 10),
          v = Number.parseInt(d[4] ?? "0", 10),
          w = Number.parseInt(d[5] ?? "0", 10),
          I = Number.parseInt(d[6] ?? "0", 10),
          C = [];
        for (let wr of (d[7] ?? "").split(","))
          wr.startsWith("#")
            ? C.push(Number.parseInt(wr.slice(1), 16))
            : wr.length > 0 && C.push(-Number.parseInt(wr, 10));
        let W = d[10] ?? "",
          R = Number.parseInt(d[11] ?? "0", 10),
          T = d[12] === "true",
          S = Number.parseInt(d[13] ?? "0", 10),
          z = d[14] === "true",
          K = d[15] ?? "",
          $ = Number.parseInt(d[16] ?? "0", 10),
          Y = d[17] === "true",
          oe = c === "i",
          be = !oe && d[18] === "1",
          ye = !oe && d[19] === "1",
          ir = !oe && d[20] === "1",
          pe = oe ? d[18] === "1" : d[21] === "1",
          lr = new UnkClass_232051__(
            c,
            f,
            l,
            _,
            d[8] ?? "",
            "",
            m,
            v,
            w,
            I,
            C,
            p,
            h,
            W,
            R,
            T,
            S,
            z,
            Y,
            K,
            $,
            "",
            be,
            ye,
            ir,
            !1,
            I,
            pe,
            "",
            -1,
            !0,
            !0,
          );
        (this._r4097837d8a8898(lr), this.registerFurnitureLocalization(lr));
      }
    }
    this.dispatchEvent(new M(a.READY));
  }
  _r4097837d8a8898(r) {
    let t = null;
    if (
      (r.type === UnkClass_232051__.const_1234
        ? (this._rfbc234a8ce8403?.add(r.id, r), (t = this.var_3742))
        : r.type === UnkClass_232051__.const_320 &&
          (this._wallItems?.add(r.id, r), (t = this.var_1091)),
      t == null)
    )
      return;
    let i = t.getValue(r.className);
    (i == null && ((i = []), t.add(r.className, i)), (i[r.colourIndex] = r.id));
  }
  _r3ea5090b7b9316 = n((r) => {
    let t = r.target;
    (this._r70310e3618db17(t),
      !this.retryLoadIfPossible() &&
        (Ae.logEventLog(`furnituredata download error ${r.status}`),
        class_14.error("Could not download furnidata definition", this.var_4097, class_14.ERROR_CATEGORY_FURNIDATA_DOWNLOAD)));
  }, "_r3ea5090b7b9316");
  registerFurnitureLocalization(r) {
    if (this._localization != null) {
      if (r.type === UnkClass_232051__.const_1234) {
        (this._localization.updateLocalization(`roomItem.name.${r.id}`, r.localizedName),
          this._localization.updateLocalization(`roomItem.desc.${r.id}`, r.description));
        return;
      }
      r.type === UnkClass_232051__.const_320 &&
        (this._localization.updateLocalization(`wallItem.name.${r.id}`, r.localizedName),
        this._localization.updateLocalization(`wallItem.desc.${r.id}`, r.description));
    }
  }
  static removePatternFrom(r, t) {
    for (let i = 0; i < r.length; i++) r[i] === t && (r.splice(i, 1), (i -= 1));
  }
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
  static _r22b248f722230e(r, t, i) {
    let s = [];
    for (let o of a.getChildren(r, t)) s.push(...a.getChildren(o, i));
    return s;
  }
  static _r2bb782be179832(r) {
    return r == null ? "" : String(r);
  }
  static _r9b25849cc8356c(r, t = 0) {
    let i = Number.parseInt(a._r2bb782be179832(r), 10);
    return Number.isNaN(i) ? t : i;
  }
  static parseFloat(r, t = 0) {
    let i = Number.parseFloat(a._r2bb782be179832(r));
    return Number.isNaN(i) ? t : i;
  }
  static _r6b660b476538d5(r, t = !1) {
    if (typeof r == "boolean") return r;
    if (typeof r == "number") return r !== 0;
    if (typeof r == "string") {
      let i = r.toLowerCase();
      if (i === "true" || i === "1") return !0;
      if (i === "false" || i === "0") return !1;
    }
    return t;
  }
  static _rd331d4adaa60b3(r) {
    let t = [];
    for (let i of a.asArray(r)) {
      let s = a._r2bb782be179832(i).trim();
      s.length !== 0 &&
        (s.startsWith("#") ? t.push(Number.parseInt(s.slice(1), 16)) : t.push(-Number.parseInt(s, 10)));
    }
    return t;
  }
  static asArray(r) {
    return r == null ? [] : Array.isArray(r) ? r : [r];
  }
}
