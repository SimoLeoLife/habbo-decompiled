// Estratto da HabboAirLauncher.deobf.js, riga 114038.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_16/class_1992.as
// Nome offuscato: _ic2244ed1484893

class {
    static {
      n(this, "class_1992");
    }
    static {
      Mct(this, "class_1992");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d = !1) {
      this._data = [e, r, t, i | 0, s | 0, o | 0, d];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
