// Estratto da HabboAirLauncher.deobf.js, riga 29893.

class oLe {
  static {
    n(this, "_Application");
  }
  constructor(...e) {
    ((this.stage = new Ii()),
      e[0] !== void 0 &&
        Zr(Va, "Application constructor options are deprecated, please use Application.init() instead."));
  }
  async init(e) {
    ((e = { ...e }),
      this.stage || (this.stage = new Ii()),
      (this.renderer = await autoDetectRenderer(e)),
      oLe._plugins.forEach((r) => {
        r.init.call(this, e);
      }));
  }
  render() {
    this.renderer.render({ container: this.stage });
  }
  get canvas() {
    return this.renderer.canvas;
  }
  get view() {
    return (
      Zr(Va, "Application.view is deprecated, please use Application.canvas instead."),
      this.renderer.canvas
    );
  }
  get screen() {
    return this.renderer.screen;
  }
  destroy(e = !1, r = !1) {
    let t = oLe._plugins.slice(0);
    (t.reverse(),
      t.forEach((i) => {
        i.destroy.call(this);
      }),
      this.stage.destroy(r),
      (this.stage = null),
      this.renderer.destroy(e),
      (this.renderer = null));
  }
}
