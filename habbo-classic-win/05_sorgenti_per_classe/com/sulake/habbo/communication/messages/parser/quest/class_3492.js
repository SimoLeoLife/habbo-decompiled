// Estratto da HabboAirLauncher.deobf.js, riga 98728.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_3492.as
// Nome offuscato: _icfb3ca82aef43f

class {
    static {
      n(this, "class_3492");
    }
    static {
      jUr(this, "class_3492");
    }
    var_1614 = [];
    get quests() {
      return this.var_1614;
    }
    flush() {
      return ((this.var_1614 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1614.push(new Jc(e));
      return !0;
    }
  }
