// Extracted from HabboAirLauncher.deobf.js, line 118737.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iea5f21bce03b75

class {
    static {
      n(this, "UnkMessageComposer_4args_ea5f21");
    }
    static {
      g1t(this, "UnkMessageComposer_4args_ea5f21");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
