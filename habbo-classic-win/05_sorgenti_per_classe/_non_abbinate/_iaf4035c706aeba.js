// Estratto da HabboAirLauncher.deobf.js, riga 29196.

class extends EventDispatcherWrapper {
  constructor(r, t = 0, i = 0, s = new _i366982a182b463()) {
    super();
    this._r7267d672f84764 = r;
    ((this._r0b21335430d19e = Math.max(0, t)),
      (this._r7b3cf2f6401da4 = Math.max(0, i | 0)),
      (this._r2188d687fe25f4 = s));
  }
  static {
    n(this, "_iaf4035c706aeba");
  }
  _r5bf340a3a78ae6 = null;
  _rf0013bf36b3386 = null;
  _r6599f62feac257 = null;
  _r0b21335430d19e = 0;
  _r0eaf50bf143d93 = 0;
  _r7b3cf2f6401da4 = 0;
  _r606cd46e399a37 = !1;
  _r2188d687fe25f4;
  get position() {
    if (this._r5bf340a3a78ae6 == null) return this._r0b21335430d19e * 1e3;
    let r = _i8aa44418cffb93();
    return r == null
      ? this._r0b21335430d19e * 1e3
      : Math.max(0, this._r0b21335430d19e + (r.currentTime - this._r0eaf50bf143d93)) * 1e3;
  }
  get _r24165a2568d0c7() {
    return this._r2188d687fe25f4;
  }
  set _r24165a2568d0c7(r) {
    ((this._r2188d687fe25f4 = r), this._r626248dd7ab035());
  }
  start() {
    this._r7267d672f84764.whenReady().then((r) => {
      this._r606cd46e399a37 || r == null || this._rf0532ba878e22a(r, this._r0b21335430d19e);
    });
  }
  stop() {
    ((this._r606cd46e399a37 = !0), this._rfc097b4ab876c9());
  }
  _rf0532ba878e22a(r, t) {
    let i = _i8aa44418cffb93();
    if (i == null) return;
    (i.state === "suspended" && i.resume().catch(() => {}), this._rfc097b4ab876c9());
    let s = i.createBufferSource(),
      o = i.createGain(),
      d = typeof i.createStereoPanner == "function" ? i.createStereoPanner() : null;
    ((s.buffer = r),
      s.connect(o),
      d != null ? (o.connect(d), d.connect(i.destination)) : o.connect(i.destination),
      (this._r5bf340a3a78ae6 = s),
      (this._rf0013bf36b3386 = o),
      (this._r6599f62feac257 = d),
      (this._r0b21335430d19e = Math.max(0, t)),
      (this._r0eaf50bf143d93 = i.currentTime),
      this._r626248dd7ab035(),
      (s.onended = () => {
        if (!this._r606cd46e399a37) {
          if (this._r7b3cf2f6401da4 > 0) {
            ((this._r7b3cf2f6401da4 -= 1), this._rf0532ba878e22a(r, 0));
            return;
          }
          (this._rfc097b4ab876c9(), this.dispatchEvent(new M(M.ComponentDependency)));
        }
      }),
      s.start(0, Math.min(this._r0b21335430d19e, r.duration)));
  }
  _r626248dd7ab035() {
    (this._rf0013bf36b3386 != null &&
      (this._rf0013bf36b3386.gain.value = Math.max(0, this._r2188d687fe25f4.volume)),
      this._r6599f62feac257 != null &&
        (this._r6599f62feac257.pan.value = Math.max(-1, Math.min(1, this._r2188d687fe25f4.pan))));
  }
  _rfc097b4ab876c9() {
    if (this._r5bf340a3a78ae6 != null) {
      this._r5bf340a3a78ae6.onended = null;
      try {
        this._r5bf340a3a78ae6.stop();
      } catch {}
      (this._r5bf340a3a78ae6.disconnect(), (this._r5bf340a3a78ae6 = null));
    }
    (this._rf0013bf36b3386?.disconnect(),
      this._r6599f62feac257?.disconnect(),
      (this._rf0013bf36b3386 = null),
      (this._r6599f62feac257 = null));
  }
}
