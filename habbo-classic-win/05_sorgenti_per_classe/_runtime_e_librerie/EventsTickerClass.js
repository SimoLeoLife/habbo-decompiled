// Estratto da HabboAirLauncher.deobf.js, riga 5097.

class {
      static {
        n(this, "EventsTickerClass");
      }
      constructor() {
        ((this.interactionFrequency = 10),
          (this._deltaTime = 0),
          (this._didMove = !1),
          (this._tickerAdded = !1),
          (this._pauseUpdate = !0));
      }
      init(e) {
        (this.removeTickerListener(),
          (this.events = e),
          (this.interactionFrequency = 10),
          (this._deltaTime = 0),
          (this._didMove = !1),
          (this._tickerAdded = !1),
          (this._pauseUpdate = !0));
      }
      get pauseUpdate() {
        return this._pauseUpdate;
      }
      set pauseUpdate(e) {
        this._pauseUpdate = e;
      }
      addTickerListener() {
        this._tickerAdded ||
          !this.domElement ||
          (vc.system.add(this._tickerUpdate, this, wh.INTERACTION), (this._tickerAdded = !0));
      }
      removeTickerListener() {
        this._tickerAdded && (vc.system.remove(this._tickerUpdate, this), (this._tickerAdded = !1));
      }
      pointerMoved() {
        this._didMove = !0;
      }
      _update() {
        if (!this.domElement || this._pauseUpdate) return;
        if (this._didMove) {
          this._didMove = !1;
          return;
        }
        let e = this.events._rootPointerEvent;
        (this.events.supportsTouchEvents && e.pointerType === "touch") ||
          globalThis.document.dispatchEvent(
            this.events.supportsPointerEvents
              ? new PointerEvent("pointermove", {
                  clientX: e.clientX,
                  clientY: e.clientY,
                  pointerType: e.pointerType,
                  pointerId: e.pointerId,
                })
              : new MouseEvent("mousemove", { clientX: e.clientX, clientY: e.clientY }),
          );
      }
      _tickerUpdate(e) {
        ((this._deltaTime += e.deltaTime),
          !(this._deltaTime < this.interactionFrequency) && ((this._deltaTime = 0), this._update()));
      }
      destroy() {
        (this.removeTickerListener(),
          (this.events = null),
          (this.domElement = null),
          (this._deltaTime = 0),
          (this._didMove = !1),
          (this._tickerAdded = !1),
          (this._pauseUpdate = !0));
      }
    }
