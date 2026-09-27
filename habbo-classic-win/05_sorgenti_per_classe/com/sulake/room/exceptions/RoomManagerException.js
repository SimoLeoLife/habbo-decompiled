// Estratto da HabboAirLauncher.deobf.js, riga 290488.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/exceptions/RoomManagerException.as

class extends Error {
  static {
    n(this, "RoomManagerException");
  }
  constructor(e = "", r = 0) {
    (super(e), (this.name = "RoomManagerException"), (this.id = r));
  }
}
