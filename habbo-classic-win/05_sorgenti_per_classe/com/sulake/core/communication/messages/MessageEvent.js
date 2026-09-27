// Estratto da HabboAirLauncher.deobf.js, riga 72718.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/communication/messages/MessageEvent.as
// Nome offuscato: _i1070e2d2504fbd

class {
  static {
    n(this, "MessageEvent");
  }
  _callback;
  var_36 = null;
  var_3400;
  var_15 = null;
  constructor(e, r) {
    ((this._callback = e), (this.var_3400 = r));
  }
  dispose() {
    ((this._callback = null),
      (this.var_3400 = null),
      (this.var_36 = null),
      (this.var_15 = null));
  }
  get callback() {
    return this._callback ?? (() => {});
  }
  set connection(e) {
    this.var_36 = e;
  }
  get connection() {
    return this.var_36;
  }
  get parserClass() {
    return this.var_3400;
  }
  get parser() {
    return this.var_15;
  }
  set parser(e) {
    this.var_15 = e;
  }
}
