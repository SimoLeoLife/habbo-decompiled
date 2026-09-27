// Estratto da HabboAirLauncher.deobf.js, riga 103060.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_116/class_2458.as
// Nome offuscato: _i60fc23f8ffca5a

class {
    static {
      n(this, "class_2458");
    }
    static {
      qXr(this, "class_2458");
    }
    _id = -1;
    _value = 0;
    get id() {
      return this._id;
    }
    get value() {
      return this._value;
    }
    flush() {
      return ((this._id = -1), (this._value = 0), !0);
    }
    parse(e) {
      return e ? ((this._id = e.readInteger()), (this._value = e.readInteger()), !0) : !1;
    }
  }
