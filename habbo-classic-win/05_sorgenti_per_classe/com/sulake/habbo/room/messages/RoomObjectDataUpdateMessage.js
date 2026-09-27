// Estratto da HabboAirLauncher.deobf.js, riga 110575.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectDataUpdateMessage.as
// Nome offuscato: _iac35d5a92c3f85

class {
    static {
      n(this, "RoomObjectDataUpdateMessage");
    }
    static {
      git(this, "RoomObjectDataUpdateMessage");
    }
    _r109f8ac31651c7 = !1;
    var_3191 = 0;
    _r415bbcf1cba022 = new class_3437();
    get _rdf3133a4638fcd() {
      return this._r415bbcf1cba022;
    }
    get _r1238571df4d291() {
      return this._r109f8ac31651c7;
    }
    get extra() {
      return this.var_3191;
    }
    flush() {
      return (this._r415bbcf1cba022.flush(), (this._r109f8ac31651c7 = !1), (this.var_3191 = 0), !0);
    }
    parse(e) {
      return (
        this._r415bbcf1cba022.parse(e),
        (this._r109f8ac31651c7 = e.readBoolean()),
        (this.var_3191 = e.readInteger()),
        !0
      );
    }
  }
