// Estratto da HabboAirLauncher.deobf.js, riga 169225.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/animation/AvatarDataContainer.as
// Nome offuscato: _i13670d1db719ff

class {
  static {
    n(this, "AvatarDataContainer");
  }
  var_4064;
  var_4748;
  var_5335;
  var_536;
  var_2586;
  _r;
  _g;
  _b;
  var_4163 = 1;
  var_3965 = 1;
  var_4269 = 1;
  _alphaMultiplier = 1;
  _colorMap;
  var_4873 = !0;
  constructor(e) {
    this.var_4064 = _i897b98cdeac318(e, "ink");
    let r = _ifdbe20062cc5b0(e, "foreground").replace("#", ""),
      t = _ifdbe20062cc5b0(e, "background").replace("#", "");
    ((this.var_4748 = Number.parseInt(r, 16) >>> 0),
      (this.var_5335 = Number.parseInt(t, 16) >>> 0),
      (this.var_2586 = this.var_4748),
      (this._r = (this.var_2586 >> 16) & 255),
      (this._g = (this.var_2586 >> 8) & 255),
      (this._b = this.var_2586 & 255),
      (this.var_4163 = this._r / 255),
      (this.var_3965 = this._g / 255),
      (this.var_4269 = this._b / 255),
      this.var_4064 === 37 && ((this._alphaMultiplier = 0.5), (this.var_4873 = !1)),
      (this.var_536 = new _i4210dc3239901d(
        this.var_4163,
        this.var_3965,
        this.var_4269,
        this._alphaMultiplier,
      )),
      (this._colorMap = this.generatePaletteMapForGrayscale(this.var_5335, this.var_4748)));
  }
  get ink() {
    return this.var_4064;
  }
  get colorTransform() {
    return this.var_536;
  }
  get reds() {
    return this._colorMap.getValue("reds") ?? [];
  }
  get greens() {
    return this._colorMap.getValue("greens") ?? [];
  }
  get blues() {
    return this._colorMap.getValue("blues") ?? [];
  }
  get alphas() {
    return this._colorMap.getValue("alphas") ?? [];
  }
  get paletteIsGrayscale() {
    return this.var_4873;
  }
  generatePaletteMapForGrayscale(e, r) {
    let t = (e >> 24) & 255,
      i = (e >> 16) & 255,
      s = (e >> 8) & 255,
      o = e & 255,
      d = (r >> 24) & 255,
      c = (r >> 16) & 255,
      f = (r >> 8) & 255,
      l = r & 255,
      b = (d - t) / 255,
      _ = (c - i) / 255,
      h = (f - s) / 255,
      p = (l - o) / 255,
      m = new B(),
      v = [],
      w = [],
      I = [],
      C = [],
      W = t,
      R = i,
      T = s,
      S = o;
    for (let z = 0; z < 256; z++) {
      (R === i && T === s && S === o && (W = 0), (W += b), (R += _), (T += h), (S += p));
      let K = (Math.floor(W) << 24) >>> 0,
        $ = (K | (Math.floor(R) << 16) | (Math.floor(T) << 8) | Math.floor(S)) >>> 0;
      (C.push(K), v.push($), w.push($), I.push($));
    }
    return (m.add("alphas", C), m.add("reds", v), m.add("greens", w), m.add("blues", I), m);
  }
}
