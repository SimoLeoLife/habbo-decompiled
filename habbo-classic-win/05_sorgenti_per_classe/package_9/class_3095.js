// Estratto da HabboAirLauncher.deobf.js, riga 111109.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_9/class_3095.as
// Nome offuscato: _iec31cfc174966d

class {
    static {
      n(this, "class_3095");
    }
    static {
      int(this, "class_3095");
    }
    userId;
    userName;
    figureString;
    rank;
    score;
    constructor(e) {
      ((this.userId = e.readInteger()),
        (this.userName = e.readString()),
        (this.figureString = e.readString()),
        (this.rank = e.readInteger()),
        (this.score = e.readInteger()));
    }
  }
