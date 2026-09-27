// Extracted from HabboAirLauncher.deobf.js, line 75429.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id38499c3edb577

class {
    static {
      n(this, "UnkMessageParser_SI_d38499");
    }
    static {
      Z4r(this, "UnkMessageParser_SI_d38499");
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
