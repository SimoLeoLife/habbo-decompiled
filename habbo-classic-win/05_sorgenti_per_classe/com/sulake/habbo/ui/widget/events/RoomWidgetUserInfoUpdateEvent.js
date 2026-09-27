// Extracted from HabboAirLauncher.deobf.js, line 161200.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetUserInfoUpdateEvent.as
// Obfuscated name: _i892e8eec4bea50

class extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetUserInfoUpdateEvent");
  }
  static BOT = "RWUIUE_BOT";
  static DEFAULT_BOT_BADGE_ID = "BOT";
  static OWN_USER = "RWUIUE_OWN_USER";
  static PEER = "RWUIUE_PEER";
  static TRADE_REASON_NO_TRADINGROOM = 3;
  static TRADE_REASON_OK = 0;
  static TRADE_REASON_SHUTDOWN = 2;
  name = "";
  motto = "";
  achievementScore;
  badgesRank = -1;
  webID = 0;
  xp = 0;
  userType;
  figure = "";
  badges = [];
  selectedBadges = [];
  groupId = 0;
  groupName = "";
  groupBadgeId = "";
  carryItem = 0;
  userRoomId = 0;
  _r53892118edc559 = !1;
  realName = "";
  allowNameChange = !1;
  amIOwner = !1;
  amIAnyRoomController = !1;
  myRoomControllerLevel = RoomControllerLevelEnum.NOT_CONTROLLER;
  _r5e040bd2e547c8 = !1;
  canBeKicked = !1;
  canBeBanned = !1;
  canBeMuted = !1;
  respectLeft = 0;
  respectReplenishesLeft = 0;
  isIgnored = !1;
  isGuildRoom = !1;
  canTrade = !1;
  canTradeReason = 0;
  targetRoomControllerLevel = RoomControllerLevelEnum.NOT_CONTROLLER;
  isFriend = !1;
  amIAnAmbassador = !1;
  isBlocked;
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
}
