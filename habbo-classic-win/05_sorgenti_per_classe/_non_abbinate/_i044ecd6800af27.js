// Estratto da HabboAirLauncher.deobf.js, riga 112861.

class {
    static {
      n(this, "_i044ecd6800af27");
    }
    static {
      qot(this, "_i044ecd6800af27");
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
