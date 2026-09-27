// Extracted from HabboAirLauncher.deobf.js, line 112542.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7d2b0bc5db1e78

class {
    static {
      n(this, "UnkMessageParser_IIISII_7d2b0b");
    }
    static {
      wot(this, "UnkMessageParser_IIISII_7d2b0b");
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
        this.selectedBadges.push(new UnkClass_6e70f7(i, s, o, d));
      }
      return !0;
    }
    get badges() {
      return this.selectedBadges.map((e) => e._rc9fc89e7eb27a7);
    }
  }
