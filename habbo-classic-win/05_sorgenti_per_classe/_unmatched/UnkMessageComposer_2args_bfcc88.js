// Extracted from HabboAirLauncher.deobf.js, line 115316.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibfcc88bd37e593

class {
    static {
      n(this, "UnkMessageComposer_2args_bfcc88");
    }
    static {
      ebt(this, "UnkMessageComposer_2args_bfcc88");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r.length));
      for (let t of r) this._array.push(t);
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
