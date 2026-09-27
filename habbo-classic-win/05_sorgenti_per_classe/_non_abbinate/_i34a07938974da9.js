// Estratto da HabboAirLauncher.deobf.js, riga 89353.

class {
    static {
      n(this, "_i34a07938974da9");
    }
    static {
      $Ar(this, "_i34a07938974da9");
    }
    _data = [];
    flush() {
      return ((this._data = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readInteger();
        for (let o = 0; o < s; o++) this._data.push(new class_3733(i, e));
      }
      return !0;
    }
    get data() {
      return this._data;
    }
  }
