// Estratto da HabboAirLauncher.deobf.js, riga 120378.

class {
    static {
      n(this, "_i3328024d70ceb5");
    }
    static {
      s5t(this, "_i3328024d70ceb5");
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
      return this._array == null;
    }
  }
