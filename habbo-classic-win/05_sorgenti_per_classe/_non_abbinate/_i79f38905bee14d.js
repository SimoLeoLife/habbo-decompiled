// Estratto da HabboAirLauncher.deobf.js, riga 29287.

class a extends EventDispatcherWrapper {
  static {
    n(this, "_i79f38905bee14d");
  }
  static _r5508d5bd252641 = 44100;
  _ra122be166daeee = null;
  _rd123d5fb681f09 = null;
  _r0c053e35964af1 = !1;
  constructor(e = null) {
    (super(), e != null && this._r456f419587856a(e));
  }
  get length() {
    return (this._ra122be166daeee?.duration ?? 0) * 1e3;
  }
  get _r2faa584912d964() {
    return this._r0c053e35964af1;
  }
  get _ra6a3fefbedd9f0() {
    return this._ra122be166daeee;
  }
  play(e = 0, r = 0, t = null) {
    let i = new _iaf4035c706aeba(this, e, r, t ?? new _i366982a182b463());
    return (i.start(), i);
  }
  _r94de227ce9fc1c(e, r, t = "float", i = !0, s = 44100) {
    let o = _i8aa44418cffb93();
    if (o == null) return;
    let d = i ? 2 : 1,
      c = Math.max(0, r | 0),
      f = o.createBuffer(d, c, s),
      l = Array.from({ length: d }, (m, v) => f.getChannelData(v)),
      b = e.toUint8Array(),
      _ = new DataView(b.buffer, b.byteOffset, b.byteLength),
      h = e.endian === "littleEndian",
      p = 0;
    if (t === "float")
      for (let m = 0; m < c; m++)
        for (let v = 0; v < d; v++) {
          let w = 0;
          (p + 4 <= b.byteLength && ((w = _.getFloat32(p, h)), (p += 4)), (l[v][m] = _ia94ff6bf5a0c77(w)));
        }
    else if (t === "short")
      for (let m = 0; m < c; m++)
        for (let v = 0; v < d; v++) {
          let w = 0;
          (p + 2 <= b.byteLength && ((w = _.getInt16(p, h) / 32768), (p += 2)), (l[v][m] = _ia94ff6bf5a0c77(w)));
        }
    else if (t === "byte")
      for (let m = 0; m < c; m++)
        for (let v = 0; v < d; v++) {
          let w = 0;
          (p < b.byteLength && ((w = (b[p] - 128) / 128), (p += 1)), (l[v][m] = _ia94ff6bf5a0c77(w)));
        }
    else throw new Error(`Unsupported PCM format: ${t}`);
    this._r78f9344e44a5bc(f);
  }
  extract(e, r, t = 0) {
    if (this._ra122be166daeee == null) return 0;
    let i = Math.max(0, t | 0),
      s = this._ra122be166daeee.sampleRate,
      o = Math.max(0, Math.floor((this._ra122be166daeee.length * a._r5508d5bd252641) / s - i)),
      d = Math.max(0, Math.min(r | 0, o)),
      c = this._ra122be166daeee.getChannelData(0),
      f = this._ra122be166daeee.numberOfChannels > 1 ? this._ra122be166daeee.getChannelData(1) : c,
      l = new Uint8Array(d * 8),
      b = new DataView(l.buffer),
      _ = e.endian === "littleEndian",
      h = 0;
    for (let p = 0; p < d; p++) {
      let m = ((i + p) * s) / a._r5508d5bd252641,
        v = Math.floor(m),
        w = Math.min(v + 1, this._ra122be166daeee.length - 1),
        I = m - v,
        C = c[v] ?? 0,
        W = c[w] ?? 0,
        R = f[v] ?? 0,
        T = f[w] ?? 0,
        S = C + (W - C) * I,
        z = R + (T - R) * I;
      (b.setFloat32(h, S, _), b.setFloat32(h + 4, z, _), (h += 8));
    }
    return (e.writeBytes(re._rd6d760d92a9f3f(l)), d);
  }
  load(e) {
    let r = _icf1a3ef18fd9e0(e.url ?? "");
    r.length !== 0 &&
      ((this._r0c053e35964af1 = !0),
      (this._rd123d5fb681f09 = fetch(r)
        .then(async (t) => {
          let i = await t.arrayBuffer();
          return this.decodeAudioData(i);
        })
        .catch(() => ((this._r0c053e35964af1 = !1), this.dispatchEvent(new _i207e0270849f6a(_i207e0270849f6a._rb9739f8a5177c3)), null))));
  }
  whenReady() {
    return this._ra122be166daeee != null
      ? Promise.resolve(this._ra122be166daeee)
      : (this._rd123d5fb681f09 ?? Promise.resolve(null));
  }
  _r456f419587856a(e) {
    if (e instanceof a) {
      ((this._ra122be166daeee = e._ra122be166daeee),
        (this._rd123d5fb681f09 = e._rd123d5fb681f09),
        (this._r0c053e35964af1 = e._r0c053e35964af1));
      return;
    }
    if (e instanceof re || e instanceof ArrayBuffer || e instanceof Uint8Array) {
      ((this._r0c053e35964af1 = !0), (this._rd123d5fb681f09 = this.decodeAudioData(_i56f31176562a1b(e))));
      return;
    }
    this._r78f9344e44a5bc(e);
  }
  async decodeAudioData(e) {
    let r = _i8aa44418cffb93();
    if (r == null) return ((this._r0c053e35964af1 = !1), null);
    try {
      let t = await r.decodeAudioData(e);
      return (this._r78f9344e44a5bc(t), t);
    } catch {
      return ((this._r0c053e35964af1 = !1), null);
    }
  }
  _r78f9344e44a5bc(e) {
    ((this._ra122be166daeee = e),
      (this._r0c053e35964af1 = !1),
      this.dispatchEvent(new M(M.ComponentDependency)));
  }
}
