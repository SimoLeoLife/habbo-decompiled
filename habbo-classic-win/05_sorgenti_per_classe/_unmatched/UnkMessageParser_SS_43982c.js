// Extracted from HabboAirLauncher.deobf.js, line 75694.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i43982c42c1044b

class {
    static {
      n(this, "UnkMessageParser_SS_43982c");
    }
    static {
      y7r(this, "UnkMessageParser_SS_43982c");
    }
    productName = "";
    productDescription = "";
    flush() {
      return ((this.productDescription = ""), (this.productName = ""), !0);
    }
    parse(e) {
      return (
        (this.productDescription = e.readString()),
        (this.productName = e.readString()),
        !0
      );
    }
  }
