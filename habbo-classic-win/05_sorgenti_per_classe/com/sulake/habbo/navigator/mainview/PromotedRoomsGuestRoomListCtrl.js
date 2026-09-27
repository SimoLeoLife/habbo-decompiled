// Estratto da HabboAirLauncher.deobf.js, riga 255365.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/PromotedRoomsGuestRoomListCtrl.as
// Nome offuscato: _i2fccd50df58084

class extends GuestRoomListCtrl {
  static {
    n(this, "PromotedRoomsGuestRoomListCtrl");
  }
  var_163 = null;
  constructor(e) {
    super(e, -6, !1);
  }
  set category(e) {
    this.var_163 = e;
  }
  getRooms() {
    return this.var_163?.rooms ?? [];
  }
  beforeEnterRoom(e) {
    this.var_163 != null &&
      this.navigator?.data != null &&
      (this.navigator.data._r82660da00997c0 = new RoomSessionTags(this.var_163.code, `${e + 2}`));
  }
}
