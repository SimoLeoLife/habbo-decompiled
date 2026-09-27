// Estratto da HabboAirLauncher.deobf.js, riga 8617.

class RUe {
        static {
          n(this, "_State");
        }
        constructor() {
          ((this.data = 0),
            (this.blendMode = "normal"),
            (this.polygonOffset = 0),
            (this.blend = !0),
            (this.depthMask = !0));
        }
        get blend() {
          return !!(this.data & (1 << QPe));
        }
        set blend(e) {
          !!(this.data & (1 << QPe)) !== e && (this.data ^= 1 << QPe);
        }
        get offsets() {
          return !!(this.data & (1 << XPe));
        }
        set offsets(e) {
          !!(this.data & (1 << XPe)) !== e && (this.data ^= 1 << XPe);
        }
        set cullMode(e) {
          if (e === "none") {
            this.culling = !1;
            return;
          }
          ((this.culling = !0), (this.clockwiseFrontFace = e === "front"));
        }
        get cullMode() {
          return this.culling ? (this.clockwiseFrontFace ? "front" : "back") : "none";
        }
        get culling() {
          return !!(this.data & (1 << YPe));
        }
        set culling(e) {
          !!(this.data & (1 << YPe)) !== e && (this.data ^= 1 << YPe);
        }
        get depthTest() {
          return !!(this.data & (1 << KPe));
        }
        set depthTest(e) {
          !!(this.data & (1 << KPe)) !== e && (this.data ^= 1 << KPe);
        }
        get depthMask() {
          return !!(this.data & (1 << ZPe));
        }
        set depthMask(e) {
          !!(this.data & (1 << ZPe)) !== e && (this.data ^= 1 << ZPe);
        }
        get clockwiseFrontFace() {
          return !!(this.data & (1 << $Pe));
        }
        set clockwiseFrontFace(e) {
          !!(this.data & (1 << $Pe)) !== e && (this.data ^= 1 << $Pe);
        }
        get blendMode() {
          return this._blendMode;
        }
        set blendMode(e) {
          ((this.blend = e !== "none"), (this._blendMode = e), (this._blendModeId = _sr[e] || 0));
        }
        get polygonOffset() {
          return this._polygonOffset;
        }
        set polygonOffset(e) {
          ((this.offsets = !!e), (this._polygonOffset = e));
        }
        toString() {
          return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
        }
        static for2d() {
          let e = new RUe();
          return ((e.depthTest = !1), (e.blend = !0), e);
        }
      }
