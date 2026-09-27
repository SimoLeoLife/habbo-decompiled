// Extracted from HabboAirLauncher.deobf.js, line 139697.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4cc4daa58f4ea3

class extends st {
  static {
    n(this, "UnkClass_4cc4da");
  }
  _ra72ed7f30a7d81 = null;
  _rff8dd5946a93d8 = null;
  _re4cbb9ed3187f2 = !0;
  _rf0221308c88a21 = n((e) => this._rccdd7e13327548(e), "_rf0221308c88a21");
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    (super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._r3a16d13c26d3e1.scrollable = this._r3e30777a814fac),
      this._r3a16d13c26d3e1.testStateFlag(class_1948.const_117) &&
        this._re4cbb9ed3187f2 &&
        this._rff24579831f760());
  }
  get properties() {
    let e = super.properties;
    return (
      e.push(this.createProperty(class_3436._rdaf6bdcdccb2b4, this.spacing)),
      e.push(this.createProperty(class_3436.AUTO_ARRANGE_ITEMS, this.autoArrangeItems)),
      e.push(this.createProperty(class_3436.SCALE_TO_FIT_ITEMS, this._rf2038036998a87)),
      e.push(this.createProperty(class_3436.RESIZE_ON_ITEM_UPDATE, this._r41807bb026890e)),
      e.push(this.createProperty(class_3436.ALLOW_SHIFT_SCROLL_HORIZONTAL, this._r469b63044b56aa)),
      e
    );
  }
  set properties(e) {
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
        case class_3436.ALLOW_SHIFT_SCROLL_HORIZONTAL:
          this._r469b63044b56aa = r.value;
          break;
        case class_3436.AUTO_ARRANGE_ITEMS:
          this.autoArrangeItems = r.value;
          break;
      }
    super.properties = e;
  }
  get autoHideScrollBar() {
    return this._re4cbb9ed3187f2;
  }
  set autoHideScrollBar(e) {
    ((this._re4cbb9ed3187f2 = e), this._rf9c693134b64d1());
  }
  get iterator() {
    return this._r9dc63fbbd9f7c5() ? this._r3e30777a814fac.iterator : null;
  }
  get scrollH() {
    return this._r3e30777a814fac.scrollH;
  }
  set scrollH(e) {
    this._r3e30777a814fac.scrollH = e;
  }
  get var_46() {
    return this._r3e30777a814fac.var_46;
  }
  set var_46(e) {
    this._r3e30777a814fac.var_46 = e;
  }
  get _radb221318b5180() {
    return this._r3e30777a814fac._radb221318b5180;
  }
  get _r5733287651adec() {
    return this._r3e30777a814fac._r5733287651adec;
  }
  get _rbab5041f1931e4() {
    return this._r3e30777a814fac._rbab5041f1931e4;
  }
  get visibleRegion() {
    return this._r3e30777a814fac.visibleRegion;
  }
  get autoArrangeItems() {
    return this._r3e30777a814fac.autoArrangeItems;
  }
  set autoArrangeItems(e) {
    this._r3e30777a814fac.autoArrangeItems = e;
  }
  get _r37e9b53def5dfd() {
    return this._r3e30777a814fac._r37e9b53def5dfd;
  }
  get _rc89526ab6e9545() {
    return this._r3e30777a814fac._rc89526ab6e9545;
  }
  get _r72acf104e2c444() {
    return this._r3e30777a814fac._r72acf104e2c444;
  }
  get _r884a36eb6fb71b() {
    return this._r3e30777a814fac._r884a36eb6fb71b;
  }
  set _r884a36eb6fb71b(e) {
    this._r3e30777a814fac._r884a36eb6fb71b = e;
  }
  get spacing() {
    return this._r3e30777a814fac.spacing;
  }
  set spacing(e) {
    this._r3e30777a814fac.spacing = e;
  }
  set _rb4de873fcd7d8f(e) {
    this._r3e30777a814fac._rb4de873fcd7d8f = e;
  }
  get _rf2038036998a87() {
    return this._r3e30777a814fac._rf2038036998a87;
  }
  set _rf2038036998a87(e) {
    this._r3e30777a814fac._rf2038036998a87 = e;
  }
  get _r41807bb026890e() {
    return this._r3e30777a814fac._r41807bb026890e;
  }
  set _r41807bb026890e(e) {
    this._r3e30777a814fac._r41807bb026890e = e;
  }
  get _r469b63044b56aa() {
    return this._r3e30777a814fac._r469b63044b56aa;
  }
  set _r469b63044b56aa(e) {
    this._r3e30777a814fac._r469b63044b56aa = e;
  }
  set _r61b06063347df2(e) {}
  get _r61b06063347df2() {
    return !1;
  }
  get _r3e30777a814fac() {
    if (this._ra72ed7f30a7d81 === null) {
      let e = this.findChildByTag("_ITEMGRID");
      _ic4f480c0c57ece(e) && (this._ra72ed7f30a7d81 = e);
    }
    return this._ra72ed7f30a7d81;
  }
  get _r3a16d13c26d3e1() {
    if (this._rff8dd5946a93d8 === null) {
      let e = this.findChildByTag("_SCROLLBAR");
      _if2af86ebb71888(e) &&
        ((this._rff8dd5946a93d8 = e),
        this._rff8dd5946a93d8.addEventListener(y.const_1331, this._rf0221308c88a21),
        this._rff8dd5946a93d8.addEventListener(y.const_1057, this._rf0221308c88a21));
    }
    return this._rff8dd5946a93d8;
  }
  dispose() {
    (this._rff8dd5946a93d8 !== null &&
      (this._rff8dd5946a93d8.removeEventListener(y.const_1331, this._rf0221308c88a21),
      this._rff8dd5946a93d8.removeEventListener(y.const_1057, this._rf0221308c88a21),
      (this._rff8dd5946a93d8 = null)),
      this._ra72ed7f30a7d81 !== null && (this._ra72ed7f30a7d81 = null),
      super.dispose());
  }
  addGridItem(e) {
    return this._r3e30777a814fac.addGridItem(e);
  }
  _r69465cf54b2583(e, r) {
    return this._r3e30777a814fac._r69465cf54b2583(e, r);
  }
  getGridItemAt(e) {
    return this._r3e30777a814fac.getGridItemAt(e);
  }
  _rc61347781fdc8b(e) {
    return this._r3e30777a814fac._rc61347781fdc8b(e);
  }
  getGridItemByName(e) {
    return this._r3e30777a814fac.getGridItemByName(e);
  }
  _ree8fdc27c97086(e) {
    return this._r3e30777a814fac._ree8fdc27c97086(e);
  }
  _r76bcf89cad2fb2(e) {
    return this._r3e30777a814fac._r76bcf89cad2fb2(e);
  }
  removeGridItem(e) {
    return this._r3e30777a814fac.removeGridItem(e);
  }
  _r7f196c1ba1085e(e) {
    return this._r3e30777a814fac._r7f196c1ba1085e(e);
  }
  setGridItemIndex(e, r) {
    this._r3e30777a814fac.setGridItemIndex(e, r);
  }
  swapGridItems(e, r) {
    this._r3e30777a814fac.swapGridItems(e, r);
  }
  _re865559d3aa1c8(e, r) {
    this._r3e30777a814fac._re865559d3aa1c8(e, r);
  }
  removeGridItems() {
    this._r3e30777a814fac.removeGridItems();
  }
  _rbb4c26d068856f() {
    this._r3e30777a814fac._rbb4c26d068856f();
  }
  _r876553622f56ef() {
    this._r3e30777a814fac._r876553622f56ef();
  }
  _r9dc63fbbd9f7c5() {
    return (
      !!(this._ra72ed7f30a7d81 || this.findChildByTag("_ITEMGRID")) &&
      !!(this._rff8dd5946a93d8 || this.findChildByTag("_SCROLLBAR"))
    );
  }
  _rccdd7e13327548(e) {
    e.type === y.const_1331
      ? this._r3b278aa396d101()
      : e.type === y.const_1057 && this._rff24579831f760();
  }
  _rff24579831f760() {
    this._r3a16d13c26d3e1.visible && (this._r3a16d13c26d3e1.visible = !1);
  }
  _r3b278aa396d101() {
    this._r3a16d13c26d3e1.visible || (this._r3a16d13c26d3e1.visible = !0);
  }
  _rf9c693134b64d1() {
    this._re4cbb9ed3187f2
      ? this._r3a16d13c26d3e1.testStateFlag(class_1948.const_117) &&
        this._r3a16d13c26d3e1.visible &&
        this._rff24579831f760()
      : this._r3a16d13c26d3e1.visible && this._r3b278aa396d101();
  }
}
