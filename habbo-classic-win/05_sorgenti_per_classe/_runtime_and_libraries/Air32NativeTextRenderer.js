// Extracted from HabboAirLauncher.deobf.js, line 44700.

class {
  static {
    n(this, "Air32NativeTextRenderer");
  }
  constructor(e) {
    if (!e?.profile?.glyphs || !e?.swfGlyphs)
      throw new TypeError("nativeFont must be returned by prepareAir32NativeFont");
    ((this.font = e), (this.glyphRunCache = new Map()));
  }
  clearGlyphRunCache() {
    this.glyphRunCache.clear();
  }
  render(e, r = {}) {
    let t = resolveOptions(r),
      i = String(e),
      s = t.size,
      o = t.antiAliasType === "normal",
      d = resolveLineMetrics(this.font.swfFont, s, o, t.stageQuality),
      c = o ? layoutNormalText(this.font, i, s, t.kerning) : layoutNativeText(this.font, i, s, t.kerning);
    (!o &&
      this.font.swfFont.alignmentZones != null &&
      t.fontStyle === "italic" &&
      (c = { ...c, fieldWidth: Math.round((c.fieldWidth + air51AdvancedItalicOverhang(s)) * 20) / 20 }),
      o &&
        t.stageQuality === "low" &&
        t.fontStyle === "italic" &&
        !this.font.swfFont.flags?.italic &&
        (c = { ...c, fieldWidth: c.fieldWidth + lowNormalItalicOverhang(s) }));
    let f = t.target?.width ?? Math.max(1, Math.ceil(c.fieldWidth) + t.padding * 2),
      l = t.target?.height ?? Math.max(1, Math.ceil(d.fieldHeight) + t.padding * 2),
      b = t.renderingPipeline === "habbo-retained",
      _ = b ? (t.target?.pixels ?? createAir32RetainedBitmap(f, l)) : null,
      h = t.target?.pixels ?? new Uint8ClampedArray(f * l * 4);
    if ((b || fillOpaque(h, t.background), o))
      if (t.stageQuality === "low") {
        let p = rasterizeLowNormalRun(this.font, c, d, t, f, l);
        b ? compositeLowNormalRetainedCoverage(p, _, t.color) : compositeLowNormalCoverage(p, h, t.color);
      } else {
        let p = rasterizeNormalRun(this.font, c, d, t, f, l);
        b ? compositeNormalRetainedCoverage(p, _, t.color) : compositeNormalCoverage(p, h, t.color);
      }
    else {
      let p = air32ColorType(t.color, t.color[3]),
        m = resolveAir32TextFieldCsm(s, t.thickness, t.sharpness, p, this.font.swfFont.alignmentZones?.csmTableHint ?? 0);
      if (b)
        (t.etching &&
          renderAdvancedRetainedPass(
            this.font,
            c,
            d,
            t,
            f,
            l,
            _,
            m,
            t.etching.glyphColor,
            t.etching.offset.x,
            t.etching.offset.y,
            t.underline ? t.etching.lineColor : null,
          ),
          renderAdvancedRetainedPass(
            this.font,
            c,
            d,
            t,
            f,
            l,
            _,
            m,
            t.transformedGlyphColor ?? t.color,
            t.target?.offsetX ?? 0,
            t.target?.offsetY ?? 0,
            t.underline ? (t.transformedLineColor ?? t.color) : null,
          ));
      else {
        if (this.font.swfFont.alignmentZones != null)
          for (let v = c.placements.length - 1; v >= 0; v--) {
            let w = c.placements[v];
            if (!w.hasInk) continue;
            let I = requireNativeGlyph(this.font, w.codepoint),
              C = prepareOccurrence(I, w, d, t.padding),
              W = glyphRunCacheKey(w.codepoint, w.phaseIndex, C.setup, m);
            if (this.glyphRunCache.has(W)) continue;
            let R = rasterizeOccurrence(I, C.setup, m);
            this.glyphRunCache.set(W, {
              ...R,
              originOffsetX: R.originX - C.deviceAnchorX,
              originOffsetY: R.originY - C.deviceAnchorY,
            });
          }
        for (let v of c.placements) {
          if (!v.hasInk) continue;
          let w = requireNativeGlyph(this.font, v.codepoint),
            I = prepareOccurrence(w, v, d, t.padding),
            C = glyphRunCacheKey(v.codepoint, v.phaseIndex, I.setup, m),
            W = this.glyphRunCache.get(C);
          if (!W) {
            let S = rasterizeOccurrence(w, I.setup, m);
            ((W = {
              ...S,
              originOffsetX: S.originX - I.deviceAnchorX,
              originOffsetY: S.originY - I.deviceAnchorY,
            }),
              this.glyphRunCache.set(C, W));
          }
          let R = I.deviceAnchorX + W.originOffsetX,
            T = I.deviceAnchorY + W.originOffsetY;
          compositeNativeGlyph(W, h, f, l, R, T, t.color);
        }
      }
    }
    return (
      b && !t.target && (h = compositeAir32RetainedToOpaque(_, t.background)),
      { ...c, ...d, width: f, height: l, pixels: h, ...(b ? { retainedPixels: _ } : {}) }
    );
  }
  put(e, r, t = 0, i = 0, s = {}) {
    if (!e?.createImageData || !e?.putImageData)
      throw new TypeError("context must be a Canvas 2D rendering context");
    let o = this.render(r, s),
      d = e.createImageData(o.width, o.height);
    return (d.data.set(o.pixels), e.putImageData(d, t, i), o);
  }
}
