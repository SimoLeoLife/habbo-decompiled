// Extracted from HabboAirLauncher.deobf.js, line 125434.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_31/class_2290.as
// Obfuscated name: _ia837533cd13326

class {
    static {
      n(this, "class_2290");
    }
    static {
      wwt(this, "class_2290");
    }
    _data = [];
    constructor(e) {
      this._data.push(new Byte(e));
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
