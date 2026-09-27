// Extracted from HabboAirLauncher.deobf.js, line 15995.

class {
      static {
        n(this, "CanvasPoolClass");
      }
      constructor(e) {
        ((this._canvasPool = Object.create(null)),
          (this.canvasOptions = e || {}),
          (this.enableFullScreen = !1));
      }
      _createCanvasAndContext(e, r) {
        let t = yt.get().createCanvas();
        ((t.width = e), (t.height = r));
        let i = t.getContext("2d");
        return { canvas: t, context: i };
      }
      getOptimalCanvasAndContext(e, r, t = 1) {
        ((e = Math.ceil(e * t - 1e-6)), (r = Math.ceil(r * t - 1e-6)), (e = nextPow2(e)), (r = nextPow2(r)));
        let i = (e << 17) + (r << 1);
        this._canvasPool[i] || (this._canvasPool[i] = []);
        let s = this._canvasPool[i].pop();
        return (s || (s = this._createCanvasAndContext(e, r)), s);
      }
      returnCanvasAndContext(e) {
        let r = e.canvas,
          { width: t, height: i } = r,
          s = (t << 17) + (i << 1);
        (e.context.resetTransform(), e.context.clearRect(0, 0, t, i), this._canvasPool[s].push(e));
      }
      clear() {
        this._canvasPool = {};
      }
    }
