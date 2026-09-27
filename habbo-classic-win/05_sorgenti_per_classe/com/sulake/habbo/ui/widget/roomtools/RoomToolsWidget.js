// Estratto da HabboAirLauncher.deobf.js, riga 326473.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomToolsWidget.as
// Nome offuscato: _i5fb4c00ce52ab2

class a extends RoomWidgetBase {
  static {
    n(this, "RoomToolsWidget");
  }
  static ROOM_ENTER_INFO_ENABLED_KEY = "room.enter.info.enabled";
  static ROOM_VISIT_HISTORY = pCe.shared;
  _currentRoomName = "";
  var_114;
  _r781e70fafd4b9b;
  var_21;
  _rb7fab1e25a8762;
  var_1149 = null;
  constructor(e, r, t, i, s) {
    (super(e, r, t, e.containerRef?.localization ?? null),
      (this.var_21 = i),
      (this._rb7fab1e25a8762 = s),
      (this._r781e70fafd4b9b = new bCe(this, r, t)),
      (this.var_114 = new uCe(this, r, t)),
      (this.handler.widget = this),
      this.var_114.updateRoomHistoryButtons(),
      this.var_114.setChatHistoryButton(this._rb7fab1e25a8762 != null));
    let o = this.handler.containerRef?.config?.getProperty("camera.launch.ui.position") ?? "";
    (this.var_114.setCameraButton(
      this.handler.containerRef?.sessionDataManager?.isPerkAllowed("CAMERA") === !0 &&
        (o.trim() === "" || o === "room-menu"),
    ),
      this.var_114.setLikeButton(this.handler._r43a02485c61e00),
      this.var_114.setAchievementsButton(
        (this.handler.containerRef?._rddef5461e8915c?._rfb9b76b95ed910?.length ?? 0) > 0,
      ),
      this.handler.containerRef?._rddef5461e8915c?.events.addEventListener?.(
        WiredAchievementsUpdatedEvent.WIRED_ACHIEVEMENTS_UPDATED,
        this._radeba2a5dcbcec,
      ));
    let d = this.handler.containerRef?.sessionDataManager;
    this.var_114.setCollapsed(d?.isNoob === !0 || !((d?.uiFlags ?? 0) & _i5a1c5671564b8b._rcf00a07cad041a));
  }
  dispose() {
    (this.var_1149?.stop(),
      (this.var_1149 = null),
      this.handler.containerRef?._rddef5461e8915c?.events.removeEventListener?.(
        WiredAchievementsUpdatedEvent.WIRED_ACHIEVEMENTS_UPDATED,
        this._radeba2a5dcbcec,
      ),
      this.var_114?.dispose(),
      (this.var_114 = null),
      this._r781e70fafd4b9b?.dispose(),
      (this._r781e70fafd4b9b = null),
      (this._rb7fab1e25a8762 = null),
      (this.var_21 = null),
      super.dispose());
  }
  release() {
    (this.var_114?.release(),
      this.var_114 != null && (this.var_114.visible = !1),
      this._r781e70fafd4b9b?.hide(),
      this._rb7fab1e25a8762 != null && (this._rb7fab1e25a8762.visible = !1),
      super.release());
  }
  reuse(e) {
    (super.reuse(e),
      (this.var_21 = e),
      this.var_114 != null && (this.var_114.visible = !0));
  }
  get handler() {
    return this._handler;
  }
  get _rafd5b9130c4bfd() {
    return this._rb7fab1e25a8762;
  }
  get _r0b49fe8ef161a7() {
    return a.ROOM_VISIT_HISTORY;
  }
  get _r5b47bc383b6102() {
    return this._currentRoomName;
  }
  _r2aa8520dadf0bb(e) {
    a.ROOM_VISIT_HISTORY._r2ca309f125f1e1(e.flatId, e.roomName);
  }
  _r8d438559cfbbe4(e) {
    (a.ROOM_VISIT_HISTORY._r5bf59105c05bb3(e.flatId, e.roomName),
      this.var_114?.setLikeButton(this.handler._r43a02485c61e00));
  }
  showRoomInfo(e, r, t, i) {
    ((this._currentRoomName = r),
      this._r55d3f104165a61() && this._r781e70fafd4b9b?.showRoomInfo(e, r, t, i));
  }
  enterNewRoom(e) {
    this.var_114 == null ||
      this._r781e70fafd4b9b == null ||
      (this.var_114.disableRoomHistoryButtons(),
      this.var_1149?.stop(),
      (this.var_1149 = new _i05394ecc0c0c4d(2e3, 1)),
      this.var_1149.addEventListener(DeBouncer.addEventListener, this._r56e36861dabdcb),
      this.var_1149.start(),
      this._r781e70fafd4b9b.setElementVisible("tags", !0));
  }
  setCollapsed(e) {
    this.var_114?.setCollapsed(e);
  }
  _r6822d89b476fe5(e) {
    return this.var_114?.window?.findChildByName(e) ?? null;
  }
  _r19f90ba0ec62cd() {
    return this.var_114?.right ?? 0;
  }
  getChatInputY() {
    return this.var_21?._r571a3c8f0b3e23(RoomWidgetEnum.CHAT_INPUT_WIDGET)?.getChatInputY() ?? 0;
  }
  _rcf65342580ee18() {
    return this.var_114?.right ?? 0;
  }
  _rbc1853fd00ccee() {
    let e = this.var_21 != null ? this.var_21._rd2fe5d3b54ef12() : Number.NaN;
    return ((Number.isNaN(e) || e <= 0) && (e = 1), String(Math.round(Math.log(e) / Math.LN2) + 1));
  }
  _r0d873f726c47d7(e) {
    return this.var_21 != null && this.var_21._ra0983a9ebe293e(e);
  }
  _rf7b390f9b3bea1(e) {
    this.var_21?._raf3b0c3735fca6(e);
  }
  _rd5cd97aa68be79() {
    let e = a.ROOM_VISIT_HISTORY._rbe0cc4010aa2fe();
    e != null &&
      (this.handler._r32d169e0ccf735(e.flatId), this.var_114?.disableRoomHistoryButtons());
  }
  _rc9864d6ea31376() {
    let e = a.ROOM_VISIT_HISTORY.goBack();
    e != null &&
      (this.handler._r32d169e0ccf735(e.flatId), this.var_114?.disableRoomHistoryButtons());
  }
  _radeba2a5dcbcec = n((e) => {
    this.var_114?.setAchievementsButton(e.achievements.length > 0);
  }, "_radeba2a5dcbcec");
  _r56e36861dabdcb = n((e) => {
    let r = e.target;
    (r?.stop(),
      r?.removeEventListener(DeBouncer.addEventListener, this._r56e36861dabdcb),
      this.var_114?.updateRoomHistoryButtons());
  }, "_r56e36861dabdcb");
  _r55d3f104165a61() {
    let e = this.handler.containerRef?.config ?? null;
    return e?.propertyExists(a.ROOM_ENTER_INFO_ENABLED_KEY) === !0 && e.getBoolean(a.ROOM_ENTER_INFO_ENABLED_KEY);
  }
}
