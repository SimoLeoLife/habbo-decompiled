// Estratto da HabboAirLauncher.deobf.js, riga 337292.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/HabboSoundBase.as
// Nome offuscato: _if98cddcc8836a1

class {
  static {
    n(this, "HabboSoundBase");
  }
  _soundObject = null;
  _complete = !1;
  _volume = 1;
  var_3542 = 0;
  _rd392f1f5db68be = 0;
  _r3a0b61a3c33285 = 0;
  var_280 = null;
  _r8dc108cdeff05f() {
    return this.var_280;
  }
  _r9df724620c0a0f() {
    return this._soundObject;
  }
  _rf2151d6e5f2821(e) {
    this._soundObject = e;
  }
  _raa570a8ea46ce5(e) {
    this._complete = e;
  }
  constructor(e, r = 0) {
    ((this.var_280 = e),
      this.var_280.addEventListener(M.ComponentDependency, this.onComplete),
      (this.var_3542 = r));
  }
  dispose() {
    (this.stop(),
      this.var_280 != null &&
        this.var_280.removeEventListener(M.ComponentDependency, this.onComplete),
      (this._soundObject = null),
      (this.var_280 = null));
  }
  play(e = 0) {
    return this.var_280 == null
      ? !1
      : ((this._complete = !1),
        (this._soundObject = this.var_280.play(e * 1e3, this.var_3542)),
        this.setChannelVolume(this._volume),
        !0);
  }
  stop() {
    return (this._soundObject?.stop(), !0);
  }
  get volume() {
    return this._volume;
  }
  set volume(e) {
    ((this._volume = e), this.setChannelVolume(e));
  }
  setChannelVolume(e) {
    this._soundObject != null && (this._soundObject._r24165a2568d0c7 = new _i366982a182b463(e));
  }
  get position() {
    return this._soundObject?.position ?? 0;
  }
  set position(e) {
    this.var_280 != null &&
      (this._soundObject?.stop(),
      (this._complete = !1),
      (this._soundObject = this.var_280.play(e, this.var_3542)),
      this.setChannelVolume(this._volume));
  }
  get length() {
    return this.var_280?.length ?? 0;
  }
  get ready() {
    return this.var_280 == null ? !1 : !this.var_280._r2faa584912d964;
  }
  get finished() {
    return !this._complete;
  }
  get _r754bf5401e8707() {
    return this._rd392f1f5db68be;
  }
  set _r754bf5401e8707(e) {
    this._rd392f1f5db68be = e;
  }
  get _r8d76cdbd314434() {
    return this._r3a0b61a3c33285;
  }
  set _r8d76cdbd314434(e) {
    this._r3a0b61a3c33285 = e;
  }
  onComplete = n((e) => {
    this._complete = !0;
  }, "onComplete");
}
