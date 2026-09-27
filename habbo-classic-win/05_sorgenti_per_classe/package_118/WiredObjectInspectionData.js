// Estratto da HabboAirLauncher.deobf.js, riga 108870.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_118/WiredObjectInspectionData.as
// Nome offuscato: _id182275584a7f2

class a {
    static {
      n(this, "WiredObjectInspectionData");
    }
    static {
      ftt(this, "WiredObjectInspectionData");
    }
    static var_5765 = 0;
    static var_5943 = 1;
    static var_5987 = -10;
    _r002f35d23e0887;
    var_344;
    _type;
    var_3834;
    _rf5767f91778fd3;
    constructor(e) {
      this._type = e.readInteger();
      let r = 0,
        t = 0;
      (this._type === a.var_5765
        ? (r = e.readInteger())
        : this._type === a.var_5943 && (t = e.readInteger()),
        (this.var_344 = r),
        (this.var_3834 = t),
        (this._rf5767f91778fd3 = new B()));
      let i = e.readInteger();
      for (let s = 0; s < i; s += 1) {
        let o = e.readString(),
          d = e.readInteger();
        this._rf5767f91778fd3.add(o, d);
      }
      if (this._type === a.var_5765) {
        ((i = e.readInteger()), (this._r002f35d23e0887 = []));
        for (let s = 0; s < i; s += 1) this._r002f35d23e0887.push(e.readInteger());
      } else this._r002f35d23e0887 = null;
    }
    get type() {
      return this._type;
    }
    get _rc86f77becaebea() {
      return this.var_3834;
    }
    get objectId() {
      return this.var_344;
    }
    get _r2bf1ac7648188a() {
      return this._rf5767f91778fd3;
    }
    get _r3a4a7e95bf1830() {
      return this._r002f35d23e0887;
    }
  }
