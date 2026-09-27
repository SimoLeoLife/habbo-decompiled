// Estratto da HabboAirLauncher.deobf.js, riga 95194.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_2706.as
// Nome offuscato: _ie5db36ea6b2c81

class {
    static {
      n(this, "class_2706");
    }
    static {
      ONr(this, "class_2706");
    }
    _data = null;
    _r61b8f1c4cb1248 = null;
    _rec5aece80b807b = null;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._data = new _idb49467932f555(e)),
        e.readInteger() > 0 && (this._r61b8f1c4cb1248 = new yu(e)),
        (this._rec5aece80b807b = new _ibc77fe8b92e693(e)),
        !0
      );
    }
    get data() {
      return this._data;
    }
    get _ra175262e310a69() {
      return this._r61b8f1c4cb1248;
    }
    get _r814554d59f42ae() {
      return this._rec5aece80b807b;
    }
  }
