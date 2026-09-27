// Extracted from HabboAirLauncher.deobf.js, line 138698.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ItemListController.as
// Obfuscated name: _iadc502acfb8deb

class extends st {
  static {
    n(this, "ItemListController");
  }
  _rc82737a7efa2ce = 0;
  _r4d64830d7863f9 = 0;
  _scrollAreaWidth = 0;
  var_151 = 0;
  _container;
  var_3478 = !1;
  var_418 = !1;
  var_659 = 0;
  var_482 = !1;
  _r931db7327315d7 = !1;
  _r4c2cdf877facd8 = !1;
  _rfecb4392e8d5a3 = !1;
  _r8a3e8fd905bc0a = !1;
  _rf634a2a802b2df = !1;
  _ra4fb7f824fa210 = null;
  _r7c60e5c4da471c = null;
  _r657b6706a8be4b = !1;
  _r7498ecbd0c7852 = !1;
  _re39cd64ca0e7b5 = !1;
  _reccb8911f5ad33 = n((e) => {
    this.containerEventHandler(e);
  }, "_reccb8911f5ad33");
  get spacing() {
    return this.var_659;
  }
  set spacing(e) {
    e !== this.var_659 && ((this.var_659 = e), this.updateScrollAreaRegion());
  }
  get scrollH() {
    return this._rc82737a7efa2ce;
  }
  set scrollH(e) {
    this._r8bba623ddd94df(e, !1);
  }
  get var_46() {
    return this._r4d64830d7863f9;
  }
  set var_46(e) {
    this._rea6d9cf5f36814(e, !1);
  }
  get _radb221318b5180() {
    return Math.max(0, this._scrollAreaWidth - this.width);
  }
  get _r5733287651adec() {
    return Math.max(0, this.var_151 - this.height);
  }
  get _r3701aeed56f609() {
    return this._re39cd64ca0e7b5;
  }
  set _r3701aeed56f609(e) {
    this._re39cd64ca0e7b5 = e;
  }
  get _r469b63044b56aa() {
    return this._rf634a2a802b2df;
  }
  set _r469b63044b56aa(e) {
    this._rf634a2a802b2df = e;
  }
  get _ree877f6d83de03() {
    return this._r7498ecbd0c7852;
  }
  set _ree877f6d83de03(e) {
    this._r7498ecbd0c7852 = e;
  }
  get _re9172ef75e4fbc() {
    return this._r657b6706a8be4b;
  }
  set _re9172ef75e4fbc(e) {
    this._r657b6706a8be4b = e;
  }
  get _rce8584c5e61b53() {
    return this;
  }
  get _rbab5041f1931e4() {
    return new D(
      this._rc82737a7efa2ce * this._radb221318b5180,
      this._r4d64830d7863f9 * this._r5733287651adec,
      this.width,
      this.height,
    );
  }
  get visibleRegion() {
    return this._container.rectangle;
  }
  set _rf2038036998a87(e) {
    this._r4c2cdf877facd8 !== e && ((this._r4c2cdf877facd8 = e), this.updateScrollAreaRegion());
  }
  get _rf2038036998a87() {
    return this._r4c2cdf877facd8;
  }
  set autoArrangeItems(e) {
    ((this._r931db7327315d7 = e), this.updateScrollAreaRegion());
  }
  get autoArrangeItems() {
    return this._r931db7327315d7;
  }
  set _r41807bb026890e(e) {
    ((this._rfecb4392e8d5a3 = e),
      this._container != null &&
        (this.var_482
          ? this._container.setParamFlag(N._r8840cc960ba771, e)
          : this._container.setParamFlag(N._rb24d4ab97e3989, e)));
  }
  get _r41807bb026890e() {
    return this._rfecb4392e8d5a3;
  }
  set _rbd4b11e89076c3(e) {
    e !== this._r8a3e8fd905bc0a &&
      ((this._r8a3e8fd905bc0a = e),
      this._container != null &&
        (this.var_482
          ? this._container.setParamFlag(N._rb24d4ab97e3989, e)
          : this._container.setParamFlag(N._r8840cc960ba771, e)),
      this.updateScrollAreaRegion());
  }
  get _rbd4b11e89076c3() {
    return this._r8a3e8fd905bc0a;
  }
  get iterator() {
    return new ItemListIterator(this);
  }
  get _r0b3b86bc379959() {
    return this.numListItems > 0 ? this.getListItemAt(0) : null;
  }
  get _r99252c730252ac() {
    return this.numListItems > 0 ? this.getListItemAt(this.numListItems - 1) : null;
  }
  get clipping() {
    return super.clipping;
  }
  set clipping(e) {
    ((super.clipping = e), this._container != null && (this._container.clipping = e));
  }
  get numListItems() {
    return this._container != null ? this._container.numChildren : 0;
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    let h = s._rf5e87151b3d9ca().getThemeManager();
    ((this._rc82737a7efa2ce = 0),
      (this._r4d64830d7863f9 = 0),
      (this._scrollAreaWidth = 0),
      (this.var_151 = 0),
      (this.var_482 = r === class_2090.WINDOW_TYPE_ITEMLIST_HORIZONTAL),
      (this.var_659 = Number(h._r421a2291c74c01(t).get(class_3436._rdaf6bdcdccb2b4).value)),
      (this._r931db7327315d7 = !!h._r421a2291c74c01(t).get(class_3436.AUTO_ARRANGE_ITEMS).value),
      (this._r4c2cdf877facd8 = !!h._r421a2291c74c01(t).get(class_3436.SCALE_TO_FIT_ITEMS).value),
      (this._rfecb4392e8d5a3 = !!h._r421a2291c74c01(t).get(class_3436.RESIZE_ON_ITEM_UPDATE).value),
      (this._r8a3e8fd905bc0a = !!h._r421a2291c74c01(t).get(class_3436.INVERSE_RESIZE_ON_ITEM_UPDATE).value),
      (this._rf634a2a802b2df = !!h._r421a2291c74c01(t).get(class_3436.ALLOW_SHIFT_SCROLL_HORIZONTAL).value),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._r5e1a9574d869f6 = this._background || !this.testParamFlag(N.const_421)),
      (this._container = this._context.create(
        "_CONTAINER",
        "",
        class_2090.WINDOW_TYPE_CONTAINER,
        class_2025.WINDOW_STYLE_DEFAULT,
        N.const_421 | N._ra57c1762076dde | N._r0122fdb7c42001,
        new D(0, 0, this.width, this.height),
        null,
        this,
        0,
        null,
        "",
        [st.TAG_INTERNAL, st.TAG_EXCLUDE],
      )));
    let p = this._reccb8911f5ad33;
    (this._container.addEventListener(y.const_755, p),
      this._container.addEventListener(y.const_1333, p),
      this._container.addEventListener(y.const_906, p),
      this._container.addEventListener(y.const_342, p),
      this._container.addEventListener(y.const_1385, p),
      (this._container.clipping = this.clipping),
      (this._r41807bb026890e = this._rfecb4392e8d5a3));
  }
  dispose() {
    if (!this._disposed) {
      let e = this._reccb8911f5ad33;
      (this._container?.removeEventListener(y.const_755, e),
        this._container?.removeEventListener(y.const_1333, e),
        this._container?.removeEventListener(y.const_906, e),
        this._container?.removeEventListener(y.const_342, e),
        this._container?.removeEventListener(y.const_1385, e),
        this._ra4fb7f824fa210?.dispose(),
        (this._ra4fb7f824fa210 = null),
        this._r7c60e5c4da471c?.dispose(),
        (this._r7c60e5c4da471c = null));
    }
    super.dispose();
  }
  _rf2db323e4b424b(e) {
    for (let r = 0; r < this.numListItems; r++) {
      let t = this.getListItemAt(r);
      t != null && e.addListItem(t.clone());
    }
  }
  addListItem(e) {
    ((this.var_418 = !0),
      this.var_482
        ? ((e.x = this._scrollAreaWidth + (this.numListItems > 0 ? this.var_659 : 0)),
          (this._scrollAreaWidth = e.right),
          (this._container.width = this._scrollAreaWidth))
        : (this.autoArrangeItems
            ? ((e.y = this.var_151 + (this.numListItems > 0 ? this.var_659 : 0)),
              (this.var_151 = e.bottom))
            : (this.var_151 = Math.max(this.var_151, e.bottom)),
          (this._container.height = this.var_151)));
    let r = this._container.addChild(e);
    return ((this.var_418 = !1), r);
  }
  addListItemAt(e, r) {
    let t = this._container.addChildAt(e, r);
    return (this.updateScrollAreaRegion(), t);
  }
  getListItemAt(e) {
    return this._container.getChildAt(e);
  }
  getListItemByID(e) {
    return this._container.getChildByID(e);
  }
  getListItemByName(e) {
    return this._container.getChildByName(e);
  }
  getListItemByTag(e) {
    return this._container.getChildByTag(e);
  }
  getListItemIndex(e) {
    return this._container.getChildIndex(e);
  }
  removeListItem(e) {
    let r = this._container.removeChild(e);
    return (r != null && this.updateScrollAreaRegion(), r);
  }
  removeListItemAt(e) {
    return this._container.removeChildAt(e);
  }
  _r1e5d0283c92035(e, r) {
    this._container.setChildIndex(e, r);
  }
  _rae95049fb8789d(e, r) {
    (this._container.swapChildren(e, r), this.updateScrollAreaRegion());
  }
  groupListItemsWithID(e, r, t = 0) {
    return this._container.groupChildrenWithID(e, r, t);
  }
  groupListItemsWithTag(e, r, t = 0) {
    return this._container.groupChildrenWithTag(e, r, t);
  }
  _r7d97ebf79244bd(e, r) {
    (this._container.swapChildrenAt(e, r), this.updateScrollAreaRegion());
  }
  removeListItems() {
    for (this.var_418 = !0; this.numListItems > 0;) this._container.removeChildAt(0);
    ((this.var_418 = !1), this.updateScrollAreaRegion());
  }
  destroyListItems() {
    for (this.var_418 = !0; this.numListItems > 0;) this._container.removeChildAt(0)?.destroy();
    ((this.var_418 = !1), this.updateScrollAreaRegion());
  }
  arrangeListItems() {
    this.updateScrollAreaRegion();
  }
  populate(e) {
    (this._container.populate(e), this.updateScrollAreaRegion());
  }
  update(e, r) {
    let t = super.update(e, r);
    switch (r.type) {
      case y.const_1204:
        this.var_3478 = !0;
        break;
      case y.const_755:
        (!this._r4c2cdf877facd8 &&
          !this._r8a3e8fd905bc0a &&
          (this.var_482
            ? (this._container.height = this.var_35)
            : (this._container.width = this.var_31)),
          this.updateScrollAreaRegion(),
          (this.var_3478 = !1));
        break;
      default:
        t = this.process(r);
    }
    return t;
  }
  _r63dd0c21253351(e, r) {
    return this._rcb671bdbb08ed4(e);
  }
  process(e) {
    if (!(e instanceof u)) return !1;
    switch (e.type) {
      case u.const_974:
      case u.WHEEL_HORIZONTAL:
        return this._re39cd64ca0e7b5 ? !1 : this._r2c6b27542d87a8(e);
    }
    return !1;
  }
  get _r725104edd91a20() {
    return this.var_482;
  }
  WindowMouseEvent(e, r = !1) {
    return this._rafd8b5a7ca8d9b(r).WindowMouseEvent(e);
  }
  get properties() {
    let e = super.properties;
    return (
      e.push(this.createProperty(class_3436._rdaf6bdcdccb2b4, this.var_659)),
      e.push(this.createProperty(class_3436.AUTO_ARRANGE_ITEMS, this._r931db7327315d7)),
      e.push(this.createProperty(class_3436.SCALE_TO_FIT_ITEMS, this._r4c2cdf877facd8)),
      e.push(this.createProperty(class_3436.RESIZE_ON_ITEM_UPDATE, this._rfecb4392e8d5a3)),
      e.push(this.createProperty(class_3436.INVERSE_RESIZE_ON_ITEM_UPDATE, this._r8a3e8fd905bc0a)),
      e.push(this.createProperty(class_3436.ALLOW_SHIFT_SCROLL_HORIZONTAL, this._rf634a2a802b2df)),
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
        case class_3436.INVERSE_RESIZE_ON_ITEM_UPDATE:
          this._rbd4b11e89076c3 = r.value;
          break;
        case class_3436.ALLOW_SHIFT_SCROLL_HORIZONTAL:
          this._r469b63044b56aa = r.value;
          break;
        case class_3436.AUTO_ARRANGE_ITEMS:
          this._r931db7327315d7 = r.value;
          break;
      }
    super.properties = e;
  }
  _r0feeaa020a3def() {}
  updateScrollAreaRegion() {
    if (!this._r931db7327315d7 || this.var_418 || this._container == null) return;
    this.var_418 = !0;
    let e = Math.max(0, -this._container.x),
      r = Math.max(0, -this._container.y),
      t = this._container.numChildren,
      i = 0;
    if (this.var_482) {
      ((this._scrollAreaWidth = 0), (this.var_151 = this.var_35), (i = 0));
      for (let s = 0; s < t; s++) {
        let o = this._container.getChildAt(s);
        if (o?.visible) {
          if (
            ((o.x = this._scrollAreaWidth),
            (this._scrollAreaWidth += o.width + this.var_659),
            this._r4c2cdf877facd8)
          ) {
            let d = o.height + o.y;
            this.var_151 = d > this.var_151 ? d : this.var_151;
          }
          if (this._r8a3e8fd905bc0a) {
            let d = this._reafd095c8be4ee(o);
            i = d > i ? d : i;
          }
        }
      }
      t > 0 && (this._scrollAreaWidth -= this.var_659);
    } else {
      ((this._scrollAreaWidth = this.var_31), (this.var_151 = 0), (i = 0));
      for (let s = 0; s < t; s++) {
        let o = this._container.getChildAt(s);
        if (o?.visible) {
          if (
            ((o.y = this.var_151),
            (this.var_151 += o.height + this.var_659),
            this._r4c2cdf877facd8)
          ) {
            let d = o.width + o.x;
            this._scrollAreaWidth = d > this._scrollAreaWidth ? d : this._scrollAreaWidth;
          }
          if (this._r8a3e8fd905bc0a) {
            let d = this._r2268cce9a38df0(o);
            i = d > i ? d : i;
          }
        }
      }
      t > 0 && (this.var_151 -= this.var_659);
    }
    (this._re9be6a94bfec77(e),
      this._r7f64b11cfde564(r),
      (this._container.height = this.var_151),
      (this._container.width = this._scrollAreaWidth),
      this._r8a3e8fd905bc0a &&
        (this.var_482
          ? ((this.limits.minHeight = i), (this.limits.maxHeight = i), (this._container.height = i))
          : ((this.limits.minWidth = i), (this.limits.maxWidth = i), (this._container.width = i))),
      (this.var_418 = !1));
  }
  get _r7845a5f73e843c() {
    return (
      this._ra4fb7f824fa210 == null &&
        (this._ra4fb7f824fa210 = new a1(
          this._r975e16570e92bf.bind(this),
          this._r1eb70180c96721.bind(this),
          this._r04dfa0613ab70a.bind(this),
        )),
      this._ra4fb7f824fa210
    );
  }
  get _r61f115b283c9c7() {
    return (
      this._r7c60e5c4da471c == null &&
        (this._r7c60e5c4da471c = new a1(
          this._r29972373842a6e.bind(this),
          this._r9761ce1b4f1d21.bind(this),
          this._ra1b0ff9fee3856.bind(this),
        )),
      this._r7c60e5c4da471c
    );
  }
  _r975e16570e92bf() {
    return this.scrollH;
  }
  _r1eb70180c96721(e) {
    this._r8bba623ddd94df(e, !0);
  }
  _r04dfa0613ab70a() {
    return this._radb221318b5180;
  }
  _r29972373842a6e() {
    return this.var_46;
  }
  _r9761ce1b4f1d21(e) {
    this._rea6d9cf5f36814(e, !0);
  }
  _ra1b0ff9fee3856() {
    return this._r5733287651adec;
  }
  _re9be6a94bfec77(e) {
    let r = this._radb221318b5180;
    if (!Number.isFinite(r) || r <= 0) {
      ((this._rc82737a7efa2ce = 0), (this._container.x = 0));
      return;
    }
    ((e = Math.max(0, Math.min(e, r))), (this._rc82737a7efa2ce = e / r), (this._container.x = -e));
  }
  _r7f64b11cfde564(e) {
    let r = this._r5733287651adec;
    if (!Number.isFinite(r) || r <= 0) {
      ((this._r4d64830d7863f9 = 0), (this._container.y = 0));
      return;
    }
    ((e = Math.max(0, Math.min(e, r))), (this._r4d64830d7863f9 = e / r), (this._container.y = -e));
  }
  _r8bba623ddd94df(e, r) {
    let t = this._radb221318b5180;
    ((!Number.isFinite(t) || t <= 0) && (e = 0), e < 0 && (e = 0), e > 1 && (e = 1));
    let i = e - this._rc82737a7efa2ce;
    if (
      e !== this._rc82737a7efa2ce &&
      ((this._rc82737a7efa2ce = e),
      (this._container.x = -this._rc82737a7efa2ce * t),
      this._context.invalidate(this._container, this._rbab5041f1931e4, class_2902.REDRAW),
      this._events != null)
    ) {
      let s = y.allocate(y.const_362, this, null);
      (this._events.dispatchEvent(s), s.recycle());
    }
    !r &&
      this._ra4fb7f824fa210 != null &&
      this._ra4fb7f824fa210._r1bd7920e521eab &&
      this._ra4fb7f824fa210._r4b59d5020c3c2b(i);
  }
  _rea6d9cf5f36814(e, r) {
    let t = this._r5733287651adec;
    ((!Number.isFinite(t) || t <= 0) && (e = 0), e < 0 && (e = 0), e > 1 && (e = 1));
    let i = e - this._r4d64830d7863f9;
    if (
      e !== this._r4d64830d7863f9 &&
      ((this._r4d64830d7863f9 = e),
      (this._container.y = -this._r4d64830d7863f9 * t),
      this._context.invalidate(this._container, this._rbab5041f1931e4, class_2902.REDRAW),
      this._events != null)
    ) {
      let s = y.allocate(y.const_362, this, null);
      (this._events.dispatchEvent(s), s.recycle());
    }
    !r &&
      this._r7c60e5c4da471c != null &&
      this._r7c60e5c4da471c._r1bd7920e521eab &&
      this._r7c60e5c4da471c._r4b59d5020c3c2b(i);
  }
  _r2c6b27542d87a8(e) {
    let r = e,
      t = this._r6a45c8371123d1(r);
    return r.type === u.WHEEL_HORIZONTAL && !t ? !1 : this.WindowMouseEvent(this._r1d518b35a45bf8(r), t);
  }
  _r6a45c8371123d1(e) {
    return e.type === u.const_974 && e.shiftKey && this._rf634a2a802b2df ? !0 : this._r725104edd91a20;
  }
  _r1d518b35a45bf8(e) {
    return e == null ? 0 : e.type === u.WHEEL_HORIZONTAL ? -e.delta : e.delta;
  }
  _rafd8b5a7ca8d9b(e) {
    return e ? this._r7845a5f73e843c : this._r61f115b283c9c7;
  }
  containerEventHandler(e) {
    switch (e.type) {
      case y.const_1333:
        this.updateScrollAreaRegion();
        break;
      case y.const_906:
        this.var_3478 || this.updateScrollAreaRegion();
        break;
      case y.const_342:
        this.updateScrollAreaRegion();
        break;
      case y.const_1385:
        this.updateScrollAreaRegion();
        break;
      case y.const_755:
        if (this._events != null) {
          let r = y.allocate(y.const_755, this, null);
          (this._events.dispatchEvent(r), r.recycle());
        }
        break;
      default:
        break;
    }
  }
  _r2268cce9a38df0(e) {
    let r = e.param & N._rcf781b4b002bb2;
    if (r === N._rf567d650b39a78) {
      let t = Math.max(0, e.x),
        i = Math.max(0, this.var_31 - e.x - e.width);
      return e.limits.minWidth + t + i;
    }
    return r === N._r251b340ca94bef
      ? this.var_31 - e.x
      : r === N._ra20cc779361d59
        ? e.width
        : e.x + e.width;
  }
  _reafd095c8be4ee(e) {
    let r = e.param & N._raccb3b4229be11;
    if (r === N._r46a9ac2e4c9863) {
      let t = e.y,
        i = this.var_35 - e.y - e.height;
      return e.limits.minWidth + t + i;
    }
    return r === N._r317c7c36abd185
      ? this.var_35 - e.y
      : r === N._ra6bff225edb68c
        ? e.height
        : e.y + e.height;
  }
}
