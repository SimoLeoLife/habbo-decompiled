// Estratto da HabboAirLauncher.deobf.js, riga 116419.

class {
    static {
      n(this, "_i124c19d85b1fd0");
    }
    static {
      e0t(this, "_i124c19d85b1fd0");
    }
    static const_20 = -1;
    _array = [];
    constructor(e) {
      this._array.push(e);
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
