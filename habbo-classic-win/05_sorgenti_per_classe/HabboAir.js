// Extracted from HabboAirLauncher.deobf.js, line 378625.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/HabboAir.as

class a extends Sprite {
    static {
      n(this, "HabboAir");
    }
    static CORE_RATIO = 0.6;
    static _r86d791b51ab7c0 = 3;
    static _r68fd4ae366bc33 = !1;
    static ERROR_VARIABLE_IS_FATAL = "is_fatal";
    static ERROR_VARIABLE_CLIENT_CRASH_TIME = "crash_time";
    static ERROR_VARIABLE_CONTEXT = "error_ctx";
    static ERROR_VARIABLE_FLASH_VERSION = "flash_version";
    static ERROR_VARIABLE_AVERAGE_UPDATE_INTERVAL = "avg_update";
    static ERROR_VARIABLE_DEBUG = "debug";
    static ERROR_VARIABLE_DESCRIPTION = "error_desc";
    static ERROR_VARIABLE_CATEGORY = "error_cat";
    static ERROR_VARIABLE_DATA = "error_data";
    static REFRESH_PERIOD_IN_MILLIS = 15 * 1e3;
    static SANDBOX_CRASH_URL = "https://sandbox.habbo.com/api/log/crash";
    static S2_ENVIRONMENT_ID = "s2";
    static LOCKED_COMPONENT_LOG_INTERVAL_MS = 2e3;
    static LOCKED_COMPONENT_LOG_WARNING_DELAY_MS = 1e4;
    static ARGUMENT_ENVIRONMENT = "server";
    static ARGUMENT_SSO_TOKEN = "ticket";
    static _r393261e3c63cb4 = "username";
    static _r10256641248884 = "password";
    static _r10eceeeb62702b = "web_api_support";
    static var_2121 = "https://www.habbo.com/api/log/crash";
    static _r3ea03ca4601b46 = !1;
    static _ra00e3ec5712bd9 = 0;
    _rb44198420ec4c9 = null;
    _startTime = 0;
    _r78a5d00ea2358c = null;
    _re7f02cc255e89d = !1;
    _r5570c0312e41cd = !1;
    _r5ed9db62827067 = !0;
    _rd7b3b1e2e39308 = null;
    var_3434 = a._r86d791b51ab7c0;
    _rac4a21bc34032f = 0;
    _r2e33838c314797 = 0;
    _r60ab990ff9ef7d = !1;
    _r6caa73a22acf99 = !1;
    _r68cf884d6916bf = !1;
    _re220effb08648f = !1;
    _r06ebae8b02a2ae = 0;
    _r8fa9d11747f5bb = new Map();
    _r443deccc8ea549 = !1;
    _r1d1832a497247c = !1;
    _initialized = !1;
    _rcb81fab23899d3 = !1;
    _r67ff0442c053cd = 0;
    var_450 = new Map();
    constructor(e = null) {
      (super(),
        (this._startTime = _ia411d8d8194a3a()),
        e != null ? this._r08a42532dc5a1f(e) : (this._r5570c0312e41cd = !0),
        this.stage != null
          ? this.ChatHistoryScrollBar()
          : this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar));
    }
    initialize(e = null) {
      return (
        e != null ? this._r08a42532dc5a1f(e) : this._r5570c0312e41cd || (this._r5570c0312e41cd = !0),
        this._rf70040da351245()
      );
    }
    get core() {
      return this._rd7b3b1e2e39308;
    }
    dispose() {
      (this._rd3ce19be411ca2(),
        this._r78a5d00ea2358c != null &&
          (this._r78a5d00ea2358c.removeEventListener(cf.LOGIN_FLOW_FINISHED_EVENT, this._r086db377282336),
          this._r78a5d00ea2358c.dispose(),
          (this._r78a5d00ea2358c = null)),
        this._rb44198420ec4c9 != null && this._r786dfa5779d988(),
        this.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
        this.stage?.removeEventListener(HotelViewEvent.HOTEL_VIEW_READY, this._rc2d0072f0861fa),
        this.stage?.removeEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996),
        this._rc80c0ebe6e2c65());
    }
    _r08a42532dc5a1f(e) {
      if (e instanceof Map) {
        ((this.var_450 = _i0fb0e2716e8302(e)), (this._r5570c0312e41cd = !0));
        return;
      }
      this.parseArguments(e);
    }
    parseArguments(e) {
      if (((this.var_450 = new Map()), e.length > 0)) {
        let r = Math.floor(e.length / 2);
        for (let t = 0; t < r; t++) {
          let i = t * 2,
            s = i + 1;
          if (s >= e.length) continue;
          let o = String(e[i] ?? "").replace("-", ""),
            d = String(e[s] ?? "");
          if (o === a.ARGUMENT_ENVIRONMENT) {
            ((d = d.replace("hh", "")),
              (d = d.replace("br", "pt")),
              (d = d.replace("us", "en")),
              this.var_450.set(HabboProperty.const_682, d),
              gr._r7f62dd3441fb83(gr.SOL_PROPERTY_ENVIRONMENT, d));
            continue;
          }
          if (o === a.ARGUMENT_SSO_TOKEN) {
            this.var_450.set(HabboProperty.SSO_TOKEN, d);
            continue;
          }
          if (o === a._r393261e3c63cb4 && d !== "") {
            gr._r7f62dd3441fb83(gr.SOL_PROPERTY_LOGIN_NAME, d);
            continue;
          }
          if (o === a._r10256641248884 && d !== "") {
            gr._r7f62dd3441fb83(a._r10256641248884, d);
            continue;
          }
          if (o === a._r10eceeeb62702b) {
            this._r5ed9db62827067 = d !== "false";
            continue;
          }
          this.var_450.set(o, d);
        }
      }
      this._r5570c0312e41cd = !0;
    }
    ChatHistoryScrollBar = n(() => {
      (this.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
        this.stage?.addEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996),
        this.stage?.addEventListener(HotelViewEvent.HOTEL_VIEW_READY, this._rc2d0072f0861fa),
        (this._re7f02cc255e89d = !0),
        this._rf70040da351245());
    }, "ChatHistoryScrollBar");
    _r8ab2e311a50996 = n(() => {
      this._rd3ce19be411ca2();
    }, "_r8ab2e311a50996");
    _rc2d0072f0861fa = n(() => {
      this._r5ed9db62827067 || this._r786dfa5779d988();
    }, "_rc2d0072f0861fa");
    async _rf70040da351245() {
      if (!(
        !this._re7f02cc255e89d ||
        !this._r5570c0312e41cd ||
        this._r1d1832a497247c ||
        this._initialized ||
        this.stage == null
      )) {
        this._r1d1832a497247c = !0;
        try {
          let e = _i75928030cc9c15(this.var_450, "client.fatal.error.url");
          if (e !== "") a.var_2121 = e;
          else {
            let r = _i75928030cc9c15(this.var_450, "url.prefix");
            r !== "" && (a.var_2121 = `${r}/flash_client_error`);
          }
          (this._r2c036ce25edfce() && (a.var_2121 = a.SANDBOX_CRASH_URL),
            (a._r68fd4ae366bc33 = _i75928030cc9c15(this.var_450, "processlog.enabled") === "1"),
            a.trackLoginStep(class_18.CLIENT_START),
            this._rbc61587dd08868(),
            this._r1af8dd69f7b8f4(),
            this._rfdaacd9d01568d(),
            await _if284a2026f1a67(),
            this._r179b314d9dbf3b(),
            this._r393c2c5f5b7820(),
            UnkClass_6d7431.init(this.stage),
            (this._initialized = !0));
        } finally {
          this._r1d1832a497247c = !1;
        }
      }
    }
    _rbc61587dd08868() {
      if (this._r5ed9db62827067) return;
      let e = _i75928030cc9c15(this.var_450, HabboProperty.const_682);
      (e === "" && (e = _i806cdc26cd0ac7(gr.readSOLString(gr.SOL_PROPERTY_ENVIRONMENT) ?? "")),
        e === "" && (e = "en"),
        this.var_450.set(HabboProperty.const_682, e),
        gr._r7f62dd3441fb83(gr.SOL_PROPERTY_ENVIRONMENT, e));
    }
    _r1af8dd69f7b8f4() {
      this.stage != null &&
        ((this.stage.scaleMode = "noScale"), (this.stage.quality = "low"), (this.stage.align = "topLeft"));
    }
    _rfdaacd9d01568d() {
      (typeof window < "u" &&
        (window.addEventListener("error", this._re33701cc333049),
        window.addEventListener("unhandledrejection", this._rb5efdae693d621)),
        _i0712f2e46baeec()?._redb79e5905dd64?.addEventListener?.("exit", this._rece939da7b3aa1));
    }
    _rc80c0ebe6e2c65() {
      (typeof window < "u" &&
        (window.removeEventListener("error", this._re33701cc333049),
        window.removeEventListener("unhandledrejection", this._rb5efdae693d621)),
        _i0712f2e46baeec()?._redb79e5905dd64?.removeEventListener?.("exit", this._rece939da7b3aa1));
    }
    _r2c036ce25edfce() {
      let e = _i75928030cc9c15(this.var_450, HabboProperty.const_682);
      return e !== "" && e.toLowerCase() === a.S2_ENVIRONMENT_ID;
    }
    _r179b314d9dbf3b() {
      if (!this._r601125bbf8a906 && this._r5ed9db62827067) {
        ((this._r78a5d00ea2358c = new cf(_i0fb0e2716e8302(this.var_450))),
          this._r78a5d00ea2358c.addEventListener(cf.LOGIN_FLOW_FINISHED_EVENT, this._r086db377282336),
          this.addChild(this._r78a5d00ea2358c),
          this._r78a5d00ea2358c.init(),
          this._r02a880a55b6ae8());
        return;
      }
      this._ra9524b80654a17();
    }
    _r086db377282336 = n(() => {
      this._r78a5d00ea2358c != null &&
        (this.var_450.set(HabboProperty.SSO_TOKEN, this._r78a5d00ea2358c.ssoToken),
        this.var_450.set(HabboProperty.const_682, gr.readSOLString(gr.SOL_PROPERTY_ENVIRONMENT)),
        this._r78a5d00ea2358c.removeEventListener(cf.LOGIN_FLOW_FINISHED_EVENT, this._r086db377282336),
        this._r78a5d00ea2358c.dispose(),
        (this._r78a5d00ea2358c = null),
        (this._rb44198420ec4c9 = null),
        this._ra9524b80654a17(),
        this._r393c2c5f5b7820());
    }, "_r086db377282336");
    _ra9524b80654a17() {
      (this._r786dfa5779d988(),
        (this._rb44198420ec4c9 = new WRe(
          this.stage?.stageWidth ?? this.width,
          this.stage?._rcc0ac91bd808af ?? this.height,
          _i0fb0e2716e8302(this.var_450),
        )),
        this._r02a880a55b6ae8(),
        this.addChild(this._rb44198420ec4c9));
    }
    _r02a880a55b6ae8() {
      this._rb44198420ec4c9?.updateLoadingBar(a.CORE_RATIO);
    }
    async _r393c2c5f5b7820() {
      this._r68cf884d6916bf ||
        this._rb44198420ec4c9 == null ||
        this._rcb81fab23899d3 ||
        ((this._r68cf884d6916bf = !0),
        a.trackLoginStep(class_18.const_515),
        this._r8e352f92ced2aa(),
        await _icce342fcb95357(),
        await this._r21f0cfbf54aa27());
    }
    _r8e352f92ced2aa() {
      if (this._re220effb08648f) return;
      this._re220effb08648f = !0;
      let e = _ie648f7b14af66e();
      e != null;
    }
    async _r21f0cfbf54aa27() {
      if (!(this._rcb81fab23899d3 || this.stage == null)) {
        this._rcb81fab23899d3 = !0;
        try {
          let e = new UnkClass_0b91c0(),
            r = class_14.instantiate(
              this.stage,
              UnkClass_c7f867.isDebugger ? class_14._r45378a812c2e75 : class_14._rfa963bd44ad884,
              e,
              _i0fb0e2716e8302(this.var_450),
            );
          if (r == null) throw new Error("Core.instantiate returned null.");
          this._rd7b3b1e2e39308 = r;
          let t = this.Event();
          (t?.addEventListener?.(ue.COMPONENT_EVENT_ERROR, this.onCoreError),
            t?.addEventListener?.(ue.COMPONENT_EVENT_REBOOT, this._rffee6a66b6fb6d),
            (C2._r29c45cd093eed6 = new Aie()),
            S6.nativeApplicationProxy?.dispose(),
            (S6.nativeApplicationProxy = new Cne()),
            (this.var_3434 = Lir + a._r86d791b51ab7c0),
            (this._rac4a21bc34032f = 0),
            (this._r2e33838c314797 = 0),
            await _i41eaf0b744a06c(r, this._r9cef23579c5939),
            this._r58ff7ca87daf61(),
            this._r297fa0795de204(),
            this.initializeCore());
        } catch (e) {
          let r = e instanceof Error ? e : new Error(String(e));
          (a.trackLoginStep(class_18.CORE_ERROR),
            a.reportCrash(`Failed to prepare the core: ${r.message}`, class_14.ERROR_CATEGORY_INITIALIZE_CORE, !0, r),
            this._r96c42a36650341(`Failed to prepare the core: ${r.message}`, class_14.ERROR_CATEGORY_INITIALIZE_CORE),
            class_14.dispose(),
            (this._rd7b3b1e2e39308 = null));
        } finally {
          this._rcb81fab23899d3 = !1;
        }
      }
    }
    _r9cef23579c5939 = n((e, r, t) => {
      ((this._rac4a21bc34032f = e), this.updateProgressBar());
    }, "_r9cef23579c5939");
    updateProgressBar() {
      if (this._rb44198420ec4c9 == null) return;
      let e =
        a.CORE_RATIO +
        ((this._r2e33838c314797 + this._rac4a21bc34032f) / Math.max(1, this.var_3434)) *
          (1 - a.CORE_RATIO);
      this._rb44198420ec4c9.updateLoadingBar(Math.min(1, e));
    }
    initializeCore() {
      a.trackLoginStep(class_18.CORE_INIT);
      try {
        (this._rd7b3b1e2e39308?.initialize(),
          ur.available && ur._r77b8521b16f762("unloading", this.unloading.bind(this)));
      } catch (e) {
        let r = e instanceof Error ? e : new Error(String(e));
        (a.trackLoginStep(class_18.CORE_ERROR),
          this._r96c42a36650341(`Failed to initialize the core: ${r.message}`, class_14.ERROR_CATEGORY_INITIALIZE_CORE),
          class_14.crash(`Failed to initialize the core: ${r.message}`, class_14.ERROR_CATEGORY_INITIALIZE_CORE, r));
      }
    }
    _r96c42a36650341(e, r = -1) {
      (this._r8b94c0bf7d40b7(),
        (this._r68cf884d6916bf = !1),
        console.error(`[HabboAir] Loading error (category ${r}): ${e}`),
        this._rb44198420ec4c9 != null &&
          !this._rb44198420ec4c9.disposed &&
          this._rb44198420ec4c9.showError(this._ra4031966e652d4(e, r)));
    }
    _ra4031966e652d4(e, r) {
      let t = e.replace(/\s+/g, " ").trim(),
        i = t.toLowerCase(),
        s = `Client startup failed.
Please restart the client.`;
      if (
        (r === class_14.ERROR_CATEGORY_DOWNLOAD_LOCALIZATION ||
        r === class_14.ERROR_CATEGORY_PRODUCT_DATA ||
        i.includes("gamedata") ||
        i.includes("product data") ||
        i.includes("localization")
          ? (s = `Failed to download required game data.
Please check your connection and restart the client.`)
          : (r === class_14._rfcf906423aa8ef || r === class_14.ERROR_CATEGORY_COMPONENT_RESOURCE_LOAD_ERROR || i.includes("download")) &&
            (s = `Failed to download required client libraries.
Please check your connection and restart the client.`),
        t !== "")
      ) {
        let o = t.length > 220 ? `${t.slice(0, 220)}...` : t;
        s += `

Details: ${o}`;
      }
      return s;
    }
    Event() {
      return this._rd7b3b1e2e39308?.events ?? null;
    }
    unloading() {
      try {
        this._rd7b3b1e2e39308 != null &&
          !this._rd7b3b1e2e39308.disposed &&
          (ErrorReportStorage.addDebugData("Unload", "Client unloading started"),
          this.Event()?.dispatchEvent?.(new M("unload")));
      } catch (e) {
        let r = e instanceof Error ? e : new Error(String(e));
      }
    }
    onCoreError = n((e) => {
      let r = e,
        t = r.message ?? "Unknown core error",
        i = r.category ?? -1,
        s = r.critical === !0;
      (console.error(`[HabboAir] Core error type=${e.type} critical=${s} category=${i} message=${t}`),
        s && this._rb44198420ec4c9 != null && !this._rb44198420ec4c9.disposed && this._r96c42a36650341(t, i),
        s && a.reportCrash(t, i, !0, r.error ?? null));
    }, "onCoreError");
    _rece939da7b3aa1 = n(() => {
      this._rd3ce19be411ca2();
    }, "_rece939da7b3aa1");
    _rd3ce19be411ca2() {
      if (this._r443deccc8ea549) return;
      ((this._r443deccc8ea549 = !0),
        this._r8b94c0bf7d40b7(),
        this._r8016472c4bd1c6(),
        this.unloading(),
        this._rc80c0ebe6e2c65(),
        this.stage?.removeEventListener(HotelViewEvent.HOTEL_VIEW_READY, this._rc2d0072f0861fa));
      let e = this.Event();
      (e?.removeEventListener?.(ue.COMPONENT_EVENT_ERROR, this.onCoreError),
        e?.removeEventListener?.(ue.COMPONENT_EVENT_REBOOT, this._rffee6a66b6fb6d),
        e?.removeEventListener?.(ue.COMPONENT_EVENT_RUNNING, this.onCoreRunning),
        S6.nativeApplicationProxy?.dispose(),
        (S6.nativeApplicationProxy = null),
        class_14.dispose(),
        (this._rd7b3b1e2e39308 = null));
    }
    _rffee6a66b6fb6d = n(() => {
      (this._rd3ce19be411ca2(), _i0712f2e46baeec()?._redb79e5905dd64?.exit?.(1));
    }, "_rffee6a66b6fb6d");
    _r96e546c45b5e73(e, r) {
      let t = this._rd7b3b1e2e39308?.queueInterface(e, r);
      t != null && r(e, t);
    }
    _r58ff7ca87daf61() {
      (this._r96e546c45b5e73(new IIDHabboLocalizationManager(), (e, r) => {
        r.events.addEventListener?.(M.ComponentDependency, this._r1ab587e5db460e);
      }),
        this._r96e546c45b5e73(new IIDHabboConfigurationManager(), this.IIDHabboConfigurationManager),
        this._r96e546c45b5e73(new IIDRoomEngine(), (e, r) => {
          let t = r;
          (t.events.addEventListener?.(RoomEngineEvent.ROOM_ENGINE_INITIALIZED, this._rce6f9602e879f9),
            t.isInitialized === !0 && this._rce6f9602e879f9());
        }),
        this.Event()?.addEventListener?.(ue.COMPONENT_EVENT_RUNNING, this.onCoreRunning));
    }
    _r297fa0795de204() {
      this._r06ebae8b02a2ae !== 0 ||
        !(this._rd7b3b1e2e39308 instanceof C2) ||
        ((this._r06ebae8b02a2ae = setInterval(this._ra65ece06e81223, a.LOCKED_COMPONENT_LOG_INTERVAL_MS)),
        this._ra65ece06e81223());
    }
    _r8b94c0bf7d40b7() {
      (this._r06ebae8b02a2ae !== 0 && (clearInterval(this._r06ebae8b02a2ae), (this._r06ebae8b02a2ae = 0)),
        this._r8fa9d11747f5bb.clear());
    }
    _ra65ece06e81223 = n(() => {
      if (!(this._rd7b3b1e2e39308 instanceof C2)) {
        this._r8b94c0bf7d40b7();
        return;
      }
      let e = this._rd7b3b1e2e39308._rb6efb0c429b741();
      if (e.length === 0) {
        this._r8b94c0bf7d40b7();
        return;
      }
      let r = _ia411d8d8194a3a(),
        t = new Set();
      for (let i of e) {
        let s = _iad1dc21ca35e21(i),
          o =
            i.requiredDependencyIdentifiers.length > 0
              ? i.requiredDependencyIdentifiers.join(", ")
              : "dependencies to finish",
          d = this._r8fa9d11747f5bb.get(s);
        (d == null
          ? this._r8fa9d11747f5bb.set(s, { _r9403070381836f: r, _r43c0b33707a5d4: 0, description: o })
          : d.description !== o && ((d.description = o), (d._r43c0b33707a5d4 = 0)),
          t.add(s));
        let c = this._r8fa9d11747f5bb.get(s);
        r - c._r9403070381836f >= a.LOCKED_COMPONENT_LOG_WARNING_DELAY_MS &&
          r - c._r43c0b33707a5d4 >= a.LOCKED_COMPONENT_LOG_WARNING_DELAY_MS &&
          (c._r43c0b33707a5d4 = r);
      }
      for (let i of Array.from(this._r8fa9d11747f5bb.keys())) t.has(i) || this._r8fa9d11747f5bb.delete(i);
    }, "_ra65ece06e81223");
    _r1ab587e5db460e = n(() => {
      (a.trackLoginStep(class_18.const_71), this._r2e33838c314797++, this.updateProgressBar());
    }, "_r1ab587e5db460e");
    IIDHabboConfigurationManager = n((e, r) => {
      (a.trackLoginStep(class_18.CONFIG_LOADED), this._r2e33838c314797++, this.updateProgressBar());
    }, "IIDHabboConfigurationManager");
    _rce6f9602e879f9 = n(() => {
      ((this._r60ab990ff9ef7d = !0),
        a.trackLoginStep(class_18.ROOM_ENGINE_READY),
        (this._rd7b3b1e2e39308?.getInteger("spaweb", 0) ?? 0) === 1 && this._r59c7c8fb0e3a13(),
        this._rf683f6b64b6209());
    }, "_rce6f9602e879f9");
    _r59c7c8fb0e3a13() {
      this._r67ff0442c053cd === 0 &&
        (this.sendHeartBeat(), (this._r67ff0442c053cd = setInterval(this.sendHeartBeat, 1e4)));
    }
    _r8016472c4bd1c6() {
      this._r67ff0442c053cd !== 0 && (clearInterval(this._r67ff0442c053cd), (this._r67ff0442c053cd = 0));
    }
    sendHeartBeat = n(() => {
      Ae.sendHeartBeat();
    }, "sendHeartBeat");
    onCoreRunning = n(() => {
      ((this._r6caa73a22acf99 = !0),
        a.trackLoginStep(class_18.CORE_RUNNING),
        this._r2e33838c314797++,
        this.updateProgressBar(),
        this._rf683f6b64b6209());
    }, "onCoreRunning");
    _rf683f6b64b6209() {
      if (this._r7d38916d6381dc && this._r6caa73a22acf99) {
        this._r786dfa5779d988();
        return;
      }
      this._r60ab990ff9ef7d && this._r6caa73a22acf99 && this._r786dfa5779d988();
    }
    _r786dfa5779d988() {
      if ((this._r8b94c0bf7d40b7(), this._rb44198420ec4c9 == null)) return;
      let e = this._rb44198420ec4c9;
      (this._rb44198420ec4c9.dispose(),
        e.parent != null && e.parent.removeChild(e),
        (this._rb44198420ec4c9 = null),
        this.Event()?.removeEventListener?.(ue.COMPONENT_EVENT_RUNNING, this.onCoreRunning));
    }
    get _r601125bbf8a906() {
      return _i75928030cc9c15(this.var_450, HabboProperty.SSO_TOKEN).length > 0;
    }
    get _r7d38916d6381dc() {
      return !this._r5ed9db62827067 && !this._r601125bbf8a906;
    }
    _re33701cc333049 = n((e) => {
      let r = e.message || "Uncaught client error";
      a.reportCrash(
        `${r} runtime: ${(_ia411d8d8194a3a() - this._startTime) / 1e3}s`,
        class_14.ERROR_UNCAUGHT_ERROR,
        !0,
        e.error instanceof Error ? e.error : null,
      );
    }, "_re33701cc333049");
    _rb5efdae693d621 = n((e) => {
      let r = e.reason instanceof Error ? e.reason : new Error(String(e.reason));
      a.reportCrash(`Unhandled promise rejection: ${r.message}`, class_14.ERROR_UNCAUGHT_ERROR, !0, r);
    }, "_rb5efdae693d621");
    static trackLoginStep(e, r = null) {
      if (a._r68fd4ae366bc33)
        try {
          if (!ur.available) return;
          r != null
            ? ur.call("FlashExternalInterface.logLoginStep", e, r)
            : ur.call("FlashExternalInterface.logLoginStep", e);
        } catch {}
    }
    static reportCrash(e, r, t, i = null, s = null) {
      let o = i?.stack ?? "";
      this.reportCrashStack(e, r, t, o, s);
    }
    static reportCrashStack(e, r, t, i, s = null) {
      let o = Date.now();
      if (a._ra00e3ec5712bd9 !== 0 && a._ra00e3ec5712bd9 + a.REFRESH_PERIOD_IN_MILLIS > o) return;
      a._ra00e3ec5712bd9 = o;
      let d = {};
      ((d[a.ERROR_VARIABLE_CLIENT_CRASH_TIME] = String(o)),
        (d[a.ERROR_VARIABLE_IS_FATAL] = String(t)),
        (d[a.ERROR_VARIABLE_CONTEXT] = ""),
        (d[a.ERROR_VARIABLE_FLASH_VERSION] = UnkClass_c7f867.version),
        (d[a.ERROR_VARIABLE_AVERAGE_UPDATE_INTERVAL] = "0"),
        (d[a.ERROR_VARIABLE_DESCRIPTION] = e),
        (d[a.ERROR_VARIABLE_CATEGORY] = String(r)),
        i !== "" && (d[a.ERROR_VARIABLE_DATA] = i),
        (d[a.ERROR_VARIABLE_DEBUG] = `Memory usage: ${Math.round(Bi.totalMemory / (1024 * 1024))} MB`));
      for (let c of ErrorReportStorage.getParameterNames()) d[c] = ErrorReportStorage.getParameter(c);
      ((d[a.ERROR_VARIABLE_DEBUG] = ErrorReportStorage.getDebugData()),
        t && !a._r3ea03ca4601b46 && (a._r3ea03ca4601b46 = !0),
        _i8754c2d98324f9(a.var_2121, d));
    }
  }
