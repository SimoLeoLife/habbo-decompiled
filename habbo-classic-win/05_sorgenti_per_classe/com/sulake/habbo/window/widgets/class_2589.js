// Estratto da HabboAirLauncher.deobf.js, riga 145075.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/class_2589.as
// Nome offuscato: _id78f97046f2dc8

class a {
  static {
    n(this, "class_2589");
  }
  static name_2 = 0;
  static const_135 = 1;
  _type;
  _text;
  var_1429;
  constructor(e, r = "", t = 0) {
    ((this._type = e | 0), (this._text = r), (this.var_1429 = t | 0));
  }
  static text(e) {
    return new a(a.name_2, e);
  }
  static habbicon(e) {
    return new a(a.const_135, "", e);
  }
  get type() {
    return this._type;
  }
  get _r590202b22defda() {
    return this._text;
  }
  get habbiconId() {
    return this.var_1429;
  }
}
