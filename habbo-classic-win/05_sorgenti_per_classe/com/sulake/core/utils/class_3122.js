// Estratto da HabboAirLauncher.deobf.js, riga 60863.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/class_3122.as
// Nome offuscato: _i929fd1915c5872

class {
  static {
    n(this, "class_3122");
  }
  static const_131 = "hex";
  static INT = "int";
  static const_77 = "uint";
  static NUMBER = "Number";
  static FLOAT = "float";
  static BOOLEAN = "Boolean";
  static BOOL = "bool";
  static STRING = "String";
  static const_141 = "Point";
  static RECTANGLE = "Rectangle";
  static ARRAY = "Array";
  static MAP = "Map";
  static KEY = "key";
  static TYPE = "type";
  static VALUE = "value";
  static TRUE = "true";
  static X = "x";
  static Y = "y";
  static WIDTH = "width";
  static HEIGHT = "height";
  static COMMA = ",";
  static _r49e6f06a45fc47(e, r, t = null) {
    let i = this._rd43028149d6b0e(e);
    for (let s of i) this._r1855e59159683a(s, r, t);
    return i.length;
  }
  static _rc27c891b7a5a32(e, r) {
    switch (r) {
      case this.const_77:
      case this.INT:
      case this.NUMBER:
      case this.FLOAT:
      case this.const_131:
        return Number(e);
      case this.BOOLEAN:
      case this.BOOL:
        return e === this.TRUE || Number(e) > 0;
      case this.ARRAY:
        return e.split(this.COMMA);
      default:
        return String(e);
    }
  }
  static _r8f0a4984bf40c1(e, r) {
    let t = this._r2de4077bf0631e(e);
    switch (r) {
      case this.STRING:
        return t?.textContent ?? "";
      case this.const_141: {
        let i = new E();
        return (
          (i.x = Number(t?.getAttribute(this.X) ?? 0)),
          (i.y = Number(t?.getAttribute(this.Y) ?? 0)),
          i
        );
      }
      case this.RECTANGLE: {
        let i = new D();
        return (
          (i.x = Number(t?.getAttribute(this.X) ?? 0)),
          (i.y = Number(t?.getAttribute(this.Y) ?? 0)),
          (i.width = Number(t?.getAttribute(this.WIDTH) ?? 0)),
          (i.height = Number(t?.getAttribute(this.HEIGHT) ?? 0)),
          i
        );
      }
      case this.ARRAY: {
        let i = new B();
        this._r49e6f06a45fc47(t != null ? Array.from(t.children) : [], i);
        let s = [];
        for (let o of i.getKeys()) s.push(i.getValue(o));
        return s;
      }
      case this.MAP: {
        let i = new B();
        return (this._r49e6f06a45fc47(t != null ? Array.from(t.children) : [], i), i);
      }
      default:
        throw new Error(`Unable to parse data type "${r}", unknown type!`);
    }
  }
  static _r1855e59159683a(e, r, t = null) {
    let i = e.getAttribute(this.KEY) ?? "",
      s = e.getAttribute(this.TYPE) ?? this.STRING,
      o = e.getAttribute(this.VALUE);
    if ((i || (i = this._r387f1a55d86739(e, this.KEY)), o != null))
      r.setProperty(i, this._rc27c891b7a5a32(o, s));
    else {
      let d = this._rebc1374a0b854b(e, this.VALUE);
      if (d != null) {
        let c = d.children.item(0);
        c != null && ((s = c.tagName), r.setProperty(i, this._r8f0a4984bf40c1(c, s)));
      } else
        (s === this.MAP || s === this.ARRAY) &&
          r.setProperty(i, this._r8f0a4984bf40c1(e, s));
    }
    t?.push(s);
  }
  static _rd43028149d6b0e(e) {
    if (this._r3a4a966ae38361(e)) return e.toDomElements();
    if (Array.isArray(e)) return e.map((r) => this._r2de4077bf0631e(r)).filter((r) => r != null);
    if (this._rada18c709d837c(e)) return Array.from(e.toDomElement()?.children ?? []);
    if (this._r80cc3860141c30(e)) return Array.from(e.children);
    if (typeof e == "string") {
      let t = new DOMParser().parseFromString(e, "text/xml");
      return Array.from(t.documentElement?.children ?? []);
    }
    return e != null && typeof e == "object" && "length" in e
      ? Array.from(e)
          .map((r) => this._r2de4077bf0631e(r))
          .filter((r) => r != null)
      : [];
  }
  static _r2de4077bf0631e(e) {
    return this._rada18c709d837c(e)
      ? (e.toDomElement() ?? null)
      : this._r80cc3860141c30(e)
        ? e
        : typeof e == "string"
          ? (new DOMParser().parseFromString(e, "text/xml").documentElement ?? null)
          : null;
  }
  static _rebc1374a0b854b(e, r) {
    return Array.from(e.children).find((t) => t.tagName === r);
  }
  static _r387f1a55d86739(e, r) {
    return this._rebc1374a0b854b(e, r)?.textContent ?? "";
  }
  static _r80cc3860141c30(e) {
    return e instanceof Element;
  }
  static _rada18c709d837c(e) {
    return e != null && typeof e == "object" && "toDomElement" in e;
  }
  static _r3a4a966ae38361(e) {
    return e != null && typeof e == "object" && "toDomElements" in e;
  }
}
