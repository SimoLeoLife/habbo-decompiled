// Extracted from HabboAirLauncher.deobf.js, line 134872.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i28b908ccf099f0

class {
  static {
    n(this, "UnkClass_28b908");
  }
  _r73791c834a9a3e = 0;
  _rf8f9fc25599fa4;
  _disposed = !1;
  var_1871;
  _rf748225ca0337d;
  _ra494b9997b9264;
  _rd24dd551498e28;
  _rfa26b07e3da304;
  _ra26bbb5dd56573;
  _r2f257fbcb47623;
  constructor(e, r) {
    ((this._rf8f9fc25599fa4 = r),
      (this.var_1871 = e),
      (this._rf748225ca0337d = new UnkWindowMouseOperatorSubclass_a688ec(r)),
      (this._ra494b9997b9264 = new UnkWindowMouseOperatorSubclass_448eaf(r)),
      (this._rd24dd551498e28 = new UnkWindowMouseOperatorSubclass_cd794f(r)),
      (this._rfa26b07e3da304 = new UnkClass_e89147(r)),
      (this._ra26bbb5dd56573 = new WindowToolTipAgent(r)),
      (this._r2f257fbcb47623 = new GestureAgentService()));
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    (this._rf748225ca0337d !== null && (this._rf748225ca0337d.dispose(), (this._rf748225ca0337d = null)),
      this._ra494b9997b9264 !== null && (this._ra494b9997b9264.dispose(), (this._ra494b9997b9264 = null)),
      this._rd24dd551498e28 !== null && (this._rd24dd551498e28.dispose(), (this._rd24dd551498e28 = null)),
      this._rfa26b07e3da304 !== null && (this._rfa26b07e3da304.dispose(), (this._rfa26b07e3da304 = null)),
      this._ra26bbb5dd56573 !== null && (this._ra26bbb5dd56573.dispose(), (this._ra26bbb5dd56573 = null)),
      this._r2f257fbcb47623 !== null && (this._r2f257fbcb47623.dispose(), (this._r2f257fbcb47623 = null)),
      (this._r73791c834a9a3e = 0),
      (this._rf8f9fc25599fa4 = null),
      (this.var_1871 = null),
      (this._disposed = !0));
  }
  _rc38e81f9558bb5() {
    if (this._rf748225ca0337d === null) throw new Error("Window mouse dragging service has been disposed.");
    return this._rf748225ca0337d;
  }
  _r681e1223d3636f() {
    if (this._ra494b9997b9264 === null) throw new Error("Window mouse scaling service has been disposed.");
    return this._ra494b9997b9264;
  }
  _r66579cd8745173() {
    if (this._rd24dd551498e28 === null) throw new Error("Window mouse listener service has been disposed.");
    return this._rd24dd551498e28;
  }
  _r818e869163b268() {
    if (this._rfa26b07e3da304 === null) throw new Error("Window focus manager service has been disposed.");
    return this._rfa26b07e3da304;
  }
  _r0b43873688a61a() {
    if (this._ra26bbb5dd56573 === null) throw new Error("Window tooltip agent service has been disposed.");
    return this._ra26bbb5dd56573;
  }
  _r85ea79b0918796() {
    if (this._r2f257fbcb47623 === null) throw new Error("Window gesture agent service has been disposed.");
    return this._r2f257fbcb47623;
  }
}
