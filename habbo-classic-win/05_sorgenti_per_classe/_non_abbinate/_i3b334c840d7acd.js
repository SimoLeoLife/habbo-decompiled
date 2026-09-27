// Estratto da HabboAirLauncher.deobf.js, riga 120036.

class {
    static {
      n(this, "_i3b334c840d7acd");
    }
    static {
      k8t(this, "_i3b334c840d7acd");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }
