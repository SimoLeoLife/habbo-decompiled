// Estratto da HabboAirLauncher.deobf.js, riga 176007.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/tabs/RewardClaimsTab.as
// Nome offuscato: _i6d7b308f6e9949

class {
  constructor(e, r) {
    this.var_1128 = e;
    this.var_195 = r;
    ((this.var_121 = this.var_1128.window.findChildByName("rewardsContainer")),
      (this._loadingIcon = this.var_121?.findChildByName("loading_icon")),
      (this._reac17eb647de08 = this.var_121?.findChildByName("itemlist")),
      (this.var_2608 = this._reac17eb647de08?.getListItemByName("item_template") ?? null),
      this.var_2608 != null && this._reac17eb647de08?.removeListItem(this.var_2608),
      this.setPlaceholder(!1),
      this._r7a5132a0911745(),
      this._r009379f0031716(),
      this.var_195.registerUpdateReceiver(this, 1),
      this.claimButton?.addEventListener(u.CLICK, this.onClaimClicked));
  }
  static {
    n(this, "RewardClaimsTab");
  }
  _disposed = !1;
  _messageEvents = null;
  _reac17eb647de08;
  _r6390b0420a4a18 = [];
  var_2608;
  var_1306 = !1;
  _r58f6ff4638c06b = !1;
  _r5d232577329abc = [];
  _r9dc6bbadd0c65b = null;
  _rea3cad2cf6cdcf = !1;
  _loadingIcon;
  var_121;
  get disposed() {
    return this._disposed;
  }
  _rcc74fafb9df65a(e) {
    if (e == null || e.length === 0) {
      (this.setPlaceholder(!0), this._r009379f0031716());
      return;
    }
    this._r54966bbf2a1f1c(e);
  }
  update(e) {
    if (this.isReady || this._loadingIcon == null) return;
    let r = x1.var_2640 * (e / 1e3);
    ((this._loadingIcon.rotation += r),
      (this._loadingIcon.rotation %= 360),
      this._loadingIcon.invalidate());
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.clearItems(),
      this._r9dc6bbadd0c65b != null &&
        (globalThis.clearInterval(this._r9dc6bbadd0c65b), (this._r9dc6bbadd0c65b = null)),
      this.removeMessageEvents(),
      this.claimButton?.removeEventListener(u.CLICK, this.onClaimClicked),
      this.var_195.removeUpdateReceiver(this),
      (this.var_121 = null),
      (this._loadingIcon = null),
      (this._reac17eb647de08 = null),
      (this.var_2608 = null));
  }
  _r7a5132a0911745() {
    this._messageEvents = [new _i88cbf57ca7400f(this._reb062476575fa6), new _i977235da9592f3(this._rb9099246ec420b)];
    for (let e of this._messageEvents) this.var_195.addMessageEvent(e);
  }
  _r54966bbf2a1f1c(e) {
    for (let r of e) this._r50f611e10665eb(r);
  }
  _r50f611e10665eb(e) {
    (this._r5d232577329abc.push(e),
      this._r9dc6bbadd0c65b == null &&
        (this._r9dc6bbadd0c65b = globalThis.setInterval(() => {
          this._r59a555ac14a735();
        }, 600)));
  }
  _r59a555ac14a735() {
    if (this._rea3cad2cf6cdcf || this._r5d232577329abc.length === 0) return;
    let e = this._r5d232577329abc.shift() ?? null;
    e != null && (this.var_195.send(new _ic6e7fb9dd87740(e)), (this._rea3cad2cf6cdcf = !0));
  }
  _r009379f0031716() {
    let e = (this._reac17eb647de08?.numListItems ?? 0) > 0,
      r = !this._r58f6ff4638c06b && !this._rea3cad2cf6cdcf;
    e && r ? this.claimButton?.enable() : this.claimButton?.disable();
  }
  onClaimClicked = n((e) => {
    (this.claimButton?.disable(),
      (this._r58f6ff4638c06b = !0),
      this.var_195.send(new _i3be8d874c5a05e()),
      this.setPlaceholder(!1));
  }, "onClaimClicked");
  _reb062476575fa6 = n((e) => {
    let r = ClassUtils.getParser(e, _ib647471e66bb8b);
    if (r != null) {
      for (let t of r?._reb1781c553920a ?? [])
        t.claimedAmount < t.claimLimit && this.createRewardItem(t);
      ((this._rea3cad2cf6cdcf = !1),
        this._r5d232577329abc.length === 0 &&
          (this._r9dc6bbadd0c65b != null &&
            (globalThis.clearInterval(this._r9dc6bbadd0c65b), (this._r9dc6bbadd0c65b = null)),
          this.setPlaceholder(!0),
          this._r009379f0031716()));
    }
  }, "_reb062476575fa6");
  _rb9099246ec420b = n((e) => {
    let r = ClassUtils.getParser(e, _i9b580059905140);
    r != null &&
      (this.var_195.notifications.addItem(
        r?.success
          ? this.localization("collectibles.claiming.success")
          : this.var_195.localizationManager.getLocalizationWithParams(
              "collectibles.claiming.failed",
              "",
              "id",
              String(r?.var_1827 ?? ""),
            ),
        NotificationType.INFO,
        "icon_curator_stamp_large_png",
      ),
      r?.success && this.clearItems(),
      (this._r58f6ff4638c06b = !1),
      this._r009379f0031716(),
      this.setPlaceholder(!0));
  }, "_rb9099246ec420b");
  createRewardItem(e) {
    if (e == null || this.var_2608 == null || this._reac17eb647de08 == null) return;
    let r = this.var_2608.clone();
    if (r == null) return;
    let t = new RewardCollectibleItemRenderer(this.var_195, e, r, this);
    (this._r6390b0420a4a18.push(t),
      this._reac17eb647de08.addListItem(r),
      t.updateVisuals(),
      t.updateExpiresText(this._rfdbb4e26d4980d(e.validTo)));
  }
  setPlaceholder(e) {
    let r = (this._reac17eb647de08?.numListItems ?? 0) > 0;
    (this.loadedContainer != null && (this.loadedContainer.visible = e && r),
      this.noContentContainer != null && (this.noContentContainer.visible = e && !r),
      this.loadingContainer != null && (this.loadingContainer.visible = !e),
      (this.var_1306 = e));
  }
  get isReady() {
    return this.var_1306;
  }
  removeMessageEvents() {
    if (this._messageEvents != null) {
      for (let e of this._messageEvents) (this.var_195.removeMessageEvent(e), e.dispose());
      this._messageEvents = null;
    }
  }
  clearItems() {
    for (let e of this._r6390b0420a4a18) e.dispose();
    ((this._r6390b0420a4a18 = []), this._reac17eb647de08?.destroyListItems());
  }
  _rfdbb4e26d4980d(e) {
    let r = new Date(e),
      t = String(r.getDate()).padStart(2, "0"),
      i = String(r.getMonth() + 1).padStart(2, "0"),
      s = String(r.getFullYear());
    return `${t}/${i}/${s}`;
  }
  localization(e) {
    return this.var_195.localizationManager.getLocalization(e);
  }
  get loadingContainer() {
    return this.var_121?.findChildByName("loading_contents");
  }
  get loadedContainer() {
    return this.var_121?.findChildByName("loaded_content");
  }
  get noContentContainer() {
    return this.var_121?.findChildByName("no_content_container");
  }
  get claimButton() {
    return this.var_121?.findChildByName("claim_button");
  }
}
