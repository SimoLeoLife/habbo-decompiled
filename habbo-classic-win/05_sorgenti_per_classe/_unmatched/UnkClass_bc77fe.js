// Extracted from HabboAirLauncher.deobf.js, line 95166.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibc77fe8b92e693

class {
    static {
      n(this, "UnkClass_bc77fe");
    }
    static {
      LNr(this, "UnkClass_bc77fe");
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
