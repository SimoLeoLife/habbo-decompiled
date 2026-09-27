// Estratto da HabboAirLauncher.deobf.js, riga 120105.

class {
    static {
      n(this, "_i40b48b3aaac8f3");
    }
    static {
      L8t(this, "_i40b48b3aaac8f3");
    }
    _array = [];
    constructor(e) {
      this._array.push(e.length * 3);
      for (let r of e)
        (this._array.push(r._r9f51ec9c1833f1),
          this._array.push(r._rbd5af088bd7422),
          this._array.push(r._r776264f03f5e0f));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = [];
    }
  }
