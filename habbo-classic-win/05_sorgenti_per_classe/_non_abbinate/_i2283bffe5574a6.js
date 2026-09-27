// Estratto da HabboAirLauncher.deobf.js, riga 95354.

class {
    static {
      n(this, "_i2283bffe5574a6");
    }
    static {
      eOr(this, "_i2283bffe5574a6");
    }
    _r37f143e718cd2c;
    _r7dde57365a1433;
    _r4b544e93880ab3;
    _flatId;
    var_3180;
    _r046be371eecef3;
    _rd155c45b6637e3;
    _rbb16a56cbebe2d;
    _creationTime;
    _r0665f0ef66bb2b;
    _disposed = !1;
    constructor(e) {
      ((this._r37f143e718cd2c = e.readInteger()),
        (this._r7dde57365a1433 = e.readInteger()),
        (this._r4b544e93880ab3 = e.readString()),
        (this._flatId = e.readInteger()),
        (this._r046be371eecef3 = e.readInteger()),
        (this._rd155c45b6637e3 = e.readString()),
        (this._rbb16a56cbebe2d = e.readString()));
      let r = e.readInteger(),
        t = e.readInteger(),
        i = new Date(),
        s = i.getTime() - r * 60 * 1e3,
        o = new Date(s);
      ((this._creationTime =
        o.getDate() + "-" + o.getMonth() + "-" + o.getFullYear() + " " + o.getHours() + ":" + o.getMinutes()),
        (this._r0665f0ef66bb2b = new Date(i.getTime() + t * 60 * 1e3)),
        (this.var_3180 = e.readInteger()));
    }
    get disposed() {
      return this._disposed;
    }
    get _r8148677d694079() {
      return this._r37f143e718cd2c;
    }
    get _rba523b434ac95e() {
      return this._r7dde57365a1433;
    }
    get _rac478ec88f6362() {
      return this._r4b544e93880ab3;
    }
    get flatId() {
      return this._flatId;
    }
    get categoryId() {
      return this.var_3180;
    }
    get eventType() {
      return this._r046be371eecef3;
    }
    get eventName() {
      return this._rd155c45b6637e3;
    }
    get _rd6505b2bdb8ef3() {
      return this._rbb16a56cbebe2d;
    }
    get creationTime() {
      return this._creationTime;
    }
    get _r0b68eafd63a7f7() {
      return this._r0665f0ef66bb2b;
    }
    dispose() {
      this._disposed || (this._disposed = !0);
    }
  }
