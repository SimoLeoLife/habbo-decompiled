// Estratto da HabboAirLauncher.deobf.js, riga 87744.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4044.as
// Nome offuscato: _ia90cfee6c8cc46

class {
    static {
      n(this, "class_4044");
    }
    static {
      wWr(this, "class_4044");
    }
    _data = null;
    flush() {
      return (this._data && this._data.dispose(), (this._data = null), !0);
    }
    parse(e) {
      this._data = new B();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new B(),
          s = e.readInteger(),
          o = e.readString(),
          d = e.readInteger();
        (i.add("name", o), i.add("count", d), this._data.add(s, i));
      }
      return !0;
    }
    get data() {
      return this._data;
    }
  }
