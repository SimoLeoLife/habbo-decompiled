// Extracted from HabboAirLauncher.deobf.js, line 83675.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/GameObjectsData.as
// Obfuscated name: _i164642a0c46474

class {
    static {
      n(this, "GameObjectsData");
    }
    static {
      Zyr(this, "GameObjectsData");
    }
    var_215 = [];
    constructor(e) {
      this.parse(e);
    }
    get gameObjects() {
      return this.var_215;
    }
    parse(e) {
      let r = e.readInteger();
      this.var_215 = [];
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger(),
          o = Xa.create(i, s);
        (o?.parse(e), o && this.var_215.push(o));
      }
    }
  }
