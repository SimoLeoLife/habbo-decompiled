// Estratto da HabboAirLauncher.deobf.js, riga 132009.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/class_3390.as
// Nome offuscato: _i38362f56cdb7f9

class {
  static {
    n(this, "class_3390");
  }
  static REGULAR = "regular";
  static ITALIC = "italic";
  static BOLD = "bold";
  static _r0734c4318597ed;
  static _rcb52be53748913;
  static var_356;
  static TAG_OPEN = "{";
  static TAG_CLOSE = "}";
  static CMT_OPEN = "/*";
  static CMT_CLOSE = "*/";
  static {
    this.init();
  }
  static get events() {
    return this.var_356;
  }
  static _r22c9347ecec607(e) {
    return this._r0734c4318597ed.getValue(e) ?? null;
  }
  static _r92fd5c2703443a(e) {
    return this._r0734c4318597ed.getWithIndex(e);
  }
  static _r14e5354d420daf(e, r) {
    let t = !this._r0734c4318597ed.hasKey(e);
    ((r.name = e),
      this._r0734c4318597ed.setProperty(e, r),
      t
        ? (this._rcb52be53748913.push(e), this.var_356.dispatchEvent?.(new M(M.ADDED)))
        : this.var_356.dispatchEvent?.(new M(M._ra3d93f66ba77c2)));
  }
  static _ra4faf552afe968(e, r = !1) {
    if (r) {
      let i = this._r0734c4318597ed.getValue(this.REGULAR) ?? null,
        s = this._r0734c4318597ed.getValue(this.ITALIC) ?? null,
        o = this._r0734c4318597ed.getValue(this.BOLD) ?? null;
      (this._r0734c4318597ed.reset(),
        i != null && this._r0734c4318597ed.setProperty(this.REGULAR, i),
        s != null && this._r0734c4318597ed.setProperty(this.ITALIC, s),
        o != null && this._r0734c4318597ed.setProperty(this.BOLD, o));
    }
    let t = this._r0734c4318597ed.length;
    for (let i of e)
      (this._r0734c4318597ed.setProperty(i.name, i),
        this._rcb52be53748913.indexOf(i.name) === -1 && this._rcb52be53748913.push(i.name));
    (this.var_356.dispatchEvent?.(new M(M._ra3d93f66ba77c2)),
      this._r0734c4318597ed.length !== t && this.var_356.dispatchEvent?.(new M(M.ADDED)));
  }
  static _rd5cf2974586ece(e) {
    let r = this.parseCSS(e)[0] ?? null;
    if (r != null) {
      let t = this._r0734c4318597ed.getValue(r.name) ?? null;
      if (t != null && t.equals(r)) return t;
    }
    return null;
  }
  static enumerateStyles() {
    let e = [],
      r = this._r0734c4318597ed.length;
    for (let t = 0; t < r; t++) {
      let i = this._r0734c4318597ed.getWithIndex(t);
      i != null && e.push(i);
    }
    return e;
  }
  static _re2a0e9d1fe2bfa() {
    return this._r0734c4318597ed.getKeys();
  }
  static _re1827e87774ecf() {
    return this._rcb52be53748913;
  }
  static parseCSS(e) {
    let r = new _ib0061b42edfac2();
    r.parseCSS(e);
    let t = this.parseStyleNamesFromCSS(e),
      i = [];
    for (let s of t) {
      let o = r._r22c9347ecec607(s),
        d = new Ia();
      ((d.name = s),
        (d.color = o?.color ? Number(String(o.color).replace("#", "0x")) : null),
        (d.fontFamily = o?.fontFamily ? String(o.fontFamily) : ""),
        (d.fontSize = o?.fontSize ? parseInt(String(o.fontSize), 10) : null),
        (d.fontStyle = o?.fontStyle ? String(o.fontStyle) : null),
        (d.fontWeight = o?.fontWeight ? String(o.fontWeight) : null),
        (d.kerning = o?.kerning ? o.kerning === "true" : null),
        (d.leading = o?.leading ? parseInt(String(o.leading), 10) : null),
        (d.letterSpacing = o?.letterSpacing ? parseInt(String(o.letterSpacing), 10) : null),
        (d.textDecoration = o?.textDecoration ? String(o.textDecoration) : null),
        (d.textIndent = o?.textIndent ? parseInt(String(o.textIndent), 10) : null),
        (d.antiAliasType = o?.antiAliasType ? String(o.antiAliasType) : null),
        (d.sharpness = o?.sharpness ? parseInt(String(o.sharpness), 10) : null),
        (d.thickness = o?.thickness ? parseInt(String(o.thickness), 10) : null),
        (d.etchingColor = o?.etchingColor ? Number(String(o.etchingColor).replace("#", "0x")) : null),
        (d.etchingPosition = o?.etchingPosition ? String(o.etchingPosition) : null),
        i.push(d));
    }
    return i;
  }
  static toString() {
    let e = "";
    for (let r of this.enumerateStyles())
      e += `${r.toString()}

`;
    return e;
  }
  static init() {
    ((this._r0734c4318597ed = new B()), (this._rcb52be53748913 = []), (this.var_356 = new Ft()));
    let e = new Ia();
    ((e.name = this.REGULAR),
      (e.color = 0),
      (e.fontSize = "9"),
      (e.fontFamily = "Courier"),
      (e.fontStyle = "normal"),
      (e.fontWeight = "normal"),
      this._r0734c4318597ed.setProperty(e.name, e),
      this._rcb52be53748913.push(e.name),
      (e = new Ia()),
      (e.name = this.ITALIC),
      (e.color = 0),
      (e.fontSize = "9"),
      (e.fontFamily = "Courier"),
      (e.fontStyle = "italic"),
      (e.fontWeight = "normal"),
      this._r0734c4318597ed.setProperty(e.name, e),
      this._rcb52be53748913.push(e.name),
      (e = new Ia()),
      (e.name = this.BOLD),
      (e.color = 0),
      (e.fontSize = "9"),
      (e.fontFamily = "Courier"),
      (e.fontStyle = "normal"),
      (e.fontWeight = "bold"),
      this._r0734c4318597ed.setProperty(e.name, e),
      this._rcb52be53748913.push(e.name));
  }
  static parseStyleNamesFromCSS(e) {
    let r = [],
      t = e;
    ((t = t.split("	").join("")),
      (t = t
        .split(
          `
`,
        )
        .join("")),
      (t = t.split("\r").join("")));
    let i = t.split(this.TAG_CLOSE);
    if (this._ree59f8ca6b92dc(e, this.TAG_OPEN) !== this._ree59f8ca6b92dc(e, this.TAG_CLOSE))
      throw new Error(
        `Mismatching amount of "${this.TAG_OPEN}" versus "${this.TAG_CLOSE}", please check the CSS!`,
      );
    for (let s of i) {
      for (; s.indexOf(this.CMT_OPEN) === 0;)
        s = s.substring(s.indexOf(this.CMT_CLOSE) + 2, s.length);
      ((s = s.slice(0, s.indexOf(this.TAG_OPEN)).split(" ").join("")), s.length > 0 && r.push(s));
    }
    return r;
  }
  static _ree59f8ca6b92dc(e, r) {
    let t = 0,
      i = 0;
    for (; (i = e.indexOf(r, i)) !== -1;) (i++, t++);
    return t;
  }
}
