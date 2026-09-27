// Extracted from HabboAirLauncher.deobf.js, line 98600.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_3896.as
// Obfuscated name: _ibead42cb9c1276

class {
    static {
      n(this, "class_3896");
    }
    static {
      RUr(this, "class_3896");
    }
    var_142 = null;
    _r2c35fab41e8060 = 0;
    var_4164 = 0;
    get quest() {
      return this.var_142;
    }
    get _r14cf5790c4ff67() {
      return this._r2c35fab41e8060;
    }
    get _r18422f7d6baa6c() {
      return this.var_4164;
    }
    flush() {
      return ((this.var_142 = null), !0);
    }
    parse(e) {
      return (
        e.readBoolean() &&
          ((this.var_142 = new Jc(e)),
          (this._r2c35fab41e8060 = e.readInteger()),
          (this.var_4164 = e.readInteger())),
        !0
      );
    }
  }
