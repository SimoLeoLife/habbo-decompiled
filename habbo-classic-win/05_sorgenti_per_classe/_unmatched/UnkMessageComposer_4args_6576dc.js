// Extracted from HabboAirLauncher.deobf.js, line 118788.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6576dc33fca101

class a {
    static {
      n(this, "UnkMessageComposer_4args_6576dc");
    }
    static {
      I1t(this, "UnkMessageComposer_4args_6576dc");
    }
    static const_20 = -1;
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        i !== a.const_20 && this._data.push(i));
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
