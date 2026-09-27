// Extracted from HabboAirLauncher.deobf.js, line 89619.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i52df2e920faaf1

class {
    static {
      n(this, "UnkMessageParser_I_52df2e");
    }
    static {
      gkr(this, "UnkMessageParser_I_52df2e");
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
