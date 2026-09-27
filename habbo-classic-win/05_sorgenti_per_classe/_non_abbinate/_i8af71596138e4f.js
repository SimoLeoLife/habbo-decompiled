// Estratto da HabboAirLauncher.deobf.js, riga 73410.

class {
    static {
      n(this, "_i8af71596138e4f");
    }
    static {
      T5r(this, "_i8af71596138e4f");
    }
    messages = null;
    flush() {
      return ((this.messages = null), !0);
    }
    parse(e) {
      this.messages = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.messages.push(new class_2564(e));
      return !0;
    }
  }
