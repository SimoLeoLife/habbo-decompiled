// Estratto da HabboAirLauncher.deobf.js, riga 80329.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/utils/RoomId.as
// Nome offuscato: _ieaa295fe303059

class a {
  static {
    n(this, "RoomId");
  }
  static PREVIEW_ROOM_ID_BASE = 2147418112;
  static _rceb3d67cf4572e(e) {
    return (e & 65535) + a.PREVIEW_ROOM_ID_BASE;
  }
  static _rd190b5156b4615(e) {
    return e >= a.PREVIEW_ROOM_ID_BASE;
  }
}
