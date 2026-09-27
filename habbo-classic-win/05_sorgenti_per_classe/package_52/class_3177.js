// Extracted from HabboAirLauncher.deobf.js, line 94173.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_3177.as
// Obfuscated name: _iad4f306e7ab21b

class {
    static {
      n(this, "class_3177");
    }
    static {
      QLr(this, "class_3177");
    }
    var_5508;
    var_4336;
    var_679;
    var_5153;
    var_5627;
    var_3585;
    var_5307;
    constructor(e) {
      ((this.var_5508 = e.readInteger()),
        (this.var_4336 = e.readString()),
        (this.var_679 = e.readBoolean()),
        (this.var_5153 = e.readBoolean()),
        (this.var_5627 = e.readString()),
        (this.var_3585 = e.readString()),
        (this.var_5307 = e.readBoolean()));
    }
    get nodeId() {
      return this.var_5508;
    }
    get nodeName() {
      return this.var_4336;
    }
    get visible() {
      return this.var_679;
    }
    get automatic() {
      return this.var_5153;
    }
    get _r342f9f99356a01() {
      return this.var_5307;
    }
    get _r18ea2d0c70d6da() {
      return this.var_5627;
    }
    get _r9be200fa8087f3() {
      return this.var_3585;
    }
    get visibleName() {
      return this.var_3585 === ""
        ? this.var_4336
        : "${navigator.flatcategory.global." + this.var_3585 + "}";
    }
  }
