// Extracted from HabboAirLauncher.deobf.js, line 1069.

class a {
      static {
        n(this, "Point");
      }
      constructor(e = 0, r = 0) {
        ((this.x = 0), (this.y = 0), (this.x = e), (this.y = r));
      }
      clone() {
        return new a(this.x, this.y);
      }
      copyFrom(e) {
        return (this.set(e.x, e.y), this);
      }
      copyTo(e) {
        return (e.set(this.x, this.y), e);
      }
      equals(e) {
        return e.x === this.x && e.y === this.y;
      }
      set(e = 0, r = e) {
        return ((this.x = e), (this.y = r), this);
      }
      toString() {
        return `[pixi.js/math:Point x=${this.x} y=${this.y}]`;
      }
      static get shared() {
        return ((ZRe.x = 0), (ZRe.y = 0), ZRe);
      }
    }
