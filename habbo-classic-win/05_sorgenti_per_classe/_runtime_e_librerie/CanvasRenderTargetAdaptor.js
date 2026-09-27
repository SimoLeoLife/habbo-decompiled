// Estratto da HabboAirLauncher.deobf.js, riga 24210.

class {
      static {
        n(this, "CanvasRenderTargetAdaptor");
      }
      init(e, r) {
        ((this._renderer = e), (this._renderTargetSystem = r));
      }
      initGpuRenderTarget(e) {
        let r = e.colorTexture,
          { canvas: t, context: i } = this._ensureCanvas(r);
        return { canvas: t, context: i, width: t.width, height: t.height };
      }
      resizeGpuRenderTarget(e) {
        let r = e.colorTexture,
          { canvas: t } = this._ensureCanvas(r);
        ((t.width = e.pixelWidth), (t.height = e.pixelHeight));
      }
      startRenderPass(e, r, t, i) {
        let s = this._renderTargetSystem.getGpuRenderTarget(e);
        ((this._renderer.canvasContext.activeContext = s.context),
          (this._renderer.canvasContext.activeResolution = e.resolution),
          r && this.clear(e, r, t, i));
      }
      clear(e, r, t, i) {
        let o = this._renderTargetSystem.getGpuRenderTarget(e).context,
          d = i || { x: 0, y: 0, width: e.pixelWidth, height: e.pixelHeight };
        if ((o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(d.x, d.y, d.width, d.height), t)) {
          let c = na.shared.setValue(t);
          c.alpha > 0 &&
            ((o.globalAlpha = c.alpha),
            (o.fillStyle = c.toHex()),
            o.fillRect(d.x, d.y, d.width, d.height),
            (o.globalAlpha = 1));
        }
      }
      finishRenderPass() {}
      copyToTexture(e, r, t, i, s) {
        let d = this._renderTargetSystem.getGpuRenderTarget(e).canvas,
          c = r.source,
          { context: f } = this._ensureCanvas(c),
          l = s?.x ?? 0,
          b = s?.y ?? 0;
        return (f.drawImage(d, t.x, t.y, i.width, i.height, l, b, i.width, i.height), c.update(), r);
      }
      destroyGpuRenderTarget(e) {}
      _ensureCanvas(e) {
        let r = e.resource;
        ((!r || !CanvasSource.test(r)) && ((r = yt.get().createCanvas(e.pixelWidth, e.pixelHeight)), (e.resource = r)),
          (r.width !== e.pixelWidth || r.height !== e.pixelHeight) &&
            ((r.width = e.pixelWidth), (r.height = e.pixelHeight)));
        let t = r.getContext("2d");
        return { canvas: r, context: t };
      }
    }
