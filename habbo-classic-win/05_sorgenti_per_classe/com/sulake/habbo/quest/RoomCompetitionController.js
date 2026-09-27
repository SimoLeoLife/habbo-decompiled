// Estratto da HabboAirLauncher.deobf.js, riga 269911.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/RoomCompetitionController.as
// Nome offuscato: _icb8005a5b56352

class a {
  constructor(e) {
    this._questEngine = e;
    this._hideTimer.addEventListener(DeBouncer.addEventListener, this.onHideTimer);
  }
  static {
    n(this, "RoomCompetitionController");
  }
  static INDENT_LEFT = 270;
  static INDENT_RIGHT = 200;
  static INDENT_TOP = 4;
  _window = null;
  _goalCode = "";
  var_5752 = 0;
  _remainingVotes = 0;
  _submit = !1;
  _dontShowAgain = !1;
  _hideTimer = new _i05394ecc0c0c4d(3e3, 1);
  var_1241 = 0;
  _r3334a4efb42a59 = new B();
  dispose() {
    ((this._questEngine = null),
      this._window?.dispose(),
      (this._window = null),
      this._hideTimer.removeEventListener(DeBouncer.addEventListener, this.onHideTimer),
      this._hideTimer.reset(),
      this._r3334a4efb42a59.dispose(),
      (this._r3334a4efb42a59 = null));
  }
  get disposed() {
    return this._window == null;
  }
  _r88de5d30b4a7dd(e) {
    let r = e.getParser();
    this._remainingVotes = r._r08a0173f580ae8;
    let t = r._re5afdd33fdee01,
      i = r.var_1827;
    (this.refreshContent(r._r60d0785b4a5490, !1, r.goalCode, `${i}`),
      this._r5ea8c9c17deaf6(i === _i9010cc11faf5ce._ra7df71aa048699 ? this._r3fa251cabe9891 : this._reada2a6dc3b165),
      this.getActionButton != null &&
        ((this.getActionButton.procedure = this._r77fec00f04fc76),
        (this.getActionButton.visible = this._remainingVotes > 0 && t)),
      this.getButtonInfoText != null && (this.getButtonInfoText.visible = t));
  }
  _r13a2682227f3a8(e) {
    let r = ClassUtils.getParser(e, class_3182);
    r != null &&
      r.result !== class_3182.const_1255 &&
      (this.refreshContent(r._r60d0785b4a5490, !0, r.goalCode, `${r.result}`),
      (this.var_1241 = r.result),
      this.var_1241 === class_3182.const_390
        ? (this._r5ea8c9c17deaf6(null),
          this.getActionButton && (this.getActionButton.procedure = this._r15770df497942b))
        : this.var_1241 === class_3182.const_877
          ? (this._r5ea8c9c17deaf6(this._r4632f4ab381f57),
            this.getActionButton && (this.getActionButton.procedure = this._r7e9a0ce1254dde))
          : this.var_1241 === class_3182.const_615
            ? (this._r5ea8c9c17deaf6(this._r4632f4ab381f57),
              this.getActionButton && (this.getActionButton.procedure = this._r9932eb1a427f5a))
            : this.var_1241 === class_3182.const_1146
              ? (this._r5ea8c9c17deaf6(this._rbafbf66f91e0b6),
                this.getActionButton && (this.getActionButton.visible = !1),
                this.refreshRequiredFurnis(e),
                this._rd6c2a015713e34 && (this._rd6c2a015713e34.visible = !0))
              : this.var_1241 === class_3182.const_1076
                ? (this._r5ea8c9c17deaf6(this._r4632f4ab381f57),
                  this.getActionButton && (this.getActionButton.procedure = this.onClose))
                : this.var_1241 === class_3182.const_303
                  ? (this._r5ea8c9c17deaf6(null),
                    this.getActionButton != null &&
                      ((this.getActionButton.procedure = null), (this.getActionButton.visible = !1)))
                  : this.var_1241 === class_3182.const_1255 &&
                    (this._r5ea8c9c17deaf6(null),
                    this.getActionButton != null &&
                      ((this.getActionButton.procedure = this._r6d217c7b4e8570),
                      (this.getActionButton.visible = !0))));
  }
  refreshContent(e, r, t, i) {
    ((this.var_5752 = e),
      (this._goalCode = t),
      (this._submit = r),
      this.prepare(),
      this.setTexts(r ? "submit" : "vote", i),
      this.getActionButton != null && (this.getActionButton.visible = !0),
      this._r44c724a79ee39b(),
      this._rc2d095123fab53(),
      this._rd6c2a015713e34 != null && (this._rd6c2a015713e34.visible = !1),
      this._window?.findChildByName("dont_show_again_container") &&
        (this._window.findChildByName("dont_show_again_container").visible = !1),
      this._window?.findChildByName("normal_container") &&
        (this._window.findChildByName("normal_container").visible = !0));
  }
  imageReady(e, r) {
    let t = this._r3334a4efb42a59.getValue(e);
    t != null && (this.setRequiredFurniImage(t, r), this._r3334a4efb42a59.remove(e));
  }
  imageFailed(e) {}
  onRoomExit() {
    this.close();
  }
  onRoomEnter(e) {
    this.close();
    let r = ClassUtils.getParser(e, class_2161);
    if (r == null) return;
    let t =
      this._questEngine?.getInteger("new.identity", 0) === 0 ||
      !this._questEngine?.getBoolean("new.identity.hide.ui");
    !this._dontShowAgain && t && ((this._submit = r.owner), this._questEngine?.send(new _i86ce8246ea4c2b()));
  }
  _r7b256b00b1d95e() {
    this._questEngine?.send(new _i86ce8246ea4c2b());
  }
  _r17909e021af2d1() {
    this._window?.visible &&
      this._submit &&
      this._questEngine?.send(new _i501038fc0f426f(this._goalCode, _i501038fc0f426f._r67f92b4ec50a26));
  }
  set dontShowAgain(e) {
    this._dontShowAgain = e;
  }
  setText(e, r, t) {
    if (e == null || this._questEngine == null) return;
    let i = `${r}.${t}`,
      s = this._questEngine.localization.getLocalization(i, "");
    if ((s === "" && ((i = r), (s = this._questEngine.localization.getLocalization(i, ""))), s === "")) {
      e.visible = !1;
      return;
    }
    ((e.visible = !0),
      this._questEngine.localization._r43eae9731f5b27(i, "competition_name", this.getCompetitionName()),
      this._questEngine.localization._r43eae9731f5b27(i, "votes", `${this._remainingVotes}`),
      (e.caption = `\${${i}}`));
  }
  _r5ea8c9c17deaf6(e) {
    this.getInfoRegion != null &&
      ((this.getInfoRegion.procedure = e),
      this.getInfoRegion.setParamFlag(N._re3bd61027cfd94, e != null));
  }
  _r44c724a79ee39b() {
    (this.getVoteImage && (this.getVoteImage.visible = !this._submit),
      this.getSubmitImage && (this.getSubmitImage.visible = this._submit));
  }
  _rc2d095123fab53() {
    if (this._window == null) return;
    this._window.visible = !0;
    let e = this._window.desktop.rectangle;
    ((this._window.x = a.INDENT_LEFT),
      (this._window.y = a.INDENT_TOP),
      (this._window.width = e.width - a.INDENT_LEFT - a.INDENT_RIGHT),
      this._window.activate());
  }
  refreshRequiredFurnis(e) {
    let r = ClassUtils.getParser(e, class_3182);
    if (r == null) return;
    let t = r.requiredFurnis ?? [];
    for (let i = 0; i < t.length; i++) {
      let s = t[i],
        o = s.split("*"),
        d = o[0],
        c = o.length > 1 ? o[1] : "",
        f = this._rd57ac927f1ae3e(i + 1);
      if (f == null) continue;
      ((f.visible = !0),
        f.findChildByName("tick_icon") && (f.findChildByName("tick_icon").visible = !r.isMissing(s)));
      let l = this._questEngine?.roomEngine?._ra5bef405f056da(d, c, new k(180, 0, 0), 1, this) ?? null;
      ((l?.id ?? 0) !== 0 && this._r3334a4efb42a59.add(l.id, i), this.setRequiredFurniImage(i, l?.data ?? null));
    }
  }
  setRequiredFurniImage(e, r) {
    let t = this._rd57ac927f1ae3e(e + 1),
      i = t?.findChildByName("furni_icon");
    if (t == null || i == null) return;
    let s = new A(i.width, i.height, !0, 0);
    (r != null && s.copyPixels(r, r.rect, new E((s.width - r.width) / 2, (s.height - r.height) / 2)),
      (i.bitmap = s));
  }
  getCompetitionName() {
    let e = `roomcompetition.${this._goalCode}.name`;
    return this._questEngine?.localization.getLocalization(e, e) ?? e;
  }
  setTexts(e, r) {
    (this.setText(this.captionText, `roomcompetition.caption.${e}`, r),
      this.setText(this.getInfoText, `roomcompetition.info.${e}`, r),
      this.setText(this.getActionButton, `roomcompetition.button.${e}`, r),
      this.setText(this.getButtonInfoText, `roomcompetition.buttoninfo.${e}`, r),
      this.onResize());
  }
  onResize() {
    this.getInfoRegion != null &&
      this.captionText != null &&
      (this.getInfoRegion.y = this.captionText.y + this.captionText.textHeight + 5);
  }
  close() {
    (this._window != null && (this._window.visible = !1), (this._goalCode = ""));
  }
  prepare() {
    let e = this._questEngine;
    if (this._window != null || e == null) return;
    let r = 1;
    ((this._window = e.getXmlWindow("RoomCompetition", r)),
      this._window?.findChildByName("close_region") &&
        (this._window.findChildByName("close_region").procedure = this.onClose),
      e.windowManager
        .getDesktopWindow(r)
        ?._r1165eed3833024()
        ?.addEventListener?.(y.const_755, this.onDesktopResized),
      this._window?.findChildByName("dont_show_again_region") &&
        (this._window.findChildByName("dont_show_again_region").procedure = this._rea0d3cea2d24cf));
  }
  _rbafbf66f91e0b6 = n((e) => {
    e.type === u.CLICK &&
      this._questEngine?.catalog?.openCatalogPage(
        this._questEngine.getProperty(`competition.${this._goalCode}.catalogPage`),
      );
  }, "_rbafbf66f91e0b6");
  _r6d217c7b4e8570 = n((e) => {
    e.type === u.CLICK && this._questEngine?.navigator?._r8d305e819155a0?._r52fa4af48d31b1();
  }, "_r6d217c7b4e8570");
  _r4632f4ab381f57 = n((e) => {
    if (e.type === u.CLICK && this._questEngine?.toolbar?.events != null) {
      let r = new HabboToolbarEvent(HabboToolbarEvent.TOOLBAR_CLICK);
      ((r._re9c693c8b69b04 = Me.RECEPTION), this._questEngine.toolbar.events.dispatchEvent?.(r));
    }
  }, "_r4632f4ab381f57");
  _reada2a6dc3b165 = n((e) => {}, "_reada2a6dc3b165");
  _r3fa251cabe9891 = n((e) => {
    e.type === u.CLICK &&
      this._questEngine != null &&
      (this._questEngine.tracking?.trackTalentTrackOpen(
        this._questEngine.sessionDataManager.currentTalentTrack,
        "roomcompetition",
      ),
      this._questEngine.send(new class_2687(this._questEngine.sessionDataManager.currentTalentTrack)));
  }, "_r3fa251cabe9891");
  _r7e9a0ce1254dde = n((e) => {
    e.type === u.CLICK && this._questEngine?.send(new _i501038fc0f426f(this._goalCode, _i501038fc0f426f._r24987a904b796f));
  }, "_r7e9a0ce1254dde");
  _r9932eb1a427f5a = n((e) => {
    e.type === u.CLICK && this._questEngine?.send(new _i501038fc0f426f(this._goalCode, _i501038fc0f426f._rc2fbd4b2cdb3aa));
  }, "_r9932eb1a427f5a");
  _r15770df497942b = n((e) => {
    e.type === u.CLICK && this._questEngine?.send(new _i501038fc0f426f(this._goalCode, _i501038fc0f426f._r4aeb1069bd9e7c));
  }, "_r15770df497942b");
  _r77fec00f04fc76 = n((e) => {
    e.type === u.CLICK && this._questEngine?.send(new _i51137a269b2e9f(this._goalCode));
  }, "_r77fec00f04fc76");
  onClose = n((e) => {
    if (e.type !== u.CLICK || this._window == null || this._questEngine == null) return;
    if (this._submit && this.var_1241 === class_3182.const_1076) {
      this.close();
      return;
    }
    let r = `roomcompetition.dontshowagain.info.${this._submit ? "submit" : "vote"}`;
    (this._window.findChildByName("dont_show_info_txt") &&
      (this._window.findChildByName("dont_show_info_txt").caption =
        this._questEngine.localization.getLocalization(r, r)),
      this._window.findChildByName("dont_show_again_container") &&
        (this._window.findChildByName("dont_show_again_container").visible = !0),
      this._window.findChildByName("normal_container") &&
        (this._window.findChildByName("normal_container").visible = !1),
      this._hideTimer.reset(),
      this._hideTimer.start());
  }, "onClose");
  _rea0d3cea2d24cf = n((e) => {
    e.type === u.CLICK && ((this._dontShowAgain = !0), this.close());
  }, "_rea0d3cea2d24cf");
  onDesktopResized = n(() => {
    this._window?.visible && this.onResize();
  }, "onDesktopResized");
  onHideTimer = n(() => {
    this.close();
  }, "onHideTimer");
  get getInfoRegion() {
    return this._window?.findChildByName("info_region") ?? null;
  }
  get getInfoText() {
    return this._window?.findChildByName("info_txt") ?? null;
  }
  get getButtonInfoText() {
    return this._window?.findChildByName("button_info_txt") ?? null;
  }
  get getActionButton() {
    return this._window?.findChildByName("action_button") ?? null;
  }
  get captionText() {
    return this._window?.findChildByName("caption_txt");
  }
  get _rd6c2a015713e34() {
    return this._window?.findChildByName("required_furnis_itemgrid") ?? null;
  }
  get getVoteImage() {
    return this._window?.findChildByName("vote_image") ?? null;
  }
  get getSubmitImage() {
    return this._window?.findChildByName("submit_image") ?? null;
  }
  _rd57ac927f1ae3e(e) {
    let r = this._window?.findChildByName("required_furnis_itemgrid"),
      t = r?.getGridItemAt(0);
    if (r == null || t == null) return null;
    if (r._r72acf104e2c444 < e)
      for (let i = 0; i < e - r._r72acf104e2c444; i++) r.addGridItem(t.clone());
    return r.getGridItemAt(e - 1);
  }
}
