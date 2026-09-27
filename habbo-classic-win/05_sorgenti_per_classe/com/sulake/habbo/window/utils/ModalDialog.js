// Estratto da HabboAirLauncher.deobf.js, riga 145798.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/ModalDialog.as
// Nome offuscato: _i6258f4c74076de

class a {
  static {
    n(this, "ModalDialog");
  }
  static MODAL_DIALOG_LAYER = 3;
  static COLOR_TRANSFORM = new _i4210dc3239901d(0.25, 0.25, 0.25);
  static _windowManager = null;
  static _container = null;
  static _r0063c217a6ca1e = 0;
  static _r69695769fd23c6 = !1;
  _disposed = !1;
  var_569 = null;
  _background = null;
  constructor(e, r) {
    a._re4c2d5dd271fe4(e);
    let t = a.modalContext;
    if (t == null || a._container == null) throw new Error("Modal dialog context is not available.");
    if (
      ((this._background = t.create(
        "",
        "",
        class_2090.WINDOW_TYPE_BITMAP_WRAPPER,
        0,
        N._re3bd61027cfd94,
        new D(0, 0, 1, 1),
        null,
        a._container,
        0,
      )),
      (this.var_569 = e.buildFromXML(r, a.MODAL_DIALOG_LAYER)),
      this.var_569 == null)
    )
      throw new Error("Failed to build modal dialog window.");
    (a._container.addChild(this.var_569),
      this.var_569.center(),
      (a._container.visible = !0),
      a.refresh());
  }
  get rootWindow() {
    return this.var_569;
  }
  get background() {
    return this._background;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._background?.dispose(),
      (this._background = null),
      this.var_569?.dispose(),
      (this.var_569 = null),
      a.refresh(),
      a._container != null && a._container.numChildren === 0 && (a._container.visible = !1),
      (this._disposed = !0));
  }
  static _re4c2d5dd271fe4(e) {
    if (a._windowManager != null) return;
    a._windowManager = e;
    let r = e.getDesktopWindow(a.MODAL_DIALOG_LAYER);
    if (r == null) return;
    a._container = r.create("", "", class_2090.WINDOW_TYPE_CONTAINER, 0, 0, new D(0, 0, 1, 1), null, null, 0);
    let t = e.context.dispatchEvent?.stage ?? null;
    t != null &&
      !a._r69695769fd23c6 &&
      (t.addEventListener(M.RESIZE, a.onResize),
      t.addEventListener(M._re9c5159721d60d, a._ra5ccba1e347a96),
      (a._r69695769fd23c6 = !0));
  }
  static get modalContext() {
    return a._windowManager?.getDesktopWindow(a.MODAL_DIALOG_LAYER) ?? null;
  }
  static refresh() {
    let e = a._windowManager,
      r = a._container,
      t = e?.context.dispatchEvent?.stage ?? null;
    if (e == null || r == null || t == null) return;
    let i = r.numChildren === 0;
    for (let d = 0; d < a.MODAL_DIALOG_LAYER; d++) {
      let c = e.getDesktopWindow(d)?._r1165eed3833024();
      if (c != null && ((c.visible = i), i))
        for (let f = 0; f < c.numChildren; f++) c.getChildAt(f)?.invalidate();
    }
    if (i) return;
    let s = new D(0, 0, Math.max(1, t.stageWidth), Math.max(1, t._rcc0ac91bd808af));
    r.rectangle = s;
    for (let d = 0; d < r.numChildren; d++) {
      let c = r.getChildAt(d);
      c != null && (d % 2 === 0 ? ((c.rectangle = s), (c.bitmap = null)) : c.center());
    }
    let o = new A(s.width, s.height, !1, 0);
    for (let d = 0; d < a.MODAL_DIALOG_LAYER; d++) {
      let c = e.getDesktopWindow(d);
      if (c != null)
        try {
          let f = c._r1165eed3833024().getDisplayObject();
          f != null && o.draw(f);
        } catch {}
    }
    o.colorTransform(o.rect, a.COLOR_TRANSFORM);
    for (let d = 0; d < r.numChildren; d++) {
      let c = r.getChildAt(d);
      if (c != null) {
        if (d % 2 === 0) {
          let f = c;
          if (d >= 2) {
            ((f.bitmap = o.clone()), (o = f.bitmap ?? o));
            let l = r.getChildAt(d - 1);
            if (l != null) {
              let b = l.getGraphicContext(!0);
              b != null && o.draw(b, new Pe(1, 0, 0, 1, l.x, l.y), a.COLOR_TRANSFORM);
            }
          } else f.bitmap = o;
        }
        ((c.visible = d >= r.numChildren - 2), c.invalidate());
      }
    }
  }
  static onResize = n((e) => {
    a._container == null ||
      a._container.numChildren <= 0 ||
      ((a._r0063c217a6ca1e = 2), a._container.getChildAt(a._container.numChildren - 1)?.center());
  }, "onResize");
  static _ra5ccba1e347a96 = n((e) => {
    a._container == null ||
      a._container.numChildren <= 0 ||
      (a._r0063c217a6ca1e > 0 && (a._r0063c217a6ca1e--, a._r0063c217a6ca1e === 0 && a.refresh()));
  }, "_ra5ccba1e347a96");
}
