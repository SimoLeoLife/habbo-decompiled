// Estratto da HabboAirLauncher.deobf.js, riga 75429.

class {
    static {
      n(this, "_id38499c3edb577");
    }
    static {
      Z4r(this, "_id38499c3edb577");
    }
    _raeb033db5aa083 = "";
    _rba0022ecc6c104 = [];
    get _rdb6847933cfd17() {
      return this._rba0022ecc6c104.slice();
    }
    flush() {
      return ((this._raeb033db5aa083 = ""), (this._rba0022ecc6c104 = []), !0);
    }
    parse(e) {
      this._raeb033db5aa083 = e.readString();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rba0022ecc6c104.push(new class_3833(e));
      return !0;
    }
  }
