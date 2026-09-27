// Estratto da HabboAirLauncher.deobf.js, riga 126490.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectAvatarHabbiconUpdateMessage.as
// Nome offuscato: _iacf370a4464f53

class {
    static {
      n(this, "RoomObjectAvatarHabbiconUpdateMessage");
    }
    static {
      Yyt(this, "RoomObjectAvatarHabbiconUpdateMessage");
    }
    var_1429 = 0;
    _rd5aac9508d77bd = 0;
    get habbiconId() {
      return this.var_1429;
    }
    get _rf4d14ad73f880a() {
      return this._rd5aac9508d77bd;
    }
    flush() {
      return ((this.var_1429 = 0), (this._rd5aac9508d77bd = 0), !0);
    }
    parse(e) {
      return (
        (this.var_1429 = e.readInteger()),
        (this._rd5aac9508d77bd = e.readInteger()),
        !0
      );
    }
  }
