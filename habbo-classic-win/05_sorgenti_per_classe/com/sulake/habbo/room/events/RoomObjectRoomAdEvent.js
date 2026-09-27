// Extracted from HabboAirLauncher.deobf.js, line 180890.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectRoomAdEvent.as
// Obfuscated name: _ifdf45f6401be78

class a extends RoomObjectEvent {
  constructor(r, t, i = "", s = "", o = !1, d = !1) {
    super(r, t, o, d);
    this.var_363 = i;
    this.var_3574 = s;
  }
  static {
    n(this, "RoomObjectRoomAdEvent");
  }
  static ROOM_AD_FURNI_CLICK = "RORAE_ROOM_AD_FURNI_CLICK";
  static ROOM_AD_FURNI_DOUBLE_CLICK = "RORAE_ROOM_AD_FURNI_DOUBLE_CLICK";
  static ROOM_AD_LOAD_IMAGE = "RORAE_ROOM_AD_LOAD_IMAGE";
  static ROOM_AD_TOOLTIP_HIDE = "RORAE_ROOM_AD_TOOLTIP_HIDE";
  static ROOM_AD_TOOLTIP_SHOW = "RORAE_ROOM_AD_TOOLTIP_SHOW";
  get clickUrl() {
    return this.var_3574;
  }
  get imageUrl() {
    return this.var_363;
  }
  clone() {
    return new a(this.type, this.object, this.imageUrl, this.clickUrl, this.bubbles, this.cancelable);
  }
}
