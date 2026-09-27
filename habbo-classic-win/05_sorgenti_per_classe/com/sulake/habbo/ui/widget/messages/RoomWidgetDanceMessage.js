// Extracted from HabboAirLauncher.deobf.js, line 161538.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetDanceMessage.as
// Obfuscated name: _i40433dc1e20340

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetDanceMessage");
  }
  static _r7ab15ec5563b55 = 0;
  static const_468 = "RWCM_MESSAGE_DANCE";
  static _r3548a77d7ad43a = [2, 3, 4];
  _style;
  constructor(e) {
    (super(a.const_468), (this._style = e));
  }
  get style() {
    return this._style;
  }
}
