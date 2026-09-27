// Estratto da HabboAirLauncher.deobf.js, riga 134472.

class {
  static {
    n(this, "_ie89147f82aada6");
  }
  _disposed = !1;
  _r448919959a600d;
  _array;
  _r074bfaea704630 = n((...e) => {
    this._r448919959a600d?.focus == null && this._rd71b968fd5ffaa();
  }, "_r074bfaea704630");
  _rcd565366a10a4f = n((...e) => {
    this._r448919959a600d?.focus == null && this._rd71b968fd5ffaa();
  }, "_rcd565366a10a4f");
  get disposed() {
    return this._disposed;
  }
  constructor(e) {
    ((this._array = []),
      (this._r448919959a600d = e.stage),
      this._r448919959a600d?.addEventListener(M.ACTIVATE, this._r074bfaea704630),
      this._r448919959a600d?.addEventListener(FocusManager._r8365d86c670be6, this._rcd565366a10a4f),
      this._r448919959a600d?.addEventListener(FocusManager._rbd354e1c4b5e58, this._rcd565366a10a4f),
      this._r448919959a600d?.addEventListener(FocusManager._rb5c058dcd29ca7, this._rcd565366a10a4f));
  }
  dispose() {
    this._disposed ||
      (this._r448919959a600d?.removeEventListener(M.ACTIVATE, this._r074bfaea704630),
      this._r448919959a600d?.removeEventListener(FocusManager._r8365d86c670be6, this._rcd565366a10a4f),
      this._r448919959a600d?.removeEventListener(FocusManager._rbd354e1c4b5e58, this._rcd565366a10a4f),
      this._r448919959a600d?.removeEventListener(FocusManager._rb5c058dcd29ca7, this._rcd565366a10a4f),
      (this._r448919959a600d = null),
      (this._array = []),
      (this._disposed = !0));
  }
  _r03c99e92d7aa86(e) {
    this._array.indexOf(e) === -1 && (this._array.push(e), this._r448919959a600d?.focus == null && e.focus());
  }
  _r3ad9d8555857c0(e) {
    let r = this._array.indexOf(e);
    (r > -1 && this._array.splice(r, 1), this._r448919959a600d?.focus == null && this._rd71b968fd5ffaa());
  }
  _rd71b968fd5ffaa() {
    for (let e = this._array.length - 1; e >= 0; e -= 1) {
      let r = this._array[e];
      if (r.disposed) this._array.splice(e, 1);
      else return (r.focus(), r);
    }
    return null;
  }
}
