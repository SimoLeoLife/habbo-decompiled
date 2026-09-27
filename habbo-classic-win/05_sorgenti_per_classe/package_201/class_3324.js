// Extracted from HabboAirLauncher.deobf.js, line 73774.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_201/class_3324.as
// Obfuscated name: _ic126c900eba4a3

class a {
    static {
      n(this, "class_3324");
    }
    static {
      _2r(this, "class_3324");
    }
    var_2809 = "";
    var_2550 = "";
    var_2966 = 0;
    var_2998 = 0;
    var_2062 = [];
    var_2407 = [];
    parse(e) {
      ((this.var_2809 = e.readString()),
        (this.var_2550 = e.readString()),
        (this.var_2966 = e.readInteger()),
        (this.var_2998 = e.readInteger()),
        (this.var_2062 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2062.push(e.readInteger());
      ((this.var_2407 = []), (r = e.readInteger()));
      for (let t = 0; t < r; t++) this.var_2407.push(e.readInteger());
      return !0;
    }
    clone() {
      let e = new a();
      return (
        (e._rf9f59040b8aa0f = this.var_2998),
        (e.campaignImage = this.var_2550),
        (e.campaignName = this.var_2809),
        (e._r7568522c4b24c4 = this.var_2966),
        (e.missedDays = this.var_2407),
        (e.openedDays = this.var_2062),
        e
      );
    }
    get campaignName() {
      return this.var_2809;
    }
    set campaignName(e) {
      this.var_2809 = e;
    }
    get campaignImage() {
      return this.var_2550;
    }
    set campaignImage(e) {
      this.var_2550 = e;
    }
    get _r7568522c4b24c4() {
      return this.var_2966;
    }
    set _r7568522c4b24c4(e) {
      this.var_2966 = e;
    }
    get _rf9f59040b8aa0f() {
      return this.var_2998;
    }
    set _rf9f59040b8aa0f(e) {
      this.var_2998 = e;
    }
    get openedDays() {
      return this.var_2062;
    }
    set openedDays(e) {
      this.var_2062 = e;
    }
    get missedDays() {
      return this.var_2407;
    }
    set missedDays(e) {
      this.var_2407 = e;
    }
  }
