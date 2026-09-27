// Estratto da HabboAirLauncher.deobf.js, riga 1372.

class a {
      static {
        n(this, "ObservablePoint");
      }
      constructor(e, r, t) {
        ((this._x = r || 0), (this._y = t || 0), (this._observer = e));
      }
      clone(e) {
        return new a(e ?? this._observer, this._x, this._y);
      }
      set(e = 0, r = e) {
        return (
          (this._x !== e || this._y !== r) && ((this._x = e), (this._y = r), this._observer._onUpdate(this)),
          this
        );
      }
      copyFrom(e) {
        return (
          (this._x !== e.x || this._y !== e.y) &&
            ((this._x = e.x), (this._y = e.y), this._observer._onUpdate(this)),
          this
        );
      }
      copyTo(e) {
        return (e.set(this._x, this._y), e);
      }
      equals(e) {
        return e.x === this._x && e.y === this._y;
      }
      toString() {
        return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`;
      }
      get x() {
        return this._x;
      }
      set x(e) {
        this._x !== e && ((this._x = e), this._observer._onUpdate(this));
      }
      get y() {
        return this._y;
      }
      set y(e) {
        this._y !== e && ((this._y = e), this._observer._onUpdate(this));
      }
    }
