// Estratto da HabboAirLauncher.deobf.js, riga 140643.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ShapeController.as
// Nome offuscato: _ifdd86d108df6e8

class a extends ContainerController {
  static {
    n(this, "ShapeController");
  }
  static _r1aa4cb04ca833b = "rectangle";
  static SHAPE_ROUND_RECTANGLE = "round_rectangle";
  static SHAPE_ELLIPSE = "ellipse";
  static SHAPE_RHOMBUS = "rhombus";
  static _r2a67cdebce0ef6 = [
    this._r1aa4cb04ca833b,
    this.SHAPE_ROUND_RECTANGLE,
    this.SHAPE_ELLIPSE,
    this.SHAPE_RHOMBUS,
  ];
  var_1967 = a._r1aa4cb04ca833b;
  _radius = 0;
  _strokeColor = 4278190080;
  _re49a62942ceb82 = 0;
  _r753b76832fd3f5 = 0;
  get shape() {
    return this.var_1967;
  }
  set shape(e) {
    let r = a._r3d02be709b267f(e);
    this.var_1967 !== r && ((this.var_1967 = r), this.invalidate());
  }
  get radius() {
    return this._radius;
  }
  set radius(e) {
    let r = a._r664b9c1016eb59(e);
    this._radius !== r && ((this._radius = r), this.invalidate());
  }
  get _defaultNotSelectedBorderColor() {
    return this._strokeColor;
  }
  set _defaultNotSelectedBorderColor(e) {
    ((e >>>= 0), this._strokeColor !== e && ((this._strokeColor = e), this.invalidate()));
  }
  get strokeHsvShade() {
    return this._re49a62942ceb82;
  }
  set strokeHsvShade(e) {
    let r = Number.isNaN(e) ? 0 : e;
    this._re49a62942ceb82 !== r && ((this._re49a62942ceb82 = r), this.invalidate());
  }
  get strokeThickness() {
    return this._r753b76832fd3f5;
  }
  set strokeThickness(e) {
    let r = a._r664b9c1016eb59(e);
    this._r753b76832fd3f5 !== r && ((this._r753b76832fd3f5 = r), this.invalidate());
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((this.var_1967 = a._r1aa4cb04ca833b),
      (this._radius = 0),
      (this._strokeColor = 4278190080),
      (this._re49a62942ceb82 = 0),
      (this._r753b76832fd3f5 = 0),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._r5e1a9574d869f6 = !0));
  }
  static _r3d02be709b267f(e) {
    return this._r2a67cdebce0ef6.includes(e) ? e : this._r1aa4cb04ca833b;
  }
  static _r664b9c1016eb59(e) {
    return Number.isNaN(e) ? 0 : Math.max(0, e);
  }
  get properties() {
    let e = [...super.properties];
    return (
      e.push(this.createProperty(class_3436.SHAPE, this.var_1967)),
      e.push(this.createProperty(class_3436.RADIUS, this._radius)),
      e.push(this.createProperty(class_3436.STROKE_COLOR, this._strokeColor)),
      e.push(this.createProperty(class_3436.STROKE_HSV_SHADE, this._re49a62942ceb82)),
      e.push(this.createProperty(class_3436.STROKE_THICKNESS, this._r753b76832fd3f5)),
      e
    );
  }
  set properties(e) {
    let r = !1;
    for (let t of e)
      switch (t.key) {
        case class_3436.SHAPE: {
          let i = a._r3d02be709b267f(String(t.value));
          this.var_1967 !== i && ((this.var_1967 = i), (r = !0));
          break;
        }
        case class_3436.RADIUS: {
          let i = a._r664b9c1016eb59(Number(t.value));
          this._radius !== i && ((this._radius = i), (r = !0));
          break;
        }
        case class_3436.STROKE_COLOR: {
          let i = Number(t.value) >>> 0;
          this._strokeColor !== i && ((this._strokeColor = i), (r = !0));
          break;
        }
        case class_3436.STROKE_HSV_SHADE: {
          let i = Number(t.value),
            s = Number.isNaN(i) ? 0 : i;
          this._re49a62942ceb82 !== s && ((this._re49a62942ceb82 = s), (r = !0));
          break;
        }
        case class_3436.STROKE_THICKNESS: {
          let i = a._r664b9c1016eb59(Number(t.value));
          this._r753b76832fd3f5 !== i && ((this._r753b76832fd3f5 = i), (r = !0));
          break;
        }
      }
    (r && this.invalidate(), (super.properties = e));
  }
}
