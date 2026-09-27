// Extracted from HabboAirLauncher.deobf.js, line 155238.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1539123571f770

class a {
  constructor(e, r) {
    this._r48e2793cc8292a = e;
    this._r6d3f4ac9b6375d = r;
  }
  static {
    n(this, "UnkClass_153912");
  }
  static _r4491cbb76c942d = "invalid-captcha";
  var_263 = null;
  _r2870fed9633dc2 = null;
  _rf8d09725fce4af = 0;
  get uri() {
    return this._r6d3f4ac9b6375d;
  }
  get _r9a35f195465ba4() {
    return this._r48e2793cc8292a;
  }
  dispose() {
    ((this.var_263 = null),
      (this._r2870fed9633dc2 = null),
      (this._r48e2793cc8292a = ""),
      (this._r6d3f4ac9b6375d = ""),
      (this._rf8d09725fce4af = 0));
  }
  _r27cab0ca7d9ed7(e, r) {
    ((r.method = this._r48e2793cc8292a), (this._r2870fed9633dc2 = r), (this.var_263 = e));
    let t = new UnkEventDispatcherWrapperSubclass_b182ac();
    ((t._rb1fac8ba8605e0 = UnkConstants_70a4b4.TEXT), this._r45d57a5d2ea715(t), t.load(r));
  }
  _r45d57a5d2ea715(e) {
    (e.addEventListener(M.ComponentDependency, this._rc7d62d80568ccb),
      e.addEventListener(M.OPEN, this._r32a0c5c371cc46),
      e.addEventListener(UnkClass_e40b94.PROGRESS, this._rf3999faafa916a),
      e.addEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._r54688d5d6726e6),
      e.addEventListener(UnkClass_9006bf._re0bd97c8c9195c, this._r2284899e7f0ec9),
      e.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._r3662a3785b0328));
  }
  _r0c517d4090352b(e) {
    (e.removeEventListener(M.ComponentDependency, this._rc7d62d80568ccb),
      e.removeEventListener(M.OPEN, this._r32a0c5c371cc46),
      e.removeEventListener(UnkClass_e40b94.PROGRESS, this._rf3999faafa916a),
      e.removeEventListener(UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, this._r54688d5d6726e6),
      e.removeEventListener(UnkClass_9006bf._re0bd97c8c9195c, this._r2284899e7f0ec9),
      e.removeEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this._r3662a3785b0328));
  }
  _rc7d62d80568ccb = n((e) => {
    let r = e.target;
    if (r == null || (this._r0c517d4090352b(r), this.var_263 == null)) return;
    let t = typeof r.data == "string" ? r.data : String(r.data ?? ""),
      i = t.startsWith("{") || t.startsWith("["),
      s = t.startsWith("<");
    try {
      let o = t;
      if (
        (i ? (o = JSON.parse(t)) : s && (o = t),
        this._rf8d09725fce4af >= 400 || (i && typeof o == "object" && o != null && "error" in o))
      ) {
        let d = o ?? {},
          c = d.error === a._r4491cbb76c942d || d.message === a._r4491cbb76c942d;
        this.var_263._r62a583b61944a0(
          this._r6d3f4ac9b6375d,
          this._rf8d09725fce4af,
          i ? String(d.error ?? "") : "",
          o,
          c,
        );
      } else this.var_263._rad4ea192ae10f0(this._r6d3f4ac9b6375d, o);
    } catch {
      this.var_263._r8108e27836821f(this._r6d3f4ac9b6375d, r.data);
    }
  }, "_rc7d62d80568ccb");
  _r32a0c5c371cc46 = n((e) => {}, "_r32a0c5c371cc46");
  _rf3999faafa916a = n((e) => {}, "_rf3999faafa916a");
  _r54688d5d6726e6 = n((e) => {
    let r = e.target;
    (r != null && this._r0c517d4090352b(r),
      this.var_263?._r62a583b61944a0(this._r6d3f4ac9b6375d, -1, UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e, null));
  }, "_r54688d5d6726e6");
  _r2284899e7f0ec9 = n((e) => {
    ((this._rf8d09725fce4af = e.status), this._r2870fed9633dc2);
  }, "_r2284899e7f0ec9");
  _r3662a3785b0328 = n((e) => {
    let r = e.target;
    r != null && this._r0c517d4090352b(r);
    let t = { message: r?.data ?? e.text },
      i = !1;
    if (typeof r?.data == "string" && r.data.length > 0)
      try {
        let s = JSON.parse(r.data);
        ((t = s), (i = s.captcha === !0));
      } catch {
        t = r.data;
      }
    this.var_263?._r62a583b61944a0(this._r6d3f4ac9b6375d, -2, UnkErrorEventSubclass_207e02._rb9739f8a5177c3, t, i);
  }, "_r3662a3785b0328");
}
