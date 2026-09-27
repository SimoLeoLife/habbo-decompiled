// Extracted from HabboAirLauncher.deobf.js, line 350001.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/contracts/ItemTypeSelectionPreset.as
// Obfuscated name: _if6c2f582cf1bf0

class a extends WiredUIPreset {
  static {
    n(this, "ItemTypeSelectionPreset");
  }
  static COL_FURNI_CODE = "furni_code";
  static COL_FURNI_NAME = "furni_name";
  static COL_FURNI_TYPE = "furni_type";
  static TYPE_POSTER = "poster";
  static POSTER_IDS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 83, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516,
    517, 518, 520, 521, 522, 523, 1e3, 1001, 1002, 1003, 1004, 1005, 1006, 2e3, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008,
  ];
  var_764;
  _allFurnis = [];
  var_1100;
  toLowerCase;
  var_1216;
  var_778 = null;
  var_1495;
  var_154 = null;
  _r66526b0d5ff393 = !1;
  var_2266 = !1;
  _listeners = [];
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    ((this.var_764 = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this.var_764.spacing = this.var_40._r249f7dc0054eba),
      this.createAllFurnis(),
      (this.var_1100 = this.var_102.createNamedTextInput(
        new it("", -1, "${wiredcontracts.element.itemtype.furni_code.placeholder}", 150, null, !1),
        "${wiredcontracts.element.itemtype.furni_code}",
      )),
      (this.toLowerCase = this.var_102.createNamedTextInput(
        new it("", 220, "", 150),
        "${wiredcontracts.element.itemtype.search}",
      )),
      (this.var_1216 = this.var_102._rd65848eed931f7("container_view")),
      (this.var_1216.width = 350),
      (this.var_1216.height = 234),
      (this.var_1495 = this.var_102.createText("-", new Se(Se.MODE_MULTILINE))),
      this.var_1495.halfBlend(),
      this.var_764.addListItem(this.var_1100.window),
      this.var_764.addListItem(this.toLowerCase.window),
      this.var_764.addListItem(this.var_1216),
      this.var_764.addListItem(this.var_1495.window),
      this.toLowerCase.addEventListener(y.WINDOW_EVENT_CHANGE, this._r01cd0c41519609),
      this._rb3152e3fb34ee0(),
      this.refreshShowCount());
  }
  refreshShowCount() {
    this.var_1495.text = this.localizations.getLocalizationWithParams(
      "wiredcontracts.element.show_count",
      "",
      "amount",
      String(this.var_778._r27085d812e0693),
    );
  }
  createAllFurnis() {
    this._allFurnis = [];
    let e = this._roomEvents.sessionDataManager,
      r = e.getAllFloorItemDatas(),
      t = e.getAllWallItemDatas();
    for (let s of r) {
      let o = s.fullName;
      if (o === "") continue;
      let d = s.localizedName;
      (d === "" && (d = o), this._allFurnis.push(new ItemTypeTableObject(new Vb(!1, s.id, null), d, o)));
    }
    let i = -1;
    for (let s of t) {
      if (s.fullName === "") continue;
      if (s.className === a.TYPE_POSTER) {
        i = s.id;
        continue;
      }
      let o = s.localizedName;
      (o === "" && (o = s.fullName),
        this._allFurnis.push(new ItemTypeTableObject(new Vb(!0, s.id, null), o, s.fullName)));
    }
    if (i !== -1)
      for (let s of a.POSTER_IDS) {
        let o = `${a.TYPE_POSTER}*${s}`,
          d = `poster_${s}_name`,
          c = this._roomEvents.localization.getLocalization(d, d);
        this._allFurnis.push(new ItemTypeTableObject(new Vb(!0, i, String(s)), c, o));
      }
    this._allFurnis.sort((s, o) => s.localizedName.localeCompare(o.localizedName));
  }
  _rb3152e3fb34ee0() {
    this.var_778 = new jn(this._roomEvents.windowManager, this.var_1216, !1, !1);
    let e = [
      new TableColumn(
        a.COL_FURNI_NAME,
        "${wiredcontracts.element.itemtype.col.furni_name}",
        0.5,
        nr.const_27,
      ),
      new TableColumn(
        a.COL_FURNI_CODE,
        "${wiredcontracts.element.itemtype.col.furni_code}",
        0.3,
        nr.const_27,
      ),
      new TableColumn(
        a.COL_FURNI_TYPE,
        "${wiredcontracts.element.itemtype.col.furni_type}",
        0.2,
        nr.const_27,
      ),
    ];
    (this.var_778.initialize(e, !0, !0),
      (this.var_778._r2ec93dbdb64036 = this._ra820f6535c328f),
      this.var_778._rb800e4dd98c360(this._allFurnis),
      (this.var_2266 = !0));
  }
  _ra820f6535c328f = n((e) => {
    e != null && (this.selectedItem = e._r4407b0ae32cd3e);
  }, "_ra820f6535c328f");
  get selectedItem() {
    return this.var_154;
  }
  get var_868() {
    if (this.var_154 == null) return null;
    let e = this._roomEvents.sessionDataManager;
    return this.var_154.isWallItem
      ? e.getWallItemData(this.var_154.typeId)
      : e.getFloorItemData(this.var_154.typeId);
  }
  resetInteractions() {
    ((this._r66526b0d5ff393 = !0),
      (this.toLowerCase.text = ""),
      (this._r66526b0d5ff393 = !1),
      this.updateFilters(),
      this.var_778._r5158179f7612c9());
  }
  _r01cd0c41519609 = n((...e) => {
    this._r66526b0d5ff393 || this.updateFilters();
  }, "_r01cd0c41519609");
  updateFilters() {
    let e,
      r = this.toLowerCase.text.toLowerCase();
    if (r.length < 2) {
      if (this.var_2266) return;
      ((e = this._allFurnis), (this.var_2266 = !0));
    } else {
      let t = r.split(" ");
      e = [];
      e: for (let i of this._allFurnis) {
        for (let s of t) if (!i._rf1c449184ac3f1(s)) continue e;
        e.push(i);
      }
      this.var_2266 = !1;
    }
    (this.var_778._rb800e4dd98c360(e), this.refreshShowCount());
  }
  set selectedItem(e) {
    if (((this.var_154 = e), this._re36b7896200bf5(e), e == null)) {
      this.var_1100.text = "";
      return;
    }
    let r = this._roomEvents.sessionDataManager,
      t = e.isWallItem ? r.getWallItemData(e.typeId) : r.getFloorItemData(e.typeId);
    if (t == null) {
      ((this.var_154 = null), (this.var_1100.text = ""), this._re36b7896200bf5(null));
      return;
    }
    if (e.isWallItem && t.className === a.TYPE_POSTER) {
      this.var_1100.text = `${a.TYPE_POSTER}*${e.legacyPosterId}`;
      return;
    }
    this.var_1100.text = t.fullName;
  }
  addListener(e) {
    this._listeners.push(e);
  }
  _re36b7896200bf5(e) {
    for (let r of this._listeners) r(e);
  }
  get window() {
    return this.var_764;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this.var_764.width = e),
      this.var_1100.resizeToWidth(e),
      this.toLowerCase.resizeToWidth(e),
      this.var_1495.resizeToWidth(e));
    let r = this.var_1216.width,
      t = e;
    r !== t && ((this.var_1216.width = t), this.var_778._r53cd7a4ea0ab9c());
  }
  get childPresets() {
    return [this.var_1100, this.toLowerCase, this.var_1495];
  }
  dispose() {
    this.disposed ||
      (this.var_778.dispose(),
      (this.var_778 = null),
      super.dispose(),
      this.var_764.dispose(),
      (this.var_764 = null),
      (this._allFurnis = null),
      (this.var_1100 = null),
      (this.toLowerCase = null),
      (this.var_1216 = null),
      (this.var_154 = null),
      (this.var_1495 = null),
      (this._listeners = null));
  }
}
