// Estratto da HabboAirLauncher.deobf.js, riga 312523.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chooser/users/UsersView.as
// Nome offuscato: _ic77b6caa41c3ef

class a {
  constructor(e, r) {
    this.var_17 = e;
    this.var_606 = r;
  }
  static {
    n(this, "UsersView");
  }
  static COLUMN_USER_NAME = "name";
  static COLUMN_TYPE = "type";
  var_778 = null;
  _window = null;
  _r66526b0d5ff393 = !1;
  dispose() {
    (this._window?.dispose(), (this._window = null), (this.var_778 = null));
  }
  isOpen() {
    return this._window != null && this._window.visible;
  }
  _rffc4c0fb753b54() {
    (this._window == null && this.createWindow(), this.populateWithFilters());
  }
  createWindow() {
    let e = this.var_17.assets?.getAssetByName("new_user_chooser_view");
    e?.content != null &&
      ((this._window = this.var_17.windowManager?.buildFromXML(e.content)),
      this._window != null &&
        ((this._window.caption = this.var_606),
        this.createTable(),
        this.closeButton?.addEventListener(u.CLICK, this.onClose),
        this.searchTextInput?.addEventListener(y.WINDOW_EVENT_CHANGE, this._r01cd0c41519609),
        this.typeDropdown?.addEventListener(y.const_238, this._rd7c7347a7cbd86),
        this.clearButton?.addEventListener(u.CLICK, this._r3bc5d77876bdf1),
        this._window.parent != null &&
          ((this._window.x = this._window.parent.width - this._window.width - 10),
          (this._window.y = 10))));
  }
  _r3bc5d77876bdf1 = n((e) => {
    this._r66526b0d5ff393 ||
      this.searchTextInput == null ||
      ((this.searchTextInput.text = ""), this._r01cd0c41519609(null));
  }, "_r3bc5d77876bdf1");
  _rd7c7347a7cbd86 = n((e) => {
    this._r66526b0d5ff393 || this.populateWithFilters();
  }, "_rd7c7347a7cbd86");
  _r01cd0c41519609 = n((e) => {
    if (this._r66526b0d5ff393 || this.searchTextInput == null) return;
    let r = this.searchTextInput.text ?? "";
    (this.clearButton != null && (this.clearButton.visible = r.length > 0),
      this.textPlaceholder != null && (this.textPlaceholder.visible = r.length === 0),
      this.populateWithFilters());
  }, "_r01cd0c41519609");
  populateWithFilters() {
    let e = (this.searchTextInput?.text ?? "").toLowerCase(),
      r = this.typeDropdown?.selection ?? 0;
    r === 3 && (r = 4);
    let t = [];
    for (let i of this.var_17.items ?? [])
      (e.length > 0 && i.lowerCaseName.indexOf(e) === -1) || (r > 0 && i.type !== r) || t.push(i);
    (this.populate(t),
      this.amountIndicator != null &&
        (this.amountIndicator.text =
          this.var_17.localizations?.getLocalizationWithParams(
            "new_user_chooser.amount_indicator",
            "",
            "amount",
            t.length.toString(),
          ) ?? ""));
  }
  populate(e) {
    let r = [];
    for (let t of e) r.push(new UsersChooserTableObject(t));
    this.var_778?._rb800e4dd98c360(r);
  }
  createTable() {
    let e = this.tableViewContainer;
    if (e == null || this.var_17.windowManager == null) return;
    this.var_778 = new jn(this.var_17.windowManager, e, !0);
    let r = [
      new TableColumn(
        a.COLUMN_USER_NAME,
        this.localize("new_user_chooser.col.name"),
        0.65,
        nr.const_27,
      ),
      new TableColumn(
        a.COLUMN_TYPE,
        this.localize("new_user_chooser.col.type"),
        0.35,
        nr.const_27,
      ),
    ];
    (this.var_778.initialize(r, !0, !0),
      (this.var_778._r2ec93dbdb64036 = this._ra820f6535c328f));
  }
  hide() {
    this._window != null &&
      (this.var_778?.dispose(),
      (this.var_778 = null),
      this._window.dispose(),
      (this._window = null));
  }
  _ra820f6535c328f = n((e) => {
    let r = e?.chooserItem ?? null;
    r != null && this.var_17.choose(r.id, r.category);
  }, "_ra820f6535c328f");
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  localize(e) {
    return this.var_17.localizations?.getLocalization(e, e) ?? e;
  }
  get closeButton() {
    return this._window?.findChildByTag("close") ?? null;
  }
  get tableViewContainer() {
    return this._window?.findChildByName("table_container");
  }
  get textPlaceholder() {
    return this._window?.findChildByName("search_placeholder");
  }
  get searchTextInput() {
    return this._window?.findChildByName("text_input");
  }
  get typeDropdown() {
    return this._window?.findChildByName("type_dropdown");
  }
  get clearButton() {
    return this._window?.findChildByName("clear_button");
  }
  get amountIndicator() {
    return this._window?.findChildByName("amount_indicator");
  }
}
