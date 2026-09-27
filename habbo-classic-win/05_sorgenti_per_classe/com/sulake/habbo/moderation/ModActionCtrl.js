// Estratto da HabboAirLauncher.deobf.js, riga 247619.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/ModActionCtrl.as
// Nome offuscato: _i95f594a2d4617c

class a {
  constructor(e, r, t, i, s) {
    this._main = e;
    this.var_805 = r;
    this._targetUserName = t;
    this.var_3372 = i;
    this._r7094c768dec0bf = s;
    (a._rfffd65b39c563f == null &&
      (a._rfffd65b39c563f = [
        new ModActionDefinition(1, "Alert", ModActionDefinition.ALERT, 1, 0),
        new ModActionDefinition(2, "Mute 1h", ModActionDefinition.MUTE, 2, 0),
        new ModActionDefinition(3, "Ban 18h", ModActionDefinition.BAN, 3, 0),
        new ModActionDefinition(4, "Ban 7 days", ModActionDefinition.BAN, 4, 0),
        new ModActionDefinition(5, "Ban 30 days (step 1)", ModActionDefinition.BAN, 5, 0),
        new ModActionDefinition(7, "Ban 30 days (step 2)", ModActionDefinition.BAN, 7, 0),
        new ModActionDefinition(6, "Ban 100 years", ModActionDefinition.BAN, 6, 0),
        new ModActionDefinition(106, "Ban avatar-only 100 years", ModActionDefinition.BAN, 6, 0),
        new ModActionDefinition(101, "Kick", ModActionDefinition.KICK, 0, 0),
        new ModActionDefinition(102, "Lock trade 1 week", ModActionDefinition.TRADING_LOCK, 0, 168),
        new ModActionDefinition(104, "Lock trade permanent", ModActionDefinition.TRADING_LOCK, 0, 876e3),
        new ModActionDefinition(105, "Message", ModActionDefinition.MESSAGE, 0, 0),
      ]),
      this._main._r74ed78993f8dd6._rb6957f78f13311(this.var_805, this));
  }
  static {
    n(this, "ModActionCtrl");
  }
  static _rfffd65b39c563f = null;
  static var_2749 = null;
  _frame = null;
  _topicDropdown = null;
  var_3014 = [];
  _actionTypeDropdown = null;
  var_966 = null;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  show() {
    if (((this._frame = this._main.getXmlWindow("modact_summary")), this._frame == null))
      return;
    ((this._frame.caption = `Mod action on: ${this._targetUserName}`),
      this._frame.findChildByName("custom_sanction_button") &&
        (this._frame.findChildByName("custom_sanction_button").procedure = this.onCustomSanctionButton),
      (this.var_966 = this._frame.findChildByName("message_input")));
    let e = this._frame.findChildByName("default_sanction_button");
    (e != null && ((e.procedure = this._r56af73a8e9cb52), e.disable()),
      this.initializeTopicToSanctionTypeMapping(),
      this.initializeTopicDropdown(),
      this.initializeActionTypeDropdown(),
      this._frame.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
      (this._frame.visible = !0));
  }
  getType() {
    return WindowTracker.const_686;
  }
  getId() {
    return this._targetUserName;
  }
  getFrame() {
    return this._frame;
  }
  _rf37d42d9e6d54a(e, r) {
    if (this._frame == null || e !== this.var_805) return;
    let t = this._frame.findChildByName("default_sanction_label");
    (t != null && (t.caption = r), this._frame.findChildByName("default_sanction_button")?.enable());
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._frame?.destroy(),
      (this._frame = null),
      (this._topicDropdown = null),
      (this._actionTypeDropdown = null),
      (this.var_966 = null),
      this._main._r74ed78993f8dd6._r39b5838dc30c57(this.var_805));
  }
  logEvent(e, r = "") {
    this._r7094c768dec0bf?.logEvent(e, r);
  }
  trackAction(e) {
    this._r7094c768dec0bf?.trackAction(`modAction_${e}`);
  }
  initializeTopicToSanctionTypeMapping() {
    if (a.var_2749 == null) {
      a.var_2749 = new B();
      let e = this._main.getProperty("cfh.topic_id.to.sanction_type_id");
      if (e.length > 0)
        for (let r of e.split(",")) {
          let t = r.split("=");
          if (t.length === 2) {
            let i = Number.parseInt(t[0] ?? "", 10),
              s = Number.parseInt(t[1] ?? "", 10);
            !Number.isNaN(i) && !Number.isNaN(s) && a.var_2749.add(i, s);
          }
        }
    }
  }
  initializeTopicDropdown() {
    ((this._topicDropdown = this._frame?.findChildByName("cfh_topics")),
      this._topicDropdown?.addEventListener(y.const_238, this.refreshSanctionDataForSelectedTopic),
      (this.var_3014 = []));
    let e = [],
      r = 0;
    for (let t of this._main._r74ed78993f8dd6._rad9a4785ce0fe2())
      for (let i of t._rddb8305acca679 ?? [])
        ((e[r] = `\${help.cfh.topic.${i.id}}`), (this.var_3014[r] = i.id), r++);
    this._topicDropdown?.populate(e);
  }
  initializeActionTypeDropdown() {
    ((this._actionTypeDropdown = this._frame?.findChildByName("sanction_type")),
      this._actionTypeDropdown?.populate((a._rfffd65b39c563f ?? []).map((e) => e.name)));
  }
  refreshSanctionDataForSelectedTopic = n(() => {
    let e = this._topicDropdown?.selection ?? -1,
      r = this.var_3014[e] ?? 0,
      t = a.var_2749?.getValue(r) ?? 0;
    if ((t || (t = a.var_2749?.getValue(0) ?? 0), t)) {
      for (let i = 0; i < (a._rfffd65b39c563f?.length ?? 0); i++)
        if (a._rfffd65b39c563f?.[i]?._r2d360965d7f1d3 === t) {
          this._actionTypeDropdown != null && (this._actionTypeDropdown.selection = i);
          break;
        }
    } else this._actionTypeDropdown != null && (this._actionTypeDropdown.selection = -1);
    this._main._r74ed78993f8dd6._rd38f13cf29203e(this.var_805, r);
  }, "refreshSanctionDataForSelectedTopic");
  _r56af73a8e9cb52 = n((e) => {
    if (e.type !== u.CLICK) return;
    if ((this._topicDropdown?.selection ?? -1) < 0) {
      this._main.windowManager.alert("Alert", "Please select a topic.", 0, this._r9d8a83a2f57c04);
      return;
    }
    (this.trackAction("defaultAction"), this.logEvent("action.default"));
    let r = this.var_3014[this._topicDropdown?.selection ?? -1] ?? 0;
    (this._main.connection?.send(
      new _ia6a9b233f8d42d(this.var_805, r, this.var_966?.text ?? "", this._re72990b1411908()),
    ),
      this.dispose());
  }, "_r56af73a8e9cb52");
  onCustomSanctionButton = n((e) => {
    if (e.type !== u.CLICK) return;
    if ((this._topicDropdown?.selection ?? -1) < 0) {
      this._main.windowManager.alert("Alert", "Please select a topic.", 0, this._r9d8a83a2f57c04);
      return;
    }
    if ((this._actionTypeDropdown?.selection ?? -1) < 0) {
      this._main.windowManager.alert(
        "Alert",
        "Please select a sanction.",
        0,
        this._r9d8a83a2f57c04,
      );
      return;
    }
    let r = this.var_3014[this._topicDropdown?.selection ?? -1] ?? 0,
      t = a._rfffd65b39c563f?.[this._actionTypeDropdown?.selection ?? -1] ?? null;
    if (t != null) {
      switch (t.actionType) {
        case ModActionDefinition.ALERT:
          if (!this._main.initMsg?._r46cd64cc3cbb58) {
            this._main.windowManager.alert(
              "Alert",
              "You have insufficient permissions.",
              0,
              this._r9d8a83a2f57c04,
            );
            return;
          }
          (this.trackAction("sendCaution"),
            this._main.connection?.send(
              new _ibad7a3c36c1818(this.var_805, this.var_966?.text ?? "", r, this._re72990b1411908()),
            ));
          break;
        case ModActionDefinition.MUTE:
          (this.trackAction("mute"),
            this._main.connection?.send(
              new aF(this.var_805, this.var_966?.text ?? "", r, this._re72990b1411908()),
            ));
          break;
        case ModActionDefinition.BAN:
          if (!this._main.initMsg?._r32b135b1fc2e30) {
            this._main.windowManager.alert(
              "Alert",
              "You have insufficient permissions.",
              0,
              this._r9d8a83a2f57c04,
            );
            return;
          }
          (this.trackAction("ban"),
            this._main.connection?.send(
              new ku(
                this.var_805,
                this.var_966?.text ?? "",
                r,
                t._r137d5aaa36d7c8,
                t._r2d360965d7f1d3 === 106,
                this._re72990b1411908(),
              ),
            ));
          break;
        case ModActionDefinition.KICK:
          if (!this._main.initMsg?._r16b62de507941d) {
            this._main.windowManager.alert(
              "Alert",
              "You have insufficient permissions.",
              0,
              this._r9d8a83a2f57c04,
            );
            return;
          }
          (this.trackAction("kick"),
            this._main.connection?.send(
              new _iea5f21bce03b75(this.var_805, this.var_966?.text ?? "", r, this._re72990b1411908()),
            ));
          break;
        case ModActionDefinition.TRADING_LOCK:
          (this.trackAction("trading_lock"),
            this._main.connection?.send(
              new nF(
                this.var_805,
                this.var_966?.text ?? "",
                t._r34a906c358e362 * 60,
                r,
                this._re72990b1411908(),
              ),
            ));
          break;
        case ModActionDefinition.MESSAGE:
          if (ua.isEmpty(this.var_966?.text ?? "")) {
            this._main.windowManager.alert(
              "Alert",
              "Please write a message to user.",
              0,
              this._r9d8a83a2f57c04,
            );
            return;
          }
          (this.trackAction("sendCaution"),
            this._main.connection?.send(
              new _i645e3c079f9dd6(this.var_805, this.var_966?.text ?? "", r, this._re72990b1411908()),
            ));
          break;
      }
      (this.logEvent("action.custom", "unknown"), this.dispose());
    }
  }, "onCustomSanctionButton");
  onClose = n((e) => {
    e.type === u.CLICK && (this.trackAction("close"), this.dispose());
  }, "onClose");
  _r9d8a83a2f57c04 = n((e) => {
    e.dispose();
  }, "_r9d8a83a2f57c04");
  _re72990b1411908() {
    return this.var_3372?.issueId ?? ku.const_20;
  }
}
