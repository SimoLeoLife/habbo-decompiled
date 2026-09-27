// Estratto da HabboAirLauncher.deobf.js, riga 123052.

class {
    static {
      n(this, "_i8947c23c0697ea");
    }
    static {
      ppt(this, "_i8947c23c0697ea");
    }
    _array = [];
    constructor(e) {
      this._array.push(e.length);
      for (let r of e) this._array.push(r);
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
