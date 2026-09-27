// Estratto da HabboAirLauncher.deobf.js, riga 134184.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/GradientController.as
// Nome offuscato: _ic4d4c879e18e88

class a extends st {
  static {
    n(this, "GradientController");
  }
  static MODE_LINEAR = "linear";
  static MODE_RADIAL = "radial";
  static const_501 = "up_left";
  static DIRECTION_UP_RIGHT = "up_right";
  static const_607 = "down_left";
  static DIRECTION_DOWN_RIGHT = "down_right";
  static _r1ae6d4594bb7e1 = [a.MODE_LINEAR, a.MODE_RADIAL];
  static _rca58edc720ff52 = [
    class_3148.UP,
    class_3148.DOWN,
    class_3148.const_27,
    class_3148.RIGHT,
    a.const_501,
    a.DIRECTION_UP_RIGHT,
    a.const_607,
    a.DIRECTION_DOWN_RIGHT,
  ];
  static _rd5e562c2b5ab7b = 4294967295;
  static _r0fc1e7ba2aeac1 = 4278190080;
  static _r1f98a4bf05b3e6 = a.MODE_LINEAR;
  static DEFAULT_DIRECTION = class_3148.DOWN;
  _color1 = a._rd5e562c2b5ab7b;
  _color2 = a._r0fc1e7ba2aeac1;
  _mode = a._r1f98a4bf05b3e6;
  var_81 = a.DEFAULT_DIRECTION;
  get color1() {
    return this._color1;
  }
  set color1(e) {
    ((e >>>= 0), this._color1 !== e && ((this._color1 = e), this.invalidate()));
  }
  get color2() {
    return this._color2;
  }
  set color2(e) {
    ((e >>>= 0), this._color2 !== e && ((this._color2 = e), this.invalidate()));
  }
  get mode() {
    return this._mode;
  }
  set mode(e) {
    let r = a._reecd3b1e535ad5(e);
    this._mode !== r && ((this._mode = r), this.invalidate());
  }
  get direction() {
    return this.var_81;
  }
  set direction(e) {
    let r = a._r99ce61d7783423(e);
    this.var_81 !== r && ((this.var_81 = r), this.invalidate());
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((this._color1 = a._rd5e562c2b5ab7b),
      (this._color2 = a._r0fc1e7ba2aeac1),
      (this._mode = a._r1f98a4bf05b3e6),
      (this.var_81 = a.DEFAULT_DIRECTION),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  static _reecd3b1e535ad5(e) {
    return e === this.MODE_RADIAL ? this.MODE_RADIAL : this.MODE_LINEAR;
  }
  static _r99ce61d7783423(e) {
    return this._rca58edc720ff52.includes(e) ? e : this.DEFAULT_DIRECTION;
  }
  get properties() {
    let e = [...super.properties];
    return (
      e.push(this.createProperty(class_3436.GRADIENT_COLOR1, this._color1)),
      e.push(this.createProperty(class_3436.GRADIENT_COLOR2, this._color2)),
      e.push(this.createProperty(class_3436.GRADIENT_MODE, this._mode)),
      e.push(
        new ne(
          class_3436.const_826,
          this.var_81,
          ne.STRING,
          this.var_81 !== a.DEFAULT_DIRECTION,
          a._rca58edc720ff52,
        ),
      ),
      e
    );
  }
  set properties(e) {
    let r = !1;
    for (let t of e)
      switch (t.key) {
        case class_3436.GRADIENT_COLOR1: {
          let i = Number(t.value) >>> 0;
          this._color1 !== i && ((this._color1 = i), (r = !0));
          break;
        }
        case class_3436.GRADIENT_COLOR2: {
          let i = Number(t.value) >>> 0;
          this._color2 !== i && ((this._color2 = i), (r = !0));
          break;
        }
        case class_3436.GRADIENT_MODE: {
          let i = a._reecd3b1e535ad5(String(t.value));
          this._mode !== i && ((this._mode = i), (r = !0));
          break;
        }
        case class_3436.const_826: {
          let i = a._r99ce61d7783423(String(t.value));
          this.var_81 !== i && ((this.var_81 = i), (r = !0));
          break;
        }
      }
    (r && this.invalidate(), (super.properties = e));
  }
}
