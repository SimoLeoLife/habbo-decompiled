// Estratto da HabboAirLauncher.deobf.js, riga 75694.

class {
    static {
      n(this, "_i43982c42c1044b");
    }
    static {
      y7r(this, "_i43982c42c1044b");
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
