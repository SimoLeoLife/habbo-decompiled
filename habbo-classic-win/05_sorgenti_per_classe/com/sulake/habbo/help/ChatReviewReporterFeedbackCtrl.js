// Estratto da HabboAirLauncher.deobf.js, riga 229640.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/ChatReviewReporterFeedbackCtrl.as
// Nome offuscato: _ia4c5e902a89997

class {
  constructor(e) {
    this._habboHelp = e;
    (this._habboHelp?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3383(this._re5666b3c7995a0)),
      this._habboHelp?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3683(this.onCreateResult)));
  }
  static {
    n(this, "ChatReviewReporterFeedbackCtrl");
  }
  _window = null;
  dispose() {
    ((this._habboHelp = null), this._window?.dispose(), (this._window = null));
  }
  get disposed() {
    return this._habboHelp == null;
  }
  show(e) {
    if (!this.enabled || this._habboHelp == null) return;
    (this.prepare(),
      this.setText("caption_txt", e, "caption"),
      this.setText("body_txt", e, "body"),
      this.setText("note_txt", e, "note"));
    let r = this._window?.findChildByName("caption_txt"),
      t = this._window?.findChildByName("body_txt");
    (r != null && t != null && (t.y = r.y + r.textHeight + 5),
      this._window != null && (this._window.visible = !0));
  }
  _re5666b3c7995a0 = n((e) => {
    this.show(e.getParser().localizationCode);
  }, "_re5666b3c7995a0");
  onCreateResult = n((e) => {
    this.show(e.getParser().localizationCode);
  }, "onCreateResult");
  setText(e, r, t) {
    let i = this._habboHelp,
      s = this._window?.findChildByName(e);
    if (i == null || s == null) return;
    let o = `guide.bully.request.reporter.${r}.${t}`;
    (i.localization?.getLocalization(o, "") === "" && (o = `guide.bully.request.reporter.${t}`),
      (s.caption = `\${${o}}`));
  }
  prepare() {
    this._window != null ||
      this._habboHelp == null ||
      ((this._window = this._habboHelp.getXmlWindow("chat_review_reporter_feedback")),
      this._window != null &&
        ((this._window.procedure = this.windowProcedure), this._window.center()));
  }
  windowProcedure = n((e, r) => {
    e.type !== u.CLICK ||
      this._window == null ||
      this._window.disposed ||
      ((r.name === "close_button" || r.name === "header_button_close") &&
        (this._window.visible = !1));
  }, "windowProcedure");
  get enabled() {
    return this._habboHelp?.getBoolean("chatreviewreporterfeedbackctrl.enabled") ?? !1;
  }
}
