// Extracted from HabboAirLauncher.deobf.js, line 60768.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/ErrorReportStorage.as
// Obfuscated name: _i5829fae3c7bd36

class {
  static {
    n(this, "ErrorReportStorage");
  }
  static var_1618 = new B();
  static var_2328 = new B();
  static getDebugData() {
    let e = "";
    for (let r = 0; r < this.var_2328.length; r++) {
      let t = this.var_2328.getWithIndex(r) ?? "";
      e = r === 0 ? t : `${e} ** ${t}`;
    }
    return e.length > 400 ? e.slice(e.length - 400) : e;
  }
  static addDebugData(e, r) {
    (this.var_2328.remove(e), this.var_2328.add(e, r));
  }
  static setParameter(e, r) {
    this.var_1618.setProperty(e, r);
  }
  static getParameter(e) {
    return this.var_1618.getProperty(e) ?? "";
  }
  static getParameterNames() {
    return this.var_1618.getKeys();
  }
}
