// Extracted from HabboAirLauncher.deobf.js, line 95073.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _idb49467932f555

class {
    static {
      n(this, "UnkClass_db4946");
    }
    static {
      RNr(this, "UnkClass_db4946");
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
