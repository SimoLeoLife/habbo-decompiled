// Extracted from HabboAirLauncher.deobf.js, line 205956.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/GroupForumController.as
// Obfuscated name: _i4f770b8c4065c9

class a extends ue {
  static {
    n(this, "GroupForumController");
  }
  static _r72c1597a90e030 = 0;
  static FORUMS_LIST_CODE_POPULAR = 1;
  static FORUMS_LIST_CODE_MY_FORUMS = 2;
  static _r7321e5b6409ed3 = -1;
  var_157 = null;
  _ra3742a64b9db6a = null;
  _r0ffd218166d394 = null;
  _reabd61168b287c = a._r7321e5b6409ed3;
  _r6d081f73e8cc24 = a._r7321e5b6409ed3;
  var_95 = null;
  _r0fbc7eba6e6838 = 0;
  _re1448e1c333322 = 0;
  _r95a89204800661 = null;
  var_877 = null;
  var_1653 = null;
  _r4f5efd917a577e = new B();
  _rd75ec99588c95e = a._r7321e5b6409ed3;
  _r4fe00a43c60bb7 = 0;
  _r0d79cb1ab34296 = -Sz.lastPostTime;
  _r02a80d7b884011 = 0;
  _r6ba59e87f419e4 = null;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboConfigurationManager(), (e) => {
        this._configurationManager = e;
      }),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r6358b2bd53ae19 = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(new IIDHabboHelp(), (e) => {
        this._r38069d7f74fd46 = e;
      }),
      new ComponentDependency(new IIDHabboNotifications(), (e) => {
        this._notifications = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboSoundManager(), (e) => {
        this._soundManager = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._tracking = e;
      }),
      new ComponentDependency(new IIDHabboToolbar(), null, !1),
    ]);
  }
  get _r109046ec98702f() {
    return this._ra3742a64b9db6a;
  }
  set _r109046ec98702f(e) {
    this._ra3742a64b9db6a = e;
  }
  get _r78622efc9c872a() {
    return this._r0ffd218166d394;
  }
  set _r78622efc9c872a(e) {
    this._r0ffd218166d394 = e;
  }
  get notifications() {
    return this._notifications;
  }
  get windowManager() {
    return this._windowManager;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get tracking() {
    return this._tracking;
  }
  get _rffb6d02f0d4c47() {
    return this._r0d79cb1ab34296;
  }
  get _r2599717433efcc() {
    return this._r02a80d7b884011;
  }
  get linkPattern() {
    return "groupforum/";
  }
  initComponent() {
    let e = n((l) => this._r802d5052161096(l), "_i802d5052161096"),
      r = n((l) => this._rd8e9008de65899(l), "_id8e9008de65899"),
      t = n((l) => this._r33d7f1291663f2(l), "_i33d7f1291663f2"),
      i = n((l) => this._r5984e041819017(l), "_i5984e041819017"),
      s = n((l) => this._r296d0f53e4b54e(l), "_i296d0f53e4b54e"),
      o = n((l) => this._rce1043a683cc9e(l), "_ice1043a683cc9e"),
      d = n((l) => this._ra2608408f1951c(l), "_ia2608408f1951c"),
      c = n((l) => this._r2ce7df090f404d(l), "_i2ce7df090f404d"),
      f = n((l) => this._r31607d601e6f57(l), "_i31607d601e6f57");
    (this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_3527(e)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_2964(r)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_2709(t)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_3007(i)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_3818(s)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_2802(o)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_3121(d)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_3516(c)),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(new class_3118(f)),
      this.context._r7e43d9f4706607(this),
      this.startPollingForUnreadForumsCount());
  }
  dispose() {
    (this.context._r7485c47d8bd77c(this),
      this._r6ba59e87f419e4 != null &&
        (this._r6ba59e87f419e4.stop(),
        this._r6ba59e87f419e4.removeEventListener(DeBouncer.addEventListener, this._r7d56e0e082f0a3),
        (this._r6ba59e87f419e4 = null)),
      super.dispose());
  }
  linkReceived(e) {
    if (this._r6358b2bd53ae19 == null) return;
    let r = e.split("/");
    if (r.length < 2) return;
    if (r[1] === "list") {
      if (r.length === 3) {
        let o = a._r7321e5b6409ed3;
        switch (r[2]) {
          case "active":
            o = a._r72c1597a90e030;
            break;
          case "popular":
            o = a.FORUMS_LIST_CODE_POPULAR;
            break;
          case "my":
            o = a.FORUMS_LIST_CODE_MY_FORUMS;
            break;
          default:
            return;
        }
        this.openForumsList(o);
      }
      return;
    }
    let t = Number(r[1]);
    if (t === 0) return;
    if (((this._r95a89204800661 = null), r.length === 2)) {
      this.openGroupForum(t);
      return;
    }
    let i = Number(r[2]),
      s = r.length > 3 ? Number(r[3]) : 0;
    (this._rb8c52fe0d37d3f(t),
      this._r6358b2bd53ae19.connection.send(new UnkMessageComposer_2args_10b537(t, i)),
      this._r5769194d7bf27e(t, i, s));
  }
  openGroupForum(e) {
    this._r6358b2bd53ae19 != null && (this._rb8c52fe0d37d3f(e), this._rf4a83de1ff14f8(e, 0));
  }
  openForumsList(e, r = 0) {
    (this._r16a5244344407b(),
      (this._reabd61168b287c = e),
      (this._r6d081f73e8cc24 = a._r7321e5b6409ed3),
      this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_3args_69d2f5(e, r, ThreadsListData.PAGE_SIZE)));
  }
  _rf4a83de1ff14f8(e, r) {
    this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_3args_0b97a2(e, r, ThreadsListData.PAGE_SIZE));
  }
  _r169616a7b5d3ec(e, r, t) {
    this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_4args_0a24f7(e, r, t, ThreadsListData.PAGE_SIZE));
  }
  updateForumSettings(e, r, t, i, s) {
    this._r6358b2bd53ae19?.connection.send(new class_2576(e, r, t, i, s));
  }
  _raf6dd08476702a(e, r, t) {
    this._r6358b2bd53ae19 != null &&
      (this._r6358b2bd53ae19.connection.send(new class_3101(e, 0, r, t)), (this._r0d79cb1ab34296 = _ia411d8d8194a3a()));
  }
  postNewMessage(e, r, t) {
    this._r6358b2bd53ae19 != null &&
      (this._r6358b2bd53ae19.connection.send(new class_3101(e, r, "", t)), (this._r0d79cb1ab34296 = _ia411d8d8194a3a()));
  }
  _r5bf545345a4f2a(e, r) {
    if (this._r6358b2bd53ae19 == null) return;
    let t = null;
    (e.canPostMessage && (t = class_2751.HIDDEN_BY_ADMIN),
      e.canModerate && (t = class_2751.PERMANENTLY_HIDDEN_BY_MOD),
      t != null && this._r6358b2bd53ae19.connection.send(new class_2638(e.groupId, r, t)));
  }
  _r17f63c425d036f(e, r) {
    this._r6358b2bd53ae19?.connection.send(new class_2638(e.groupId, r, class_2751.RESTORED_BY_ADMIN));
  }
  _r96c49a5cd47203(e, r, t, i) {
    this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_4args_0a423a(e.groupId, r, t, i));
  }
  _r1b67803b29b316(e, r, t, i) {
    this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_4args_0a423a(e.groupId, r, t, i));
  }
  _rb1c939952cd277(e, r) {
    this._r38069d7f74fd46?._rb1c939952cd277(e.groupId, r);
  }
  _r694108c92560f2(e, r, t) {
    if (this._r6358b2bd53ae19 == null) return;
    let i = class_2751.HIDDEN_BY_ADMIN;
    (e.canModerate && (i = class_2751.PERMANENTLY_HIDDEN_BY_MOD),
      this._r6358b2bd53ae19.connection.send(new UnkMessageComposer_4args_eb224a(this.var_95.groupId, r, t, i)));
  }
  _r2b2df88dfa92f8(e, r, t) {
    this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_4args_eb224a(e.groupId, r, t, class_2751.RESTORED_BY_ADMIN));
  }
  _r699ed42ce6865d(e, r, t) {
    this._r38069d7f74fd46?._r699ed42ce6865d(e.groupId, r, t);
  }
  _r5769194d7bf27e(e, r, t) {
    this._rd75ec99588c95e = r;
    let i = Math.floor(t / ThreadsListData.PAGE_SIZE);
    ((this._r4fe00a43c60bb7 = t % ThreadsListData.PAGE_SIZE), this._r169616a7b5d3ec(e, r, i * ThreadsListData.PAGE_SIZE));
  }
  _rf85d291541d01d(e) {
    this._r6358b2bd53ae19?.connection.send(new class_2134(e));
  }
  _r1f20899f9a3601() {
    (this._r16a5244344407b(),
      (this.var_157 = null),
      (this.var_95 = null),
      (this._reabd61168b287c = a._r7321e5b6409ed3),
      (this._r6d081f73e8cc24 = a._r7321e5b6409ed3));
  }
  _r16a5244344407b(e = !1) {
    if (
      this._r6358b2bd53ae19 != null &&
      this.var_95 != null &&
      (e || this._re1448e1c333322 > this.var_95.lastReadMessageId)
    ) {
      let r = new UnkMessageComposer_0args_ec9d12();
      (e
        ? r.add(
            this.var_95.groupId,
            Math.max(this.var_95.totalMessages, this._re1448e1c333322),
            this._re1448e1c333322 === 0,
          )
        : r.add(this.var_95.groupId, this._re1448e1c333322, !1),
        this._r6358b2bd53ae19.connection.send(r));
    }
    ((this._re1448e1c333322 = 0), (this._r4f5efd917a577e = new B()));
  }
  _r199efd2c1fbc47() {
    if (this._r6358b2bd53ae19 == null || this._r95a89204800661 == null) return;
    let e = new UnkMessageComposer_0args_ec9d12();
    for (let r of this._r95a89204800661.forums)
      r.unreadMessages > 0 && e.add(r.groupId, r.totalMessages, !0);
    e.size > 0 && (this._r6358b2bd53ae19.connection.send(e), this.updateUnreadForumsCount(0));
  }
  _r664be10a84ff5c(e) {
    let r = this._r4f5efd917a577e.getValue(e);
    if (r != null) return Number(r);
    let t = this.var_877?._r336f760a46abc6.getValue(e) ?? null;
    return t != null ? t.nMessages - t.nUnreadMessages - 1 : -1;
  }
  _rfc7550e2ded4b7(e, r, t) {
    (e > this._re1448e1c333322 &&
      ((this._re1448e1c333322 = e),
      this._r95a89204800661 != null &&
        this.var_95 != null &&
        (this._r95a89204800661.updateUnreadMessages(this.var_95, e),
        this._r95a89204800661.listCode === a.FORUMS_LIST_CODE_MY_FORUMS &&
          this.updateUnreadForumsCount(this._r95a89204800661._r2599717433efcc))),
      this._r4f5efd917a577e.setProperty(r, t));
  }
  _ra54f1e2b05fa1a() {
    return this._r4fe00a43c60bb7;
  }
  _r50b23eada08be9() {
    return this._rd75ec99588c95e;
  }
  _rb2963b5de6fa30() {
    ((this._rd75ec99588c95e = -1), (this._r4fe00a43c60bb7 = -1));
  }
  updateUnreadForumsCount(e) {
    this._r02a80d7b884011 !== e &&
      ((this._r02a80d7b884011 = e),
      this.events.dispatchEvent?.(new UnseenForumsCountUpdatedEvent(UnseenForumsCountUpdatedEvent.TYPE, e)),
      this.var_157?.updateUnreadForumsCount(e));
  }
  startPollingForUnreadForumsCount() {
    let e = this._configurationManager.getInteger("groupforum.poll.period", 300);
    ((this._r6ba59e87f419e4 = new UnkEventDispatcherWrapperSubclass_05394e(e * 1e3, 0)),
      (this._r7d56e0e082f0a3 = () => this._rb69622c096c04d()),
      this._r6ba59e87f419e4.addEventListener(DeBouncer.addEventListener, this._r7d56e0e082f0a3),
      this._r6ba59e87f419e4.start(),
      this._rb69622c096c04d());
  }
  _rb8c52fe0d37d3f(e) {
    (this._r16a5244344407b(),
      (this._reabd61168b287c = a._r7321e5b6409ed3),
      (this._r6d081f73e8cc24 = e),
      (this._re1448e1c333322 = 0),
      this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_1args_232303(e)));
  }
  _r802d5052161096 = n((e) => {
    let r = e.getParser(),
      t = new ForumsListData(r);
    (this.var_95 != null &&
      this._re1448e1c333322 > 0 &&
      t.updateUnreadMessages(this.var_95, this._re1448e1c333322),
      t.listCode === a.FORUMS_LIST_CODE_MY_FORUMS && this.updateUnreadForumsCount(t._r2599717433efcc),
      this._reabd61168b287c === t.listCode &&
        ((this._r95a89204800661 = t),
        this.var_157 == null && (this.var_157 = new k1(this)),
        this.var_157.openForumsList(this._r95a89204800661)));
  }, "_r802d5052161096");
  _rce1043a683cc9e = n((e) => {
    let r = e.getParser().forumData;
    if (!(r == null || this._r6d081f73e8cc24 !== r.groupId)) {
      if (!r._r4b0f4dcd9b6c6f) {
        (this.var_157?.dispose(), (this.var_95 = null), (this._r6d081f73e8cc24 = 0));
        let t = new B(),
          i = this.localizationManager.getLocalization("groupforum.view.error.operation_read");
        (t.add(
          "message",
          this.localizationManager.getLocalizationWithParams(
            `groupforum.view.error.${r._rb3fbce1b50e320}`,
            "",
            "operation",
            i,
          ),
        ),
          this._notifications?.showNotification("forums.error.access_denied", t));
        return;
      }
      ((this.var_95 = r), (this._re1448e1c333322 = r.lastReadMessageId));
    }
  }, "_rce1043a683cc9e");
  _rd8e9008de65899 = n((e) => {
    let r = e.getParser();
    this.var_95 == null ||
      this.var_95.groupId !== r.groupId ||
      ((this.var_877 = new ThreadsListData(
        this.var_95._r36ae06f9111e67,
        r.startIndex,
        r.threads,
      )),
      this.var_157 == null && (this.var_157 = new k1(this)),
      this.var_157.openThreadList(
        this._r95a89204800661,
        this.var_95,
        this.var_877,
      ));
  }, "_rd8e9008de65899");
  _r296d0f53e4b54e = n((e) => {
    let r = e.getParser();
    if (
      this.var_95 == null ||
      this.var_95.groupId !== r.groupId ||
      this.var_877 == null
    )
      return;
    this._r0fbc7eba6e6838 = r.threadId;
    let t = this.var_877._r336f760a46abc6.getValue(this._r0fbc7eba6e6838) ?? null;
    if (
      t != null &&
      ((this.var_1653 = new MessagesListData(this._r0fbc7eba6e6838, t.nMessages, r.startIndex, r.messages)),
      this.var_157 == null && (this.var_157 = new k1(this)),
      this.var_157.openMessagesList(
        this._r95a89204800661,
        this.var_95,
        this.var_877,
        this.var_1653,
      ),
      r.messages.length > 0)
    ) {
      let i = r.messages[r.messages.length - 1];
      i != null && this._rfc7550e2ded4b7(i.messageId, i.threadId, i.messageIndex);
    }
  }, "_r296d0f53e4b54e");
  _r2ce7df090f404d = n((e) => {
    let r = e.getParser(),
      t = r.thread;
    (this._ra3742a64b9db6a?.dispose(),
      t != null &&
        this.var_95 != null &&
        this.var_95.groupId === r.groupId &&
        this._rfc7550e2ded4b7(t.lastMessageId, t.threadId, t.nMessages - 1),
      t != null &&
        this._r95a89204800661 != null &&
        this._r95a89204800661.getForumData(r.groupId)?._rb055e13ada0832(t),
      !(
        this.var_157 == null ||
        this.var_95 == null ||
        r.groupId !== this.var_95.groupId
      ) && this._rf4a83de1ff14f8(this.var_95.groupId, 0));
  }, "_r2ce7df090f404d");
  _ra2608408f1951c = n((e) => {
    if ((this._ra3742a64b9db6a?.dispose(), this.var_157 == null)) return;
    let r = e.getParser(),
      t = r.message;
    if (
      t == null ||
      this.var_95 == null ||
      r.groupId !== this.var_95.groupId ||
      r.threadId !== this._r0fbc7eba6e6838
    )
      return;
    let i = t.messageIndex - (t.messageIndex % ThreadsListData.PAGE_SIZE);
    this._r169616a7b5d3ec(this.var_95.groupId, this._r0fbc7eba6e6838, i);
  }, "_ra2608408f1951c");
  _r33d7f1291663f2 = n((e) => {
    let r = e.getParser(),
      t = r.thread;
    if (!(t == null || this.var_95 == null || this.var_95.groupId !== r.groupId)) {
      if (
        this.var_877 != null &&
        this.var_157 != null &&
        this.var_877.updateThread(t)
      ) {
        this.var_157.updateThread(t);
        return;
      }
      this.var_877 = new ThreadsListData(1, 0, [t]);
    }
  }, "_r33d7f1291663f2");
  _r5984e041819017 = n((e) => {
    let r = e.getParser(),
      t = r.message;
    if (
      t == null ||
      this.var_95 == null ||
      this.var_95.groupId !== r.groupId ||
      this._r0fbc7eba6e6838 !== r.threadId ||
      this.var_1653 == null
    )
      return;
    let i = this.var_1653.messages;
    for (let s = 0; s < i.length; s++)
      if (i[s].messageId === t.messageId) {
        ((i[s] = t), this.var_157?._r8eedd479407ddd(t));
        return;
      }
  }, "_r5984e041819017");
  _rb69622c096c04d = n(() => {
    this._r6358b2bd53ae19 != null &&
      (this.var_157 != null
        ? this._r6358b2bd53ae19.connection.send(new UnkMessageComposer_3args_69d2f5(a.FORUMS_LIST_CODE_MY_FORUMS, 0, ThreadsListData.PAGE_SIZE))
        : this._r6358b2bd53ae19.connection.send(new UnkMessageComposer_0args_36053f()));
  }, "_rb69622c096c04d");
  _r31607d601e6f57 = n((e) => {
    this.updateUnreadForumsCount(e.getParser()._r2599717433efcc);
  }, "_r31607d601e6f57");
}
