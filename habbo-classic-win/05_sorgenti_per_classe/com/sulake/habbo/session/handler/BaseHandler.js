// Extracted from HabboAirLauncher.deobf.js, line 302227.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/handler/BaseHandler.as
// Obfuscated name: _ib5b587c5c8d999

class {
  static {
    n(this, "BaseHandler");
  }
  _r48494125bd335d = 0;
  var_36;
  var_263;
  _disposed = !1;
  constructor(e, r) {
    ((this.var_36 = e), (this.var_263 = r));
  }
  dispose() {
    ((this.var_36 = null), (this.var_263 = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get connection() {
    return this.var_36;
  }
  get listener() {
    return this.var_263;
  }
  dispatch(e) {
    this.var_263?.events.dispatchEvent?.(e);
  }
}
