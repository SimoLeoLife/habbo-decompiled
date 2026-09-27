// Estratto da HabboAirLauncher.deobf.js, riga 132924.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/DropMenuController.as
// Nome offuscato: _ic88cb2bccacb48

class a extends C8 {
  static {
    n(this, "DropMenuController");
  }
  static DROP_MENU_ITEM_MAX_LENGTH = 200;
  _rce805a70e078d4 = null;
  dispose() {
    ((this._rce805a70e078d4 = null), super.dispose());
  }
  populate(e) {
    let r = this._r749e70d500190b();
    for (this._r83eb58f85dc46c = -1; r.length > 0;) r.pop();
    for (let t of e) r.push(String(t));
    ((this._rc0068b659198e8 = !0), this.var_210());
  }
  populateWithVector(e) {
    let r = this._r749e70d500190b();
    for (this._r83eb58f85dc46c = -1; r.length > 0;) r.pop();
    for (let t of e) r.push(t);
    ((this._rc0068b659198e8 = !0), this.var_210());
  }
  populateExpandedMenu(e, r, t) {
    if (!r) return;
    let i = r.getItemList(),
      s = r._r5c12a6c92585f9();
    if (i === null || s === null) return;
    ((i.autoArrangeItems = !1), (s.visible = !1));
    let o = this._r749e70d500190b(),
      d = o.length,
      c = i.width,
      f = c,
      l = 0;
    for (let _ = 0; _ < d; _++) {
      let h = o[_];
      h.length > a.DROP_MENU_ITEM_MAX_LENGTH && (h = `${h.substring(0, a.DROP_MENU_ITEM_MAX_LENGTH)}...`);
      let p = this.context.create(
        `${this.name}::menuItem[${_}]`,
        h,
        class_2090.const_696,
        this._style,
        N._r77a58b25a3d55d |
          N._r4e93705652120a |
          N.const_421 |
          N._re3bd61027cfd94 |
          N._r0122fdb7c42001,
        null,
        t,
        null,
        _,
        null,
        "",
        [st.TAG_EXCLUDE],
      );
      p !== null &&
        (this._menuIsOpen().push(p),
        (f = Math.max(f, p.width)),
        (l += p.height),
        (p.width = c),
        i.addListItem(p));
    }
    if (f > c) {
      r.width += f - i.width;
      for (let _ = 0; _ < d; _++) {
        let h = i.getListItemAt(_);
        h !== null && (h.width = f);
      }
    }
    let b = this.context.create(
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
    (b !== null && (i.addListItem(b), (l += b.height)),
      (i.autoArrangeItems = !0),
      (l += i.spacing * i.numListItems),
      (r.height = Math.max(r.height, l + 4)),
      this.fitToDesktop(r),
      r.activate(),
      (i.height = Math.max(i.height, r.height - 4)),
      this._r83eb58f85dc46c > -1 &&
        d > 0 &&
        i.getListItemAt(this._r83eb58f85dc46c)?.setStateFlag(class_1948.const_130, !0));
  }
  var_210() {
    if (this.close()) {
      if (
        (this._rc6b60fd9e455a7 != null && (this._rc6b60fd9e455a7.destroy(), (this._rc6b60fd9e455a7 = null)),
        this._rc0068b659198e8)
      ) {
        let r = y.allocate(y.const_769, this, null);
        (this.update(this, r), r.recycle());
      }
      this._rc0068b659198e8 = !1;
      let e = this._menuIsOpen();
      for (; e.length > 0;) e.pop()?.dispose();
      if (!this.disposed) {
        let r = this._r232a3dfc0ca785();
        if (r !== null) {
          ((r.visible = !0),
            (r.text =
              this._r83eb58f85dc46c < this._r749e70d500190b().length && this._r83eb58f85dc46c > -1
                ? this._r749e70d500190b()[this._r83eb58f85dc46c]
                : this.caption));
          let t = this._r5c12a6c92585f9();
          ((r.width = Math.max(0, t.x + t.width - r.x)), this.invalidate());
        }
      }
    }
  }
  enumerateSelection() {
    let e = [];
    if (!this._disposed) {
      let r = this._r749e70d500190b();
      for (let t = 0; t < r.length; t++) e.push(r[t]);
    }
    return e;
  }
  get numMenuItems() {
    return this._rce805a70e078d4?.length ?? 0;
  }
  get properties() {
    let e = super.properties;
    return (e.push(this.createProperty(class_3436.MENU_ITEM_ARRAY, this._r749e70d500190b())), e);
  }
  set properties(e) {
    for (let r of e) r.key === class_3436.MENU_ITEM_ARRAY && this.populate(r.value);
    super.properties = e;
  }
  openMenu() {
    this._rf7a42c4f105e48();
  }
  _r749e70d500190b() {
    return ((this._rce805a70e078d4 ??= []), this._rce805a70e078d4);
  }
}
