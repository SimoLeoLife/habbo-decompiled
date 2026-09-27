// Extracted from HabboAirLauncher.deobf.js, line 252478.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/tabpagedecorators/SearchTabPageDecorator.as
// Obfuscated name: _ib8cae57a34e22f

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "SearchTabPageDecorator");
  }
  refreshCustomContent(e) {
    this.refreshRoomCompetitionsHeader(e);
  }
  tabPageDecorator() {}
  refreshFooter(e) {}
  _rafc4a04f15e23f() {
    this._navigator._r970f774dfe2577?.open();
  }
  get filterCategory() {
    return null;
  }
  _r2683ac06d69911(e) {}
  _r2b158c99a8d6d6(e) {
    return e;
  }
  refreshRoomCompetitionsHeader(e) {
    let r = e.getChildByName("room_competitions_header");
    if (r == null || this._navigator.data._r296e1461c77065 == null) {
      r != null && (r.visible = !1);
      return;
    }
    let t = this._navigator.data._r296e1461c77065._r4462e1d7892a93,
      i = this._navigator.data._r296e1461c77065._r3afa55440b125a,
      s = t + 1;
    if (i < 2) {
      r.visible = !1;
      return;
    }
    ((r.visible = !0),
      this._navigator._r43eae9731f5b27("navigator.roomcompetitionspager", "page", `${s}`),
      this._navigator._r43eae9731f5b27("navigator.roomcompetitionspager", "total", `${i}`));
    let o = r.findChildByName("next_button"),
      d = r.findChildByName("prev_button");
    (o != null && ((o.visible = s < i), (o.procedure = this._rd12b426810e416)),
      d != null && ((d.visible = s > 1), (d.procedure = this._r34095731df9405)));
  }
  _rd12b426810e416 = n((e, r) => {
    e.type === u.CLICK &&
      this._navigator.data._r296e1461c77065 != null &&
      this._navigator.performCompetitionRoomsSearch(
        this._navigator.data._r296e1461c77065._r60d0785b4a5490,
        this._navigator.data._r296e1461c77065._r4462e1d7892a93 + 1,
      );
  }, "_rd12b426810e416");
  _r34095731df9405 = n((e, r) => {
    e.type === u.CLICK &&
      this._navigator.data._r296e1461c77065 != null &&
      this._navigator.performCompetitionRoomsSearch(
        this._navigator.data._r296e1461c77065._r60d0785b4a5490,
        this._navigator.data._r296e1461c77065._r4462e1d7892a93 - 1,
      );
  }, "_r34095731df9405");
}
