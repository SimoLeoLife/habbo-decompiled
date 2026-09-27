// Estratto da HabboAirLauncher.deobf.js, riga 100403.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2848.as
// Nome offuscato: _i3e8757744960ef

class {
    static {
      n(this, "class_2848");
    }
    static {
      uzr(this, "class_2848");
    }
    _aliases = new B();
    get aliasCount() {
      return this._aliases.length;
    }
    getName(e) {
      return e < 0 || e >= this.aliasCount ? null : this._aliases.getKey(e);
    }
    getAlias(e) {
      return e < 0 || e >= this.aliasCount ? null : this._aliases.getWithIndex(e);
    }
    flush() {
      return (this._aliases.reset(), !0);
    }
    parse(e) {
      this._aliases.reset();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readString();
        (this._aliases.remove(i), this._aliases.add(i, s));
      }
      return !0;
    }
  }
