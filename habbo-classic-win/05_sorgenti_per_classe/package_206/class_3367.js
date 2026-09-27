// Estratto da HabboAirLauncher.deobf.js, riga 113310.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_206/class_3367.as
// Nome offuscato: _ib686ecfcc3e8e2

class {
    static {
      n(this, "class_3367");
    }
    static {
      Odt(this, "class_3367");
    }
    _data = [];
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        this._data.push(new class_3635(e.readByte(), e.readByte(), e.readInteger(), e.readString()));
      return !0;
    }
    flush() {
      return ((this._data = []), !0);
    }
    get data() {
      return this._data;
    }
    set data(e) {
      this._data = e;
    }
  }
