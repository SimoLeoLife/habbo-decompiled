// Estratto da HabboAirLauncher.deobf.js, riga 126039.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_20/class_3201.as
// Nome offuscato: _ie9d00a56eaf91f

class {
    static {
      n(this, "class_3201");
    }
    static {
      syt(this, "class_3201");
    }
    _r75d4d9dfb4c9bd = 0;
    _realName = "";
    get _r28f2ec85cc1b60() {
      return this._r75d4d9dfb4c9bd;
    }
    get realName() {
      return this._realName;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._r75d4d9dfb4c9bd = e.readInteger()),
        (this._realName = e.readString()),
        !0
      );
    }
  }
