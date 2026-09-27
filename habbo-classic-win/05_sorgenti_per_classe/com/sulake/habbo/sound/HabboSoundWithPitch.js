// Estratto da HabboAirLauncher.deobf.js, riga 337382.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/HabboSoundWithPitch.as
// Nome offuscato: _idd2bf75d7f3a2f

class a extends HabboSoundBase {
  static {
    n(this, "HabboSoundWithPitch");
  }
  static SILENCE_MS = 50;
  static FADEIN_MS = 175;
  var_2260;
  SoundTransform;
  _loadedSamples = null;
  _r7efc3435bc5ea4 = 0;
  _rb5f52d564ad835 = 0;
  _r86285199c0b216 = 0;
  _rd298e51196fb41 = !1;
  constructor(e, r = 1) {
    (super(e),
      (this.var_2260 = r),
      (this.SoundTransform = new Mf()),
      this.extractMonoSamples(),
      this.setPitch(this.var_2260));
  }
  dispose() {
    (super.dispose(),
      (this.SoundTransform = null),
      this._loadedSamples != null && (this._loadedSamples = null));
  }
  play(e = 0) {
    return (
      this.stop(),
      (this._r86285199c0b216 = this._rb5f52d564ad835),
      (this._rd298e51196fb41 = !1),
      this._raa570a8ea46ce5(!1),
      this._rf2151d6e5f2821(this.SoundTransform?.play(0, 0, new _i366982a182b463(0)) ?? null),
      !0
    );
  }
  stop() {
    return (this._r9df724620c0a0f()?.stop(), !0);
  }
  update(e) {
    this._rb5f52d564ad835 += e;
    let r = this._rb5f52d564ad835 - this._r86285199c0b216;
    this._r86285199c0b216 > 0 && r < a.SILENCE_MS
      ? this.setChannelVolume(0)
      : this._r86285199c0b216 > 0 && r >= a.SILENCE_MS && r < a.FADEIN_MS
        ? this.setChannelVolume(this.volume * (r / a.FADEIN_MS))
        : this._rd298e51196fb41 || (this.setChannelVolume(this.volume), (this._rd298e51196fb41 = !0));
  }
  get disposed() {
    return this._loadedSamples == null;
  }
  setPitch(e) {
    if (this._loadedSamples == null || this.SoundTransform == null) return;
    this.var_2260 = e;
    let r = new Uint8Array(Math.max(0, Math.floor(this._loadedSamples.length * this.var_2260)) * 8),
      t = new DataView(r.buffer),
      i = Math.floor(this._loadedSamples.length * this.var_2260),
      s = 0,
      o = 0;
    for (let d = 0; d < i; d++) {
      let c = Math.floor(s);
      if (c >= this._loadedSamples.length) break;
      let f = this._loadedSamples[c] ?? 0;
      (t.setFloat32(o, f, !1), t.setFloat32(o + 4, f, !1), (o += 8), (s += this.var_2260));
    }
    this.SoundTransform._r94de227ce9fc1c(re._rd6d760d92a9f3f(r.subarray(0, o)), o / 8, "float");
  }
  extractMonoSamples() {
    let r = this._r8dc108cdeff05f()?._ra6a3fefbedd9f0?.getChannelData(0);
    if (r == null) {
      ((this._loadedSamples = new Float32Array(0)), (this._r7efc3435bc5ea4 = 0));
      return;
    }
    ((this._r7efc3435bc5ea4 = r.length), (this._loadedSamples = Float32Array.from(r)));
  }
}
