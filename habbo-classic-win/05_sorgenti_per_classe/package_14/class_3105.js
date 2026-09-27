// Extracted from HabboAirLauncher.deobf.js, line 104871.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_3105.as
// Obfuscated name: _iff3170fb20e6ac

class {
    static {
      n(this, "class_3105");
    }
    static {
      C$r(this, "class_3105");
    }
    var_3135 = !1;
    var_3686 = !1;
    var_3296 = !1;
    var_3796 = !1;
    get _ra743ae215cae7c() {
      return this.var_3135;
    }
    get _rf6604eae5d479c() {
      return this.var_3686;
    }
    get _r7b2358522ff37d() {
      return this.var_3296;
    }
    get _r90de31328ed785() {
      return this.var_3796;
    }
    flush() {
      return (
        (this.var_3135 = !1),
        (this.var_3686 = !1),
        (this.var_3296 = !1),
        (this.var_3796 = !1),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3135 = e.readBoolean()),
        e.bytesAvailable > 0 && (this.var_3686 = e.readBoolean()),
        e.bytesAvailable > 0 && (this.var_3296 = e.readBoolean()),
        e.bytesAvailable > 0 && (this.var_3796 = e.readBoolean()),
        !0
      );
    }
  }
