// Extracted from HabboAirLauncher.deobf.js, line 366469.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_4219.as
// Obfuscated name: _i94d768e67b9501

class a extends DefaultConditionType {
  static {
    n(this, "class_4219");
  }
  static const_821 = "yyyy/MM/dd HH:mm";
  var_2723 = null;
  format = null;
  get code() {
    return ConditionCodes.DATE_RANGE_ACTIVE;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = "YYYY/MM/DD HH:MM";
    ((this.var_2723 = e._r178edc7e663bd7(new it("", 1e3, null, -1, null, !0, i))),
      (this.format = e._r178edc7e663bd7(new it("", 1e3, null, -1, null, !0, i))),
      t.addElements(
        e.createSection(this.l("startdate"), this.var_2723),
        e.createSection(this.l("enddate"), this.format),
      ));
  }
  readIntParamsFromForm() {
    let e = [],
      r = a._r77274510043f20(this.var_2723.text);
    if (!Number.isNaN(r)) {
      e.push(Math.trunc(r / 1e3));
      let t = a._r77274510043f20(this.format.text);
      Number.isNaN(t) || e.push(Math.trunc(t / 1e3));
    }
    return e;
  }
  onEditStart(e) {
    if (e.intParams.length > 0) {
      let r = new Date(e.intParams[0] * 1e3);
      this.var_2723.text = a._rfdbb4e26d4980d(r);
    } else this.var_2723.text = "";
    if (e.intParams.length > 1) {
      let r = new Date(e.intParams[1] * 1e3);
      this.format.text = a._rfdbb4e26d4980d(r);
    } else this.format.text = "";
  }
  static _r77274510043f20(e) {
    return Date.parse(e);
  }
  static _rfdbb4e26d4980d(e) {
    let r = e.getFullYear().toString().padStart(4, "0"),
      t = (e.getMonth() + 1).toString().padStart(2, "0"),
      i = e.getDate().toString().padStart(2, "0"),
      s = e.getHours().toString().padStart(2, "0"),
      o = e.getMinutes().toString().padStart(2, "0");
    return `${r}/${t}/${i} ${s}:${o}`;
  }
}
