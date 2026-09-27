// Estratto da HabboAirLauncher.deobf.js, riga 60264.

class {
    static {
      n(this, "_i9dd47e48576289");
    }
    _receiver;
    _context;
    _priority;
    _rbb4783ac3c0219 = Date.now();
    _rc4703767a39347 = 0;
    var_356;
    _r046be371eecef3;
    constructor(e, r, t) {
      ((this._receiver = e),
        (this._context = r),
        (this._priority = t),
        (this._r046be371eecef3 = t === 0 ? M._r6ae5d0b3fd884b : M._re9c5159721d60d),
        (this.var_356 = r.dispatchEvent?.stage ?? r.dispatchEvent),
        this.var_356?.addEventListener?.(this._r046be371eecef3, this._r63b99523966bb2));
    }
    get receiver() {
      return this._receiver;
    }
    get disposed() {
      return this._receiver == null || this._receiver.disposed;
    }
    dispose() {
      (this.var_356?.removeEventListener?.(this._r046be371eecef3, this._r63b99523966bb2),
        (this._receiver = null),
        (this._context = null));
    }
    _r63b99523966bb2 = n(() => {
      if (this.disposed || this._receiver == null || this._context == null) return;
      let e = Date.now(),
        r = e - this._rbb4783ac3c0219;
      if (
        ((this._rbb4783ac3c0219 = e),
        this._priority > 0 && this._rc4703767a39347 < this._priority)
      ) {
        let t = this._context.dispatchEvent?.stage?.frameRate ?? 60;
        if (r > 1e3 / t) {
          this._rc4703767a39347 += 1;
          return;
        }
      }
      this._rc4703767a39347 = 0;
      try {
        this._receiver.update(r);
      } catch (t) {
        let i = t instanceof Error ? t : new Error(String(t));
        this._context.error(
          `Error in update receiver "${_iad1dc21ca35e21(this._receiver)}": ${i.message}`,
          !0,
          0,
          i,
        );
      }
    }, "_r63b99523966bb2");
  }
