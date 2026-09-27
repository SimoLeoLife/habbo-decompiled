// Extracted from HabboAirLauncher.deobf.js, line 366342.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4163.as
// Obfuscated name: _id00012c5bf948a

class extends DefaultConditionType {
  static {
    n(this, "class_4163");
  }
  var_4102 = "";
  _r3d4e59234c9001 = null;
  _r80f9d7e91c05ca = null;
  _timezoneValues = null;
  onEditStart(e) {
    let r = e._r7e8836fc336e43 === "" ? this.var_4102 : e._r7e8836fc336e43;
    this._rdce796bdd7243d(r);
  }
  createTimezoneSection(e) {
    return (
      (this._r3d4e59234c9001 = e.createDropdown(
        new DropdownParam(this.loc("wiredfurni.tooltip.timezone"), this.buildTimezoneOptions(this.var_4102)),
      )),
      (this._r80f9d7e91c05ca = e.createSection(this.l("time.timezone_selection"), this._r3d4e59234c9001)),
      (this._r80f9d7e91c05ca.visible = this._timezoneValues != null && this._timezoneValues.length > 1),
      this._r80f9d7e91c05ca
    );
  }
  _rdce796bdd7243d(e) {
    if (this._r3d4e59234c9001 == null) {
      this.buildTimezoneOptions(e);
      return;
    }
    let r = this.buildTimezoneOptions(e),
      t = r.length > 0 ? 0 : -1;
    (this._r3d4e59234c9001.reinit(r, t),
      this._r80f9d7e91c05ca != null && (this._r80f9d7e91c05ca.visible = r.length > 1));
  }
  buildTimezoneOptions(e) {
    let r = this.getTimezones(e);
    this._timezoneValues = r;
    let t = [];
    for (let i = 0; i < r.length; i += 1) t.push(new ExpandableDropdownOption(i, r[i]));
    return t;
  }
  getTimezones(e) {
    let r = this._r41f5cc7d3516ce.roomEngine,
      t = r == null ? null : r.getProperty("wired.timezones"),
      i = t == null || t === "" ? ["UTC"] : t.split(","),
      s = [];
    e !== "" && s.push(e);
    for (let o of i) o !== e && s.push(o);
    return s;
  }
  readStringParamFromForm() {
    if (this._r3d4e59234c9001 == null || this._timezoneValues == null) return "";
    let e = this._r3d4e59234c9001.selectedId;
    if (e < 0 || e >= this._timezoneValues.length) return "";
    let r = this._timezoneValues[e];
    return ((this.var_4102 = r), r);
  }
}
