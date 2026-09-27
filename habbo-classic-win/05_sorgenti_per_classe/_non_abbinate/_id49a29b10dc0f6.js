// Estratto da HabboAirLauncher.deobf.js, riga 139936.

class extends st {
  static {
    n(this, "_id49a29b10dc0f6");
  }
  _rb249336f9deeac = null;
  _rff8dd5946a93d8 = null;
  _ra23c907b3558a5 = null;
  _re4cbb9ed3187f2 = !0;
  _rf0221308c88a21 = n((e) => this._rccdd7e13327548(e), "_rf0221308c88a21");
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    (super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      this._r6466ebfc3ec8ab(),
      this._r97308c0d4af2b8());
  }
  dispose() {
    (this._rff8dd5946a93d8 != null &&
      (this._rff8dd5946a93d8.removeEventListener(y.const_1331, this._rf0221308c88a21),
      this._rff8dd5946a93d8.removeEventListener(y.const_1057, this._rf0221308c88a21),
      (this._rff8dd5946a93d8 = null)),
      this._rb249336f9deeac != null && (this._rb249336f9deeac = null),
      super.dispose());
  }
  get _itemList() {
    return this._r9f1638cc4d9109();
  }
  WindowMouseEvent(e, r = !1) {
    return this._itemList.WindowMouseEvent(e, r);
  }
  get _rce8584c5e61b53() {
    return this._itemList;
  }
  get _r3a16d13c26d3e1() {
    return this._rdb5ffc167fd216();
  }
  _rccdd7e13327548(e) {
    e.type === y.const_1331
      ? this._r3b278aa396d101()
      : e.type === y.const_1057 && this._re4cbb9ed3187f2 && this._rff24579831f760();
  }
  _rff24579831f760() {
    this._r3a16d13c26d3e1.visible &&
      ((this._r3a16d13c26d3e1.visible = !1), (this._itemList.width = this.var_31));
  }
  _r3b278aa396d101() {
    this._r3a16d13c26d3e1.visible ||
      ((this._r3a16d13c26d3e1.visible = !0),
      (this._itemList.width = this.var_31 - this._r3a16d13c26d3e1.width));
  }
  _rf9c693134b64d1(e = !1) {
    this._re4cbb9ed3187f2
      ? this._r3a16d13c26d3e1.testStateFlag(class_1948.const_117) &&
        this._r3a16d13c26d3e1.visible &&
        this._rff24579831f760()
      : (e || this._r3a16d13c26d3e1.visible) && this._r3b278aa396d101();
  }
  get _rb4a5f64054fcb5() {
    return this._r3a16d13c26d3e1.visible;
  }
  _r9dc63fbbd9f7c5() {
    return this._r9f1638cc4d9109() !== null && this._rdb5ffc167fd216() !== null;
  }
  set autoHideScrollBar(e) {
    ((this._re4cbb9ed3187f2 = e), this._rf9c693134b64d1(!0));
  }
  get autoHideScrollBar() {
    return this._re4cbb9ed3187f2;
  }
  get iterator() {
    return this._r9dc63fbbd9f7c5() ? this._itemList.iterator : null;
  }
  get scrollH() {
    return this._itemList.scrollH;
  }
  get var_46() {
    return this._itemList.var_46;
  }
  set scrollH(e) {
    this._itemList.scrollH = e;
  }
  set var_46(e) {
    this._itemList.var_46 = e;
  }
  get _radb221318b5180() {
    return this._itemList._radb221318b5180;
  }
  get _r5733287651adec() {
    return this._itemList._r5733287651adec;
  }
  get _rbab5041f1931e4() {
    return this._itemList._rbab5041f1931e4;
  }
  get visibleRegion() {
    return this._itemList.visibleRegion;
  }
  get spacing() {
    return this._itemList.spacing;
  }
  set spacing(e) {
    this._itemList.spacing = e;
  }
  get _rf2038036998a87() {
    return this._itemList._rf2038036998a87;
  }
  set _rf2038036998a87(e) {
    this._itemList._rf2038036998a87 = e;
  }
  get autoArrangeItems() {
    return this._itemList.autoArrangeItems;
  }
  set autoArrangeItems(e) {
    this._itemList.autoArrangeItems = e;
  }
  set _r41807bb026890e(e) {
    this._itemList._r41807bb026890e = e;
  }
  get _r41807bb026890e() {
    return this._itemList._r41807bb026890e;
  }
  get numListItems() {
    return this._itemList.numListItems;
  }
  get _r0b3b86bc379959() {
    return this._itemList._r0b3b86bc379959;
  }
  get _r99252c730252ac() {
    return this._itemList._r99252c730252ac;
  }
  addListItem(e) {
    return this._itemList.addListItem(e);
  }
  addListItemAt(e, r) {
    return this._itemList.addListItemAt(e, r);
  }
  getListItemAt(e) {
    return this._itemList.getListItemAt(e);
  }
  getListItemByID(e) {
    return this._itemList.getListItemByID(e);
  }
  getListItemByName(e) {
    return this._itemList.getListItemByName(e);
  }
  getListItemByTag(e) {
    return this._itemList.getListItemByTag(e);
  }
  getListItemIndex(e) {
    return this._itemList.getListItemIndex(e);
  }
  removeListItem(e) {
    return this._itemList.removeListItem(e);
  }
  removeListItemAt(e) {
    return this._itemList.removeListItemAt(e);
  }
  _r1e5d0283c92035(e, r) {
    this._itemList._r1e5d0283c92035(e, r);
  }
  _rae95049fb8789d(e, r) {
    this._itemList._rae95049fb8789d(e, r);
  }
  _r7d97ebf79244bd(e, r) {
    this._itemList._r7d97ebf79244bd(e, r);
  }
  groupListItemsWithID(e, r, t = 0) {
    return this._itemList.groupListItemsWithID(e, r, t);
  }
  groupListItemsWithTag(e, r, t = 0) {
    return this._itemList.groupListItemsWithTag(e, r, t);
  }
  removeListItems() {
    this._itemList.removeListItems();
  }
  destroyListItems() {
    this._itemList.destroyListItems();
  }
  arrangeListItems() {
    this._itemList.arrangeListItems();
  }
  _r0feeaa020a3def() {
    this._itemList._r0feeaa020a3def();
  }
  get _re9172ef75e4fbc() {
    return this._itemList._re9172ef75e4fbc;
  }
  set _re9172ef75e4fbc(e) {
    this._itemList._re9172ef75e4fbc = e;
  }
  get _r3701aeed56f609() {
    return this._itemList._r3701aeed56f609;
  }
  set _r3701aeed56f609(e) {
    this._itemList._r3701aeed56f609 = e;
  }
  get properties() {
    let e = Array.isArray(super.properties) ? super.properties : [];
    return (
      e.push(this.createProperty(class_3436._rdaf6bdcdccb2b4, this.spacing)),
      e.push(this.createProperty(class_3436.AUTO_ARRANGE_ITEMS, this.autoArrangeItems)),
      e.push(this.createProperty(class_3436.SCALE_TO_FIT_ITEMS, this._rf2038036998a87)),
      e.push(this.createProperty(class_3436.RESIZE_ON_ITEM_UPDATE, this._r41807bb026890e)),
      e.push(this.createProperty(class_3436.INVERSE_RESIZE_ON_ITEM_UPDATE, this._rbd4b11e89076c3)),
      e.push(this.createProperty(class_3436.ALLOW_SHIFT_SCROLL_HORIZONTAL, this._r469b63044b56aa)),
      e
    );
  }
  set properties(e) {
    if (!Array.isArray(e)) {
      super.properties = e;
      return;
    }
    if (!this._r9dc63fbbd9f7c5()) {
      ((this._ra23c907b3558a5 = e.slice()), (super.properties = e));
      return;
    }
    for (let r of e)
      switch (r.key) {
        case class_3436._rdaf6bdcdccb2b4:
          this.spacing = r.value;
          break;
        case class_3436.SCALE_TO_FIT_ITEMS:
          this._rf2038036998a87 = r.value;
          break;
        case class_3436.RESIZE_ON_ITEM_UPDATE:
          this._r41807bb026890e = r.value;
          break;
        case class_3436.INVERSE_RESIZE_ON_ITEM_UPDATE:
          this._rbd4b11e89076c3 = r.value;
          break;
        case class_3436.ALLOW_SHIFT_SCROLL_HORIZONTAL:
          this._r469b63044b56aa = r.value;
          break;
        case class_3436.AUTO_ARRANGE_ITEMS:
          this.autoArrangeItems = r.value;
          break;
      }
    super.properties = e;
  }
  _r6466ebfc3ec8ab() {
    if (this._ra23c907b3558a5 === null || !this._r9dc63fbbd9f7c5()) return;
    let e = this._ra23c907b3558a5;
    ((this._ra23c907b3558a5 = null), Array.isArray(e) && (this.properties = e));
  }
  _r9f1638cc4d9109() {
    if (this._rb249336f9deeac == null) {
      let e = this.findChildByTag("_ITEMLIST");
      _i174073f892c83e__(e) && ((this._rb249336f9deeac = e), this._r6466ebfc3ec8ab(), this._r97308c0d4af2b8());
    }
    return this._rb249336f9deeac ?? null;
  }
  _rdb5ffc167fd216() {
    if (this._rff8dd5946a93d8 == null) {
      let e = this.findChildByTag("_SCROLLBAR");
      _if2af86ebb71888_(e) &&
        ((this._rff8dd5946a93d8 = e),
        this._rff8dd5946a93d8.addEventListener(y.const_1331, this._rf0221308c88a21),
        this._rff8dd5946a93d8.addEventListener(y.const_1057, this._rf0221308c88a21),
        this._r6466ebfc3ec8ab(),
        this._r97308c0d4af2b8());
    }
    return this._rff8dd5946a93d8 ?? null;
  }
  _r97308c0d4af2b8() {
    let e = this._r9f1638cc4d9109(),
      r = this._rdb5ffc167fd216();
    e == null ||
      r == null ||
      ((r.scrollable = e),
      r.testStateFlag(class_1948.const_117) && this._re4cbb9ed3187f2 && this._rff24579831f760());
  }
  get _rbd4b11e89076c3() {
    return this._itemList._rbd4b11e89076c3;
  }
  set _rbd4b11e89076c3(e) {
    this._itemList._rbd4b11e89076c3 = e;
  }
  get _r469b63044b56aa() {
    return this._itemList._r469b63044b56aa;
  }
  set _r469b63044b56aa(e) {
    this._itemList._r469b63044b56aa = e;
  }
  get _ree877f6d83de03() {
    return this._itemList._ree877f6d83de03;
  }
  set _ree877f6d83de03(e) {
    this._itemList._ree877f6d83de03 = e;
  }
}
