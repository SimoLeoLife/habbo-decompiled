// Extracted from HabboAirLauncher.deobf.js, line 210465.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/talent/TalentPromoCtrl.as
// Obfuscated name: _i1ca738ed098a85

class a {
  static {
    n(this, "TalentPromoCtrl");
  }
  static BG_COLOR_LIGHT = 4286084205;
  static BG_COLOR_DARK = 4283781966;
  var_41;
  _window = null;
  var_1655 = 0;
  var_1730 = 0;
  _originalHeight = 0;
  constructor(e) {
    this.var_41 = e;
  }
  get disposed() {
    return this.var_41 == null;
  }
  dispose() {
    (this._r27a3da2c6d34e0() &&
      this.var_41?.toolbar?.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.TALENT_PROMO_EXTENSION_ID),
      (this.var_41 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  initialize() {
    this.enabled &&
      (this.var_41?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3254((e) => {
          this._r7c10075ba0f04b(e);
        }),
      ),
      this.var_41?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_2637((e) => {
          this.onTalentLevelUp(e);
        }),
      ),
      this.var_41?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_1926((e) => {
          this._r6e2e75987c854e(e);
        }),
      ));
  }
  close() {
    this._window != null &&
      this._r27a3da2c6d34e0() &&
      this.var_41?.toolbar?.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.TALENT_PROMO_EXTENSION_ID);
  }
  _r6e2e75987c854e(e) {
    this.promotedTalentTrack !== "" && this.var_41?.send(new UnkMessageComposer_1args_f9faca(this.promotedTalentTrack));
  }
  _r7c10075ba0f04b(e) {
    let r = ClassUtils.getParser(e, class_3928);
    r != null &&
      r.talentTrackName === this.promotedTalentTrack &&
      ((this.var_1730 = r.maxLevel), (this.var_1655 = r.level), this.refresh());
  }
  onTalentLevelUp(e) {
    let r = ClassUtils.getParser(e, class_4273);
    r != null &&
      r.talentTrackName === this.promotedTalentTrack &&
      ((this.var_1655 = r.level), this.refresh());
  }
  refresh() {
    if (!this.enabled || this.maxLevelReached) {
      this.close();
      return;
    }
    (this.prepareWindow(),
      this.setText("title"),
      this._window != null && ((this._window.x = 0), (this._window.y = 0)),
      this._r27a3da2c6d34e0() &&
        this._window != null &&
        this.var_41?.toolbar?.extensionView?._ra96f07968c4ed0(
          ToolbarDisplayExtensionIds.TALENT_PROMO_EXTENSION_ID,
          this._window,
          class_1954.SLOT_CITIZENSHIP_PROMO,
        ));
  }
  setText(e) {
    let r = this._window?.findChildByName(e + "_txt");
    r != null && (r.caption = "${talentpromo." + this.promotedTalentTrack + "." + e + "}");
  }
  prepareWindow() {
    this._window == null &&
      ((this._window = this.var_41?.getXmlWindow("track_promo")),
      this._window != null &&
        (this._window.addEventListener(u.CLICK, (e) => {
          this.onCheckProgress(e);
        }),
        this._window.addEventListener(u.OVER, (e) => {
          this._r866744f6c18eb9(e);
        }),
        this._window.addEventListener(u.OUT, (e) => {
          this.onContainerMouseOut(e);
        }),
        (this._originalHeight = this._window.height)));
  }
  onCheckProgress(e) {
    e.type === u.CLICK &&
      this.enabled &&
      (this.var_41?.tracking?.trackTalentTrackOpen(this.promotedTalentTrack, "talentpromo"),
      this.var_41?.send(new class_2687(this.promotedTalentTrack)));
  }
  _r27a3da2c6d34e0() {
    return (
      this.var_41 != null && this.var_41.toolbar?.extensionView != null && this.enabled
    );
  }
  get enabled() {
    return this.promotedTalentTrack !== "";
  }
  get promotedTalentTrack() {
    return this.var_41?.getProperty("talentpromo.track") ?? "";
  }
  get maxLevelReached() {
    return this.var_1655 >= this.var_1730;
  }
  _r866744f6c18eb9(e) {
    let r = this._window?.findChildByTag("BGCOLOR");
    r != null && (r.color = a.BG_COLOR_LIGHT);
  }
  onContainerMouseOut(e) {
    let r = this._window?.findChildByTag("BGCOLOR");
    r != null && (r.color = a.BG_COLOR_DARK);
  }
}
