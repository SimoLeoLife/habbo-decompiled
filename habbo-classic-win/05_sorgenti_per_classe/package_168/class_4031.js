// Estratto da HabboAirLauncher.deobf.js, riga 103843.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_4031.as
// Nome offuscato: _i4d927a8ecf4aff

class {
    static {
      n(this, "class_4031");
    }
    static {
      iKr(this, "class_4031");
    }
    var_2287 = 0;
    var_2822 = null;
    var_4951 = "";
    get furniId() {
      return this.var_2287;
    }
    get playlists() {
      return this.var_2822;
    }
    get _r01048d37368c30() {
      return this.var_4951;
    }
    flush() {
      return ((this.var_2822 = null), !0);
    }
    parse(e) {
      this.var_2287 = e.readInteger();
      let r = e.readInteger();
      this.var_2822 = [];
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readString(),
          o = e.readString();
        this.var_2822.push(new class_2831(i, s, o));
      }
      return ((this.var_4951 = e.readString()), !0);
    }
  }
