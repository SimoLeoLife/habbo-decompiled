// Extracted from HabboAirLauncher.deobf.js, line 265925.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/dailytasks/DailyTasksController.as
// Obfuscated name: _ic57bbe60602571

class a extends ue {
  constructor(r, t, i = 0, s = null) {
    super(t, i, s);
    this._questEngine = r;
    ((this._tasks = []),
      (this._messageEvents = [
        new UnkMessageEvent_602c5f(this._r4f1367250a8f94),
        new UnkMessageEvent_447a8f(this._r95301342340511),
        new class_3314(this._r272994f6e39680),
      ]));
    for (let o of this._messageEvents) this.addMessageEvent(o);
  }
  static {
    n(this, "DailyTasksController");
  }
  static REQUEST_TASKS_TIMEOUT_MS = 1e4;
  _view = null;
  _messageEvents = [];
  _tasks = [];
  _r5b7dc3a67736b6 = [];
  _lastRequestTime = 0;
  var_1271 = !1;
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (r) => {
          this._r6358b2bd53ae19 = r;
        },
        !0,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (r) => {
        this._windowManager = r;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (r) => {
        this._localizationManager = r;
      }),
    ]);
  }
  initComponent() {
    this.context._r7e43d9f4706607?.(this);
  }
  get linkPattern() {
    return "dailytasks/";
  }
  linkReceived(r) {
    if (!this.isEnabled) return;
    let t = r.split("/");
    t.length >= 2 && t[1] === "open" && this.showView();
  }
  _r9f8e86b9bc7d27() {
    this.isShowing() ? this._r6167aac3809e80() : this.showView();
  }
  get isEnabled() {
    return this.getBoolean("dailytasks.enabled");
  }
  getTaskById(r) {
    return this._tasks.find((t) => t.taskId === r) ?? null;
  }
  get tasks() {
    return this._tasks;
  }
  _ra8fdc669971bc2() {
    _ia411d8d8194a3a() <= this._lastRequestTime + a.REQUEST_TASKS_TIMEOUT_MS || ((this._lastRequestTime = _ia411d8d8194a3a()), this.send(new UnkMessageComposer_0args_cc7acf()));
  }
  _ra7c70effe3f061(r) {
    this.send(new UnkMessageComposer_1args_4224c6(r));
  }
  update(r) {
    this._view?.update(r);
  }
  send(r) {
    this._r6358b2bd53ae19?.connection.send(r);
  }
  addMessageEvent(r) {
    return this._r6358b2bd53ae19?._r2e106e2349a0b6(r) ?? r;
  }
  removeMessageEvent(r) {
    this._r6358b2bd53ae19?._r7668362bf55fdd(r);
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get questEngine() {
    return this._questEngine;
  }
  get view() {
    return this._view;
  }
  dispose() {
    if (!this.var_1271) {
      ((this.var_1271 = !0), this._view?.dispose(), (this._view = null));
      for (let r of this._messageEvents) this.removeMessageEvent(r);
      ((this._messageEvents = []),
        (this._r6358b2bd53ae19 = null),
        (this._windowManager = null),
        (this._localizationManager = null),
        super.dispose());
    }
  }
  get disposed() {
    return this.var_1271;
  }
  showView() {
    this.isEnabled &&
      (!this._ra2e61fbd905158() &&
        this._windowManager != null &&
        ((this._view = new SI(this, this._windowManager)), this._view.initialize()),
      this._view?.show());
  }
  _r6167aac3809e80() {
    this._view?.hide();
  }
  isShowing() {
    return this._ra2e61fbd905158() && (this._view?.isShowing() ?? !1);
  }
  _ra2e61fbd905158() {
    return this._view != null && !this._view.disposed;
  }
  _r58c503104bc972() {
    ((this._tasks = []), (this._r5b7dc3a67736b6 = []), this._view?.tasksCleared());
  }
  _r0cc7b3f785069f(r) {
    this.getTaskById(r.taskId) == null &&
      (r.secondsLeft < 0 && r.status === Vf.var_4165 && this._r5b7dc3a67736b6.push(r),
      this._tasks.push(r),
      this._view?._r90501fc213622f(r));
  }
  _rfef66456fcba45() {
    let r = 0;
    for (let t of this._tasks) t.status === Vf.var_4165 && (r += 1);
    this._questEngine.events.dispatchEvent?.(new Bj(r));
  }
  _r2d93faf147f6de() {
    this._view?._r0833496b983d9f();
  }
  _r4f1367250a8f94 = n((r) => {
    let t = ClassUtils.getParser(r, UnkMessageParser_I_46888f);
    if (t != null) {
      this._r58c503104bc972();
      for (let i of t.tasks ?? []) i._rb5a86d311e998e || this._r0cc7b3f785069f(i);
      for (let i of t.tasks ?? []) i._rb5a86d311e998e && this._r0cc7b3f785069f(i);
      (this._r2d93faf147f6de(), this._rfef66456fcba45());
    }
  }, "_r4f1367250a8f94");
  _r95301342340511 = n((r) => {
    let t = ClassUtils.getParser(r, UnkMessageParser_I_29fa57);
    if (t != null) {
      for (let i of t.tasks ?? []) this._r0cc7b3f785069f(i);
      ((t.tasks?.length ?? 0) > 0 &&
        t.tasks?.[0]?._rb5a86d311e998e &&
        this._questEngine.notifications?.addItem(
          this._localizationManager?.getLocalization("dailytasks.bonus_available") ??
            "dailytasks.bonus_available",
          NotificationType.INFO,
          "icon_daily_tasks_png",
          "dailytasks/open",
        ),
        this._r2d93faf147f6de(),
        this._rfef66456fcba45());
    }
  }, "_r95301342340511");
  _r272994f6e39680 = n((r) => {
    let t = ClassUtils.getParser(r, class_3439);
    if (t == null) return;
    let i = this.getTaskById(t.taskId);
    if (i == null) this._ra8fdc669971bc2();
    else {
      let s = i.status;
      ((i.repeats = t.repeats),
        (i.status = t.status),
        this._view?._rc701b693c2b118(i.taskId),
        s !== i.status &&
          (i.status === Vf.var_4165
            ? this._questEngine.notifications?.addItem(
                this._localizationManager?.getLocalization("dailytasks.completed.caption") ??
                  "dailytasks.completed.caption",
                NotificationType.INFO,
                "icon_daily_tasks_png",
                "dailytasks/open",
              )
            : i.status === Vf.var_5844 &&
              this._questEngine.notifications?.addItem(
                this._localizationManager?.getLocalization("dailytasks.claimed.caption") ??
                  "dailytasks.claimed.caption",
                NotificationType.INFO,
                "icon_daily_tasks_png",
                "dailytasks/open",
              )));
    }
    this._rfef66456fcba45();
  }, "_r272994f6e39680");
}
