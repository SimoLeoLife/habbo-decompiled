// Estratto da HabboAirLauncher.deobf.js, riga 252538.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/domain/Tab.as

class {
  constructor(e, r, t, i, s = 1) {
    this._navigator = e;
    this._id = r;
    this.var_2853 = t;
    this.var_4876 = i;
    this._searchMsg = s;
  }
  static {
    n(this, "Tab");
  }
  _button = null;
  _selected = !1;
  sendSearchRequest() {
    (this._navigator.getProperty("navigator.2014.personalized.navigator") === "true" &&
      this.id === We._r3788a24f86509c &&
      (this.var_2853 = We.SEARCHTYPE_RECOMMENDED_ROOMS),
      this._navigator._r970f774dfe2577?.startSearch(
        this._id,
        this.var_2853,
        "-1",
        this._searchMsg,
      ));
  }
  set selected(e) {
    this._selected = e;
  }
  get id() {
    return this._id;
  }
  get _r067ae42ddd4d97() {
    return this.var_2853;
  }
  get selected() {
    return this._selected;
  }
  get tabSelected() {
    return this.var_4876;
  }
  get _reaa818fbc28bbb() {
    return this._searchMsg;
  }
  get button() {
    return this._button;
  }
  set button(e) {
    this._button = e;
  }
}
