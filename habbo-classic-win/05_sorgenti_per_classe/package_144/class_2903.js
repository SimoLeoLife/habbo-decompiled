// Estratto da HabboAirLauncher.deobf.js, riga 97700.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_144/class_2903.as
// Nome offuscato: _id98ff706ebd267

class {
    static {
      n(this, "class_2903");
    }
    static {
      RVr(this, "class_2903");
    }
    _userId = -1;
    _value = "";
    var_2540 = null;
    get userId() {
      return this._userId;
    }
    get value() {
      return this._value;
    }
    get answerCounts() {
      return this.var_2540;
    }
    flush() {
      return ((this._userId = -1), (this._value = ""), (this.var_2540 = null), !1);
    }
    parse(e) {
      ((this._userId = e.readInteger()),
        (this._value = e.readString()),
        (this.var_2540 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readInteger();
        this.var_2540.add(i, s);
      }
      return !0;
    }
  }
