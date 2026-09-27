// Estratto da HabboAirLauncher.deobf.js, riga 89619.

class {
    static {
      n(this, "_i52df2e920faaf1");
    }
    static {
      gkr(this, "_i52df2e920faaf1");
    }
    _items = null;
    flush() {
      return (this._items && (this._items.dispose(), (this._items = null)), !0);
    }
    parse(e) {
      this._items = new B();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new class_3017(e);
        this._items.add(i.id, i);
      }
      return !0;
    }
    get items() {
      return this._items;
    }
  }
