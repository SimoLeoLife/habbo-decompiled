// Extracted from HabboAirLauncher.deobf.js, line 210253.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/talent/CitizenshipPopupController.as
// Obfuscated name: _i27ab1cfccad4a2

class {
  static {
    n(this, "CitizenshipPopupController");
  }
  _habboTalent;
  var_408 = null;
  _disposed = !1;
  var_3032;
  _r42b6451c61d9b6 = !1;
  constructor(e) {
    ((this._habboTalent = e),
      (this.var_3032 = new class_2117(this.onRoomEnter.bind(this))),
      this._habboTalent._rf3db13932bfb60?._r2e106e2349a0b6(this.var_3032));
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this.hide(), this.removeRoomEnterListener(), (this._habboTalent = null), (this._disposed = !0));
  }
  show() {
    (this.hide(),
      (this.var_408 = this._habboTalent?.getModalXmlWindow("citizenship_welcome") ?? null));
    let e = this.var_408?.rootWindow;
    if (e == null) return;
    e.procedure = (t, i) => {
      this.onWindowEvent(t, i);
    };
    let r = e.findChildByName("header_button_close");
    r != null && (r.visible = !1);
  }
  onRoomEnter(e) {
    this._habboTalent?.newIdentity &&
      !this._r42b6451c61d9b6 &&
      this._habboTalent.getBoolean("new.user.citizenship.popup.enabled") &&
      window.setTimeout(() => {
        this._disposed || this.start();
      }, 1e4);
  }
  start() {
    (this.removeRoomEnterListener(), this.show(), (this._r42b6451c61d9b6 = !0));
  }
  removeRoomEnterListener() {
    (this._habboTalent != null &&
      !this._habboTalent.disposed &&
      this.var_3032 != null &&
      this._habboTalent._rf3db13932bfb60?._r7668362bf55fdd(this.var_3032),
      (this.var_3032 = null));
  }
  hide() {
    this.var_408 != null &&
      !this.var_408.disposed &&
      (this.var_408.dispose(), (this.var_408 = null));
  }
  onWindowEvent(e, r) {
    if (!(this.var_408 == null || this.var_408.disposed || e.type !== u.CLICK))
      switch (r.name) {
        case "postpone_citizenship":
          this.hide();
          break;
        case "show_citizenship":
          (this.hide(),
            this._habboTalent?.tracking?.trackTalentTrackOpen(ys.CITIZENSHIP, "citizenshippopup"),
            this._habboTalent?.send(new class_2687(ys.CITIZENSHIP)));
          break;
      }
  }
}
