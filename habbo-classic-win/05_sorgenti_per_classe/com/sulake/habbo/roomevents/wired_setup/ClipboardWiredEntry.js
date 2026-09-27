// Estratto da HabboAirLauncher.deobf.js, riga 365622.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/ClipboardWiredEntry.as
// Nome offuscato: _iee433105a8ff25

class {
  constructor(e, r, t, i, s, o, d) {
    this._intParams = e;
    this.var_2061 = r;
    this._rbbe62f1bfc3ef7 = t;
    this.var_2488 = i;
    this._stuffIds2 = s;
    this._furniSourceTypes = o;
    this._userSourceTypes = d;
  }
  static {
    n(this, "ClipboardWiredEntry");
  }
  _delayInPulses = 0;
  _quantifierCode = 0;
  var_3391 = !1;
  var_3725 = !1;
  get intParams() {
    return this._intParams;
  }
  get _r7e8836fc336e43() {
    return this.var_2061;
  }
  get _r1385185994d461() {
    return this._rbbe62f1bfc3ef7;
  }
  get stuffIds() {
    return this.var_2488;
  }
  get stuffIds2() {
    return this._stuffIds2;
  }
  get _r7ba6f01e49d6c6() {
    return this._furniSourceTypes;
  }
  get _ra3ec1f5c3b2503() {
    return this._userSourceTypes;
  }
  get delayInPulses() {
    return this._delayInPulses;
  }
  set delayInPulses(e) {
    this._delayInPulses = e;
  }
  get quantifierCode() {
    return this._quantifierCode;
  }
  set quantifierCode(e) {
    this._quantifierCode = e;
  }
  get isFilter() {
    return this.var_3391;
  }
  set isFilter(e) {
    this.var_3391 = e;
  }
  get isInvert() {
    return this.var_3725;
  }
  set isInvert(e) {
    this.var_3725 = e;
  }
}
