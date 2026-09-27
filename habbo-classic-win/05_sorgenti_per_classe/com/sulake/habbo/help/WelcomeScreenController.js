// Extracted from HabboAirLauncher.deobf.js, line 233641.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/WelcomeScreenController.as
// Obfuscated name: _i06c1071cdac330

class {
  constructor(e) {
    this._habboHelp = e;
  }
  static {
    n(this, "WelcomeScreenController");
  }
  _disposed = !1;
  _window = null;
  var_349 = new E(72, 10);
  var_3972 = "";
  _alignment = class_2083.const_27;
  var_4207 = null;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    (this._window != null &&
      (this._window.findChildByName("close")?.removeEventListener(u.CLICK, this._r51ded8c03203b6),
      this._window.findChildByName("click")?.removeEventListener(u.CLICK, this._r285a24f5034aa5),
      this._window.dispose(),
      (this._window = null)),
      this._habboHelp?.removeUpdateReceiver(this),
      (this._habboHelp = null),
      (this._disposed = !0));
  }
  showWelcomeScreen(e, r, t, i) {
    if (this._disposed) return;
    ((this.var_3972 = e),
      (this._alignment = t),
      (this.var_4207 = i),
      this._window == null && this.initializeWindow());
    let s = this._window?.findChildByName("text");
    (s != null && ((s.caption = `\${${r}}`), (s.height = s.textHeight + 5)),
      this.updatePosition(),
      this.registerUpdates(),
      this._window != null &&
        ((this._window.visible = !0), this._window.activate()));
  }
  update(e) {
    if (this._window == null || this._habboHelp == null) {
      this._habboHelp?.removeUpdateReceiver(this);
      return;
    }
    let r = this.var_349.x - this._window.x,
      t = this.var_349.y - this._window.y;
    Math.sqrt(r * r + t * t) > 5
      ? ((this._window.x += r * 0.5), (this._window.y += t * 0.5))
      : ((this._window.x = this.var_349.x),
        (this._window.y = this.var_349.y),
        this._habboHelp.removeUpdateReceiver(this));
  }
  IIDHabboCatalog(e) {
    if (!(this._disposed || this._window == null))
      switch (e.type) {
        case HabboToolbarEvent.RESIZED: {
          let r = this._habboHelp?.toolbar?._r6822d89b476fe5(this.var_3972);
          r != null &&
            ((this.var_349.y = r.y + r.height / 2 - this._window.height / 2),
            (this._window.y = this.var_349.y));
          break;
        }
        case HabboToolbarEvent.TOOLBAR_CLICK:
        case HabboToolbarEvent.GROUP_ROOM_INFO_CLICK:
          this.closeWindow();
          break;
      }
  }
  initializeWindow() {
    let e = this._habboHelp?.assets?.getAssetByName("welcome_screen_xml");
    if (
      e?.content == null ||
      ((this._window = this._habboHelp?.windowManager?.buildFromXML(e.content, 2)),
      this._window == null)
    )
      return;
    let r = this._window.findChildByName("frame");
    (r?.header && (r.header.visible = !1),
      r?.content != null && ((r.content.y -= 20), r.content.setParamFlag(N._r46a9ac2e4c9863, !1)));
    let t = this._window.findChildByName("text");
    (t != null && (t.height = t.textHeight + 5),
      r != null && (r.height -= 20),
      this._window.findChildByName("close")?.addEventListener(u.CLICK, this._r51ded8c03203b6),
      this._window.findChildByName("click")?.addEventListener(u.CLICK, this._r285a24f5034aa5));
  }
  updatePosition() {
    if (this._window == null) return;
    let e =
        this._habboHelp?.toolbar?._r6822d89b476fe5(this.var_3972) ??
        new D(0, 0, this._window.width, this._window.height),
      r = this._window.findChildByName("arrow"),
      t = this._window.findChildByName("arrow_right");
    (this._alignment === class_2083.const_27
      ? ((this.var_349.x = 72),
        (this._window.x = -this._window.width),
        r != null && ((r.y = (this._window.height - r.height) / 2), (r.visible = !0)),
        t != null && (t.visible = !1))
      : ((this.var_349.x = e.x - this._window.width),
        (this._window.x = e.x + e.width + this._window.width),
        t != null && r != null && ((t.y = (this._window.height - r.height) / 2), (t.visible = !0)),
        r != null && (r.visible = !1)),
      (this.var_349.y = e.y + e.height / 2 - this._window.height / 2),
      (this._window.y = this.var_349.y));
  }
  _r51ded8c03203b6 = n(() => {
    this.closeWindow();
  }, "_r51ded8c03203b6");
  _r285a24f5034aa5 = n(() => {
    (this.var_4207 != null && this._habboHelp?.toolbar?._r2b0be5baed9721(this.var_4207),
      this.closeWindow());
  }, "_r285a24f5034aa5");
  closeWindow() {
    this._window != null && ((this._window.visible = !1), this.dispose());
  }
  registerUpdates() {
    (this._habboHelp?.removeUpdateReceiver(this),
      this._habboHelp?.registerUpdateReceiver(this, 10));
  }
}
