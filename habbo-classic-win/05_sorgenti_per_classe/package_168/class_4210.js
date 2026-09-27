// Estratto da HabboAirLauncher.deobf.js, riga 103164.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_4210.as
// Nome offuscato: _ia8535b7f28248e

class {
    static {
      n(this, "class_4210");
    }
    static {
      sYr(this, "class_4210");
    }
    var_344 = -1;
    var_3597 = -1;
    var_3685 = "";
    var_3759 = -1;
    var_3587 = !1;
    var_3467 = !1;
    get objectId() {
      return this.var_344;
    }
    get guildId() {
      return this.var_3597;
    }
    get _rac546a5a9e4961() {
      return this.var_3685;
    }
    get _r8bc127202f7b5f() {
      return this.var_3759;
    }
    get _r87988445a266e9() {
      return this.var_3587;
    }
    get _r91e9d6381affd6() {
      return this.var_3467;
    }
    flush() {
      return (
        (this.var_344 = -1),
        (this.var_3597 = -1),
        (this.var_3685 = ""),
        (this.var_3759 = -1),
        (this.var_3587 = !1),
        (this.var_3467 = !1),
        !0
      );
    }
    parse(e) {
      return e
        ? ((this.var_344 = e.readInteger()),
          (this.var_3597 = e.readInteger()),
          (this.var_3685 = e.readString()),
          (this.var_3759 = e.readInteger()),
          (this.var_3587 = e.readBoolean()),
          (this.var_3467 = e.readBoolean()),
          !0)
        : !1;
    }
  }
