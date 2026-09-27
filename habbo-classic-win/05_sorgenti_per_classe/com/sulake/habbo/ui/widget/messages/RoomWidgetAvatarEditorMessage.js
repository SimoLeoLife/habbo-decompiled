// Extracted from HabboAirLauncher.deobf.js, line 161340.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetAvatarEditorMessage.as
// Obfuscated name: _i96ab78ffcc7c4e

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetAvatarEditorMessage");
  }
  static const_614 = "RWAEM_AVATAR_EDITOR_VIEW_DISPOSED";
  static WIDGET_MESSAGE_GET_WARDROBE = "RWCM_GET_WARDROBE";
  static const_198 = "RWCM_OPEN_AVATAR_EDITOR";
  _context;
  constructor(e, r = null) {
    (super(e), (this._context = r));
  }
  get context() {
    return this._context;
  }
}
