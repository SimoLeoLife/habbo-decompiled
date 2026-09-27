// Extracted from HabboAirLauncher.deobf.js, line 115179.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i501038fc0f426f

class {
    static {
      n(this, "UnkMessageComposer_2args_501038");
    }
    static {
      Ult(this, "UnkMessageComposer_2args_501038");
    }
    static _r4aeb1069bd9e7c = 3;
    static _r67f92b4ec50a26 = 0;
    static _rc2fbd4b2cdb3aa = 2;
    static _r24987a904b796f = 1;
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
