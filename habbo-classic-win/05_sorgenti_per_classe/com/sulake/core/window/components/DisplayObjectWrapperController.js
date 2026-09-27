// Estratto da HabboAirLauncher.deobf.js, riga 132404.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/DisplayObjectWrapperController.as
// Nome offuscato: _icea3f8bfc40648

class extends st {
  static {
    n(this, "DisplayObjectWrapperController");
  }
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    ((i &= ~N.const_421),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._r5e1a9574d869f6 = !1));
  }
  getGraphicContext(e) {
    return (
      e &&
        !this._graphics &&
        (this._graphics = new Un(`GC {${this._name}}`, Un.GC_TYPE_CONTAINER, this.rectangle)),
      this._graphics
    );
  }
  getDisplayObject() {
    return this.getGraphicContext(!0).getDisplayObject();
  }
  setDisplayObject(e) {
    this.getGraphicContext(!0).setDisplayObject(e);
  }
}
