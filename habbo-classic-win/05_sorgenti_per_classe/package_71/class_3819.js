// Extracted from HabboAirLauncher.deobf.js, line 100286.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3819.as
// Obfuscated name: _idbf2efef47ff46

class {
    static {
      n(this, "class_3819");
    }
    static {
      fzr(this, "class_3819");
    }
    _text = "";
    var_977 = [];
    _width = 0;
    _height = 0;
    _scale = 0;
    _fixedWallsHeight = -1;
    _r5b8eda975d673e = null;
    var_4371 = 0;
    var_4679 = 0;
    var_5732 = 0;
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    get fixedWallsHeight() {
      return this._fixedWallsHeight;
    }
    get scale() {
      return this._scale;
    }
    get _r91f98db6f6fd7d() {
      return this._r5b8eda975d673e;
    }
    get _rbcced16750ce31() {
      return this.var_4371;
    }
    get _r915a307e6f7417() {
      return this.var_4679;
    }
    get _rd6cfa9b8325f55() {
      return this.var_5732;
    }
    get text() {
      return this._text;
    }
    getTileHeight(e, r) {
      return e < 0 || e >= this.width || r < 0 || r >= this.height
        ? rs.const_517
        : (this.var_977[r]?.[e] ?? rs.const_517);
    }
    flush() {
      return (
        (this.var_977 = []),
        (this._width = 0),
        (this._height = 0),
        (this._text = ""),
        (this._fixedWallsHeight = -1),
        (this._r5b8eda975d673e = null),
        !0
      );
    }
    parse(e) {
      if (!e) return !1;
      let r = e.readBoolean();
      ((this._fixedWallsHeight = e.readInteger()), (this._text = e.readString()));
      let t = this._text.split("\r"),
        i = t.length;
      i > 0 && t[i - 1] === "" && i--;
      let s = 0;
      for (let d = 0; d < i; d++) s = Math.max(s, t[d]?.length ?? 0);
      this.var_977 = [];
      for (let d = 0; d < i; d++) {
        let c = [];
        for (let f = 0; f < s; f++) c.push(rs.const_517);
        this.var_977.push(c);
      }
      ((this._width = s), (this._height = i));
      for (let d = 0; d < i; d++) {
        let c = t[d] ?? "",
          f = this.var_977[d];
        if (f)
          for (let l = 0; l < c.length; l++) {
            let b = c.charAt(l);
            if (b !== "x" && b !== "X") {
              let _ = Number.parseInt(b, 36);
              f[l] = Number.isNaN(_) ? 0 : _;
            } else f[l] = rs.const_517;
          }
      }
      ((this._scale = r ? 32 : 64), (this._r5b8eda975d673e = []));
      let o = e.readInteger();
      for (let d = 0; d < o; d++) this._r5b8eda975d673e.push(new AreaHideMessageData(e));
      return (
        (this.var_4371 = e.readInteger()),
        (this.var_4679 = e.readInteger()),
        (this.var_5732 = e.readFloat()),
        !0
      );
    }
  }
