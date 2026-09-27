// Extracted from HabboAirLauncher.deobf.js, line 207973.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4402.as
// Obfuscated name: _i10197dbdd652e8

class a {
  static {
    n(this, "class_4402");
  }
  _landingView = null;
  _window = null;
  _container = null;
  _data = null;
  _r2c35fab41e8060 = 0;
  var_4164 = 0;
  _index = 0;
  var_4545 = !1;
  _disposed = !1;
  initialize(e, r, t, i) {
    ((this._landingView = e),
      (this._window = r),
      (this._container = r),
      t.length > 2 && (this.var_4545 = t[2] === "true"),
      t.length > 3 && (r.x = Number.parseInt(t[3] ?? "0")),
      t.length > 4 && (r.y = Number.parseInt(t[4] ?? "0")),
      e._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_2927((s) => {
          this._r36be86cf2632eb(s);
        }),
      ),
      (this._container.findChildByName("accept_button").procedure = this._rd5df6c4167946c),
      (this._container.findChildByName("go_button").procedure = this._r9fd49274c293f9),
      (this._container.findChildByName("next_quest_region").procedure = this.onNextQuest),
      (this._container.findChildByName("cancel_quest_region").procedure = this._re93563365939cf),
      (this._container.findChildByName("easy_region").procedure = this._r09279866d6adfb),
      (this._container.findChildByName("hard_region").procedure = this._r1ccaac1bad2a9f));
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    ((this._landingView = null),
      (this._window = null),
      (this._container = null),
      (this._disposed = !0));
  }
  isFloating(e) {
    return this.var_4545;
  }
  refresh() {
    ((this._index = 0), this._landingView?.send(new class_3384(!0, 0)));
  }
  _r36be86cf2632eb(e) {
    let r = ClassUtils.getParser(e, class_3896);
    r != null &&
      ((this._data = r?.quest ?? null),
      (this._r2c35fab41e8060 = r?._r14cf5790c4ff67 ?? 0),
      (this.var_4164 = r?._r18422f7d6baa6c ?? 0),
      this.refreshContent());
  }
  refreshContent() {
    if (this._container == null) return;
    ((this._container.findChildByName("caption_txt").caption =
      this._data != null
        ? this._r630efd1074f956("chaincaption")
        : this.getText("landing.view.quest.currenttask.alldone.caption")),
      (this._container.findChildByName("accept_button").visible = this._data != null && !this._data.accepted),
      (this._container.findChildByName("next_quest_region").visible =
        this._data != null &&
        !this._data.accepted &&
        (this._data.easy ? this._r2c35fab41e8060 : this.var_4164) > 1),
      (this._container.findChildByName("next_quest_txt").caption = this.getText(
        "landing.view.quest.nextquest." + (this._data != null && this._data.easy ? "easy" : "hard"),
      )),
      (this._container.findChildByName("cancel_quest_region").visible =
        this._data != null && this._data.accepted),
      (this._container.findChildByName("current_quest_border").visible =
        this._data != null && this._data.accepted),
      this._data != null &&
        this._landingView?.localizationManager?._r43eae9731f5b27(
          "landing.view.quest.currenttask",
          "task",
          this.getQuestName(),
        ));
    let e = this._container.findChildByName("difficulty_container");
    if (e != null) {
      let r = e.x + e.width;
      ((e.visible =
        this._data != null && !this._data.accepted && this._r2c35fab41e8060 > 0 && this.var_4164 > 0),
        this.setupDifficultyText("easy_region", this._data != null && !this._data.easy),
        this.setupDifficultyText("hard_region", this._data != null && this._data.easy),
        a.moveChildrenToRow(e, 5),
        (e.width = e.findChildByName("hard_region").x + e.findChildByName("hard_region").width),
        (e.x = r - e.width));
    }
  }
  setupDifficultyText(e, r) {
    let t = this._container?.findChildByName(e),
      i = t?.findChildByName("label_txt");
    t == null || i == null || ((i.width = i.textWidth), (i.underline = r), (t.width = i.width));
  }
  _r630efd1074f956(e) {
    return "${quests." + this._data?.campaignCode + "." + this._data?._r936bd4029e7965 + "." + e + "}";
  }
  getText(e) {
    return "${" + e + "}";
  }
  getQuestName() {
    return this._data == null ? "" : "${" + this._data._re1c380403d8877() + ".name}";
  }
  _r9fd49274c293f9 = n((e) => {
    e.type === u.CLICK && this._landingView?.goToRoom();
  }, "_r9fd49274c293f9");
  _r09279866d6adfb = n((e) => {
    e.type === u.CLICK && this._r136058f89e3ace(!0);
  }, "_r09279866d6adfb");
  _r1ccaac1bad2a9f = n((e) => {
    e.type === u.CLICK && this._r136058f89e3ace(!1);
  }, "_r1ccaac1bad2a9f");
  _rd5df6c4167946c = n((e) => {
    e.type === u.CLICK && this._data != null && this._landingView?.send(new UnkMessageComposer_1args_38e25d(this._data.id));
  }, "_rd5df6c4167946c");
  onNextQuest = n((e) => {
    e.type === u.CLICK && this._data != null && (this._index++, this._r136058f89e3ace(this._data.easy));
  }, "onNextQuest");
  _re93563365939cf = n((e) => {
    e.type === u.CLICK && this._landingView?.send(new UnkMessageComposer_0args_ffad2b());
  }, "_re93563365939cf");
  _r136058f89e3ace(e) {
    this._landingView?.send(new class_3384(e, this._index));
  }
  static moveChildrenToRow(e, r) {
    let t = 0;
    for (let i = 0; i < e.numChildren; i++) {
      let s = e.getChildAt(i);
      s != null && ((s.x = t), (t += s.width + r));
    }
  }
}
