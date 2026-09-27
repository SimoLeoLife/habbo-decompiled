// Estratto da HabboAirLauncher.deobf.js, riga 99333.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_112/class_3264.as
// Nome offuscato: _if36ae67a130440

class {
    static {
      n(this, "class_3264");
    }
    static {
      LGr(this, "class_3264");
    }
    _userId = 0;
    var_3484 = 0;
    get userId() {
      return this._userId;
    }
    get danceStyle() {
      return this.var_3484;
    }
    flush() {
      return ((this._userId = 0), !0);
    }
    parse(e) {
      return e
        ? ((this._userId = e.readInteger()), (this.var_3484 = e.readInteger()), !0)
        : !1;
    }
  }
