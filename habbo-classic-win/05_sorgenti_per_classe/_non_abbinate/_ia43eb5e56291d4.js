// Estratto da HabboAirLauncher.deobf.js, riga 64914.

class a {
  static {
    n(this, "_ia43eb5e56291d4");
  }
  static indent = "";
  static parse(e, r = null) {
    let t = e.readUnsignedByte(),
      i = (t & 32) !== 0;
    t &= 31;
    let s = e.readUnsignedByte();
    if (s >= 128) {
      let o = s & 127;
      for (s = 0; o-- > 0;) s = (s << 8) | e.readUnsignedByte();
    }
    switch (t) {
      case 0:
      case 16: {
        let o = e.position + s,
          d = new T2(t, s),
          c = Array.isArray(r) ? [...r] : null;
        for (; e.position < o;) {
          let f = c?.shift();
          for (; f?.optional && Array.isArray(f.value) !== a._ra86526736d26fb(e);)
            (d.push(f.defaultValue ?? null), (d[String(f.name)] = f.defaultValue ?? null), (f = c?.shift()));
          if (f != null) {
            let l = String(f.name ?? "");
            if (f.extract) {
              let _ = a._r9ec47364e76ae6(e),
                h = new re();
              (e.readBytes(h, 0, _), (d[`${l}_bin`] = h), (h.position = 0), (e.position -= _));
            }
            let b = a.parse(e, f.value ?? null);
            (d.push(b), (d[l] = b));
          } else d.push(a.parse(e));
        }
        return d;
      }
      case 17: {
        let o = e.position + s,
          d = new Set__(t, s);
        for (; e.position < o;) d.push(a.parse(e));
        return d;
      }
      case 2: {
        let o = new re();
        return (e.readBytes(o, 0, s), (o.position = 0), new _iab4331c96b9e6a(t, s, o));
      }
      case 6: {
        let o = new re();
        return (e.readBytes(o, 0, s), (o.position = 0), new _i7e089ec24f5a70(t, s, o));
      }
      case 3:
        (e.toUint8Array()[e.position] ?? 0) === 0 && (e.position++, s--);
      case 4: {
        let o = new _i0fa2d1e22a0340(t, s);
        return (e.readBytes(o, 0, s), o);
      }
      case 5:
        return null;
      case 19: {
        let o = new _id41606a4305ad8(t, s);
        return (o.setString(e.readUTFBytes(s)), o);
      }
      case 20:
      case 34: {
        let o = new _id41606a4305ad8(t, s);
        return (o.setString(e.readUTFBytes(s)), o);
      }
      case 23: {
        let o = new _id38ee954a22aac(t, s);
        return (o._rb8b37c93643ca8(e.readUTFBytes(s)), o);
      }
      default: {
        let o = new _i0fa2d1e22a0340(t, s);
        if (i) {
          let d = new re();
          for (e.readBytes(d, 0, s), d.position = 0; d.bytesAvailable > 0;)
            o.writeBytes(a.parse(d) ?? new re());
          return ((o.position = 0), o);
        }
        return (e.readBytes(o, 0, s), o);
      }
    }
  }
  static _rf45cf4425c9470(e, r) {
    let t = new re(),
      i = r.length;
    return (
      t.writeByte(e),
      i < 128
        ? t.writeByte(i)
        : i < 256
          ? (t.writeByte(129), t.writeByte(i))
          : i < 65536
            ? (t.writeByte(130), t.writeByte(i >> 8), t.writeByte(i))
            : i < 65536 * 256
              ? (t.writeByte(131), t.writeByte(i >> 16), t.writeByte(i >> 8), t.writeByte(i))
              : (t.writeByte(132),
                t.writeByte(i >> 24),
                t.writeByte(i >> 16),
                t.writeByte(i >> 8),
                t.writeByte(i)),
      t.writeBytes(r),
      (t.position = 0),
      t
    );
  }
  static _r9ec47364e76ae6(e) {
    let r = e.position;
    e.position++;
    let t = e.readUnsignedByte();
    if (t >= 128) {
      let i = t & 127;
      for (t = 0; i-- > 0;) t = (t << 8) | e.readUnsignedByte();
    }
    return ((t += e.position - r), (e.position = r), t);
  }
  static _ra86526736d26fb(e) {
    return ((e.toUint8Array()[e.position] ?? 0) & 32) !== 0;
  }
}
