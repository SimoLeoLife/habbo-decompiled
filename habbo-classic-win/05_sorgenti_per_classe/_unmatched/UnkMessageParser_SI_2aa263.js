// Extracted from HabboAirLauncher.deobf.js, line 99687.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2aa263fe95dd6a

class {
    static {
      n(this, "UnkMessageParser_SI_2aa263");
    }
    static {
      pjr(this, "UnkMessageParser_SI_2aa263");
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
