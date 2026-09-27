// Estratto da HabboAirLauncher.deobf.js, riga 151848.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/RunningNumberWidget.as
// Nome offuscato: _ib28d223f96859a

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    let t = this._windowManager?.assets.getAssetByName("running_number_xml")?.content;
    ((this._rf8f9fc25599fa4 =
      t != null && this._windowManager != null ? this._windowManager.buildFromXML(t) : null),
      this._windowManager?.registerUpdateReceiver(this, this.var_1535),
      this.var_220?.setParamFlag(N._r22d1ec858797ca),
      this.var_220 != null &&
        (this.var_220.rootWindow = this._rf8f9fc25599fa4 ?? null));
  }
  static {
    n(this, "RunningNumberWidget");
  }
  static TYPE = "running_number";
  static _rf95812bee580df = `${a.TYPE}:number`;
  static _rb3d961b7bb64de = `${a.TYPE}:digits`;
  static _r3569af744562d5 = `${a.TYPE}:color_style`;
  static _rb69e3de49bc5aa = `${a.TYPE}:update_frequency`;
  static _rcb228b8b83080b = new ne(a._rf95812bee580df, 0, ne.INT);
  static _rad6ac0902ba8e7 = new ne(a._rb3d961b7bb64de, 8, ne.const_77);
  static _rd97219d07346d6 = new ne(a._r3569af744562d5, 0, ne.INT);
  static _rbb855893090939 = new ne(a._rb69e3de49bc5aa, 50, ne.INT);
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  var_3133 = Number(a._rd97219d07346d6.value);
  var_2658 = Number(a._rad6ac0902ba8e7.value);
  var_1535 = Number(a._rbb855893090939.value);
  _newNumber = Number(a._rcb228b8b83080b.value);
  _displayedNumber = 0;
  _millisSinceLastUpdate = 0;
  dispose() {
    this._disposed ||
      (this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._windowManager?.removeUpdateReceiver(this),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get properties() {
    let e = [];
    return (
      this._disposed ||
        (e.push(a._rcb228b8b83080b.withValue(this.colorStyle)),
        e.push(a._rd97219d07346d6.withValue(this.colorStyle)),
        e.push(a._rad6ac0902ba8e7.withValue(this.digits)),
        e.push(a._rbb855893090939.withValue(this.updateFrequency))),
      e
    );
  }
  set properties(e) {
    if (!this._disposed)
      for (let r of e)
        switch (r.key) {
          case a._rf95812bee580df:
            this.number = Number(r.value);
            break;
          case a._rb3d961b7bb64de:
            this.digits = Number(r.value);
            break;
          case a._r3569af744562d5:
            this.colorStyle = Number(r.value);
            break;
          case a._rb69e3de49bc5aa:
            this.updateFrequency = Number(r.value);
            break;
        }
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  update(e) {
    this._displayedNumber >= this.number ||
      ((this._millisSinceLastUpdate += e),
      this._millisSinceLastUpdate > this.var_1535 &&
        ((this._displayedNumber = Math.min(
          this._newNumber,
          this._displayedNumber + this._millisSinceLastUpdate / this.var_1535,
        )),
        (this._millisSinceLastUpdate -= this.var_1535)),
      (this.fieldValue = this._displayedNumber));
  }
  get digits() {
    return this.var_2658;
  }
  set digits(e) {
    this.var_2658 = e;
  }
  get colorStyle() {
    return this.var_3133;
  }
  set colorStyle(e) {
    this.var_3133 = e;
  }
  get updateFrequency() {
    return this.var_1535;
  }
  set updateFrequency(e) {
    this.var_1535 = e;
  }
  get number() {
    return this._newNumber;
  }
  set number(e) {
    this._newNumber = e;
  }
  set initialNumber(e) {
    ((this._displayedNumber = e),
      (this._newNumber = e),
      (this.fieldValue = this._displayedNumber));
  }
  set fieldValue(e) {
    let r = String(Math.trunc(e));
    for (; r.length < this.var_2658;) r = `0${r}`;
    let t = this._rf8f9fc25599fa4?.findChildByName("number_field");
    t != null && ((t.text = r), t.invalidate());
  }
}
