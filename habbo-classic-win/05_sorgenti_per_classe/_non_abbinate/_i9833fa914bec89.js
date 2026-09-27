// Estratto da HabboAirLauncher.deobf.js, riga 122778.

class {
    static {
      n(this, "_i9833fa914bec89");
    }
    static {
      $7t(this, "_i9833fa914bec89");
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
