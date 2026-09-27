// Extracted from HabboAirLauncher.deobf.js, line 101122.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3426.as
// Obfuscated name: _id59c82e13845e7

class {
    static {
      n(this, "class_3426");
    }
    static {
      sQr(this, "class_3426");
    }
    _items = [];
    get itemCount() {
      return this._items.length;
    }
    getItemData(e) {
      return e < 0 || e >= this.itemCount ? null : (this._items[e] ?? null);
    }
    flush() {
      return ((this._items = []), !0);
    }
    parse(e) {
      if (!e) return !1;
      let r = e.readInteger();
      this._items = [];
      for (let t = 0; t < r; t++) this._items.push(new class_3438(e.readInteger(), e.readString()));
      return !0;
    }
  }
