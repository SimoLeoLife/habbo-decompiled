// Estratto da HabboAirLauncher.deobf.js, riga 56235.

class a {
    static {
      n(this, "_if79b7268858425");
    }
    _r3011d5a8503abf = new Map();
    _r7c3779c0dc0ca8 = new Map();
    _rc859de27a29248;
    constructor(e = {}) {
      this._rc859de27a29248 = { ...e };
    }
    static from(e) {
      let r = e instanceof Uint8Array ? e : new Uint8Array(e);
      if (r.byteLength < TC) throw new Error("HAB asset bundle is shorter than its header.");
      if (new TextDecoder().decode(r.subarray(0, 4)) !== Her)
        throw new Error("HAB asset bundle has an invalid magic signature.");
      let i = new DataView(r.buffer, r.byteOffset, r.byteLength),
        s = i.getUint16(4, !0),
        o = i.getUint16(6, !0),
        d = i.getUint32(8, !0),
        c = i.getUint32(12, !0),
        f = i.getUint32(16, !0);
      if (s !== fie) throw new Error(`Unsupported HAB asset bundle version ${s}.`);
      if (o !== Ver) throw new Error(`Unsupported HAB asset bundle flags 0x${o.toString(16)}.`);
      if (c > die) throw new Error(`HAB asset bundle index exceeds the ${die}-byte safety limit.`);
      let l = TC + d,
        b = l + f;
      if (b !== r.byteLength)
        throw new Error(`HAB asset bundle length mismatch: expected ${b}, received ${r.byteLength}.`);
      let _ = r.subarray(TC, l),
        h = uZ(_);
      if (h.byteLength !== c)
        throw new Error(`HAB asset bundle index length mismatch: expected ${c}, decoded ${h.byteLength}.`);
      let p;
      try {
        p = JSON.parse(new TextDecoder().decode(h));
      } catch (w) {
        throw new Error(
          `Failed to parse HAB asset bundle index: ${w instanceof Error ? w.message : String(w)}`,
        );
      }
      validateIndex(p, f);
      let m = new a({
          name: p.name,
          manifest: p.manifest,
          aliases: p.aliases,
          definitions: p.definitions,
          unresolvedAssets: p.unresolvedAssets,
        }),
        v = r.subarray(l);
      for (let w of p.entries) {
        let I = v.subarray(w.offset, w.offset + w.storedLength),
          C = w.compression === "deflate" ? uZ(I) : I;
        if (C.byteLength !== w.originalLength)
          throw new Error(
            `HAB entry "${w.name}" length mismatch: expected ${w.originalLength}, decoded ${C.byteLength}.`,
          );
        m._red19765b60d934(w.name, cie.Buffer.from(C), w.mimeType, w.params);
      }
      return m;
    }
    _red19765b60d934(e, r, t = inferMimeTypeFromFileName(e), i) {
      if (e === "") throw new Error("HAB entry names cannot be empty.");
      (this._r3011d5a8503abf.set(e, cie.Buffer.from(r)),
        this._r7c3779c0dc0ca8.set(e, {
          mimeType: t,
          ...(i != null && Object.keys(i).length > 0 ? { params: { ...i } } : {}),
        }));
    }
    async _r45552fb2db491a() {
      let e = [],
        r = [],
        t = 0;
      for (let [l, b] of this._r3011d5a8503abf.entries()) {
        let _ = new Uint8Array(b.buffer, b.byteOffset, b.byteLength),
          h = Dv(_),
          p = h.byteLength < _.byteLength,
          m = p ? h : _,
          v = this._r7c3779c0dc0ca8.get(l);
        (r.push({
          name: l,
          mimeType: v?.mimeType ?? inferMimeTypeFromFileName(l),
          offset: t,
          storedLength: m.byteLength,
          originalLength: _.byteLength,
          compression: p ? "deflate" : "none",
          ...(v?.params != null ? { params: v.params } : {}),
        }),
          e.push(m),
          (t += m.byteLength));
      }
      let i = { format: "hab", version: fie, ...this._rc859de27a29248, entries: r },
        s = new TextEncoder().encode(JSON.stringify(i));
      if (s.byteLength > die) throw new Error(`HAB asset bundle index exceeds the ${die}-byte safety limit.`);
      let o = Dv(s),
        d = new Uint8Array(TC + o.byteLength + t),
        c = new DataView(d.buffer);
      (d.set(new TextEncoder().encode(Her), 0),
        c.setUint16(4, fie, !0),
        c.setUint16(6, Ver, !0),
        c.setUint32(8, o.byteLength, !0),
        c.setUint32(12, s.byteLength, !0),
        c.setUint32(16, t, !0),
        d.set(o, TC));
      let f = TC + o.byteLength;
      for (let l of e) (d.set(l, f), (f += l.byteLength));
      return cie.Buffer.from(d);
    }
    get files() {
      return this._r3011d5a8503abf;
    }
    get metadata() {
      return { ...this._rc859de27a29248 };
    }
    set metadata(e) {
      this._rc859de27a29248 = { ...e };
    }
    _r781a571d83eab0(e) {
      let r = this._r7c3779c0dc0ca8.get(e);
      return r == null ? null : { ...r };
    }
    get _rcc21e87868a7ba() {
      return this._r3011d5a8503abf.size;
    }
  }
