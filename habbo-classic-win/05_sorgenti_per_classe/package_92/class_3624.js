// Extracted from HabboAirLauncher.deobf.js, line 84903.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_92/class_3624.as
// Obfuscated name: _ie978cbf5f804ce

class {
    static {
      n(this, "class_3624");
    }
    static {
      jxr(this, "class_3624");
    }
    static const_201 = 1;
    static const_1205 = -1;
    static const_367 = 0;
    static const_327 = 2;
    var_3332;
    var_1655;
    var_595;
    var_3335;
    var_3984;
    var_5187;
    var_5265;
    var_3199;
    var_4036;
    var_163;
    var_4923;
    var_4531;
    var_5282;
    _state;
    _code;
    constructor(e) {
      ((this.var_3332 = e.readInteger()),
        (this.var_1655 = e.readInteger()),
        (this.var_595 = e.readString()),
        (this.var_3335 = e.readInteger()),
        (this.var_3984 = Math.max(1, e.readInteger())),
        (this.var_5187 = e.readInteger()),
        (this.var_5265 = e.readInteger()),
        (this.var_3199 = e.readInteger()),
        (this.var_4036 = e.readBoolean()),
        (this.var_163 = e.readString()),
        (this.var_4923 = e.readString()),
        (this.var_4531 = e.readInteger()),
        (this.var_5282 = e.readInteger()),
        (this._state = e.readShort()));
      let r = this.var_595;
      r.indexOf("ACH_") === 0 && (r = r.substring(4));
      let t = "0123456789";
      for (; r.length > 0 && t.indexOf(r.charAt(r.length - 1)) !== -1;) r = r.substring(0, r.length - 1);
      this._code = r;
    }
    get achievementId() {
      return this.var_3332;
    }
    get badgeId() {
      return this.var_595;
    }
    get level() {
      return this.var_1655;
    }
    get _r736ad2f604a0ee() {
      return this.var_3335;
    }
    get _re6098d625840d4() {
      return this.var_3984 - this.var_3335;
    }
    get _r14a67ba2ac03d5() {
      return this.var_5187;
    }
    get _r7a763dfc9fdb12() {
      return this.var_5265;
    }
    get _rbce4620324c2ce() {
      return this.var_3199 - this.var_3335;
    }
    get _r48f0df39b9bc8e() {
      return this.var_4036;
    }
    get category() {
      return this.var_163;
    }
    set category(e) {
      this.var_163 = e;
    }
    get _r38677d5c7e204b() {
      return this.var_4923;
    }
    get _rafd3119a0313c2() {
      return this.var_4531;
    }
    get state() {
      return this._state;
    }
    get code() {
      return this._code;
    }
    get _r352e3f0ac02cf2() {
      return this.var_1655 > 1 || this.var_4036;
    }
    get _ref26a492c38b23() {
      return this.var_5282;
    }
    setMaxProgress() {
      this.var_3199 = this.var_3984;
    }
  }
