// Extracted from HabboAirLauncher.deobf.js, line 199859.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/demo/class_64.as
// Obfuscated name: _ie72bf603454f2a

class extends ue {
    static {
      n(this, "class_64");
    }
    static {
      jCt(this, "class_64");
    }
    constructor(e, r = 0, t = null) {
      (super(e, r, t),
        (this._loginView ??= null),
        (this._logoutInProgress ??= !1),
        (this._externalVariablesUrl ??= ""),
        (this._incomingMessages ??= null),
        (this._communication ??= null),
        (this._localization ??= null),
        (this._windowManager ??= null),
        (this._ssoTicket ??= ""),
        (this._flashClientUrl ??= ""),
        (this._loginName ??= ""),
        (this._password ??= ""),
        (this._loginProvider ??= null),
        (this._disconnected ??= !1),
        (this._autoLogin ??= !1),
        (this._reconnecting ??= !1),
        (this._errorPopupCtrl ??= new ErrorPopupCtrl(e, 0, t)),
        (this._debugAutoHotelLoginStarted ??= !1),
        (this._debugAutoHotelAccountSelected ??= !1),
        e.events.addEventListener?.("unload", this.getBoundCallback("unloading")));
    }
    get communication() {
      return this._communication;
    }
    get windowManager() {
      return this._windowManager;
    }
    set ssoTicket(e) {
      this._ssoTicket = e;
    }
    set flashClientUrl(e) {
      this._flashClientUrl = e;
    }
    get localization() {
      return this._localization;
    }
    get isRoomViewerMode() {
      return (this.flags & HabboComponentFlags.ROOM_VIEWER_MODE) === HabboComponentFlags.ROOM_VIEWER_MODE;
    }
    get dependencies() {
      return super.dependencies.concat([
        new ComponentDependency(
          new IIDHabboWindowManager(),
          (e) => {
            this._windowManager = e;
          },
          !this.isRoomViewerMode,
        ),
        new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
          this._communication = e;
        }),
        new ComponentDependency(
          new IIDHabboLocalizationManager(),
          (e) => {
            this._localization = e;
          },
          !0,
          [
            { type: M.ComponentDependency, callback: this.getBoundCallback("onLocalizationsComplete") },
            { type: class_2079.const_76, callback: this.getBoundCallback("onLocalizationFailed") },
          ],
        ),
      ]);
    }
    initComponent() {
      (class_14.instance?.events?.addEventListener?.(
        ue.COMPONENT_EVENT_ERROR,
        this.getBoundCallback("onCoreError"),
      ),
        this.context.dispatchEvent?.stage?.dispatchEvent?.(new HotelViewEvent(HotelViewEvent.HOTEL_VIEW_READY)),
        (this._disconnected = !1),
        this._incomingMessages != null &&
          (this._incomingMessages.dispose(), this._communication?._ra45deb8bd2f43c()),
        this._communication != null && (this._incomingMessages = new UnkClass_fffc22_______(this, this._communication)),
        this.context.events.addEventListener?.(HabboHotelViewEvent.ERROR, this.getBoundCallback("onHotelViewError")),
        this.prepareProperties(),
        (Ae.baseUrl = this.getProperty(HabboProperty.URL_PREFIX)),
        this._autoLogin
          ? this.initWithStoredCredentials()
          : this._ssoTicket !== ""
            ? this.initWithSSO(this._ssoTicket)
            : this.initWithLoginView());
    }
    dispose() {
      (class_14.instance?.events?.removeEventListener?.(
        ue.COMPONENT_EVENT_ERROR,
        this.getBoundCallback("onCoreError"),
      ),
        this.context.events.removeEventListener?.("unload", this.getBoundCallback("unloading")),
        this.context.events.removeEventListener?.(HabboHotelViewEvent.ERROR, this.getBoundCallback("onHotelViewError")),
        this._loginView != null &&
          (this._loginView.removeEventListener(Az.INIT_LOGIN, this.getBoundCallback("onInitLogin")),
          this._loginView.removeEventListener(Az.AVATAR_SELECTED, this.getBoundCallback("onAvatarSelected")),
          this._loginView.removeEventListener(
            Az.ENVIRONMENT_SELECTED,
            this.getBoundCallback("onEnvironmentSelected"),
          ),
          this._loginView.dispose(),
          (this._loginView = null)),
        this._incomingMessages != null && (this._incomingMessages.dispose(), (this._incomingMessages = null)),
        (this._localization = null),
        (this._communication = null),
        this._errorPopupCtrl != null && (this._errorPopupCtrl.dispose(), (this._errorPopupCtrl = null)),
        super.dispose());
    }
    initGameSocket() {
      (this.dispatchLoginStepEvent(HabboCommunicationEvent.INIT),
        this._communication && (this._communication.mode = HabboConnectionType.NORMAL_MODE),
        this._ssoTicket === "" && !1,
        this._communication?.initConnection(HabboConnectionType.HABBO_MAIN));
    }
    setSSOTicket(e) {
      e !== "" && this._ssoTicket === "" && ((this._ssoTicket = e), this.initGameSocket());
    }
    sendTryLoginDevelopmentOnly(e, r, t = 0) {
      let i = this._communication?.connection ?? null;
      (i == null &&
        (this._communication?.initConnection(HabboConnectionType.HABBO_MAIN),
        (i = this._communication?.connection ?? null)),
        i?.send(new UnkMessageComposer_3args_6275f9(e, r, t)));
    }
    sendConnectionParameters(e) {
      e.send(new UnkMessageComposer_3args_6b253e(401, this._flashClientUrl, this._externalVariablesUrl));
      let r = gr.readSOLString(gr.SOL_PROPERTY_MACHINE_ID) ?? "",
        t = gr._re11841038745b7(),
        i = UnkClass_c7f867.version.split(" ");
      if ((e.send(new class_1906(r, t, i.join("/"))), this._ssoTicket.length > 0)) {
        e.send(new UnkMessageComposer_1args_28dbab(this._ssoTicket));
        return;
      }
    }
    loginOk() {
      ((this._disconnected = !1),
        this._loginView != null &&
          (this._loginView._rbd48f6b8c767b2(), this._loginView.dispose(), (this._loginView = null)),
        (this._reconnecting = !1));
    }
    alert(e, r) {
      this._windowManager?.alert(e, r, 0, (t, i) => {
        t.dispose();
      });
    }
    dispatchLoginStepEvent(e) {
      this.context.events.dispatchEvent?.(new M(e));
    }
    onUserList(e) {
      if (
        (this._loginView?._r78be69f271ad27(e),
        this.debugAutoHotelLoginEnabled && !this._debugAutoHotelAccountSelected && e.length > 0)
      ) {
        this._debugAutoHotelAccountSelected = !0;
        let r = new UnkEventDispatcherWrapperSubclass_05394e(1e3, 1);
        (r.addEventListener(DeBouncer._rf33144eac61595, () => {
          this._loginView?._r4cf0beedf7d012(this.debugAutoHotelAccountName);
        }),
          r.start());
        return;
      }
      if (this._autoLogin) {
        let r = gr.readSOLString(gr.SOL_PROPERTY_CHARACTER_UNIQUE_ID);
        if (this.userExists(e, r)) {
          let t = new UnkEventDispatcherWrapperSubclass_05394e(500, 1);
          (t.addEventListener(DeBouncer._rf33144eac61595, this.getBoundCallback("onAutoSendLogin")), t.start());
        }
      }
    }
    disconnected(e, r) {
      if (((this._disconnected = !0), this._loginView == null)) {
        let t = r;
        ((t == null || t.length < 6) &&
          (t = this._localization?.getLocalization(Pd.resolveDisconnectedReasonLocalizationKey(e)) ?? t),
          this._localization?._r43eae9731f5b27("connection.login.logged_out", "reason", e.toString()),
          this._localization?._r43eae9731f5b27("connection.login.logged_out", "reasonName", t),
          this.alert(Pd.resolveDisconnectedReasonLocalizationKey(e), "${connection.login.logged_out}"));
        return;
      }
      this.onBufferedDisconnected(e, r);
    }
    handleErrorMessage(e, r) {
      switch (e) {
        case 0:
          (this.localization._r43eae9731f5b27("connection.server.error.desc", "errorCode", String(e)),
            this.alert("${connection.server.error.title}", "${connection.server.error.desc}"));
          break;
        case 1001:
        case 1002:
        case 1003:
        case 1004:
        case 1005:
        case 1006:
        case 1007:
        case 1008:
        case 1009:
        case 1010:
        case 1011:
        case 1012:
        case 1013:
        case 1014:
        case 1015:
        case 1016:
        case 1017:
        case 1018:
        case 1019:
          this._communication?.connection?.close();
          break;
        case 4013:
          this.alert("${connection.room.maintenance.title}", "${connection.room.maintenance.desc}");
          break;
        default:
          (this.localization._r43eae9731f5b27("connection.server.error.desc", "errorCode", String(e)),
            this.alert("${connection.server.error.title}", "${connection.server.error.desc}"));
          break;
      }
    }
    handleLoginFailedHotelClosedMessage(e, r) {
      this._loginView?.showDisconnectedWithText(Pd.HOTEL_CLOSED);
    }
    prepareProperties() {
      (this._localization?.resetHabboWebApiSession("en"),
        (this._loginName = gr.readSOLString(gr.SOL_PROPERTY_LOGIN_NAME) ?? ""),
        (this._password = gr.restorePassword() ?? ""));
      let e = gr.readSOLString(gr.SOL_PROPERTY_ENVIRONMENT) ?? "";
      ((this._autoLogin = gr.readSOLBoolean(gr.SOL_PROPERTY_REMEMBER_LOGIN) || gr.forcedAutoLoginEnabled),
        (gr.forcedAutoLoginEnabled = !1));
      let r = (this.getProperty(HabboProperty.LIVE_ENVIRONMENTS) || "").split("/").filter((i) => i !== ""),
        t = this.getProperty("dev.environment.list");
      (t !== "" && (r = r.concat(t.split("/").filter((i) => i !== ""))),
        e !== "" && !r.includes(e) && ((e = ""), gr._r7f62dd3441fb83(gr.SOL_PROPERTY_ENVIRONMENT, null)),
        e !== "" && this.initEnvironment(e),
        (this._ssoTicket = this.getProperty(HabboProperty.SSO_TOKEN)),
        (this._flashClientUrl = this.getProperty(HabboProperty.CLIENT_URL)),
        (this._externalVariablesUrl = this.getProperty(HabboProperty.EXTERNAL_VARIABLES)));
    }
    initWithStoredCredentials() {
      (this._communication && (this._communication.mode = HabboConnectionType.NORMAL_MODE),
        this._loginView?._rca21cf36867336(),
        this.initEnvironment(gr.readSOLString(gr.SOL_PROPERTY_ENVIRONMENT) ?? ""));
    }
    initWithSSO(e) {
      ((this._ssoTicket = e),
        this._communication && (this._communication.mode = HabboConnectionType.NORMAL_MODE),
        this.initGameSocket());
    }
    initWithLoginView() {
      this._windowManager != null &&
        !this.isRoomViewerMode &&
        class_14.crash("Login without an SSO ticket is not supported", class_14.ERROR_CATEGORY_COMMMUNICATION_INIT);
    }
    applyTemporaryManualLoginDefaults() {
      (gr._r7f62dd3441fb83(gr.SOL_PROPERTY_ENVIRONMENT, QCt),
        gr._r7f62dd3441fb83(gr.SOL_PROPERTY_LOGIN_NAME, XCt),
        gr._r7f62dd3441fb83("password", YCt));
    }
    get debugAutoHotelLoginEnabled() {
      return !1;
    }
    get debugAutoHotelAccountName() {
      return this.getProperty("debug.auto.hotel.account");
    }
    onInitLogin(e) {
      this._loginView?.useWebApi
        ? this._communication?._r48b40b8a76d05a()?.login(this._loginView.name, this._loginView.password)
        : this.initGameSocket();
    }
    onAvatarSelected(e) {
      if (this._loginView?.useWebApi) {
        let r = this._communication?._r48b40b8a76d05a(),
          t = this._loginView._r25a8ca42678d6b;
        t != null && r?.selectAvatar(t.uniqueId);
      } else
        this._loginView != null &&
          this.sendTryLoginDevelopmentOnly(
            this._loginView.name,
            this._loginView.password,
            this._loginView.avatarId,
          );
    }
    onEnvironmentSelected(e) {
      this.initEnvironment(this._loginView?.selectedEnvironment ?? "");
    }
    initEnvironment(e) {
      (this.setProperty(HabboProperty.const_682, e),
        gr._r7f62dd3441fb83(gr.SOL_PROPERTY_ENVIRONMENT, e),
        this.updateEnvironmentVariables(e),
        this._communication?._r0dc5af1ae20799(),
        this._communication?.updateHostParameters(),
        this._localization?.resetHabboWebApiSession(e),
        this._loginView != null &&
          (this._loginView.useWebApi
            ? this._loginProvider?.init(this._communication)
            : this._loginView.environmentReady()));
    }
    onLocalizationsComplete(e) {}
    onLocalizationFailed(e) {}
    unloading(e) {
      this._logoutInProgress = !0;
    }
    onAutoSendLogin(e) {
      let r = gr._r44e44f6f44d690(gr.SOL_PROPERTY_CHARACTER_ID);
      this.sendTryLoginDevelopmentOnly(this._loginName, this._password, Number.isNaN(r) ? 0 : r);
    }
    userExists(e, r) {
      return e.some((t) => t.uniqueId === r);
    }
    onBufferedDisconnected(e, r) {
      if (e === Pd.INCORRECT_PASSWORD) {
        this._loginView?.showInvalidLoginError(null);
        return;
      }
      let t = this._loginName.length > 0 && this._password.length > 0,
        s = gr.readSOLString(gr.SOL_PROPERTY_LOGIN_METHOD, gr.LOGIN_METHOD_HABBO) === gr.const_713;
      e !== Pd.DISCONNECTED || (!t && !s) || !zCt
        ? (this._loginView?.showDisconnected(e, r), this._communication?.disconnect())
        : ((this._reconnecting = !0), (gr.forcedAutoLoginEnabled = !0), this.initComponent());
    }
    onCoreError(e) {
      switch (e.category) {
        case class_14.ERROR_CATEGORY_CONNECT_TO_PROXY:
        case class_14.ERROR_CATEGORY_COMMMUNICATION_INIT:
        case class_14._r6bf12a66aab17c:
        case class_14.ERROR_CATEGORY_DOWNLOAD_CRITICAL_ASSET:
        case class_14.ERROR_CATEGORY_DOWNLOAD_EXTERNAL_VARIABLES:
        case class_14.ERROR_CATEGORY_DOWNLOAD_LOCALIZATION:
        case class_14.ERROR_CATEGORY_FURNIDATA_DOWNLOAD:
        case class_14.ERROR_CATEGORY_PRODUCT_DATA:
          e.critical &&
            !this.isExcludeFromCrashing(e.category) &&
            this.disconnected(
              Pd.MAINTENANCE_BREAK,
              this._localization?.getLocalization("disconnected.reason.maintenance") ?? "",
            );
          break;
        default:
          this.handleNonMaintenanceCoreError(e);
          break;
      }
    }
    handleNonMaintenanceCoreError(e) {
      (!(this.isExcludeFromWarnings(e.category) || (!e.critical && !this.getBoolean(HabboProperty.SHOW_ERROR_WARNING_INCLUDE_NONCRITICAL))) &&
        this.getBoolean(HabboProperty.SHOW_ERROR_WARNING) &&
        this._errorPopupCtrl?.onError(e, this.getBoolean(HabboProperty.SHOW_ERROR_STACKTRACE)),
        e.critical &&
          !this.isExcludeFromCrashing(e.category) &&
          this.getBoolean(HabboProperty.CRASH_ON_CRIT_ERROR) &&
          this.disconnected(
            Pd.UNKNOWN_REASON,
            Pd.resolveDisconnectedReasonLocalizationKey(Pd.UNKNOWN_REASON),
          ));
    }
    isExcludeFromWarnings(e) {
      return this.isExcludedFromListProperty(e, HabboProperty.EXCLUDE_WARNINGS_FOR_CATEGORIES);
    }
    isExcludeFromCrashing(e) {
      return this.isExcludedFromListProperty(e, HabboProperty.EXCLUDE_CRASHING_FOR_CATEGORIES);
    }
    isExcludedFromListProperty(e, r) {
      let t = this.getProperty(r);
      return t !== "" && t.split(",").includes(e.toString());
    }
    updateEnvironmentVariables(e) {
      if (!!0) return;
      let r = [
        HabboProperty.CONNECTION_INFO_HOST,
        HabboProperty.CONNECTION_INFO_PORT,
        HabboProperty.URL_PREFIX,
        HabboProperty.SITE_URL,
        HabboProperty.DYNAMIC_DOWNLOAD_URL,
        HabboProperty.DYNAMIC_DOWNLOAD_TEMPLATE,
        HabboProperty.const_1399,
        HabboProperty.const_466,
        HabboProperty.const_691,
        HabboProperty.const_1082,
        HabboProperty.const_313,
        HabboProperty.const_550,
      ];
      for (let t of r) {
        let i = this.getProperty(t),
          s = `${t}.${e}`;
        this.propertyExists(s) ? this.setProperty(t, this.getProperty(s)) : this.setProperty(t, i);
      }
    }
    onHotelViewError(e) {
      this.disconnected(
        Pd.MAINTENANCE_BREAK,
        this._localization?.getLocalization("disconnected.reason.maintenance") ?? "",
      );
    }
    onCoreRunning(e) {
      (class_14.instance?.events?.removeEventListener?.(
        ue.COMPONENT_EVENT_RUNNING,
        this.getBoundCallback("onCoreRunning"),
      ),
        !(!this.debugAutoHotelLoginEnabled || this._debugAutoHotelLoginStarted || this._loginView == null) &&
          ((this._debugAutoHotelLoginStarted = !0), this._loginView._rb2e14c0022572e()));
    }
    getBoundCallback(e) {
      let r = this;
      r._r5d976176ca3a1e ??= new globalThis.Map();
      let t = r._r5d976176ca3a1e.get(e);
      return (t == null && ((t = this[e].bind(this)), r._r5d976176ca3a1e.set(e, t)), t);
    }
  }
