// Extracted from HabboAirLauncher.deobf.js, line 24287.

class {
      static {
        n(this, "CanvasTextureSystem");
      }
      constructor(e) {}
      init() {}
      initSource(e) {}
      generateCanvas(e) {
        let r = yt.get().createCanvas(),
          t = r.getContext("2d"),
          i = La.getCanvasSource(e);
        if (!i) return r;
        let s = e.frame,
          o = e.source._resolution ?? e.source.resolution ?? 1,
          d = s.x * o,
          c = s.y * o,
          f = s.width * o,
          l = s.height * o;
        return (
          (r.width = Math.ceil(f)),
          (r.height = Math.ceil(l)),
          t.drawImage(i, d, c, f, l, 0, 0, f, l),
          r
        );
      }
      getPixels(e) {
        let r = this.generateCanvas(e);
        return {
          pixels: r.getContext("2d", { willReadFrequently: !0 }).getImageData(0, 0, r.width, r.height).data,
          width: r.width,
          height: r.height,
        };
      }
      destroy() {}
    }
