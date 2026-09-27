// Estratto da HabboAirLauncher.deobf.js, riga 113604.

class {
    static {
      n(this, "_i9676c92621ccac");
    }
    static {
      uct(this, "_i9676c92621ccac");
    }
    _z = 0;
    _points = [];
    _color = 0;
    _masks = [];
    _isBottomAligned = !1;
    _texCols = [];
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e;
    }
    get cornerPoints() {
      return this._points;
    }
    addCornerPoint(e, r) {
      this._points.push(new _ie2ef954a489bb1(e, r));
    }
    get masks() {
      return this._masks;
    }
    addMask(e) {
      this._masks.push(e);
    }
    get color() {
      return this._color;
    }
    set color(e) {
      this._color = e;
    }
    get bottomAligned() {
      return this._isBottomAligned;
    }
    setBottomAligned(e) {
      this._isBottomAligned = e;
    }
    get texCols() {
      return this._texCols;
    }
    addTexCol(e) {
      this._texCols.push(e);
    }
    toJSON() {
      return {
        z: this._z,
        cornerPoints: this._points,
        color: this._color,
        masks: this._masks,
        bottomAligned: this._isBottomAligned,
        texCols: this._texCols,
      };
    }
  }
