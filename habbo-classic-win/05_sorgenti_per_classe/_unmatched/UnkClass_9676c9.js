// Extracted from HabboAirLauncher.deobf.js, line 113604.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9676c92621ccac

class {
    static {
      n(this, "UnkClass_9676c9");
    }
    static {
      uct(this, "UnkClass_9676c9");
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
      this._points.push(new UnkClass_e2ef95(e, r));
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
