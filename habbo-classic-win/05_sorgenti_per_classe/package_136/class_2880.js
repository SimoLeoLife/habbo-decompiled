// Estratto da HabboAirLauncher.deobf.js, riga 97360.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_136/class_2880.as
// Nome offuscato: _i13501aa59748ea

class {
    static {
      n(this, "class_2880");
    }
    static {
      bVr(this, "class_2880");
    }
    var_1005 = null;
    flush() {
      return ((this.var_1005 = null), !0);
    }
    parse(e) {
      this.var_1005 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new class_2559();
        ((i.code = e.readString()),
          (i.errorMessage = e.readString()),
          (i.isAllowed = e.readBoolean()),
          this.var_1005.push(i));
      }
      return !0;
    }
    getPerks() {
      return this.var_1005 ?? [];
    }
    isPerkAllowed(e) {
      let r = this.getPerk(e);
      return r != null && r.isAllowed;
    }
    getPerk(e) {
      for (let r of this.var_1005 ?? []) if (r.code === e) return r;
      return null;
    }
  }
