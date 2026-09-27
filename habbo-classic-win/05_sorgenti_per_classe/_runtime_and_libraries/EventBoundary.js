// Extracted from HabboAirLauncher.deobf.js, line 5289.

class {
        static {
          n(this, "EventBoundary");
        }
        constructor(e) {
          ((this.dispatch = new Yn()),
            (this.moveOnAll = !1),
            (this.enableGlobalMoveEvents = !0),
            (this.mappingState = { trackingData: {} }),
            (this.eventPool = new Map()),
            (this._allInteractiveElements = []),
            (this._hitElements = []),
            (this._isPointerMoveEvent = !1),
            (this.rootTarget = e),
            (this.hitPruneFn = this.hitPruneFn.bind(this)),
            (this.hitTestFn = this.hitTestFn.bind(this)),
            (this.mapPointerDown = this.mapPointerDown.bind(this)),
            (this.mapPointerMove = this.mapPointerMove.bind(this)),
            (this.mapPointerOut = this.mapPointerOut.bind(this)),
            (this.mapPointerOver = this.mapPointerOver.bind(this)),
            (this.mapPointerUp = this.mapPointerUp.bind(this)),
            (this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this)),
            (this.mapWheel = this.mapWheel.bind(this)),
            (this.mappingTable = {}),
            this.addEventMapping("pointerdown", this.mapPointerDown),
            this.addEventMapping("pointermove", this.mapPointerMove),
            this.addEventMapping("pointerout", this.mapPointerOut),
            this.addEventMapping("pointerleave", this.mapPointerOut),
            this.addEventMapping("pointerover", this.mapPointerOver),
            this.addEventMapping("pointerup", this.mapPointerUp),
            this.addEventMapping("pointerupoutside", this.mapPointerUpOutside),
            this.addEventMapping("wheel", this.mapWheel));
        }
        addEventMapping(e, r) {
          (this.mappingTable[e] || (this.mappingTable[e] = []),
            this.mappingTable[e].push({ fn: r, priority: 0 }),
            this.mappingTable[e].sort((t, i) => t.priority - i.priority));
        }
        dispatchEvent(e, r) {
          ((e.propagationStopped = !1),
            (e.propagationImmediatelyStopped = !1),
            this.propagate(e, r),
            this.dispatch.emit(r || e.type, e));
        }
        mapEvent(e) {
          if (!this.rootTarget) return;
          let r = this.mappingTable[e.type];
          if (r) for (let t = 0, i = r.length; t < i; t++) r[t].fn(e);
          else warn_(`[EventBoundary]: Event mapping not defined for ${e.type}`);
        }
        hitTest(e, r) {
          Y0.pauseUpdate = !0;
          let i =
              this._isPointerMoveEvent && this.enableGlobalMoveEvents
                ? "hitTestMoveRecursive"
                : "hitTestRecursive",
            s = this[i](
              this.rootTarget,
              this.rootTarget.eventMode,
              esr.set(e, r),
              this.hitTestFn,
              this.hitPruneFn,
            );
          return s && s[0];
        }
        propagate(e, r) {
          if (!e.target) return;
          let t = e.composedPath();
          e.eventPhase = e.CAPTURING_PHASE;
          for (let i = 0, s = t.length - 1; i < s; i++)
            if (
              ((e.currentTarget = t[i]),
              this.notifyTarget(e, r),
              e.propagationStopped || e.propagationImmediatelyStopped)
            )
              return;
          if (
            ((e.eventPhase = e.AT_TARGET),
            (e.currentTarget = e.target),
            this.notifyTarget(e, r),
            !(e.propagationStopped || e.propagationImmediatelyStopped))
          ) {
            e.eventPhase = e.BUBBLING_PHASE;
            for (let i = t.length - 2; i >= 0; i--)
              if (
                ((e.currentTarget = t[i]),
                this.notifyTarget(e, r),
                e.propagationStopped || e.propagationImmediatelyStopped)
              )
                return;
          }
        }
        all(e, r, t = this._allInteractiveElements) {
          if (t.length === 0) return;
          e.eventPhase = e.BUBBLING_PHASE;
          let i = Array.isArray(r) ? r : [r];
          for (let s = t.length - 1; s >= 0; s--)
            i.forEach((o) => {
              ((e.currentTarget = t[s]), this.notifyTarget(e, o));
            });
        }
        propagationPath(e) {
          let r = [e];
          for (let t = 0; t < Jnr && e !== this.rootTarget && e.parent; t++) {
            if (!e.parent) throw new Error("Cannot find propagation path to disconnected target");
            (r.push(e.parent), (e = e.parent));
          }
          return (r.reverse(), r);
        }
        hitTestMoveRecursive(e, r, t, i, s, o = !1) {
          let d = !1;
          if (this._interactivePrune(e)) return null;
          if (
            ((e.eventMode === "dynamic" || r === "dynamic") && (Y0.pauseUpdate = !1),
            e.interactiveChildren && e.children)
          ) {
            let l = e.children;
            for (let b = l.length - 1; b >= 0; b--) {
              let _ = l[b],
                h = this.hitTestMoveRecursive(
                  _,
                  this._isInteractive(r) ? r : _.eventMode,
                  t,
                  i,
                  s,
                  o || s(e, t),
                );
              if (h) {
                if (h.length > 0 && !h[h.length - 1].parent) continue;
                let p = e.isInteractive();
                ((h.length > 0 || p) && (p && this._allInteractiveElements.push(e), h.push(e)),
                  this._hitElements.length === 0 && (this._hitElements = h),
                  (d = !0));
              }
            }
          }
          let c = this._isInteractive(r),
            f = e.isInteractive();
          return (
            f && f && this._allInteractiveElements.push(e),
            o || this._hitElements.length > 0
              ? null
              : d
                ? this._hitElements
                : c && !s(e, t) && i(e, t)
                  ? f
                    ? [e]
                    : []
                  : null
          );
        }
        hitTestRecursive(e, r, t, i, s) {
          if (this._interactivePrune(e) || s(e, t)) return null;
          if (
            ((e.eventMode === "dynamic" || r === "dynamic") && (Y0.pauseUpdate = !1),
            e.interactiveChildren && e.children)
          ) {
            let c = e.children,
              f = t;
            for (let l = c.length - 1; l >= 0; l--) {
              let b = c[l],
                _ = this.hitTestRecursive(b, this._isInteractive(r) ? r : b.eventMode, f, i, s);
              if (_) {
                if (_.length > 0 && !_[_.length - 1].parent) continue;
                let h = e.isInteractive();
                return ((_.length > 0 || h) && _.push(e), _);
              }
            }
          }
          let o = this._isInteractive(r),
            d = e.isInteractive();
          return o && i(e, t) ? (d ? [e] : []) : null;
        }
        _isInteractive(e) {
          return e === "static" || e === "dynamic";
        }
        _interactivePrune(e) {
          return (
            !e ||
            !e.visible ||
            !e.renderable ||
            !e.measurable ||
            e.eventMode === "none" ||
            (e.eventMode === "passive" && !e.interactiveChildren)
          );
        }
        hitPruneFn(e, r) {
          if (e.hitArea && (e.worldTransform.applyInverse(r, NY), !e.hitArea.contains(NY.x, NY.y))) return !0;
          if (e.effects && e.effects.length)
            for (let t = 0; t < e.effects.length; t++) {
              let i = e.effects[t];
              if (i.containsPoint && !i.containsPoint(r, this.hitTestFn)) return !0;
            }
          return !1;
        }
        hitTestFn(e, r) {
          return e.hitArea
            ? !0
            : e?.containsPoint
              ? (e.worldTransform.applyInverse(r, NY), e.containsPoint(NY))
              : !1;
        }
        notifyTarget(e, r) {
          if (!e.currentTarget.isInteractive()) return;
          r ?? (r = e.type);
          let t = `on${r}`;
          e.currentTarget[t]?.(e);
          let i = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${r}capture` : r;
          (this._notifyListeners(e, i), e.eventPhase === e.AT_TARGET && this._notifyListeners(e, r));
        }
        mapPointerDown(e) {
          if (!(e instanceof FederatedPointerEvent)) {
            warn_("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
          }
          let r = this.createPointerEvent(e);
          if ((this.dispatchEvent(r, "pointerdown"), r.pointerType === "touch"))
            this.dispatchEvent(r, "touchstart");
          else if (r.pointerType === "mouse" || r.pointerType === "pen") {
            let i = r.button === 2;
            this.dispatchEvent(r, i ? "rightdown" : "mousedown");
          }
          let t = this.trackingData(e.pointerId);
          ((t.pressTargetsByButton[e.button] = r.composedPath()), this.freeEvent(r));
        }
        mapPointerMove(e) {
          if (!(e instanceof FederatedPointerEvent)) {
            warn_("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
          }
          ((this._allInteractiveElements.length = 0),
            (this._hitElements.length = 0),
            (this._isPointerMoveEvent = !0));
          let r = this.createPointerEvent(e);
          this._isPointerMoveEvent = !1;
          let t = r.pointerType === "mouse" || r.pointerType === "pen",
            i = this.trackingData(e.pointerId),
            s = this.findMountedTarget(i.overTargets);
          if (i.overTargets?.length > 0 && s !== r.target) {
            let c = e.type === "mousemove" ? "mouseout" : "pointerout",
              f = this.createPointerEvent(e, c, s);
            if (
              (this.dispatchEvent(f, "pointerout"),
              t && this.dispatchEvent(f, "mouseout"),
              !r.composedPath().includes(s))
            ) {
              let l = this.createPointerEvent(e, "pointerleave", s);
              for (l.eventPhase = l.AT_TARGET; l.target && !r.composedPath().includes(l.target);)
                ((l.currentTarget = l.target),
                  this.notifyTarget(l),
                  t && this.notifyTarget(l, "mouseleave"),
                  (l.target = l.target.parent));
              this.freeEvent(l);
            }
            this.freeEvent(f);
          }
          if (s !== r.target) {
            let c = e.type === "mousemove" ? "mouseover" : "pointerover",
              f = this.clonePointerEvent(r, c);
            (this.dispatchEvent(f, "pointerover"), t && this.dispatchEvent(f, "mouseover"));
            let l = s?.parent;
            for (; l && l !== this.rootTarget.parent && l !== r.target;) l = l.parent;
            if (!l || l === this.rootTarget.parent) {
              let _ = this.clonePointerEvent(r, "pointerenter");
              for (
                _.eventPhase = _.AT_TARGET;
                _.target && _.target !== s && _.target !== this.rootTarget.parent;
              )
                ((_.currentTarget = _.target),
                  this.notifyTarget(_),
                  t && this.notifyTarget(_, "mouseenter"),
                  (_.target = _.target.parent));
              this.freeEvent(_);
            }
            this.freeEvent(f);
          }
          let o = [],
            d = this.enableGlobalMoveEvents ?? !0;
          (this.moveOnAll ? o.push("pointermove") : this.dispatchEvent(r, "pointermove"),
            d && o.push("globalpointermove"),
            r.pointerType === "touch" &&
              (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(r, "touchmove"),
              d && o.push("globaltouchmove")),
            t &&
              (this.moveOnAll ? o.splice(1, 0, "mousemove") : this.dispatchEvent(r, "mousemove"),
              d && o.push("globalmousemove"),
              (this.cursor = r.target?.cursor)),
            o.length > 0 && this.all(r, o),
            (this._allInteractiveElements.length = 0),
            (this._hitElements.length = 0),
            (i.overTargets = r.composedPath()),
            this.freeEvent(r));
        }
        mapPointerOver(e) {
          if (!(e instanceof FederatedPointerEvent)) {
            warn_("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
          }
          let r = this.trackingData(e.pointerId),
            t = this.createPointerEvent(e),
            i = t.pointerType === "mouse" || t.pointerType === "pen";
          (this.dispatchEvent(t, "pointerover"),
            i && this.dispatchEvent(t, "mouseover"),
            t.pointerType === "mouse" && (this.cursor = t.target?.cursor));
          let s = this.clonePointerEvent(t, "pointerenter");
          for (s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent;)
            ((s.currentTarget = s.target),
              this.notifyTarget(s),
              i && this.notifyTarget(s, "mouseenter"),
              (s.target = s.target.parent));
          ((r.overTargets = t.composedPath()), this.freeEvent(t), this.freeEvent(s));
        }
        mapPointerOut(e) {
          if (!(e instanceof FederatedPointerEvent)) {
            warn_("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
          }
          let r = this.trackingData(e.pointerId);
          if (r.overTargets) {
            let t = e.pointerType === "mouse" || e.pointerType === "pen",
              i = this.findMountedTarget(r.overTargets),
              s = this.createPointerEvent(e, "pointerout", i);
            (this.dispatchEvent(s), t && this.dispatchEvent(s, "mouseout"));
            let o = this.createPointerEvent(e, "pointerleave", i);
            for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)
              ((o.currentTarget = o.target),
                this.notifyTarget(o),
                t && this.notifyTarget(o, "mouseleave"),
                (o.target = o.target.parent));
            ((r.overTargets = null), this.freeEvent(s), this.freeEvent(o));
          }
          this.cursor = null;
        }
        mapPointerUp(e) {
          if (!(e instanceof FederatedPointerEvent)) {
            warn_("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
          }
          let r = performance.now(),
            t = this.createPointerEvent(e);
          if ((this.dispatchEvent(t, "pointerup"), t.pointerType === "touch"))
            this.dispatchEvent(t, "touchend");
          else if (t.pointerType === "mouse" || t.pointerType === "pen") {
            let d = t.button === 2;
            this.dispatchEvent(t, d ? "rightup" : "mouseup");
          }
          let i = this.trackingData(e.pointerId),
            s = this.findMountedTarget(i.pressTargetsByButton[e.button]),
            o = s;
          if (s && !t.composedPath().includes(s)) {
            let d = s;
            for (; d && !t.composedPath().includes(d);) {
              if (
                ((t.currentTarget = d), this.notifyTarget(t, "pointerupoutside"), t.pointerType === "touch")
              )
                this.notifyTarget(t, "touchendoutside");
              else if (t.pointerType === "mouse" || t.pointerType === "pen") {
                let c = t.button === 2;
                this.notifyTarget(t, c ? "rightupoutside" : "mouseupoutside");
              }
              d = d.parent;
            }
            (delete i.pressTargetsByButton[e.button], (o = d));
          }
          if (o) {
            let d = this.clonePointerEvent(t, "click");
            ((d.target = o),
              (d.path = null),
              i.clicksByButton[e.button] ||
                (i.clicksByButton[e.button] = { clickCount: 0, target: d.target, timeStamp: r }));
            let c = i.clicksByButton[e.button];
            if (
              (c.target === d.target && r - c.timeStamp < 200 ? ++c.clickCount : (c.clickCount = 1),
              (c.target = d.target),
              (c.timeStamp = r),
              (d.detail = c.clickCount),
              d.pointerType === "mouse")
            ) {
              let f = d.button === 2;
              this.dispatchEvent(d, f ? "rightclick" : "click");
            } else d.pointerType === "touch" && this.dispatchEvent(d, "tap");
            (this.dispatchEvent(d, "pointertap"), this.freeEvent(d));
          }
          this.freeEvent(t);
        }
        mapPointerUpOutside(e) {
          if (!(e instanceof FederatedPointerEvent)) {
            warn_("EventBoundary cannot map a non-pointer event as a pointer event");
            return;
          }
          let r = this.trackingData(e.pointerId),
            t = this.findMountedTarget(r.pressTargetsByButton[e.button]),
            i = this.createPointerEvent(e);
          if (t) {
            let s = t;
            for (; s;)
              ((i.currentTarget = s),
                this.notifyTarget(i, "pointerupoutside"),
                i.pointerType === "touch"
                  ? this.notifyTarget(i, "touchendoutside")
                  : (i.pointerType === "mouse" || i.pointerType === "pen") &&
                    this.notifyTarget(i, i.button === 2 ? "rightupoutside" : "mouseupoutside"),
                (s = s.parent));
            delete r.pressTargetsByButton[e.button];
          }
          this.freeEvent(i);
        }
        mapWheel(e) {
          if (!(e instanceof FederatedWheelEvent)) {
            warn_("EventBoundary cannot map a non-wheel event as a wheel event");
            return;
          }
          let r = this.createWheelEvent(e);
          (this.dispatchEvent(r), this.freeEvent(r));
        }
        findMountedTarget(e) {
          if (!e) return null;
          let r = e[0];
          for (let t = 1; t < e.length && e[t].parent === r; t++) r = e[t];
          return r;
        }
        createPointerEvent(e, r, t) {
          let i = this.allocateEvent(FederatedPointerEvent);
          return (
            this.copyPointerData(e, i),
            this.copyMouseData(e, i),
            this.copyData(e, i),
            (i.nativeEvent = e.nativeEvent),
            (i.originalEvent = e),
            (i.target = t ?? this.hitTest(i.global.x, i.global.y) ?? this._hitElements[0]),
            typeof r == "string" && (i.type = r),
            i
          );
        }
        createWheelEvent(e) {
          let r = this.allocateEvent(FederatedWheelEvent);
          return (
            this.copyWheelData(e, r),
            this.copyMouseData(e, r),
            this.copyData(e, r),
            (r.nativeEvent = e.nativeEvent),
            (r.originalEvent = e),
            (r.target = this.hitTest(r.global.x, r.global.y)),
            r
          );
        }
        clonePointerEvent(e, r) {
          let t = this.allocateEvent(FederatedPointerEvent);
          return (
            (t.nativeEvent = e.nativeEvent),
            (t.originalEvent = e.originalEvent),
            this.copyPointerData(e, t),
            this.copyMouseData(e, t),
            this.copyData(e, t),
            (t.target = e.target),
            (t.path = e.composedPath().slice()),
            (t.type = r ?? t.type),
            t
          );
        }
        copyWheelData(e, r) {
          ((r.deltaMode = e.deltaMode), (r.deltaX = e.deltaX), (r.deltaY = e.deltaY), (r.deltaZ = e.deltaZ));
        }
        copyPointerData(e, r) {
          e instanceof FederatedPointerEvent &&
            r instanceof FederatedPointerEvent &&
            ((r.pointerId = e.pointerId),
            (r.width = e.width),
            (r.height = e.height),
            (r.isPrimary = e.isPrimary),
            (r.pointerType = e.pointerType),
            (r.pressure = e.pressure),
            (r.tangentialPressure = e.tangentialPressure),
            (r.tiltX = e.tiltX),
            (r.tiltY = e.tiltY),
            (r.twist = e.twist));
        }
        copyMouseData(e, r) {
          e instanceof FederatedMouseEvent &&
            r instanceof FederatedMouseEvent &&
            ((r.altKey = e.altKey),
            (r.button = e.button),
            (r.buttons = e.buttons),
            r.client.copyFrom(e.client),
            (r.ctrlKey = e.ctrlKey),
            (r.metaKey = e.metaKey),
            r.movement.copyFrom(e.movement),
            r.screen.copyFrom(e.screen),
            (r.shiftKey = e.shiftKey),
            r.global.copyFrom(e.global));
        }
        copyData(e, r) {
          ((r.isTrusted = e.isTrusted),
            (r.srcElement = e.srcElement),
            (r.timeStamp = performance.now()),
            (r.type = e.type),
            (r.detail = e.detail),
            (r.view = e.view),
            (r.which = e.which),
            r.layer.copyFrom(e.layer),
            r.page.copyFrom(e.page));
        }
        trackingData(e) {
          return (
            this.mappingState.trackingData[e] ||
              (this.mappingState.trackingData[e] = {
                pressTargetsByButton: {},
                clicksByButton: {},
                overTarget: null,
              }),
            this.mappingState.trackingData[e]
          );
        }
        allocateEvent(e) {
          this.eventPool.has(e) || this.eventPool.set(e, []);
          let r = this.eventPool.get(e).pop() || new e(this);
          return (
            (r.eventPhase = r.NONE),
            (r.currentTarget = null),
            (r.defaultPrevented = !1),
            (r.path = null),
            (r.target = null),
            r
          );
        }
        freeEvent(e) {
          if (e.manager !== this)
            throw new Error("It is illegal to free an event not managed by this EventBoundary!");
          let r = e.constructor;
          (this.eventPool.has(r) || this.eventPool.set(r, []), this.eventPool.get(r).push(e));
        }
        _notifyListeners(e, r) {
          let t = e.currentTarget._events[r];
          if (t)
            if ("fn" in t)
              (t.once && e.currentTarget.removeListener(r, t.fn, void 0, !0), t.fn.call(t.context, e));
            else
              for (let i = 0, s = t.length; i < s && !e.propagationImmediatelyStopped; i++)
                (t[i].once && e.currentTarget.removeListener(r, t[i].fn, void 0, !0),
                  t[i].fn.call(t[i].context, e));
        }
      }
