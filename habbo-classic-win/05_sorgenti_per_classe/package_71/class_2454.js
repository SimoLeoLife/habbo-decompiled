// Estratto da HabboAirLauncher.deobf.js, riga 101436.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2454.as
// Nome offuscato: _i981476b0590bbf

class {
    static {
      n(this, "class_2454");
    }
    static {
      RQr(this, "class_2454");
    }
    _data = null;
    get data() {
      let e = this._data;
      return (e && e.setReadOnly(), e);
    }
    flush() {
      return ((this._data = null), !0);
    }
    parse(e) {
      return e ? ((this._data = zs.parseObjectData(e)), !0) : !1;
    }
  }
