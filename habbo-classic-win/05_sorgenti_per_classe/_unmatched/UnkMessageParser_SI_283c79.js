// Extracted from HabboAirLauncher.deobf.js, line 105172.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i283c798c024380

class {
    static {
      n(this, "UnkMessageParser_SI_283c79");
    }
    static {
      $$r(this, "UnkMessageParser_SI_283c79");
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
