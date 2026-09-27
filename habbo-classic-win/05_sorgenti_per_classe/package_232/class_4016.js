// Extracted from HabboAirLauncher.deobf.js, line 85577.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_232/class_4016.as
// Obfuscated name: _if414d518bcf166

class {
    static {
      n(this, "class_4016");
    }
    static {
      SCr(this, "class_4016");
    }
    var_3271 = -1;
    var_5226 = 0;
    var_3164 = -1;
    get _rdbc26d52b301ac() {
      return this.var_3271;
    }
    get _r262f08d4ab9471() {
      return this.var_5226;
    }
    get _r25fdc7feecc63e() {
      return this.var_3164;
    }
    flush() {
      return ((this.var_3271 = -1), (this.var_3164 = -1), !0);
    }
    parse(e) {
      return (
        (this.var_3271 = e.readInteger()),
        (this.var_5226 = e.readInteger()),
        (this.var_3164 = e.readInteger()),
        !0
      );
    }
  }
