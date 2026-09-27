// Estratto da HabboAirLauncher.deobf.js, riga 107155.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_192/class_3055.as
// Nome offuscato: _i5cd2fbd3f67e17

class {
    static {
      n(this, "class_3055");
    }
    static {
      SJr(this, "class_3055");
    }
    _r4a05213091a91b = null;
    _ra2a75f64ec3e96 = null;
    get _r41778eaa3b9271() {
      return this._r4a05213091a91b;
    }
    get _r2f36f47a427424() {
      return this._ra2a75f64ec3e96;
    }
    flush() {
      return (
        this._r4a05213091a91b && (this._r4a05213091a91b.dispose(), (this._r4a05213091a91b = null)),
        this._ra2a75f64ec3e96 && (this._ra2a75f64ec3e96.dispose(), (this._ra2a75f64ec3e96 = null)),
        !0
      );
    }
    parse(e) {
      let r = e.readInteger();
      ((this._r4a05213091a91b = new B()), (this._ra2a75f64ec3e96 = new B()));
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString(),
          o = e.readString();
        (this._r4a05213091a91b.add(i, s), this._ra2a75f64ec3e96.add(i, o));
      }
      return !0;
    }
  }
