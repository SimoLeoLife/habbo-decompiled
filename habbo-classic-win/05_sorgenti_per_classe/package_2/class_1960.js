// Extracted from HabboAirLauncher.deobf.js, line 105611.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_2/class_1960.as
// Obfuscated name: _i7548a3d6a48cd9

class a {
    static {
      n(this, "class_1960");
    }
    static {
      HZr(this, "class_1960");
    }
    static const_95 = 1;
    static const_139 = 3;
    static const_78 = 4;
    static const_80 = 0;
    static const_133 = 2;
    static _r3b72a72102e53a = 2;
    static _r08464ed0d6e7a5 = 0;
    static _r214a20a65f5489 = 1;
    var_2440 = 0;
    _name = "";
    _description = "";
    _doorMode = 0;
    var_3180 = 0;
    _rf99e391786a9d2 = 0;
    _raccdcee6b53867 = 0;
    var_598 = [];
    _tradeMode = 0;
    _rc062fab3f0e0c1 = !1;
    _r2e5ad112bd4b10 = !1;
    _rdb0845610814b8 = !1;
    _r4913fbe7f03029 = !1;
    _r60833824467646 = 0;
    _floorThickness = 0;
    _rb4bfc731f4385a = !0;
    _r53648d28eb838c = !0;
    var_4846 = 0;
    _rb952cf9159d253 = !0;
    var_4595 = 0;
    _r3da153730b6f08 = !1;
    _r23830b8b42df37 = null;
    _rbb806864574082 = null;
    _r35ff3a6ed789da = 0;
    _r71641e29fafe50 = null;
    _rd36e24b9e9b322 = null;
    var_2763 = null;
    var_3818 = null;
    _rba2e5c9d609cb9 = !1;
    _r23b2644e54d79c = !1;
    static getDoorModeLocalizationKey(e) {
      switch (e) {
        case a.const_80:
          return "${navigator.door.mode.open}";
        case a.const_95:
          return "${navigator.door.mode.closed}";
        case a.const_133:
          return "${navigator.door.mode.password}";
        case a.const_139:
          return "${navigator.door.mode.invisible}";
        case a.const_78:
          return "${navigator.door.mode.noobs_only}";
        default:
          return "";
      }
    }
    get tradeMode() {
      return this._tradeMode;
    }
    set tradeMode(e) {
      this._tradeMode = e;
    }
    get _rf5545c5fca5ee0() {
      return this._rc062fab3f0e0c1;
    }
    set _rf5545c5fca5ee0(e) {
      this._rc062fab3f0e0c1 = e;
    }
    get _allowFoodConsumeCheckBox() {
      return this._r2e5ad112bd4b10;
    }
    set _allowFoodConsumeCheckBox(e) {
      this._r2e5ad112bd4b10 = e;
    }
    get _allowWalkThroughCheckBox() {
      return this._rdb0845610814b8;
    }
    set _allowWalkThroughCheckBox(e) {
      this._rdb0845610814b8 = e;
    }
    get _hideWallsCheckBox() {
      return this._r4913fbe7f03029;
    }
    set _hideWallsCheckBox(e) {
      this._r4913fbe7f03029 = e;
    }
    get _rdbce713bddeb2b() {
      return this._r60833824467646;
    }
    set _rdbce713bddeb2b(e) {
      this._r60833824467646 = e;
    }
    get _r2cacaaa4b8c0dc() {
      return this._floorThickness;
    }
    set _r2cacaaa4b8c0dc(e) {
      this._floorThickness = e;
    }
    get _re4bafec6ef50f1() {
      return this._rb4bfc731f4385a;
    }
    set _re4bafec6ef50f1(e) {
      this._rb4bfc731f4385a = e;
    }
    get _r02180e03cb59e4() {
      return this._r53648d28eb838c;
    }
    set _r02180e03cb59e4(e) {
      this._r53648d28eb838c = e;
    }
    get idleSleepTimeoutSeconds() {
      return this.var_4846;
    }
    set idleSleepTimeoutSeconds(e) {
      this.var_4846 = e;
    }
    get _r1058fab0daff8c() {
      return this._rb952cf9159d253;
    }
    set _r1058fab0daff8c(e) {
      this._rb952cf9159d253 = e;
    }
    get idleAutokickTimeoutSeconds() {
      return this.var_4595;
    }
    set idleAutokickTimeoutSeconds(e) {
      this.var_4595 = e;
    }
    get _muteAllPetsCheckBox() {
      return this._r3da153730b6f08;
    }
    set _muteAllPetsCheckBox(e) {
      this._r3da153730b6f08 = e;
    }
    get roomId() {
      return this.var_2440;
    }
    set roomId(e) {
      this.var_2440 = e;
    }
    get name() {
      return this._name;
    }
    set name(e) {
      this._name = e;
    }
    get description() {
      return this._description;
    }
    set description(e) {
      this._description = e;
    }
    get _rf742cf771d167a() {
      return this._doorMode;
    }
    set _rf742cf771d167a(e) {
      this._doorMode = e;
    }
    get categoryId() {
      return this.var_3180;
    }
    set categoryId(e) {
      this.var_3180 = e;
    }
    get maximumVisitors() {
      return this._rf99e391786a9d2;
    }
    set maximumVisitors(e) {
      this._rf99e391786a9d2 = e;
    }
    get _rda9bf1f83f26d4() {
      return this._raccdcee6b53867;
    }
    set _rda9bf1f83f26d4(e) {
      this._raccdcee6b53867 = e;
    }
    get tags() {
      return this.var_598;
    }
    set tags(e) {
      this.var_598 = e;
    }
    _r15f2f86c1ad40a(e, r) {
      this._r23830b8b42df37 &&
        (this._r23830b8b42df37.set(e, r), (this._rbb806864574082 = null), (this._r35ff3a6ed789da = e));
    }
    get _r3d55e7f65e7db4() {
      return this.var_2763;
    }
    set _r3d55e7f65e7db4(e) {
      this.var_2763 = e;
    }
    get _originalData() {
      return this._r23830b8b42df37;
    }
    set _originalData(e) {
      this._r23830b8b42df37 = e;
    }
    get _r6cc9aac3e542f2() {
      if (!this._rbb806864574082) {
        let e = this._r23830b8b42df37 ? Array.from(this._r23830b8b42df37.values()) : [];
        (e.sort((r, t) => r.userName.toLocaleLowerCase().localeCompare(t.userName.toLocaleLowerCase())),
          (this._rbb806864574082 = e));
      }
      return this._rbb806864574082;
    }
    get highlightedUserId() {
      return this._r35ff3a6ed789da;
    }
    _ree3602773addc3(e, r) {
      (this._r71641e29fafe50 ? (this._rd36e24b9e9b322 = null) : (this._r71641e29fafe50 = new Map()),
        this._r71641e29fafe50.set(e, r));
    }
    get _r148e5b11edf482() {
      return this._r71641e29fafe50;
    }
    get bannedUsersList() {
      if (!this._rd36e24b9e9b322) {
        let e = this._r71641e29fafe50 ? Array.from(this._r71641e29fafe50.values()) : [];
        (e.sort((r, t) => r.userName.toLocaleLowerCase().localeCompare(t.userName.toLocaleLowerCase())),
          (this._rd36e24b9e9b322 = e));
      }
      return this._rd36e24b9e9b322;
    }
    get chatSettings() {
      return this.var_3818;
    }
    set chatSettings(e) {
      this.var_3818 = e;
    }
    get _re42218fc47fcad() {
      return this._rba2e5c9d609cb9;
    }
    set _re42218fc47fcad(e) {
      this._rba2e5c9d609cb9 = e;
    }
    get _r067cac897dfb7b() {
      return this._r23b2644e54d79c;
    }
    set _r067cac897dfb7b(e) {
      this._r23b2644e54d79c = e;
    }
  }
