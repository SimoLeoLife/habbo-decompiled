// Estratto da HabboAirLauncher.deobf.js, riga 95166.

class {
    static {
      n(this, "_ibc77fe8b92e693");
    }
    static {
      LNr(this, "_ibc77fe8b92e693");
    }
    _entries = [];
    _disposed = !1;
    constructor(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._entries.push(new class_4153(e));
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
