// Estratto da HabboAirLauncher.deobf.js, riga 376594.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/utils/class_4041.as

class a extends A {
    static {
      n(this, "ExtendedBitmapData");
    }
    static ZERO_POINT = new E(0, 0);
    var_1189 = 0;
    _disposed = !1;
    _raf2723192fbd4a = null;
    constructor(e, r, t = !0, i = 4294967295, s = !0) {
      (super(e, r, t, i, s),
        Object.defineProperty(this, Dir, { value: !0, enumerable: !1, configurable: !1, writable: !1 }));
    }
    static [Symbol.hasInstance](e) {
      return typeof e == "object" && e !== null && e[Dir] === !0;
    }
    get referenceCount() {
      return this.var_1189;
    }
    get disposed() {
      return this._disposed;
    }
    addReference() {
      this.var_1189++;
    }
    _r9a52e5987a4092(e) {
      (this._raf2723192fbd4a ??= new Set()).add(e);
    }
    _r8619031e882d28(e) {
      (this._raf2723192fbd4a?.delete(e), this._raf2723192fbd4a?.size === 0 && (this._raf2723192fbd4a = null));
    }
    dispose() {
      if (
        !this._disposed &&
        (this.var_1189--,
        this.var_1189 <= 0 && (super.dispose(), (this._disposed = !0)),
        this.var_1189 <= 1 && this._raf2723192fbd4a != null)
      ) {
        for (let e of this._raf2723192fbd4a) e();
        this._disposed && (this._raf2723192fbd4a = null);
      }
    }
    clone() {
      let e;
      try {
        ((e = new a(this.width, this.height, !0, 16777215)),
          e.copyPixels(this, this.rect, a.ZERO_POINT, null, null, !0));
      } catch {
        e = new a(1, 1, !0, 16777215);
      }
      return e;
    }
  }
