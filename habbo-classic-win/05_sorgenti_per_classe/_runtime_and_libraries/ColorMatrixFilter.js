// Extracted from HabboAirLauncher.deobf.js, line 30121.

class extends wc {
  static {
    n(this, "ColorMatrixFilter");
  }
  constructor(e = {}) {
    let r = new Zi({
        uColorMatrix: {
          value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
          type: "f32",
          size: 20,
        },
        uAlpha: { value: 1, type: "f32" },
      }),
      t = ls.from({
        vertex: { source: dLe, entryPoint: "mainVertex" },
        fragment: { source: dLe, entryPoint: "mainFragment" },
      }),
      i = fs.from({ vertex: Tre, fragment: iKe, name: "color-matrix-filter" });
    (super({ ...e, gpuProgram: t, glProgram: i, resources: { colorMatrixUniforms: r } }), (this.alpha = 1));
  }
  _loadMatrix(e, r = !1) {
    if (r) {
      let t = [...e];
      (this._multiply(t, this.matrix, e), (this.resources.colorMatrixUniforms.uniforms.uColorMatrix = t));
    } else this.resources.colorMatrixUniforms.uniforms.uColorMatrix = e;
    this.resources.colorMatrixUniforms.update();
  }
  _multiply(e, r, t) {
    return (
      (e[0] = r[0] * t[0] + r[1] * t[5] + r[2] * t[10] + r[3] * t[15]),
      (e[1] = r[0] * t[1] + r[1] * t[6] + r[2] * t[11] + r[3] * t[16]),
      (e[2] = r[0] * t[2] + r[1] * t[7] + r[2] * t[12] + r[3] * t[17]),
      (e[3] = r[0] * t[3] + r[1] * t[8] + r[2] * t[13] + r[3] * t[18]),
      (e[4] = r[0] * t[4] + r[1] * t[9] + r[2] * t[14] + r[3] * t[19] + r[4]),
      (e[5] = r[5] * t[0] + r[6] * t[5] + r[7] * t[10] + r[8] * t[15]),
      (e[6] = r[5] * t[1] + r[6] * t[6] + r[7] * t[11] + r[8] * t[16]),
      (e[7] = r[5] * t[2] + r[6] * t[7] + r[7] * t[12] + r[8] * t[17]),
      (e[8] = r[5] * t[3] + r[6] * t[8] + r[7] * t[13] + r[8] * t[18]),
      (e[9] = r[5] * t[4] + r[6] * t[9] + r[7] * t[14] + r[8] * t[19] + r[9]),
      (e[10] = r[10] * t[0] + r[11] * t[5] + r[12] * t[10] + r[13] * t[15]),
      (e[11] = r[10] * t[1] + r[11] * t[6] + r[12] * t[11] + r[13] * t[16]),
      (e[12] = r[10] * t[2] + r[11] * t[7] + r[12] * t[12] + r[13] * t[17]),
      (e[13] = r[10] * t[3] + r[11] * t[8] + r[12] * t[13] + r[13] * t[18]),
      (e[14] = r[10] * t[4] + r[11] * t[9] + r[12] * t[14] + r[13] * t[19] + r[14]),
      (e[15] = r[15] * t[0] + r[16] * t[5] + r[17] * t[10] + r[18] * t[15]),
      (e[16] = r[15] * t[1] + r[16] * t[6] + r[17] * t[11] + r[18] * t[16]),
      (e[17] = r[15] * t[2] + r[16] * t[7] + r[17] * t[12] + r[18] * t[17]),
      (e[18] = r[15] * t[3] + r[16] * t[8] + r[17] * t[13] + r[18] * t[18]),
      (e[19] = r[15] * t[4] + r[16] * t[9] + r[17] * t[14] + r[18] * t[19] + r[19]),
      e
    );
  }
  brightness(e, r) {
    let t = [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, r);
  }
  tint(e, r) {
    let [t, i, s] = na.shared.setValue(e).toArray(),
      o = [t, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(o, r);
  }
  greyscale(e, r) {
    let t = [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, r);
  }
  grayscale(e, r) {
    this.greyscale(e, r);
  }
  blackAndWhite(e) {
    let r = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  hue(e, r) {
    e = ((e || 0) / 180) * Math.PI;
    let t = Math.cos(e),
      i = Math.sin(e),
      s = Math.sqrt,
      o = 1 / 3,
      d = s(o),
      c = t + (1 - t) * o,
      f = o * (1 - t) - d * i,
      l = o * (1 - t) + d * i,
      b = o * (1 - t) + d * i,
      _ = t + o * (1 - t),
      h = o * (1 - t) - d * i,
      p = o * (1 - t) - d * i,
      m = o * (1 - t) + d * i,
      v = t + o * (1 - t),
      w = [c, f, l, 0, 0, b, _, h, 0, 0, p, m, v, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(w, r);
  }
  contrast(e, r) {
    let t = (e || 0) + 1,
      i = -0.5 * (t - 1),
      s = [t, 0, 0, 0, i, 0, t, 0, 0, i, 0, 0, t, 0, i, 0, 0, 0, 1, 0];
    this._loadMatrix(s, r);
  }
  saturate(e = 0, r) {
    let t = (e * 2) / 3 + 1,
      i = (t - 1) * -0.5,
      s = [t, i, i, 0, 0, i, t, i, 0, 0, i, i, t, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(s, r);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(e) {
    let r = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  sepia(e) {
    let r = [
      0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0,
      0, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(r, e);
  }
  technicolor(e) {
    let r = [
      1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 0.046249425232852304,
      -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -0.2758903984886823,
      -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 0.12137623870388682, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(r, e);
  }
  polaroid(e) {
    let r = [
      1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(r, e);
  }
  toBGR(e) {
    let r = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  kodachrome(e) {
    let r = [
      1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 0.24991995145868634,
      -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 0.09698983488904393,
      -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 0.13972481597886063, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(r, e);
  }
  browni(e) {
    let r = [
      0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 0.1860075629647401,
      -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -0.14497417640467167,
      0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -0.029655197167024642, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(r, e);
  }
  vintage(e) {
    let r = [
      0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 0.037848179746251466,
      0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 0.029265996770472907,
      0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 0.020232119953863904, 0, 0, 0, 1, 0,
    ];
    this._loadMatrix(r, e);
  }
  colorTone(e, r, t, i, s) {
    (e || (e = 0.2), r || (r = 0.15), t || (t = 16770432), i || (i = 3375104));
    let o = na.shared,
      [d, c, f] = o.setValue(t).toArray(),
      [l, b, _] = o.setValue(i).toArray(),
      h = [0.3, 0.59, 0.11, 0, 0, d, c, f, e, 0, l, b, _, r, 0, d - l, c - b, f - _, 0, 0];
    this._loadMatrix(h, s);
  }
  night(e, r) {
    e || (e = 0.1);
    let t = [e * -2, -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, e * 2, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, r);
  }
  predator(e, r) {
    let t = [
      11.224130630493164 * e,
      -4.794486999511719 * e,
      -2.8746118545532227 * e,
      0 * e,
      0.40342438220977783 * e,
      -3.6330697536468506 * e,
      9.193157196044922 * e,
      -2.951810836791992 * e,
      0 * e,
      -1.316135048866272 * e,
      -3.2184197902679443 * e,
      -4.2375030517578125 * e,
      7.476448059082031 * e,
      0 * e,
      0.8044459223747253 * e,
      0,
      0,
      0,
      1,
      0,
    ];
    this._loadMatrix(t, r);
  }
  lsd(e) {
    let r = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  reset() {
    let e = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, !1);
  }
  get matrix() {
    return this.resources.colorMatrixUniforms.uniforms.uColorMatrix;
  }
  set matrix(e) {
    this.resources.colorMatrixUniforms.uniforms.uColorMatrix = e;
  }
  get alpha() {
    return this.resources.colorMatrixUniforms.uniforms.uAlpha;
  }
  set alpha(e) {
    this.resources.colorMatrixUniforms.uniforms.uAlpha = e;
  }
}
