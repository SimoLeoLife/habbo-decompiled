// Extracted from HabboAirLauncher.deobf.js, line 24944.

class ma {
        static {
          n(this, "_CanvasTextMetrics");
        }
        static get experimentalLetterSpacingSupported() {
          let e = ma._experimentalLetterSpacingSupported;
          if (e === void 0) {
            let r = yt.get().getCanvasRenderingContext2D().prototype;
            e = ma._experimentalLetterSpacingSupported = "letterSpacing" in r || "textLetterSpacing" in r;
          }
          return e;
        }
        constructor(e, r, t, i, s, o, d, c, f, l) {
          ((this.text = e),
            (this.style = r),
            (this.width = t),
            (this.height = i),
            (this.lines = s),
            (this.lineWidths = o),
            (this.lineHeight = d),
            (this.maxLineWidth = c),
            (this.fontProperties = f),
            l &&
              ((this.runsByLine = l.runsByLine),
              (this.lineAscents = l.lineAscents),
              (this.lineDescents = l.lineDescents),
              (this.lineHeights = l.lineHeights),
              (this.hasDropShadow = l.hasDropShadow)));
        }
        static measureText(e = " ", r, t = ma._canvas, i = r.wordWrap) {
          let s = `${e}-${r.styleKey}-wordWrap-${i}`;
          if (ma._measurementCache.has(s)) return ma._measurementCache.get(s);
          if (hasTagStyles(r) && hasTagMarkup(e)) {
            let R = measureTaggedText(
                e,
                r,
                i,
                ma._context,
                ma._measureText,
                ma.measureFont,
                ma.canBreakChars,
                ma.wordWrapSplit,
              ),
              T = new ma(
                e,
                r,
                R.width,
                R.height,
                R.lines,
                R.lineWidths,
                R.lineHeight,
                R.maxLineWidth,
                R.fontProperties,
                {
                  runsByLine: R.runsByLine,
                  lineAscents: R.lineAscents,
                  lineDescents: R.lineDescents,
                  lineHeights: R.lineHeights,
                  hasDropShadow: R.hasDropShadow,
                },
              );
            return (ma._measurementCache.set(s, T), T);
          }
          let d = r._fontString,
            c = ma.measureFont(d);
          c.fontSize === 0 && ((c.fontSize = r.fontSize), (c.ascent = r.fontSize), (c.descent = 0));
          let f = ma._context;
          f.font = d;
          let b = (i ? ma._wordWrap(e, r, t) : e).split(yKe),
            _ = new Array(b.length),
            h = 0;
          for (let R = 0; R < b.length; R++) {
            let T = ma._measureText(b[R], r.letterSpacing, f);
            ((_[R] = T), (h = Math.max(h, T)));
          }
          let p = r._stroke?.width ?? 0,
            m = r.lineHeight || c.fontSize,
            v = ma._getAlignWidth(h, r, i),
            w = ma._adjustWidthForStyle(v, r),
            I = Math.max(m, c.fontSize + p) + (b.length - 1) * (m + r.leading),
            C = ma._adjustHeightForStyle(I, r),
            W = new ma(e, r, w, C, b, _, m + r.leading, h, c);
          return (ma._measurementCache.set(s, W), W);
        }
        static _adjustWidthForStyle(e, r) {
          let t = r._stroke?.width || 0,
            i = e + t;
          return (r.dropShadow && (i += r.dropShadow.distance), i);
        }
        static _adjustHeightForStyle(e, r) {
          let t = e;
          return (r.dropShadow && (t += r.dropShadow.distance), t);
        }
        static _getAlignWidth(e, r, t) {
          return t && r.align !== "left" ? Math.max(e, r.wordWrapWidth) : e;
        }
        static _measureText(e, r, t) {
          let i = !1;
          ma.experimentalLetterSpacingSupported &&
            (ma.experimentalLetterSpacing
              ? ((t.letterSpacing = `${r}px`), (t.textLetterSpacing = `${r}px`), (i = !0))
              : ((t.letterSpacing = "0px"), (t.textLetterSpacing = "0px")));
          let s = t.measureText(e),
            o = s.width,
            d = -(s.actualBoundingBoxLeft ?? 0),
            f = (s.actualBoundingBoxRight ?? 0) - d;
          if (o > 0)
            if (i) ((o -= r), (f -= r));
            else {
              let l = (ma.graphemeSegmenter(e).length - 1) * r;
              ((o += l), (f += l));
            }
          return Math.max(o, f);
        }
        static _wordWrap(e, r, t = ma._canvas) {
          return wordWrap_(e, r, t, ma._measureText, ma.canBreakWords, ma.canBreakChars, ma.wordWrapSplit);
        }
        static isBreakingSpace(e, r) {
          return isBreakingSpace_(e, r);
        }
        static canBreakWords(e, r) {
          return r;
        }
        static canBreakChars(e, r, t, i, s) {
          return !0;
        }
        static wordWrapSplit(e) {
          return ma.graphemeSegmenter(e);
        }
        static measureFont(e) {
          if (ma._fonts[e]) return ma._fonts[e];
          let r = ma._context;
          r.font = e;
          let t = r.measureText(ma.METRICS_STRING + ma.BASELINE_SYMBOL),
            i = t.actualBoundingBoxAscent ?? 0,
            s = t.actualBoundingBoxDescent ?? 0,
            o = { ascent: i, descent: s, fontSize: i + s };
          return ((ma._fonts[e] = o), o);
        }
        static clearMetrics(e = "") {
          e ? delete ma._fonts[e] : (ma._fonts = {});
        }
        static get _canvas() {
          if (!ma.__canvas) {
            let e;
            try {
              let r = new OffscreenCanvas(0, 0);
              if (r.getContext("2d", WKe)?.measureText) return ((ma.__canvas = r), r);
              e = yt.get().createCanvas();
            } catch {
              e = yt.get().createCanvas();
            }
            ((e.width = e.height = 10), (ma.__canvas = e));
          }
          return ma.__canvas;
        }
        static get _context() {
          return (ma.__context || (ma.__context = ma._canvas.getContext("2d", WKe)), ma.__context);
        }
      }
