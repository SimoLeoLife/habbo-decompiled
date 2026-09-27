// Estratto da HabboAirLauncher.deobf.js, riga 114160.

class {
    static {
      n(this, "_i6c943197aa0b8c");
    }
    static {
      Hct(this, "_i6c943197aa0b8c");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
