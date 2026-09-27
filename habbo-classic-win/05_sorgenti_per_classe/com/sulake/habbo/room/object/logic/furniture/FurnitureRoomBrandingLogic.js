// Estratto da HabboAirLauncher.deobf.js, riga 300465.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureRoomBrandingLogic.as
// Nome offuscato: _i0f78127ce2d941

class a extends Qr {
  static {
    n(this, "FurnitureRoomBrandingLogic");
  }
  static STUFF_DATA_KEY_STATE = "state";
  static STUFF_DATA_KEY_IMAGEURL = "imageUrl";
  static STUFF_DATA_KEY_CLICKURL = "clickUrl";
  static STUFF_DATA_KEY_OFFSET_X = "offsetX";
  static STUFF_DATA_KEY_OFFSET_Y = "offsetY";
  static STUFF_DATA_KEY_OFFSET_Z = "offsetZ";
  _re78d3d47e1ac75 = !0;
  _r543d1d922469e0 = !1;
  initialize(e) {
    (super.initialize(e),
      this._re78d3d47e1ac75 && this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.const_1314, 1));
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [gi.ROOM_AD_LOAD_IMAGE]);
  }
  processUpdateMessage(e) {
    if ((super.processUpdateMessage(e), e instanceof _i39f7ecd6ab9902 && this._r5d69153eb100a7(), e instanceof RoomObjectRoomAdUpdateMessage))
      switch (e.type) {
        case RoomObjectRoomAdUpdateMessage.ROOM_BILLBOARD_IMAGE_LOADED:
          this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_BRANDING_IMAGE_STATUS, 1, !1);
          break;
        case RoomObjectRoomAdUpdateMessage.ROOM_BILLBOARD_LOADING_FAILED:
          this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_BRANDING_IMAGE_STATUS, -1);
          break;
      }
  }
  mouseEvent(e, r) {
    e == null ||
      r == null ||
      e.type === _ifd7c1208e3417e.var_370 ||
      e.type === _ifd7c1208e3417e.DOUBLE_CLICK ||
      super.mouseEvent(e, r);
  }
  getAdClickUrl(e) {
    return e.getString(RoomObjectVariableEnum.const_710);
  }
  _r5d69153eb100a7() {
    let e = !1;
    if (this.object != null) {
      let f = this.object.getStringToStringMap();
      if (f == null) return e;
      let l = new Bc();
      l._r8476f6049cdad6(f);
      let b = 0;
      this.object.getState(0) !== b && (this.object.setState(b, 0), (e = !0));
      let _ = this.object.getModelController(),
        h = this.forceImageUrlToUseHttps(l.getValue(a.STUFF_DATA_KEY_IMAGEURL));
      if (h != null) {
        let I = _.getString(RoomObjectVariableEnum.const_888);
        (I == null || this.forceImageUrlToUseHttps(I) !== h) &&
          (_.setString(RoomObjectVariableEnum.const_888, h, !1), _.setNumber(RoomObjectVariableEnum.FURNITURE_BRANDING_IMAGE_STATUS, 0, !1), (e = !0));
      }
      let p = l.getValue(a.STUFF_DATA_KEY_CLICKURL);
      if (p != null) {
        let I = _.getString(RoomObjectVariableEnum.const_710);
        (I == null || I !== p) && (_.setString(RoomObjectVariableEnum.const_710, p), (e = !0));
      }
      let m = Number.parseInt(l.getValue(a.STUFF_DATA_KEY_OFFSET_X) ?? "", 10),
        v = Number.parseInt(l.getValue(a.STUFF_DATA_KEY_OFFSET_Y) ?? "", 10),
        w = Number.parseInt(l.getValue(a.STUFF_DATA_KEY_OFFSET_Z) ?? "", 10);
      (Number.isNaN(m) ||
        (e = this.updateOffset(RoomObjectVariableEnum.const_225, _._ra3dc9a405b5c73(RoomObjectVariableEnum.const_225), m) || e),
        Number.isNaN(v) ||
          (e = this.updateOffset(RoomObjectVariableEnum.const_406, _._ra3dc9a405b5c73(RoomObjectVariableEnum.const_406), v) || e),
        Number.isNaN(w) ||
          (e = this.updateOffset(RoomObjectVariableEnum.const_359, _._ra3dc9a405b5c73(RoomObjectVariableEnum.const_359), w) || e));
    }
    let r = this.object?.getModelController();
    if (this.object == null || r == null) return e;
    let t = r.getString(RoomObjectVariableEnum.const_888),
      i = this.getAdClickUrl(r),
      s = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_225),
      o = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_406),
      d = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_359);
    t != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new gi(gi.ROOM_AD_LOAD_IMAGE, this.object, t, i ?? ""));
    let c = `${a.STUFF_DATA_KEY_IMAGEURL}=${t ?? ""}	`;
    return (
      this._r543d1d922469e0 && (c += `${a.STUFF_DATA_KEY_CLICKURL}=${i ?? ""}	`),
      (c += `${a.STUFF_DATA_KEY_OFFSET_X}=${s}	`),
      (c += `${a.STUFF_DATA_KEY_OFFSET_Y}=${o}	`),
      (c += `${a.STUFF_DATA_KEY_OFFSET_Z}=${d}	`),
      r.setString(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM, RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_BRANDING_OPTIONS + c),
      e
    );
  }
  forceImageUrlToUseHttps(e) {
    return e != null ? e.replace("http:", "https:") : null;
  }
  updateOffset(e, r, t) {
    return this.object != null && !Number.isNaN(t) && r !== t
      ? (this.object.getModelController().setNumber(e, t), !0)
      : !1;
  }
}
