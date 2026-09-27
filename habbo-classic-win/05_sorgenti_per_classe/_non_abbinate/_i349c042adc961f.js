// Estratto da HabboAirLauncher.deobf.js, riga 112594.

class {
    static {
      n(this, "_i349c042adc961f");
    }
    static {
      Cot(this, "_i349c042adc961f");
    }
    giverUserId = -1;
    handItemType = 0;
    flush() {
      return ((this.giverUserId = -1), (this.handItemType = 0), !0);
    }
    parse(e) {
      return ((this.giverUserId = e.readInteger()), (this.handItemType = e.readInteger()), !0);
    }
  }
