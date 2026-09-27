// Extracted from HabboAirLauncher.deobf.js, line 252273.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/tabpagedecorators/MyRoomsTabPageDecorator.as
// Obfuscated name: _id0057c73eaaa21

class a {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "MyRoomsTabPageDecorator");
  }
  var_150 = null;
  refreshCustomContent(e) {
    let r = e.getChildByName("me_header");
    r != null &&
      ((this.var_150 == null || this.var_150.disposed) &&
        ((this.var_150 = r.findChildByName("meSubNavi")),
        this._r9625cdd21dac97(),
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
    let r = e.getChildByName("me_footer");
    (r?.findChildByName("create_room_but")?.addEventListener(u.CLICK, this.onCreateRoomClick),
      r != null && (this._navigator.refreshButton(r, "create_room", !0, null, 0), (r.visible = !0)));
  }
  _rafc4a04f15e23f() {
    this.startSearch();
  }
  get filterCategory() {
    return this.var_150 == null || this.var_150.disposed
      ? null
      : this.var_150.enumerateSelection()[this.var_150.selection];
  }
  _r2683ac06d69911(e) {
    if (this.var_150 == null || this.var_150.disposed) return;
    let r = a._r10557026cb9383();
    for (let t = 0; t < this.var_150.numMenuItems; t++)
      if (r[t]?.[0] === e) {
        this.var_150.selection = t;
        return;
      }
    this.var_150.selection = 0;
  }
  _r2b158c99a8d6d6(e) {
    return e;
  }
  onCreateRoomClick = n((e) => {
    this._navigator.send(new UnkMessageComposer_0args_2d3a5a());
  }, "onCreateRoomClick");
  _r9625cdd21dac97() {
    this.var_150 == null ||
      this.var_150.disposed ||
      (this.var_150.populate(a._r10557026cb9383().map((e) => this._navigator.getText(e[1]))),
      (this.var_150.selection = 0));
  }
  onFilterSelected = n((...e) => {
    this.startSearch();
    let t = e[0].target;
    if (t != null) {
      let i = t;
      this._navigator.trackNavigationDataPoint(i.enumerateSelection()[i.selection], "category.view");
    }
  }, "onFilterSelected");
  startSearch() {
    let e =
      this.var_150 == null || this.var_150.disposed ? 0 : this.var_150.selection;
    this._navigator._r970f774dfe2577?.startSearch(We.MyRoomsTabPageDecorator, this._r5310b451661d2d(e));
  }
  _r5310b451661d2d(e) {
    let r = a._r10557026cb9383();
    return e <= r.length ? r[e][0] : r[0][0];
  }
  static _r10557026cb9383() {
    return [
      [We._r8a4642632c386a, "navigator.navisel.myrooms"],
      [We._r9f66f4bb0f69b3, "navigator.navisel.wherearemyfriends"],
      [We._rd6fb6dfca67725, "navigator.navisel.myfriendsrooms"],
      [We.const_1090, "navigator.navisel.roomswithrights"],
      [We.SEARCHTYPE_MY_GUILD_BASES, "navigator.navisel.mygroups"],
      [We._r94854e4c2ed9da, "navigator.navisel.myfavourites"],
      [We.const_200, "navigator.navisel.visitedrooms"],
      [We.const_1369, ""],
    ];
  }
}
