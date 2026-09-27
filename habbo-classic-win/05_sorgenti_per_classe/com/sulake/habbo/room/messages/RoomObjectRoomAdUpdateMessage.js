// Extracted from HabboAirLauncher.deobf.js, line 181540.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectRoomAdUpdateMessage.as
// Obfuscated name: _ida7a8e19a52e05

class extends RoomObjectUpdateMessage {
  constructor(r, t, i, s = -1, o = null) {
    super(null, null);
    this._type = r;
    this._asset = t;
    this.var_3574 = i;
    this.var_344 = s;
    this._bitmapData = o;
  }
  static {
    n(this, "RoomObjectRoomAdUpdateMessage");
  }
  static ROOM_AD_ACTIVATE = "RORUM_ROOM_AD_ACTIVATE";
  static ROOM_BILLBOARD_IMAGE_LOADED = "RORUM_ROOM_BILLBOARD_IMAGE_LOADED";
  static ROOM_BILLBOARD_LOADING_FAILED = "RORUM_ROOM_BILLBOARD_IMAGE_LOADING_FAILED";
  get type() {
    return this._type;
  }
  get asset() {
    return this._asset;
  }
  get clickUrl() {
    return this.var_3574;
  }
  get objectId() {
    return this.var_344;
  }
  get bitmapData() {
    return this._bitmapData;
  }
}
