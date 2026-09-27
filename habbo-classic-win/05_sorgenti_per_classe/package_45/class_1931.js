// Estratto da HabboAirLauncher.deobf.js, riga 92211.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_45/class_1931.as
// Nome offuscato: _i6c392929ed7d35

class {
    static {
      n(this, "class_1931");
    }
    static {
      eSr(this, "class_1931");
    }
    var_4903 = 0;
    var_5139 = 0;
    _historyLength = 0;
    _r1b3fd65dd60d83 = [];
    _red023156a3ef95 = [];
    _rea38d41e9be812 = [];
    var_5376 = 0;
    var_4537 = 0;
    var_5108 = 0;
    var_2970 = 0;
    get _r4696ae664425c4() {
      return this.var_4903;
    }
    get offerCount() {
      return this.var_5139;
    }
    get _rb567756d4aca7b() {
      return this._historyLength;
    }
    get _r24b5c39dfd5190() {
      return this._r1b3fd65dd60d83;
    }
    get _recc94ad598552e() {
      return this._red023156a3ef95;
    }
    get _re3b36cc508f679() {
      return this._rea38d41e9be812;
    }
    get _r0010c2e2cf3a43() {
      return this.var_5376;
    }
    get _r0dab2cd380900c() {
      return this.var_4537;
    }
    get lowestCurrentPrice() {
      return this.var_5108;
    }
    get suggestedPrice() {
      return this.var_2970;
    }
    flush() {
      return !0;
    }
    parse(e) {
      ((this.var_4903 = e.readInteger()),
        (this.var_5139 = e.readInteger()),
        (this._historyLength = e.readInteger()));
      let r = e.readInteger();
      ((this._r1b3fd65dd60d83 = []), (this._red023156a3ef95 = []), (this._rea38d41e9be812 = []));
      for (let t = 0; t < r; t++)
        (this._r1b3fd65dd60d83.push(e.readInteger()),
          this._red023156a3ef95.push(e.readInteger()),
          this._rea38d41e9be812.push(e.readInteger()));
      return (
        (this.var_4537 = e.readInteger()),
        (this.var_5376 = e.readInteger()),
        (this.var_5108 = e.readInteger()),
        (this.var_2970 = e.readInteger()),
        !0
      );
    }
  }
