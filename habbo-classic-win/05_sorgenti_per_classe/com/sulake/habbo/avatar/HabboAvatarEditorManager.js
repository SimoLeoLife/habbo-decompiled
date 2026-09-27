// Extracted from HabboAirLauncher.deobf.js, line 166310.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/HabboAvatarEditorManager.as
// Obfuscated name: _i30bead01dcfe00

class a extends ue {
  static {
    n(this, "HabboAvatarEditorManager");
  }
  static const_714 = 1;
  static const_91 = 2;
  static const_48 = 3;
  static GENERIC = class_1962.GENERIC;
  _editors = new Map();
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._communication = e;
        },
        (this.flags & a.const_48) === 0,
      ),
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderManager = e;
        },
        !0,
        [{ type: AvatarRenderEvent.AVATAR_RENDER_READY, callback: this._rc64c09400e2dae.bind(this) }],
      ),
      new ComponentDependency(
        new IIDHabboInventory(),
        (e) => {
          this._inventory = e;
        },
        (this.flags & a.const_714) === 0,
      ),
      new ComponentDependency(new IIDCoreLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(new IIDHabboConfigurationManager(), null, !0, [{ type: M.ComponentDependency, callback: this.IIDHabboConfigurationManager.bind(this) }]),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (e) => {
          this._catalog = e;
        },
        (this.flags & a.const_91) === 0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionData = e;
      }),
      new ComponentDependency(
        new IIDHabboRoomUI(),
        (e) => {
          this._rf205fceb9b7fe8 = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    (this.context._r7e43d9f4706607(this),
      this._communication != null && (this._handler = new AvatarEditorMessageHandler(this, this._communication)));
  }
  dispose() {
    this.context._r7485c47d8bd77c(this);
    for (let e of this._editors.values()) e.dispose();
    (this._editors.clear(),
      this._handler?.dispose(),
      (this._handler = null),
      (this._windowManager = null),
      (this._avatarRenderManager = null),
      (this._inventory = null),
      (this._localization = null),
      (this._communication = null),
      (this._catalog = null),
      (this._sessionData = null),
      (this._rf205fceb9b7fe8 = null),
      super.dispose());
  }
  _rdaf967f79ea08a(e, r, t = null, i = !1, s = null, o = a.GENERIC) {
    let d = this._editors.get(e) ?? null;
    return (
      d == null && ((d = new cJ(e, this)), this._editors.set(e, d)),
      d.openWindow(r, t, i, s, o ?? a.GENERIC)
    );
  }
  _r3329ab830ac683(e, r, t = null, i = null, s = !1, o = !1) {
    this._editors.get(e)?.dispose();
    let d = new cJ(e, this, o);
    return (this._editors.set(e, d), d.embedToContext(r, t, i, s), !0);
  }
  loadAvatarInEditor(e, r, t, i = 0) {
    this._editors.get(e)?.loadAvatarInEditor(r, t, i);
  }
  _rb825ef6be7b35c(e) {
    let r = this._editors.get(e) ?? null;
    r != null &&
      this._sessionData != null &&
      r.loadAvatarInEditor(
        this._sessionData.figure,
        this._sessionData.gender,
        this._sessionData.clubLevel,
      );
  }
  close(e) {
    let r = this._editors.get(e) ?? null;
    if (r != null)
      switch (
        (e !== UnkConstants_c72396._r565a0d8736f4c5 &&
          (r.figureData.isDevelopmentEditor = this._inventory?._rdfb32624fb120f() ?? -1),
        e)
      ) {
        case UnkConstants_c72396._r4a110ddb22fcf1:
          r.hide();
          break;
        case UnkConstants_c72396._r774d79858ea450:
          (r.hide(), r.dispose(), this._editors.delete(e));
          break;
        case UnkConstants_c72396._r4f1413f491072c:
          break;
        default:
          (r.dispose(), this._editors.delete(e));
          break;
      }
  }
  _r3552de8291e1e0(e) {
    return this._editors.get(e) ?? null;
  }
  get localization() {
    return this._localization;
  }
  get windowManager() {
    if (this._windowManager == null) throw new Error("Window manager is not available.");
    return this._windowManager;
  }
  get _rf0eb5f07c94cfb() {
    if (this._avatarRenderManager == null) throw new Error("Avatar render manager is not available.");
    return this._avatarRenderManager;
  }
  get communication() {
    return this._communication;
  }
  get handler() {
    return this._handler;
  }
  get catalog() {
    return this._catalog;
  }
  get sessionData() {
    return this._sessionData;
  }
  get inventory() {
    return this._inventory;
  }
  get _r15b2ea2c393fea() {
    return this._rf205fceb9b7fe8?.desktop ?? null;
  }
  get linkPattern() {
    return "avatareditor/";
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "open":
          (this._rdaf967f79ea08a(UnkConstants_c72396._r4a110ddb22fcf1, null, null, !0),
            this._rb825ef6be7b35c(UnkConstants_c72396._r4a110ddb22fcf1));
          break;
      }
  }
  IIDHabboConfigurationManager(e) {}
  _rc64c09400e2dae(e) {
    this.events.dispatchEvent?.(new M(AvatarEditorEvent.AVATAR_EDITOR_READY));
  }
}
