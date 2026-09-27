// Extracted from HabboAirLauncher.deobf.js, line 73410.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8af71596138e4f

class {
    static {
      n(this, "UnkMessageParser_I_8af715");
    }
    static {
      T5r(this, "UnkMessageParser_I_8af715");
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
