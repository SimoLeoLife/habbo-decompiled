// Estratto da HabboAirLauncher.deobf.js, riga 23608.

class a extends ViewContainer {
      static {
        n(this, "Graphics");
      }
      constructor(e) {
        e instanceof Eb && (e = { context: e });
        let { context: r, roundPixels: t, ...i } = e || {};
        (super({ label: "Graphics", ...i }),
          (this.renderPipeId = "graphics"),
          r
            ? (this.context = r)
            : ((this.context = this._ownedContext = new Eb()),
              (this.context.autoGarbageCollect = this.autoGarbageCollect)),
          (this.didViewUpdate = !0),
          (this.allowChildren = !1),
          (this.roundPixels = t ?? !1));
      }
      set context(e) {
        e !== this._context &&
          (this._context &&
            (this._context.off("update", this.onViewUpdate, this),
            this._context.off("unload", this.unload, this)),
          (this._context = e),
          this._context.on("update", this.onViewUpdate, this),
          this._context.on("unload", this.unload, this),
          this.onViewUpdate());
      }
      get context() {
        return this._context;
      }
      get bounds() {
        return this._context.bounds;
      }
      updateBounds() {}
      containsPoint(e) {
        return this._context.containsPoint(e);
      }
      destroy(e) {
        (this._ownedContext && !e
          ? this._ownedContext.destroy(e)
          : (e === !0 || e?.context === !0) && this._context.destroy(e),
          (this._ownedContext = null),
          (this._context = null),
          super.destroy(e));
      }
      _onTouch(e) {
        ((this._gcLastUsed = e), (this._context._gcLastUsed = e));
      }
      _callContextMethod(e, r) {
        return (this.context[e](...r), this);
      }
      setFillStyle(...e) {
        return this._callContextMethod("setFillStyle", e);
      }
      setStrokeStyle(...e) {
        return this._callContextMethod("setStrokeStyle", e);
      }
      fill(...e) {
        return this._callContextMethod("fill", e);
      }
      stroke(...e) {
        return this._callContextMethod("stroke", e);
      }
      texture(...e) {
        return this._callContextMethod("texture", e);
      }
      beginPath() {
        return this._callContextMethod("beginPath", []);
      }
      cut() {
        return this._callContextMethod("cut", []);
      }
      arc(...e) {
        return this._callContextMethod("arc", e);
      }
      arcTo(...e) {
        return this._callContextMethod("arcTo", e);
      }
      arcToSvg(...e) {
        return this._callContextMethod("arcToSvg", e);
      }
      bezierCurveTo(...e) {
        return this._callContextMethod("bezierCurveTo", e);
      }
      closePath() {
        return this._callContextMethod("closePath", []);
      }
      ellipse(...e) {
        return this._callContextMethod("ellipse", e);
      }
      circle(...e) {
        return this._callContextMethod("circle", e);
      }
      path(...e) {
        return this._callContextMethod("path", e);
      }
      lineTo(...e) {
        return this._callContextMethod("lineTo", e);
      }
      moveTo(...e) {
        return this._callContextMethod("moveTo", e);
      }
      quadraticCurveTo(...e) {
        return this._callContextMethod("quadraticCurveTo", e);
      }
      rect(...e) {
        return this._callContextMethod("rect", e);
      }
      roundRect(...e) {
        return this._callContextMethod("roundRect", e);
      }
      poly(...e) {
        return this._callContextMethod("poly", e);
      }
      regularPoly(...e) {
        return this._callContextMethod("regularPoly", e);
      }
      roundPoly(...e) {
        return this._callContextMethod("roundPoly", e);
      }
      roundShape(...e) {
        return this._callContextMethod("roundShape", e);
      }
      filletRect(...e) {
        return this._callContextMethod("filletRect", e);
      }
      chamferRect(...e) {
        return this._callContextMethod("chamferRect", e);
      }
      star(...e) {
        return this._callContextMethod("star", e);
      }
      svg(...e) {
        return this._callContextMethod("svg", e);
      }
      restore(...e) {
        return this._callContextMethod("restore", e);
      }
      save() {
        return this._callContextMethod("save", []);
      }
      getTransform() {
        return this.context.getTransform();
      }
      resetTransform() {
        return this._callContextMethod("resetTransform", []);
      }
      rotateTransform(...e) {
        return this._callContextMethod("rotate", e);
      }
      scaleTransform(...e) {
        return this._callContextMethod("scale", e);
      }
      setTransform(...e) {
        return this._callContextMethod("setTransform", e);
      }
      transform(...e) {
        return this._callContextMethod("transform", e);
      }
      translateTransform(...e) {
        return this._callContextMethod("translate", e);
      }
      clear() {
        return this._callContextMethod("clear", []);
      }
      get fillStyle() {
        return this._context.fillStyle;
      }
      set fillStyle(e) {
        this._context.fillStyle = e;
      }
      get strokeStyle() {
        return this._context.strokeStyle;
      }
      set strokeStyle(e) {
        this._context.strokeStyle = e;
      }
      clone(e = !1) {
        return e ? new a(this._context.clone()) : ((this._ownedContext = null), new a(this._context));
      }
      lineStyle(e, r, t) {
        Zr(
          Va,
          "Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.",
        );
        let i = {};
        return (
          e && (i.width = e),
          r && (i.color = r),
          t && (i.alpha = t),
          (this.context.strokeStyle = i),
          this
        );
      }
      beginFill(e, r) {
        Zr(
          Va,
          "Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.",
        );
        let t = {};
        return (
          e !== void 0 && (t.color = e),
          r !== void 0 && (t.alpha = r),
          (this.context.fillStyle = t),
          this
        );
      }
      endFill() {
        (Zr(
          Va,
          "Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.",
        ),
          this.context.fill());
        let e = this.context.strokeStyle;
        return (
          (e.width !== Eb.defaultStrokeStyle.width ||
            e.color !== Eb.defaultStrokeStyle.color ||
            e.alpha !== Eb.defaultStrokeStyle.alpha) &&
            this.context.stroke(),
          this
        );
      }
      drawCircle(...e) {
        return (
          Zr(Va, "Graphics#drawCircle has been renamed to Graphics#circle"),
          this._callContextMethod("circle", e)
        );
      }
      drawEllipse(...e) {
        return (
          Zr(Va, "Graphics#drawEllipse has been renamed to Graphics#ellipse"),
          this._callContextMethod("ellipse", e)
        );
      }
      drawPolygon(...e) {
        return (
          Zr(Va, "Graphics#drawPolygon has been renamed to Graphics#poly"),
          this._callContextMethod("poly", e)
        );
      }
      drawRect(...e) {
        return (
          Zr(Va, "Graphics#drawRect has been renamed to Graphics#rect"),
          this._callContextMethod("rect", e)
        );
      }
      drawRoundedRect(...e) {
        return (
          Zr(Va, "Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),
          this._callContextMethod("roundRect", e)
        );
      }
      drawStar(...e) {
        return (
          Zr(Va, "Graphics#drawStar has been renamed to Graphics#star"),
          this._callContextMethod("star", e)
        );
      }
    }
