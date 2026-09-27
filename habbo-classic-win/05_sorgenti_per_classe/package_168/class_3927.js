// Estratto da HabboAirLauncher.deobf.js, riga 103896.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3927.as
// Nome offuscato: _ic2b146b44c7c9e

class {
    static {
      n(this, "class_3927");
    }
    static {
      dKr(this, "class_3927");
    }
    var_2287 = 0;
    var_4944 = "";
    var_5154 = 0;
    var_5656 = 0;
    _state = 0;
    get furniId() {
      return this.var_2287;
    }
    get videoId() {
      return this.var_4944;
    }
    get _rf2ff4684e586e5() {
      return this.var_5154;
    }
    get _ra47068799d586b() {
      return this.var_5656;
    }
    get state() {
      return this._state;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_2287 = e.readInteger()),
        (this.var_4944 = e.readString()),
        (this.var_5154 = e.readInteger()),
        (this.var_5656 = e.readInteger()),
        (this._state = e.readInteger()),
        !0
      );
    }
  }
