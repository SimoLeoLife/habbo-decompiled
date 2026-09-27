// Extracted from HabboAirLauncher.deobf.js, line 199160.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/demo/class_2626.as
// Obfuscated name: _ibccba20d9ef3fb

class a extends Ft {
  constructor(r, t, i, s) {
    super();
    this.var_574 = r;
    this.var_1881 = t;
    this._windowManager = i;
    this.var_2234 = s;
    this.init();
  }
  static {
    n(this, "class_2626");
  }
  static ENVIRONMENT_SELECTED_EVENT = "ENVIRONMENT_SELECTED_EVENT";
  var_4962 = null;
  _r2c7ba930b7b92c = -1;
  _r7da748cd9238f7 = "";
  _r01aecd3d7cc142 = null;
  _rfd7ff6ff927040 = null;
  get selectedEnvironment() {
    return this._r7da748cd9238f7;
  }
  _rd6bd47b85b708c() {
    ((this._r2c7ba930b7b92c = Number.MAX_SAFE_INTEGER), this._rbf7ffcbc5a0721());
  }
  dispose() {
    (this._rbf7ffcbc5a0721(),
      (this.var_4962 = null),
      (this.var_574 = null),
      (this.var_1881 = null),
      (this._windowManager = null),
      (this.var_2234 = null),
      super.dispose());
  }
  getEnvironmentName(r) {
    let t = `connection.info.name.${r}`;
    return this.var_1881?.propertyExists(t) ? this.var_1881.getProperty(t) : r;
  }
  getAvailableEnvironments() {
    let r = this.var_1881?.getProperty("live.environment.list") ?? "",
      t = r !== "" ? r.split("/") : [],
      i = this.var_1881?.getProperty("dev.environment.list") ?? "";
    return (i !== "" && (t = t.concat(i.split("/"))), t);
  }
  createListItem(r) {
    let i = _i9f7c5b59a8afd4_(this.var_2234, r)?.content;
    return i == null ? null : (this._windowManager?.buildFromXML(i) ?? null);
  }
  init() {
    if (
      ((this.var_4962 = this.createListItem("login_environment_list_item")),
      this.var_4962 == null || this.var_574 == null)
    )
      return;
    let r = this.getAvailableEnvironments(),
      t = gr.readSOLString(gr.SOL_PROPERTY_ENVIRONMENT) || "d63",
      i = this.var_3386(r);
    for (this._r7da748cd9238f7 = t; this.var_574.numMenuItems > 0;)
      this.var_574.removeMenuItemAt(0);
    for (let s of i) {
      let o = this.var_4962.clone();
      (o?.findChildByName("title") && (o.findChildByName("title").caption = s),
        o != null && this.var_574.addMenuItem(o));
    }
    ((this.var_574.selection = Math.max(0, r.indexOf(t))),
      (this.var_574.procedure = this._ra16574aee58ee1),
      (this._r2c7ba930b7b92c = -1),
      this._r1592b03b65e0a2(!1));
  }
  _r1592b03b65e0a2(r) {
    if (this._disposed || this.var_574 == null || this.var_574.disposed) return;
    let t = this.getAvailableEnvironments();
    if (this._r2c7ba930b7b92c > -1 && this._r2c7ba930b7b92c < this.var_574.numMenuItems) {
      let C = this.var_574._r446126f4f4fa27(this._r2c7ba930b7b92c)?.findChildByName("icon");
      C != null && (C.assetUri = r ? "help_accept_icon" : "help_decline_icon");
    }
    if ((this._r2c7ba930b7b92c++, this._r2c7ba930b7b92c >= t.length)) return;
    let i = t[this._r2c7ba930b7b92c] ?? "",
      s = this.var_1881?.getProperty(`connection.info.host.${i}`) ?? "",
      o = (this.var_1881?.getProperty(`connection.info.port.${i}`) ?? "").split(","),
      d = Number.parseInt(String(o[0] ?? "0"), 10) || 0,
      c = new b2(),
      f = !1;
    (this._rbf7ffcbc5a0721(), (this._r01aecd3d7cc142 = c));
    let l = n(() => {
        (c.removeEventListener?.(M.CONNECT, _),
          c.removeEventListener?.(M.ComponentDependency, h),
          c.removeEventListener?.(M._r8922581ea8bc6e, p),
          c.removeEventListener?.(UnkClass_e40b94._r49a1f77b743ca2, m),
          c.removeEventListener?.(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, v),
          c.removeEventListener?.(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, w),
          this._rfd7ff6ff927040 === l && (this._rfd7ff6ff927040 = null),
          this._r01aecd3d7cc142 === c && (this._r01aecd3d7cc142 = null));
      }, "cleanup"),
      b = n((I, C) => {
        f || ((f = !0), l(), c.connected && c.close(), C && this._r1592b03b65e0a2(I));
      }, "_i3c2130f4ef7569"),
      _ = n((I) => {
        b(!0, !0);
      }, "_i2a797bd69d5aa9"),
      h = n((I) => {
        b(!1, !1);
      }, "onComplete"),
      p = n((I) => {
        b(!1, !1);
      }, "_i15d17f05ee4181"),
      m = n((I) => {
        b(!1, !1);
      }, "_ida4c4a63f8be79"),
      v = n((I) => {
        b(!1, !0);
      }, "_i80804fa7b2a46e"),
      w = n((I) => {
        b(!1, !0);
      }, "_ib0fcf73745d1b4");
    (c.addEventListener(M.CONNECT, _),
      c.addEventListener(M.ComponentDependency, h),
      c.addEventListener(M._r8922581ea8bc6e, p),
      c.addEventListener(UnkClass_e40b94._r49a1f77b743ca2, m),
      c.addEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, v),
      c.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, w),
      (this._rfd7ff6ff927040 = l),
      c.connect(s, d));
  }
  var_3386(r) {
    return r.map((t) => this.getEnvironmentName(t));
  }
  _ra16574aee58ee1 = n((r, t) => {
    if (r.type !== y.const_238 || this.var_574 == null) return;
    let i = this.getAvailableEnvironments(),
      s = this.var_574.selection,
      o = i[s] ?? "";
    ((this._r7da748cd9238f7 = o),
      this.dispatchEvent(new M(a.ENVIRONMENT_SELECTED_EVENT)),
      r.stopPropagation(),
      r.stopImmediatePropagation());
  }, "_ra16574aee58ee1");
  _rbf7ffcbc5a0721() {
    let r = this._r01aecd3d7cc142;
    (this._rfd7ff6ff927040?.(), r?.connected && r.close());
  }
}
