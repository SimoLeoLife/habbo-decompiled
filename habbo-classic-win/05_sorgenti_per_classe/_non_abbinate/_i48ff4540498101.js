// Estratto da HabboAirLauncher.deobf.js, riga 118217.

class {
    static {
      n(this, "_i48ff4540498101");
    }
    static {
      M3t(this, "_i48ff4540498101");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
