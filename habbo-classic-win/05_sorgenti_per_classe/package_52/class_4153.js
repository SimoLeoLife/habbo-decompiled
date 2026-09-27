// Extracted from HabboAirLauncher.deobf.js, line 95101.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_4153.as
// Obfuscated name: _id8ad1fe0a52d01

class {
    static {
      n(this, "class_4153");
    }
    static {
      SNr(this, "class_4153");
    }
    _code;
    var_4472;
    var_2093;
    _rooms = [];
    _open = !1;
    _r28881bae01669d = !1;
    _disposed = !1;
    constructor(e) {
      ((this._code = e.readString()), (this.var_4472 = e.readString()));
      let r = e.readInteger();
      this.var_2093 = new Fb(e);
      for (let t = 1; t < r; t++) this._rooms.push(new Fb(e));
    }
    get disposed() {
      return this._disposed;
    }
    get code() {
      return this._code;
    }
    get leaderFigure() {
      return this.var_4472;
    }
    get rooms() {
      return this._rooms;
    }
    get open() {
      return this._open;
    }
    set open(e) {
      this._open = e;
    }
    toggleOpen() {
      this._open = !this._open;
    }
    get _r02b32d8b1e7120() {
      return this.var_2093;
    }
    get _rf92a3375cb979e() {
      return this._r28881bae01669d;
    }
    set _rf92a3375cb979e(e) {
      this._r28881bae01669d = e;
    }
    dispose() {
      if (!this._disposed) {
        if (
          ((this._disposed = !0),
          this.var_2093?.dispose(),
          (this.var_2093 = null),
          this._rooms)
        )
          for (let e of this._rooms) e.dispose();
        this._rooms = null;
      }
    }
  }
