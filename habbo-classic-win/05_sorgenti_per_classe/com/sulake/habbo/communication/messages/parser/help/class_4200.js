// Extracted from HabboAirLauncher.deobf.js, line 87606.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4200.as
// Obfuscated name: _i49b262ba09849f

class {
    static {
      n(this, "class_4200");
    }
    static {
      dWr(this, "class_4200");
    }
    var_3385 = -1;
    var_3238 = -1;
    var_2938 = null;
    flush() {
      return ((this.var_3385 = -1), (this.var_3238 = -1), (this.var_2938 = null), !0);
    }
    parse(e) {
      ((this.var_3385 = e.readInteger()),
        (this.var_3238 = e.readInteger()),
        (this.var_2938 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2938.push(e.readInteger());
      return !0;
    }
    get _re08cb915809022() {
      return this.var_3385;
    }
    get _rf7e40e1818e24a() {
      return this.var_3238;
    }
    get _r6db7608dbea991() {
      return this.var_2938;
    }
  }
