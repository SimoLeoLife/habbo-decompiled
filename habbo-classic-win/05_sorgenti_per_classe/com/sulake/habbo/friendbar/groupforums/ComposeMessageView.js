// Extracted from HabboAirLauncher.deobf.js, line 205685.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/ComposeMessageView.as
// Obfuscated name: _i5fc7873e38918b

class a {
  static {
    n(this, "ComposeMessageView");
  }
  static _rfc4a9d1531de95 = 10;
  static SUBJECT_MAX_LENGTH = 120;
  static _r75f5149c09c9e2 = 10;
  static MESSAGE_MAX_LENGTH = 4e3;
  static lastPostTime = 30 * 1e3;
  var_63;
  var_157;
  var_382;
  _window;
  _r70d085b8405d83;
  var_1022;
  maxChars;
  _status;
  var_95;
  var_1368;
  _hasErrors = !1;
  var_2949 = !1;
  constructor(e, r, t, i, s, o) {
    ((this.var_157 = e),
      (this.var_63 = this.var_157.controller),
      (this.var_95 = i),
      (this.var_1368 = s),
      (this._window = this.var_63.windowManager.buildFromXML(
        this.var_63.assets.getAssetByName("groupforum_compose_message_xml")?.content,
      )),
      (this._window.x = r));
    let d = this.var_63.windowManager.getDesktop(1)?.width ?? this._window.width;
    (this._window.x + this._window.width > d &&
      (this._window.x = d - this._window.width),
      (this._window.y = t),
      this.initControls(o),
      (this._status.caption?.length ?? 0) === 0 &&
        (this._status.caption = this.var_63.localizationManager.getLocalization(
          "groupforum.compose.reply_hint",
        )),
      (this.var_382 = new UnkEventDispatcherWrapperSubclass_05394e(1e3, 0)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this._r76ce286f901681),
      this.var_382.start());
  }
  focus(e, r, t) {
    (this.var_2949 ||
      ((this.var_95 = e),
      this.var_1368 != null && r == null && (this._r70d085b8405d83.text = ""),
      (this.var_1368 = r),
      this.initControls(t)),
      this._window.activate());
  }
  dispose() {
    (this.var_382.stop(),
      this.var_382.removeEventListener(DeBouncer.addEventListener, this._r76ce286f901681),
      (this.var_63._r109046ec98702f = null),
      this._window.dispose());
  }
  initControls(e) {
    let r = k1.initTopAreaForForum(this._window, this.var_95);
    (r.removeEventListener(u.CLICK, this._r01a671f0451144),
      r.addEventListener(u.CLICK, this._r01a671f0451144));
    let t = this._window.findChildByName("thread_subject_header");
    ((this._r70d085b8405d83 = this._window.findChildByName("thread_subject")),
      this.var_1368 != null
        ? ((t.caption = this.var_63.localizationManager.getLocalization(
            "groupforum.compose.subject_replying_to",
          )),
          (this._r70d085b8405d83.text = this.var_1368.header),
          this._r70d085b8405d83.disable())
        : ((t.caption = this.var_63.localizationManager.getLocalization(
            "groupforum.compose.subject",
          )),
          this._r70d085b8405d83.removeEventListener(sr.const_900, this._r234cefe5f967a9),
          this._r70d085b8405d83.addEventListener(sr.const_900, this._r234cefe5f967a9),
          (this._r70d085b8405d83._r4c2336e24c69cc = a.SUBJECT_MAX_LENGTH),
          this._r70d085b8405d83.enable()),
      (this.var_1022 = this._window.findChildByName("message_text")),
      this.var_1022.removeEventListener(sr.const_900, this._rc91b372fb7b928),
      this.var_1022.addEventListener(sr.const_900, this._rc91b372fb7b928),
      (this.var_1022._r4c2336e24c69cc = a.MESSAGE_MAX_LENGTH),
      e != null && this.addQuote(e));
    let i = this._window.findChildByName("cancel_btn");
    (i?.removeEventListener(u.CLICK, this._r9a98d7761d81c4),
      i?.addEventListener(u.CLICK, this._r9a98d7761d81c4));
    let s = this._window.findChildByName("header_button_close");
    (s?.removeEventListener(u.CLICK, this._r9a98d7761d81c4),
      s?.addEventListener(u.CLICK, this._r9a98d7761d81c4),
      (this.maxChars = this._window.findChildByName("post_btn")),
      this.maxChars.removeEventListener(u.CLICK, this._r6f24f74c8e4dc2),
      this.maxChars.addEventListener(u.CLICK, this._r6f24f74c8e4dc2),
      (this._status = this._window.findChildByName("status_text")),
      this.validateInputs());
  }
  addQuote(e) {
    let r = new Rz();
    (r.add(this.var_1022.text),
      r.length > 0 && r.add("\r\r"),
      r.add(
        this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.compose.reply_template",
          "",
          "author_name",
          e.authorName,
          "creation_time",
          this.var_157.getAsDaysHoursMinutes(e.creationTimeAsSecondsAgo),
        ),
      ),
      r.add("\r"));
    let t = e.messageText.split("\r"),
      i = !1;
    for (let s of t)
      Pz._r00042be57a216a.exec(s) != null
        ? i ||
          ((i = !0),
          r
            .add("> ")
            .add(this.var_63.localizationManager.getLocalization("groupforum.compose.skipped_quote"))
            .add("\r"))
        : (r.add("> ").add(s).add("\r"), (i = !1));
    (r.add("\r"), (this.var_1022.text = r.toString()));
  }
  validateInputs() {
    if (
      ((this._hasErrors = !1),
      this.var_1368 == null &&
        this._r70d085b8405d83.text.length <= a._rfc4a9d1531de95 &&
        ((this._hasErrors = !0),
        (this._status.caption = this.var_63.localizationManager.getLocalization(
          "groupforum.compose.subject_too_short",
        ))),
      !this._hasErrors &&
        this.var_1022.text.length <= a._r75f5149c09c9e2 &&
        ((this._hasErrors = !0),
        (this._status.caption = this.var_63.localizationManager.getLocalization(
          "groupforum.compose.message_too_short",
        ))),
      !this._hasErrors && !this.var_2949)
    ) {
      let e = _ia411d8d8194a3a() - this.var_63._rffb6d02f0d4c47;
      e < a.lastPostTime &&
        ((this._hasErrors = !0),
        (this._status.caption = this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.compose.post_cooldown",
          "",
          "time_remaining",
          ra.getFriendlyTime(
            this.var_63.localizationManager,
            Math.floor((a.lastPostTime - e) / 1e3) + 1,
            "",
            1,
          ),
        )));
    }
    !this.var_2949 && !this._hasErrors
      ? (this.maxChars.enable(), (this._status.caption = ""))
      : this.maxChars.disable();
  }
  _r76ce286f901681 = n(() => {
    this.validateInputs();
  }, "_r76ce286f901681");
  _r234cefe5f967a9 = n(() => {
    this.validateInputs();
  }, "_r234cefe5f967a9");
  _rc91b372fb7b928 = n(() => {
    this.validateInputs();
  }, "_rc91b372fb7b928");
  _r01a671f0451144 = n(() => {
    this.var_63.context._r6b6c989018eb05(`group/${this.var_95.groupId}`);
  }, "_r01a671f0451144");
  _r6f24f74c8e4dc2 = n(() => {
    this.var_2949 ||
      (this.validateInputs(),
      !this._hasErrors &&
        ((this.var_2949 = !0),
        this._r70d085b8405d83.disable(),
        this.var_1022.disable(),
        this.maxChars.disable(),
        (this._status.caption = this.var_63.localizationManager.getLocalization(
          "groupforum.compose.posting",
        )),
        this.var_1368 != null
          ? this.var_63.postNewMessage(
              this.var_95.groupId,
              this.var_1368.threadId,
              this.var_1022.text,
            )
          : this.var_63._raf6dd08476702a(
              this.var_95.groupId,
              this._r70d085b8405d83.text,
              this.var_1022.text,
            )));
  }, "_r6f24f74c8e4dc2");
  _r9a98d7761d81c4 = n(() => {
    this.dispose();
  }, "_r9a98d7761d81c4");
}
