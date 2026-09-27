// Estratto da HabboAirLauncher.deobf.js, riga 130756.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ContainerController.as
// Nome offuscato: _ibc3c8d61f9894b

class extends st {
  static {
    n(this, "ContainerController");
  }
  get _r1f45fcd118521f() {
    return this;
  }
  get _rb047b5cc4fd5a0() {
    return this;
  }
  get iterator() {
    return new ContainerIterator(this);
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    (super.constructWindow(e, r, t, i, s, o, d, c ?? void 0, f ?? void 0, l ?? void 0, b, _),
      (this._r1f45fcd118521f._r5e1a9574d869f6 =
        this._r1f45fcd118521f._background ||
        this._rb047b5cc4fd5a0.testParamFlag(N._re3bd61027cfd94) ||
        !this._rb047b5cc4fd5a0.testParamFlag(N.const_421)));
  }
  getGraphicContext(e) {
    return (
      e &&
        !this._r1f45fcd118521f._graphics &&
        ((this._r1f45fcd118521f._graphics = new Un(
          `GC {${this._r1f45fcd118521f._name}}`,
          this._rb047b5cc4fd5a0.testParamFlag(N.const_421) ? Un.GC_TYPE_CONTAINER : Un.GC_TYPE_BITMAP,
          this._r1f45fcd118521f.rectangle,
        )),
        (this._r1f45fcd118521f._graphics.visible = this._r1f45fcd118521f.var_679)),
      this._r1f45fcd118521f._graphics
    );
  }
}
