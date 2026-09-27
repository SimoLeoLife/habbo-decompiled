// Extracted from HabboAirLauncher.deobf.js, line 371411.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/newvariablepicker/NewVariablePickerHelper.as
// Obfuscated name: _if477a7051ad4ea

class a {
  constructor(e) {
    this._roomEvents = e;
  }
  static {
    n(this, "NewVariablePickerHelper");
  }
  static MAX_HISTORY = 20;
  _rd94eef2fcbf5c8 = new B();
  _r90a57b28fe14ce = new B();
  var_2037 = new B();
  _rec171ee514ff0f(e) {
    let r = e.variableTarget,
      t = e.variableId,
      i = this._roomEvents.roomId;
    if (i === 0) return;
    this._rd94eef2fcbf5c8.hasKey(i) || this._rd94eef2fcbf5c8.add(i, new B());
    let s = this._rd94eef2fcbf5c8.getValue(i);
    s.hasKey(r) || s.add(r, []);
    let o = s.getValue(r),
      d = o.indexOf(t);
    (d >= 0 && o.splice(d, 1), o.splice(0, 0, t), o.length > a.MAX_HISTORY && o.pop());
  }
  _rf7bf2a646ede14(e) {
    let r = this._roomEvents.roomId;
    if (r === 0 || !this._rd94eef2fcbf5c8.hasKey(r)) return [];
    let t = this._rd94eef2fcbf5c8.getValue(r);
    return t.hasKey(e) ? t.getValue(e) : [];
  }
  acquireNodeView(e) {
    if (this.var_2037.hasKey(e)) {
      let t = this.var_2037.getValue(e);
      if (t.length > 0) return t.pop();
    }
    if (!this._r90a57b28fe14ce.hasKey(e)) {
      let t =
        this._roomEvents.presetManager.wiredCtrl._rd65848eed931f7("search_tree_dropdown");
      this._r90a57b28fe14ce.add(e, t.findChildByName("node_template"));
    }
    return this._r90a57b28fe14ce.getValue(e).clone();
  }
  releaseNodeView(e, r) {
    (this.var_2037.hasKey(e) || this.var_2037.add(e, []),
      this.var_2037.getValue(e).push(r));
  }
}
