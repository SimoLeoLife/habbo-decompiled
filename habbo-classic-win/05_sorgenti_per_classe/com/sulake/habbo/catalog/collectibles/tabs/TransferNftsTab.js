// Extracted from HabboAirLauncher.deobf.js, line 176652.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/tabs/TransferNftsTab.as
// Obfuscated name: _i3355e6f0aa627d

class {
  constructor(e, r) {
    this.var_1128 = e;
    this.var_195 = r;
    ((this.var_121 = this.var_1128.window.findChildByName("transferContainer")),
      (this._loadingIcon = this.var_121?.findChildByName("loading_icon")),
      this._r7a5132a0911745(),
      this.initializeData(),
      this.updateReadyState(),
      this.updateTransferButtonState(),
      this.var_195.registerUpdateReceiver(this, 1),
      this.transferButton?.addEventListener(u.CLICK, this._r469edf5d3f5a7c),
      this._racaae1c725b506?.addEventListener(y.const_238, this._rbe24c6c0422913));
  }
  static {
    n(this, "TransferNftsTab");
  }
  _disposed = !1;
  _messageEvents = null;
  var_3212 = !1;
  _waitingForAddresses = !1;
  _rdf3f2e5378094f = 0;
  _r32b387c7ead574 = !1;
  _r67c9ca10cdf031 = null;
  _loadingIcon;
  var_121;
  get disposed() {
    return this._disposed;
  }
  _rcc74fafb9df65a(e) {
    this._r9b0949a0321348(e ?? []);
  }
  _r3fb7d0b8505445() {
    this.updateTransferButtonState();
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
      this.removeMessageEvents(),
      this.transferButton?.removeEventListener(u.CLICK, this._r469edf5d3f5a7c),
      this._racaae1c725b506?.removeEventListener(y.const_238, this._rbe24c6c0422913),
      this.var_195.removeUpdateReceiver(this),
      (this.var_121 = null),
      (this._loadingIcon = null),
      (this._r67c9ca10cdf031 = null));
  }
  _r7a5132a0911745() {
    this._messageEvents = [new UnkMessageEvent_0dcf7a(this._r923c5e7046457b), new UnkMessageEvent_f13c15(this._r19e31ef99dafa2)];
    for (let e of this._messageEvents) this.var_195.addMessageEvent(e);
  }
  _rbe24c6c0422913 = n((e) => {
    let r = this._racaae1c725b506?.selection ?? -1;
    if (r >= 0) {
      let t = String(this._racaae1c725b506?.enumerateSelection()?.[r] ?? "");
      t.length > 32 &&
        this._racaae1c725b506 != null &&
        (this._racaae1c725b506.caption = `${t.substring(0, 32)}...`);
    }
    this.updateReadyState();
  }, "_rbe24c6c0422913");
  _r923c5e7046457b = n((e) => {
    this.var_3212 = !1;
    let r = ClassUtils.getParser(e, UnkMessageParser_I_f482a8);
    r != null &&
      ((this._rdf3f2e5378094f = r?._r9ed6426f18a3ff ?? 0),
      this._rcb085ac538dc7b != null &&
        ((this._rcb085ac538dc7b.text = String(this._rdf3f2e5378094f)),
        (this._rcb085ac538dc7b.visible = this._rdf3f2e5378094f > 0)),
      this._rdbcae11bc7b655 != null && (this._rdbcae11bc7b655.visible = this._rdf3f2e5378094f > 0),
      this.updateReadyState(),
      this.updateTransferButtonState());
  }, "_r923c5e7046457b");
  updateReadyState() {
    (this.loadedContainer != null && (this.loadedContainer.visible = this.isReady),
      this.loadingContainer != null && (this.loadingContainer.visible = !this.isReady));
  }
  updateTransferButtonState() {
    let e = this._rdf3f2e5378094f <= this.var_195.catalog.getPurse()._r410418cea3a606,
      r = (this.var_1128._rfaeabc5d3afae7 ?? "") !== "",
      t = !this._r32b387c7ead574,
      i = this._r87e56fcd8ed5e9 != null;
    e && r && t && i ? this.transferButton?.enable() : this.transferButton?.disable();
  }
  _r469edf5d3f5a7c = n((e) => {
    this.transferButton?.disable();
    let r = this.var_195.windowManager.confirm(
      "${collectibles.transfer}",
      "${collectibles.transfer.confirm}",
      0,
      this._rf376fbd73a45b3,
    );
    r != null && (r._r3d7b1775b50b97 = 2763306);
  }, "_r469edf5d3f5a7c");
  _rf376fbd73a45b3 = n((e, r) => {
    if ((e.dispose(), r.type === y.const_1300)) {
      let t = this._r87e56fcd8ed5e9;
      if (t == null) {
        this.updateTransferButtonState();
        return;
      }
      ((this._r32b387c7ead574 = !0), this.var_195.send(new class_2660(t)));
    }
    this.updateTransferButtonState();
  }, "_rf376fbd73a45b3");
  _r19e31ef99dafa2 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_H_b5b4c5);
    r != null &&
      (this.var_195.notifications.addItem(
        r?.success
          ? this.localization.getLocalization("collectibles.transfer.success")
          : this.localization.getLocalizationWithParams(
              "collectibles.transfer.error",
              "",
              "id",
              String(r?.var_1827 ?? ""),
            ),
        NotificationType.INFO,
        "icon_curator_stamp_large_png",
      ),
      (this._r32b387c7ead574 = !1),
      this.updateTransferButtonState());
  }, "_r19e31ef99dafa2");
  _r9b0949a0321348(e) {
    (this._racaae1c725b506?.populate(e),
      (this._r67c9ca10cdf031 = e),
      e.length === 0
        ? this._racaae1c725b506 != null &&
          ((this._racaae1c725b506.color = 13421772), this._racaae1c725b506.disable())
        : this._racaae1c725b506 != null &&
          ((this._racaae1c725b506.color = 16777215),
          this._racaae1c725b506.enable(),
          (this._racaae1c725b506.selection = 0)),
      (this._waitingForAddresses = !1),
      this.updateReadyState(),
      this.updateTransferButtonState());
  }
  get _r87e56fcd8ed5e9() {
    if (this._r67c9ca10cdf031 == null) return null;
    let e = this._racaae1c725b506?.selection ?? -1;
    return e < 0 || e >= this._r67c9ca10cdf031.length ? null : (this._r67c9ca10cdf031[e] ?? null);
  }
  initializeData() {
    ((this.var_3212 = !0), this.var_195.send(new class_3623()));
    let e = this.var_1128._r92a93dee6650d9;
    (e != null && this._r9b0949a0321348(e), (this._waitingForAddresses = e == null));
  }
  get isReady() {
    return !this._waitingForAddresses && !this.var_3212;
  }
  get localization() {
    return this.var_195.localizationManager;
  }
  removeMessageEvents() {
    if (this._messageEvents != null) {
      for (let e of this._messageEvents) (this.var_195.removeMessageEvent(e), e.dispose());
      this._messageEvents = null;
    }
  }
  get loadingContainer() {
    return this.var_121?.findChildByName("loading_contents");
  }
  get loadedContainer() {
    return this.var_121?.findChildByName("loaded_content");
  }
  get transferButton() {
    return this.var_121?.findChildByName("transfer_button");
  }
  get _racaae1c725b506() {
    return this.var_121?.findChildByName("wallet_selection");
  }
  get _rcb085ac538dc7b() {
    return this.var_121?.findChildByName("silver_fee_text");
  }
  get _rdbcae11bc7b655() {
    return this.var_121?.findChildByName("silver_icon");
  }
}
