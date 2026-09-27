// Estratto da HabboAirLauncher.deobf.js, riga 31267.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/TextSkinRenderer.as

class {
    static {
      n(this, "CanvasTextGeneratorClass");
    }
    getCanvasAndContext(e) {
      let { text: r, style: t, resolution: i = 1 } = e,
        s = t._getFinalPadding(),
        o = Mb.measureText(r || " ", t),
        d = Math.ceil(Math.ceil(Math.max(1, o.width) + s * 2) * i),
        c = Math.ceil(Math.ceil(Math.max(1, o.height) + s * 2) * i),
        f = bv.getOptimalCanvasAndContext(d, c);
      this._renderTextToCanvas(t, s, i, f, o);
      let l = t.trim
        ? getCanvasBoundingBox({ canvas: f.canvas, width: d, height: c, resolution: 1, output: kKe })
        : kKe.set(0, 0, d, c);
      return { canvasAndContext: f, frame: l };
    }
    returnCanvasAndContext(e) {
      bv.returnCanvasAndContext(e);
    }
    _renderTextToCanvas(e, r, t, i, s) {
      if (s.runsByLine && s.runsByLine.length > 0) {
        this._renderTaggedTextToCanvas(s, e, r, t, i);
        return;
      }
      let { canvas: o, context: d } = i,
        c = fontStringFromTextStyle(e),
        f = s.lines,
        l = s.lineHeight,
        b = s.lineWidths,
        _ = s.maxLineWidth,
        h = s.fontProperties,
        p = o.height;
      if ((d.resetTransform(), d.scale(t, t), (d.textBaseline = e.textBaseline), e._stroke?.width)) {
        let T = e._stroke;
        ((d.lineWidth = T.width), (d.miterLimit = T.miterLimit), (d.lineJoin = T.join), (d.lineCap = T.cap));
      }
      d.font = c;
      let m,
        v,
        w = e.dropShadow ? 2 : 1,
        I = e.wordWrap ? e.wordWrapWidth : _,
        W = (e._stroke?.width ?? 0) / 2,
        R = (l - h.fontSize) / 2;
      l - h.fontSize < 0 && (R = 0);
      for (let T = 0; T < w; ++T) {
        let S = e.dropShadow && T === 0,
          z = S ? Math.ceil(Math.max(1, p) + r * 2) : 0,
          K = z * t;
        if (S) this._setupDropShadow(d, e, t, K);
        else {
          let $ = e._gradientBounds,
            Y = e._gradientOffset;
          if ($) {
            let oe = { width: $.width, height: $.height, lineHeight: $.height, lines: s.lines };
            this._setFillAndStrokeStyles(d, e, oe, r, W, Y?.x ?? 0, Y?.y ?? 0);
          } else
            Y
              ? this._setFillAndStrokeStyles(d, e, s, r, W, Y.x, Y.y)
              : this._setFillAndStrokeStyles(d, e, s, r, W);
          d.shadowColor = "rgba(0,0,0,0)";
        }
        for (let $ = 0; $ < f.length; $++) {
          ((m = W), (v = W + $ * l + h.ascent + R), (m += this._getAlignmentOffset(b[$], I, e.align)));
          let Y = 0;
          if (e.align === "justify" && e.wordWrap && $ < f.length - 1) {
            let oe = countSpaces(f[$]);
            oe > 0 && (Y = (I - b[$]) / oe);
          }
          (e._stroke?.width && this._drawLetterSpacing(f[$], e, i, m + r, v + r - z, !0, Y),
            e._fill !== void 0 && this._drawLetterSpacing(f[$], e, i, m + r, v + r - z, !1, Y));
        }
      }
    }
    _renderTaggedTextToCanvas(e, r, t, i, s) {
      let { canvas: o, context: d } = s,
        {
          runsByLine: c,
          lineWidths: f,
          maxLineWidth: l,
          lineAscents: b,
          lineHeights: _,
          hasDropShadow: h,
        } = e,
        p = o.height;
      (d.resetTransform(), d.scale(i, i), (d.textBaseline = r.textBaseline));
      let m = h ? 2 : 1,
        v = r.wordWrap ? r.wordWrapWidth : l,
        w = r._stroke?.width ?? 0;
      for (let W of c)
        for (let R of W) {
          let T = R.style._stroke?.width ?? 0;
          T > w && (w = T);
        }
      let I = w / 2,
        C = [];
      for (let W = 0; W < c.length; W++) {
        let R = c[W],
          T = [];
        for (let S of R) {
          let z = fontStringFromTextStyle(S.style);
          ((d.font = z), T.push({ width: Mb._measureText(S.text, S.style.letterSpacing, d), font: z }));
        }
        C.push(T);
      }
      for (let W = 0; W < m; ++W) {
        let R = h && W === 0,
          T = R ? Math.ceil(Math.max(1, p) + t * 2) : 0,
          S = T * i;
        R || (d.shadowColor = "rgba(0,0,0,0)");
        let z = I;
        for (let K = 0; K < c.length; K++) {
          let $ = c[K],
            Y = f[K],
            oe = b[K],
            be = _[K],
            ye = C[K],
            ir = I;
          ir += this._getAlignmentOffset(Y, v, r.align);
          let pe = 0;
          if (r.align === "justify" && r.wordWrap && K < c.length - 1) {
            let q = 0;
            for (let de of $) q += countSpaces(de.text);
            q > 0 && (pe = (v - Y) / q);
          }
          let lr = z + oe,
            wr = ir + t;
          for (let q = 0; q < $.length; q++) {
            let de = $[q],
              { width: Be, font: Ie } = ye[q];
            if (((d.font = Ie), (d.textBaseline = de.style.textBaseline), de.style._stroke?.width)) {
              let rt = de.style._stroke;
              if (
                ((d.lineWidth = rt.width),
                (d.miterLimit = rt.miterLimit),
                (d.lineJoin = rt.join),
                (d.lineCap = rt.cap),
                R)
              )
                if (de.style.dropShadow) this._setupDropShadow(d, de.style, i, S);
                else {
                  let Kr = countSpaces(de.text);
                  wr += Be + Kr * pe;
                  continue;
                }
              else {
                let Kr = Mb.measureFont(Ie),
                  Ba = de.style.lineHeight || Kr.fontSize,
                  Bn = { width: Be, height: Ba, lineHeight: Ba, lines: [de.text] };
                d.strokeStyle = getCanvasFillStyle_(rt, d, Bn, t * 2, wr - t, z);
              }
              this._drawLetterSpacing(de.text, de.style, s, wr, lr + t - T, !0, pe);
            }
            let ge = countSpaces(de.text);
            wr += Be + ge * pe;
          }
          wr = ir + t;
          for (let q = 0; q < $.length; q++) {
            let de = $[q],
              { width: Be, font: Ie } = ye[q];
            if (((d.font = Ie), (d.textBaseline = de.style.textBaseline), de.style._fill !== void 0)) {
              if (R)
                if (de.style.dropShadow) this._setupDropShadow(d, de.style, i, S);
                else {
                  let rt = countSpaces(de.text);
                  wr += Be + rt * pe;
                  continue;
                }
              else {
                let rt = Mb.measureFont(Ie),
                  Kr = de.style.lineHeight || rt.fontSize,
                  Ba = { width: Be, height: Kr, lineHeight: Kr, lines: [de.text] };
                d.fillStyle = getCanvasFillStyle_(de.style._fill, d, Ba, t * 2, wr - t, z);
              }
              this._drawLetterSpacing(de.text, de.style, s, wr, lr + t - T, !1, pe);
            }
            let ge = countSpaces(de.text);
            wr += Be + ge * pe;
          }
          z += be;
        }
      }
    }
    _setFillAndStrokeStyles(e, r, t, i, s, o = 0, d = 0) {
      if (((e.fillStyle = r._fill ? getCanvasFillStyle_(r._fill, e, t, i * 2, o, d) : null), r._stroke?.width)) {
        let c = s + i * 2;
        e.strokeStyle = getCanvasFillStyle_(r._stroke, e, t, c, o, d);
      }
    }
    _setupDropShadow(e, r, t, i) {
      ((e.fillStyle = "black"), (e.strokeStyle = "black"));
      let s = r.dropShadow,
        o = s.color,
        d = s.alpha;
      e.shadowColor = na.shared.setValue(o).setAlpha(d).toRgbaString();
      let c = s.blur * t,
        f = s.distance * t;
      ((e.shadowBlur = c),
        (e.shadowOffsetX = Math.cos(s.angle) * f),
        (e.shadowOffsetY = Math.sin(s.angle) * f + i));
    }
    _getAlignmentOffset(e, r, t) {
      return t === "right" ? r - e : t === "center" ? (r - e) / 2 : 0;
    }
    _drawLetterSpacing(e, r, t, i, s, o = !1, d = 0) {
      let { context: c } = t,
        f = r.letterSpacing,
        l = !1;
      if (
        (Mb.experimentalLetterSpacingSupported &&
          (Mb.experimentalLetterSpacing
            ? ((c.letterSpacing = `${f}px`), (c.textLetterSpacing = `${f}px`), (l = !0))
            : ((c.letterSpacing = "0px"), (c.textLetterSpacing = "0px"))),
        (f === 0 || l) && d === 0)
      ) {
        o ? c.strokeText(e, i, s) : c.fillText(e, i, s);
        return;
      }
      if (d !== 0 && (f === 0 || l)) {
        let m = e.split(" "),
          v = i,
          w = c.measureText(" ").width;
        for (let I = 0; I < m.length; I++)
          (o ? c.strokeText(m[I], v, s) : c.fillText(m[I], v, s), (v += c.measureText(m[I]).width + w + d));
        return;
      }
      let b = i,
        _ = Mb.graphemeSegmenter(e),
        h = c.measureText(e).width,
        p = 0;
      for (let m = 0; m < _.length; ++m) {
        let v = _[m];
        o ? c.strokeText(v, b, s) : c.fillText(v, b, s);
        let w = "";
        for (let I = m + 1; I < _.length; ++I) w += _[I];
        ((p = c.measureText(w).width), (b += h - p + f), v === " " && (b += d), (h = p));
      }
    }
  }
