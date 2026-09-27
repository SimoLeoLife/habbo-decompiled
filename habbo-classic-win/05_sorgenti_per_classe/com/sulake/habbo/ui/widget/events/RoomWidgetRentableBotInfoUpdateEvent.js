// Extracted from HabboAirLauncher.deobf.js, line 160952.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRentableBotInfoUpdateEvent.as
// Obfuscated name: _ib7c64febb72df9

class a extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetRentableBotInfoUpdateEvent");
  }
  static DEFAULT_BOT_BADGE_ID = "RENTABLE_BOT";
  static RENTABLE_BOT = "RWRBIUE_RENTABLE_BOT";
  name = "";
  motto = "";
  webID = 0;
  figure = "";
  badges = [];
  carryItem = 0;
  userRoomId = 0;
  ownerId;
  ownerName;
  amIOwner = !1;
  amIAnyRoomController = !1;
  myRoomControllerLevel = RoomControllerLevelEnum.NOT_CONTROLLER;
  botSkills;
  constructor(e = !1, r = !1) {
    super(a.RENTABLE_BOT, e, r);
  }
}
