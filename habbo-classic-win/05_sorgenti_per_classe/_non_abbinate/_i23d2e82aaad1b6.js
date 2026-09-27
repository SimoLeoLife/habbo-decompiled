// Estratto da HabboAirLauncher.deobf.js, riga 77107.

class {
    static {
      n(this, "_i23d2e82aaad1b6");
    }
    static {
      Amr(this, "_i23d2e82aaad1b6");
    }
    _items = null;
    get items() {
      return this._items;
    }
    flush() {
      return ((this._items = null), !0);
    }
    parse(e) {
      this._items = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._items.push(new _i04a79d139f2bd2(e));
      return !0;
    }
  }
