// Extracted from HabboAirLauncher.deobf.js, line 232679.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/SafetyBookletController.as
// Obfuscated name: _ib59abbf73da039

class a {
  constructor(e) {
    this._habboHelp = e;
  }
  static {
    n(this, "SafetyBookletController");
  }
  static _r7c593be4d8c6a9 = 0;
  static FINAL_PAGE = 7;
  var_408 = null;
  _window = null;
  _disposed = !1;
  var_770 = 0;
  dispose() {
    this._disposed || (this.closeWindow(), (this._habboHelp = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  openSafetyBooklet() {
    (this.closeWindow(),
      (this.var_408 = this._habboHelp?.getModalXmlWindow("safety_booklet") ?? null),
      (this._window = this.var_408?.rootWindow),
      this._window != null &&
        ((this._window.procedure = this.onWindowEvent),
        this.setCurrentPage(a._r7c593be4d8c6a9),
        this._habboHelp?.tracking?.trackEventLog("Quiz", "", "talent.quiz.open")));
  }
  closeWindow() {
    ((this._window = null), this.var_408?.dispose(), (this.var_408 = null));
  }
  onWindowEvent = n((e, r) => {
    if (!(this._disposed || this._window == null || e.type !== u.CLICK))
      switch (r.name) {
        case "header_button_close":
          this.closeWindow();
          break;
        case "next_button":
          (this.setCurrentPage(Math.min(a.FINAL_PAGE, this.var_770 + 1)),
            this._habboHelp?.tracking?.trackEventLog(
              "Quiz",
              `${this.var_770}`,
              "talent.quiz.change_page",
            ),
            this._habboHelp?.trackGoogle("safetyBooklet", `clickNextPage_${this.var_770}`));
          break;
        case "back_button":
        case "previous_button":
          (this.setCurrentPage(Math.max(a._r7c593be4d8c6a9, this.var_770 - 1)),
            this._habboHelp?.tracking?.trackEventLog(
              "Quiz",
              `${this.var_770}`,
              "talent.quiz.change_page",
            ),
            this._habboHelp?.trackGoogle("safetyBooklet", `clickPrevPage_${this.var_770}`));
          break;
        case "quiz_button":
          (this._habboHelp?.trackGoogle("safetyBooklet", "clickQuiz"),
            this._habboHelp?._rb99f6f4b9af8d6());
          break;
        case "ok_button":
          (this._habboHelp?.trackGoogle("safetyBooklet", "clickOk"),
            this._habboHelp?._rb99f6f4b9af8d6(),
            this._habboHelp?._r79116f13b4fc5e());
          break;
      }
  }, "onWindowEvent");
  setCurrentPage(e) {
    ((this.var_770 = e),
      this._window != null &&
        ((this._window.findChildByName("safety.quiz.explanation").visible = !(
          this._habboHelp?.safetyQuizDisabled ?? !1
        )),
        this.var_770 < a.FINAL_PAGE
          ? ((this._window.findChildByName("previous_button").visible =
              this.var_770 !== a._r7c593be4d8c6a9),
            (this._window.findChildByName("illustration").assetUri =
              `\${image.library.url}safetyquiz/page_${this.var_770}.png`),
            (this._window.findChildByName("safety_image").assetUri =
              "${image.library.url}safetyquiz/safety_off.png"),
            ((this._window.findChildByName("page_widget")?.widget).position =
              this.var_770 + 1),
            (this._window.findChildByName("title").caption =
              `\${safety.booklet.page.${this.var_770}.title}`),
            (this._window.findChildByName("description").caption =
              `\${safety.booklet.page.${this.var_770}.description}`),
            (this._window.findChildByName("page_container").visible = !0),
            (this._window.findChildByName("final_page").visible = !1),
            (this._window.findChildByName("final_page_no_questions").visible = !1),
            this._window.findChildByName("page_container").invalidate())
          : ((this._window.findChildByName("illustration").assetUri =
              "${image.library.url}safetyquiz/page_end.png"),
            (this._window.findChildByName("safety_image").assetUri =
              "${image.library.url}safetyquiz/safety_on.png"),
            ((this._window.findChildByName("page_widget")?.widget).position = 0),
            (this._window.findChildByName("page_container").visible = !1),
            (this._habboHelp?.safetyQuizDisabled ?? !1)
              ? ((this._window.findChildByName("final_page_no_questions").visible = !0),
                this._window.findChildByName("final_page_no_questions").invalidate())
              : ((this._window.findChildByName("final_page").visible = !0),
                this._window.findChildByName("final_page").invalidate()))));
  }
}
