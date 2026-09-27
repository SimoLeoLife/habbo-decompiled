// Extracted from HabboAirLauncher.deobf.js, line 340630.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/phonenumber/VerificationCodeInputView.as
// Obfuscated name: _i755aef643f76b2

class a {
  static {
    n(this, "VerificationCodeInputView");
  }
  static INPUT_MAX_CHARS = 10;
  var_82;
  _window = null;
  _inputTextNeedsClearing = !0;
  _r296a04323547dc = null;
  constructor(e) {
    ((this.var_82 = e), this.createWindow());
  }
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      this._r296a04323547dc?.reset(),
      (this._r296a04323547dc = null),
      (this.var_82 = null));
  }
  handleSubmitFailure(e) {
    this.var_82?.windowManager.alert(
      "${generic.alert.title}",
      "${phone.number.verify.error." + e + "}",
      0,
      null,
    );
    let r = this._window?.findChildByName("verification_code_input");
    (r != null && ((r.textColor = 16711680), r.enable()), (this._inputTextNeedsClearing = !0));
  }
  showRetry() {
    let e = this._window?.findChildByName("did_not_receive_code_link");
    e != null && (e.visible = !0);
    let r = this._window?.findChildByName("retry_wait_label");
    r != null && (r.visible = !1);
  }
  showWaitForRetry() {
    let e = this._window?.findChildByName("did_not_receive_code_link");
    e != null && (e.visible = !1);
    let r = this._window?.findChildByName("retry_wait_label");
    (r != null && (r.visible = !0),
      this._r91eaa220f267a4(),
      (this._r296a04323547dc = new UnkEventDispatcherWrapperSubclass_05394e(1e3)),
      this._r296a04323547dc.addEventListener(DeBouncer.addEventListener, this._r91eaa220f267a4),
      this._r296a04323547dc.start());
  }
  createWindow() {
    if (this._window != null || this.var_82 == null) return;
    ((this._window = this.var_82.windowManager.buildFromXML(
      this.var_82.assets.getAssetByName("phonenumber_verify_xml")?.content,
    )),
      this._window?.center(),
      this._window?.findChildByName("wait_link") != null &&
        (this._window.findChildByName("wait_link").procedure = this.onInputButtons),
      this._window?.findChildByName("ok_button") != null &&
        (this._window.findChildByName("ok_button").procedure = this.onInputButtons),
      this._window?.findChildByName("header_button_close") != null &&
        (this._window.findChildByName("header_button_close").visible = !1),
      this._window?.findChildByName("verification_code_input") != null &&
        (this._window.findChildByName("verification_code_input").procedure = this.onInputButtons),
      this._window?.findChildByName("did_not_receive_code_link") != null &&
        (this._window.findChildByName("did_not_receive_code_link").procedure =
          this.onInputButtons),
      this._window?.findChildByName("ok_button")?.disable(),
      this._window?.findChildByName("verification_code_input")?.enable(),
      this.var_82._rfd44791fd31d2b - _ia411d8d8194a3a() <= 0 ? this.showRetry() : this.showWaitForRetry());
    let e = this._window?.findChildByName("verification_code_input");
    (e != null && (e._r4c2336e24c69cc = a.INPUT_MAX_CHARS), (this._inputTextNeedsClearing = !0));
  }
  onInputButtons = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "header_button_close":
        case "wait_link":
          this.var_82?._r2d12d9d876d952(!0);
          break;
        case "did_not_receive_code_link":
          this.var_82?._ra539dabae96329();
          break;
        case "ok_button":
          (this.var_82?._rb659858a07b8f9(
            this._window?.findChildByName("verification_code_input")?.caption ?? "",
          ),
            this._window?.findChildByName("ok_button")?.disable(),
            this._window?.findChildByName("verification_code_input")?.disable());
          break;
        case "verification_code_input":
          if (this._inputTextNeedsClearing) {
            let i = this._window?.findChildByName("verification_code_input");
            (i != null && (i.caption = ""), (this._inputTextNeedsClearing = !1));
          }
          this._window?.findChildByName("ok_button")?.enable();
          let t = this._window?.findChildByName("verification_code_input");
          t != null && (t.textColor = 0);
          break;
      }
  }, "onInputButtons");
  _r91eaa220f267a4 = n((e = null) => {
    if (this.var_82 == null || this._window == null) return;
    let r = this.var_82.localizationManager.getLocalization("phone.number.verify.wait.remaining", ""),
      t = Math.max(0, Math.trunc((this.var_82._rfd44791fd31d2b - _ia411d8d8194a3a()) / 1e3));
    r = r.replace("{0}", `${t}`);
    let i = this._window.findChildByName("retry_wait_label");
    (i != null && (i.text = r),
      t === 0 && (this._r296a04323547dc?.stop(), (this._r296a04323547dc = null), this.showRetry()));
  }, "_r91eaa220f267a4");
}
