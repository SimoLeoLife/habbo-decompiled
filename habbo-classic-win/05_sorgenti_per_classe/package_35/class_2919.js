// Estratto da HabboAirLauncher.deobf.js, riga 93634.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_35/class_2919.as
// Nome offuscato: _i6fa467514343d0

class {
    static {
      n(this, "class_2919");
    }
    static {
      $Dr(this, "class_2919");
    }
    _rf0f533bbba828b = null;
    _rede01f596d701b = null;
    flush() {
      return ((this._rf0f533bbba828b = null), (this._rede01f596d701b = null), !0);
    }
    parse(e) {
      return (
        (this._rf0f533bbba828b = e.readString()),
        (this._rede01f596d701b = e.readString()),
        !0
      );
    }
    get _r53f605554bc6dd() {
      return this._rf0f533bbba828b;
    }
    get _r69986912642341() {
      return this._rede01f596d701b;
    }
  }
