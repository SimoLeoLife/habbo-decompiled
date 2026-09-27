// Extracted from HabboAirLauncher.deobf.js, line 126412.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_229/class_4357.as
// Obfuscated name: _ie7943952cb2eff

class {
    static {
      n(this, "class_4357");
    }
    static {
      Hyt(this, "class_4357");
    }
    var_4920 = new class_4344();
    parse(e) {
      let r = new class_3160();
      ((r.collectionId = e.readInteger()),
        (r.name = e.readString()),
        (r.completed = e.readBoolean()),
        (r.var_583 = e.readInteger()),
        (r.var_2758 = e.readInteger()),
        (r.priceCredits = e.readInteger()),
        (r.priceActivityPoints = e.readInteger()),
        (r.activityPointType = e.readInteger()),
        (r.habbicons = []));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) r.habbicons.push(this.var_4920.parse(e));
      return r;
    }
  }
