// Extracted from HabboAirLauncher.deobf.js, line 50890.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/ClassUtils.as
// Obfuscated name: _i7deef04e690143

class {
  static {
    n(this, "ClassUtils");
  }
  static _rc882f0c0aea57f(e, r) {
    return e instanceof r ? e : null;
  }
  static getParser(e, r) {
    if (e == null || typeof e != "object") return null;
    let t = e.getParser;
    return typeof t != "function" ? null : this._rc882f0c0aea57f(t.call(e), r);
  }
  static implementsInterface(e, r) {
    let t = typeof e == "function" ? e.prototype : void 0,
      i = typeof r == "function" ? r.name : "";
    if (!t || !i) return !1;
    switch (i) {
      case "IMessageComposer":
        return typeof t.getMessageArray == "function";
      case "IMessageEvent":
        return typeof t.dispose == "function" && "parserClass" in t;
      case "IMessageParser":
        return typeof t.flush == "function" && typeof t.parse == "function";
      case "IPreEncryptionMessage":
        return !0;
      default:
        return !0;
    }
  }
  static getSimpleQualifiedClassName(e) {
    if (typeof e == "function") return e.name;
    if (e != null && typeof e == "object") {
      let r = e.constructor;
      if (r?.name) return r.name;
    }
    return typeof e;
  }
}
