// Extracted from HabboAirLauncher.deobf.js, line 260035.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/search/SearchView.as
// Obfuscated name: _i5334802f4cc3b6

class a {
  static {
    n(this, "SearchView");
  }
  static _r95c0d25eae0036 = [
    b_.ANYTHING,
    b_.ROOMNAME,
    b_.OWNER,
    b_.TAG,
    b_.GROUP,
  ];
  static _r866c23210f60e0 = [0, 2, 1, 3, 4, 0];
  static INPUT_PLACEHOLDER_TEXTCOLOR = 10461087;
  static INPUT_TEXTCOLOR = 0;
  _navigator;
  _container = null;
  var_30 = null;
  var_2710 = null;
  var_2091;
  constructor(e) {
    ((this._navigator = e),
      (this.var_2091 = this._navigator.localization.getLocalizationWithParams(
        "navigator.filter.input.placeholder",
        "filter rooms by...",
      )));
  }
  set container(e) {
    ((this._container = e),
      (this.var_2710 = this._container.findChildByName("filter_type_drop_menu")),
      (this.var_30 = this._container.findChildByName("search_input")),
      this.var_30.addEventListener(sr.const_900, this._rb69cd1cbeabf61.bind(this)),
      this.var_30.addEventListener(y.WINDOW_EVENT_CHANGE, this._rd4b3a1897d9fff.bind(this)),
      this.var_30.addEventListener(y.const_962, this._r4b8844fb4ce454.bind(this)));
    let r = this._container.findChildByName("clear_search_button");
    (r && r.addEventListener(u.CLICK, this.onClearSearch.bind(this)), this.clear());
  }
  clear() {
    (this.setInputToFilterPlaceHolder(),
      this.var_2710 && (this.var_2710.selection = b_.DEFAULT),
      this._container && (this._container.findChildByName("refreshButtonContainer").visible = !1));
  }
  setTextAndSearchModeFromFilter(e, r = "") {
    if (!this.var_30 || !this.var_2710 || !this._container) return;
    let t = b_.filterInInput(e);
    (t !== 0
      ? ((this.var_2710.selection = a._r866c23210f60e0[t]),
        (this.var_30.caption = e.substring(b_.FILTER_PREFIX[t].length)))
      : ((this.var_30.caption = e), (this.var_2710.selection = b_.DEFAULT)),
      r !== "" && r !== this.var_2091
        ? ((this.var_30.caption = r), this._rba363a50f8ecbd(!0))
        : this.var_30.caption === ""
          ? this.setInputToFilterPlaceHolder()
          : this._rba363a50f8ecbd(!1));
    let i = this._container.findChildByName("search.clear.icon");
    this.var_30.caption.length !== 0 && this.var_30.caption !== this.var_2091
      ? ((this._container.findChildByName("refreshButtonContainer").visible = !0),
        (i.assetUri = "icons_close"))
      : ((this._container.findChildByName("refreshButtonContainer").visible = !1),
        (i.assetUri = "common_small_pen"));
  }
  get currentInput() {
    return this.var_30?.caption ?? this.var_2091;
  }
  onClearSearch(e = null) {
    if (!this.var_30 || !this._container) return;
    (this.var_30.focus(), (this.var_30.caption = ""));
    let r = this._container.findChildByName("search.clear.icon");
    r.assetUri = "common_small_pen";
  }
  _rb69cd1cbeabf61(e) {
    e.keyCode === Fi.ENTER &&
      this._navigator._r863f575e329672 &&
      this._navigator.performSearch(
        this._navigator._r863f575e329672.var_485,
        this.onInputFocused(),
      );
  }
  onInputFocused() {
    return !this.var_2710 || !this.var_30
      ? ""
      : b_.FILTER_PREFIX[a._r95c0d25eae0036[this.var_2710.selection]] +
          this.var_30.caption;
  }
  setInputToFilterPlaceHolder() {
    this.var_30 &&
      (this._rba363a50f8ecbd(!0), (this.var_30.caption = this.var_2091));
  }
  _r4b8844fb4ce454(e) {
    this.var_30 &&
      (this._rba363a50f8ecbd(!1),
      this.var_30.caption === this.var_2091 && (this.var_30.caption = ""));
  }
  _rba363a50f8ecbd(e) {
    this.var_30 && (this.var_30.textColor = e ? a.INPUT_PLACEHOLDER_TEXTCOLOR : a.INPUT_TEXTCOLOR);
  }
  _rd4b3a1897d9fff(e) {}
}
