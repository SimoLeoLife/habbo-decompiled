// Estratto da HabboAirLauncher.deobf.js, riga 168916.

class {
  static {
    n(this, "_i7d43921526789a");
  }
  _id;
  _value;
  _r4b7715b0a7ef61 = [];
  _r87a883e45ff1d7 = !0;
  _isAnimated = !0;
  constructor(e) {
    ((this._id = _i897b98cdeac318(e, "value")), (this._value = _i897b98cdeac318(e, "value")));
    let r = _ifdbe20062cc5b0(e, "prevents");
    (r !== "" && (this._r4b7715b0a7ef61 = r.split(",")),
      (this._r87a883e45ff1d7 = _i68c84906b18730(e, "preventheadturn", !0)));
    let t = _ifdbe20062cc5b0(e, "animated");
    this._isAnimated = t === "" ? !0 : t === "true";
  }
  get id() {
    return this._id;
  }
  get value() {
    return this._value;
  }
  get prevents() {
    return this._r4b7715b0a7ef61;
  }
  get _rb9e1e5245977a3() {
    return this._r87a883e45ff1d7;
  }
  get isAnimated() {
    return this._isAnimated;
  }
}
