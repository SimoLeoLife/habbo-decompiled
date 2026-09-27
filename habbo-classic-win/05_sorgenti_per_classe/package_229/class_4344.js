// Estratto da HabboAirLauncher.deobf.js, riga 126333.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_229/class_4344.as
// Nome offuscato: _i2ba6468ddcf520

class {
    static {
      n(this, "class_4344");
    }
    static {
      Ryt(this, "class_4344");
    }
    parse(e) {
      let r = new class_2546();
      return (
        (r.habbiconId = e.readInteger()),
        (r.name = e.readString()),
        (r.collectionId = e.readInteger()),
        (r.state = e.readInteger()),
        (r.priceCredits = e.readInteger()),
        (r.priceActivityPoints = e.readInteger()),
        (r.activityPointType = e.readInteger()),
        r
      );
    }
  }
