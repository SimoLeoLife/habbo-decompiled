// Estratto da HabboAirLauncher.deobf.js, riga 30540.

class {
    static {
      n(this, "CanvasTilingSpritePipe");
    }
    constructor(e) {
      this._renderer = e;
    }
    validateRenderable(e) {
      return !1;
    }
    addRenderable(e, r) {
      (this._renderer.renderPipes.batch.break(r), r.add(e));
    }
    updateRenderable(e) {}
    execute(e) {
      let r = this._renderer,
        t = r.canvasContext,
        i = t.activeContext;
      (i.save(), t.setBlendMode(e.groupBlendMode));
      let s = r.globalUniforms.globalUniformData?.worldColor ?? 4294967295,
        o = e.groupColorAlpha,
        d = ((s >>> 24) & 255) / 255,
        c = ((o >>> 24) & 255) / 255,
        f = r.filter?.alphaMultiplier ?? 1,
        l = d * c * f;
      if (l <= 0) {
        i.restore();
        return;
      }
      i.globalAlpha = l;
      let b = s & 16777215,
        _ = o & 16777215,
        h = bgr2rgb(multiplyHexColors(_, b)),
        p = e.texture,
        m = La.getTintedPattern(p, h),
        v = e.width,
        w = e.height,
        I = e.groupTransform,
        C = p.source._resolution ?? p.source.resolution ?? 1;
      (g$.copyFrom(e._tileTransform.matrix),
        e.applyAnchorToTexture || g$.translate(-e.anchor.x * v, -e.anchor.y * w),
        g$.scale(1 / C, 1 / C),
        Qte.identity(),
        Qte.prepend(g$),
        Qte.prepend(I));
      let W = r._roundPixels | e._roundPixels;
      (t.setContextTransform(Qte, W === 1), (i.fillStyle = m));
      let R = e.anchor.x * -v,
        T = e.anchor.y * -w;
      (Ah[0].set(R, T), Ah[1].set(R + v, T), Ah[2].set(R + v, T + w), Ah[3].set(R, T + w));
      for (let S = 0; S < 4; S++) g$.applyInverse(Ah[S], Ah[S]);
      (i.beginPath(), i.moveTo(Ah[0].x, Ah[0].y));
      for (let S = 1; S < 4; S++) i.lineTo(Ah[S].x, Ah[S].y);
      (i.closePath(), i.fill(), i.restore());
    }
    destroy() {
      this._renderer = null;
    }
  }
