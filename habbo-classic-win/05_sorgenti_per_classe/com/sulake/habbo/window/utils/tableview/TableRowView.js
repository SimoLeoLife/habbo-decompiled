// Estratto da HabboAirLauncher.deobf.js, riga 153229.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/tableview/TableRowView.as
// Nome offuscato: _i218d0577d62298

class a {
  constructor(e, r) {
    this.var_778 = e;
    this.var_38 = r;
    ((this._container = this.var_778._r22a6bd3fbd66af.clone()), this._re3963b40ab7a5a());
    for (let t of this.var_778.columns) {
      let i = this.object.getTableCell(t.id),
        s = new z3e(this.var_778, this, t.id, i);
      (this.var_1252.push(s), this._container.addListItem(s.container));
    }
    (this.updateColor(),
      this._container.addEventListener(u.DOWN, this._r3dfe81080c524f),
      this._container.addEventListener(u.OVER, this._rd7f5c0e042e8f1),
      this._container.addEventListener(u.OUT, this._rad04679fe00657),
      this._container.addEventListener(u.CLICK_AWAY, this.onClickAway));
  }
  static {
    n(this, "TableRowView");
  }
  static var_5927 = 12116732;
  static var_5892 = 13750737;
  static var_5904 = 15395562;
  static var_5866 = 16382457;
  _disposed = !1;
  _container;
  var_1252 = [];
  _r312990dfb41127() {
    this.updateColor();
  }
  objectUpdated(e, r) {
    let t = 0;
    for (let i of this.var_778.columns) {
      if (r.isPropertyUpdated(i.id, e)) {
        let s = r.getTableCell(i.id);
        this.var_1252[t]?.update(s);
      }
      t += 1;
    }
  }
  reuse(e) {
    this.var_38 = e;
    let r = 0;
    for (let t of this.var_778.columns) {
      let i = this.object.getTableCell(t.id);
      (this.var_1252[r]?.reuse(i), (r += 1));
    }
    this.updateColor();
  }
  _re3963b40ab7a5a() {
    if (!(this.var_778 == null || this.container.width === this.var_778._rd42e33c6a22970)) {
      this.container.width = this.var_778._rd42e33c6a22970;
      for (let e of this.var_1252) e._re3963b40ab7a5a();
    }
  }
  _rd8eab866f2cc67() {
    this.updateColor();
  }
  _r6dc4161b38d114() {}
  get object() {
    return this.var_38?.object ?? null;
  }
  get container() {
    return this._container;
  }
  recycle() {
    for (let e of this.var_1252) e.recycle();
    this.var_38 = null;
  }
  dispose() {
    if (!this._disposed) {
      for (let e of this.var_1252) e.dispose();
      ((this.var_1252 = []),
        this._container.dispose(),
        (this.var_778 = null),
        (this.var_38 = null),
        (this._disposed = !0));
    }
  }
  get disposed() {
    return this._disposed;
  }
  _r3dfe81080c524f = n((e) => {
    this.var_38 == null ||
      this.var_778 == null ||
      ((this.var_38.hasFocus = !0),
      this.var_778._rb01cbbcd6ad779(this.object, !0),
      this.updateColor());
  }, "_r3dfe81080c524f");
  _rd7f5c0e042e8f1 = n((e) => {
    this.var_38 == null ||
      this.var_778 == null ||
      this.var_38.hovered ||
      this.var_778._r98937d52f2f3be(this.object);
  }, "_rd7f5c0e042e8f1");
  _rad04679fe00657 = n((e) => {
    this.var_38 == null ||
      this.var_778 == null ||
      (this.var_38.hovered && this.var_778._r98937d52f2f3be(null));
  }, "_rad04679fe00657");
  onClickAway = n((e) => {
    this.var_38 != null &&
      ((this.var_38.hasFocus = a.windowIsChild(this._container, e.related)),
      this.updateColor());
  }, "onClickAway");
  updateColor() {
    if (this.var_38 == null) return;
    let e;
    (this.var_38.selected
      ? (e = this.var_38.hasFocus ? a.var_5927 : a.var_5892)
      : (e = this.var_38.i % 2 === 0 ? a.var_5904 : a.var_5866),
      (this._container.color = 4278190080 ^ e));
  }
  static windowIsChild(e, r) {
    if (e == null || r == null) return !1;
    if (e === r) return !0;
    if (e.children != null) {
      for (let t of e.children) if (a.windowIsChild(t, r)) return !0;
    } else if (e.numChildren != null) {
      let t = e;
      for (let i = 0; i < t.numChildren; i += 1) if (a.windowIsChild(t.getChildAt(i), r)) return !0;
    } else if (e.numListItems != null) {
      let t = e;
      for (let i = 0; i < t.numListItems; i += 1) if (a.windowIsChild(t.getListItemAt(i), r)) return !0;
    } else if (e.numSelectables != null) {
      let t = e;
      for (let i = 0; i < t.numSelectables; i += 1) if (a.windowIsChild(t.getSelectableAt(i), r)) return !0;
    }
    return !1;
  }
}
