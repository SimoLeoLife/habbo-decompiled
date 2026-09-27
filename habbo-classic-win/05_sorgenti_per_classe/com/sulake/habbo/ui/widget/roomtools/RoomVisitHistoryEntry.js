// Estratto da HabboAirLauncher.deobf.js, riga 326345.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomVisitHistoryEntry.as
// Nome offuscato: _id7115ede480faf

class a {
  static {
    n(this, "RoomVisitHistoryEntry");
  }
  _flatId;
  _roomName;
  constructor(e, r) {
    ((this._flatId = e), (this._roomName = r));
  }
  get flatId() {
    return this._flatId;
  }
  get roomName() {
    return this._roomName;
  }
  set roomName(e) {
    this._roomName = e;
  }
  copy() {
    return new a(this._flatId, this._roomName);
  }
}
