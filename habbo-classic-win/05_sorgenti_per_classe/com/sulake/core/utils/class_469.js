// Estratto da HabboAirLauncher.deobf.js, riga 80437.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/class_469.as
// Nome offuscato: _i9b271f27ace5fc

class a {
  static {
    n(this, "class_469");
  }
  static checkRequiredAttributes(e, r) {
    if (e == null || r == null) return !1;
    let t = a._r423e0bca90c709(e);
    if (t != null) {
      let i = t.match(/<([A-Za-z_][^>\s/]*)\s+([^>]*)>/);
      if (i == null) return !1;
      let s = i[2] ?? "";
      for (let o of r) {
        let d = String(o).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (!new RegExp(`\\b${d}\\s*=`, "u").test(s)) return !1;
      }
      return !0;
    }
    return Array.isArray(e) && e.length > 0 ? a.checkRequiredAttributes(e[0], r) : !1;
  }
  static _r423e0bca90c709(e) {
    if (typeof e == "string") return e;
    if (e != null && typeof e == "object") {
      if ("toXMLString" in e && typeof e.toXMLString == "function") return String(e.toXMLString());
      if ("toString" in e && typeof e.toString == "function") return String(e.toString());
    }
    return null;
  }
}
