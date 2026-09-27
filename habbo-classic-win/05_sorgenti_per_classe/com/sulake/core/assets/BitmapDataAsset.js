// Extracted from HabboAirLauncher.deobf.js, line 55040.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/assets/BitmapDataAsset.as

class a {
    constructor(e, r = null) {
      this._rb1b4b9727ce7bd = e;
      this._url = r;
      (Object.defineProperty(this, mer, { value: !0, enumerable: !1, configurable: !1, writable: !1 }),
        (a._instances += 1));
    }
    static {
      n(this, "BitmapDataAsset");
    }
    name = "";
    static _instances = 0;
    static var_2072 = 0;
    static _r5ab9537d52907a = !0;
    _disposed = !1;
    _rectangle = null;
    _unknown = null;
    _bitmap = null;
    _offset = new E(0, 0);
    _r8425323da92545 = null;
    _rd97e7e646fd7ee = null;
    _rddff87199bbd83 = null;
    _r7a9b0ee1b7faa5 = null;
    _rdb99ab57ad9fb6 = null;
    _r6eada0a8727f62 = null;
    _flipH = !1;
    _flipV = !1;
    var_76 = !0;
    _r005d3ce94b392e = !1;
    _ra5cde248512630 = null;
    _r90d1fd39040d4c = !1;
    static [Symbol.hasInstance](e) {
      return typeof e == "object" && e !== null && e[mer] === !0;
    }
    static get instances() {
      return a._instances;
    }
    static get allocatedByteCount() {
      return a.var_2072;
    }
    get url() {
      return this._url;
    }
    get flipH() {
      return this._flipH;
    }
    get flipV() {
      return this._flipV;
    }
    get offset() {
      return this._offset ?? new E();
    }
    get content() {
      return (
        this._bitmap == null && this.prepareLazyContent(),
        this._rfe765b35b549aa(),
        this._bitmap
      );
    }
    get nativeTexture() {
      if (this._r7a9b0ee1b7faa5 != null) return this._r7a9b0ee1b7faa5;
      let e = this._r5e1eeb3f6e0a4c();
      if (
        (e == null &&
          (this._bitmap == null && this.prepareLazyContent(),
          (e = this._bitmap?.texture ?? null)),
        e == null)
      )
        return null;
      if (this._r8425323da92545 == null) return ((this._r7a9b0ee1b7faa5 = e), this._r7a9b0ee1b7faa5);
      let r = e.frame.constructor,
        t = e.constructor,
        i = new r(
          Math.trunc(this._r8425323da92545.x),
          Math.trunc(this._r8425323da92545.y),
          Math.trunc(this._r8425323da92545.width),
          Math.trunc(this._r8425323da92545.height),
        ),
        s = Math.max(
          1,
          Math.trunc(this._rddff87199bbd83?.x ?? this._rectangle?.width ?? this._r8425323da92545.width),
        ),
        o = Math.max(
          1,
          Math.trunc(this._rddff87199bbd83?.y ?? this._rectangle?.height ?? this._r8425323da92545.height),
        ),
        d = new r(0, 0, s, o),
        c =
          this._rd97e7e646fd7ee != null
            ? new r(
                Math.trunc(this._rd97e7e646fd7ee.x),
                Math.trunc(this._rd97e7e646fd7ee.y),
                Math.trunc(i.width),
                Math.trunc(i.height),
              )
            : void 0;
      return (
        (this._r7a9b0ee1b7faa5 = new t({ source: e.source, frame: i, orig: d, trim: c })),
        this._r7a9b0ee1b7faa5
      );
    }
    get declaration() {
      return this._rb1b4b9727ce7bd;
    }
    get disposed() {
      return this._disposed;
    }
    get rectangle() {
      if (this._rectangle == null)
        if (this._rddff87199bbd83 != null)
          this._rectangle = new D(
            0,
            0,
            Math.max(1, Math.trunc(this._rddff87199bbd83.x)),
            Math.max(1, Math.trunc(this._rddff87199bbd83.y)),
          );
        else if (this._r8425323da92545 != null)
          this._rectangle = new D(
            0,
            0,
            Math.max(1, Math.trunc(this._r8425323da92545.width)),
            Math.max(1, Math.trunc(this._r8425323da92545.height)),
          );
        else {
          let e = this.nativeTexture;
          if (e != null)
            this._rectangle = new D(
              0,
              0,
              Math.max(1, Math.round(e.orig.width)),
              Math.max(1, Math.round(e.orig.height)),
            );
          else {
            let r = this.content;
            r != null && (this._rectangle = r.rect);
          }
        }
      return this._rectangle ?? new D();
    }
    dispose() {
      if (!this._disposed) {
        if (((a._instances -= 1), this._bitmap != null))
          try {
            ((a.var_2072 -= this._bitmap.width * this._bitmap.height * 4),
              this.var_76 && this._bitmap.dispose());
          } catch {}
        (this._unknown instanceof A
          ? this.var_76 && this._unknown.dispose()
          : this._unknown instanceof UnkClass_3a5c6f
            ? this._unknown.bitmapData?.dispose()
            : this._unknown instanceof re && this._unknown.clear(),
          (this._unknown = null),
          this._r15aba2381327d2(),
          (this._bitmap = null),
          (this._offset = null),
          (this._r8425323da92545 = null),
          (this._rd97e7e646fd7ee = null),
          (this._rddff87199bbd83 = null),
          (this._rb1b4b9727ce7bd = null),
          (this._url = null),
          (this._rectangle = null),
          (this._disposed = !0));
      }
    }
    setUnknownContent(e) {
      if (this._bitmap != null) {
        if (this._bitmap === e) return;
        this.var_76 && this._bitmap.dispose();
      }
      (this._r15aba2381327d2(),
        (this._unknown = e),
        (this._bitmap = null),
        (this._ra5cde248512630 = null),
        (this._r90d1fd39040d4c = !1));
    }
    _ra00f110c7757cf(e, r) {
      (this._r15aba2381327d2(),
        (this._unknown = null),
        (this._bitmap = null),
        (this._ra5cde248512630 = r?._rb4289697c787e3 ?? null),
        (this._rdb99ab57ad9fb6 = e),
        (this._r7a9b0ee1b7faa5 = e),
        (this._r005d3ce94b392e = r?._r39118135b80382 ?? !1),
        (this._r90d1fd39040d4c = !1));
      let t = r?._rb161f51eae4dc6 ?? null;
      if (t != null) {
        let i = e.source;
        i._rda8f82deca7dcd == null && (i._rda8f82deca7dcd = t);
      }
    }
    prepareLazyContent() {
      if (this._bitmap == null && this._ra5cde248512630 != null) {
        let e = this._ra5cde248512630();
        if (((this._ra5cde248512630 = null), e != null)) {
          ((this._bitmap = e),
            (this.var_76 = !0),
            (a.var_2072 += this._bitmap.width * this._bitmap.height * 4));
          return;
        }
      }
      if (this._unknown != null) {
        if (typeof this._unknown == "function") {
          let e = new this._unknown();
          if (
            e instanceof UnkClass_3a5c6f &&
            (a._r5ab9537d52907a
              ? ((this._bitmap = e.bitmapData?.clone() ?? null), e.bitmapData?.dispose())
              : ((this._bitmap = e.bitmapData), (e.bitmapData = null)),
            this._bitmap != null)
          ) {
            ((this.var_76 = !0),
              (a.var_2072 += this._bitmap.width * this._bitmap.height * 4),
              (this._unknown = null));
            return;
          }
          if (e instanceof A) {
            ((this._bitmap = e), (this.var_76 = !0), (this._unknown = null));
            return;
          }
        }
        if (this._unknown instanceof UnkClass_3a5c6f) {
          if (((this._bitmap = this._unknown.bitmapData), this._bitmap == null))
            throw new Error("Failed to convert Bitmap to BitmapDataAsset!");
          ((this.var_76 = !0), (this._unknown = null));
          return;
        }
        if (this._unknown instanceof A) {
          ((this._bitmap = this._unknown), (this.var_76 = !0), (this._unknown = null));
          return;
        }
        if (this._unknown instanceof a) {
          if (
            ((this._bitmap = this._unknown.content),
            this._offset == null && (this._offset = this._unknown._offset?.clone() ?? new E()),
            this._rectangle == null && (this._rectangle = this._unknown._rectangle?.clone() ?? null),
            this._r8425323da92545 == null &&
              (this._r8425323da92545 = this._unknown._r8425323da92545?.clone() ?? null),
            this._rd97e7e646fd7ee == null &&
              (this._rd97e7e646fd7ee = this._unknown._rd97e7e646fd7ee?.clone() ?? null),
            this._rddff87199bbd83 == null &&
              (this._rddff87199bbd83 = this._unknown._rddff87199bbd83?.clone() ?? null),
            (this.var_76 = !1),
            this._bitmap == null)
          )
            throw new Error("Failed to read content from BitmapDataAsset!");
          this._unknown = null;
          return;
        }
        if (this._unknown instanceof re)
          try {
            ((this._bitmap = new UnkClass_fdd920().decode(this._unknown)),
              this._bitmap != null &&
                ((this.var_76 = !0),
                (a.var_2072 += this._bitmap.width * this._bitmap.height * 4)));
          } finally {
            this._unknown = null;
          }
      }
    }
    setFromOtherAsset(e) {
      if (!(e instanceof a)) throw new Error("Provided asset should be of type BitmapDataAsset!");
      if (
        (this._r15aba2381327d2(),
        (this._unknown = null),
        (this._bitmap = null),
        (this._ra5cde248512630 = e._ra5cde248512630),
        (this._rdb99ab57ad9fb6 = e._rdb99ab57ad9fb6),
        (this._r7a9b0ee1b7faa5 = e._r7a9b0ee1b7faa5),
        (this._r005d3ce94b392e = !1),
        (this._r6eada0a8727f62 = null),
        (this._offset = e._offset?.clone() ?? new E()),
        (this._rectangle = e._rectangle?.clone() ?? null),
        (this._r8425323da92545 = e._r8425323da92545?.clone() ?? null),
        (this._rd97e7e646fd7ee = e._rd97e7e646fd7ee?.clone() ?? null),
        (this._rddff87199bbd83 = e._rddff87199bbd83?.clone() ?? null),
        (this._flipH = e._flipH),
        (this._flipV = e._flipV),
        (this._r90d1fd39040d4c = e._r90d1fd39040d4c),
        e._bitmap != null)
      ) {
        ((this._bitmap = e._bitmap), (this.var_76 = !1));
        return;
      }
      if (e._unknown instanceof a) {
        ((this._unknown = e._unknown), (this.var_76 = !1));
        return;
      }
      if (e._unknown instanceof A) {
        ((this._bitmap = e._unknown), (this.var_76 = !1));
        return;
      }
      if (e._unknown instanceof UnkClass_3a5c6f) {
        ((this._bitmap = e._unknown.bitmapData), (this.var_76 = !1));
        return;
      }
      if (e._unknown instanceof re) {
        ((this._unknown = re.compress(e._unknown.toUint8Array().slice())),
          (this.var_76 = !0));
        return;
      }
      ((this._unknown = e._unknown), (this.var_76 = !0));
    }
    setParamsDesc(e) {
      (this._r15aba2381327d2(), (this._r90d1fd39040d4c = !1));
      for (let r of this._r8744df271e3340(e)) {
        let t = r.value.split(",");
        switch (r.key) {
          case "offset":
            ((this.offset.x = Number.parseInt(t[0] ?? "0", 10)),
              (this.offset.y = Number.parseInt(t[1] ?? "0", 10)));
            break;
          case "region":
            (this._rectangle == null && (this._rectangle = new D()),
              (this._rectangle.x = Number.parseInt(t[0] ?? "0", 10)),
              (this._rectangle.y = Number.parseInt(t[1] ?? "0", 10)),
              (this._rectangle.width = Number.parseInt(t[2] ?? "0", 10)),
              (this._rectangle.height = Number.parseInt(t[3] ?? "0", 10)));
            break;
          case "sourceRegion":
            (this._r8425323da92545 == null && (this._r8425323da92545 = new D()),
              (this._r8425323da92545.x = Number.parseInt(t[0] ?? "0", 10)),
              (this._r8425323da92545.y = Number.parseInt(t[1] ?? "0", 10)),
              (this._r8425323da92545.width = Number.parseInt(t[2] ?? "0", 10)),
              (this._r8425323da92545.height = Number.parseInt(t[3] ?? "0", 10)));
            break;
          case "spriteSourceSize":
            (this._rd97e7e646fd7ee == null && (this._rd97e7e646fd7ee = new D()),
              (this._rd97e7e646fd7ee.x = Number.parseInt(t[0] ?? "0", 10)),
              (this._rd97e7e646fd7ee.y = Number.parseInt(t[1] ?? "0", 10)),
              (this._rd97e7e646fd7ee.width = Number.parseInt(t[2] ?? "0", 10)),
              (this._rd97e7e646fd7ee.height = Number.parseInt(t[3] ?? "0", 10)));
            break;
          case "sourceSize":
            (this._rddff87199bbd83 == null && (this._rddff87199bbd83 = new E()),
              (this._rddff87199bbd83.x = Number.parseInt(t[0] ?? "0", 10)),
              (this._rddff87199bbd83.y = Number.parseInt(t[1] ?? "0", 10)));
            break;
          case "flipH":
            this._flipH = r.value === "1" || r.value === "true";
            break;
          case "flipV":
            this._flipV = r.value === "1" || r.value === "true";
            break;
        }
      }
    }
    _rfe765b35b549aa() {
      if (this._bitmap == null || this._r8425323da92545 == null || this._r90d1fd39040d4c) return;
      let e = this._bitmap,
        r = this._r8425323da92545.clone(),
        t = this._rd97e7e646fd7ee?.clone() ?? new D(),
        i = Math.max(1, Math.trunc(this._rddff87199bbd83?.x ?? this._rectangle?.width ?? r.width)),
        s = Math.max(1, Math.trunc(this._rddff87199bbd83?.y ?? this._rectangle?.height ?? r.height)),
        o = new A(i, s, !0, 16777215),
        d = new E(Math.trunc(t.x), Math.trunc(t.y));
      (this._rdb99ab57ad9fb6 == null && ((this._rdb99ab57ad9fb6 = e.texture), (this._r005d3ce94b392e = !1)),
        o.copyPixels(e, r, d, null, null, !0),
        (a.var_2072 += o.width * o.height * 4),
        (this._bitmap = o),
        (this._rectangle = new D(0, 0, i, s)),
        (this.var_76 = !0),
        (this._r90d1fd39040d4c = !0));
    }
    _r15aba2381327d2() {
      (this._r7a9b0ee1b7faa5 != null &&
        this._r7a9b0ee1b7faa5 !== this._rdb99ab57ad9fb6 &&
        this._r7a9b0ee1b7faa5.destroy(!1),
        this._rdb99ab57ad9fb6 != null && this._r005d3ce94b392e && this._rdb99ab57ad9fb6.destroy(!0),
        this._r6eada0a8727f62 != null && typeof URL < "u" && URL.revokeObjectURL(this._r6eada0a8727f62),
        (this._r7a9b0ee1b7faa5 = null),
        (this._rdb99ab57ad9fb6 = null),
        (this._r6eada0a8727f62 = null),
        (this._r005d3ce94b392e = !1));
    }
    _r8744df271e3340(e) {
      if (e == null) return [];
      if (typeof e == "object" && "toArray" in e && typeof e.toArray == "function") {
        let r = [];
        for (let t of e.toArray())
          typeof t != "string" &&
            r.push({ key: String(t.attribute("key")), value: String(t.attribute("value")) });
        return r;
      }
      return typeof e == "object"
        ? Object.entries(e)
            .filter(([, r]) => r != null)
            .map(([r, t]) => ({ key: r, value: String(t) }))
        : [];
    }
    _r5e1eeb3f6e0a4c() {
      if (this._rdb99ab57ad9fb6 != null) return this._rdb99ab57ad9fb6;
      if (this._unknown instanceof a) return this._unknown.nativeTexture;
      if (this._unknown instanceof re && this._r3c647d57349305()) return this._rab7cf9636f44b3(this._unknown);
      if (this._unknown instanceof A) return this._r6640f46cd8b220(this._unknown.texture, this._unknown);
      if (this._unknown instanceof UnkClass_3a5c6f) {
        let e = this._unknown.bitmapData;
        return e != null ? this._r6640f46cd8b220(e.texture, e) : null;
      }
      return null;
    }
    _r3c647d57349305() {
      let e = this._rb1b4b9727ce7bd?.mimeType ?? "";
      return e === "image/png" || e === "image/jpeg" || e === "image/gif";
    }
    _rab7cf9636f44b3(e) {
      if (typeof Blob > "u" || typeof URL > "u") return null;
      let r = this._rb1b4b9727ce7bd?.mimeType ?? "image/png",
        t = e.toUint8Array().slice(),
        i = r === "image/png" ? this._ree3e3b4d25587b(t) : null,
        s = i?.texture ?? this._rf0f765356c5d7d(t, r);
      if (s == null) return null;
      let o = s.source;
      if (o._rda8f82deca7dcd == null) {
        if (i?._rb161f51eae4dc6 != null) o._rda8f82deca7dcd = i._rb161f51eae4dc6;
        else if (r === "image/png") {
          let d = t.slice();
          o._rda8f82deca7dcd = () => _i28298eb7ae9064(d);
        }
      }
      return (
        (this._rdb99ab57ad9fb6 = s),
        (this._r6eada0a8727f62 = i == null ? this._r6eada0a8727f62 : null),
        (this._r005d3ce94b392e = !0),
        this._rdb99ab57ad9fb6
      );
    }
    _ree3e3b4d25587b(e) {
      try {
        let r = decodePng(e),
          t = _i57edec660c1839({
            channels: r.channels,
            data: r.data,
            depth: r.depth,
            height: r.height,
            palette: r.palette,
            transparency: r.transparency,
            width: r.width,
          }),
          i = _idcc4c4ecf0e220(t.data, t.channels, r.width, r.height);
        if (i == null) return null;
        let s = _i5e9e30c6bf8c8e(r.width, r.height, i),
          o = i.slice();
        return { texture: s, _rb161f51eae4dc6: n(() => _i17d9748585e302(o), "_rb161f51eae4dc6") };
      } catch {
        return null;
      }
    }
    _rf0f765356c5d7d(e, r) {
      let t = URL.createObjectURL(new Blob([new Uint8Array(e)], { type: r })),
        i = _i8f16ec8d25f8be(t);
      return i == null ? (URL.revokeObjectURL(t), null) : ((this._r6eada0a8727f62 = t), i);
    }
    _r6640f46cd8b220(e, r) {
      let t = e.source;
      return (t._rda8f82deca7dcd == null && (t._rda8f82deca7dcd = () => r._r0adb6e3e4060b8()), e);
    }
  }
