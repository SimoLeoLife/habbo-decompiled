// Extracted from HabboAirLauncher.deobf.js, line 77107.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i23d2e82aaad1b6

class {
    static {
      n(this, "UnkMessageParser_I_23d2e8");
    }
    static {
      Amr(this, "UnkMessageParser_I_23d2e8");
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
      for (let t = 0; t < r; t++) this._items.push(new UnkSubclassOf_class_2508_04a79d(e));
      return !0;
    }
  }
