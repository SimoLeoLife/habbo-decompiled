// Estratto da HabboAirLauncher.deobf.js, riga 94930.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_2979.as
// Nome offuscato: _ibfe412c86ea075

class {
    static {
      n(this, "class_2979");
    }
    static {
      wNr(this, "class_2979");
    }
    _rf0e4964d4b25d8;
    var_1724;
    _rooms = [];
    var_2383 = null;
    _disposed = !1;
    constructor(e) {
      ((this._rf0e4964d4b25d8 = e.readInteger()), (this.var_1724 = e.readString()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rooms.push(new Fb(e));
      e.readBoolean() && (this.var_2383 = new yu(e));
    }
    get disposed() {
      return this._disposed;
    }
    get var_941() {
      return this._rf0e4964d4b25d8;
    }
    get _r74539a47506139() {
      return this.var_1724;
    }
    get rooms() {
      return this._rooms;
    }
    get ad() {
      return this.var_2383;
    }
    dispose() {
      if (!this._disposed) {
        if (((this._disposed = !0), this._rooms)) for (let e of this._rooms) e.dispose();
        (this.var_2383?.dispose(), (this.var_2383 = null), (this._rooms = null));
      }
    }
  }
