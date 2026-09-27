// Extracted from HabboAirLauncher.deobf.js, line 126333.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_229/class_4344.as
// Obfuscated name: _i2ba6468ddcf520

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
