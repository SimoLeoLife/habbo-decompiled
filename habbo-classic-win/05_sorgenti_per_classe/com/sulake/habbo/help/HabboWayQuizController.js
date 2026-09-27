// Estratto da HabboAirLauncher.deobf.js, riga 231639.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/HabboWayQuizController.as
// Nome offuscato: _ia57b98dae89605

class a {
  constructor(e) {
    this._habboHelp = e;
    let r = this._habboHelp?._rf3db13932bfb60;
    (r?._r2e106e2349a0b6(new class_3222(this._rc945f4bc23fedd)), r?._r2e106e2349a0b6(new class_2917(this._r7de31a1eef62cb)));
  }
  static {
    n(this, "HabboWayQuizController");
  }
  static HABBO_WAY_QUIZ_CODE = "HabboWay1";
  static SAFETY_QUIZ_CODE = "SafetyQuiz1";
  static PAGE_QUESTION = 1;
  static PAGE_SUCCESS = 2;
  static PAGE_FAILURE = 3;
  static PAGE_ANALYSIS = 4;
  _disposed = !1;
  var_408 = null;
  _window = null;
  var_2579 = null;
  _r5784e549725b9a = null;
  _re5f5bf7353f81a = null;
  var_1067 = null;
  _r1efc3ae1e4fc2f = null;
  _quizCode = "";
  var_2020 = [];
  var_1835 = [];
  _answerOrders = [];
  _questionIdsForWrongAnswers = [];
  var_887 = 0;
  dispose() {
    this._disposed ||
      ((this.var_2579 = null),
      (this._r5784e549725b9a = null),
      this._re5f5bf7353f81a?.dispose(),
      (this._re5f5bf7353f81a = null),
      (this.var_1067 = null),
      this._r1efc3ae1e4fc2f?.dispose(),
      (this._r1efc3ae1e4fc2f = null),
      this.closeWindow(),
      (this._habboHelp = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _r8a1993ef7d8317() {
    this._habboHelp?._rb13ed3a89b85ae(new _i2aab97f8361721(a.HABBO_WAY_QUIZ_CODE));
  }
  _rb99f6f4b9af8d6() {
    this._habboHelp?._rb13ed3a89b85ae(new _i2aab97f8361721(a.SAFETY_QUIZ_CODE));
  }
  _rc945f4bc23fedd = n((e) => {
    let r = ClassUtils.getParser(e, class_2636);
    r != null &&
      (this._habboHelp?._ra1b63e87af49e4(),
      this._habboHelp?._r79116f13b4fc5e(),
      this.showWindow(r._rc6e42999e2d83b ?? "", r._rc9479a8851918a ?? []));
  }, "_rc945f4bc23fedd");
  _r7de31a1eef62cb = n((e) => {
    let r = ClassUtils.getParser(e, class_3596);
    r != null &&
      ((this._questionIdsForWrongAnswers = r._r7bd3c8c92a0571 ?? []),
      this._questionIdsForWrongAnswers.length === 0
        ? this.showPage(a.PAGE_SUCCESS)
        : this.showPage(a.PAGE_FAILURE));
  }, "_r7de31a1eef62cb");
  showWindow(e, r) {
    if (
      (this.closeWindow(),
      (this.var_408 = this._habboHelp?.getModalXmlWindow("habbo_way_quiz") ?? null),
      (this._window = this.var_408?.rootWindow),
      this._window == null)
    )
      return;
    ((this._window.procedure = this.onWindowEvent),
      (this.var_2579 = this._window.findChildByName("question_pane")),
      (this._r5784e549725b9a = this.var_2579?.findChildByName("answer_list")),
      (this._re5f5bf7353f81a = this._r5784e549725b9a?.getSelectableAt(0) ?? null),
      this._re5f5bf7353f81a != null && this._r5784e549725b9a?._r17ea3f0ab73786(this._re5f5bf7353f81a),
      (this.var_1067 = this._window.findChildByName("analysis_pane")),
      (this._r1efc3ae1e4fc2f = this.var_1067?.getListItemAt(0) ?? null),
      this.var_1067?.removeListItems(),
      this.var_1067 != null && (this.var_1067.spacing = 4),
      (this._quizCode = e),
      (this.var_2020 = [...r]),
      (this.var_1835 = new Array(this.questionCount).fill(null)),
      (this._answerOrders = new Array(this.questionCount).fill(null).map(() => [])),
      this.setCurrentQuestion(0));
    let t = this._r1efc3ae1e4fc2f?.getListItemByName("explanation_container");
    switch (this._quizCode) {
      case a.HABBO_WAY_QUIZ_CODE:
        ((this._window.findChildByName("question_illustration").assetUri =
          "${image.library.url}habboway/quiz_question.png"),
          (this._window.findChildByName("indicator_image").assetUri = "help_habboway_dove_on"),
          (this._window.findChildByName("success_illustration").assetUri =
            "${image.library.url}habboway/quiz_success.png"),
          ((t?.findChildByName("explanation_illustration")).assetUri = "help_habboway_dove_quizz"));
        break;
      case a.SAFETY_QUIZ_CODE:
        ((this._window.findChildByName("question_illustration").assetUri =
          "${image.library.url}safetyquiz/question_illustration.png"),
          (this._window.findChildByName("indicator_image").assetUri =
            "${image.library.url}safetyquiz/safety_on.png"),
          (this._window.findChildByName("failure_illustration").assetUri =
            "${image.library.url}safetyquiz/result_failure.png"),
          (this._window.findChildByName("success_illustration").assetUri =
            "${image.library.url}safetyquiz/result_success.png"),
          ((t?.findChildByName("explanation_illustration")).assetUri =
            "${image.library.url}safetyquiz/safety_on.png"));
        break;
    }
    this.showPage(a.PAGE_QUESTION);
  }
  closeWindow() {
    ((this._window = null), this.var_408?.dispose(), (this.var_408 = null));
  }
  showPage(e) {
    if (this._window == null) return;
    ((this._window.findChildByName("question_pane").visible = e === a.PAGE_QUESTION),
      (this._window.findChildByName("success_pane").visible = e === a.PAGE_SUCCESS),
      (this._window.findChildByName("failure_pane").visible = e === a.PAGE_FAILURE),
      this.var_1067 != null && (this.var_1067.visible = e === a.PAGE_ANALYSIS),
      (this._window.findChildByName("prev_next_buttons").visible = e === a.PAGE_QUESTION),
      (this._window.findChildByName("failure_buttons").visible = e === a.PAGE_FAILURE),
      (this._window.findChildByName("exit_button_container").visible =
        e === a.PAGE_SUCCESS || e === a.PAGE_ANALYSIS));
    let r = this._window.findChildByName("top_indicator"),
      t = this._window.findChildByName("indicator_image");
    switch (e) {
      case a.PAGE_QUESTION:
        ((this._window.caption = this.getFullLocalizationKey("question.title")),
          (t.visible = !0),
          (r.visible = !0),
          (r.caption =
            this._habboHelp?.localization?.getLocalizationWithParams(
              this.getRawLocalizationKey("question.page"),
              "",
              "current_page",
              String(this.var_887 + 1),
              "page_count",
              this.questionCount.toString(),
            ) ?? ""));
        break;
      case a.PAGE_SUCCESS:
        ((this._window.caption = this.getFullLocalizationKey("success.title")),
          (this._window.findChildByName("failure_advice").caption =
            this.getFullLocalizationKey("failure.advice")),
          (this._window.findChildByName("success_results").caption =
            this._habboHelp?.localization?.getLocalizationWithParams(
              this.getRawLocalizationKey("success.results"),
              "",
              "question_count",
              this.questionCount.toString(),
            ) ?? ""),
          (t.visible = !1),
          (r.visible = !1),
          (r.caption = ""));
        break;
      case a.PAGE_FAILURE: {
        let i = this.var_2020.length - this._questionIdsForWrongAnswers.length;
        ((this._window.caption = this.getFullLocalizationKey("failure.title")),
          (this._window.findChildByName("failure_advice").caption =
            this.getFullLocalizationKey("failure.advice")),
          (this._window.findChildByName("failure_results").caption =
            this._habboHelp?.localization?.getLocalizationWithParams(
              this.getRawLocalizationKey("failure.results"),
              "",
              "correct_count",
              i.toString(),
              "total_count",
              this.questionCount.toString(),
            ) ?? ""),
          (t.visible = !1),
          (r.visible = !1),
          (r.caption = ""));
        break;
      }
      case a.PAGE_ANALYSIS:
        ((this._window.caption = this.getFullLocalizationKey("analysis.title")),
          (t.visible = !0),
          (r.visible = !0),
          (r.caption = this.getFullLocalizationKey("analysis.top")));
        for (let i of this._questionIdsForWrongAnswers) {
          let s = this.var_2020.indexOf(i),
            o = this.var_1835[s] ?? 0,
            d = this._r1efc3ae1e4fc2f?.clone();
          if (d == null) continue;
          let c = `\${quiz.${this._quizCode}.`,
            f = `.${i}.${o}}`;
          d.getListItemByName("question").caption = `${c}question.${i}}`;
          let l = d.getListItemByName("answer_container"),
            b = d.getListItemByName("explanation_container"),
            _ = l?.findChildByName("answer"),
            h = b?.findChildByName("explanation");
          (_ != null && (_.caption = `${c}answer${f}`),
            h != null && (h.caption = `${c}explanation${f}`),
            this.var_1067?.addListItem(d));
        }
        this.var_1067
          ?.getListItemAt(this.var_1067.numListItems - 1)
          ?.getListItemByName("separator")
          ?.dispose();
        break;
    }
  }
  onWindowEvent = n((e, r) => {
    if (!(this._disposed || this._window == null || e.type !== u.CLICK)) {
      if ("select" in r) {
        let t = r;
        ((this.var_1835[this.var_887] = Number(t.name)),
          (this._window.findChildByName("next_dimmer").visible = !1));
        return;
      }
      switch (r.name) {
        case "header_button_close":
        case "exit_button":
          this.closeWindow();
          break;
        case "prev_button":
          this.setCurrentQuestion(this.var_887 - 1);
          break;
        case "next_button":
          this.setCurrentQuestion(this.var_887 + 1);
          break;
        case "review_button":
          this.showPage(a.PAGE_ANALYSIS);
          break;
      }
    }
  }, "onWindowEvent");
  setCurrentQuestion(e) {
    if (e >= this.questionCount) {
      this._habboHelp?._rb13ed3a89b85ae(
        new _i77c58ef847037c(
          this._quizCode,
          this.var_1835.map((s) => s ?? 0),
        ),
      );
      return;
    }
    if (
      e < 0 ||
      this._window == null ||
      this.var_2579 == null ||
      this._r5784e549725b9a == null ||
      this._re5f5bf7353f81a == null
    )
      return;
    for (
      this.var_887 = e,
        this._window.findChildByName("prev_dimmer").visible = e <= 0,
        this._window.findChildByName("next_dimmer").visible =
          this.var_1835[this.var_887] == null,
        this._window.findChildByName("top_indicator").caption =
          this._habboHelp?.localization?.getLocalizationWithParams(
            this.getRawLocalizationKey("question.page"),
            "",
            "current_page",
            String(e + 1),
            "page_count",
            this.questionCount.toString(),
          ) ?? "";
      this._r5784e549725b9a.numSelectables > 0;
    )
      this._r5784e549725b9a._r17ea3f0ab73786(this._r5784e549725b9a.getSelectableAt(0))?.dispose();
    let r = this.var_2020[this.var_887],
      t = [],
      i = 0;
    for (
      this.var_2579.findChildByName("question").caption =
        `\${quiz.${this._quizCode}.question.${r}}`;
      ;
      i += 1
    ) {
      let s =
        this._habboHelp?.localization?.getLocalization(
          `quiz.${this._quizCode}.answer.${r}.${i}`,
          "",
        ) ?? "";
      if (s.length <= 0) break;
      let o = this._re5f5bf7353f81a.clone();
      ((o.caption = s), (o.name = i.toString()), t.push(o));
    }
    if (this._answerOrders[this.var_887].length === 0)
      for (let s = 0; s < i; s += 1) {
        let o = t.splice(Math.trunc(Math.random() * t.length), 1)[0];
        (this._r5784e549725b9a.var_871(o),
          this._answerOrders[this.var_887].push(Number(o.name)));
      }
    else
      for (let s of this._answerOrders[this.var_887])
        this._r5784e549725b9a.var_871(t[s]);
    this._r5784e549725b9a._rf1edf3aad44c96(String(this.var_1835[this.var_887]))?.select();
  }
  get questionCount() {
    return this.var_2020.length;
  }
  getFullLocalizationKey(e) {
    return `\${${this.getRawLocalizationKey(e)}}`;
  }
  getRawLocalizationKey(e) {
    return this._quizCode === a.HABBO_WAY_QUIZ_CODE
      ? `habbo.way.quiz.${e}`
      : `quiz.${this._quizCode}.${e}`;
  }
}
