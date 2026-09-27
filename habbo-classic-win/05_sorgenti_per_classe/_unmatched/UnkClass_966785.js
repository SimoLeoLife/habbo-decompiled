// Extracted from HabboAirLauncher.deobf.js, line 329929.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9667853c680298

class {
  static {
    n(this, "UnkClass_966785");
  }
  var_1271 = !1;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FURNI_CREDIT_WIDGET;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_CREDITFURNI_WIDGET, RoomWidgetCreditFurniRedeemMessage.const_274];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_CREDITFURNI_WIDGET: {
        if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
        let r = e,
          t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.id, r.category);
        if (t == null || !this._container?._rc2337883ff003a(t)) return null;
        let i = t.getStringToStringMap();
        if (i == null) return null;
        let s = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_695),
          o = i.getString(RoomObjectVariableEnum.FURNITURE_NFT_CREDIT) === "true";
        if (o && !(this._container.config?.getBoolean("nft.credit.converting.enabled") ?? !1)) return null;
        this._container.events?.dispatchEvent?.(new RoomWidgetCreditFurniUpdateEvent(RoomWidgetCreditFurniUpdateEvent.UPDATE_CREDIT_FURNI, r.id, s, o));
        break;
      }
      case RoomWidgetCreditFurniRedeemMessage.const_274: {
        if (!(e instanceof RoomWidgetCreditFurniRedeemMessage)) break;
        let r = e;
        this._container?._r2eac8239a09fe7?._rc40695c1d8b269(r.objectId);
        break;
      }
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
