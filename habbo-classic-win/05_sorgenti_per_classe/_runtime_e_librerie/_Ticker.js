// Estratto da HabboAirLauncher.deobf.js, riga 4225.

class Cb {
      static {
        n(this, "_Ticker");
      }
      constructor() {
        ((this.autoStart = !1),
          (this.deltaTime = 1),
          (this.lastTime = -1),
          (this.speed = 1),
          (this.started = !1),
          (this._requestId = null),
          (this._maxElapsedMS = 100),
          (this._minElapsedMS = 0),
          (this._protected = !1),
          (this._lastFrame = -1),
          (this._head = new TickerListener(null, null, 1 / 0)),
          (this.deltaMS = 1 / Cb.targetFPMS),
          (this.elapsedMS = 1 / Cb.targetFPMS),
          (this._tick = (e) => {
            ((this._requestId = null),
              this.started &&
                (this.update(e),
                this.started &&
                  this._requestId === null &&
                  this._head.next &&
                  (this._requestId = requestAnimationFrame(this._tick))));
          }));
      }
      _requestIfNeeded() {
        this._requestId === null &&
          this._head.next &&
          ((this.lastTime = performance.now()),
          (this._lastFrame = this.lastTime),
          (this._requestId = requestAnimationFrame(this._tick)));
      }
      _cancelIfNeeded() {
        this._requestId !== null && (cancelAnimationFrame(this._requestId), (this._requestId = null));
      }
      _startIfPossible() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start();
      }
      add(e, r, t = wh.NORMAL) {
        return this._addListener(new TickerListener(e, r, t));
      }
      addOnce(e, r, t = wh.NORMAL) {
        return this._addListener(new TickerListener(e, r, t, !0));
      }
      _addListener(e) {
        let r = this._head.next,
          t = this._head;
        if (!r) e.connect(t);
        else {
          for (; r;) {
            if (e.priority > r.priority) {
              e.connect(t);
              break;
            }
            ((t = r), (r = r.next));
          }
          e.previous || e.connect(t);
        }
        return (this._startIfPossible(), this);
      }
      remove(e, r) {
        let t = this._head.next;
        for (; t;) t.match(e, r) ? (t = t.destroy()) : (t = t.next);
        return (this._head.next || this._cancelIfNeeded(), this);
      }
      get count() {
        if (!this._head) return 0;
        let e = 0,
          r = this._head;
        for (; (r = r.next);) e++;
        return e;
      }
      start() {
        this.started || ((this.started = !0), this._requestIfNeeded());
      }
      stop() {
        this.started && ((this.started = !1), this._cancelIfNeeded());
      }
      destroy() {
        if (!this._protected) {
          this.stop();
          let e = this._head.next;
          for (; e;) e = e.destroy(!0);
          (this._head.destroy(), (this._head = null));
        }
      }
      update(e = performance.now()) {
        let r;
        if (e > this.lastTime) {
          if (
            ((r = this.elapsedMS = e - this.lastTime),
            r > this._maxElapsedMS && (r = this._maxElapsedMS),
            (r *= this.speed),
            this._minElapsedMS)
          ) {
            let s = (e - this._lastFrame) | 0;
            if (s < this._minElapsedMS) return;
            this._lastFrame = e - (s % this._minElapsedMS);
          }
          ((this.deltaMS = r), (this.deltaTime = this.deltaMS * Cb.targetFPMS));
          let t = this._head,
            i = t.next;
          for (; i;) i = i.emit(this);
          t.next || this._cancelIfNeeded();
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = e;
      }
      get FPS() {
        return 1e3 / this.elapsedMS;
      }
      get minFPS() {
        return 1e3 / this._maxElapsedMS;
      }
      set minFPS(e) {
        let r = Math.min(Math.max(0, e) / 1e3, Cb.targetFPMS);
        ((this._maxElapsedMS = 1 / r), this._minElapsedMS && e > this.maxFPS && (this.maxFPS = e));
      }
      get maxFPS() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
      }
      set maxFPS(e) {
        e === 0
          ? (this._minElapsedMS = 0)
          : (e < this.minFPS && (this.minFPS = e), (this._minElapsedMS = 1 / (e / 1e3)));
      }
      static get shared() {
        if (!Cb._shared) {
          let e = (Cb._shared = new Cb());
          ((e.autoStart = !0), (e._protected = !0));
        }
        return Cb._shared;
      }
      static get system() {
        if (!Cb._system) {
          let e = (Cb._system = new Cb());
          ((e.autoStart = !0), (e._protected = !0));
        }
        return Cb._system;
      }
    }
