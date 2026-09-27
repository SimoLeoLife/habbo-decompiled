// Extracted from HabboAirLauncher.deobf.js, line 92590.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_3267.as
// Obfuscated name: _i2a6c8ac1dd49ed

class {
    static {
      n(this, "class_3267");
    }
    static {
      MSr(this, "class_3267");
    }
    static const_1143 = 3;
    static STATE_OPEN = 1;
    static const_911 = 2;
    var_3152;
    _state;
    var_3180;
    var_4918;
    var_3941;
    _priority;
    var_4038;
    var_4726;
    var_5466;
    var_138;
    _reportedUserName;
    var_4413;
    var_4407;
    var_1065;
    _rf1ea6a285b66db;
    var_2918;
    var_1271 = !1;
    _r722952ed0ca2d0;
    constructor(e, r, t, i, s, o, d, c, f, l, b, _, h, p, m, v) {
      ((this.var_3152 = e),
        (this._state = r),
        (this.var_3180 = t),
        (this.var_4918 = i),
        (this.var_3941 = s),
        (this._priority = o),
        (this.var_4038 = d),
        (this.var_4726 = c),
        (this.var_5466 = f),
        (this.var_138 = l),
        (this._reportedUserName = b),
        (this.var_4413 = _),
        (this.var_4407 = h),
        (this.var_1065 = p),
        (this._rf1ea6a285b66db = m),
        (this.var_2918 = v),
        (this._r722952ed0ca2d0 = _ia411d8d8194a3a()));
    }
    get issueId() {
      return this.var_3152;
    }
    get state() {
      return this._state;
    }
    get categoryId() {
      return this.var_3180;
    }
    get reportedCategoryId() {
      return this.var_4918;
    }
    get _rc0bca29f4c3bbd() {
      return this.var_3941;
    }
    get priority() {
      return this._priority;
    }
    get groupingId() {
      return this.var_4038;
    }
    get _r594210f2d887d0() {
      return this.var_4726;
    }
    get reporterUserName() {
      return this.var_5466;
    }
    get reportedUserId() {
      return this.var_138;
    }
    get onPendingCallsForHelp() {
      return this._reportedUserName;
    }
    get pickerUserId() {
      return this.var_4413;
    }
    get pickerUserName() {
      return this.var_4407;
    }
    get message() {
      return this.var_1065;
    }
    get _r61a8bd3554b582() {
      return this._rf1ea6a285b66db;
    }
    get patterns() {
      return this.var_2918;
    }
    get disposed() {
      return this.var_1271;
    }
    dispose() {
      if (!this.disposed) {
        for (let e of this.var_2918) e.dispose();
        ((this.var_2918 = []), (this.var_1271 = !0));
      }
    }
    getOpenTime(e) {
      let r = Math.floor((this.var_3941 + e - this._r722952ed0ca2d0) / 1e3),
        t = Math.floor(r / 60),
        i = t % 60,
        s = Math.floor(t / 60),
        o = `${i < 10 ? "0" : ""}${i}`;
      return `${`${s < 10 ? "0" : ""}${s}`}:${o}`;
    }
  }
