// Estratto da HabboAirLauncher.deobf.js, riga 78611.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_2211.as
// Nome offuscato: _ic257cac43edc26

class {
    static {
      n(this, "class_2211");
    }
    static {
      Jvr(this, "class_2211");
    }
    var_474 = [];
    _others = [];
    get friends() {
      return this.var_474;
    }
    get others() {
      return this._others;
    }
    flush() {
      return ((this.var_474 = []), (this._others = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.var_474.push(new _i67ec3c4cd980f8(e));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this._others.push(new _i67ec3c4cd980f8(e));
      return !0;
    }
  }
