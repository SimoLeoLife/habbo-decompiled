// Extracted from HabboAirLauncher.deobf.js, line 312247.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chooser/furni/FurniView.as
// Obfuscated name: _id7abb0e422b7ec

class a {
  constructor(e, r) {
    this.var_17 = e;
    this.var_606 = r;
  }
  static {
    n(this, "FurniView");
  }
  static COLUMN_FURNI_NAME = "name";
  static COLUMN_FURNI_OWNER = "owner";
  static COLUMN_ID = "id";
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
    (this._window == null && this.createWindow(), this.constructOwners(), this.populateWithFilters());
  }
  createWindow() {
    let e = this.var_17.assets?.getAssetByName("new_furni_chooser_view");
    e?.content != null &&
      ((this._window = this.var_17.windowManager?.buildFromXML(e.content)),
      this._window != null &&
        ((this._window.caption = this.var_606),
        this.createTable(),
        this.closeButton?.addEventListener(u.CLICK, this.onClose),
        this.searchTextInput?.addEventListener(y.WINDOW_EVENT_CHANGE, this._r01cd0c41519609),
        this.usernameDropDown?.addEventListener(y.const_238, this._r5cf818d0d90ae3),
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
  _r5cf818d0d90ae3 = n((e) => {
    this._r66526b0d5ff393 || this.populateWithFilters();
  }, "_r5cf818d0d90ae3");
  _r01cd0c41519609 = n((e) => {
    if (this._r66526b0d5ff393 || this.searchTextInput == null) return;
    let r = this.searchTextInput.text ?? "";
    (this.clearButton != null && (this.clearButton.visible = r.length > 0),
      this.textPlaceholder != null && (this.textPlaceholder.visible = r.length === 0),
      this.populateWithFilters());
  }, "_r01cd0c41519609");
  populateWithFilters() {
    let e = (this.searchTextInput?.text ?? "").toLowerCase().split(" "),
      r = this.usernameDropDown?.selection ?? 0,
      t = this.usernameDropDown?.enumerateSelection() ?? [],
      i = r > 0 ? String(t[r]) : null,
      s = [];
    e: for (let o of this.var_17.items ?? []) {
      for (let d of e) if (o.lowerCaseName.indexOf(d) === -1) continue e;
      (i != null && o.owner !== i) || s.push(o);
    }
    (this.populate(s),
      this.amountIndicator != null &&
        (this.amountIndicator.text =
          this.var_17.localizations?.getLocalizationWithParams(
            "new_furni_chooser.amount_indicator",
            "",
            "amount",
            s.length.toString(),
          ) ?? ""));
  }
  constructOwners() {
    let e = this.usernameDropDown;
    if (e == null) return;
    this._r66526b0d5ff393 = !0;
    let r = new Set(),
      t = [];
    t.push(this.localize("new_furni_chooser.owner_selector.default"));
    for (let s of this.var_17.items ?? [])
      r.has(s.owner) || (t.push(s.owner ?? ""), r.add(s.owner));
    let i = e.enumerateSelection();
    ((e.numMenuItems !== t.length || (e.numMenuItems === 1 && String(i[0] ?? "") === "")) &&
      (e.populate(t),
      (e.selection = 0),
      t.length <= 2 ? (e.disable(), (e.blend = 0.5)) : (e.enable(), (e.blend = 1))),
      (this._r66526b0d5ff393 = !1));
  }
  populate(e) {
    let r = [];
    for (let t of e) r.push(new FurniChooserTableObject(t));
    this.var_778?._rb800e4dd98c360(r);
  }
  createTable() {
    let e = this.tableViewContainer;
    if (e == null || this.var_17.windowManager == null) return;
    this.var_778 = new jn(this.var_17.windowManager, e, !0);
    let r = [
      new TableColumn(
        a.COLUMN_FURNI_NAME,
        this.localize("new_furni_chooser.col.name"),
        0.5,
        nr.const_27,
      ),
      new TableColumn(
        a.COLUMN_FURNI_OWNER,
        this.localize("new_furni_chooser.col.owner"),
        0.25,
        nr.const_27,
      ),
      new TableColumn(
        a.COLUMN_ID,
        this.localize("new_furni_chooser.col.id"),
        0.25,
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
  get usernameDropDown() {
    return this._window?.findChildByName("username_dropdown");
  }
  get clearButton() {
    return this._window?.findChildByName("clear_button");
  }
  get amountIndicator() {
    return this._window?.findChildByName("amount_indicator");
  }
}
