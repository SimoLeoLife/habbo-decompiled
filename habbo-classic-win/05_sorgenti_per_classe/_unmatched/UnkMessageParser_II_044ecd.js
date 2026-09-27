// Extracted from HabboAirLauncher.deobf.js, line 112861.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i044ecd6800af27

class {
    static {
      n(this, "UnkMessageParser_II_044ecd");
    }
    static {
      qot(this, "UnkMessageParser_II_044ecd");
    }
    userId = 0;
    relationshipStatusMap = null;
    flush() {
      return (
        this.relationshipStatusMap &&
          (this.relationshipStatusMap.dispose(), (this.relationshipStatusMap = null)),
        !0
      );
    }
    parse(e) {
      ((this.userId = e.readInteger()), (this.relationshipStatusMap = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new class_3136(e);
        this.relationshipStatusMap.add(i.var_4424, i);
      }
      return !0;
    }
  }
