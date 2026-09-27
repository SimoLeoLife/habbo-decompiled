// Estratto da HabboAirLauncher.deobf.js, riga 204747.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/ForumSettingsView.as
// Nome offuscato: _ib94d9beacd8e1f

class a {
  static {
    n(this, "ForumSettingsView");
  }
  static const_1098 = 0.5;
  var_63;
  var_157;
  _window;
  _r8a039e4742cac0;
  _rce1f7be2c9ee7e;
  _r92cc8f30a27697;
  _r8b35ecfe99fe29;
  var_95;
  var_2086 = 0;
  var_2095 = 0;
  var_3525 = 0;
  var_3756 = 0;
  constructor(e, r, t, i) {
    ((this.var_157 = e),
      (this.var_63 = this.var_157.controller),
      (this.var_95 = i),
      (this._window = this.var_63.windowManager.buildFromXML(
        this.var_63.assets.getAssetByName("groupforum_forum_settings_xml")?.content,
      )),
      (this._window.x = r));
    let s = this.var_63.windowManager.getDesktop(1)?.width ?? this._window.width;
    (this._window.x + this._window.width > s &&
      (this._window.x = s - this._window.width),
      (this._window.y = t),
      this.initControls());
  }
  focus(e) {
    (this.var_95 !== e && ((this.var_95 = e), this.initControls()),
      this._window.activate());
  }
  dispose() {
    ((this.var_63._r78622efc9c872a = null), this._window.dispose());
  }
  initControls() {
    let e = k1.initTopAreaForForum(this._window, this.var_95);
    (e.removeEventListener(u.CLICK, this._r01a671f0451144),
      e.addEventListener(u.CLICK, this._r01a671f0451144));
    let r = this._window.findChildByName("cancel_btn");
    (r?.removeEventListener(u.CLICK, this._r9a98d7761d81c4),
      r?.addEventListener(u.CLICK, this._r9a98d7761d81c4));
    let t = this._window.findChildByName("header_button_close");
    (t?.removeEventListener(u.CLICK, this._r9a98d7761d81c4),
      t?.addEventListener(u.CLICK, this._r9a98d7761d81c4));
    let i = this._window.findChildByName("ok_btn");
    (i?.removeEventListener(u.CLICK, this._r6f24f74c8e4dc2),
      i?.addEventListener(u.CLICK, this._r6f24f74c8e4dc2),
      (this._r8a039e4742cac0 = this._window.findChildByName("read_selector")),
      this._r8a039e4742cac0.addEventListener(u.OVER, this.var_2761),
      this._r4b15f6ecfef2e6(this._r8a039e4742cac0),
      (this._rce1f7be2c9ee7e = this._window.findChildByName("post_message_selector")),
      this._rce1f7be2c9ee7e.addEventListener(u.OVER, this._r4e4f3229edb8cb),
      this._r4b15f6ecfef2e6(this._rce1f7be2c9ee7e),
      (this._r92cc8f30a27697 = this._window.findChildByName("post_thread_selector")),
      this._r92cc8f30a27697.addEventListener(u.OVER, this._r2e5ab4c9f0e3b9),
      this._r4b15f6ecfef2e6(this._r92cc8f30a27697),
      (this._r8b35ecfe99fe29 = this._window.findChildByName("moderate_selector")),
      this._r8b35ecfe99fe29.addEventListener(u.OVER, this._r25678ea04c84f1),
      this._r4b15f6ecfef2e6(this._r8b35ecfe99fe29),
      (this.var_2086 = a.setSelectorState(
        this._r8a039e4742cac0,
        0,
        this.var_95._r54097b0afababa,
      )),
      (this.var_2095 = a.setSelectorState(
        this._rce1f7be2c9ee7e,
        this.var_2086,
        this.var_95._r4a7a1f3d85cf79,
      )),
      (this.var_3525 = a.setSelectorState(
        this._r92cc8f30a27697,
        this.var_2095,
        this.var_95._r35ee8b88a5bbff,
      )),
      (this.var_3756 = a.setSelectorState(
        this._r8b35ecfe99fe29,
        2,
        this.var_95._r5a8a98222f4b22,
      )));
  }
  _r4b15f6ecfef2e6(e) {
    for (let r = 0; r < e.numSelectables; r++) {
      let t = e.getSelectableAt(r);
      (t?.removeEventListener(y.const_238, this._rbec63cdd7022aa),
        t?.addEventListener(y.const_238, this._rbec63cdd7022aa));
    }
  }
  static setSelectorState(e, r, t) {
    let i = t;
    i < r && (i = r);
    for (let s = 0; s < r; s++) {
      let o = e._rf1edf3aad44c96(String(s));
      if (o != null) {
        (o.disable(), (o.blend = a.const_1098));
        let d = e.parent?.findChildByName(`label${s}`);
        d != null && (d.blend = a.const_1098);
      }
    }
    for (let s = r; s < 4; s++) {
      let o = e._rf1edf3aad44c96(String(s));
      if (o != null) {
        (o.enable(), (o.blend = 1));
        let d = e.parent?.findChildByName(`label${s}`);
        (d != null && (d.blend = 1), s === i && e.setSelected(o));
      }
    }
    return i;
  }
  static getSelectorState(e) {
    return Number(e.getSelected()?.name ?? 0);
  }
  _rbec63cdd7022aa = n(() => {
    ((this.var_2086 = a.getSelectorState(this._r8a039e4742cac0)),
      (this.var_2095 = a.setSelectorState(
        this._rce1f7be2c9ee7e,
        this.var_2086,
        a.getSelectorState(this._rce1f7be2c9ee7e),
      )),
      (this.var_3525 = a.setSelectorState(
        this._r92cc8f30a27697,
        this.var_2095,
        a.getSelectorState(this._r92cc8f30a27697),
      )),
      (this.var_3756 = a.getSelectorState(this._r8b35ecfe99fe29)));
  }, "_rbec63cdd7022aa");
  _r01a671f0451144 = n(() => {
    this.var_63.context._r6b6c989018eb05(`group/${this.var_95.groupId}`);
  }, "_r01a671f0451144");
  _r6f24f74c8e4dc2 = n(() => {
    (this.var_63.updateForumSettings(
      this.var_95.groupId,
      this.var_2086,
      this.var_2095,
      this.var_3525,
      this.var_3756,
    ),
      this.dispose());
  }, "_r6f24f74c8e4dc2");
  _r9a98d7761d81c4 = n(() => {
    this.dispose();
  }, "_r9a98d7761d81c4");
  var_2761 = n(() => {
    this.var_63.tracking?._rff30e139de703a("InterfaceExplorer", "hover", "forum.can.read.seen");
  }, "var_2761");
  _r4e4f3229edb8cb = n(() => {
    this.var_63.tracking?._rff30e139de703a("InterfaceExplorer", "hover", "forum.can.post.seen");
  }, "_r4e4f3229edb8cb");
  _r2e5ab4c9f0e3b9 = n(() => {
    this.var_63.tracking?._rff30e139de703a(
      "InterfaceExplorer",
      "hover",
      "forum.can.start.thread.seen",
    );
  }, "_r2e5ab4c9f0e3b9");
  _r25678ea04c84f1 = n(() => {
    this.var_63.tracking?._rff30e139de703a("InterfaceExplorer", "hover", "forum.can.moderate.seen");
  }, "_r25678ea04c84f1");
}
