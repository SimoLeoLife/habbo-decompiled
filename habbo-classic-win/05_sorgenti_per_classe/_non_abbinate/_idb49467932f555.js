// Estratto da HabboAirLauncher.deobf.js, riga 95073.

class {
    static {
      n(this, "_idb49467932f555");
    }
    static {
      RNr(this, "_idb49467932f555");
    }
    _entries = [];
    _disposed = !1;
    constructor(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._entries.push(new yu(e));
    }
    get disposed() {
      return this._disposed;
    }
    get entries() {
      return this._entries;
    }
    dispose() {
      if (!this._disposed) {
        if (((this._disposed = !0), this._entries)) for (let e of this._entries) e.dispose();
        this._entries = null;
      }
    }
  }
