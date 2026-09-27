// Estratto da HabboAirLauncher.deobf.js, riga 107336.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/SharedGlobalPlaceholder.as
// Nome offuscato: _i6d212f0cf9974c

class {
    static {
      n(this, "SharedGlobalPlaceholder");
    }
    static {
      jJr(this, "SharedGlobalPlaceholder");
    }
    var_2440;
    _roomName;
    _placeholderName;
    constructor(e) {
      ((this.var_2440 = e.readInteger()),
        (this._roomName = e.readString()),
        (this._placeholderName = e.readString()));
    }
    get roomId() {
      return this.var_2440;
    }
    get roomName() {
      return this._roomName;
    }
    get placeholderName() {
      return this._placeholderName;
    }
  }
