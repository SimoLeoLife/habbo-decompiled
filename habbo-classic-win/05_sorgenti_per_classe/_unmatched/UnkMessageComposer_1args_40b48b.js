// Extracted from HabboAirLauncher.deobf.js, line 120105.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i40b48b3aaac8f3

class {
    static {
      n(this, "UnkMessageComposer_1args_40b48b");
    }
    static {
      L8t(this, "UnkMessageComposer_1args_40b48b");
    }
    _array = [];
    constructor(e) {
      this._array.push(e.length * 3);
      for (let r of e)
        (this._array.push(r._r9f51ec9c1833f1),
          this._array.push(r._rbd5af088bd7422),
          this._array.push(r._r776264f03f5e0f));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = [];
    }
  }
