// Extracted from HabboAirLauncher.deobf.js, line 96980.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0fe1792d5fa738

class {
    static {
      n(this, "UnkMessageParser_IIII_0fe179");
    }
    static {
      kHr(this, "UnkMessageParser_IIII_0fe179");
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
