// Estratto da HabboAirLauncher.deobf.js, riga 107095.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_138/class_3812.as
// Nome offuscato: _icb82e8ffda413f

class {
    static {
      n(this, "class_3812");
    }
    static {
      kJr(this, "class_3812");
    }
    var_3103 = null;
    var_3595 = 0;
    var_3434 = 0;
    var_3688 = !1;
    flush() {
      return (
        (this.var_3103 = null),
        (this.var_3595 = 0),
        (this.var_3434 = 0),
        (this.var_3688 = !1),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3103 = e.readString()),
        (this.var_3595 = e.readInteger()),
        (this.var_3434 = e.readInteger()),
        (this.var_3688 = e.readBoolean()),
        !0
      );
    }
    get _r0b81c67a285696() {
      return this.var_3103;
    }
    get _r53743c42f77da2() {
      return this.var_3595;
    }
    get _r1370316ec45b24() {
      return this.var_3434;
    }
    get _r05bdfd640eb659() {
      return this.var_3688;
    }
  }
