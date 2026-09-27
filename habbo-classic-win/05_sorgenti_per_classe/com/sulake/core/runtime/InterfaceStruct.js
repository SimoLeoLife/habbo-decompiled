// Extracted from HabboAirLauncher.deobf.js, line 59122.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/InterfaceStruct.as
// Obfuscated name: _i3fa266abdd8556

class {
  static {
    n(this, "InterfaceStruct");
  }
  var_2651;
  _iis;
  _unknown;
  _references = 0;
  constructor(e, r) {
    ((this.var_2651 = e), (this._iis = _iad1dc21ca35e21(e)), (this._unknown = r));
  }
  get iid() {
    return this.var_2651;
  }
  get iis() {
    return this._iis ?? "";
  }
  get unknown() {
    return this._unknown;
  }
  get references() {
    return this._references;
  }
  get disposed() {
    return this._unknown == null;
  }
  dispose() {
    ((this.var_2651 = null),
      (this._iis = null),
      (this._unknown = null),
      (this._references = 0));
  }
  reserve() {
    return ((this._references += 1), this._references);
  }
  release() {
    return (this._references > 0 && (this._references -= 1), this._references);
  }
}
