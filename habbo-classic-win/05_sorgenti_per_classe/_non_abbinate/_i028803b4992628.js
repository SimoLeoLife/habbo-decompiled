// Estratto da HabboAirLauncher.deobf.js, riga 83632.

class a {
    static {
      n(this, "_i028803b4992628");
    }
    static {
      Kyr(this, "_i028803b4992628");
    }
    static _rd5551a032e5fdf = 5;
    static _r8c8ac0804fdcce = 1;
    static _rab39575fec3191 = 4;
    static _r192fa0a9c3bebe = 3;
    static _rda17b815462e6f = 2;
    static _r6c8adb17161f80 = new Map();
    _variables = [];
    get type() {
      return this.getVariable(0);
    }
    get id() {
      return this.getVariable(1);
    }
    getVariable(e) {
      return this._variables[e];
    }
    _r2c1550e31d2819(e, r) {
      this._variables[e] = r;
    }
    constructor(e, r) {
      (this._r2c1550e31d2819(0, e), this._r2c1550e31d2819(1, r));
    }
    _r539158edd29622(e, r) {
      for (let t = 2; t < r; ++t) this._variables.push(e.readInteger());
    }
    parse(e) {}
    static register(e, r) {
      a._r6c8adb17161f80.set(e, r);
    }
    static create(e, r) {
      let t = a._r6c8adb17161f80.get(e);
      return t == null ? null : new t(e, r);
    }
  }
