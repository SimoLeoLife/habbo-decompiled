// Extracted from HabboAirLauncher.deobf.js, line 84807.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_92/class_2369.as
// Obfuscated name: _ic7b563f8392353

class a {
    static {
      n(this, "class_2369");
    }
    static {
      Oxr(this, "class_2369");
    }
    static const_1242 = 0;
    var_3332;
    var_1655;
    var_595;
    var_3134;
    _state;
    constructor(e) {
      ((this.var_3332 = e.readInteger()),
        (this.var_1655 = e.readInteger()),
        (this.var_595 = e.readString()),
        (this.var_3134 = e.readInteger()),
        (this._state = e.readInteger()));
    }
    dispose() {
      ((this.var_3332 = 0),
        (this.var_1655 = 0),
        (this.var_595 = ""),
        (this.var_3134 = 0));
    }
    get achievementId() {
      return this.var_3332;
    }
    get level() {
      return this.var_1655;
    }
    get badgeId() {
      return this.var_595;
    }
    get _r5191ee4dc6b03d() {
      return this.var_3134;
    }
    get enabled() {
      return this._state === a.const_1242;
    }
    get state() {
      return this._state;
    }
  }
