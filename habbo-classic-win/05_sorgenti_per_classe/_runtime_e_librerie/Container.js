// Estratto da HabboAirLauncher.deobf.js, riga 3768.

class a extends Yn {
        static {
          n(this, "Container");
        }
        constructor(e = {}) {
          (super(),
            (this.uid = uid_("renderable")),
            (this._updateFlags = 15),
            (this.renderGroup = null),
            (this.parentRenderGroup = null),
            (this.parentRenderGroupIndex = 0),
            (this.didChange = !1),
            (this.didViewUpdate = !1),
            (this.relativeRenderGroupDepth = 0),
            (this.children = []),
            (this.parent = null),
            (this.includeInBuild = !0),
            (this.measurable = !0),
            (this.isSimple = !0),
            (this.parentRenderLayer = null),
            (this.updateTick = -1),
            (this.localTransform = new Ze()),
            (this.relativeGroupTransform = new Ze()),
            (this.groupTransform = this.relativeGroupTransform),
            (this.destroyed = !1),
            (this._position = new Kn(this, 0, 0)),
            (this._scale = uPe),
            (this._pivot = bre),
            (this._origin = _re),
            (this._skew = _Pe),
            (this._cx = 1),
            (this._sx = 0),
            (this._cy = 0),
            (this._sy = 1),
            (this._rotation = 0),
            (this.localColor = 16777215),
            (this.localAlpha = 1),
            (this.groupAlpha = 1),
            (this.groupColor = 16777215),
            (this.groupColorAlpha = 4294967295),
            (this.localBlendMode = "inherit"),
            (this.groupBlendMode = "normal"),
            (this.localDisplayStatus = 7),
            (this.globalDisplayStatus = 7),
            (this._didContainerChangeTick = 0),
            (this._didViewChangeTick = 0),
            (this._didLocalTransformChangeId = -1),
            (this.effects = []),
            assignWithIgnore(this, e, { children: !0, parent: !0, effects: !0 }),
            e.children?.forEach((r) => this.addChild(r)),
            e.parent?.addChild(this));
        }
        static mixin(e) {
          (Zr("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead."),
            nt.mixin(a, e));
        }
        set _didChangeId(e) {
          ((this._didViewChangeTick = (e >> 12) & 4095), (this._didContainerChangeTick = e & 4095));
        }
        get _didChangeId() {
          return (this._didContainerChangeTick & 4095) | ((this._didViewChangeTick & 4095) << 12);
        }
        addChild(...e) {
          if (
            (this.allowChildren ||
              Zr(Va, "addChild: Only Containers will be allowed to add children in v8.0.0"),
            e.length > 1)
          ) {
            for (let i = 0; i < e.length; i++) this.addChild(e[i]);
            return e[0];
          }
          let r = e[0],
            t = this.renderGroup || this.parentRenderGroup;
          return r.parent === this
            ? (this.children.splice(this.children.indexOf(r), 1),
              this.children.push(r),
              t && (t.structureDidChange = !0),
              r)
            : (r.parent && r.parent.removeChild(r),
              this.children.push(r),
              this.sortableChildren && (this.sortDirty = !0),
              (r.parent = this),
              (r.didChange = !0),
              (r._updateFlags = 15),
              t && t.addChild(r),
              this.emit("childAdded", r, this, this.children.length - 1),
              r.emit("added", this),
              this._didViewChangeTick++,
              r._zIndex !== 0 && r.depthOfChildModified(),
              r);
        }
        removeChild(...e) {
          if (e.length > 1) {
            for (let i = 0; i < e.length; i++) this.removeChild(e[i]);
            return e[0];
          }
          let r = e[0],
            t = this.children.indexOf(r);
          return (
            t > -1 &&
              (this._didViewChangeTick++,
              this.children.splice(t, 1),
              this.renderGroup
                ? this.renderGroup.removeChild(r)
                : this.parentRenderGroup && this.parentRenderGroup.removeChild(r),
              r.parentRenderLayer && r.parentRenderLayer.detach(r),
              (r.parent = null),
              this.emit("childRemoved", r, this, t),
              r.emit("removed", this)),
            r
          );
        }
        _onUpdate(e) {
          (e && e === this._skew && this._updateSkew(),
            this._didContainerChangeTick++,
            !this.didChange &&
              ((this.didChange = !0), this.parentRenderGroup && this.parentRenderGroup.onChildUpdate(this)));
        }
        set isRenderGroup(e) {
          !!this.renderGroup !== e && (e ? this.enableRenderGroup() : this.disableRenderGroup());
        }
        get isRenderGroup() {
          return !!this.renderGroup;
        }
        enableRenderGroup() {
          if (this.renderGroup) return;
          let e = this.parentRenderGroup;
          (e?.removeChild(this),
            (this.renderGroup = ds.get(RenderGroup, this)),
            (this.groupTransform = Ze.IDENTITY),
            e?.addChild(this),
            this._updateIsSimple());
        }
        disableRenderGroup() {
          if (!this.renderGroup) return;
          let e = this.parentRenderGroup;
          (e?.removeChild(this),
            ds.return(this.renderGroup),
            (this.renderGroup = null),
            (this.groupTransform = this.relativeGroupTransform),
            e?.addChild(this),
            this._updateIsSimple());
        }
        _updateIsSimple() {
          this.isSimple = !this.renderGroup && this.effects.length === 0;
        }
        get worldTransform() {
          return (
            this._worldTransform || (this._worldTransform = new Ze()),
            this.renderGroup
              ? this._worldTransform.copyFrom(this.renderGroup.worldTransform)
              : this.parentRenderGroup &&
                this._worldTransform.appendFrom(
                  this.relativeGroupTransform,
                  this.parentRenderGroup.worldTransform,
                ),
            this._worldTransform
          );
        }
        get x() {
          return this._position.x;
        }
        set x(e) {
          this._position.x = e;
        }
        get y() {
          return this._position.y;
        }
        set y(e) {
          this._position.y = e;
        }
        get position() {
          return this._position;
        }
        set position(e) {
          this._position.copyFrom(e);
        }
        get rotation() {
          return this._rotation;
        }
        set rotation(e) {
          this._rotation !== e && ((this._rotation = e), this._onUpdate(this._skew));
        }
        get angle() {
          return this.rotation * nHe;
        }
        set angle(e) {
          this.rotation = e * sHe;
        }
        get pivot() {
          return (this._pivot === bre && (this._pivot = new Kn(this, 0, 0)), this._pivot);
        }
        set pivot(e) {
          (this._pivot === bre &&
            ((this._pivot = new Kn(this, 0, 0)),
            this._origin !== _re &&
              warn_(
                "Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.",
              )),
            typeof e == "number" ? this._pivot.set(e) : this._pivot.copyFrom(e));
        }
        get skew() {
          return (this._skew === _Pe && (this._skew = new Kn(this, 0, 0)), this._skew);
        }
        set skew(e) {
          (this._skew === _Pe && (this._skew = new Kn(this, 0, 0)), this._skew.copyFrom(e));
        }
        get scale() {
          return (this._scale === uPe && (this._scale = new Kn(this, 1, 1)), this._scale);
        }
        set scale(e) {
          (this._scale === uPe && (this._scale = new Kn(this, 0, 0)),
            typeof e == "string" && (e = parseFloat(e)),
            typeof e == "number" ? this._scale.set(e) : this._scale.copyFrom(e));
        }
        get origin() {
          return (this._origin === _re && (this._origin = new Kn(this, 0, 0)), this._origin);
        }
        set origin(e) {
          (this._origin === _re &&
            ((this._origin = new Kn(this, 0, 0)),
            this._pivot !== bre &&
              warn_(
                "Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.",
              )),
            typeof e == "number" ? this._origin.set(e) : this._origin.copyFrom(e));
        }
        get width() {
          return Math.abs(this.scale.x * this.getLocalBounds().width);
        }
        set width(e) {
          let r = this.getLocalBounds().width;
          this._setWidth(e, r);
        }
        get height() {
          return Math.abs(this.scale.y * this.getLocalBounds().height);
        }
        set height(e) {
          let r = this.getLocalBounds().height;
          this._setHeight(e, r);
        }
        getSize(e) {
          e || (e = {});
          let r = this.getLocalBounds();
          return (
            (e.width = Math.abs(this.scale.x * r.width)),
            (e.height = Math.abs(this.scale.y * r.height)),
            e
          );
        }
        setSize(e, r) {
          let t = this.getLocalBounds();
          (typeof e == "object" ? ((r = e.height ?? e.width), (e = e.width)) : (r ?? (r = e)),
            e !== void 0 && this._setWidth(e, t.width),
            r !== void 0 && this._setHeight(r, t.height));
        }
        _updateSkew() {
          let e = this._rotation,
            r = this._skew;
          ((this._cx = Math.cos(e + r._y)),
            (this._sx = Math.sin(e + r._y)),
            (this._cy = -Math.sin(e - r._x)),
            (this._sy = Math.cos(e - r._x)));
        }
        updateTransform(e) {
          return (
            this.position.set(
              typeof e.x == "number" ? e.x : this.position.x,
              typeof e.y == "number" ? e.y : this.position.y,
            ),
            this.scale.set(
              typeof e.scaleX == "number" ? e.scaleX || 1 : this.scale.x,
              typeof e.scaleY == "number" ? e.scaleY || 1 : this.scale.y,
            ),
            (this.rotation = typeof e.rotation == "number" ? e.rotation : this.rotation),
            this.skew.set(
              typeof e.skewX == "number" ? e.skewX : this.skew.x,
              typeof e.skewY == "number" ? e.skewY : this.skew.y,
            ),
            this.pivot.set(
              typeof e.pivotX == "number" ? e.pivotX : this.pivot.x,
              typeof e.pivotY == "number" ? e.pivotY : this.pivot.y,
            ),
            this.origin.set(
              typeof e.originX == "number" ? e.originX : this.origin.x,
              typeof e.originY == "number" ? e.originY : this.origin.y,
            ),
            this
          );
        }
        setFromMatrix(e) {
          e.decompose(this);
        }
        updateLocalTransform() {
          let e = this._didContainerChangeTick;
          if (this._didLocalTransformChangeId === e) return;
          this._didLocalTransformChangeId = e;
          let r = this.localTransform,
            t = this._scale,
            i = this._pivot,
            s = this._origin,
            o = this._position,
            d = t._x,
            c = t._y,
            f = i._x,
            l = i._y,
            b = -s._x,
            _ = -s._y;
          ((r.a = this._cx * d),
            (r.b = this._sx * d),
            (r.c = this._cy * c),
            (r.d = this._sy * c),
            (r.tx = o._x - (f * r.a + l * r.c) + (b * r.a + _ * r.c) - b),
            (r.ty = o._y - (f * r.b + l * r.d) + (b * r.b + _ * r.d) - _));
        }
        set alpha(e) {
          e !== this.localAlpha && ((this.localAlpha = e), (this._updateFlags |= Ix), this._onUpdate());
        }
        get alpha() {
          return this.localAlpha;
        }
        set tint(e) {
          let t = na.shared.setValue(e ?? 16777215).toBgrNumber();
          t !== this.localColor && ((this.localColor = t), (this._updateFlags |= Ix), this._onUpdate());
        }
        get tint() {
          return bgr2rgb(this.localColor);
        }
        set blendMode(e) {
          this.localBlendMode !== e &&
            (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
            (this._updateFlags |= RY),
            (this.localBlendMode = e),
            this._onUpdate());
        }
        get blendMode() {
          return this.localBlendMode;
        }
        get visible() {
          return !!(this.localDisplayStatus & 2);
        }
        set visible(e) {
          let r = e ? 2 : 0;
          (this.localDisplayStatus & 2) !== r &&
            (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
            (this._updateFlags |= qg),
            (this.localDisplayStatus ^= 2),
            this._onUpdate(),
            this.emit("visibleChanged", e));
        }
        get culled() {
          return !(this.localDisplayStatus & 4);
        }
        set culled(e) {
          let r = e ? 0 : 4;
          (this.localDisplayStatus & 4) !== r &&
            (this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
            (this._updateFlags |= qg),
            (this.localDisplayStatus ^= 4),
            this._onUpdate());
        }
        get renderable() {
          return !!(this.localDisplayStatus & 1);
        }
        set renderable(e) {
          let r = e ? 1 : 0;
          (this.localDisplayStatus & 1) !== r &&
            ((this._updateFlags |= qg),
            (this.localDisplayStatus ^= 1),
            this.parentRenderGroup && (this.parentRenderGroup.structureDidChange = !0),
            this._onUpdate());
        }
        get isRenderable() {
          return this.localDisplayStatus === 7 && this.groupAlpha > 0;
        }
        destroy(e = !1) {
          if (this.destroyed) return;
          this.destroyed = !0;
          let r;
          if (
            (this.children.length && (r = this.removeChildren(0, this.children.length)),
            this.removeFromParent(),
            (this.parent = null),
            (this._maskEffect = null),
            (this._filterEffect = null),
            (this.effects = null),
            (this._position = null),
            (this._scale = null),
            (this._pivot = null),
            (this._origin = null),
            (this._skew = null),
            this.emit("destroyed", this),
            this.removeAllListeners(),
            (typeof e == "boolean" ? e : e?.children) && r)
          )
            for (let i = 0; i < r.length; ++i) r[i].destroy(e);
          (this.renderGroup?.destroy(), (this.renderGroup = null));
        }
      }
