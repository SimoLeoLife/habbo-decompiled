// Extracted from HabboAirLauncher.deobf.js, line 248380.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0b67bba163784c

class {
  constructor(e, r, t, i, s, o) {
    this._main = e;
    this._popup = r;
    this._groupId = i;
    this.var_2523 = s;
    this.var_3514 = o;
    t.procedure = this.onClick;
  }
  static {
    n(this, "UnkClass_0b67bb");
  }
  onClick = n((e) => {
    e.type === u.CLICK &&
      (this._popup.dispose(),
      this._main.connection?.send(
        new UnkMessageComposer_4args_eb224a(this._groupId, this.var_2523, this.var_3514, class_2751.PERMANENTLY_HIDDEN_BY_MOD),
      ));
  }, "onClick");
}
