// Estratto da HabboAirLauncher.deobf.js, riga 58292.

class a extends Ft {
    constructor(r = null, t = !1, i = !1) {
      super();
      this.var_1933 = i;
      this._r32d7a6ba1dd4cd = t;
    }
    static {
      n(this, "_i67a58d22d3e804");
    }
    static _ra2316f4b96dbc0 = 5;
    static LIBRARY_LOADER_FINALIZE = "LIBRARY_LOADER_FINALIZE";
    static _r279d4ebb34392e = !0;
    static MAX_SIMULTANEOUS_DOWNLOADS = 6;
    static _rc77885fd4ddf4c = new _i88cf60ef4c6109();
    static _rb19accee5391df = [];
    static _r72bb2e216e6ccf = [];
    _status = 0;
    _r33ac9e2c431a77 = null;
    _manifest = rr("");
    _resource = null;
    _name = "";
    _ready = !1;
    _r32d7a6ba1dd4cd = !1;
    _r73f3d09e355c37 = "";
    _r6d3691cf5af4fa = "";
    _r156a250413afe5 = 0;
    _r1e01d3a2dfaded = 0;
    _r20839cd613f850 = 0;
    _ref1be84f630642 = 0;
    _r01697471fb99bd = null;
    var_1775 = new Map();
    _rf795d45dc76b8e = new _i115705f2de084f(this.var_1775);
    static _r046c0128a87d18(r) {
      a._rc77885fd4ddf4c = r;
    }
    get url() {
      return this._r33ac9e2c431a77?.url ?? null;
    }
    get name() {
      return this._name;
    }
    get ready() {
      return this._ready;
    }
    get status() {
      return this._status;
    }
    get domain() {
      return this._rf795d45dc76b8e;
    }
    get request() {
      return this._r33ac9e2c431a77;
    }
    get resource() {
      return this._resource;
    }
    get manifest() {
      return this._manifest;
    }
    get bytesTotal() {
      return this._ref1be84f630642;
    }
    get bytesLoaded() {
      return this._r20839cd613f850;
    }
    get elapsedTime() {
      return this._ready ? this._r1e01d3a2dfaded - this._r156a250413afe5 : Date.now() - this._r156a250413afe5;
    }
    get paused() {
      return this._r32d7a6ba1dd4cd;
    }
    dispose() {
      this.disposed ||
        (this.dispatchEvent(
          new ht(
            ht.LIBRARY_LOADER_EVENT_DISPOSE,
            this._status,
            this.bytesTotal,
            this.bytesLoaded,
            this.elapsedTime,
          ),
        ),
        this._r01697471fb99bd?.abort(),
        (this._r01697471fb99bd = null),
        (this._r33ac9e2c431a77 = null),
        (this._resource = null),
        (this._manifest = rr("")),
        (this._ready = !1),
        this.var_1775.clear(),
        a._r7b59f338710965(this),
        a.throttle(),
        super.dispose());
    }
    load(r, t = a._ra2316f4b96dbc0) {
      ((this._r33ac9e2c431a77 = r),
        (this._name = a._r8ac0bb255fc80d(r.url ?? "")),
        (this._ready = !1),
        (this._status = 0),
        (this._r73f3d09e355c37 = ""),
        (this._r6d3691cf5af4fa = ""),
        (this._manifest = rr("")),
        (this._resource = null),
        this.var_1775.clear(),
        (this._r20839cd613f850 = 0),
        (this._ref1be84f630642 = 0),
        this._r32d7a6ba1dd4cd || ((this._r32d7a6ba1dd4cd = !0), this.resume()));
    }
    resume() {
      if (!(!this._r32d7a6ba1dd4cd || this.disposed || this._ready || this._r33ac9e2c431a77?.url == null)) {
        if (
          ((this._r32d7a6ba1dd4cd = !1),
          (this._r156a250413afe5 = Date.now()),
          (this._r1e01d3a2dfaded = this._r156a250413afe5),
          this._r1759baf42d1b59() != null)
        ) {
          this._r4ba59351f43119();
          return;
        }
        a.queue(this);
      }
    }
    _r77b436a38958de(r) {
      return this.var_1775.has(r);
    }
    _r4e63c263d0980d(r) {
      return this.var_1775.get(r) ?? null;
    }
    _rf4e620cf4512da() {
      return this._r6d3691cf5af4fa;
    }
    _r3961db622275a7() {
      return this._r73f3d09e355c37;
    }
    async loadBundle(r) {
      if (this._r33ac9e2c431a77?.url == null) {
        this.failure("No library request URL was provided.");
        return;
      }
      try {
        let i =
          this._r1759baf42d1b59() ??
          (await a._rc77885fd4ddf4c.load({
            libraryName: this._name,
            sourceUrl: this._r33ac9e2c431a77.url,
            signal: r,
          }));
        if (r.aborted || this.disposed) return;
        ((this._manifest = rr(i.manifest)),
          (this._resource = _i7974d5758e4e60(i)),
          (this._status = 200),
          (this._ready = !0),
          (this._r1e01d3a2dfaded = Date.now()),
          (this._r20839cd613f850 = i.manifest.length),
          (this._ref1be84f630642 = i.manifest.length),
          this.var_1775.set(this._name, this._resource),
          this.var_1775.set("manifest", this._manifest));
        for (let [s, o] of i.definitions) this.var_1775.set(s, o);
        if (this._resource != null) {
          let s = this._resource;
          for (let o of Object.keys(s)) this.var_1775.set(o, s[o]);
        }
        (this.debug(`Loaded asset library "${this._name}" from ${i.resolvedUrl} using ${i.sourceType}.`),
          a.throttle(),
          this.dispatchEvent(
            new ht(
              ht.LIBRARY_LOADER_EVENT_COMPLETE,
              this._status,
              this.bytesTotal,
              this.bytesLoaded,
              this.elapsedTime,
            ),
          ),
          this.dispatchEvent(new M(a.LIBRARY_LOADER_FINALIZE)));
      } catch (t) {
        if (r.aborted || this.disposed) return;
        this.failure(
          t instanceof Error
            ? t.message
            : `Failed to load asset library "${this._name}" from ${this._r33ac9e2c431a77.url ?? "unknown url"}.`,
        );
      }
    }
    _r1759baf42d1b59() {
      if (!!0 || this._r33ac9e2c431a77?.url == null) return null;
      let r = _i971ea2645f792f.get(this._name) ?? _i971ea2645f792f.get(this._r33ac9e2c431a77.url);
      return _ifbdf104428e27b_(r) ? r : typeof r == "function" ? (r.__habBundle ?? null) : null;
    }
    debug(r) {
      ((this._r6d3691cf5af4fa = r),
        this.var_1933 &&
          this.dispatchEvent(
            new ht(
              ht.LIBRARY_LOADER_EVENT_DEBUG,
              this._status,
              this.bytesTotal,
              this.bytesLoaded,
              this.elapsedTime,
            ),
          ));
    }
    failure(r) {
      ((this._r73f3d09e355c37 = r),
        (this._ready = !1),
        (this._r1e01d3a2dfaded = Date.now()),
        (this._r01697471fb99bd = null),
        a._r7b59f338710965(this),
        a.throttle(),
        this.dispatchEvent(
          new ht(
            ht.LIBRARY_LOADER_EVENT_ERROR,
            this._status,
            this.bytesTotal,
            this.bytesLoaded,
            this.elapsedTime,
          ),
        ),
        this.dispatchEvent(new M(a.LIBRARY_LOADER_FINALIZE)));
    }
    static _r8ac0bb255fc80d(r) {
      let [t] = r.split("?"),
        i = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\")),
        s = i >= 0 ? t.slice(i + 1) : t,
        o = s.lastIndexOf(".");
      return o >= 0 ? s.slice(0, o) : s;
    }
    _r4ba59351f43119() {
      this.disposed ||
        this._ready ||
        this._r33ac9e2c431a77?.url == null ||
        (this._r01697471fb99bd?.abort(),
        (this._r01697471fb99bd = new AbortController()),
        this.dispatchEvent(
          new ht(
            ht.LIBRARY_LOADER_EVENT_PROGRESS,
            this._status,
            this.bytesTotal,
            this.bytesLoaded,
            this.elapsedTime,
          ),
        ),
        this.loadBundle(this._r01697471fb99bd.signal));
    }
    static queue(r) {
      if (a._r279d4ebb34392e) {
        (a._rb19accee5391df.includes(r) || a._rb19accee5391df.push(r), a.throttle());
        return;
      }
      r._r4ba59351f43119();
    }
    static throttle() {
      if (a._r279d4ebb34392e) {
        for (let r = a._r72bb2e216e6ccf.length - 1; r >= 0; r--) {
          let t = a._r72bb2e216e6ccf[r];
          (t.ready || t.disposed) && a._r72bb2e216e6ccf.splice(r, 1);
        }
        for (; a._r72bb2e216e6ccf.length < a.MAX_SIMULTANEOUS_DOWNLOADS && a._rb19accee5391df.length > 0;) {
          let r = a._rb19accee5391df.shift() ?? null;
          r == null || r.ready || r.disposed || (a._r72bb2e216e6ccf.push(r), r._r4ba59351f43119());
        }
      }
    }
    static _r7b59f338710965(r) {
      let t = a._rb19accee5391df.indexOf(r);
      t >= 0 && a._rb19accee5391df.splice(t, 1);
      let i = a._r72bb2e216e6ccf.indexOf(r);
      i >= 0 && a._r72bb2e216e6ccf.splice(i, 1);
    }
  }
