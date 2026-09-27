// Estratto da HabboAirLauncher.deobf.js, riga 98686.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_3389.as
// Nome offuscato: _ib9187e32693bfa

class {
    static {
      n(this, "class_3389");
    }
    static {
      HUr(this, "class_3389");
    }
    var_1614 = [];
    var_5185 = !1;
    get quests() {
      return this.var_1614;
    }
    get openWindow() {
      return this.var_5185;
    }
    flush() {
      return ((this.var_1614 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1614.push(new Jc(e));
      return ((this.var_5185 = e.readBoolean()), !0);
    }
  }
