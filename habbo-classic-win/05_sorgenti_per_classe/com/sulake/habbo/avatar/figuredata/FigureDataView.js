// Extracted from HabboAirLauncher.deobf.js, line 163062.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/figuredata/FigureDataView.as
// Obfuscated name: _i6ff8511ce5d6e4

class {
  static {
    n(this, "FigureDataView");
  }
  static PREVIEW_AVATAR_DIRECTION = 4;
  var_17;
  RoomPreviewer;
  var_38;
  _figureString = "";
  var_1271 = !1;
  constructor(e) {
    ((this.var_38 = e),
      (this.var_17 = e.avatarEditor.view.getFigureContainer().widget),
      (this.RoomPreviewer = this.var_17?._r08651d482bdd11 ?? null),
      this.RoomPreviewer?._r9c3331ac1bb690(!1, !1));
  }
  update(e, r = 0, t = 4) {
    if (((this._figureString = e), this.RoomPreviewer?._r7800b4141964cc)) {
      (this.RoomPreviewer._r7f4d6e609cfa14(e, r),
        this.RoomPreviewer._r57314f7f668654(t, t),
        this.RoomPreviewer._r7314b55e8d0d86(!0),
        this.RoomPreviewer._rc61293181668df());
      return;
    }
    let i =
      this.var_38?.avatarEditor.manager._rf0eb5f07c94cfb._r274f6640e76241(
        e,
        fr.LARGE,
        null,
        this,
      ) ?? null;
    (this.var_17?.createAvatarImage(i?._rb2bd48e3b4d265(class_2123.const_252) ?? null), i?.dispose());
  }
  avatarImageReady(e) {
    if (e !== this._figureString) return;
    let r =
      this.var_38?.avatarEditor.manager._rf0eb5f07c94cfb._r274f6640e76241(
        e,
        fr.LARGE,
        null,
        this,
      ) ?? null;
    (this.var_17?.createAvatarImage(r?._rb2bd48e3b4d265(class_2123.const_252) ?? null), r?.dispose());
  }
  dispose() {
    this.var_1271 = !0;
  }
  get disposed() {
    return this.var_1271;
  }
}
