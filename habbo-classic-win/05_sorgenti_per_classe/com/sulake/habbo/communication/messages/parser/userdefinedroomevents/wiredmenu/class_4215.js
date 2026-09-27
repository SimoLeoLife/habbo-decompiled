// Estratto da HabboAirLauncher.deobf.js, riga 108787.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredmenu/class_4215.as
// Nome offuscato: _i5a93e1d741df8f

class {
    static {
      n(this, "class_4215");
    }
    static {
      ttt(this, "class_4215");
    }
    var_3027 = null;
    flush() {
      return ((this.var_3027 = null), !0);
    }
    parse(e) {
      this.var_3027 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t += 1) this.var_3027.push(new class_4332(e));
      return !0;
    }
    get errors() {
      return this.var_3027;
    }
  }
