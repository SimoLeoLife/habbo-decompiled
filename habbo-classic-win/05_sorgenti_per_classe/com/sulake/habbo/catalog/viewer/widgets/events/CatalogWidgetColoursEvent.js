// Estratto da HabboAirLauncher.deobf.js, riga 144458.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/CatalogWidgetColoursEvent.as
// Nome offuscato: _ib349a35b511031

class extends _ic4d6c8d627ab4e {
  constructor(r, t, i, s, o = 0, d = !1, c = !1) {
    super(CatalogWidgetEventEnum.COLOUR_ARRAY, d, c);
    this._r9ffdd05ee5d61d = r;
    this._raa88906f3b5784 = t;
    this._r01460a00ce5862 = i;
    this._r6c9f98ca9c4630 = s;
    this._index = o;
  }
  static {
    n(this, "CatalogWidgetColoursEvent");
  }
  get colours() {
    return this._r9ffdd05ee5d61d;
  }
  get _r8ec1fc8e06e819() {
    return this._raa88906f3b5784;
  }
  get _rbc8cf5a5933fa0() {
    return this._r01460a00ce5862;
  }
  get _r003b386f6d19bf() {
    return this._r6c9f98ca9c4630;
  }
  get index() {
    return this._index;
  }
}
