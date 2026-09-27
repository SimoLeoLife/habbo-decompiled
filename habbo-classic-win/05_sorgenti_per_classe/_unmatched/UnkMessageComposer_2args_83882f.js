// Extracted from HabboAirLauncher.deobf.js, line 114962.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i83882ffc49bb0d

class {
    static {
      n(this, "UnkMessageComposer_2args_83882f");
    }
    static {
      wlt(this, "UnkMessageComposer_2args_83882f");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
