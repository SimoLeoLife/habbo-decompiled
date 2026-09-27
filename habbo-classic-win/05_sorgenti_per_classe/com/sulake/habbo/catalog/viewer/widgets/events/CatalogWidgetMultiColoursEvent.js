// Extracted from HabboAirLauncher.deobf.js, line 144543.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/events/CatalogWidgetMultiColoursEvent.as
// Obfuscated name: _idf4b0f0f6d4c5d

class extends UnkClass_c4d6c8 {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(CatalogWidgetEventEnum.MULTI_COLOUR_ARRAY, o, d);
    this._r9ffdd05ee5d61d = r;
    this._raa88906f3b5784 = t;
    this._r01460a00ce5862 = i;
    this._r6c9f98ca9c4630 = s;
  }
  static {
    n(this, "CatalogWidgetMultiColoursEvent");
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
}
