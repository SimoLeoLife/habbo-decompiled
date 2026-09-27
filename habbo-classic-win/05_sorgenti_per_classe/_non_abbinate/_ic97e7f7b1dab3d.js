// Estratto da HabboAirLauncher.deobf.js, riga 112275.

class {
    static {
      n(this, "_ic97e7f7b1dab3d");
    }
    static {
      $st(this, "_ic97e7f7b1dab3d");
    }
    guilds = [];
    flush() {
      return ((this.guilds = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.guilds.push(new class_3487(e));
      return !0;
    }
  }
