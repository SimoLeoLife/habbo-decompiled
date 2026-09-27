// Estratto da HabboAirLauncher.deobf.js, riga 338746.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/trax/TraxSequencer.as
// Nome offuscato: _ic03dd2a77de473

class a {
  constructor(e, r, t, i) {
    this.var_3076 = e;
    this._rf79cb043e97476 = r;
    this._r8fb876fcd9b23c = t;
    this._events = i;
  }
  static {
    n(this, "TraxSequencer");
  }
  static SAMPLES_PER_SECOND = 44100;
  static BUFFER_LENGTH = 8192;
  static _r32f4fd135254b4 = 50;
  static _rca9ae40ca16b01 = 88e3;
  static _rab81e157d46598 = 88e3;
  static _rd07b681d047472 = new Array(a.BUFFER_LENGTH).fill(0);
  static SAMPLES_PER_BAR = 88200;
  static ROUND_UP_THRESHOLD_BIAS = 0.875;
  _disposed = !1;
  _volume = 1;
  _r7267d672f84764 = new Mf();
  _soundObject = null;
  _ready = !0;
  _r2b7f3cec4983c0 = 0;
  _r452bb3fd274d0e = 0;
  _rd8b7b2075eb025 = [];
  _r60e5d893454950 = !1;
  var_988 = !0;
  _r3c5134e19d504f = 0;
  _rcdf7fc43ae2e69 = 0;
  _fadeOutLengthSamples = 0;
  _r5983c96ac74ba2 = null;
  _r89a1197e3ffa95 = null;
  _re74ef8699c9cc1 = !1;
  _r573f50a390af26 = 0;
  _r7264eaba106414 = 0;
  _rdb27aaac66e90c = 0;
  set position(e) {
    this._r452bb3fd274d0e = Math.max(0, Math.floor(e * a.SAMPLES_PER_SECOND));
  }
  get volume() {
    return this._volume;
  }
  get position() {
    return this._soundObject != null
      ? this._r573f50a390af26 / a.SAMPLES_PER_SECOND + this._soundObject.position / 1e3
      : this._r452bb3fd274d0e / a.SAMPLES_PER_SECOND;
  }
  get ready() {
    return this._ready;
  }
  set ready(e) {
    this._ready = e;
  }
  get finished() {
    return this.var_988;
  }
  get _r754bf5401e8707() {
    return this._fadeOutLengthSamples / a.SAMPLES_PER_SECOND;
  }
  set _r754bf5401e8707(e) {
    this._fadeOutLengthSamples = Math.floor(e * a.SAMPLES_PER_SECOND);
  }
  get _r8d76cdbd314434() {
    return this._rcdf7fc43ae2e69 / a.SAMPLES_PER_SECOND;
  }
  set _r8d76cdbd314434(e) {
    this._rcdf7fc43ae2e69 = Math.floor(e * a.SAMPLES_PER_SECOND);
  }
  get _ra0f61d5ad942d5() {
    return this._rf79cb043e97476;
  }
  set volume(e) {
    ((this._volume = e),
      this._soundObject != null &&
        (this._soundObject._r24165a2568d0c7 = new _i366982a182b463(this._volume)));
  }
  get length() {
    return this._r3c5134e19d504f / a.SAMPLES_PER_SECOND;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._r0d928c86333564(),
      (this._rd8b7b2075eb025 = null),
      (this._events = null),
      (this._r8fb876fcd9b23c = null),
      (this._rf79cb043e97476 = null),
      (this._disposed = !0));
  }
  prepare() {
    return !(
      !this._ready ||
      (!this._r60e5d893454950 &&
        this._rf79cb043e97476 != null &&
        ((this._re74ef8699c9cc1 =
          this._rf79cb043e97476.hasMetaData && this._rf79cb043e97476.metaCutMode),
        !(this._re74ef8699c9cc1 ? this._r1c90ea36c1bb06() : this._rcbe4ef6fbb0410())))
    );
  }
  _rcbe4ef6fbb0410() {
    if (this._rd8b7b2075eb025 == null) return !1;
    let e = Date.now();
    for (let r of this._rf79cb043e97476.channels) {
      let t = new B(),
        i = 0,
        s = 0;
      for (let o = 0; o < r.itemCount; o++) {
        let d = r.getItem(o),
          c = d == null ? null : this._r8fb876fcd9b23c.getValue(d.id);
        if (c == null || d == null) return !1;
        c.setUsageFromSong(this.var_3076, e);
        let f = this._raefd6783dd05c4(c.length),
          l = Math.floor(d.length / f);
        for (let b = 0; b < l; b++) (d.id !== 0 && t.add(i, c), (s += f), (i = s * a._rab81e157d46598));
        this._r3c5134e19d504f < i && (this._r3c5134e19d504f = i);
      }
      this._rd8b7b2075eb025.push(t);
    }
    return ((this._r60e5d893454950 = !0), !0);
  }
  _r1c90ea36c1bb06() {
    if (this._rd8b7b2075eb025 == null) return !1;
    let e = Date.now();
    for (let r of this._rf79cb043e97476.channels) {
      let t = new B(),
        i = 0,
        s = 0,
        o = !1;
      for (let d = 0; d < r.itemCount; d++) {
        let c = r.getItem(d),
          f = c == null ? null : this._r8fb876fcd9b23c.getValue(c.id);
        if (f == null || c == null) return !1;
        f.setUsageFromSong(this.var_3076, e);
        let l = s,
          b = i,
          _ = this._raefd6783dd05c4(f.length),
          h = c.length;
        for (; l < s + h;)
          ((c.id !== 0 || o) && (t.add(b, f), (o = !1)),
            (l += _),
            (b = l * a._rab81e157d46598),
            l > s + h && (o = !0));
        ((s += c.length),
          (i = s * a._rab81e157d46598),
          this._r3c5134e19d504f < i && (this._r3c5134e19d504f = i));
      }
      this._rd8b7b2075eb025.push(t);
    }
    return ((this._r60e5d893454950 = !0), !0);
  }
  play(e = 0) {
    if (!this.prepare()) return !1;
    (this._rf69c7ababc6bdd(),
      this._soundObject != null && this._r0d928c86333564(),
      (this.var_988 = !1),
      (this._r2b7f3cec4983c0 = Math.floor(e * a.SAMPLES_PER_SECOND)));
    let r = this._r452bb3fd274d0e;
    this._r573f50a390af26 = r;
    let t = this._rb7d21b785720a2();
    return (
      (this._r452bb3fd274d0e = r),
      (this._r7267d672f84764 = new Mf()),
      this._r7267d672f84764._r94de227ce9fc1c(t.bytes, t.samples, "float"),
      (this._soundObject = this._r7267d672f84764.play(0, 0, new _i366982a182b463(this._volume))),
      this._soundObject?.addEventListener(M.ComponentDependency, this._rc4450c462f6e19),
      !0
    );
  }
  render(e) {
    if (!this.prepare()) return !1;
    let r = this._r452bb3fd274d0e,
      t = this._rb7d21b785720a2();
    for (t.bytes.position = 0; t.bytes.bytesAvailable >= 4;) e.data.writeFloat(t.bytes.readFloat());
    return ((this._r452bb3fd274d0e = r), !0);
  }
  stop() {
    return (
      this._fadeOutLengthSamples > 0 && !this.var_988 ? this.stopWithFadeout() : this.playingComplete(),
      !0
    );
  }
  _r0d928c86333564() {
    (this._r89b4540df20dac(),
      this._soundObject?.removeEventListener(M.ComponentDependency, this._rc4450c462f6e19),
      this._soundObject?.stop(),
      (this._soundObject = null));
  }
  stopWithFadeout() {
    this._r5983c96ac74ba2 == null &&
      ((this._r7264eaba106414 = _ia411d8d8194a3a()),
      (this._rdb27aaac66e90c = this._soundObject?._r24165a2568d0c7.volume ?? this._volume),
      (this._r5983c96ac74ba2 = new _i05394ecc0c0c4d(a._r32f4fd135254b4)),
      this._r5983c96ac74ba2.start(),
      this._r5983c96ac74ba2.addEventListener(DeBouncer.addEventListener, this._ra618d21021f7dc));
  }
  _raefd6783dd05c4(e) {
    let r = e / a.SAMPLES_PER_BAR;
    return this._re74ef8699c9cc1 ? Math.round(r) : Math.floor(r + a.ROUND_UP_THRESHOLD_BIAS);
  }
  _r81a8250e6ae8b5() {
    let e = [];
    if (this._rd8b7b2075eb025 != null)
      for (let r of this._rd8b7b2075eb025) {
        let t = 0;
        for (; t < r.length && (r.getKey(t) ?? 0) < this._r452bb3fd274d0e;) t++;
        e.push(t - 1);
      }
    return e;
  }
  _rd1ea653f07ddc5() {
    if (this._rd8b7b2075eb025 == null) return;
    let e = this._r81a8250e6ae8b5(),
      r = this._rd8b7b2075eb025.length;
    for (let t = r - 1; t >= 0; t--) {
      let i = this._rd8b7b2075eb025[t],
        s = e[t] ?? -1,
        o = i.getWithIndex(s) ?? null,
        d = null;
      if (o != null) {
        let l = i.getKey(s) ?? 0,
          b = this._r452bb3fd274d0e - l;
        o.id !== 0 && b >= 0 && (d = new TraxChannelSample(o, b));
      }
      let c = a.BUFFER_LENGTH;
      this._r3c5134e19d504f - this._r452bb3fd274d0e < c &&
        (c = this._r3c5134e19d504f - this._r452bb3fd274d0e);
      let f = 0;
      for (; f < c;) {
        let l = c;
        if (s < i.length - 1) {
          let b = i.getKey(s + 1) ?? 0;
          c + this._r452bb3fd274d0e >= b && (l = b - this._r452bb3fd274d0e);
        }
        if ((l > c - f && (l = c - f), t === r - 1))
          if (d != null) (d._r6f2622783dba9d(a._rd07b681d047472, f, l), (f += l));
          else for (let b = 0; b < l; b++) a._rd07b681d047472[f++] = 0;
        else (d?._rf381d625d01b10(a._rd07b681d047472, f, l), (f += l));
        if (f < c) {
          let b = i.getWithIndex(++s) ?? null;
          d = b == null || b.id === 0 ? null : new TraxChannelSample(b, 0);
        }
      }
    }
  }
  _rb7d21b785720a2() {
    let e = new re(),
      r = this._r452bb3fd274d0e,
      t =
        this._r2b7f3cec4983c0 > 0
          ? Math.min(this._r3c5134e19d504f, r + this._r2b7f3cec4983c0)
          : this._r3c5134e19d504f,
      i = Math.max(0, t - r),
      s = 0;
    for (; this._r452bb3fd274d0e < t;) {
      this._rd1ea653f07ddc5();
      let o = a.BUFFER_LENGTH;
      if ((t - this._r452bb3fd274d0e < o && (o = t - this._r452bb3fd274d0e), o <= 0)) break;
      for (let d = 0; d < o; d++) {
        let c = Number(a._rd07b681d047472[d] ?? 0) * Ag.SAMPLE_VALUE_MULTIPLIER,
          f = s + d;
        if (
          (this._rcdf7fc43ae2e69 > 0 && f < this._rcdf7fc43ae2e69 && (c *= f / this._rcdf7fc43ae2e69),
          this._fadeOutLengthSamples > 0)
        ) {
          let l = i - f;
          l <= this._fadeOutLengthSamples && (c *= Math.max(0, l / this._fadeOutLengthSamples));
        }
        (e.writeFloat(c), e.writeFloat(c));
      }
      ((s += o), (this._r452bb3fd274d0e += a.BUFFER_LENGTH));
    }
    return ((e.position = 0), { bytes: e, samples: i });
  }
  _rc4450c462f6e19 = n((e) => {
    this.var_988 || ((this.var_988 = !0), this.playingComplete());
  }, "_rc4450c462f6e19");
  _rb1e86ef41e5fb9 = n((e) => {
    this.var_988 && this.playingComplete();
  }, "_rb1e86ef41e5fb9");
  _ra618d21021f7dc = n((e) => {
    if (this._soundObject == null) {
      (this._rf69c7ababc6bdd(), this.playingComplete());
      return;
    }
    let r = Math.max(1, Math.floor(this._fadeOutLengthSamples / (a.SAMPLES_PER_SECOND / 1e3))),
      t = Math.max(0, _ia411d8d8194a3a() - this._r7264eaba106414),
      i = Math.min(1, t / r),
      s = this._rdb27aaac66e90c * (1 - i),
      o = this._soundObject._r24165a2568d0c7;
    ((this._soundObject._r24165a2568d0c7 = new _i366982a182b463(Math.max(0, s), o.pan)),
      i >= 1 && (this._rf69c7ababc6bdd(), this.playingComplete()));
  }, "_ra618d21021f7dc");
  playingComplete() {
    ((this.var_988 = !0),
      this._r0d928c86333564(),
      this._events.dispatchEvent?.(new SoundCompleteEvent(SoundCompleteEvent.TRAX_SONG_COMPLETE, this.var_3076)));
  }
  _rf69c7ababc6bdd() {
    this._r5983c96ac74ba2 != null &&
      (this._r5983c96ac74ba2.removeEventListener(DeBouncer.addEventListener, this._ra618d21021f7dc),
      this._r5983c96ac74ba2.reset(),
      (this._r5983c96ac74ba2 = null));
  }
  _r89b4540df20dac() {
    this._r89a1197e3ffa95 != null &&
      (this._r89a1197e3ffa95.reset(),
      this._r89a1197e3ffa95.removeEventListener(DeBouncer._rf33144eac61595, this._rb1e86ef41e5fb9),
      (this._r89a1197e3ffa95 = null));
  }
}
