// Estratto da HabboAirLauncher.deobf.js, riga 99687.

class {
    static {
      n(this, "_i2aa263fe95dd6a");
    }
    static {
      pjr(this, "_i2aa263fe95dd6a");
    }
    var_3521 = "";
    var_2440 = 0;
    get roomType() {
      return this.var_3521;
    }
    get roomId() {
      return this.var_2440;
    }
    flush() {
      return ((this.var_3521 = ""), (this.var_2440 = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3521 = e.readString()),
        (this.var_2440 = e.readInteger()),
        !0
      );
    }
  }
