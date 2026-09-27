// Extracted from HabboAirLauncher.deobf.js, line 337589.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i044760197c5b0d

class extends class_2354 {
  static {
    n(this, "UnkSubclassOf_class_2354_044760");
  }
  var_280 = null;
  var_3828 = "";
  _rb19445ebca2684 = -1;
  get id() {
    return this.var_3076;
  }
  get length() {
    return this.var_4161;
  }
  get name() {
    return this._songName;
  }
  get creator() {
    return this.var_4089;
  }
  get loaded() {
    return this.var_280 == null ? !1 : this.var_280.ready;
  }
  get _r551c6e37b9b07d() {
    return this.var_280;
  }
  get _race451481abd84() {
    return this.var_3828;
  }
  get _r398f5a77bf5446() {
    return this._rb19445ebca2684;
  }
  set _r551c6e37b9b07d(e) {
    this.var_280 = e;
  }
  set _race451481abd84(e) {
    this.var_3828 = e;
  }
  set _r398f5a77bf5446(e) {
    this._rb19445ebca2684 = e;
  }
  constructor(e, r, t, i, s) {
    (super(e, r, t, i), (this.var_280 = s));
  }
}
