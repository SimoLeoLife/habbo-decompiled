// Estratto da HabboAirLauncher.deobf.js, riga 338325.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/trax/TraxSample.as
// Nome offuscato: _i1f262830f4a4e6

class a {
  constructor(e, r, t = a.SAMPLE_FREQUENCY_44KHZ, i = a.SAMPLE_SCALE_16BIT) {
    this._id = r;
    let s = 65536;
    switch (t) {
      case a.SAMPLE_FREQUENCY_22KHZ:
        this.var_143 = 2;
        break;
      case a.SAMPLE_FREQUENCY_11KHZ:
        this.var_143 = 4;
        break;
      default:
        this.var_143 = 1;
        break;
    }
    switch (i) {
      case a.SAMPLE_SCALE_8BIT:
        ((this.var_329 = 4), (s = 256));
        break;
      default:
        ((this.var_329 = 2), (s = 65536));
        break;
    }
    let o = this.var_329 * this.var_143,
      d = Math.floor(e.length / 8);
    ((d = Math.floor(d / o) * o), (this._sampleData = new Array(d / o).fill(0)));
    let c = 1 / (Number(s) / 2);
    e.position = 0;
    let f = 0,
      l = d / this.var_143;
    for (let b = 0; b < l; b++) {
      let _ = e.readFloat();
      e.readFloat();
      for (let p = 2; p <= this.var_143; p++) {
        let m = e.readFloat();
        e.readFloat();
        let v = Number(p);
        _ = (_ * (v - 1)) / v + Number(m) / v;
      }
      b >= l - 1 - a.FADEOUT_LENGTH && (_ *= (l - b - 1) / Number(a.FADEOUT_LENGTH));
      let h = Math.trunc((_ + 1) / c);
      (h < 0 ? (h = 0) : h >= s && (h = s - 1),
        (f = (Math.imul(f, s) + h) | 0),
        b % this.var_329 === this.var_329 - 1 &&
          ((this._sampleData[Math.floor(b / this.var_329)] = f), (f = 0)));
    }
  }
  static {
    n(this, "TraxSample");
  }
  static SAMPLE_FREQUENCY_44KHZ = "sample_44khz";
  static SAMPLE_FREQUENCY_22KHZ = "sample_22khz";
  static SAMPLE_FREQUENCY_11KHZ = "sample_11khz";
  static SAMPLE_SCALE_16BIT = "sample_16bit";
  static SAMPLE_SCALE_8BIT = "sample_8bit";
  static SAMPLE_VALUE_MULTIPLIER = 1 / 32768;
  static FADEOUT_LENGTH = 32;
  static MASK_8BIT = 255;
  static MASK_16BIT = 65535;
  static OFFSET_8BIT = 127;
  static OFFSET_16BIT = 32767;
  _disposed = !1;
  _sampleData = null;
  var_329 = 2;
  var_143 = 1;
  _rfa4a9baf3fba13 = [];
  var_5606 = 0;
  get id() {
    return this._id;
  }
  get length() {
    return (this._sampleData?.length ?? 0) * this.var_329 * this.var_143;
  }
  get usageCount() {
    return this._rfa4a9baf3fba13?.length ?? 0;
  }
  get usageTimeStamp() {
    return this.var_5606;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || ((this._sampleData = null), (this._rfa4a9baf3fba13 = null), (this._disposed = !0));
  }
  _r6f2622783dba9d(e, r, t, i) {
    if (e == null || this._sampleData == null) return i;
    let s = this.var_329 * this.var_143;
    ((i = Math.floor(i / s)), r < 0 && ((t += r), (r = 0)), t > e.length - r && (t = e.length - r));
    let o = Math.floor(t / s),
      d = 0;
    if (
      (o > this._sampleData.length - i &&
        ((d = (o - (this._sampleData.length - i)) * s),
        (o = this._sampleData.length - i),
        d > e.length - r && (d = e.length - r)),
      this.var_143 === 1)
    ) {
      if (this.var_329 === 2)
        for (; o-- > 0;) {
          let c = this._sampleData[i++] ?? 0;
          ((e[r++] = ((c >> 16) & a.MASK_16BIT) - a.OFFSET_16BIT),
            (e[r++] = (c & a.MASK_16BIT) - a.OFFSET_16BIT));
        }
      else if (this.var_329 === 4)
        for (; o-- > 0;) {
          let c = this._sampleData[i++] ?? 0;
          ((e[r++] = (((c >> 24) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8),
            (e[r++] = (((c >> 16) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8),
            (e[r++] = (((c >> 8) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8),
            (e[r++] = ((c & a.MASK_8BIT) - a.OFFSET_8BIT) << 8));
        }
    } else if (this.var_143 >= 2) {
      if (this.var_329 === 2)
        for (; o-- > 0;) {
          let c = this._sampleData[i++] ?? 0,
            f = ((c >> 16) & a.MASK_16BIT) - a.OFFSET_16BIT;
          for (let l = this.var_143; l > 0; l--) e[r++] = f;
          f = (c & a.MASK_16BIT) - a.OFFSET_16BIT;
          for (let l = this.var_143; l > 0; l--) e[r++] = f;
        }
      else if (this.var_329 === 4)
        for (; o-- > 0;) {
          let c = this._sampleData[i++] ?? 0,
            f = (((c >> 24) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let l = this.var_143; l > 0; l--) e[r++] = f;
          f = (((c >> 16) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let l = this.var_143; l > 0; l--) e[r++] = f;
          f = (((c >> 8) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let l = this.var_143; l > 0; l--) e[r++] = f;
          f = ((c & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let l = this.var_143; l > 0; l--) e[r++] = f;
        }
    }
    for (; d-- > 0;) e[r++] = 0;
    return i * s;
  }
  _rf381d625d01b10(e, r, t, i) {
    if (e == null || this._sampleData == null) return i;
    let s = this.var_329 * this.var_143;
    ((i = Math.floor(i / s)), r < 0 && ((t += r), (r = 0)), t > e.length - r && (t = e.length - r));
    let o = Math.floor(t / s);
    if (
      (o > this._sampleData.length - i && (o = this._sampleData.length - i),
      this.var_143 === 1)
    ) {
      if (this.var_329 === 2)
        for (; o-- > 0;) {
          let d = this._sampleData[i++] ?? 0;
          ((e[r++] += ((d >> 16) & a.MASK_16BIT) - a.OFFSET_16BIT),
            (e[r++] += (d & a.MASK_16BIT) - a.OFFSET_16BIT));
        }
      else if (this.var_329 === 4)
        for (; o-- > 0;) {
          let d = this._sampleData[i++] ?? 0;
          ((e[r++] += (((d >> 24) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8),
            (e[r++] += (((d >> 16) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8),
            (e[r++] += (((d >> 8) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8),
            (e[r++] += ((d & a.MASK_8BIT) - a.OFFSET_8BIT) << 8));
        }
    } else if (this.var_143 >= 2) {
      if (this.var_329 === 2)
        for (; o-- > 0;) {
          let d = this._sampleData[i++] ?? 0,
            c = ((d >> 16) & a.MASK_16BIT) - a.OFFSET_16BIT;
          for (let f = this.var_143; f > 0; f--) e[r++] += c;
          c = (d & a.MASK_16BIT) - a.OFFSET_16BIT;
          for (let f = this.var_143; f > 0; f--) e[r++] += c;
        }
      else if (this.var_329 === 4)
        for (; o-- > 0;) {
          let d = this._sampleData[i++] ?? 0,
            c = (((d >> 24) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let f = this.var_143; f > 0; f--) e[r++] += c;
          c = (((d >> 16) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let f = this.var_143; f > 0; f--) e[r++] += c;
          c = (((d >> 8) & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let f = this.var_143; f > 0; f--) e[r++] += c;
          c = ((d & a.MASK_8BIT) - a.OFFSET_8BIT) << 8;
          for (let f = this.var_143; f > 0; f--) e[r++] += c;
        }
    }
    return i * s;
  }
  setUsageFromSong(e, r) {
    this._rfa4a9baf3fba13 != null &&
      (this._rfa4a9baf3fba13.includes(e) || this._rfa4a9baf3fba13.push(e), (this.var_5606 = r));
  }
  isUsedFromSong(e) {
    return this._rfa4a9baf3fba13?.includes(e) ?? !1;
  }
}
