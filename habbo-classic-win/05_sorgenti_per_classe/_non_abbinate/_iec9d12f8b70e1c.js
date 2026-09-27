// Estratto da HabboAirLauncher.deobf.js, riga 116647.

class {
    static {
      n(this, "_iec9d12f8b70e1c");
    }
    static {
      w0t(this, "_iec9d12f8b70e1c");
    }
    _array = [0];
    add(e, r, t) {
      (this._array.push(e, r, t), (this._array[0] = this._array[0] + 1));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    get size() {
      return this._array?.[0] ?? 0;
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
