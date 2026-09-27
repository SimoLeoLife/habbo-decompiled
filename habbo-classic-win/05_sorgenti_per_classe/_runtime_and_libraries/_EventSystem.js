// Extracted from HabboAirLauncher.deobf.js, line 5851.

class CPe {
        static {
          n(this, "_EventSystem");
        }
        constructor(e) {
          ((this.supportsTouchEvents = "ontouchstart" in globalThis),
            (this.supportsPointerEvents = !!globalThis.PointerEvent),
            (this.domElement = null),
            (this.resolution = 1),
            (this.renderer = e),
            (this.rootBoundary = new EventBoundary(null)),
            Y0.init(this),
            (this.autoPreventDefault = !0),
            (this._eventsAdded = !1),
            (this._rootPointerEvent = new FederatedPointerEvent(null)),
            (this._rootWheelEvent = new FederatedWheelEvent(null)),
            (this.cursorStyles = { default: "inherit", pointer: "pointer" }),
            (this.features = new Proxy(
              { ...CPe.defaultEventFeatures },
              {
                set: n(
                  (r, t, i) => (
                    t === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = i),
                    (r[t] = i),
                    !0
                  ),
                  "set",
                ),
              },
            )),
            (this._onPointerDown = this._onPointerDown.bind(this)),
            (this._onPointerMove = this._onPointerMove.bind(this)),
            (this._onPointerUp = this._onPointerUp.bind(this)),
            (this._onPointerOverOut = this._onPointerOverOut.bind(this)),
            (this.onWheel = this.onWheel.bind(this)));
        }
        static get defaultEventMode() {
          return this._defaultEventMode;
        }
        init(e) {
          let { canvas: r, resolution: t } = this.renderer;
          (this.setTargetElement(r),
            (this.resolution = t),
            (CPe._defaultEventMode = e.eventMode ?? "passive"),
            Object.assign(this.features, e.eventFeatures ?? {}),
            (this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove));
        }
        resolutionChange(e) {
          this.resolution = e;
        }
        destroy() {
          (Y0.destroy(), this.setTargetElement(null), (this.renderer = null), (this._currentCursor = null));
        }
        setCursor(e) {
          e || (e = "default");
          let r = !0;
          if (
            (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (r = !1),
            this._currentCursor === e)
          )
            return;
          this._currentCursor = e;
          let t = this.cursorStyles[e];
          if (t)
            switch (typeof t) {
              case "string":
                r && (this.domElement.style.cursor = t);
                break;
              case "function":
                t(e);
                break;
              case "object":
                r && Object.assign(this.domElement.style, t);
                break;
            }
          else
            r &&
              typeof e == "string" &&
              !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) &&
              (this.domElement.style.cursor = e);
        }
        get pointer() {
          return this._rootPointerEvent;
        }
        _onPointerDown(e) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          let r = this._normalizeToPointerData(e);
          this.autoPreventDefault &&
            r[0].isNormalized &&
            (e.cancelable || !("cancelable" in e)) &&
            e.preventDefault();
          for (let t = 0, i = r.length; t < i; t++) {
            let s = r[t],
              o = this._bootstrapEvent(this._rootPointerEvent, s);
            this.rootBoundary.mapEvent(o);
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        _onPointerMove(e) {
          if (!this.features.move) return;
          ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered), Y0.pointerMoved());
          let r = this._normalizeToPointerData(e);
          for (let t = 0, i = r.length; t < i; t++) {
            let s = this._bootstrapEvent(this._rootPointerEvent, r[t]);
            this.rootBoundary.mapEvent(s);
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        _onPointerUp(e) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          let r = e.target;
          e.composedPath && e.composedPath().length > 0 && (r = e.composedPath()[0]);
          let t = r !== this.domElement ? "outside" : "",
            i = this._normalizeToPointerData(e);
          for (let s = 0, o = i.length; s < o; s++) {
            let d = this._bootstrapEvent(this._rootPointerEvent, i[s]);
            ((d.type += t), this.rootBoundary.mapEvent(d));
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        _onPointerOverOut(e) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          let r = this._normalizeToPointerData(e);
          for (let t = 0, i = r.length; t < i; t++) {
            let s = this._bootstrapEvent(this._rootPointerEvent, r[t]);
            this.rootBoundary.mapEvent(s);
          }
          this.setCursor(this.rootBoundary.cursor);
        }
        onWheel(e) {
          if (!this.features.wheel) return;
          let r = this.normalizeWheelEvent(e);
          ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered), this.rootBoundary.mapEvent(r));
        }
        setTargetElement(e) {
          (this._removeEvents(), (this.domElement = e), (Y0.domElement = e), this._addEvents());
        }
        _addEvents() {
          if (this._eventsAdded || !this.domElement) return;
          Y0.addTickerListener();
          let e = this.domElement.style;
          (e &&
            (globalThis.navigator.msPointerEnabled
              ? ((e.msContentZooming = "none"), (e.msTouchAction = "none"))
              : this.supportsPointerEvents && (e.touchAction = "none")),
            this.supportsPointerEvents
              ? (globalThis.document.addEventListener("pointermove", this._onPointerMove, !0),
                this.domElement.addEventListener("pointerdown", this._onPointerDown, !0),
                this.domElement.addEventListener("pointerleave", this._onPointerOverOut, !0),
                this.domElement.addEventListener("pointerover", this._onPointerOverOut, !0),
                globalThis.addEventListener("pointerup", this._onPointerUp, !0))
              : (globalThis.document.addEventListener("mousemove", this._onPointerMove, !0),
                this.domElement.addEventListener("mousedown", this._onPointerDown, !0),
                this.domElement.addEventListener("mouseout", this._onPointerOverOut, !0),
                this.domElement.addEventListener("mouseover", this._onPointerOverOut, !0),
                globalThis.addEventListener("mouseup", this._onPointerUp, !0),
                this.supportsTouchEvents &&
                  (this.domElement.addEventListener("touchstart", this._onPointerDown, !0),
                  this.domElement.addEventListener("touchend", this._onPointerUp, !0),
                  this.domElement.addEventListener("touchmove", this._onPointerMove, !0))),
            this.domElement.addEventListener("wheel", this.onWheel, { passive: !0, capture: !0 }),
            (this._eventsAdded = !0));
        }
        _removeEvents() {
          if (!this._eventsAdded || !this.domElement) return;
          Y0.removeTickerListener();
          let e = this.domElement.style;
          (e &&
            (globalThis.navigator.msPointerEnabled
              ? ((e.msContentZooming = ""), (e.msTouchAction = ""))
              : this.supportsPointerEvents && (e.touchAction = "")),
            this.supportsPointerEvents
              ? (globalThis.document.removeEventListener("pointermove", this._onPointerMove, !0),
                this.domElement.removeEventListener("pointerdown", this._onPointerDown, !0),
                this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, !0),
                this.domElement.removeEventListener("pointerover", this._onPointerOverOut, !0),
                globalThis.removeEventListener("pointerup", this._onPointerUp, !0))
              : (globalThis.document.removeEventListener("mousemove", this._onPointerMove, !0),
                this.domElement.removeEventListener("mousedown", this._onPointerDown, !0),
                this.domElement.removeEventListener("mouseout", this._onPointerOverOut, !0),
                this.domElement.removeEventListener("mouseover", this._onPointerOverOut, !0),
                globalThis.removeEventListener("mouseup", this._onPointerUp, !0),
                this.supportsTouchEvents &&
                  (this.domElement.removeEventListener("touchstart", this._onPointerDown, !0),
                  this.domElement.removeEventListener("touchend", this._onPointerUp, !0),
                  this.domElement.removeEventListener("touchmove", this._onPointerMove, !0))),
            this.domElement.removeEventListener("wheel", this.onWheel, !0),
            (this.domElement = null),
            (this._eventsAdded = !1));
        }
        mapPositionToPoint(e, r, t) {
          let i = this.domElement.isConnected
              ? this.domElement.getBoundingClientRect()
              : { x: 0, y: 0, width: this.domElement.width, height: this.domElement.height, left: 0, top: 0 },
            s = 1 / this.resolution;
          ((e.x = (r - i.left) * (this.domElement.width / i.width) * s),
            (e.y = (t - i.top) * (this.domElement.height / i.height) * s));
        }
        _normalizeToPointerData(e) {
          let r = [];
          if (this.supportsTouchEvents && e instanceof TouchEvent)
            for (let t = 0, i = e.changedTouches.length; t < i; t++) {
              let s = e.changedTouches[t];
              (typeof s.button > "u" && (s.button = 0),
                typeof s.buttons > "u" && (s.buttons = 1),
                typeof s.isPrimary > "u" && (s.isPrimary = e.touches.length === 1 && e.type === "touchstart"),
                typeof s.width > "u" && (s.width = s.radiusX || 1),
                typeof s.height > "u" && (s.height = s.radiusY || 1),
                typeof s.tiltX > "u" && (s.tiltX = 0),
                typeof s.tiltY > "u" && (s.tiltY = 0),
                typeof s.pointerType > "u" && (s.pointerType = "touch"),
                typeof s.pointerId > "u" && (s.pointerId = s.identifier || 0),
                typeof s.pressure > "u" && (s.pressure = s.force || 0.5),
                typeof s.twist > "u" && (s.twist = 0),
                typeof s.tangentialPressure > "u" && (s.tangentialPressure = 0),
                typeof s.layerX > "u" && (s.layerX = s.offsetX = s.clientX),
                typeof s.layerY > "u" && (s.layerY = s.offsetY = s.clientY),
                (s.isNormalized = !0),
                (s.type = e.type),
                s.altKey ?? (s.altKey = e.altKey),
                s.ctrlKey ?? (s.ctrlKey = e.ctrlKey),
                s.metaKey ?? (s.metaKey = e.metaKey),
                s.shiftKey ?? (s.shiftKey = e.shiftKey),
                r.push(s));
            }
          else if (
            !globalThis.MouseEvent ||
            (e instanceof MouseEvent &&
              (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent)))
          ) {
            let t = e;
            (typeof t.isPrimary > "u" && (t.isPrimary = !0),
              typeof t.width > "u" && (t.width = 1),
              typeof t.height > "u" && (t.height = 1),
              typeof t.tiltX > "u" && (t.tiltX = 0),
              typeof t.tiltY > "u" && (t.tiltY = 0),
              typeof t.pointerType > "u" && (t.pointerType = "mouse"),
              typeof t.pointerId > "u" && (t.pointerId = rsr),
              typeof t.pressure > "u" && (t.pressure = 0.5),
              typeof t.twist > "u" && (t.twist = 0),
              typeof t.tangentialPressure > "u" && (t.tangentialPressure = 0),
              (t.isNormalized = !0),
              r.push(t));
          } else r.push(e);
          return r;
        }
        normalizeWheelEvent(e) {
          let r = this._rootWheelEvent;
          return (
            this._transferMouseData(r, e),
            (r.deltaX = e.deltaX),
            (r.deltaY = e.deltaY),
            (r.deltaZ = e.deltaZ),
            (r.deltaMode = e.deltaMode),
            this.mapPositionToPoint(r.screen, e.clientX, e.clientY),
            r.global.copyFrom(r.screen),
            r.offset.copyFrom(r.screen),
            (r.nativeEvent = e),
            (r.type = e.type),
            r
          );
        }
        _bootstrapEvent(e, r) {
          return (
            (e.originalEvent = null),
            (e.nativeEvent = r),
            (e.pointerId = r.pointerId),
            (e.width = r.width),
            (e.height = r.height),
            (e.isPrimary = r.isPrimary),
            (e.pointerType = r.pointerType),
            (e.pressure = r.pressure),
            (e.tangentialPressure = r.tangentialPressure),
            (e.tiltX = r.tiltX),
            (e.tiltY = r.tiltY),
            (e.twist = r.twist),
            this._transferMouseData(e, r),
            this.mapPositionToPoint(e.screen, r.clientX, r.clientY),
            e.global.copyFrom(e.screen),
            e.offset.copyFrom(e.screen),
            (e.isTrusted = r.isTrusted),
            e.type === "pointerleave" && (e.type = "pointerout"),
            e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")),
            e.type.startsWith("touch") && (e.type = tsr[e.type] || e.type),
            e
          );
        }
        _transferMouseData(e, r) {
          ((e.isTrusted = r.isTrusted),
            (e.srcElement = r.srcElement),
            (e.timeStamp = performance.now()),
            (e.type = r.type),
            (e.altKey = r.altKey),
            (e.button = r.button),
            (e.buttons = r.buttons),
            (e.client.x = r.clientX),
            (e.client.y = r.clientY),
            (e.ctrlKey = r.ctrlKey),
            (e.metaKey = r.metaKey),
            (e.movement.x = r.movementX),
            (e.movement.y = r.movementY),
            (e.page.x = r.pageX),
            (e.page.y = r.pageY),
            (e.relatedTarget = null),
            (e.shiftKey = r.shiftKey));
        }
      }
