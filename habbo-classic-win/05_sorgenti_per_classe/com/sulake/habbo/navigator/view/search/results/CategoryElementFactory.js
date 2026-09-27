// Extracted from HabboAirLauncher.deobf.js, line 260504.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/search/results/CategoryElementFactory.as
// Obfuscated name: _ie95b184944e135

class a {
  static {
    n(this, "CategoryElementFactory");
  }
  static MARGIN_LAYOUT_CATEGORY_CONTAINER = 13;
  _navigator;
  _rd62dcd80647856 = null;
  var_1572;
  _r90cc523431c567 = null;
  _rd90e62f0ced1cf = null;
  _rce4f1154d4390b = null;
  constructor(e, r) {
    ((this._navigator = e), (this.var_1572 = r));
  }
  set _rf8d1a812903cb2(e) {
    this._rd62dcd80647856 = e;
  }
  set _ra043958bd92956(e) {
    this._r90cc523431c567 = e;
  }
  set _rc540e9e9b2b2c2(e) {
    this._rd90e62f0ced1cf = e;
  }
  set _rc17d3f06c46dc5(e) {
    this._rce4f1154d4390b = e;
  }
  getOpenCategoryElement(e, r, t = -1, i = class_2005.const_154, s = -1) {
    if (!this._r90cc523431c567 || !this._rd62dcd80647856)
      throw new Error("Category templates must be set before rendering.");
    let o = this._r90cc523431c567.clone(),
      d = this._rd62dcd80647856._r2335bd29bd1ba9 - a.MARGIN_LAYOUT_CATEGORY_CONTAINER,
      c = 16 + this.var_1572.rowEntryTemplateHeight * (e.length + 1),
      f = this._r8767860069a7d4(o, "category_content"),
      l = this._r8767860069a7d4(o, "category_controls_itemlist"),
      b = this._r8767860069a7d4(o, "category_back"),
      _ = this._r8767860069a7d4(o, "category_collapse"),
      h = this._r8767860069a7d4(o, "category_name_region"),
      p = this._r8767860069a7d4(o, "category_show_more"),
      m = this._r8767860069a7d4(o, "category_add_quick_link"),
      v = this._r8767860069a7d4(o, "category_content_background");
    if (
      ((o.width = d),
      (o.height = c),
      (this._r8767860069a7d4(o, "category_name").caption = r),
      b.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856._re0b8db3de22f58.bind(this._rd62dcd80647856)),
      ),
      (b.visible = i === class_2005.const_1335),
      (_.visible = i !== class_2005.const_1335),
      (_.id = t),
      _.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856.onCategoryCollapseClicked.bind(this._rd62dcd80647856)),
      ),
      (h.id = t),
      h.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856.onCategoryCollapseClicked.bind(this._rd62dcd80647856)),
      ),
      (p.id = t),
      p.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856.onCategoryShowMoreClicked.bind(this._rd62dcd80647856)),
      ),
      (p.visible = i === class_2005.const_376),
      (m.id = t),
      m.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856._re1c2eae06554b4.bind(this._rd62dcd80647856)),
      ),
      (v.background = !0),
      (v.height = 12 + this.var_1572.rowEntryTemplateHeight * (e.length + 1)),
      (m.visible =
        this._navigator._r863f575e329672?.var_485.indexOf(xd.OFFICIAL_VIEW_CODE) === -1),
      this._navigator.sessionData.isPerkAllowed(class_2156.NAVIGATOR_ROOM_THUMBNAIL_CAMERA))
    ) {
      let R = this._rde030f2db94049(l, "category_toggle_tiles"),
        T = this._rde030f2db94049(l, "category_toggle_rows");
      (R.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856._rfe1f6e8a0106aa.bind(this._rd62dcd80647856)),
      ),
        (R.id = t),
        (R.visible = s === UnkConstants_3fbb45._r038bfe744af0bc),
        T.addEventListener(
          u.CLICK,
          this._ra15d96930b149e(this._rd62dcd80647856._rfe1f6e8a0106aa.bind(this._rd62dcd80647856)),
        ),
        (T.id = t),
        (T.visible = s === UnkConstants_3fbb45._r1c7674a28521d4));
    } else {
      let R = l.getListItemByName("category_toggle_tiles"),
        T = l.getListItemByName("category_toggle_rows");
      (R != null && l.removeListItem(R), T != null && l.removeListItem(T));
    }
    (l.arrangeListItems(), s === UnkConstants_3fbb45._r038bfe744af0bc && (f.spacing = 0));
    let w = 9412607,
      I = -1,
      C = 1,
      W = null;
    for (let R of e) {
      let T = C % 2 === 0 ? I : w;
      s === UnkConstants_3fbb45._r038bfe744af0bc
        ? (f.addListItem(this.var_1572.getNewRowElement(R, T)), C++)
        : (W ||
            ((W = this.var_1572.getNewTileContainerElement()),
            f.addListItem(W),
            W.addEventListener(
              u.const_974,
              this._ra15d96930b149e((S) => {
                this._rd62dcd80647856?.itemList?.WindowMouseEvent(S.delta);
              }),
            )),
          W.addListItem(this.var_1572.getNewTileElement(R, T)),
          W.numListItems >= RoomEntryElementFactory.TILES_PER_CONTAINER && ((W = null), C++));
    }
    return (f.arrangeListItems(), o);
  }
  getCollapsedCategoryElement(e, r = -1, t = class_2005.const_154) {
    if (!this._rd90e62f0ced1cf || !this._rd62dcd80647856)
      throw new Error("Collapsed category template must be set before rendering.");
    let i = this._rd90e62f0ced1cf.clone(),
      s = this._r8767860069a7d4(i, "category_show_more"),
      o = this._r8767860069a7d4(i, "category_expand"),
      d = this._r8767860069a7d4(i, "category_name_region"),
      c = this._r8767860069a7d4(i, "category_add_quick_link");
    return (
      (this._r8767860069a7d4(i, "category_name").caption = e),
      (s.id = r),
      s.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856.onCategoryShowMoreClicked.bind(this._rd62dcd80647856)),
      ),
      (s.visible = t === class_2005.const_376),
      o.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856.onCategoryExpandClicked.bind(this._rd62dcd80647856)),
      ),
      (o.id = r),
      d.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856.onCategoryExpandClicked.bind(this._rd62dcd80647856)),
      ),
      (d.id = r),
      c.addEventListener(
        u.CLICK,
        this._ra15d96930b149e(this._rd62dcd80647856._re1c2eae06554b4.bind(this._rd62dcd80647856)),
      ),
      (c.id = r),
      (c.visible =
        this._navigator._r863f575e329672?.var_485.indexOf(xd.OFFICIAL_VIEW_CODE) === -1),
      (i.width = this._rd62dcd80647856._r2335bd29bd1ba9 - a.MARGIN_LAYOUT_CATEGORY_CONTAINER),
      this._r8767860069a7d4(i, "category_controls_itemlist").arrangeListItems(),
      i
    );
  }
  getNoResultsELement() {
    if (!this._rce4f1154d4390b) throw new Error("No-results template must be set before rendering.");
    return this._rce4f1154d4390b.clone();
  }
  _r8767860069a7d4(e, r) {
    let t = e.findChildByName(r);
    if (t == null) throw new Error(`Missing category child window: ${r}`);
    return t;
  }
  _rde030f2db94049(e, r) {
    let t = e.getListItemByName(r);
    if (t == null) throw new Error(`Missing category list item: ${r}`);
    return t;
  }
  _ra15d96930b149e(e) {
    return e;
  }
}
