// Estratto da HabboAirLauncher.deobf.js, riga 252199.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/tabpagedecorators/EventsTabPageDecorator.as
// Nome offuscato: _if0813cc86e12d5

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "EventsTabPageDecorator");
  }
  var_150 = null;
  refreshCustomContent(e) {
    let r = e.getChildByName("room_ad_header");
    r != null &&
      ((this.var_150 == null || this.var_150.disposed) &&
        ((this.var_150 = r.getChildByName("roomAdFilter")),
        this.prepareFilter(),
        this.var_150?.addEventListener(y.const_238, this.onFilterSelected)),
      (r.visible = !0));
  }
  tabPageDecorator() {
    this.var_150 != null &&
      !this.var_150.disposed &&
      (this.var_150.removeEventListener(y.const_238, this.onFilterSelected),
      (this.var_150.selection = 0),
      this.var_150.addEventListener(y.const_238, this.onFilterSelected));
  }
  refreshFooter(e) {
    let r = e.getChildByName("room_ads_footer");
    (r?.findChildByName("get_event_but")?.addEventListener(u.CLICK, this.onGetEventClick),
      r != null && (r.visible = !0));
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
  prepareFilter() {
    this.var_150 == null ||
      this.var_150.disposed ||
      (this.var_150.populate([
        this._navigator.getText("navigator.roomad.topads"),
        this._navigator.getText("navigator.roomad.newads"),
      ]),
      (this.var_150.selection = 0));
  }
  onFilterSelected = n(() => {
    this.startSearch();
  }, "onFilterSelected");
  onGetEventClick = n((e) => {
    this._navigator._r95e9ef312eb388();
  }, "onGetEventClick");
  startSearch() {
    let e =
      this.var_150 != null && !this.var_150.disposed
        ? this._r73db789de6bd4a(this.var_150.selection)
        : We.const_486;
    this._navigator._r970f774dfe2577?.startSearch(We.EventsTabPageDecorator, e);
  }
  _r73db789de6bd4a(e) {
    switch (e) {
      case 0:
        return We.const_486;
      case 1:
        return We.const_1233;
      default:
        return 0;
    }
  }
}
