// Extracted from HabboAirLauncher.deobf.js, line 63683.

class {
    static {
      n(this, "l");
    }
    static get MODE() {
      return T6;
    }
    static get PADDING() {
      return Tl;
    }
    static get TYPE() {
      return Uie;
    }
    constructor(e, r = T6.ECB, t = Tl.PKCS5) {
      if (!i__(e)) throw new Error("Key should be a string or an ArrayBuffer / Buffer");
      if (e.length < 1 || e.byteLength < 1) throw new Error("Key should not be empty");
      if (!o__(T6, r)) throw new Error("Unsupported mode");
      if (!o__(Tl, t)) throw new Error("Unsupported padding");
      ((this.mode = r), (this.padding = t), (this.iv = null));
      let i = (function () {
        let d = { p: [], s: [[], [], [], []] },
          c = 0;
        for (let f = 0; f < 18; f++) {
          let l = Irr.substring(c, c + 8);
          ((c += 8), d.p.push(+`0x${l}`));
        }
        for (let f = 0; f < 4; f++)
          for (let l = 0; l < 256; l++) {
            let b = Irr.substring(c, c + 8);
            ((c += 8), d.s[f].push(+`0x${b}`));
          }
        return d;
      })();
      ((this.p = i.p),
        (this.s = i.s),
        (e = (function (d) {
          if (d.length >= 72) return d;
          let c = [];
          for (; c.length < 72;) for (let f = 0; f < d.length; f++) c.push(d[f]);
          return new Uint8Array(c);
        })(h__(e))));
      for (let d = 0, c = 0; d < 18; d++, c += 4) {
        let f = t__(e[c], e[c + 1], e[c + 2], e[c + 3]);
        this.p[d] = b__(this.p[d], f);
      }
      let s = 0,
        o = 0;
      for (let d = 0; d < 18; d += 2)
        (([s, o] = this._encryptBlock(s, o)), (this.p[d] = s), (this.p[d + 1] = o));
      for (let d = 0; d < 4; d++)
        for (let c = 0; c < 256; c += 2)
          (([s, o] = this._encryptBlock(s, o)), (this.s[d][c] = s), (this.s[d][c + 1] = o));
    }
    setIv(e) {
      if (!i__(e)) throw new Error("IV should be a string or an ArrayBuffer / Buffer");
      if ((e = h__(e)).length !== 8) throw new Error("IV should be 8 byte length");
      this.iv = e;
    }
    encode(e) {
      if (!i__(e)) throw new Error("Encode data should be a string or an ArrayBuffer / Buffer");
      if (this.mode !== T6.ECB && !this.iv) throw new Error("IV is not set");
      return (
        (e = (function (r, t) {
          let i = 8 - (r.length % 8);
          if (i === 8 && r.length > 0 && t !== Tl.PKCS5) return r;
          let s = new Uint8Array(r.length + i),
            o = [],
            d = i,
            c = 0;
          switch (t) {
            case Tl.PKCS5:
              c = i;
              break;
            case Tl.ONE_AND_ZEROS:
              (o.push(128), d--);
              break;
            case Tl.SPACES:
              c = 32;
          }
          for (; d > 0;) {
            if (t === Tl.LAST_BYTE && d === 1) {
              o.push(i);
              break;
            }
            (o.push(c), d--);
          }
          return (s.set(r), s.set(o, r.length), s);
        })(h__(e), this.padding)),
        this.mode === T6.ECB ? this._encodeECB(e) : this.mode === T6.CBC ? this._encodeCBC(e) : void 0
      );
    }
    decode(e, r = Uie.STRING) {
      if (!i__(e)) throw new Error("Decode data should be a string or an ArrayBuffer / Buffer");
      if (this.mode !== T6.ECB && !this.iv) throw new Error("IV is not set");
      if ((e = h__(e)).length % 8 != 0) throw new Error("Decoded data should be multiple of 8 bytes");
      switch (this.mode) {
        case T6.ECB:
          e = this._decodeECB(e);
          break;
        case T6.CBC:
          e = this._decodeCBC(e);
      }
      switch (
        ((e = (function (t, i) {
          let s = 0;
          switch (i) {
            case Tl.LAST_BYTE:
            case Tl.PKCS5: {
              let o = t[t.length - 1];
              o <= 8 && (s = o);
              break;
            }
            case Tl.ONE_AND_ZEROS: {
              let o = 1;
              for (; o <= 8;) {
                let d = t[t.length - o];
                if (d === 128) {
                  s = o;
                  break;
                }
                if (d !== 0) break;
                o++;
              }
              break;
            }
            case Tl.NULL:
            case Tl.SPACES: {
              let o = i === Tl.SPACES ? 32 : 0,
                d = 1;
              for (; d <= 8;) {
                if (t[t.length - d] !== o) {
                  s = d - 1;
                  break;
                }
                d++;
              }
              break;
            }
          }
          return t.subarray(0, t.length - s);
        })(e, this.padding)),
        r)
      ) {
        case Uie.UINT8_ARRAY:
          return e;
        case Uie.STRING:
          return new TextDecoder().decode(e);
        default:
          throw new Error("Unsupported return type");
      }
    }
    _encryptBlock(e, r) {
      for (let t = 0; t < 16; t++) ((e = b__(e, this.p[t])), (r = b__(r, this._f(e))), ([e, r] = [r, e]));
      return (([e, r] = [r, e]), (r = b__(r, this.p[16])), [(e = b__(e, this.p[17])), r]);
    }
    _decryptBlock(e, r) {
      for (let t = 17; t > 1; t--) ((e = b__(e, this.p[t])), (r = b__(r, this._f(e))), ([e, r] = [r, e]));
      return (([e, r] = [r, e]), (r = b__(r, this.p[1])), [(e = b__(e, this.p[0])), r]);
    }
    _f(e) {
      let r = (e >>> 24) & 255,
        t = (e >>> 16) & 255,
        i = (e >>> 8) & 255,
        s = 255 & e,
        o = d__(this.s[0][r], this.s[1][t]);
      return ((o = b__(o, this.s[2][i])), d__(o, this.s[3][s]));
    }
    _encodeECB(e) {
      let r = new Uint8Array(e.length);
      for (let t = 0; t < e.length; t += 8) {
        let i = t__(e[t], e[t + 1], e[t + 2], e[t + 3]),
          s = t__(e[t + 4], e[t + 5], e[t + 6], e[t + 7]);
        (([i, s] = this._encryptBlock(i, s)), r.set(r__(i), t), r.set(r__(s), t + 4));
      }
      return r;
    }
    _encodeCBC(e) {
      let r = new Uint8Array(e.length),
        t = t__(this.iv[0], this.iv[1], this.iv[2], this.iv[3]),
        i = t__(this.iv[4], this.iv[5], this.iv[6], this.iv[7]);
      for (let s = 0; s < e.length; s += 8) {
        let o = t__(e[s], e[s + 1], e[s + 2], e[s + 3]),
          d = t__(e[s + 4], e[s + 5], e[s + 6], e[s + 7]);
        (([o, d] = [b__(t, o), b__(i, d)]),
          ([o, d] = this._encryptBlock(o, d)),
          ([t, i] = [o, d]),
          r.set(r__(o), s),
          r.set(r__(d), s + 4));
      }
      return r;
    }
    _decodeECB(e) {
      let r = new Uint8Array(e.length);
      for (let t = 0; t < e.length; t += 8) {
        let i = t__(e[t], e[t + 1], e[t + 2], e[t + 3]),
          s = t__(e[t + 4], e[t + 5], e[t + 6], e[t + 7]);
        (([i, s] = this._decryptBlock(i, s)), r.set(r__(i), t), r.set(r__(s), t + 4));
      }
      return r;
    }
    _decodeCBC(e) {
      let r = new Uint8Array(e.length),
        t,
        i,
        s = t__(this.iv[0], this.iv[1], this.iv[2], this.iv[3]),
        o = t__(this.iv[4], this.iv[5], this.iv[6], this.iv[7]);
      for (let d = 0; d < e.length; d += 8) {
        let c = t__(e[d], e[d + 1], e[d + 2], e[d + 3]),
          f = t__(e[d + 4], e[d + 5], e[d + 6], e[d + 7]);
        (([t, i] = [c, f]),
          ([c, f] = this._decryptBlock(c, f)),
          ([c, f] = [b__(s, c), b__(o, f)]),
          ([s, o] = [t, i]),
          r.set(r__(c), d),
          r.set(r__(f), d + 4));
      }
      return r;
    }
  }
