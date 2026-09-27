// Extracted from HabboAirLauncher.deobf.js, line 88747.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_2636.as
// Obfuscated name: _i61679bd9a2dade

class {
    static {
      n(this, "class_2636");
    }
    static {
      $Br(this, "class_2636");
    }
    _quizCode = null;
    var_2020 = null;
    flush() {
      return ((this._quizCode = null), (this.var_2020 = null), !0);
    }
    parse(e) {
      ((this._quizCode = e.readString()), (this.var_2020 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2020.push(e.readInteger());
      return !0;
    }
    get _rc6e42999e2d83b() {
      return this._quizCode;
    }
    get _rc9479a8851918a() {
      return this.var_2020;
    }
  }
