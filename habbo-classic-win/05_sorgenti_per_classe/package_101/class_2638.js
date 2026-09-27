// Extracted from HabboAirLauncher.deobf.js, line 116601.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_101/class_2638.as
// Obfuscated name: _i1d41947217e2e8

class {
    static {
      n(this, "class_2638");
    }
    static {
      p0t(this, "class_2638");
    }
    _array = [];
    constructor(e, r, t) {
      this._array = [e, r, t];
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }
