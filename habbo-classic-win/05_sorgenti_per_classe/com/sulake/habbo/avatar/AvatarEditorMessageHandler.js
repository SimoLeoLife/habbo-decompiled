// Estratto da HabboAirLauncher.deobf.js, riga 162799.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/AvatarEditorMessageHandler.as
// Nome offuscato: _i2021a3f1e44ad7

class {
  static {
    n(this, "AvatarEditorMessageHandler");
  }
  _communication;
  var_63;
  constructor(e, r) {
    ((this.var_63 = e),
      (this._communication = r),
      this._communication._r2e106e2349a0b6(new _i7e994378209718(this._r0ba2e71f4dc551)),
      this._communication._r2e106e2349a0b6(new class_2271(this._r97aecc27368072)),
      this._communication._r2e106e2349a0b6(new class_3318(this._r9219bbc2d6868b)),
      this._communication._r2e106e2349a0b6(new _i3b3d54daecb86e(this._r745fc98f5c389d)),
      this._communication._r2e106e2349a0b6(new class_2544(this._r044a89b7062914)),
      this._communication._r2e106e2349a0b6(new _i3bddd9a4c6c103(this._rb029ef096741eb)),
      this._communication._r2e106e2349a0b6(new class_2513(this._r137318d9a18354)),
      this._communication._r2e106e2349a0b6(new class_3463(this._r0fc93f01455ee6)));
  }
  dispose() {
    ((this._communication = null), (this.var_63 = null));
  }
  saveWardrobeOutfit(e, r) {
    if (this._communication == null) return;
    let t = new class_2683(e, r.figure, r.gender);
    (this._communication.connection?.send(t), t.dispose());
  }
  _r22f28f976760b8(e) {
    this._communication?.connection?.send(new _i643860b2a2f5a4(e));
  }
  getWardrobe() {
    if (this._communication == null) return;
    let e = new class_3150();
    (this._communication.connection?.send(e), e.dispose());
  }
  _r0fc93f01455ee6 = n((e) => {
    let r = this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1) ?? null,
      t = r?.view._r3d2f3ad58a83b5 ?? null;
    if (r == null || t == null) return;
    let i = ClassUtils.getParser(e, class_2916);
    i != null &&
      (i.var_1827 === class_2146.var_2462
        ? (t.checkedName = i.name)
        : t.setNameNotAvailableView(i.var_1827, i.name, i.var_2736 ?? []));
  }, "_r0fc93f01455ee6");
  _r0ba2e71f4dc551 = n((e) => {
    (this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1) ?? null)?.wardrobe?.updateSlots(
      e.state,
      e._r2ea352b1af7c09,
    );
  }, "_r0ba2e71f4dc551");
  _r97aecc27368072 = n((e) => {
    let r = this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1) ?? null;
    r != null &&
      ((r.clubMemberLevel = e.clubLevel !== dr.NO_CLUB ? dr.VIP : dr.NO_CLUB), r.update());
  }, "_r97aecc27368072");
  _r9219bbc2d6868b = n((e) => {
    this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1)?.effects?.reset();
  }, "_r9219bbc2d6868b");
  _r044a89b7062914 = n((e) => {
    let r = this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1) ?? null;
    r != null &&
      (r.effects?.reset(),
      (r.figureData.isDevelopmentEditor = e.getParser().type),
      r.figureData.updateView());
  }, "_r044a89b7062914");
  _r745fc98f5c389d = n((e) => {
    let r = this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1) ?? null;
    if (r != null) {
      r.effects?.reset();
      let t = e.getParser().type;
      r.figureData.isDevelopmentEditor === t &&
        ((r.figureData.isDevelopmentEditor = -1), r.figureData.updateView());
    }
  }, "_r745fc98f5c389d");
  _r137318d9a18354 = n((e) => {
    let r = this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1) ?? null,
      t = this.var_63?._r15b2ea2c393fea?._r2eac8239a09fe7?.ownUserRoomId ?? -1;
    r != null &&
      t === e.getParser().userId &&
      ((r.figureData.isDevelopmentEditor = e.getParser().effectId),
      r.figureData.updateView());
  }, "_r137318d9a18354");
  _rb029ef096741eb = n((e) => {
    let r = this.var_63?._r3552de8291e1e0(_ic723960da8d613._r4a110ddb22fcf1) ?? null;
    r != null &&
      ((r.figureData.isDevelopmentEditor = e.getParser().type), r.figureData.updateView());
  }, "_rb029ef096741eb");
}
