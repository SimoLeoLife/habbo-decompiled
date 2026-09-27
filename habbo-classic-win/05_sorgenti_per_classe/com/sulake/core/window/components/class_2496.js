// Estratto da HabboAirLauncher.deobf.js, riga 132851.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/class_2496.as
// Nome offuscato: _i42926f96aa6604

class extends C8 {
  static {
    n(this, "class_2496");
  }
  get iterator() {
    return new _i13f61e920bd6b9(this);
  }
  addMenuItem(e) {
    return this.addMenuItemAt(e, (this._itemArray ?? (this._itemArray = [])).length);
  }
  addMenuItemAt(e, r) {
    let t = this._itemArray ?? (this._itemArray = []);
    return e !== null && t.indexOf(e) === -1
      ? !this._r232a3dfc0ca785() && _id11cefb8a367ec_(e) && e.name === C8.TEXT_FIELD_NAME
        ? this.addChild(e)
        : !this.getItemList() && _i174073f892c83e_(e) && e.name === C8.ITEM_LIST_NAME
          ? this.addChild(e)
          : !this._r5c12a6c92585f9() && _i4ae3c1ac72c38e_(e) && e.name === C8.REGION_NAME
            ? this.addChild(e)
            : (this._rc0068b659198e8
                ? (this.var_210(), t.push(e), this._rf7a42c4f105e48())
                : t.push(e),
              e)
      : null;
  }
  _r446126f4f4fa27(e) {
    let r = this._itemArray ?? (this._itemArray = []);
    return e > -1 && e < r.length ? r[e] : null;
  }
  _rf4dc4863bda160(e) {
    let r = this._itemArray ?? (this._itemArray = []),
      t = r.indexOf(e);
    return t > -1
      ? (t === this._r83eb58f85dc46c && (this._r83eb58f85dc46c = -1),
        r.splice(t, 1),
        this._rc0068b659198e8 && (this.var_210(), this._rf7a42c4f105e48()),
        e)
      : null;
  }
  removeMenuItemAt(e) {
    let r = this._menuIsOpen()[e] ?? null;
    return r ? this._rf4dc4863bda160(r) : null;
  }
  _ra52355a4e39349(e) {
    return (this._itemArray ?? (this._itemArray = [])).indexOf(e);
  }
}
