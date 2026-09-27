// Extracted from HabboAirLauncher.deobf.js, line 132454.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/DropBaseController.as
// Obfuscated name: _ica7d26ddc2e7d5

class a extends Ci {
  static {
    n(this, "DropBaseController");
  }
  static CAPTION_BLEND_CHANGE = 0.5;
  static TEXT_FIELD_NAME = "_DROPLIST_TITLETEXT";
  static ITEM_LIST_NAME = "_DROPLIST_ITEMLIST";
  static REGION_NAME = "_DROPLIST_REGION";
  static SUB_WINDOW_MAX_DESKTOP_PADDING = 30;
  _itemArray = null;
  _r83eb58f85dc46c = -1;
  _rc0068b659198e8 = !1;
  _ra4e9322190d6a8 = !1;
  _rc6b60fd9e455a7 = null;
  _r1a41d253eeba7b = !1;
  var_3672 = !1;
  _r23049a307169fc = n((e) => this._r7972585720acb7(e), "_r23049a307169fc");
  _r55efee8d09312e = n((e, r) => this.subMenuEventProc(e, r), "_r55efee8d09312e");
  get selection() {
    return this._r83eb58f85dc46c;
  }
  set selection(e) {
    if (e > this.numMenuItems - 1) throw new Error("Menu selection index out of range!");
    let r = y.allocate(y.const_587, this, null, !0);
    (this.update(this, r),
      r.isWindowOperationPrevented() ||
        (r.recycle(),
        (this._r83eb58f85dc46c = e),
        this.var_210(),
        (r = y.allocate(y.const_238, this, null)),
        this.update(this, r)),
      r.recycle());
  }
  get caption() {
    return super.caption;
  }
  set caption(e) {
    super.caption = e;
    let r = this._r232a3dfc0ca785();
    r !== null && (r.text = e);
  }
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    ((i |= N._re3bd61027cfd94), super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
    let h = this._r5c12a6c92585f9();
    h !== null && h.addEventListener(u.DOWN, this._r23049a307169fc);
  }
  dispose() {
    if (this._disposed) return;
    let e = this._r5c12a6c92585f9();
    (e !== null && e.removeEventListener(u.DOWN, this._r23049a307169fc),
      this._rc6b60fd9e455a7 != null &&
        !this._rc6b60fd9e455a7.disposed &&
        (this._rc6b60fd9e455a7.destroy(), (this._rc6b60fd9e455a7 = null)));
    for (let r of this._menuIsOpen()) r.dispose();
    ((this._itemArray = null), super.dispose());
  }
  activate() {
    return this._rc0068b659198e8 ? !0 : super.activate();
  }
  _r232a3dfc0ca785() {
    let e = this.getChildByName(a.TEXT_FIELD_NAME);
    return _id11cefb8a367ec(e) ? e : null;
  }
  getItemList() {
    let e = this.getChildByName(a.ITEM_LIST_NAME);
    return _i174073f892c83e(e) ? e : null;
  }
  _r5c12a6c92585f9() {
    let e = this.getChildByName(a.REGION_NAME);
    return _i4ae3c1ac72c38e(e) ? e : null;
  }
  populate(e) {
    let r = this._menuIsOpen();
    for (this._rc0068b659198e8 = !0, this.var_210(), this._r83eb58f85dc46c = -1; r.length > 0;) {
      let t = r.pop();
      t !== void 0 && e.indexOf(t) === -1 && t.dispose();
    }
    for (let t of e) r.push(t);
  }
  _rf7a42c4f105e48() {
    if (!this._rc0068b659198e8 && this.open()) {
      let e = y.allocate(y.const_1199, this, null);
      (this.update(this, e),
        e.recycle(),
        this.numMenuItems > 0 &&
          ((this._rc0068b659198e8 = !0),
          (this._ra4e9322190d6a8 = !0),
          this.populateExpandedMenu(this._menuIsOpen(), this.getExpandedMenuView(), this._r55efee8d09312e)));
    }
  }
  var_210() {
    if (this.close()) {
      let e;
      if (this._rc6b60fd9e455a7 != null) {
        if (((e = this._rc6b60fd9e455a7.getItemList()), e !== null)) {
          e.autoArrangeItems = !1;
          for (let r = 0; r < e.numListItems; r++) {
            let t = e.getListItemAt(r);
            if (_i58f0810e76c763(t)) {
              let i = t.value;
              i !== null &&
                this._menuIsOpen().indexOf(i) > -1 &&
                ((t.value = null), i.setParamFlag(N._rca1af0855e9da4, !1));
            }
          }
        }
        (this._rc6b60fd9e455a7.destroy(), (this._rc6b60fd9e455a7 = null));
      }
      if (this._rc0068b659198e8) {
        let r = y.allocate(y.const_769, this, null);
        (this.update(this, r), r.recycle());
      }
      if (((this._rc0068b659198e8 = !1), !this.disposed)) {
        let r = this._r232a3dfc0ca785();
        if (((e = this.getItemList()), e !== null)) {
          for (; e.numListItems > 0;) e.removeListItemAt(0);
          if (this._r83eb58f85dc46c < this.numMenuItems && this._r83eb58f85dc46c > -1) {
            let t = this._menuIsOpen()[this._r83eb58f85dc46c];
            ((t.x = 0), (t.y = 0), e.addListItem(t), (e.height = t.height), r !== null && (r.visible = !1));
          } else r !== null && (r.visible = !0);
        }
      }
    }
  }
  getExpandedMenuView() {
    let e = new D();
    return (
      this.getGlobalRectangle(e),
      this._rc6b60fd9e455a7 === null || this._rc6b60fd9e455a7.disposed
        ? (this._rc6b60fd9e455a7 = this.context.create(
            `${this.name}::subMenu`,
            "",
            this.type,
            this._style,
            N.expandToAccommodateChild | Number(this._r1a41d253eeba7b ? N._rf5b0baf5faf9da : 0) | N._r0122fdb7c42001,
            e,
            this._r55efee8d09312e,
            null,
            0,
            null,
            "",
            [st.TAG_EXCLUDE],
          ))
        : this._rc6b60fd9e455a7.setGlobalRectangle(e),
      this._rc6b60fd9e455a7.activate(),
      this._rc6b60fd9e455a7
    );
  }
  populateExpandedMenu(e, r, t) {
    let i = r.getItemList(),
      s = r._r5c12a6c92585f9();
    if (i === null || s === null) return;
    ((i.autoArrangeItems = !1), (s.visible = !1));
    let o = e.length,
      d = i.width,
      c = d,
      f = 0;
    for (let b = 0; b < o; b++) {
      let _ = e[b],
        h = this.context.create(
          `${this.name}::menuItem[${b}]`,
          _.caption,
          class_2090.const_1042,
          this._style,
          N._r77a58b25a3d55d |
            N._r4e93705652120a |
            N.const_421 |
            N._re3bd61027cfd94 |
            N._r0122fdb7c42001,
          null,
          t,
          null,
          b,
          null,
          "",
          [st.TAG_EXCLUDE],
        );
      h !== null &&
        ((_.x = 0),
        (_.y = 0),
        _.setParamFlag(N._rca1af0855e9da4, !0),
        (h.value = _),
        (h.width = h.value.width),
        (h.height = h.value.height),
        (h.limits.minWidth = d),
        (c = Math.max(c, h.width)),
        (f += h.height),
        i.addListItem(h));
    }
    if (c > d) {
      r.width += c - i.width;
      for (let b = 0; b < o; b++) {
        let _ = i.getListItemAt(b);
        _ !== null && (_.limits.minWidth = c);
      }
    }
    let l = this.context.create(
      `${this.name}::padding`,
      "",
      class_2090.WINDOW_TYPE_CONTAINER,
      this._style,
      N._r77a58b25a3d55d | N._r4e93705652120a | N.const_421 | N._r0122fdb7c42001,
      new D(0, 0, 1, 3),
      null,
      null,
      0,
      null,
      "",
      [st.TAG_EXCLUDE],
    );
    (l !== null && (i.addListItem(l), (f += l.height)),
      (i.autoArrangeItems = !0),
      (f += i.spacing * i.numListItems),
      (r.height = Math.max(r.height, f + 4)),
      this.param & N.const_1323 ? this._r85cb24c2261ca7(r) : this.fitToDesktop(r),
      r.activate(),
      (i.height = Math.max(i.height, r.height - 4)),
      this._r83eb58f85dc46c > -1 &&
        o > 0 &&
        i.getListItemAt(this._r83eb58f85dc46c)?.setStateFlag(class_1948.const_130, !0));
  }
  _r85cb24c2261ca7(e) {
    let r = new D();
    e.getGlobalRectangle(r);
    let t = new D();
    (this.parent?.getGlobalRectangle(t),
      r.height > t.height &&
        (e.offset(0, t.top - r.top), e.scale(0, t.height - r.height), e.getGlobalRectangle(r)),
      r.bottom > t.bottom ? e.offset(0, t.bottom - r.bottom) : r.top < t.top && e.offset(0, r.top - t.top),
      r.left < t.left ? e.offset(r.left - t.left, 0) : r.right > t.right && e.offset(t.right - r.right, 0));
  }
  fitToDesktop(e) {
    let r = new D();
    (e.getGlobalRectangle(r),
      r.bottom > this.desktop.bottom
        ? e.offset(0, this.desktop.bottom - r.bottom)
        : r.top < this.desktop.top && e.offset(0, r.top - this.desktop.top),
      r.left < this.desktop.left
        ? e.offset(r.left - this.desktop.left, 0)
        : r.right > this.desktop.right && e.offset(this.desktop.right - r.right, 0),
      r.height > this.desktop.height - a.SUB_WINDOW_MAX_DESKTOP_PADDING &&
        ((e.height = this.desktop.height - a.SUB_WINDOW_MAX_DESKTOP_PADDING), (e.y = a.SUB_WINDOW_MAX_DESKTOP_PADDING)));
  }
  _r7972585720acb7(e) {
    this.getStateFlag(class_1948.const_117) ||
      ((e.type === u.DOWN || e.type === Zn.const_473) &&
        (this._rc0068b659198e8 || this._rf7a42c4f105e48()));
  }
  subMenuEventProc(e, r) {
    switch (e.type) {
      case Zn.const_930:
      case u.UP:
        _i58f0810e76c763(r) &&
          (this._ra4e9322190d6a8 || (this.selection = this._r9ed881ef0febe3(r)),
          (this._ra4e9322190d6a8 = !1));
        break;
      case Zn.WINDOW_EVENT_TOUCH_BEGIN:
      case u.DOWN:
        this.selection = this._r9ed881ef0febe3(r);
        break;
      case y.const_210:
        r === this._rc6b60fd9e455a7 &&
          (!this.var_3672 || !this._rc0068b659198e8) &&
          this.var_210();
        break;
    }
  }
  _r9ed881ef0febe3(e) {
    let r = this._menuIsOpen(),
      t = r.indexOf(e);
    return (t === -1 && _i58f0810e76c763(e) && (t = r.indexOf(e.value)), t === -1 ? this._r83eb58f85dc46c : t);
  }
  update(e, r) {
    switch (r.type) {
      case Zn.WINDOW_EVENT_TOUCH_BEGIN:
      case u.DOWN:
        this._rc0068b659198e8 ? this.var_3672 && this.var_210() : this._rf7a42c4f105e48();
        break;
      case y.const_1331:
        try {
          let t = this.getChildByName(a.REGION_NAME),
            i = this.getChildByName(a.TEXT_FIELD_NAME);
          (t !== null && (t.visible = !0), i !== null && (i.blend += a.CAPTION_BLEND_CHANGE));
        } catch {}
        break;
      case y.const_1057:
        try {
          let t = this.getChildByName(a.REGION_NAME),
            i = this.getChildByName(a.TEXT_FIELD_NAME);
          (t !== null && (t.visible = !1), i !== null && (i.blend -= a.CAPTION_BLEND_CHANGE));
        } catch {}
        break;
    }
    return super.update(e, r);
  }
  open() {
    if (this.getStateFlag(class_1948.WINDOW_STATE_DEFAULT)) return !0;
    let e = y.allocate(y.const_922, this, null);
    return (
      this.update(this, e),
      e.isDefaultPrevented()
        ? (e.recycle(), !1)
        : (e.recycle(),
          (this.visible = !0),
          (e = y.allocate(y.const_817, this, null)),
          this.update(this, e),
          e.recycle(),
          !0)
    );
  }
  close() {
    if (!this.getStateFlag(class_1948.WINDOW_STATE_DEFAULT)) return !0;
    let e = y.allocate(y.const_1386, this, null);
    return (
      this.update(this, e),
      e.isDefaultPrevented()
        ? (e.recycle(), !1)
        : (e.recycle(),
          (this.visible = !1),
          (e = y.allocate(y.const_1131, this, null)),
          this.update(this, e),
          e.recycle(),
          !0)
    );
  }
  get numMenuItems() {
    return this._itemArray?.length ?? 0;
  }
  _menuIsOpen() {
    return ((this._itemArray ??= []), this._itemArray);
  }
  get properties() {
    let e = super.properties;
    return (
      e.push(this.createProperty(class_3436.const_894, this._r1a41d253eeba7b)),
      e.push(this.createProperty(class_3436.KEEP_OPEN_ON_DEACTIVATE, this.var_3672)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case class_3436.const_894:
          this._r1a41d253eeba7b = !!r.value;
          break;
        case class_3436.KEEP_OPEN_ON_DEACTIVATE:
          this.var_3672 = !!r.value;
          break;
      }
    super.properties = e;
  }
}
