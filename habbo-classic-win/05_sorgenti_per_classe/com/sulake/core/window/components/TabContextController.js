// Estratto da HabboAirLauncher.deobf.js, riga 141092.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/TabContextController.as
// Nome offuscato: _ib2aed3039440f7

class a extends st {
  static {
    n(this, "TabContextController");
  }
  static TAG_TAB_CONTEXT_SELECTOR = "_SELECTOR";
  static TAG_TAB_CONTEXT_CONTENT = "_CONTENT";
  var_2242 = null;
  var_4127 = null;
  _initialized = !1;
  _r6d56e5f271e985 = n((e, r) => this._r5c7b62d55025ee(e, r), "_r6d56e5f271e985");
  get selector() {
    return (
      this.var_2242 === null &&
        ((this.var_2242 = this.findChildByTag(a.TAG_TAB_CONTEXT_SELECTOR)),
        this.var_2242 !== null && (this.var_2242.procedure = this._r6d56e5f271e985)),
      this.var_2242
    );
  }
  get container() {
    return (
      this.var_4127 === null && (this.var_4127 = this.findChildByTag(a.TAG_TAB_CONTEXT_CONTENT)),
      this.var_4127
    );
  }
  get iterator() {
    let e = this.selector;
    return this._initialized && e !== null ? e.iterator : new ContainerIterator(this);
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _);
    let h = [];
    this.groupChildrenWithTag(st.TAG_INTERNAL, h, -1);
    for (let p of h) ((p.style = this._style), (p.procedure = this._r6d56e5f271e985));
    this._initialized = !0;
  }
  get numTabItems() {
    return this.var_2242?.numSelectables ?? 0;
  }
  _rc6654b9a9673e2(e) {
    return this.selector?.var_871(e) ?? e;
  }
  _r3cc3a75f8b7a86(e, r) {
    return this.selector?._r2ea30bd80a38af(e, r) ?? e;
  }
  _ra8b044f5467c44(e) {
    this.selector?._r17ea3f0ab73786(e);
  }
  getTabItemAt(e) {
    return this.selector?.getSelectableAt(e);
  }
  _r7efb7a6593b71d(e) {
    return this.selector?._rf1edf3aad44c96(e);
  }
  _r9e56420b3addbb(e) {
    return this.selector?._rb30d0cbaa3f845(e);
  }
  _r64db55108dbc3b(e) {
    return this.selector?.getSelectableIndex(e) ?? -1;
  }
  _r5c7b62d55025ee(e, r) {
    e.type === y.const_238 && this._r06c5b7ad0c6f86(e);
  }
}
