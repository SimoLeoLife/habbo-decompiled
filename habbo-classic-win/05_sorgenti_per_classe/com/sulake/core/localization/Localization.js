// Estratto da HabboAirLauncher.deobf.js, riga 71953.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/localization/Localization.as
// Nome offuscato: _i60c7cc4160d141

class {
  constructor(e, r, t = null) {
    this.var_41 = e;
    this._key = r;
    this.var_166 = t;
  }
  static {
    n(this, "Localization");
  }
  _parameters = null;
  _listeners = null;
  get isInitialized() {
    return this.var_166 != null;
  }
  get value() {
    return this.fillParameterValues();
  }
  get raw() {
    return this.var_166;
  }
  setValue(e) {
    ((this.var_166 = e), this.updateListeners());
  }
  registerListener(e) {
    ((this._listeners ??= []),
      this._listeners.includes(e) || this._listeners.push(e),
      (e.localization = this.var_41.interpolate(this.value ?? "")));
  }
  removeListener(e) {
    if (this._listeners == null) return;
    let r = this._listeners.indexOf(e);
    r >= 0 && this._listeners.splice(r, 1);
  }
  _r43eae9731f5b27(e, r, t = "%") {
    ((this._parameters ??= new globalThis.Map()),
      this._parameters.set(e, { id: t, value: r }),
      this.updateListeners());
  }
  updateListeners() {
    let e = this.var_41.interpolate(this.value ?? "");
    for (let r of this._listeners ?? []) r.localization = e;
  }
  fillParameterValues() {
    let e = this.var_166;
    if (e == null) return null;
    if (this._parameters != null)
      for (let [i, s] of this._parameters.entries()) {
        let o = `${s.id}${i}${s.id}`,
          d = new RegExp(o, "gim");
        if (((e = e.replace(d, s.value)), e.toLowerCase().includes(`${s.id}{${i}`))) {
          let c = 3;
          switch (Number.parseInt(s.value, 10)) {
            case 0:
              c = 1;
              break;
            case 1:
              c = 2;
              break;
          }
          let f = new RegExp(`${s.id}\\{${i}\\|([^|]*)\\|([^|]*)\\|([^}]*)\\}`, "gim"),
            l = new RegExp(`${s.id}${s.id}`, "gim");
          ((e = e.replace(f, `$${c}`)), (e = e.replace(l, s.value)));
        }
      }
    let r = /%%%([A-Za-z0-9_])+%%%/g,
      t = e.match(r);
    if (t != null)
      for (let i = t.length - 1; i >= 0; i--) {
        let s = t[i].substring(3, t[i].length - 3),
          o = `${this._key}.${s}`,
          d = this.var_41.getLocalization(o, s);
        e = e.replace(t[i], d);
      }
    return e;
  }
}
