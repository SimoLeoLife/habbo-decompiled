// Estratto da HabboAirLauncher.deobf.js, riga 348685.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/newvariablepicker/tabbuttons/TabButtonConfigs.as
// Nome offuscato: _i7ed019c28ab2de

class a {
  constructor(e) {
    this._r6cb66fd1bf03f7 = e;
    this.var_2124 = [
      new _ie9b036cbdb0a9d(a.ALL_TAB_ID, "var_picker_all", "wiredfurni.variable_picker.tab.all", () =>
        this._r440d2730e59e5f(),
      ),
      new _ie9b036cbdb0a9d(a.RECENT_TAB_ID, "var_picker_recent", "wiredfurni.variable_picker.tab.recent", () =>
        this._r3bf1c595f093f6(),
      ),
      new _ie9b036cbdb0a9d(a.USER_CREATED_TAB_ID, "var_picker_usermade", "wiredfurni.variable_picker.tab.user_created", () =>
        this._r5a3757a82f5618(),
      ),
      new _ie9b036cbdb0a9d(a.DYNAMIC_TAB_ID, "var_picker_smart", "wiredfurni.variable_picker.tab.dynamic", () =>
        this._ree9635b865ccf3(),
      ),
      new _ie9b036cbdb0a9d(a.INTERNAL_TAB_ID, "var_picker_internal", "wiredfurni.variable_picker.tab.internal", () =>
        this._ra5fe5ae55d6736(),
      ),
      new _ie9b036cbdb0a9d(a.var_4803, "var_picker_search", "wiredfurni.variable_picker.tab.search", () =>
        this.searchFilter(),
      ),
    ];
  }
  static {
    n(this, "TabButtonConfigs");
  }
  static ALL_TAB_ID = 0;
  static RECENT_TAB_ID = 1;
  static USER_CREATED_TAB_ID = 2;
  static DYNAMIC_TAB_ID = 3;
  static INTERNAL_TAB_ID = 4;
  static var_4803 = 5;
  var_2124;
  get tabButtons() {
    return this.var_2124;
  }
  nodesFromVector(e, r = !1) {
    let t = new _ia3fbb4075934db(null, null);
    for (let i of e) {
      let s = we.splitName(i),
        o = t;
      for (let d = 0; d < s.length; d += 1) {
        let c = s[d],
          f = d === s.length - 1,
          l = o._r96efd6bcfb9bd2(c);
        (l == null && ((l = new _ia3fbb4075934db(f ? i : null, c)), o._r0db14f6f7b27c4(l)), (o = l));
      }
    }
    if (r) for (let i of t.children) i.flatten(!0);
    return t;
  }
  _r440d2730e59e5f() {
    return this.nodesFromVector(this._r6cb66fd1bf03f7._re5fad65d75b7cf);
  }
  _r3bf1c595f093f6() {
    let e = [],
      r = this._r6cb66fd1bf03f7._r41f5cc7d3516ce._rb85a698a5a11d9._rf7bf2a646ede14(
        this._r6cb66fd1bf03f7.variableTarget,
      );
    for (let t of r) {
      let i = this._r6cb66fd1bf03f7._r90dedf31e85b00(t);
      i != null && e.push(i);
    }
    return this.nodesFromVector(e, !0);
  }
  _r5a3757a82f5618() {
    let e = [];
    for (let r of this._r6cb66fd1bf03f7._re5fad65d75b7cf)
      (r.variableType === class_3973.var_4355 || r.variableType === class_3973.var_5852) && e.push(r);
    return this.nodesFromVector(e);
  }
  _ree9635b865ccf3() {
    let e = [];
    for (let r of this._r6cb66fd1bf03f7._re5fad65d75b7cf) r.variableType === class_3973.var_4430 && e.push(r);
    return this.nodesFromVector(e);
  }
  _ra5fe5ae55d6736() {
    let e = [];
    for (let r of this._r6cb66fd1bf03f7._re5fad65d75b7cf) r.variableType === class_3973.INTERNAL && e.push(r);
    return this.nodesFromVector(e);
  }
  searchFilter() {
    let e = this._r6cb66fd1bf03f7.inputField.text;
    if (e.length === 0) return this.nodesFromVector([]);
    let r = e.split(" "),
      t = [];
    for (let i of this._r6cb66fd1bf03f7._re5fad65d75b7cf) {
      let s = !0;
      for (let o of r)
        if (i.variableName.toLowerCase().indexOf(o.toLowerCase()) === -1) {
          s = !1;
          break;
        }
      s && t.push(i);
    }
    return this.nodesFromVector(t, !0);
  }
}
