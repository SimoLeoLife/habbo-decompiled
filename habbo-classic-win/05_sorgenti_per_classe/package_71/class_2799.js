// Estratto da HabboAirLauncher.deobf.js, riga 100185.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2799.as
// Nome offuscato: _ia06120d3835951

class {
    static {
      n(this, "class_2799");
    }
    static {
      izr(this, "class_2799");
    }
    var_3632 = 0;
    var_5273 = 0;
    _status = 0;
    _habboGroupName = "";
    get roomIndex() {
      return this.var_3632;
    }
    get habboGroupId() {
      return this.var_5273;
    }
    get status() {
      return this._status;
    }
    get _rc51a040212eb56() {
      return this._habboGroupName;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3632 = e.readInteger()),
        (this.var_5273 = e.readInteger()),
        (this._status = e.readInteger()),
        (this._habboGroupName = e.readString()),
        !0
      );
    }
  }
