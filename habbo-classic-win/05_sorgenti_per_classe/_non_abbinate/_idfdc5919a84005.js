// Estratto da HabboAirLauncher.deobf.js, riga 379351.

class {
    static {
      n(this, "_idfdc5919a84005");
    }
    _rf1b6806c51b5c3;
    _listeners = new Map();
    _r4ca7a45627826e = !1;
    constructor(e) {
      ((this._rf1b6806c51b5c3 = e),
        typeof window < "u" && window.addEventListener("pagehide", this._r39185b9cddac7a));
    }
    audioPlaybackMode() {}
    addEventListener(e, r) {
      let t = this._listeners.get(e) ?? new Set();
      (t.add(r), this._listeners.set(e, t));
    }
    removeEventListener(e, r) {
      let t = this._listeners.get(e);
      t != null && (t.delete(r), t.size === 0 && this._listeners.delete(e));
    }
    _rc38fa9ccf67499(e) {
      this._r4ca7a45627826e = e;
    }
    exit(e = 0) {
      if ((this.emit("exit"), !(typeof window > "u"))) {
        if (this._rf1b6806c51b5c3 && e !== 0) {
          window.setTimeout(() => {
            window.location.reload();
          }, 0);
          return;
        }
        !this._r4ca7a45627826e && typeof window.close == "function" && window.close();
      }
    }
    _r39185b9cddac7a = n(() => {
      this.emit("exit");
    }, "_r39185b9cddac7a");
    emit(e) {
      let r = this._listeners.get(e);
      if (r != null) for (let t of Array.from(r)) t();
    }
  }
