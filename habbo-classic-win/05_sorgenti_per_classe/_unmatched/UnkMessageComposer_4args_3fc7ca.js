// Extracted from HabboAirLauncher.deobf.js, line 118942.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3fc7caf549514e

class {
    static {
      n(this, "UnkMessageComposer_4args_3fc7ca");
    }
    static {
      S1t(this, "UnkMessageComposer_4args_3fc7ca");
    }
    _data = [];
    constructor(e, r, t, i) {
      this._data.push(e.length);
      for (let s of e) this._data.push(s);
      (this._data.push(r), this._data.push(t), this._data.push(i));
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
