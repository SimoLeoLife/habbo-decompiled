// Extracted from HabboAirLauncher.deobf.js, line 161428.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetChatSelectAvatarMessage.as
// Obfuscated name: _i0be3646e0a17f5

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetChatSelectAvatarMessage");
  }
  static WIDGET_MESSAGE_SELECT_AVATAR = "RWCSAM_MESSAGE_SELECT_AVATAR";
  var_344;
  _userName;
  var_2440;
  constructor(e, r, t, i) {
    (super(e), (this.var_344 = r), (this._userName = t), (this.var_2440 = i));
  }
  get objectId() {
    return this.var_344;
  }
  get userName() {
    return this._userName;
  }
  get roomId() {
    return this.var_2440;
  }
}
