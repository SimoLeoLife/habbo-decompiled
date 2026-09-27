// Extracted from HabboAirLauncher.deobf.js, line 125354.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iedffb9898d210d

class {
    static {
      n(this, "UnkMessageComposer_3args_edffb9");
    }
    static {
      bwt(this, "UnkMessageComposer_3args_edffb9");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
