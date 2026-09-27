// Estratto da HabboAirLauncher.deobf.js, riga 123136.

class {
    static {
      n(this, "_i258b76dd182e43");
    }
    static {
      Cpt(this, "_i258b76dd182e43");
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
