// Estratto da HabboAirLauncher.deobf.js, riga 257322.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/roomsettings/BanListCtrl.as
// Nome offuscato: _i371306483ee1e7

class extends RI {
  static {
    n(this, "BanListCtrl");
  }
  var_376 = -1;
  constructor(e) {
    super(e, !1);
  }
  get selectedRow() {
    return this.var_376;
  }
  getRowView() {
    return this._navigator?.getXmlWindow("ros_banned_user");
  }
  onBgMouseClick(e) {
    let r = e.target,
      t = r?.parent;
    t != null &&
      ((this.var_376 = t.id), this.refreshColorsAfterClick(r?.findParentByName("moderation_banned_users")));
  }
  getBgColor(e, r) {
    return e === this.var_376 ? 4288329945 : super.getBgColor(e, r);
  }
  refreshColorsAfterClick(e) {
    if (e != null)
      for (let r = 0; r < this.userCount; r++) {
        let t = e.getListItemAt(r);
        t != null && (t.color = this.getBgColor(r, !1));
      }
  }
}
