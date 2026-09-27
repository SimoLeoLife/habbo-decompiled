// Estratto da HabboAirLauncher.deobf.js, riga 214034.

class extends Button_ {
  static {
    n(this, "_i87eab2e94f4a7a");
  }
  _index = 0;
  _r68adc9da09b92c = !1;
  _color = 16777215;
  _r13cc389db5dfd0 = null;
  constructor(e, r, t, i = 16777215, s = 16777215) {
    (super("", new D(e, r, 44, 46), !1, t, i), this.setColor(s));
  }
  setColor(e) {
    this._color = e;
    let r = new A(34, 34, !0, (4278190080 | e) >>> 0);
    ((this._r13cc389db5dfd0 = r), this.refresh());
  }
  set index(e) {
    this._index = e;
  }
  get index() {
    return this._index;
  }
  set club(e) {
    this._r68adc9da09b92c = e;
  }
  get club() {
    return this._r68adc9da09b92c;
  }
  get _r1cf71d729a17ce() {
    return this._r2f38a57fa70fef(4292335575);
  }
  get _r03727ccda69c03() {
    return this._r2f38a57fa70fef(4294967295);
  }
  get _rf36e19a817555b() {
    return this._r2f38a57fa70fef(4292335575);
  }
  get _rb3852998bf7e99() {
    return this._r2f38a57fa70fef(4294309365);
  }
  _r2f38a57fa70fef(e) {
    let r = new A(44, 46, !0, 0),
      t = this._r13cc389db5dfd0 ?? new A(34, 34, !0, this._color),
      i = new _i3a5c6f457acdad();
    return (r.fillRect(new D(0, 0, 44, 46), e), r.copyPixels(t, t.rect, new E(5, 6)), (i.bitmapData = r), i);
  }
}
