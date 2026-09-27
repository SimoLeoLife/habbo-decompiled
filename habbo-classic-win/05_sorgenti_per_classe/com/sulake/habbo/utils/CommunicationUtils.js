// Estratto da HabboAirLauncher.deobf.js, riga 65369.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/CommunicationUtils.as
// Nome offuscato: _idf84de32969b2f

class a {
  static {
    n(this, "CommunicationUtils");
  }
  static const_713 = "facebook";
  static LOGIN_METHOD_HABBO = "habbo";
  static SOL_PROPERTY_APP_RATER_STATUS = "ratingstatus";
  static SOL_PROPERTY_APP_RATER_TIMESTAMP = "ratingstatustime";
  static SOL_PROPERTY_CHARACTER_ID = "userid";
  static SOL_PROPERTY_CHARACTER_UNIQUE_ID = "useruniqueid";
  static SOL_PROPERTY_ENVIRONMENT = "environment";
  static SOL_PROPERTY_LOGIN_METHOD = "loginmethod";
  static SOL_PROPERTY_LOGIN_NAME = "login";
  static SOL_PROPERTY_MACHINE_ID = "machineid";
  static SOL_PROPERTY_REMEMBER_LOGIN = "autologin";
  static SOL_ID = "fuselogin";
  static SOL_PROPERTY_PASSWORD = "password";
  static var_4878 = !1;
  static _r6a673739d2cb81() {
    (a._r7f62dd3441fb83(a.SOL_PROPERTY_LOGIN_METHOD, null),
      a._r7f62dd3441fb83(a.SOL_PROPERTY_ENVIRONMENT, null),
      a._r7f62dd3441fb83(a.SOL_PROPERTY_CHARACTER_ID, null),
      a._r7f62dd3441fb83(a.SOL_PROPERTY_REMEMBER_LOGIN, null),
      (a.forcedAutoLoginEnabled = !1));
  }
  static get forcedAutoLoginEnabled() {
    return a.var_4878;
  }
  static set forcedAutoLoginEnabled(e) {
    a.var_4878 = e;
  }
  static _r99e276bcef92f9() {
    a._r7f62dd3441fb83(a.SOL_PROPERTY_PASSWORD, "");
  }
  static restorePassword() {
    return a.readSOLString(a.SOL_PROPERTY_PASSWORD, "");
  }
  static propertyExists(e) {
    return a.readSOLProperty(e) != null;
  }
  static _r7f62dd3441fb83(e, r) {
    let t = a.getLocal();
    (r == null ? delete t[e] : (t[e] = r), a._re289f107fafa3a(t));
  }
  static readSOLProperty(e, r = null) {
    let i = a.getLocal()[e] ?? r;
    return (
      e === a.SOL_PROPERTY_ENVIRONMENT &&
        typeof i == "string" &&
        (i = i.replace("hh", "").replace("br", "pt").replace("us", "en")),
      i
    );
  }
  static readSOLString(e, r = null) {
    let t = a.readSOLProperty(e, r);
    return t == null || t === "" ? null : String(t);
  }
  static readSOLBoolean(e, r = null) {
    let t = String(a.readSOLProperty(e, r) ?? "");
    return t.toLowerCase() === "true" || t === "1";
  }
  static _r44e44f6f44d690(e, r = null) {
    return Number.parseInt(String(a.readSOLProperty(e, r) ?? ""), 10);
  }
  static _ree6143b61a8aac(e, r = null) {
    return Number.parseFloat(String(a.readSOLProperty(e, r) ?? ""));
  }
  static _r798bca58ba346d(e) {
    let t = new E(4, 39),
      i = new E(80, 30),
      s = "",
      o = 0,
      d = 0,
      c = 0;
    for (let f = t.y; f < t.y + i.y; f++) {
      for (let l = t.x; l < t.x + i.x; l++) {
        let b = e.getPixel32(l, f + c),
          _ = [(b >>> 24) & 255, (b >>> 16) & 255, (b >>> 8) & 255, b & 255];
        for (let h = 1; h < 4; h++) {
          let p = (_[h] ?? 0) & 1;
          ((d |= p << (7 - o)), o === 7 ? ((s += String.fromCharCode(d)), (d = 0), (o = 0)) : o++);
        }
        l % 2 === 0 && c++;
      }
      c = 0;
    }
    return s;
  }
  static xor(e, r) {
    let t = "",
      i = 0;
    for (let s = 0; s < e.length; s++) {
      let o = e.charCodeAt(s);
      ((t += String.fromCharCode(o ^ r.charCodeAt(i))), i++, i === r.length && (i = 0));
    }
    return t;
  }
  static _re11841038745b7() {
    try {
      let e = typeof navigator < "u" ? navigator.userAgent : "",
        r =
          typeof navigator < "u" && navigator.plugins != null
            ? Array.from(navigator.plugins, (_) => _.name || _.filename || "").join(",")
            : "",
        t = _ic7f867ad53849e._rfc02824d36aa13,
        i = String(new Date().getTimezoneOffset()),
        s = Wd._r615ad07097b75f(!0),
        o = [];
      for (let _ of s) _._rc51bdfc62a7f70 === Wd.EMBEDDED || _.fontStyle !== Wd.REGULAR || o.push(_.fontName);
      let d = o.join(","),
        c = `${e}#${t}#${i}#${r}#${d}`,
        f = new re(),
        l = new D_(),
        b = "";
      return (f.writeUTFBytes(c), (b = Mc.fromArray(l.hash(f), !1)), r.length === 0 ? `~${b}` : b);
    } catch {}
    return "";
  }
  static generateRandomHexString(e = 16) {
    let r = Math.max(1, Math.ceil(e / 2)),
      t = new Uint8Array(r);
    if (typeof crypto < "u" && typeof crypto.getRandomValues == "function") crypto.getRandomValues(t);
    else for (let i = 0; i < t.length; i++) t[i] = Math.floor(Math.random() * 256);
    return Array.from(t, (i) => i.toString(16).padStart(2, "0"))
      .join("")
      .slice(0, e);
  }
  static removeProtocol(e) {
    return e.replace("http://", "").replace("https://", "");
  }
  static getLocal() {
    try {
      if (typeof localStorage > "u") return {};
      let e = localStorage.getItem(a.SOL_ID);
      return e == null || e.length === 0 ? {} : (JSON.parse(e) ?? {});
    } catch {
      return {};
    }
  }
  static _re289f107fafa3a(e) {
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(a.SOL_ID, JSON.stringify(e));
    } catch {}
  }
}
