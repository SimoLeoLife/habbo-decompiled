// Estratto da HabboAirLauncher.deobf.js, riga 138320.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/IconController.as
// Nome offuscato: _i24b6606232a289

class extends st {
  static {
    n(this, "IconController");
  }
  get style() {
    return super.style;
  }
  set style(e) {
    super.style = e;
  }
  fitToSize() {
    let e = this.context;
    if (e === null) return;
    let r = e._rf5e87151b3d9ca()._rb3d0455442101d(class_2090.const_1172, this.style);
    if (!(r instanceof bj)) return;
    let t = r.getLayoutByState(this.state);
    if (t === null) return;
    let i = t.width,
      s = t.height;
    (i !== this.var_31 || s !== this.var_35) && this.setRectangle(this._x, this._y, i, s);
  }
}
