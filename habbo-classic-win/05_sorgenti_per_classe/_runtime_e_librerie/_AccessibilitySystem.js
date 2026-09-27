// Estratto da HabboAirLauncher.deobf.js, riga 4652.

class _Ve {
        static {
          n(this, "_AccessibilitySystem");
        }
        constructor(e, r = dVe) {
          ((this._mobileInfo = r),
            (this.debug = !1),
            (this._activateOnTab = !0),
            (this._deactivateOnMouseMove = !0),
            (this._isActive = !1),
            (this._isMobileAccessibility = !1),
            (this._div = null),
            (this._pools = {}),
            (this._renderId = 0),
            (this._children = []),
            (this._androidUpdateCount = 0),
            (this._androidUpdateFrequency = 500),
            (this._isRunningTests = !1),
            (this._boundOnKeyDown = this._onKeyDown.bind(this)),
            (this._boundOnMouseMove = this._onMouseMove.bind(this)),
            (this._hookDiv = null),
            (r.tablet || r.phone) && this._createTouchHook(),
            (this._renderer = e));
        }
        get isActive() {
          return this._isActive;
        }
        get isMobileAccessibility() {
          return this._isMobileAccessibility;
        }
        get hookDiv() {
          return this._hookDiv;
        }
        get div() {
          return this._div;
        }
        _createTouchHook() {
          let e = document.createElement("button");
          ((e.style.width = `${bVe}px`),
            (e.style.height = `${bVe}px`),
            (e.style.position = "absolute"),
            (e.style.top = `${$nr}px`),
            (e.style.left = `${Znr}px`),
            (e.style.zIndex = qnr.toString()),
            (e.style.backgroundColor = "#FF0000"),
            (e.title = "select to enable accessibility for this content"),
            e.addEventListener("focus", () => {
              ((this._isMobileAccessibility = !0), this._activate(), this._destroyTouchHook());
            }),
            document.body.appendChild(e),
            (this._hookDiv = e));
        }
        _destroyTouchHook() {
          this._hookDiv && (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
        }
        _activate() {
          if (this._isActive) return;
          ((this._isActive = !0),
            this._div ||
              ((this._div = document.createElement("div")),
              (this._div.style.position = "absolute"),
              (this._div.style.top = `${Ynr}px`),
              (this._div.style.left = `${Knr}px`),
              (this._div.style.pointerEvents = "none"),
              (this._div.style.zIndex = lVe.toString()),
              (this._canvasObserver = new CanvasObserver({ domElement: this._div, renderer: this._renderer }))),
            this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, !1),
            this._deactivateOnMouseMove &&
              globalThis.document.addEventListener("mousemove", this._boundOnMouseMove, !0));
          let e = this._renderer.view.canvas;
          if (e.parentNode) (this._canvasObserver.ensureAttached(), this._initAccessibilitySetup());
          else {
            let r = new MutationObserver(() => {
              e.parentNode &&
                (r.disconnect(), this._canvasObserver.ensureAttached(), this._initAccessibilitySetup());
            });
            r.observe(document.body, { childList: !0, subtree: !0 });
          }
        }
        _initAccessibilitySetup() {
          (this._renderer.runners.postrender.add(this),
            this._renderer.lastObjectRendered &&
              this._updateAccessibleObjects(this._renderer.lastObjectRendered));
        }
        _deactivate() {
          if (!(!this._isActive || this._isMobileAccessibility)) {
            ((this._isActive = !1),
              globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0),
              this._activateOnTab && globalThis.addEventListener("keydown", this._boundOnKeyDown, !1),
              this._renderer.runners.postrender.remove(this));
            for (let e of this._children)
              (e._accessibleDiv?.parentNode &&
                (e._accessibleDiv.parentNode.removeChild(e._accessibleDiv), (e._accessibleDiv = null)),
                (e._accessibleActive = !1));
            for (let e in this._pools)
              (this._pools[e].forEach((t) => {
                t.parentNode && t.parentNode.removeChild(t);
              }),
                delete this._pools[e]);
            (this._div?.parentNode && this._div.parentNode.removeChild(this._div),
              (this._pools = {}),
              (this._children = []));
          }
        }
        _updateAccessibleObjects(e) {
          if (!e.visible || !e.accessibleChildren) return;
          e.accessible && (e._accessibleActive || this._addChild(e), (e._renderId = this._renderId));
          let r = e.children;
          if (r) for (let t = 0; t < r.length; t++) this._updateAccessibleObjects(r[t]);
        }
        init(e) {
          let t = { accessibilityOptions: { ..._Ve.defaultOptions, ...(e?.accessibilityOptions || {}) } };
          ((this.debug = t.accessibilityOptions.debug),
            (this._activateOnTab = t.accessibilityOptions.activateOnTab),
            (this._deactivateOnMouseMove = t.accessibilityOptions.deactivateOnMouseMove),
            t.accessibilityOptions.enabledByDefault && this._activate(),
            this._renderer.runners.postrender.remove(this));
        }
        postrender() {
          let e = performance.now();
          if (
            (this._mobileInfo.android.device && e < this._androidUpdateCount) ||
            ((this._androidUpdateCount = e + this._androidUpdateFrequency),
            (!this._renderer.renderingToScreen || !this._renderer.view.canvas) && !this._isRunningTests)
          )
            return;
          let r = new Set();
          if (this._renderer.lastObjectRendered) {
            this._updateAccessibleObjects(this._renderer.lastObjectRendered);
            for (let t of this._children) t._renderId === this._renderId && r.add(this._children.indexOf(t));
          }
          for (let t = this._children.length - 1; t >= 0; t--) {
            let i = this._children[t];
            r.has(t) ||
              (i._accessibleDiv &&
                i._accessibleDiv.parentNode &&
                (i._accessibleDiv.parentNode.removeChild(i._accessibleDiv),
                this._getPool(i.accessibleType).push(i._accessibleDiv),
                (i._accessibleDiv = null)),
              (i._accessibleActive = !1),
              removeItems(this._children, t, 1));
          }
          this._renderer.renderingToScreen && this._canvasObserver.ensureAttached();
          for (let t = 0; t < this._children.length; t++) {
            let i = this._children[t];
            if (!i._accessibleActive || !i._accessibleDiv) continue;
            let s = i._accessibleDiv,
              o = i.hitArea || i.getBounds().rectangle;
            if (i.hitArea) {
              let d = i.worldTransform;
              ((s.style.left = `${d.tx + o.x * d.a}px`),
                (s.style.top = `${d.ty + o.y * d.d}px`),
                (s.style.width = `${o.width * d.a}px`),
                (s.style.height = `${o.height * d.d}px`));
            } else
              (this._capHitArea(o),
                (s.style.left = `${o.x}px`),
                (s.style.top = `${o.y}px`),
                (s.style.width = `${o.width}px`),
                (s.style.height = `${o.height}px`));
          }
          this._renderId++;
        }
        _updateDebugHTML(e) {
          e.innerHTML = `type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`;
        }
        _capHitArea(e) {
          (e.x < 0 && ((e.width += e.x), (e.x = 0)), e.y < 0 && ((e.height += e.y), (e.y = 0)));
          let { width: r, height: t } = this._renderer;
          (e.x + e.width > r && (e.width = r - e.x), e.y + e.height > t && (e.height = t - e.y));
        }
        _addChild(e) {
          let t = this._getPool(e.accessibleType).pop();
          (t
            ? ((t.innerHTML = ""),
              t.removeAttribute("title"),
              t.removeAttribute("aria-label"),
              (t.tabIndex = 0))
            : (e.accessibleType === "button"
                ? (t = document.createElement("button"))
                : ((t = document.createElement(e.accessibleType)),
                  (t.style.cssText = `
                        color: transparent;
                        pointer-events: none;
                        padding: 0;
                        margin: 0;
                        border: 0;
                        outline: 0;
                        background: transparent;
                        box-sizing: border-box;
                        user-select: none;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                    `),
                  e.accessibleText && (t.innerText = e.accessibleText)),
              (t.style.width = `${fVe}px`),
              (t.style.height = `${fVe}px`),
              (t.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent"),
              (t.style.position = "absolute"),
              (t.style.zIndex = lVe.toString()),
              (t.style.borderStyle = "none"),
              navigator.userAgent.toLowerCase().includes("chrome")
                ? t.setAttribute("aria-live", "off")
                : t.setAttribute("aria-live", "polite"),
              navigator.userAgent.match(/rv:.*Gecko\//)
                ? t.setAttribute("aria-relevant", "additions")
                : t.setAttribute("aria-relevant", "text"),
              t.addEventListener("click", this._onClick.bind(this)),
              t.addEventListener("focus", this._onFocus.bind(this)),
              t.addEventListener("focusout", this._onFocusOut.bind(this))),
            (t.style.pointerEvents = e.accessiblePointerEvents),
            (t.type = e.accessibleType),
            e.accessibleTitle && e.accessibleTitle !== null
              ? (t.title = e.accessibleTitle)
              : (!e.accessibleHint || e.accessibleHint === null) && (t.title = `container ${e.tabIndex}`),
            e.accessibleHint && e.accessibleHint !== null && t.setAttribute("aria-label", e.accessibleHint),
            e.interactive ? (t.tabIndex = e.tabIndex) : (t.tabIndex = 0),
            this.debug && this._updateDebugHTML(t),
            (e._accessibleActive = !0),
            (e._accessibleDiv = t),
            (t.container = e),
            this._children.push(e),
            this._div.appendChild(e._accessibleDiv));
        }
        _dispatchEvent(e, r) {
          let { container: t } = e.target,
            i = this._renderer.events.rootBoundary,
            s = Object.assign(new V5(i), { target: t });
          ((i.rootTarget = this._renderer.lastObjectRendered), r.forEach((o) => i.dispatchEvent(s, o)));
        }
        _onClick(e) {
          this._dispatchEvent(e, ["click", "pointertap", "tap"]);
        }
        _onFocus(e) {
          (e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "assertive"),
            this._dispatchEvent(e, ["mouseover"]));
        }
        _onFocusOut(e) {
          (e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "polite"),
            this._dispatchEvent(e, ["mouseout"]));
        }
        _onKeyDown(e) {
          e.keyCode !== Xnr || !this._activateOnTab || this._activate();
        }
        _onMouseMove(e) {
          (e.movementX === 0 && e.movementY === 0) || this._deactivate();
        }
        destroy() {
          (this._deactivate(),
            this._destroyTouchHook(),
            this._canvasObserver?.destroy(),
            (this._canvasObserver = null),
            (this._div = null),
            (this._pools = null),
            (this._children = null),
            (this._renderer = null),
            (this._hookDiv = null),
            globalThis.removeEventListener("keydown", this._boundOnKeyDown),
            (this._boundOnKeyDown = null),
            globalThis.document.removeEventListener("mousemove", this._boundOnMouseMove, !0),
            (this._boundOnMouseMove = null));
        }
        setAccessibilityEnabled(e) {
          e ? this._activate() : this._deactivate();
        }
        _getPool(e) {
          return (this._pools[e] || (this._pools[e] = []), this._pools[e]);
        }
      }
