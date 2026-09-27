// Extracted from HabboAirLauncher.deobf.js, line 232571.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/namechange/NameChangeController.as
// Obfuscated name: _ie278fed0589375

class {
  constructor(e) {
    this._habboHelp = e;
    let r = this._habboHelp?._rf3db13932bfb60;
    (r?._r2e106e2349a0b6(new class_1926(this._r6e2e75987c854e)),
      r?._r2e106e2349a0b6(new UnkMessageEvent_070f79(this._r4322a6d303b99c)),
      r?._r2e106e2349a0b6(new class_2146(this._r7012a4854191ae)),
      r?._r2e106e2349a0b6(new class_3463(this._r0fc93f01455ee6)));
  }
  static {
    n(this, "NameChangeController");
  }
  static NAME_CHANGE = "TUI_NAME_VIEW";
  _disposed = !1;
  _rb119d6a746b718 = null;
  _r26304bc3f25c85 = "";
  var_4278 = 0;
  get assets() {
    return this._habboHelp?.assets ?? null;
  }
  get localization() {
    return this._habboHelp?.localization ?? null;
  }
  get _r94ea406c211077() {
    return this._r26304bc3f25c85;
  }
  get _r8b3cd107b1088e() {
    return this._r26304bc3f25c85;
  }
  get _rb286a1f9faeb60() {
    return this.var_4278;
  }
  dispose() {
    this._disposed || (this.disposeView(), (this._habboHelp = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  showView() {
    ((this._rb119d6a746b718 == null || this._rb119d6a746b718.disposed) &&
      (this._rb119d6a746b718 = new C7e(this)),
      this._rb119d6a746b718.showMainView(),
      this._r369388451b4267());
  }
  buildXmlWindow(e, r = 1) {
    let t = this._habboHelp?.assets,
      i = this._habboHelp?.windowManager;
    if (t == null || i == null) return null;
    let o = t.getAssetByName(`${e}_xml`)?.content;
    return o == null ? null : i.buildFromXML(o, r);
  }
  disposeView() {
    (this._rb119d6a746b718?.dispose(), (this._rb119d6a746b718 = null));
  }
  _r6167aac3809e80() {
    this.disposeView();
  }
  _r5132265b279d59(e) {
    e || this.disposeView();
  }
  _r369388451b4267() {
    this._habboHelp?.events?.dispatchEvent?.(new HabboHelpTutorialEvent(HabboHelpTutorialEvent.const_145));
  }
  windowProcedure(e, r) {
    e.type === u.CLICK && r.name === "header_button_close" && this.disposeView();
  }
  _raf88edb5b4add5(e) {
    this._habboHelp?._rb13ed3a89b85ae(new UnkMessageComposer_1args_35156d(e));
  }
  _r22f28f976760b8(e) {
    this._habboHelp?._rb13ed3a89b85ae(new UnkMessageComposer_1args_643860(e));
  }
  onUserNameChanged(e) {
    let r = this._habboHelp?.localization,
      t = this._habboHelp?.windowManager;
    r == null ||
      t == null ||
      (r._r43eae9731f5b27("help.tutorial.name.changed", "name", e),
      t.alert("${generic.notice}", "${help.tutorial.name.changed}", 0, (...i) => {
        i[0]?.dispose();
      }));
  }
  _r7012a4854191ae = n((e) => {
    let r = ClassUtils.getParser(e, class_1877);
    r != null &&
      r != null &&
      (r.var_1827 === class_2146.var_2462
        ? (this.onUserNameChanged(r.name), this._r6167aac3809e80())
        : this._rb119d6a746b718?.setNameNotAvailableView(r.var_1827, r.name, r.var_2736));
  }, "_r7012a4854191ae");
  _r0fc93f01455ee6 = n((e) => {
    if (this._rb119d6a746b718 == null) return;
    let r = ClassUtils.getParser(e, class_2916);
    r != null &&
      r != null &&
      (r.var_1827 === class_2146.var_2462
        ? (this._rb119d6a746b718.checkedName = r.name)
        : this._rb119d6a746b718.setNameNotAvailableView(r.var_1827, r.name, r.var_2736));
  }, "_r0fc93f01455ee6");
  _r6e2e75987c854e = n((e) => {
    let r = ClassUtils.getParser(e, class_1833);
    r != null && ((this.var_4278 = r.id), (this._r26304bc3f25c85 = r.name));
  }, "_r6e2e75987c854e");
  _r4322a6d303b99c = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_IIS_2c547c);
    r != null && this.var_4278 === r.webId && (this._r26304bc3f25c85 = r._r4c7340395c786f);
  }, "_r4322a6d303b99c");
}
