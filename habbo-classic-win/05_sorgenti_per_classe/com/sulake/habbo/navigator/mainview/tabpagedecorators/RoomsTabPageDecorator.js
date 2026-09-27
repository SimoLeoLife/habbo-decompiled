// Extracted from HabboAirLauncher.deobf.js, line 252390.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/tabpagedecorators/RoomsTabPageDecorator.as
// Obfuscated name: _i972d8a1ed8b495

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "RoomsTabPageDecorator");
  }
  var_150 = null;
  getText = !1;
  refreshCustomContent(e) {
    let r = e.getChildByName("rooms_header");
    r != null &&
      ((this.var_150 == null || this.var_150.disposed) &&
        ((this.var_150 = r.findChildByName("roomCtgFilter")),
        this.prepareRoomCategories(),
        this.var_150?.addEventListener(y.const_238, this.onFilterSelected)),
      (r.visible = !0));
  }
  tabPageDecorator() {
    this.var_150 != null &&
      !this.var_150.disposed &&
      (this.var_150.removeEventListener(y.const_238, this.onFilterSelected),
      (this.var_150.selection = this._ra785f907ebf633),
      this.var_150.addEventListener(y.const_238, this.onFilterSelected));
  }
  refreshFooter(e) {
    this._navigator.officialRoomEntryManager?.refreshAdFooter(e);
  }
  _rafc4a04f15e23f() {
    this.startSearch();
  }
  get filterCategory() {
    return this.var_150 == null || this.var_150.disposed
      ? null
      : this.var_150.enumerateSelection()[this.var_150.selection];
  }
  _r2683ac06d69911(e) {}
  _r2b158c99a8d6d6(e) {
    return e;
  }
  prepareRoomCategories() {
    if (this.var_150 == null || this.var_150.disposed) return;
    let e = [
      this._navigator.getText("navigator.navisel.popularrooms"),
      this._navigator.getText("navigator.navisel.highestscore"),
    ];
    ((this.getText =
      this._navigator.getProperty("navigator.2014.personalized.navigator") === "true"),
      this.getText && e.push(this._navigator.getText("navigator.navisel.recommendedrooms")));
    for (let r of this._navigator.data._r9da3e74587beda) e.push(r.nodeName);
    (this.var_150.populate(e), (this.var_150.selection = this._ra785f907ebf633));
  }
  get _ra785f907ebf633() {
    return this.getText ? 2 : 0;
  }
  onFilterSelected = n(() => {
    this.startSearch();
  }, "onFilterSelected");
  startSearch() {
    let e =
      this.var_150 != null && !this.var_150.disposed
        ? this.var_150.selection
        : this._ra785f907ebf633;
    if (e === 0)
      this._navigator._r970f774dfe2577?.startSearch(We._r3788a24f86509c, We._r84d8927b802156);
    else if (e === 1)
      this._navigator._r970f774dfe2577?.startSearch(We._r3788a24f86509c, We._r67c29729e7800e);
    else if (e === 2 && this.getText)
      this._navigator._r970f774dfe2577?.startSearch(We._r3788a24f86509c, We.SEARCHTYPE_RECOMMENDED_ROOMS);
    else {
      let r = 2;
      this.getText && r++;
      let t = this._navigator.data._r9da3e74587beda[e - r];
      if (t == null) return;
      this._navigator._r970f774dfe2577?.startSearch(
        We._r3788a24f86509c,
        We._r84d8927b802156,
        `${t.nodeId}`,
      );
    }
    this.var_150 != null &&
      !this.var_150.disposed &&
      this._navigator.trackNavigationDataPoint(
        this.var_150.enumerateSelection()[this.var_150.selection],
        "category.view",
      );
  }
}
