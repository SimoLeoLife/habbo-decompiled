// Estratto da HabboAirLauncher.deobf.js, riga 5026.

class extends Ii {
      static {
        n(this, "ViewContainer");
      }
      constructor(e) {
        (super(e),
          (this.canBundle = !0),
          (this.allowChildren = !1),
          (this._roundPixels = 0),
          (this._lastUsed = -1),
          (this._gpuData = Object.create(null)),
          (this.autoGarbageCollect = !0),
          (this._gcLastUsed = -1),
          (this._bounds = new An(0, 1, 0, 0)),
          (this._boundsDirty = !0),
          (this.autoGarbageCollect = e.autoGarbageCollect ?? !0));
      }
      get bounds() {
        return this._boundsDirty
          ? (this.updateBounds(), (this._boundsDirty = !1), this._bounds)
          : this._bounds;
      }
      get roundPixels() {
        return !!this._roundPixels;
      }
      set roundPixels(e) {
        this._roundPixels = e ? 1 : 0;
      }
      containsPoint(e) {
        let r = this.bounds,
          { x: t, y: i } = e;
        return t >= r.minX && t <= r.maxX && i >= r.minY && i <= r.maxY;
      }
      onViewUpdate() {
        if ((this._didViewChangeTick++, (this._boundsDirty = !0), this.didViewUpdate)) return;
        this.didViewUpdate = !0;
        let e = this.renderGroup || this.parentRenderGroup;
        e && e.onChildViewUpdate(this);
      }
      unload() {
        this.emit("unload", this);
        for (let e in this._gpuData) this._gpuData[e]?.destroy();
        ((this._gpuData = Object.create(null)), this.onViewUpdate());
      }
      destroy(e) {
        (this.unload(), super.destroy(e), (this._bounds = null));
      }
      collectRenderablesSimple(e, r, t) {
        let { renderPipes: i } = r;
        i.blendMode.pushBlendMode(this, this.groupBlendMode, e);
        let o = i[this.renderPipeId];
        (o?.addRenderable && o.addRenderable(this, e), (this.didViewUpdate = !1));
        let d = this.children,
          c = d.length;
        for (let f = 0; f < c; f++) d[f].collectRenderables(e, r, t);
        i.blendMode.popBlendMode(e);
      }
    }
