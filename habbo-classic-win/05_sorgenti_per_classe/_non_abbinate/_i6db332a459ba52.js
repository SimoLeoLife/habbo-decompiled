// Estratto da HabboAirLauncher.deobf.js, riga 71398.

class extends Sprite {
  constructor(r, t, i, s, o, d, c = !1) {
    super();
    this._context = r;
    this._r71bc97a2b925d2 = t;
    this._r44b0fbe0bad03c = i;
    this._caption = o;
    this._r188237b0766c46 = d;
    this._r9ac03dd8d5cd18 = c;
    ((this._red6121fb564e73 = s ?? ""), this.init());
  }
  static {
    n(this, "_i6db332a459ba52");
  }
  _style = Tr.STYLE_HITCH;
  _disposed = !1;
  _frame = null;
  _r56a1006445022c = null;
  stage = null;
  _r2959a89f914774 = null;
  _re3f1d32c59e8b3 = null;
  _background = null;
  _r5cea27f16641fd = !1;
  _maxWidth = 0;
  _red6121fb564e73;
  dispose() {
    this._disposed ||
      (this._frame != null && this.contains(this._frame) && this.removeChild(this._frame),
      (this.stage = null),
      (this._r56a1006445022c = null),
      (this._r2959a89f914774 = null),
      (this._re3f1d32c59e8b3 = null),
      (this._background = null),
      (this._frame = null),
      (this._context = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  init() {
    ((this._frame = Tr.createFrame(
      this._caption,
      this._r188237b0766c46,
      new D(0, 0, this._r71bc97a2b925d2, 1),
      this._style,
    )),
      this.addChild(this._frame));
    let r = new Sprite();
    ((this._background = O2._rb9acc8b72de55a.render(this._r71bc97a2b925d2, 31)),
      r.addChild(this._background),
      this._frame.addChild(r),
      (this._maxWidth = r.width - 30),
      (this._r56a1006445022c = Tr.createTextField(this._r44b0fbe0bad03c, 18, 6710886, !0, !1, !1, !1)),
      (this._r56a1006445022c.alpha = 0.8),
      (this._r56a1006445022c.x = r.x + 16),
      (this._r56a1006445022c.y = r.y + Math.trunc((r.height - this._r56a1006445022c.height) / 2)),
      (this._r56a1006445022c.width = this._maxWidth),
      (this._r56a1006445022c.visible = this._red6121fb564e73.length === 0),
      this._frame.addChild(this._r56a1006445022c),
      (this.stage = Tr.createTextField(this._red6121fb564e73, 18, 6710886, !0, !1, !0, !1)),
      (this.stage._rfd454f4d33a88a = this._r9ac03dd8d5cd18),
      this._frame.addChild(this.stage),
      (this.stage.x = r.x + 16),
      (this.stage.y = r.y + Math.trunc((r.height - this.stage.height) / 2)),
      (this.stage.width = this._maxWidth),
      this.stage.addEventListener(_ifd7c1208e3417e.CLICK, this._r94075c5259bf77),
      this.stage.addEventListener(M._ra3d93f66ba77c2, this._r6b4fb5c56c0663),
      this._red6121fb564e73.length === 0 &&
        ((this.stage.autoSize = nr.NONE), (this.stage.width = this._maxWidth)),
      r.addEventListener(_ifd7c1208e3417e.CLICK, this._rd99b1f0cdd31d6),
      (this._frame.y = -Math.trunc(-50 / 2)));
  }
  _r6b4fb5c56c0663 = n((r) => {
    this._r56a1006445022c == null ||
      this.stage == null ||
      ((this._r56a1006445022c.visible = this.stage.text.length === 0),
      this.stage.width > this._maxWidth &&
        ((this.stage.autoSize = nr.NONE), (this.stage.width = this._maxWidth)),
      r != null && this.dispatchEvent(r.clone()));
  }, "_r6b4fb5c56c0663");
  _rd99b1f0cdd31d6 = n((r) => {
    (this._context != null &&
      this.stage != null &&
      (this._context.stage.focus = this.stage),
      this._r94075c5259bf77(null));
  }, "_rd99b1f0cdd31d6");
  _r94075c5259bf77 = n((r) => {
    this._r5cea27f16641fd ||
      this._r56a1006445022c == null ||
      this.stage == null ||
      ((this._r56a1006445022c.visible = !1),
      (this._r5cea27f16641fd = !0),
      (this.stage.textColor = this._style === Tr.STYLE_HITCH ? 6710886 : 0),
      this.stage.removeEventListener(_ifd7c1208e3417e.CLICK, this._r94075c5259bf77),
      this._r6b4fb5c56c0663(null));
  }, "_r94075c5259bf77");
  get text() {
    return this.stage?.text ?? "";
  }
}
