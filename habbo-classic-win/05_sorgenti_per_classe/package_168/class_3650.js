// Estratto da HabboAirLauncher.deobf.js, riga 103725.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3650.as
// Nome offuscato: _iaf6b66c383a217

class {
    static {
      n(this, "class_3650");
    }
    static {
      YYr(this, "class_3650");
    }
    var_2440 = -1;
    _roomName = "";
    var_2334 = 0;
    get roomId() {
      return this.var_2440;
    }
    get roomName() {
      return this._roomName;
    }
    get messageCount() {
      return this.var_2334;
    }
    flush() {
      return ((this.var_2440 = -1), (this._roomName = ""), (this.var_2334 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_2440 = e.readInteger()),
        (this._roomName = e.readString()),
        (this.var_2334 = e.readInteger()),
        !0
      );
    }
  }
