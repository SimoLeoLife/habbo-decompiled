// Extracted from HabboAirLauncher.deobf.js, line 305696.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/AvatarContextInfoButtonView.as
// Obfuscated name: _ifa71026768d42e

class extends mX {
  static {
    n(this, "AvatarContextInfoButtonView");
  }
  _userId = 0;
  _userName = "";
  var_3651 = 0;
  var_3277 = !1;
  var_3632 = 0;
  var_857 = !1;
  constructor(e) {
    super(e);
  }
  get userId() {
    return this._userId;
  }
  get userType() {
    return this.var_3651;
  }
  get roomIndex() {
    return this.var_3632;
  }
  get userName() {
    return this._userName;
  }
  get allowNameChange() {
    return this.var_3277;
  }
  get isBlocked() {
    return this.var_857;
  }
  static setup(e, r, t, i, s, o = !1, d = !1, c = !1) {
    ((e._userId = r),
      (e._userName = t),
      (e.var_3651 = s),
      (e.var_3632 = i),
      (e.var_3277 = o),
      (e.var_231 = d),
      (e.var_857 = c),
      this.setupContext(e));
  }
  updateWindow() {
    let e = this.widget;
    if (e?.assets == null || e.windowManager == null) return;
    if (this._window == null) {
      let t = e.assets.getAssetByName("avatar_info_widget")?.content ?? null;
      if (
        ((this._window = t != null ? e.windowManager.buildFromXML(t, 0) : null),
        this._window == null)
      )
        return;
    }
    (this._window.setParamFlag(N._re3bd61027cfd94, !1),
      this._window.findChildByName("border")?.setParamFlag(N._re3bd61027cfd94, !1));
    let r = this._window.findChildByName("name");
    if (
      (r != null &&
        (this.var_857
          ? ((r.italic = !0), (r.caption = "${infostand.blocked_user}"))
          : ((r.italic = !1), (this._window.findChildByName("name").caption = this._userName))),
      this.updateRelationshipStatus(),
      !this.var_3277)
    )
      ((this._window.findChildByName("change_name_container").visible = !1),
        (this._window.height = 39));
    else {
      let t = this._window.findChildByName("change_name_container");
      t != null &&
        ((t.visible = !0),
        (this._window.height = 39 + t.height),
        this.addMouseClickListener(t, this.clickHandler));
    }
    this.activeView = this._window;
  }
  getOffset(e) {
    let r = -(this.var_115?.height ?? 0);
    return (
      this.var_3651 === RoomObjectTypeEnum.OBJECT_TYPE_USER ||
      this.var_3651 === RoomObjectTypeEnum.const_543 ||
      this.var_3651 === RoomObjectTypeEnum.const_965
        ? (r -= 10)
        : (r -= 4),
      r
    );
  }
  updateRelationshipStatus() {
    if (this.widget?.friendList != null && this._window != null) {
      let e = this._window.findChildByName("relationship_status");
      e != null &&
        (e.assetUri = `relationship_status_${en._r23cf619d44ca19(this.widget.friendList._rd4c8265c0d402f(this.userId))}`);
    }
  }
  get widget() {
    return this.var_17;
  }
}
