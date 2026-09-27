// Extracted from HabboAirLauncher.deobf.js, line 77258.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_200/class_3913.as
// Obfuscated name: _i949428e2b17d26

class {
    static {
      n(this, "class_3913");
    }
    static {
      Vmr(this, "class_3913");
    }
    var_3709 = 0;
    _goalCode = "";
    _r03f2910fbe9c48 = 0;
    var_5638 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3709 = e.readInteger()),
        (this._goalCode = e.readString()),
        (this._r03f2910fbe9c48 = e.readInteger()),
        (this.var_5638 = e.readInteger()),
        !0
      );
    }
    get _r60d0785b4a5490() {
      return this.var_3709;
    }
    get goalCode() {
      return this._goalCode;
    }
    get _re5afdd33fdee01() {
      return this._r03f2910fbe9c48 === UnkConstants_9010cc._ree3b7971d5fdf1;
    }
    get _r08a0173f580ae8() {
      return this.var_5638;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
  }
