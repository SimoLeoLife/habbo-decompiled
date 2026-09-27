// Estratto da HabboAirLauncher.deobf.js, riga 833.

class WY {
      static {
        n(this, "_Color");
      }
      constructor(e = 16777215) {
        ((this._value = null),
          (this._components = new Float32Array(4)),
          this._components.fill(1),
          (this._int = 16777215),
          (this.value = e));
      }
      get red() {
        return this._components[0];
      }
      get green() {
        return this._components[1];
      }
      get blue() {
        return this._components[2];
      }
      get alpha() {
        return this._components[3];
      }
      setValue(e) {
        return ((this.value = e), this);
      }
      set value(e) {
        if (e instanceof WY)
          ((this._value = this._cloneSource(e._value)),
            (this._int = e._int),
            this._components.set(e._components));
        else {
          if (e === null) throw new Error("Cannot set Color#value to null");
          (this._value === null || !this._isSourceEqual(this._value, e)) &&
            ((this._value = this._cloneSource(e)), this._normalize(this._value));
        }
      }
      get value() {
        return this._value;
      }
      _cloneSource(e) {
        return typeof e == "string" || typeof e == "number" || e instanceof Number || e === null
          ? e
          : Array.isArray(e) || ArrayBuffer.isView(e)
            ? e.slice(0)
            : typeof e == "object" && e !== null
              ? { ...e }
              : e;
      }
      _isSourceEqual(e, r) {
        let t = typeof e;
        if (t !== typeof r) return !1;
        if (t === "number" || t === "string" || e instanceof Number) return e === r;
        if ((Array.isArray(e) && Array.isArray(r)) || (ArrayBuffer.isView(e) && ArrayBuffer.isView(r)))
          return e.length !== r.length ? !1 : e.every((s, o) => s === r[o]);
        if (e !== null && r !== null) {
          let s = Object.keys(e),
            o = Object.keys(r);
          return s.length !== o.length ? !1 : s.every((d) => e[d] === r[d]);
        }
        return e === r;
      }
      toRgba() {
        let [e, r, t, i] = this._components;
        return { r: e, g: r, b: t, a: i };
      }
      toRgb() {
        let [e, r, t] = this._components;
        return { r: e, g: r, b: t };
      }
      toRgbaString() {
        let [e, r, t] = this.toUint8RgbArray();
        return `rgba(${e},${r},${t},${this.alpha})`;
      }
      toUint8RgbArray(e) {
        let [r, t, i] = this._components;
        return (
          this._arrayRgb || (this._arrayRgb = []),
          e || (e = this._arrayRgb),
          (e[0] = Math.round(r * 255)),
          (e[1] = Math.round(t * 255)),
          (e[2] = Math.round(i * 255)),
          e
        );
      }
      toArray(e) {
        (this._arrayRgba || (this._arrayRgba = []), e || (e = this._arrayRgba));
        let [r, t, i, s] = this._components;
        return ((e[0] = r), (e[1] = t), (e[2] = i), (e[3] = s), e);
      }
      toRgbArray(e) {
        (this._arrayRgb || (this._arrayRgb = []), e || (e = this._arrayRgb));
        let [r, t, i] = this._components;
        return ((e[0] = r), (e[1] = t), (e[2] = i), e);
      }
      toNumber() {
        return this._int;
      }
      toBgrNumber() {
        let [e, r, t] = this.toUint8RgbArray();
        return (t << 16) + (r << 8) + e;
      }
      toLittleEndianNumber() {
        let e = this._int;
        return (e >> 16) + (e & 65280) + ((e & 255) << 16);
      }
      multiply(e) {
        let [r, t, i, s] = WY._temp.setValue(e)._components;
        return (
          (this._components[0] *= r),
          (this._components[1] *= t),
          (this._components[2] *= i),
          (this._components[3] *= s),
          this._refreshInt(),
          (this._value = null),
          this
        );
      }
      premultiply(e, r = !0) {
        return (
          r && ((this._components[0] *= e), (this._components[1] *= e), (this._components[2] *= e)),
          (this._components[3] = e),
          this._refreshInt(),
          (this._value = null),
          this
        );
      }
      toPremultiplied(e, r = !0) {
        if (e === 1) return (255 << 24) + this._int;
        if (e === 0) return r ? 0 : this._int;
        let t = (this._int >> 16) & 255,
          i = (this._int >> 8) & 255,
          s = this._int & 255;
        return (
          r && ((t = (t * e + 0.5) | 0), (i = (i * e + 0.5) | 0), (s = (s * e + 0.5) | 0)),
          ((e * 255) << 24) + (t << 16) + (i << 8) + s
        );
      }
      toHex() {
        let e = this._int.toString(16);
        return `#${"000000".substring(0, 6 - e.length) + e}`;
      }
      toHexa() {
        let r = Math.round(this._components[3] * 255).toString(16);
        return this.toHex() + "00".substring(0, 2 - r.length) + r;
      }
      setAlpha(e) {
        return ((this._components[3] = this._clamp(e)), (this._value = null), this);
      }
      _normalize(e) {
        let r, t, i, s;
        if ((typeof e == "number" || e instanceof Number) && e >= 0 && e <= 16777215) {
          let o = e;
          ((r = ((o >> 16) & 255) / 255), (t = ((o >> 8) & 255) / 255), (i = (o & 255) / 255), (s = 1));
        } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4)
          ((e = this._clamp(e)), ([r, t, i, s = 1] = e));
        else if (
          (e instanceof Uint8Array || e instanceof Uint8ClampedArray) &&
          e.length >= 3 &&
          e.length <= 4
        )
          ((e = this._clamp(e, 0, 255)),
            ([r, t, i, s = 255] = e),
            (r /= 255),
            (t /= 255),
            (i /= 255),
            (s /= 255));
        else if (typeof e == "string" || typeof e == "object") {
          if (typeof e == "string") {
            let d = WY.HEX_PATTERN.exec(e);
            d && (e = `#${d[2]}`);
          }
          let o = z0(e);
          o.isValid() && (({ r, g: t, b: i, a: s } = o.rgba), (r /= 255), (t /= 255), (i /= 255));
        }
        if (r !== void 0)
          ((this._components[0] = r),
            (this._components[1] = t),
            (this._components[2] = i),
            (this._components[3] = s),
            this._refreshInt());
        else throw new Error(`Unable to convert color ${e}`);
      }
      _refreshInt() {
        this._clamp(this._components);
        let [e, r, t] = this._components;
        this._int = ((e * 255) << 16) + ((r * 255) << 8) + ((t * 255) | 0);
      }
      _clamp(e, r = 0, t = 1) {
        return typeof e == "number"
          ? Math.min(Math.max(e, r), t)
          : (e.forEach((i, s) => {
              e[s] = Math.min(Math.max(i, r), t);
            }),
            e);
      }
      static isColorLike(e) {
        return (
          typeof e == "number" ||
          typeof e == "string" ||
          e instanceof Number ||
          e instanceof WY ||
          Array.isArray(e) ||
          e instanceof Uint8Array ||
          e instanceof Uint8ClampedArray ||
          e instanceof Float32Array ||
          (e.r !== void 0 && e.g !== void 0 && e.b !== void 0) ||
          (e.r !== void 0 && e.g !== void 0 && e.b !== void 0 && e.a !== void 0) ||
          (e.h !== void 0 && e.s !== void 0 && e.l !== void 0) ||
          (e.h !== void 0 && e.s !== void 0 && e.l !== void 0 && e.a !== void 0) ||
          (e.h !== void 0 && e.s !== void 0 && e.v !== void 0) ||
          (e.h !== void 0 && e.s !== void 0 && e.v !== void 0 && e.a !== void 0)
        );
      }
    }
