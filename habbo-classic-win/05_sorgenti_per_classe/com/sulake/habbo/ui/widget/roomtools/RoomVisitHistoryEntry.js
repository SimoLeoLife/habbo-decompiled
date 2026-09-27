// Extracted from HabboAirLauncher.deobf.js, line 326345.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomVisitHistoryEntry.as
// Obfuscated name: _id7115ede480faf

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
