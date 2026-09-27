// Estratto da HabboAirLauncher.deobf.js, riga 68399.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/StringBuffer.as
// Nome offuscato: _i4710f86d832e91

class a {
    static {
      n(this, "StringBuffer");
    }
    _buffer = [];
    _r4b7548a761ae9f = [];
    _position = 0;
    constructor(e = 0, r = null) {
      ((this._buffer = new Array(Math.max(0, e)).fill(0)), r && this._r4c4d32211183fc(r));
    }
    _r455c9b18423882(e, r = 0, t = 0) {
      let i = Math.min(r + t, e.length);
      return r >= i ? this : (this.writeRawBytes(this._rf18c82d62bf4ab(e), r, i - r), this);
    }
    _r5bacbd9d718f31(e) {
      return (this.writeByte(e), this);
    }
    _r8b00356654c35d(...e) {
      return this._r6cc7124f88aebc(e);
    }
    _r6cc7124f88aebc(e) {
      for (let r of e) this.writeByte(Number(r));
      return this;
    }
    _r1bbf069bb957d1(e) {
      return this._r6cc7124f88aebc(e);
    }
    _reb7b491d41a079(e) {
      return this._r6cc7124f88aebc(e);
    }
    _r679e749fc02dd4(e) {
      return (this.writeInt(e), this);
    }
    _re6a681184c5204(...e) {
      return this._ra1ed2fc66eb4cc(e);
    }
    _ra1ed2fc66eb4cc(e) {
      for (let r of e) this.writeInt(Number(r));
      return this;
    }
    _r9de80ed029e75f(e) {
      return this._ra1ed2fc66eb4cc(e);
    }
    _re3d019ce93a301(e) {
      return (this._r4c4d32211183fc(String(e)), this);
    }
    _r042ca37bd8f3c3(...e) {
      return this._re022be858f506c(e);
    }
    _re022be858f506c(e) {
      for (let r of e) this._r4c4d32211183fc(String(r));
      return this;
    }
    _r74a905f255a6cf(e, r = 0, t = 0) {
      let i = e._buffer.slice(),
        s = Math.min(r + t, i.length);
      return r >= s ? this : (this.writeRawBytes(i, r, s - r), this);
    }
    _rb77ef8498b7a08(e) {
      return this._re022be858f506c(e);
    }
    _r5a70ef0ad18b30(e) {
      return this._ra1ed2fc66eb4cc(e);
    }
    _r57aedb18daab68(e) {
      return e < this._buffer.length ? (this._buffer[e] ?? 0) : 0;
    }
    charAt(e) {
      return this.toString().charAt(e);
    }
    clear() {
      (this._buffer.length > 0 && (this._buffer = []),
        this._r4b7548a761ae9f.length > 0 && (this._r4b7548a761ae9f = []),
        (this._position = 0));
    }
    count(e) {
      if (!e) return 0;
      let r = Array.from(L2.encode(e)),
        t = 0,
        i = 0;
      for (let s of this._buffer) s === r[t] ? (t++, t === r.length && (i++, (t = 0))) : (t = 0);
      return i;
    }
    _r6200fbaa178e99(e) {
      let r = 0;
      for (let t of this._buffer) t === (e & 255) && r++;
      return r;
    }
    _r1dfb162c570ada(e) {
      this.length === 0 ||
        e >= this.length ||
        (this._buffer.splice(e, 1), (this._position = Math.max(0, this._position - 1)));
    }
    _rf4e83af374dd77(e, r) {
      this.length === 0 ||
        e >= this.length ||
        r <= 0 ||
        (this._buffer.splice(e, r), (this._position = Math.max(0, this._position - r)));
    }
    empty() {
      return !this._position;
    }
    _r4960079c8b077d(e, r, t, i = 0) {
      let s = t ?? new re();
      i < s.length && (i = s.length);
      for (let o = 0; o < r; o++) s.writeByte(this._buffer[e + o] ?? 0);
      return ((s.position = i), s);
    }
    _rb6fb3b43ef091b(e, r, t = 0, i = 0) {
      return e > this.length
        ? this._r455c9b18423882(r, t, i)
        : (this._rc1b8e00d1dcd5b(e, this._rdac44720720c8d(r, t, i)), this);
    }
    _r59dc3404abe426(e, r) {
      return e > this.length ? this._r5bacbd9d718f31(r) : (this._rc1b8e00d1dcd5b(e, [r & 255]), this);
    }
    _r8e422b92a22e9e(e, ...r) {
      return this._r517d1da181a8ed(e, r);
    }
    _r517d1da181a8ed(e, r) {
      return e > this.length
        ? this._r6cc7124f88aebc(r)
        : (this._rc1b8e00d1dcd5b(
            e,
            r.map((t) => Number(t) & 255),
          ),
          this);
    }
    _r716620f367ffa6(e, r) {
      return this._r517d1da181a8ed(e, r);
    }
    _r104ad379356f50(e, r) {
      return this._r517d1da181a8ed(e, r);
    }
    _rd92789b5c7fe18(e, r) {
      return e > this.length
        ? this._r679e749fc02dd4(r)
        : (this._rc1b8e00d1dcd5b(e, this._rd894eafa946359(r)), this);
    }
    _r4dfa60b1b68578(e, ...r) {
      return this._re444da6cbc89f2(e, r);
    }
    _re444da6cbc89f2(e, r) {
      if (e > this.length) return this._ra1ed2fc66eb4cc(r);
      let t = [];
      for (let i of r) t.push(...this._rd894eafa946359(Number(i)));
      return (this._rc1b8e00d1dcd5b(e, t), this);
    }
    _r59ed2704be5c6d(e, r) {
      return this._re444da6cbc89f2(e, r);
    }
    _rdb9c87968d04db(e, r) {
      return e > this.length
        ? this._re3d019ce93a301(r)
        : (this._rc1b8e00d1dcd5b(e, Array.from(L2.encode(String(r)))), this);
    }
    _rc15cc2619da4c1(e, ...r) {
      return this._rc6118aca0209d9(e, r);
    }
    _rc6118aca0209d9(e, r) {
      if (e > this.length) return this._re022be858f506c(r);
      let t = [];
      for (let i of r) t.push(...L2.encode(String(i)));
      return (this._rc1b8e00d1dcd5b(e, t), this);
    }
    _r799ecae966beff(e, r, t = 0, i = 0) {
      if (e > this.length) return this._r74a905f255a6cf(r, t, i);
      let s = r._buffer.slice(),
        o = s.length,
        d = i > o ? o : i;
      return t > d ? this : (this._rc1b8e00d1dcd5b(e, s.slice(t, d === 0 ? void 0 : t + d)), this);
    }
    _re20cad99135e04(e, r) {
      return this._rc6118aca0209d9(e, r);
    }
    _r2a796a5af3ea11(e, r) {
      return this._re444da6cbc89f2(e, r);
    }
    indexOf(e, r = 0) {
      if (!e || r >= this.length) return -1;
      let t = Array.from(L2.encode(e)),
        i = 0;
      for (let s = 0; s < this._buffer.length; s++)
        if (this._buffer[s] === t[i]) {
          if ((i++, i === t.length)) return s - i + 1;
        } else i = 0;
      return -1;
    }
    _r1fbf162efd0191(e, r = 0) {
      if (r >= this.length) return -1;
      for (let t = 0; t < this._buffer.length; t++) if (this._buffer[t] === (e & 255)) return t;
      return -1;
    }
    lastIndexOf(e, r = Number.MAX_SAFE_INTEGER) {
      if (!e || r >= this.length) return -1;
      let t = Array.from(L2.encode(e)),
        i = Math.min(r, this._buffer.length),
        s = -1,
        o = 0;
      for (let d = 0; d < i; d++)
        this._buffer[d] === t[o] ? (o++, o === t.length && ((s = d - o + 1), (o = 0))) : (o = 0);
      return s;
    }
    _rf42ef7c1df8a3d(e, r = Number.MAX_SAFE_INTEGER) {
      let t = Math.min(r, this._buffer.length);
      for (let i = t - 1; i >= 0; i--) if (this._buffer[i] === (e & 255)) return i;
      return -1;
    }
    get length() {
      return this._buffer.length;
    }
    set length(e) {
      let r = Math.max(0, e | 0);
      if (r < this._buffer.length) this._buffer.length = r;
      else for (; this._buffer.length < r;) this._buffer.push(0);
      this._position > r && (this._position = r);
    }
    replace(e, r) {
      let t = this._position;
      return (
        (this._position = e),
        this._r4c4d32211183fc(r),
        this._position < t && (this._position = t),
        this
      );
    }
    _r6d98cc79e4bd76(e, r, t, i = 0) {
      let s = this._rf18c82d62bf4ab(t),
        o = i,
        d = e,
        c = s.length,
        f = Math.min(r, this._buffer.length);
      for (; d < f && o < c;) this._buffer[d++] = s[o++] ?? 0;
      return this;
    }
    _r81d2e08f67bbc0(e, r) {
      let t = 0;
      for (let i = 0; i < this._buffer.length; i++)
        this._buffer[i] === (e & 255) && ((this._buffer[i] = r & 255), t++);
      return t;
    }
    _r9634da06ba6165(e, r) {
      return (this._r81d2e08f67bbc0(e, r), this);
    }
    _rb4e6181c696002(e, r) {
      let t = this._r1fbf162efd0191(e);
      return (t >= 0 && (this._buffer[t] = r & 255), this);
    }
    _r9ef128223a5857(e, r) {
      let t = this._rf42ef7c1df8a3d(e, this._buffer.length);
      return (t >= 0 && (this._buffer[t] = r & 255), this);
    }
    _raa0ca76b56339a(e, r, t) {
      let i = 0;
      for (let s = 0; s < this._buffer.length; s++)
        if (this._buffer[s] === (e & 255) && i++ === t) return ((this._buffer[s] = r & 255), this);
      return this;
    }
    replaceRange(e, r, t, i = 0) {
      let s = Array.from(L2.encode(t)),
        o = i,
        d = e,
        c = Math.min(r, this._buffer.length);
      for (; d < c && o < s.length;) this._buffer[d++] = s[o++] ?? 0;
      return this;
    }
    reset(e = 0) {
      let r = re.compress(Uint8Array.from(this._buffer));
      return (
        (this._buffer = new Array(Math.max(0, e)).fill(0)),
        (this._r4b7548a761ae9f = []),
        (this._position = 0),
        r
      );
    }
    reverse() {
      return (this._buffer.reverse(), (this._position = this._buffer.length), this);
    }
    _r5e5e5ecc85e805(e, r) {
      return (e < this._buffer.length && (this._buffer[e] = r & 255), this);
    }
    setCharAt(e, r) {
      if (!r || r.length !== 1) throw new TypeError("Char length must be 1.");
      if (e >= this.length) throw new RangeError(`Index ${e} outside range ${this.length}.`);
      let t = Array.from(L2.encode(r))[0] ?? 0;
      return ((this._buffer[e] = t), this);
    }
    size() {
      let e = this._buffer.indexOf(0);
      return e >= 0 ? e : this._buffer.length;
    }
    _rbc8a64531b585e(e = 0, r = Number.MAX_SAFE_INTEGER) {
      let t = new a();
      return (t._r74a905f255a6cf(this, e, r), t);
    }
    _r9d3b5a5679c0a6(e, r = Number.MAX_SAFE_INTEGER) {
      let t = new a(),
        i = Math.min(r, this.length);
      return (t._r74a905f255a6cf(this, e, i - e), t);
    }
    substr(e = 0, r = Number.MAX_SAFE_INTEGER) {
      return r ? this.toString(e, Math.min(e + r, Number.MAX_SAFE_INTEGER)) : "";
    }
    substring(e, r = Number.MAX_SAFE_INTEGER) {
      return r <= e ? "" : this.toString(e, r);
    }
    toString(e = 0, r = 0) {
      return (
        (!r || r > this._position) && (r = this._position),
        e >= r ? "" : f8r.decode(Uint8Array.from(this._buffer.slice(e, r)))
      );
    }
    _r9f0b1eedc63e8c(e = 0) {
      let r = e || this.size();
      return r >= this._buffer.length
        ? this._buffer.length
        : ((this._buffer.length = r), (this._position = r), r);
    }
    _r50d6f70e2d8f93(e = 0) {
      return (this._r9f0b1eedc63e8c(e), this);
    }
    _rf18c82d62bf4ab(e) {
      return Array.from(e.toUint8Array());
    }
    _rdac44720720c8d(e, r, t) {
      return this._rf18c82d62bf4ab(e).slice(r, t === 0 ? void 0 : r + t);
    }
    writeByte(e) {
      let r = e & 255;
      (this._position < this._buffer.length ? (this._buffer[this._position] = r) : this._buffer.push(r),
        this._position++);
    }
    writeInt(e) {
      for (let r of this._rd894eafa946359(e)) this.writeByte(r);
    }
    _r4c4d32211183fc(e) {
      for (let r of L2.encode(e)) this.writeByte(r);
    }
    writeRawBytes(e, r = 0, t = 0) {
      let i = t > 0 ? Math.min(e.length, r + t) : e.length;
      for (let s = r; s < i; s++) this.writeByte(e[s] ?? 0);
    }
    _rc1b8e00d1dcd5b(e, r) {
      let t = this._buffer.slice(e);
      ((this._r4b7548a761ae9f = t),
        (this._buffer.length = e),
        (this._position = e),
        this.writeRawBytes(r),
        this.writeRawBytes(this._r4b7548a761ae9f));
    }
    _rd894eafa946359(e) {
      let r = new Uint8Array(4);
      return (new DataView(r.buffer).setInt32(0, e | 0, !1), Array.from(r));
    }
  }
