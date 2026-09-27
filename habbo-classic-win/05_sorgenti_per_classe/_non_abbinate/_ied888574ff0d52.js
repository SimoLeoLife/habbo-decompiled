// Estratto da HabboAirLauncher.deobf.js, riga 58587.

class a extends Ft {
  constructor(r = !1) {
    super();
    this.var_1933 = r;
  }
  static {
    n(this, "_ied888574ff0d52");
  }
  static MAX_SIMULTANEOUS_DOWNLOADS = 4;
  _queue = [];
  _r93d17bf982a3f0 = [];
  get length() {
    return this._queue.length + this._r93d17bf982a3f0.length;
  }
  dispose() {
    if (!this.disposed) {
      for (let r of this._r93d17bf982a3f0) r.dispose();
      for (let r of this._queue) r.dispose();
      ((this._r93d17bf982a3f0 = []), (this._queue = []), super.dispose());
    }
  }
  push(r) {
    this.disposed ||
      this._rf6bcb7d4e611e9(r.url ?? "") ||
      this._r08f4cfc3acee8b(r.url ?? "") != null ||
      (r.paused ? this._queue.push(r) : this._r93d17bf982a3f0.push(r),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._rd73af70da925d7),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._r3eb0d6ac4236f9),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_DISPOSE, this._r46614989755226),
      r.addEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r47b56cfdf38a36),
      this.next());
  }
  _r08f4cfc3acee8b(r, t = !0) {
    if (this.disposed) return null;
    let i = t ? (r.split("?")[0] ?? r) : r;
    for (let s of this._r93d17bf982a3f0) {
      let o = s.url ?? "";
      if ((t ? (o.split("?")[0] ?? o) : o) === i) return s;
    }
    return null;
  }
  next() {
    if (!this.disposed)
      for (; this._r93d17bf982a3f0.length < a.MAX_SIMULTANEOUS_DOWNLOADS && this._queue.length > 0;) {
        let r = this._queue.shift();
        (this._r93d17bf982a3f0.push(r), r.resume());
      }
  }
  _rf6bcb7d4e611e9(r, t = !0) {
    if (this.disposed) return !1;
    let i = t ? (r.split("?")[0] ?? r) : r;
    for (let s of this._queue) {
      let o = s.url ?? "";
      if ((t ? (o.split("?")[0] ?? o) : o) === i) return !0;
    }
    return !1;
  }
  _r8ac4aecc984d0d(r) {
    (r.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._rd73af70da925d7),
      r.removeEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._r3eb0d6ac4236f9),
      r.removeEventListener(ht.LIBRARY_LOADER_EVENT_DISPOSE, this._r46614989755226),
      r.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r47b56cfdf38a36));
    let t = this._queue.indexOf(r);
    t >= 0 && this._queue.splice(t, 1);
    let i = this._r93d17bf982a3f0.indexOf(r);
    i >= 0 && this._r93d17bf982a3f0.splice(i, 1);
  }
  _rd73af70da925d7 = n((r) => {
    let t = r.target;
    (t != null && this._r8ac4aecc984d0d(t), this.next());
  }, "_rd73af70da925d7");
  _r3eb0d6ac4236f9 = n((r) => {
    this.var_1933;
  }, "_r3eb0d6ac4236f9");
  _r46614989755226 = n((r) => {
    let t = r.target;
    (t != null && this._r8ac4aecc984d0d(t), this.next());
  }, "_r46614989755226");
  _r47b56cfdf38a36 = n((r) => {
    let t = r.target;
    (t != null && this._r8ac4aecc984d0d(t), this.next());
  }, "_r47b56cfdf38a36");
}
