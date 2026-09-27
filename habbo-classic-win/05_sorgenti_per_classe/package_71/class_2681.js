// Estratto da HabboAirLauncher.deobf.js, riga 101614.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2681.as
// Nome offuscato: _ieffc2a951adb11

class {
    static {
      n(this, "class_2681");
    }
    static {
      YQr(this, "class_2681");
    }
    _r35a969085a2710 = null;
    _rc73fe615f647ee = null;
    _rf25c963479b0bf = null;
    var_3838 = null;
    get _r79139f0497a3db() {
      return this._r35a969085a2710;
    }
    get _raec7c74c043bf6() {
      return this._rc73fe615f647ee;
    }
    get _r0360237584f43e() {
      return this._rf25c963479b0bf;
    }
    get _r737ebe977a7d0f() {
      return this.var_3838;
    }
    flush() {
      return (
        (this._r35a969085a2710 = null),
        (this._rc73fe615f647ee = null),
        (this._rf25c963479b0bf = null),
        (this.var_3838 = null),
        !0
      );
    }
    parse(e) {
      let r = e.readString(),
        t = e.readString();
      switch (r) {
        case "floor":
          this._r35a969085a2710 = t;
          break;
        case "wallpaper":
          this._rc73fe615f647ee = t;
          break;
        case "landscape":
          this._rf25c963479b0bf = t;
          break;
        case "landscapeanim":
          this.var_3838 = t;
          break;
      }
      return !0;
    }
  }
