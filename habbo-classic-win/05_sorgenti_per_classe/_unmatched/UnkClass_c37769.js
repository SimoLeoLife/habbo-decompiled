// Extracted from HabboAirLauncher.deobf.js, line 50347.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic37769bb243354

class a {
  static {
    n(this, "UnkClass_c37769");
  }
  static get available() {
    return typeof globalThis.window < "u";
  }
  static _r77b8521b16f762(e, r) {
    return a.available
      ? r == null
        ? (Reflect.deleteProperty(globalThis, e), !0)
        : (Reflect.set(globalThis, e, r), !0)
      : !1;
  }
  static call(e, ...r) {
    if (!a.available) return null;
    let t = this._re02c0391811ada(e);
    if (t != null) return typeof t.value == "function" ? t.value.apply(t.owner, r) : t.value;
    let i = globalThis.eval(`(${e})`);
    return typeof i == "function" ? i(...r) : i;
  }
  static _re02c0391811ada(e) {
    if (!/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/.test(e)) return null;
    let r = e.split("."),
      t = globalThis,
      i = globalThis;
    for (let s = 0; s < r.length; s++) {
      let o = r[s];
      if (s === 0 && (o === "window" || o === "globalThis")) {
        ((i = globalThis), (t = globalThis));
        continue;
      }
      if (((t = i), i == null)) return null;
      i = Reflect.get(Object(i), o);
    }
    return { owner: t, value: i };
  }
}
