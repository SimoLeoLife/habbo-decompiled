// Estratto da HabboAirLauncher.deobf.js, riga 116601.

class {
    static {
      n(this, "_i1d41947217e2e8");
    }
    static {
      p0t(this, "_i1d41947217e2e8");
    }
    _array = [];
    constructor(e, r, t) {
      this._array = [e, r, t];
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
