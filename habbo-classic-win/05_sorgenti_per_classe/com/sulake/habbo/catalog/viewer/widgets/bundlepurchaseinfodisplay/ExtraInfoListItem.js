// Extracted from HabboAirLauncher.deobf.js, line 188547.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/bundlepurchaseinfodisplay/ExtraInfoListItem.as
// Obfuscated name: _if637dccafabd48

class a {
  constructor(e, r, t, i = a.ALIGN_TOP, s = !1) {
    this.var_17 = e;
    this._id = r;
    this._data = t;
    this._alignment = i;
    this._r388f38107240c2 = s;
  }
  static {
    n(this, "ExtraInfoListItem");
  }
  static ALIGN_TOP = 0;
  static ALIGN_BOTTOM = 1;
  static ALIGN_OVERLAY = 2;
  _disposed = !1;
  _r458bcf56f387d9 = 0;
  _r1fc017faae4008 = 0;
  _r9e15e9c82a36b3 = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    ((this.var_17 = null), (this._disposed = !0));
  }
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get data() {
    return this._data;
  }
  set data(e) {
    this._data = e;
  }
  get alignment() {
    return this._alignment;
  }
  get _r75fd1af189c9ad() {
    return this._r388f38107240c2;
  }
  get creationSeconds() {
    return this._r458bcf56f387d9;
  }
  set creationSeconds(e) {
    this._r458bcf56f387d9 = e;
  }
  get isItemRemoved() {
    return this._r9e15e9c82a36b3;
  }
  get removalSeconds() {
    return this._r1fc017faae4008;
  }
  set removalSeconds(e) {
    ((this._r1fc017faae4008 = e), (this._r9e15e9c82a36b3 = !0));
  }
  _rda4cde3b8bef4b() {
    return null;
  }
}
