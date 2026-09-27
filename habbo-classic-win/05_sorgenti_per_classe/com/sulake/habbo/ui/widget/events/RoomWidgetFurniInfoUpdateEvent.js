// Estratto da HabboAirLauncher.deobf.js, riga 160297.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetFurniInfoUpdateEvent.as
// Nome offuscato: _idc1039edd6cd0f

class extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetFurniInfoUpdateEvent");
  }
  static FURNI = "RWFIUE_FURNI";
  id = 0;
  category = 0;
  name = "";
  description = "";
  image = null;
  classId = 0;
  isWallItem = !1;
  _rf3da64b740a064 = !1;
  isRoomOwner = !1;
  _rea9739215487be = RoomControllerLevelEnum.NOT_CONTROLLER;
  isAnyRoomController = !1;
  expiration = -1;
  purchaseOfferId = -1;
  extraParam = "";
  isOwner = !1;
  stuffData = null;
  groupId = 0;
  ownerId = 0;
  ownerName = "";
  usagePolicy = 0;
  rentOfferId = -1;
  purchaseCouldBeUsedForBuyout;
  rentCouldBeUsedForBuyout;
  availableForBuildersClub;
  isNft;
  bcOfferId = -1;
  tradeable;
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
}
