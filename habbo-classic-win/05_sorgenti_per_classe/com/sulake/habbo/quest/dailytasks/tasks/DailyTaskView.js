// Extracted from HabboAirLauncher.deobf.js, line 265486.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/dailytasks/tasks/DailyTaskView.as
// Obfuscated name: _i573bdaec91ce2b

class a {
  constructor(e, r) {
    this.var_249 = e;
    this.var_63 = r;
    ((this._window = this.var_63.view?._r84b46bdf1cab67?.clone()),
      (this._r834034b605f603 = new g5(
        this.var_63.questEngine,
        this.progressBarContainer,
        Math.max(0, (this.progressBarContainer?.width ?? 0) - 8),
        "quests.tracker.progress",
        !0,
        new E(0, 0),
        !0,
      )));
    for (let t of this.var_249.rewards) {
      let i = new DailyTaskRewardView(t, this.var_63);
      (this.var_2973.push(i), this.rewardsList?.addListItem(i.window));
    }
    (this.claimButton?.addEventListener(u.CLICK, this.onClaimClicked), this.initializeUI());
  }
  static {
    n(this, "DailyTaskView");
  }
  static var_5934 = "${image.library.dailytasks.url}";
  static BACKGROUND_GREEN = 13033652;
  static var_5877 = 4960837;
  static REWARD_GREEN = 10931858;
  static BACKGROUND_ORANGE = 15916471;
  static TITLE_ORANGE = 15511865;
  static REWARD_ORANGE = 15714445;
  static BACKGROUND_YELLOW = 15725493;
  static var_5939 = 14208611;
  static REWARD_YELLOW = 14804370;
  _window = null;
  var_2973 = [];
  _disposed = !1;
  var_1435 = !1;
  _r834034b605f603;
  get _r69698bba4f84e1() {
    return this.var_249;
  }
  get window() {
    return this._window;
  }
  updateStatusAndRepeatsUI(e = !0) {
    if (this.var_249.status === Vf.var_4165 && this.progressBarContainer?.visible && e) {
      (this._r834034b605f603?.refresh(
        this.var_249.requiredRepeats,
        this.var_249.requiredRepeats,
        this.var_249.taskId,
        0,
      ),
        (this.var_1435 = !0));
      return;
    }
    if (this.var_249.status === Vf.var_5778) {
      (!this.var_249._rb5a86d311e998e &&
        this._window != null &&
        ((this._window.color = a.BACKGROUND_ORANGE),
        this.rewardTitleBorder && (this.rewardTitleBorder.color = a.REWARD_ORANGE),
        this.taskNameBorder && (this.taskNameBorder.color = a.TITLE_ORANGE)),
        this.completionContainer && (this.completionContainer.visible = !1),
        this.claimButtonContainer && (this.claimButtonContainer.visible = !1),
        this.progressBarContainer != null && (this.progressBarContainer.visible = !0),
        this._r834034b605f603?.refresh(
          this.var_249.repeats,
          this.var_249.requiredRepeats,
          this.var_249.taskId,
          0,
        ));
      return;
    }
    (!this.var_249._rb5a86d311e998e &&
      this._window != null &&
      ((this._window.color = a.BACKGROUND_GREEN),
      this.rewardTitleBorder && (this.rewardTitleBorder.color = a.REWARD_GREEN),
      this.taskNameBorder && (this.taskNameBorder.color = a.var_5877)),
      this.completionContainer && (this.completionContainer.visible = !0),
      this.claimButtonContainer && (this.claimButtonContainer.visible = !0),
      this.var_249.status === Vf.var_5844
        ? (this.claimButton?.disable(),
          this.claimButtonText && (this.claimButtonText.text = this.localize("dailytasks.claimed")))
        : (this.claimButton?.enable(),
          this.claimButtonText && (this.claimButtonText.text = this.localize("dailytasks.claim"))),
      this.progressBarContainer != null && (this.progressBarContainer.visible = !1));
  }
  update(e) {
    (this.progressBarContainer?.visible && this._r834034b605f603?.updateView(e),
      this.var_1435 &&
        this._r834034b605f603?.isUpdating === !1 &&
        ((this.var_1435 = !1), this.updateStatusAndRepeatsUI(!1)));
  }
  dispose() {
    if (!this._disposed) {
      this.claimButton?.removeEventListener(u.CLICK, this.onClaimClicked);
      for (let e of this.var_2973) e.dispose();
      ((this.var_2973 = []),
        this._r834034b605f603?.dispose(),
        (this._r834034b605f603 = null),
        this._window?.dispose(),
        (this._window = null),
        (this.var_63 = null),
        (this.var_249 = null),
        (this._disposed = !0));
    }
  }
  get disposed() {
    return this._disposed;
  }
  initializeUI() {
    (this.taskTitleTxt != null &&
      (this.taskTitleTxt.text = this.localize(this.var_249.nameLocalizationKey)),
      this.taskDescTxt != null &&
        (this.taskDescTxt.text = this.localize(this.var_249.descriptionLocalizationKey)),
      this.infoHoverRegion != null &&
        (this.infoHoverRegion.toolTipCaption = this.localize(
          this.var_249.hintLocalizationKey,
        )),
      this.var_249._rb5a86d311e998e &&
        this._window != null &&
        ((this._window.color = a.BACKGROUND_YELLOW),
        this.rewardTitleBorder && (this.rewardTitleBorder.color = a.REWARD_YELLOW),
        this.taskNameBorder && (this.taskNameBorder.color = a.var_5939)),
      this.taskImageStaticBitmap != null && (this.taskImageStaticBitmap.assetUri = this.imageUrl),
      this.updateStatusAndRepeatsUI());
  }
  onClaimClicked = n(() => {
    (this.claimButton?.disable(),
      this.var_63._ra7c70effe3f061(this.var_249.taskId));
  }, "onClaimClicked");
  get imageUrl() {
    return `${a.var_5934}${this.var_249._r3735e1e4dc6d84}${this.var_249._r3d49928e00246a}.png`;
  }
  localize(e) {
    return this.var_63.localizationManager?.getLocalization(e, e) ?? e;
  }
  get taskNameBorder() {
    return this._window?.findChildByName("task_name_cont");
  }
  get rewardTitleBorder() {
    return this._window?.findChildByName("reward_title_border");
  }
  get taskTitleTxt() {
    return this._window?.findChildByName("task_title_txt");
  }
  get taskDescTxt() {
    return this._window?.findChildByName("task_desc_txt");
  }
  get infoHoverRegion() {
    return this._window?.findChildByName("info_hover_region");
  }
  get taskImageStaticBitmap() {
    return this._window?.findChildByName("task_static_bitmap");
  }
  get completionContainer() {
    return this._window?.findChildByName("completion_cont");
  }
  get rewardsList() {
    return this._window?.findChildByName("rewards_list");
  }
  get claimButtonContainer() {
    return this._window?.findChildByName("claim_button_container");
  }
  get claimButtonText() {
    return this._window?.findChildByName("claim_txt");
  }
  get claimButton() {
    return this._window?.findChildByName("claim_button");
  }
  get progressBarContainer() {
    return this._window?.findChildByName("progress_bar_wrapper");
  }
}
