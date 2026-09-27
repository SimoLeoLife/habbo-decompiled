// Estratto da HabboAirLauncher.deobf.js, riga 252362.

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "_i2c32c6bac91913");
  }
  refreshCustomContent(e) {}
  tabPageDecorator() {}
  refreshFooter(e) {
    this._navigator.officialRoomEntryManager?.refreshAdFooter(e);
  }
  _rafc4a04f15e23f() {
    this._navigator._r970f774dfe2577?.startSearch(
      We.OfficialTabPageDecorator,
      We.SEARCHTYPE_OFFICIALROOMS,
      "-1",
      4,
    );
  }
  get filterCategory() {
    return null;
  }
  _r2683ac06d69911(e) {}
  _r2b158c99a8d6d6(e) {
    return e;
  }
}
