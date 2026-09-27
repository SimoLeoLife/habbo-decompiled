// Estratto da HabboAirLauncher.deobf.js, riga 96980.

class {
    static {
      n(this, "_i0fe1792d5fa738");
    }
    static {
      kHr(this, "_i0fe1792d5fa738");
    }
    _items = null;
    flush() {
      return ((this._items = null), !0);
    }
    parse(e) {
      this._items = new B();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = [],
          o = e.readInteger();
        for (let d = 0; d < o; d++) s.push(e.readInteger());
        this._items.add(i, s);
      }
      return !0;
    }
    _rce5da95ddf8754() {
      return this._items?.getKeys() ?? [];
    }
    _r82d081ea1f3fcd(e) {
      return this._items?.getValue(e) ?? [];
    }
  }
