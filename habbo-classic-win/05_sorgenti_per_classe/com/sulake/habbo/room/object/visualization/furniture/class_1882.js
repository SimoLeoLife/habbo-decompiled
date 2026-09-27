// Extracted from HabboAirLauncher.deobf.js, line 277991.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_1882.as
// Obfuscated name: _i3726d1e717b565

class extends VI {
  static {
    n(this, "class_1882");
  }
  var_2707 = null;
  _r5b42810638f76b = 0;
  updateModel(e) {
    if (this.object != null) {
      let r = this.getThumbnailURL();
      if (this.var_2707 !== r)
        if (((this.var_2707 = r), this.var_2707 != null && this.var_2707 !== "")) {
          let t = ++this._r5b42810638f76b;
          _idc5dea63909f80__(this.var_2707)
            .then((i) => {
              t === this._r5b42810638f76b && this._r779052eba46805(i);
            })
            .catch((i) => {});
        } else this._r779052eba46805(null);
    }
    return super.updateModel(e);
  }
  getThumbnailURL() {
    throw new Al("This method must be overridden!");
  }
}
