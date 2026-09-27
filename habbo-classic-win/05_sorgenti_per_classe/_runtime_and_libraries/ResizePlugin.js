// Extracted from HabboAirLauncher.deobf.js, line 29805.

class {
  static {
    n(this, "ResizePlugin");
  }
  static init(e) {
    (Object.defineProperty(this, "resizeTo", {
      configurable: !0,
      set(r) {
        (globalThis.removeEventListener("resize", this.queueResize),
          (this._resizeTo = r),
          r && (globalThis.addEventListener("resize", this.queueResize), this.resize()));
      },
      get() {
        return this._resizeTo;
      },
    }),
      (this.queueResize = () => {
        this._resizeTo &&
          (this._cancelResize(), (this._resizeId = requestAnimationFrame(() => this.resize())));
      }),
      (this._cancelResize = () => {
        this._resizeId && (cancelAnimationFrame(this._resizeId), (this._resizeId = null));
      }),
      (this.resize = () => {
        if (!this._resizeTo) return;
        this._cancelResize();
        let r, t;
        if (this._resizeTo === globalThis.window) ((r = globalThis.innerWidth), (t = globalThis.innerHeight));
        else {
          let { clientWidth: i, clientHeight: s } = this._resizeTo;
          ((r = i), (t = s));
        }
        (this.renderer.resize(r, t), this.render());
      }),
      (this._resizeId = null),
      (this._resizeTo = null),
      (this.resizeTo = e.resizeTo || null));
  }
  static destroy() {
    (globalThis.removeEventListener("resize", this.queueResize),
      this._cancelResize(),
      (this._cancelResize = null),
      (this.queueResize = null),
      (this.resizeTo = null),
      (this.resize = null));
  }
}
