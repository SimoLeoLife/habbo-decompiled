// Extracted from HabboAirLauncher.deobf.js, line 340736.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/phonenumber/HabboPhoneNumber.as
// Obfuscated name: _i0791a9f13e2a90

class extends ue {
  static {
    n(this, "HabboPhoneNumber");
  }
  _r0ede8ebf511312 = null;
  _rce499fea890378 = null;
  _rd64d75516652d9 = null;
  _r903a845b04b2d1 = null;
  _r2a3dda6732da00 = 0;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._r6358b2bd53ae19 = e;
        },
        !0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(new IIDHabboToolbar(), (e) => {
        this._toolbar = e;
      }),
    ]);
  }
  initComponent() {
    if (!this.getBoolean("sms.identity.verification.enabled")) return;
    this.var_36 = this._r6358b2bd53ae19?.connection ?? null;
    let e = n((i) => {
        this._rced1a91cbf6988(i);
      }, "_iced1a91cbf6988"),
      r = n((i) => {
        this._r7dae5a293179c6(i);
      }, "_i7dae5a293179c6"),
      t = n((i) => {
        this._r420d157019322a(i);
      }, "_i420d157019322a");
    (this.var_36?.addMessageEvent(new class_3547(e)),
      this.var_36?.addMessageEvent(new class_3523(r)),
      this.var_36?.addMessageEvent(new class_3541(t)));
  }
  dispose() {
    (this._ra0ba623d23c8f6(),
      this._r633cc0f384dc5e(),
      this._rb942b2f1428568(),
      this._r65fa1fa08cfb8e(),
      (this.var_36 = null),
      (this._r6358b2bd53ae19 = null),
      (this._localizationManager = null),
      (this._sessionDataManager = null),
      (this._toolbar = null),
      (this._windowManager = null),
      super.dispose());
  }
  sendTryPhoneNumber(e, r) {
    this.var_36?.send(new class_2806(e, r));
  }
  _rb659858a07b8f9(e) {
    e !== "" && this.var_36?.send(new UnkMessageComposer_1args_124c19(e.toUpperCase()));
  }
  _rc27b3dccda3bed() {
    (this.var_36?.send(new UnkMessageComposer_1args_0dfe00(class_3585.NEVER_AGAIN)), this._ra0ba623d23c8f6());
  }
  _r4e86c4cb44ae0c(e) {
    e
      ? (this._ra0ba623d23c8f6(), this._rd63aa16b5aaf5e())
      : (this._r633cc0f384dc5e(), this.createCollectView());
  }
  _r2d12d9d876d952(e) {
    e
      ? (this._rb942b2f1428568(), this._r2d2baa1029a8a2())
      : (this._r65fa1fa08cfb8e(), this._rbdf62c2f4a939e());
  }
  _ra539dabae96329() {
    (this._rb942b2f1428568(), this.var_36?.send(new class_2946()));
  }
  get windowManager() {
    if (this._windowManager == null) throw new Error("Window manager is not available.");
    return this._windowManager;
  }
  get localizationManager() {
    if (this._localizationManager == null) throw new Error("Localization manager is not available.");
    return this._localizationManager;
  }
  get _rfd44791fd31d2b() {
    return this._r2a3dda6732da00;
  }
  _r7dae5a293179c6 = n((e) => {
    let r = e.getParser();
    switch (r.var_1827) {
      case class_3718.VERIFIED:
        this._ra0ba623d23c8f6();
        break;
      case class_3718.OK:
      case class_3718.NON_VERIFIED:
      case class_3718.TOKEN_SENT:
        (this._ra0ba623d23c8f6(),
          (this._r2a3dda6732da00 = r._r4da09dd19a9004 + _ia411d8d8194a3a()),
          this._rbdf62c2f4a939e());
        break;
      case class_3718.ERROR:
      case class_3718.RATE_LIMIT:
      case class_3718.NUMBER_MISTYPED:
      case class_3718.NUMBER_ALREADY_VERIFIED:
        (this._rce499fea890378 == null && this._r0ede8ebf511312 == null
          ? this.createCollectView()
          : this._rce499fea890378 != null && this._r4e86c4cb44ae0c(!1),
          this._windowManager?.alert(
            "${generic.alert.title}",
            "${phone.number.collect.error." + r.var_1827 + "}",
            0,
            null,
          ),
          this._r0ede8ebf511312?.handleSubmitFailure(r.var_1827));
        break;
    }
  }, "_r7dae5a293179c6");
  _r420d157019322a = n((e) => {
    let r = e.getParser();
    switch (r.var_1827) {
      case class_3718.VERIFIED:
      case class_3718.OK:
        this._rb942b2f1428568();
        break;
      case class_3718.ERROR:
        (this._r903a845b04b2d1 == null && this._rd64d75516652d9 == null
          ? ((this._r2a3dda6732da00 = _ia411d8d8194a3a() + r._r25fdc7feecc63e), this._rbdf62c2f4a939e())
          : this._r903a845b04b2d1 != null && this._r2d12d9d876d952(!1),
          this._rd64d75516652d9?.handleSubmitFailure(r.var_1827));
        break;
    }
  }, "_r420d157019322a");
  _rced1a91cbf6988 = n((e) => {
    let r = e.getParser(),
      t = r._r262f08d4ab9471,
      i = r._rdbc26d52b301ac;
    if (
      (this.context.configuration?.setProperty("phone.collection.status", t.toString()),
      this.context.configuration?.setProperty("phone.verification.status", i.toString()),
      t !== class_3585.NEVER_AGAIN)
    ) {
      if (t === class_3585.TOKEN_INPUT && (i === class_3718.NON_VERIFIED || i === class_3718.TOKEN_SENT)) {
        (this._ra0ba623d23c8f6(),
          (this._r2a3dda6732da00 = r._r25fdc7feecc63e + _ia411d8d8194a3a()),
          this._rbdf62c2f4a939e());
        return;
      }
      switch (i) {
        case class_3718.NON_EXISTING:
        case class_3718.NON_VERIFIED:
          this.createCollectView();
          break;
        case class_3718.VERIFIED:
        case class_3718.OK:
          (this._ra0ba623d23c8f6(), this._rb942b2f1428568());
          break;
      }
    }
  }, "_rced1a91cbf6988");
  createCollectView() {
    this._ra0ba623d23c8f6();
    let r = (this.context.configuration?.getProperty("phone.number.preferred.countries") ?? "").split(",");
    this._r0ede8ebf511312 = new XEe(this, r);
  }
  _rbdf62c2f4a939e() {
    (this._rb942b2f1428568(), (this._rd64d75516652d9 = new KEe(this)));
  }
  _rd63aa16b5aaf5e() {
    (this._r633cc0f384dc5e(),
      (this._rce499fea890378 = new QEe(this)),
      this._toolbar?.extensionView?._ra96f07968c4ed0(
        ToolbarDisplayExtensionIds.PHONE_NUMBER,
        this._rce499fea890378.window,
        class_1954.SLOT_PHONE_NUMBER,
      ));
  }
  _r2d2baa1029a8a2() {
    (this._r65fa1fa08cfb8e(),
      (this._r903a845b04b2d1 = new YEe(this)),
      this._toolbar?.extensionView?._ra96f07968c4ed0(
        ToolbarDisplayExtensionIds.VERIFICATION_CODE,
        this._r903a845b04b2d1.window,
        class_1954.SLOT_PHONE_NUMBER,
      ));
  }
  _ra0ba623d23c8f6() {
    (this._r0ede8ebf511312?.dispose(), (this._r0ede8ebf511312 = null));
  }
  _rb942b2f1428568() {
    (this._rd64d75516652d9?.dispose(), (this._rd64d75516652d9 = null));
  }
  _r633cc0f384dc5e() {
    (this._toolbar?.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.PHONE_NUMBER),
      this._rce499fea890378?.dispose(),
      (this._rce499fea890378 = null));
  }
  _r65fa1fa08cfb8e() {
    (this._toolbar?.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.VERIFICATION_CODE),
      this._r903a845b04b2d1?.dispose(),
      (this._r903a845b04b2d1 = null));
  }
}
