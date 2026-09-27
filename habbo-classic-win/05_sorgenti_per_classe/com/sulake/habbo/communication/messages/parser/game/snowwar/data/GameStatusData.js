// Estratto da HabboAirLauncher.deobf.js, riga 84536.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/GameStatusData.as
// Nome offuscato: _ib74f0eee879ee1

class {
    static {
      n(this, "GameStatusData");
    }
    static {
      gxr(this, "GameStatusData");
    }
    var_403 = 0;
    var_5142 = 0;
    var_4343 = new B();
    constructor(e) {
      this.parse(e);
    }
    get turn() {
      return this.var_403;
    }
    get checksum() {
      return this.var_5142;
    }
    get events() {
      return this.var_4343;
    }
    parse(e) {
      ((this.var_403 = e.readInteger()),
        (this.var_5142 = e.readInteger()),
        (this.var_4343 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = [];
        for (let o = 0; o < i; o++) {
          let d = e.readInteger(),
            c = Ma.create(d);
          c && (c.parse(e), s.push(c));
        }
        this.var_4343.add(t, s);
      }
    }
  }
