// Extracted from HabboAirLauncher.deobf.js, line 153156.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/tableview/TableRowModel.as
// Obfuscated name: _ib6362842261925

class {
  static {
    n(this, "TableRowModel");
  }
  _disposed = !1;
  var_627;
  var_2162;
  _selected = !1;
  var_1463 = !1;
  _hasFocus = !1;
  _view = null;
  constructor(e, r) {
    ((this.var_627 = e), (this.var_2162 = r));
  }
  set index(e) {
    ((this.var_2162 = e), this._view?._r312990dfb41127());
  }
  update(e) {
    if (this.var_627 == null) {
      this.var_627 = e;
      return;
    }
    if (!e.isUpdated(this.var_627)) {
      this.var_627 = e;
      return;
    }
    let r = this.var_627;
    ((this.var_627 = e), this._view?.objectUpdated(r, e));
  }
  set hasFocus(e) {
    this._hasFocus = e;
  }
  set selected(e) {
    ((this._selected = e), this._view?._rd8eab866f2cc67());
  }
  set hovered(e) {
    ((this.var_1463 = e), this._view?._r6dc4161b38d114());
  }
  set view(e) {
    this._view = e;
  }
  get object() {
    return this.var_627;
  }
  get i() {
    return this.var_2162;
  }
  get selected() {
    return this._selected;
  }
  get hovered() {
    return this.var_1463;
  }
  get hasFocus() {
    return this._hasFocus;
  }
  get view() {
    return this._view;
  }
  dispose() {
    this._disposed ||
      ((this.var_627 = null),
      (this.var_2162 = 0),
      (this._selected = !1),
      (this.var_1463 = !1),
      (this._hasFocus = !1),
      this._view != null && (this._view.dispose(), (this._view = null)),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
}
