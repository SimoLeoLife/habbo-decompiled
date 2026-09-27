// Estratto da HabboAirLauncher.deobf.js, riga 137869.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/SkinRenderer.as
// Nome offuscato: _i905e2e58f4262d

class {
  static {
    n(this, "SkinRenderer");
  }
  static ETCHING_POSITION = new Map([
    [Ia.TOP_LEFT, { x: -1, y: -1 }],
    [Ia.TOP, { x: 0, y: -1 }],
    [Ia.TOP_RIGHT, { x: 1, y: -1 }],
    [Ia.const_27, { x: -1, y: 0 }],
    [Ia.RIGHT, { x: 1, y: 0 }],
    [Ia.BOTTOM_LEFT, { x: -1, y: 1 }],
    [Ia.BOTTOM, { x: 0, y: 1 }],
    [Ia.BOTTOM_RIGHT, { x: 1, y: 1 }],
  ]);
  _rc440b3d30c5236 = new Map();
  _r1ad475d468617a = new Map();
  _red08120be01163 = new Map();
  _r95caf05e757af4 = new Map();
  _name;
  _disposed = !1;
  constructor(e) {
    this._name = e;
  }
  get name() {
    return this._name;
  }
  get disposed() {
    return this._disposed;
  }
  parse(e, r, t) {}
  dispose() {
    if (!this._disposed) {
      for (let e of this._red08120be01163.values()) e.dispose();
      for (let e of this._rc440b3d30c5236.values()) e.dispose();
      (this._red08120be01163.clear(),
        this._r95caf05e757af4.clear(),
        this._rc440b3d30c5236.clear(),
        this._r1ad475d468617a.clear(),
        (this._disposed = !0));
    }
  }
  draw(e, r, t, i, s) {}
  isStateDrawable(e) {
    return !1;
  }
  getLayoutByState(e) {
    return this._r95caf05e757af4.get(e) ?? null;
  }
  _r01b58893e17fee(e, r) {
    let t = this._red08120be01163.get(r) ?? null;
    if (t == null) throw new Error(`Layout "${r}" not found in renderer!`);
    this._r95caf05e757af4.set(e, t);
  }
  _r2d963cbf67a374(e) {
    this._r95caf05e757af4.delete(e);
  }
  _rece9a567d0b967(e) {
    return this._r95caf05e757af4.has(e);
  }
  _r51c00313d36576(e) {
    return this._r1ad475d468617a.get(e) ?? null;
  }
  _rcad3f6816ba1d0(e, r) {
    let t = this._rc440b3d30c5236.get(r) ?? null;
    if (t == null) {
      let i = Array.from(this._rc440b3d30c5236.keys()).join(", ");
      throw new Error(`Template "${r}" not found in renderer! Available templates: [${i}]`);
    }
    this._r1ad475d468617a.set(e, t);
  }
  _r757f23212ff83d(e) {
    this._r1ad475d468617a.delete(e);
  }
  _rb6adc82c4ea651(e) {
    return this._r1ad475d468617a.has(e);
  }
  _rf796a9419141f6(e) {
    return (this._red08120be01163.set(e.name, e), e);
  }
  _ra62e7b35bf49ba(e) {
    return this._red08120be01163.get(e) ?? null;
  }
  _rb8a2eb94084ff8(e) {
    let r = this._red08120be01163.get(e.name) ?? null;
    if (r != null) {
      for (let [t, i] of this._r95caf05e757af4.entries()) i === r && this._r2d963cbf67a374(t);
      this._red08120be01163.delete(e.name);
    }
    return r;
  }
  _reab99009cac91b(e) {
    return (this._rc440b3d30c5236.set(e.name, e), e);
  }
  _r386902080bf2b4(e) {
    return this._rc440b3d30c5236.get(e) ?? null;
  }
  _r79c15e5cb42c19(e) {
    let r = this._rc440b3d30c5236.get(e.name) ?? null;
    if (r != null) {
      for (let [t, i] of this._r1ad475d468617a.entries()) i === r && this._r757f23212ff83d(t);
      this._rc440b3d30c5236.delete(e.name);
    }
    return r;
  }
}
