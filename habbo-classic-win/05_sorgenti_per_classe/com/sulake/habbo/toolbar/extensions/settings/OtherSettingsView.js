// Estratto da HabboAirLauncher.deobf.js, riga 342925.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/settings/OtherSettingsView.as
// Nome offuscato: _i4c372bcdde2472

class {
  static {
    n(this, "OtherSettingsView");
  }
  _window = null;
  _toolbar;
  _r53f292ec37c45a = null;
  _r4217385c122fb9 = null;
  constructor(e) {
    ((this._toolbar = e), this.createWindow());
  }
  get window() {
    if (this._window == null) throw new Error("Other settings window is not available.");
    return this._window;
  }
  dispose() {
    this._window != null &&
      (this._r53f292ec37c45a != null &&
        (this._r53f292ec37c45a.removeEventListener(y.const_238, this._r43cd00ff835ac3),
        (this._r53f292ec37c45a = null)),
      this._r4217385c122fb9?.removeEventListener(y.const_238, this._rf83d558325619f),
      (this._r4217385c122fb9 = null),
      this._window.dispose(),
      (this._window = null));
  }
  createWindow() {
    if (this._toolbar == null) return;
    let e = this._toolbar.assets.getAssetByName("me_menu_other_settings_xml");
    if (
      ((this._window = this._toolbar.windowManager.buildFromXML(e?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct other settings window from XML.");
    ((this._window.procedure = this.onButtonClicked),
      (this._window.findChildByName("ignore_room_invites_checkbox").isSelected =
        this._toolbar.messenger?._r9cbce3346eb027() ?? !1),
      (this._window.findChildByName("disable_wired_whisper_checkbox").isSelected =
        this._toolbar._r41f5cc7d3516ce?._r7722c9aa63290b ?? !1),
      (this._r53f292ec37c45a = this._window.findChildByName("online_indicator_preference")),
      this._r53f292ec37c45a != null &&
        (this._r53f292ec37c45a.populate([
          this._toolbar.localization?.getLocalization(
            "memenu.settings.other.friend.online.notification.0",
            "Everyone",
          ) ?? "Everyone",
          this._toolbar.localization?.getLocalization(
            "memenu.settings.other.friend.online.notification.1",
            "Users in my relationship status",
          ) ?? "Users in my relationship status",
          this._toolbar.localization?.getLocalization(
            "memenu.settings.other.friend.online.notification.2",
            "Nobody",
          ) ?? "Nobody",
        ]),
        (this._r53f292ec37c45a.selection =
          this._toolbar.messenger?._r12ae61c60526eb() ?? class_2191.const_120),
        this._r53f292ec37c45a.addEventListener(y.const_238, this._r43cd00ff835ac3)));
    let r = this._window.findChildByName("disable_room_camera_follow"),
      t = this._toolbar.getBoolean("room.camera.follow_user");
    (r != null && (r.visible = t),
      t &&
        (this._window.findChildByName("disable_room_camera_follow_checkbox").isSelected =
          this._toolbar.sessionDataManager?.isRoomCameraFollowDisabled ?? !1));
    let i = this._toolbar.getBoolean("sms.identity.verification.enabled"),
      s =
        this._toolbar.getInteger("phone.verification.status", class_3718.NON_EXISTING) ===
        class_3718.VERIFIED,
      o =
        this._toolbar.getInteger("phone.collection.status", class_3585.NON_EXISTING) ===
        class_3585.NEVER_AGAIN,
      d = this._toolbar.getBoolean("sms.identity.verification.button.enabled"),
      c =
        this._toolbar.getInteger("phone.collection.status", class_3585.NON_EXISTING) ===
        class_3585.NON_EXISTING,
      f = i && !s && (o || (d && c)),
      l = this._window.findChildByName("btn_reset_phone_number_collection");
    l != null && (l.visible = f);
    let b = this._window.findChildByName("graphics_settings");
    (b != null && (b.visible = _if28e28c93a63c8.host != null),
      _if28e28c93a63c8.host != null &&
        ((this._r4217385c122fb9 = this._window.findChildByName("graphics_renderer")),
        this._r4217385c122fb9?.populate(["WebGL", "WebGPU"]),
        this._r4217385c122fb9 != null &&
          ((this._r4217385c122fb9.selection = _if28e28c93a63c8.host.preference === "webgpu" ? 1 : 0),
          this._r4217385c122fb9.addEventListener(y.const_238, this._rf83d558325619f)),
        (this._window.findChildByName("graphics_renderer_label").caption = this.localize(
          "memenu.settings.graphics.renderer",
          "Graphics renderer",
        )),
        (this._window.findChildByName("graphics_renderer_apply").caption = this.localize(
          "memenu.settings.graphics.apply",
          "Apply and reload",
        )),
        this._rea86f930f2ca32()),
      this._r751258d83e0205());
  }
  _r751258d83e0205() {
    if (this._window == null) return;
    let e = this._window.findChildByName("other_settings_options"),
      r = this._window.findChildByName("graphics_settings"),
      t = this._window.findChildByName("back_btn");
    e == null ||
      r == null ||
      t == null ||
      ((r.y = e.bottom + 12),
      (t.y = (r.visible ? r.bottom : e.bottom) + 12),
      (this._window.height = t.bottom + 12));
  }
  localize(e, r) {
    return this._toolbar?.localization?.getLocalization(e, r) ?? r;
  }
  _rf83d558325619f = n(() => {
    this._rea86f930f2ca32();
  }, "_rf83d558325619f");
  _rea86f930f2ca32() {
    let e = _if28e28c93a63c8.host;
    if (e == null || this._window == null) return;
    let r = this._r4217385c122fb9?.selection,
      i = (r === 0 || r === 1) && (r === 1 ? "webgpu" : "webgl") !== e.preference,
      s = this._window.findChildByName("graphics_renderer_apply");
    (i ? s?.enable() : s?.disable(),
      (this._window.findChildByName("graphics_renderer_status").caption = i
        ? this.localize("memenu.settings.graphics.reload", "Reloading will reconnect you to Habbo.")
        : e.preference !== e._r64dfed7398ec9d
          ? this.localize("memenu.settings.graphics.fallback", "WebGPU is unavailable. Using WebGL.")
          : e._r64dfed7398ec9d === "webgpu"
            ? this.localize("memenu.settings.graphics.active.webgpu", "Currently using WebGPU.")
            : this.localize("memenu.settings.graphics.active.webgl", "Currently using WebGL.")));
  }
  _r43cd00ff835ac3 = n((e) => {
    let r = this._r53f292ec37c45a?.selection ?? -1;
    r < class_2191.const_120 ||
      (this._toolbar?.messenger?._r886f5f3217a046(r),
      this._toolbar?.connection?.send(new _ifcfff33b14b31b(r)));
  }, "_r43cd00ff835ac3");
  onButtonClicked = n((e, r) => {
    if (!(e.type !== u.CLICK || this._toolbar == null || this._window == null))
      switch (r.name) {
        case "graphics_renderer_apply": {
          let t = this._r4217385c122fb9?.selection;
          if (t !== 0 && t !== 1) break;
          let i = _if28e28c93a63c8.host,
            s = t === 1 ? "webgpu" : "webgl";
          i != null &&
            s !== i.preference &&
            !i._r856eff13995639(s) &&
            (this._window.findChildByName("graphics_renderer_status").caption =
              this.localize(
                "memenu.settings.graphics.save.failed",
                "Could not save this setting. Allow local storage and try again.",
              ));
          break;
        }
        case "back_btn":
          this.dispose();
          break;
        case "ignore_room_invites_checkbox":
          if (this._toolbar.messenger != null) {
            let t = this._window.findChildByName("ignore_room_invites_checkbox")?.isSelected ?? !1;
            (this._toolbar.messenger._r4f6b546b4abacd(t),
              this._toolbar.connection?.send(
                new _i3328024d70ceb5(this._toolbar.messenger._r9cbce3346eb027()),
              ));
          }
          break;
        case "disable_wired_whisper_checkbox":
          this._toolbar._r41f5cc7d3516ce != null &&
            (this._toolbar._r41f5cc7d3516ce._r7722c9aa63290b =
              this._window.findChildByName("disable_wired_whisper_checkbox")?.isSelected ?? !1);
          break;
        case "disable_room_camera_follow_checkbox": {
          let t =
            this._window.findChildByName("disable_room_camera_follow_checkbox")?.isSelected ?? !1;
          (this._toolbar.connection?.send(new _i0dc938c014aed7(t)),
            this._toolbar.sessionDataManager?.setRoomCameraFollowDisabled(t));
          break;
        }
        case "btn_reset_phone_number_collection":
          ((this._window.findChildByName("btn_reset_phone_number_collection").visible = !1),
            this._r751258d83e0205(),
            this._toolbar.connection?.send(new _ib7700ceb78cad6()));
          break;
      }
  }, "onButtonClicked");
}
