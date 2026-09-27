// Extracted from HabboAirLauncher.deobf.js, line 101071.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3001.as
// Obfuscated name: _iec089e6bb78fe0

class {
    static {
      n(this, "class_3001");
    }
    static {
      tQr(this, "class_3001");
    }
    _items = [];
    flush() {
      return ((this._items = []), !0);
    }
    getItemCount() {
      return this._items.length;
    }
    getItem(e) {
      if (e < 0 || e >= this.getItemCount()) return null;
      let r = this._items[e] ?? null;
      return (r && r.setReadOnly(), r);
    }
    parse(e) {
      if (!e) return !1;
      this._items = [];
      let r = new B(),
        t = e.readInteger();
      for (let s = 0; s < t; s++) r.add(e.readInteger(), e.readString());
      let i = e.readInteger();
      for (let s = 0; s < i; s++) {
        let o = class_4263.parseItemData(e);
        ((o.ownerName = r.getValue(o.ownerId) ?? ""), this._items.push(o));
      }
      return !0;
    }
  }
