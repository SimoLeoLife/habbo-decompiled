// Estratto da HabboAirLauncher.deobf.js, riga 112542.

class {
    static {
      n(this, "_i7d2b0bc5db1e78");
    }
    static {
      wot(this, "_i7d2b0bc5db1e78");
    }
    userId = -1;
    selectedBadges = [];
    flush() {
      return ((this.userId = -1), (this.selectedBadges = []), !0);
    }
    parse(e) {
      this.userId = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString(),
          o = e.readInteger(),
          d = e.readInteger();
        this.selectedBadges.push(new _i6e70f7261361b5(i, s, o, d));
      }
      return !0;
    }
    get badges() {
      return this.selectedBadges.map((e) => e._rc9fc89e7eb27a7);
    }
  }
