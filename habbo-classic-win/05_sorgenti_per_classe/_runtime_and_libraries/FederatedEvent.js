// Extracted from HabboAirLauncher.deobf.js, line 4444.

class a {
      static {
        n(this, "FederatedEvent");
      }
      constructor(e) {
        ((this.bubbles = !0),
          (this.cancelBubble = !0),
          (this.cancelable = !1),
          (this.composed = !1),
          (this.defaultPrevented = !1),
          (this.eventPhase = a.prototype.NONE),
          (this.propagationStopped = !1),
          (this.propagationImmediatelyStopped = !1),
          (this.layer = new Ha()),
          (this.page = new Ha()),
          (this.NONE = 0),
          (this.CAPTURING_PHASE = 1),
          (this.AT_TARGET = 2),
          (this.BUBBLING_PHASE = 3),
          (this.manager = e));
      }
      get layerX() {
        return this.layer.x;
      }
      get layerY() {
        return this.layer.y;
      }
      get pageX() {
        return this.page.x;
      }
      get pageY() {
        return this.page.y;
      }
      get data() {
        return this;
      }
      composedPath() {
        return (
          this.manager &&
            (!this.path || this.path[this.path.length - 1] !== this.target) &&
            (this.path = this.target ? this.manager.propagationPath(this.target) : []),
          this.path
        );
      }
      initEvent(e, r, t) {
        throw new Error(
          "initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.",
        );
      }
      initUIEvent(e, r, t, i, s) {
        throw new Error(
          "initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.",
        );
      }
      preventDefault() {
        (this.nativeEvent instanceof Event &&
          this.nativeEvent.cancelable &&
          this.nativeEvent.preventDefault(),
          (this.defaultPrevented = !0));
      }
      stopImmediatePropagation() {
        this.propagationImmediatelyStopped = !0;
      }
      stopPropagation() {
        this.propagationStopped = !0;
      }
    }
