// Extracted from HabboAirLauncher.deobf.js, line 304798.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/CameraSlotData.as
// Obfuscated name: _ic8166e76e7af49

class {
  static {
    n(this, "CameraSlotData");
  }
  image = null;
  isEmpty = !1;
  var_1696 = null;
  setDate(e) {
    this.var_1696 = e;
  }
  get dateString() {
    return this.var_1696 == null
      ? ""
      : `${this.var_1696.getDate()}/${this.var_1696.getMonth() + 1}/${this.var_1696.getFullYear()} ${this.var_1696.getHours()}:${this.addLeadingZero(this.var_1696.getMinutes())}`;
  }
  getDateTimestamp() {
    return this.var_1696?.getTime() ?? 0;
  }
  addLeadingZero(e) {
    let r = e.toString();
    return r.length === 1 ? `0${r}` : r;
  }
}
