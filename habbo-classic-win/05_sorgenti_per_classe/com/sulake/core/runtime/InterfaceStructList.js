// Extracted from HabboAirLauncher.deobf.js, line 58841.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/InterfaceStructList.as
// Obfuscated name: _i0a358d9458a65a

class {
  static {
    n(this, "InterfaceStructList");
  }
  var_122 = [];
  get length() {
    return this.var_122.length;
  }
  get disposed() {
    return this.var_122 == null;
  }
  dispose() {
    for (; this.var_122.length > 0;) this.var_122.pop()?.dispose();
    this.var_122 = null;
  }
  insert(e) {
    return (this.var_122.push(e), this.var_122.length);
  }
  remove(e) {
    if (e >= 0 && e < this.var_122.length) {
      let [r] = this.var_122.splice(e, 1);
      return r;
    }
    throw new Error("Index out of range!");
  }
  find(e) {
    return this._r158678286c6a29(e)?.unknown ?? null;
  }
  _r158678286c6a29(e) {
    let r = _iad1dc21ca35e21(e);
    return this.var_122.find((t) => t.iis === r) ?? null;
  }
  _r2d6e1074362703(e) {
    let r = _iad1dc21ca35e21(e);
    return this.var_122.findIndex((t) => t.iis === r);
  }
  _r24822b2b98c458(e, r) {
    let t = _iad1dc21ca35e21(e),
      i = this.var_122.filter((s) => s.iis === t);
    return (r.push(...i), i.length);
  }
  _r250a9b8c324969(e) {
    return this.var_122.find((r) => r.unknown === e) ?? null;
  }
  _rbc27778decd2ca(e) {
    return this.var_122.findIndex((r) => r.unknown === e);
  }
  _rfb5cdc66784ba5(e, r) {
    let t = this.var_122.filter((i) => i.unknown === e);
    return (r.push(...t), t.length);
  }
  _r1813ee00b8a7f9(e) {
    return this.var_122[e] ?? null;
  }
  getTotalReferenceCount() {
    return this.var_122.reduce((e, r) => e + r.references, 0);
  }
}
