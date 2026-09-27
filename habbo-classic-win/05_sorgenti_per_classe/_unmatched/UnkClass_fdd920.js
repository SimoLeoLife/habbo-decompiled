// Extracted from HabboAirLauncher.deobf.js, line 54898.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifdd92074c780c7

class {
  static {
    n(this, "UnkClass_fdd920");
  }
  decode(e) {
    let r = decodePng(e.toUint8Array()),
      t = this._rfff90f393b19e7({
        channels: r.channels,
        data: r.data,
        depth: r.depth,
        height: r.height,
        palette: r.palette,
        transparency: r.transparency,
        width: r.width,
      });
    return t.channels === 4 && (t.data instanceof Uint8Array || t.data instanceof Uint8ClampedArray)
      ? A._r0a52af92aacbc7(r.width, r.height, t.data)
      : A._rc15f29e588f4cb(r.width, r.height, (i) => this._r5b8ff57eb513a2(i, t.channels, t.data));
  }
  _r5b8ff57eb513a2(e, r, t) {
    let i = Math.min(e.length, Math.floor(t.length / Math.max(1, r))),
      s = 0;
    for (let o = 0; o < i; o++) {
      let d = t[s] ?? 0,
        c = d,
        f = d,
        l = d,
        b = 255;
      switch (r) {
        case 2:
          b = t[s + 1] ?? 255;
          break;
        case 3:
          ((f = t[s + 1] ?? d), (l = t[s + 2] ?? f));
          break;
        default:
          r >= 4 && ((f = t[s + 1] ?? d), (l = t[s + 2] ?? f), (b = t[s + 3] ?? 255));
          break;
      }
      ((e[o] = (((b & 255) << 24) | ((l & 255) << 16) | ((f & 255) << 8) | (c & 255)) >>> 0), (s += r));
    }
  }
  _r9801cec5a4b59a(e, r, t, i) {
    let s = new Uint8Array(r * t),
      o = (1 << i) - 1,
      d = Math.floor(8 / i),
      c = 0,
      f = 0;
    for (let l = 0; l < t; l++) {
      let b = 0;
      for (; b < r;) {
        let _ = e[c++] ?? 0;
        for (let h = 0; h < d && b < r; h++) {
          let p = 8 - (h + 1) * i,
            m = (_ >> p) & o;
          ((s[f++] = Math.round((m / o) * 255)), b++);
        }
      }
    }
    return s;
  }
  _r24277cf05fe3b8(e, r) {
    let t = new Uint8Array(e.length * 2),
      i = 0,
      s = 0;
    for (; i < e.length;) {
      let o = e[i++] ?? 0;
      ((t[s++] = o), (t[s++] = o === r ? 0 : 255));
    }
    return t;
  }
  _r6855be5f38246a(e, r, t) {
    if (r === 1) {
      let i = e.constructor,
        s = new i((e.length / r) * 2),
        o = e instanceof Uint16Array ? 65535 : 255,
        d = t[0] ?? 0,
        c = 0,
        f = 0;
      for (; c < e.length;) {
        let l = e[c++] ?? 0;
        ((s[f++] = l), (s[f++] = l === d ? 0 : o));
      }
      return { channels: 2, data: s };
    }
    if (r === 3) {
      let i = e.constructor,
        s = new i((e.length / r) * 4),
        o = e instanceof Uint16Array ? 65535 : 255,
        d = 0,
        c = 0;
      for (; d < e.length;) {
        let f = e[d++] ?? 0,
          l = e[d++] ?? 0,
          b = e[d++] ?? 0;
        ((s[c++] = f),
          (s[c++] = l),
          (s[c++] = b),
          (s[c++] = f === (t[0] ?? 0) && l === (t[1] ?? 0) && b === (t[2] ?? 0) ? 0 : o));
      }
      return { channels: 4, data: s };
    }
    return { channels: r, data: e };
  }
  _rfff90f393b19e7(e) {
    if (e.palette?.length)
      return {
        channels: e.palette[0]?.length ?? 4,
        data: convertIndexedToRgb({
          channels: e.channels ?? 1,
          data: e.data,
          depth: e.depth ?? 8,
          height: e.height,
          palette: e.palette,
          text: {},
          transparency: e.transparency,
          width: e.width,
        }),
      };
    if ((e.depth ?? 8) < 8 && (e.channels ?? 1) === 1) {
      let r = this._r9801cec5a4b59a(e.data, e.width, e.height, e.depth ?? 8);
      if ((e.transparency?.length ?? 0) === 1) {
        let t = (1 << (e.depth ?? 8)) - 1,
          i = e.transparency?.[0] ?? 0,
          s = t > 0 ? Math.round((i / t) * 255) : i;
        return { channels: 2, data: this._r24277cf05fe3b8(r, s) };
      }
      return { channels: 1, data: r };
    }
    return (e.transparency?.length ?? 0) > 0
      ? this._r6855be5f38246a(
          e.data,
          Math.max(1, e.channels ?? Math.round(e.data.length / (e.width * e.height))),
          e.transparency,
        )
      : {
          channels: Math.max(1, e.channels ?? Math.round(e.data.length / (e.width * e.height))),
          data: e.data,
        };
  }
}
