// Extracted from HabboAirLauncher.deobf.js, line 116647.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iec9d12f8b70e1c

class {
    static {
      n(this, "UnkMessageComposer_0args_ec9d12");
    }
    static {
      w0t(this, "UnkMessageComposer_0args_ec9d12");
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
