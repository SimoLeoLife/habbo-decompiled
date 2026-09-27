// Extracted from HabboAirLauncher.deobf.js, line 326984.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/wordquiz/WordQuizView.as
// Obfuscated name: _i411d38a0520560

class a {
  constructor(e) {
    this.var_17 = e;
    ((a._reafb3c1e24c241 =
      (this.var_17?.handler.containerRef?.config?.getInteger(
        "poll.word.quiz.result.view.seconds",
        4,
      ) ?? 4) * 1e3),
      a._r0d69a96f67ba2a &&
        ((this._window = this.var_17?.windowManager?.createWindow(
          "wordquiz_container",
          "",
          0,
          0,
          0,
          null,
          null,
          0,
          2,
        )),
        this._window != null &&
          ((this._window.width = this._window.desktop.width),
          (this._window.height = this._window.desktop.height))));
  }
  static {
    n(this, "WordQuizView");
  }
  static _rbb850c7d21b06e = 0;
  static STATE_RESULT = 1;
  static _r0d69a96f67ba2a = !1;
  static _reafb3c1e24c241 = 0;
  _window = null;
  _r296a04323547dc = null;
  _r9bc155664304bb = null;
  dispose() {
    ((this.var_17 = null),
      this.removeWindow(),
      this._window != null &&
        (this._window.desktop.removeEventListener(y.const_755, this.onDesktopResized),
        this._window.dispose(),
        (this._window = null)));
  }
  get mainWindow() {
    return this._window;
  }
  createWindow(e, r = null) {
    this.removeWindow();
    let t = e === a._rbb850c7d21b06e ? "wordquiz_question_xml" : "wordquiz_result_xml",
      s = this.var_17?.assets?.getAssetByName(t)?.content;
    if (s == null || this.var_17?.windowManager == null) return;
    if (
      (a._r0d69a96f67ba2a
        ? this._window?.buildFromXML(s)
        : (this._window = this.var_17.windowManager.buildFromXML(s)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    (this._window.findChildByName("button_like")?.addEventListener(u.CLICK, this._r40385b4483e2dd),
      this._window
        .findChildByName("button_dislike")
        ?.addEventListener(u.CLICK, this.var_4228),
      r != null && (this._r9bc155664304bb = r));
    let o = this._window.findChildByName("quiz_topic");
    (o != null &&
      ((o.caption = this._r9bc155664304bb ?? ""),
      (o.width = Math.min(660, this.getCorrectTextWidth(e, this._r9bc155664304bb) + 6)),
      (o.y = 3)),
      this.positionWindow(),
      this._window.desktop.addEventListener(y.const_755, this.onDesktopResized));
  }
  removeWindow() {
    this._window == null ||
      this._window.numChildren === 0 ||
      (a._r0d69a96f67ba2a
        ? this._window.removeChildAt(0)?.dispose()
        : (this._window.desktop.removeEventListener(y.const_755, this.onDesktopResized),
          this._window.dispose(),
          (this._window = null)),
      this._r296a04323547dc != null && (this._r296a04323547dc.reset(), (this._r296a04323547dc = null)));
  }
  updateCounter(e) {
    let r = this._window?.findChildByName("countdown");
    r != null && (r.caption = e === "0" ? "" : e);
  }
  updateResults(e) {
    if (this._window == null || e == null) return;
    let r = e.getValue(JI._r5c635e2673b7bb) ?? 0,
      t = this._window.findChildByName("lbl_dislike_count");
    (t != null && (t.text = r.toString()),
      (r = e.getValue(JI.VALUE_KEY_LIKE) ?? 0),
      (t = this._window.findChildByName("lbl_like_count")),
      t != null && (t.text = r.toString()));
  }
  displayResults(e) {
    (this.createWindow(a.STATE_RESULT),
      this.updateResults(e),
      (this._r296a04323547dc = new UnkEventDispatcherWrapperSubclass_05394e(a._reafb3c1e24c241, 1)),
      this._r296a04323547dc.addEventListener(DeBouncer.addEventListener, this._r91eaa220f267a4),
      this._r296a04323547dc.start());
  }
  getCorrectTextWidth(e, r = null) {
    let t = e === a._rbb850c7d21b06e ? "wordquiz_question_xml" : "wordquiz_result_xml",
      s = this.var_17?.assets?.getAssetByName(t)?.content,
      o = s != null ? this.var_17?.windowManager?.buildFromXML(s) : null;
    if (o == null) return 0;
    let d = o.findChildByName("quiz_topic");
    d != null && ((d.caption = r ?? ""), (d.width = 660));
    let c = o.findChildByName("quiz_topic")?.textWidth ?? 0;
    return (o.dispose(), c);
  }
  _r91eaa220f267a4 = n((e) => {
    this.removeWindow();
  }, "_r91eaa220f267a4");
  _r40385b4483e2dd = n((e) => {
    this.var_17?._rc0203dee78c982(1);
  }, "_r40385b4483e2dd");
  var_4228 = n((e) => {
    this.var_17?._rc0203dee78c982(0);
  }, "var_4228");
  onDesktopResized = n((e) => {
    this.positionWindow();
  }, "onDesktopResized");
  positionWindow() {
    if (this._window == null || this._window.numChildren === 0) return;
    let e = this._window.getChildAt(0);
    e != null &&
      ((this._window.x = this._window.desktop.width / 2 - e.width / 2),
      (this._window.y = 6));
  }
}
