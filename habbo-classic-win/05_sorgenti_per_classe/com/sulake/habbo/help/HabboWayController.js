// Extracted from HabboAirLauncher.deobf.js, line 231554.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/HabboWayController.as
// Obfuscated name: _i81a9a0d72d6af8

class a {
  constructor(e) {
    this._habboHelp = e;
  }
  static {
    n(this, "HabboWayController");
  }
  static _r7c593be4d8c6a9 = 0;
  var_770 = 0;
  var_408 = null;
  _window = null;
  _disposed = !1;
  dispose() {
    this._disposed || (this.closeWindow(), (this._habboHelp = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  showHabboWay() {
    (this.closeWindow(),
      (this.var_408 = this._habboHelp?.getModalXmlWindow("habbo_way") ?? null),
      (this._window = this.var_408?.rootWindow),
      this._window != null &&
        ((this._window.procedure = this.onWindowEvent),
        ((this._window.findChildByName("page_widget")?.widget).size = this.finalPage),
        this.setCurrentPage(a._r7c593be4d8c6a9)));
  }
  closeWindow() {
    ((this._window = null), this.var_408?.dispose(), (this.var_408 = null));
  }
  get finalPage() {
    return this._habboHelp?.getInteger("help.habboway.page.count", 6) ?? 6;
  }
  onWindowEvent = n((e, r) => {
    if (!(this._disposed || this._window == null || e.type !== u.CLICK))
      switch (r.name) {
        case "header_button_close":
          this.closeWindow();
          break;
        case "next_button":
          (this.setCurrentPage(Math.min(this.finalPage, this.var_770 + 1)),
            this._habboHelp?.trackGoogle("habboWay", `clickNextPage_${this.var_770}`));
          break;
        case "back_button":
        case "previous_button":
          (this.setCurrentPage(Math.max(a._r7c593be4d8c6a9, this.var_770 - 1)),
            this._habboHelp?.trackGoogle("habboWay", `clickPrevPage_${this.var_770}`));
          break;
        case "quiz_button":
          (this._habboHelp?.trackGoogle("habboWay", "clickQuiz"),
            this._habboHelp?._r8a1993ef7d8317());
          break;
      }
  }, "onWindowEvent");
  setCurrentPage(e) {
    ((this.var_770 = e),
      this._window != null &&
        (this.var_770 < this.finalPage
          ? ((this._window.findChildByName("previous_button").visible =
              this.var_770 !== a._r7c593be4d8c6a9),
            (this._window.findChildByName("illustration").assetUri =
              `\${image.library.url}habboway/page_${this.var_770}.png`),
            (this._window.findChildByName("dove_image").assetUri = "help_habboway_dove_off"),
            ((this._window.findChildByName("page_widget")?.widget).position =
              this.var_770 + 1),
            (this._window.findChildByName("correct_title").caption =
              `\${habbo.way.page.${this.var_770}.correct.title}`),
            (this._window.findChildByName("correct_description").caption =
              `\${habbo.way.page.${this.var_770}.correct.description}`),
            (this._window.findChildByName("wrong_title").caption =
              `\${habbo.way.page.${this.var_770}.wrong.title}`),
            (this._window.findChildByName("wrong_description").caption =
              `\${habbo.way.page.${this.var_770}.wrong.description}`),
            (this._window.findChildByName("page_container").visible = !0),
            (this._window.findChildByName("final_page").visible = !1),
            this._window.findChildByName("page_container").invalidate())
          : ((this._window.findChildByName("illustration").assetUri =
              "${image.library.url}habboway/page_end.png"),
            (this._window.findChildByName("dove_image").assetUri = "help_habboway_dove_on"),
            ((this._window.findChildByName("page_widget")?.widget).position = 0),
            (this._window.findChildByName("page_container").visible = !1),
            (this._window.findChildByName("final_page").visible = !0),
            this._window.findChildByName("final_page").invalidate())));
  }
}
