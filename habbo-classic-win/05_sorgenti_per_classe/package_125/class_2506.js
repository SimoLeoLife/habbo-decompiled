// Extracted from HabboAirLauncher.deobf.js, line 122505.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_125/class_2506.as
// Obfuscated name: _ib4ef788e38c114

class {
    static {
      n(this, "class_2506");
    }
    static {
      C7t(this, "class_2506");
    }
    _data;
    constructor(e, r = -1, t = -1, i = -1, s = -1, o = -1, d = -1) {
      r === -1 && t === -1 && i === -1 && s === -1 && o === -1
        ? (this._data = [e])
        : d === -1
          ? (this._data = [e, r, t, i, s, o])
          : (this._data = [e, r, t, i, s, o, d]);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
