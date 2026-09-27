// Estratto da HabboAirLauncher.deobf.js, riga 93796.

class {
    static {
      n(this, "_i058c8fa2782593");
    }
    static {
      bLr(this, "_i058c8fa2782593");
    }
    _r530e146e1b1a99 = new B();
    _r0c8c73c19217c1 = new B();
    _disposed = !1;
    constructor(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger(),
          o = e.readInteger();
        (this._r530e146e1b1a99.add(i, s), this._r0c8c73c19217c1.add(i, o));
      }
    }
    get disposed() {
      return this._disposed;
    }
    get _r9057fc2a5fe9b6() {
      return this._r530e146e1b1a99;
    }
    get _rbecd61369365c0() {
      return this._r0c8c73c19217c1;
    }
    dispose() {
      this._disposed ||
        ((this._disposed = !0), (this._r530e146e1b1a99 = null), (this._r0c8c73c19217c1 = null));
    }
  }
