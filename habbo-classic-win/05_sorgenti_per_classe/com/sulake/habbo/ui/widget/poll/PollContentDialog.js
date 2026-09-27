// Estratto da HabboAirLauncher.deobf.js, riga 325116.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/poll/PollContentDialog.as
// Nome offuscato: _ic1b89d6fa944bd

class {
  constructor(e, r, t, i, s) {
    this._id = e;
    this.var_1317 = t;
    this.var_17 = i;
    this.var_341 = s;
    this._r4abbf324931b97();
    let o = this.var_17?.assets?.getAssetByName("poll_question");
    if (
      o?.content == null ||
      ((this._window = this.var_17?.windowManager?.buildFromXML(o.content)),
      this._window == null)
    )
      return;
    let d = this._window.findChildByName("poll_question_headline");
    (d != null && (d.text = r),
      this._window.center(),
      this._window
        .findChildByName("header_button_close")
        ?.addEventListener(u.CLICK, this.onClose),
      this._window
        .findChildByName("poll_question_button_ok")
        ?.addEventListener(u.CLICK, this._r29a9c14eb33b0e),
      this._window
        .findChildByName("poll_question_cancel")
        ?.addEventListener(u.CLICK, this.onCancel));
  }
  static {
    n(this, "PollContentDialog");
  }
  _disposed = !1;
  _window = null;
  var_582 = null;
  var_5096 = !1;
  var_469 = -1;
  var_2647 = 0;
  _r8eaa21bad5d76b = -1;
  var_3736 = 0;
  var_887 = null;
  get disposed() {
    return this._disposed;
  }
  start() {
    this.var_5096 || ((this.var_5096 = !0), this.nextQuestion());
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._window?.dispose(),
      (this._window = null),
      this.var_582?.dispose(),
      (this.var_582 = null),
      (this.var_17 = null),
      (this.var_1317 = null));
  }
  onClose = n((e) => {
    this.showCancelConfirm();
  }, "onClose");
  _r29a9c14eb33b0e = n((e) => {
    this._r55681ffa82691d();
  }, "_r29a9c14eb33b0e");
  onCancel = n((e) => {
    this.showCancelConfirm();
  }, "onCancel");
  nextQuestion() {
    if (((this.var_887 = this.getNextQuestion()), this.var_887 == null)) {
      this.var_17?._r04e58e1f2ef728(this._id);
      return;
    }
    if (this._window == null) return;
    let e = this._window.findChildByName("poll_question_text");
    e != null && (e.text = this.var_887.questionText);
    let r = this._window.findChildByName("poll_question_number");
    if (r != null) {
      r.text = "${poll_question_number}";
      let s = r.text;
      ((s = s.replace("%number%", String(this.var_469 + 1))),
        (s = s.replace("%count%", String(this.var_2647))),
        (r.text = s));
    }
    let t = this._window.findChildByName("poll_question_answer_container");
    if (t != null) {
      for (; t.numChildren > 0;) t.getChildAt(0)?.dispose();
      t.invalidate();
    }
    switch (this.var_887.questionType) {
      case class_4353.const_107:
        this.populateRadionButtonType(t, this.var_887.class_3951);
        break;
      case class_4353.CHECKBOX:
        this.populateCheckBoxType(t, this.var_887.class_3951);
        break;
      case class_4353.const_375:
        this.populateTextLineType(t);
        break;
      case class_4353.const_823:
        this._r3347e28a6e2383(t);
        break;
      default:
        this.nextQuestion();
        break;
    }
    let i = this._window.findChildByName("poll_content_wrapper");
    if (i != null) {
      let s = i.visibleRegion.height - i._rbab5041f1931e4.height;
      ((this._window.height += s), this._window.center());
    }
  }
  getNextQuestion() {
    if (this.var_1317 == null) return null;
    if (
      this.var_341 &&
      this._r8eaa21bad5d76b >= 0 &&
      this.var_3736 !== class_4141.const_173
    ) {
      let e = this.var_1317[this._r8eaa21bad5d76b] ?? null;
      for (let r of e?.children ?? [])
        if (r != null && r.questionCategory === this.var_3736)
          return ((this._r8eaa21bad5d76b = -1), r);
    }
    return (
      (this.var_469 += 1),
      this.var_469 < this.var_1317.length
        ? ((this._r8eaa21bad5d76b = this.var_469),
          this.var_1317[this.var_469] ?? null)
        : null
    );
  }
  populateRadionButtonType(e, r) {
    let t = this.var_17?.assets?.getAssetByName("poll_answer_radiobutton_input");
    if (t?.content == null || e == null) return;
    let i = this.var_17?.windowManager?.buildFromXML(t.content);
    i != null && (this.populateSelectionList(r, i), e.addChild(i));
  }
  resolveRadionButtonTypeAnswer(e) {
    let r = [],
      i = this._window?.findChildByName("poll_answer_selector")?.getSelected();
    if (i != null) {
      let s = e.class_3951[i.id] ?? null;
      s != null &&
        ((this.var_3736 = this.var_341 ? s.choiceType : class_4141.const_173),
        r.push(s.value));
    }
    return r;
  }
  populateCheckBoxType(e, r) {
    let t = this.var_17?.assets?.getAssetByName("poll_answer_checkbox_input");
    if (t?.content == null || e == null) return;
    let i = this.var_17?.windowManager?.buildFromXML(t.content);
    i != null && (this.populateSelectionList(r, i), e.addChild(i));
  }
  resolveCheckBoxTypeAnswer(e) {
    let r = [],
      t = this._window?.findChildByName("poll_answer_itemlist");
    if (t != null)
      for (let i = 0; i < t.numListItems; i += 1)
        t.getListItemAt(i)?.findChildByName("poll_answer_checkbox")?.testStateFlag(class_1948.const_130) &&
          r.push(e.class_3951[i].value);
    return r;
  }
  populateSelectionList(e, r) {
    let t = r.findChildByName("poll_answer_itemlist");
    if (t == null) return;
    let i = r.findChildByName("poll_answer_entity");
    if (i != null) {
      for (let s = 1; s < e.length; s += 1) t.addListItem(i.clone());
      for (let s = 0; s < e.length; s += 1) {
        i = t.getListItemAt(s);
        let o = i?.findChildByName("poll_answer_entity_text");
        o != null && (o.text = e[s].choiceText);
        let d = i?.findChildByTag("POLL_SELECTABLE_ITEM");
        d != null && (d.id = s);
      }
    }
  }
  populateTextLineType(e) {
    let r = this.var_17?.assets?.getAssetByName("poll_answer_text_input");
    if (r?.content == null || e == null) return;
    let t = this.var_17?.windowManager?.buildFromXML(r.content);
    t != null && e.addChild(t);
  }
  _r5221e9d64808c1() {
    return [this._window?.findChildByName("poll_answer_input")?.text ?? ""];
  }
  _r3347e28a6e2383(e) {
    this.populateTextLineType(e);
  }
  _rb140b396ae8c60() {
    return this._r5221e9d64808c1();
  }
  _re3a1840e8bc9e6() {
    this.var_17?._r6d4b681851130e(this._id);
  }
  _r55681ffa82691d() {
    let e =
      this.var_341 && this.var_887 != null
        ? this.var_887
        : (this.var_1317?.[this.var_469] ?? null);
    if (e == null) return;
    let r;
    switch (((this.var_3736 = class_4141.const_173), e.questionType)) {
      case class_4353.const_107:
        r = this.resolveRadionButtonTypeAnswer(e);
        break;
      case class_4353.CHECKBOX:
        if (((r = this.resolveCheckBoxTypeAnswer(e)), r.length < 0)) {
          this.showAlert("${poll_alert_answer_missing}");
          return;
        }
        if (r.length > e.class_3951.length) {
          this.showAlert("${poll_alert_invalid_selection}");
          return;
        }
        break;
      case class_4353.const_375:
        r = this._r5221e9d64808c1();
        break;
      case class_4353.const_823:
        r = this._rb140b396ae8c60();
        break;
      default:
        return;
    }
    let t = [],
      i = new RoomWidgetPollMessage(RoomWidgetPollMessage.ANSWER, this._id);
    if (((i._re812cd9299d86c = e._re812cd9299d86c), e.class_3951.length > 0))
      for (let s of r) t.push(s);
    else t.push(r);
    ((i._r44ca599613a61a = t),
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(i),
      this.nextQuestion());
  }
  showCancelConfirm() {
    if (this.var_582 != null) return;
    let e = this.var_17?.assets?.getAssetByName("poll_cancel_confirm");
    e?.content != null &&
      ((this.var_582 = this.var_17?.windowManager?.buildFromXML(e.content, 2)),
      this.var_582 != null &&
        (this.var_582.center(),
        this.var_582
          .findChildByName("header_button_close")
          ?.addEventListener(u.CLICK, this._r963c85fae6288c),
        this.var_582
          .findChildByName("poll_cancel_confirm_button_ok")
          ?.addEventListener(u.CLICK, this._rb230d699476c07),
        this.var_582
          .findChildByName("poll_cancel_confirm_button_cancel")
          ?.addEventListener(u.CLICK, this._r54b17d166c256d)));
  }
  _rde58ab0eb219d1() {
    (this.var_582?.dispose(), (this.var_582 = null));
  }
  _r963c85fae6288c = n((e) => {
    this._rde58ab0eb219d1();
  }, "_r963c85fae6288c");
  _rb230d699476c07 = n((e) => {
    (this._rde58ab0eb219d1(), this._re3a1840e8bc9e6());
  }, "_rb230d699476c07");
  _r54b17d166c256d = n((e) => {
    this._rde58ab0eb219d1();
  }, "_r54b17d166c256d");
  _r4abbf324931b97() {
    this.var_2647 = this.var_1317?.length ?? 0;
    for (let e of this.var_1317 ?? []) e.children.length > 0 && (this.var_2647 += 1);
  }
  showAlert(e) {
    this.var_17?.windowManager?.alert("${win_error}", e, 0, (r, t) => {
      r.dispose();
    });
  }
}
