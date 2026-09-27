// Estratto da HabboAirLauncher.deobf.js, riga 66671.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/PropertyStruct.as
// Nome offuscato: _ide8f943fa9d728

class a {
  static {
    n(this, "PropertyStruct");
  }
  static ARRAY = "Array";
  static BOOLEAN = "Boolean";
  static const_131 = "hex";
  static INT = "int";
  static MAP = "Map";
  static NUMBER = "Number";
  static const_141 = "Point";
  static RECTANGLE = "Rectangle";
  static STRING = "String";
  static const_77 = "uint";
  _key;
  _value;
  _type;
  var_3258;
  _rb3caf3a2c29917;
  var_2847;
  constructor(e, r, t, i = !1, s = null) {
    ((this._key = e),
      (this._value = r),
      (this._type = t),
      (this.var_3258 = i),
      (this._rb3caf3a2c29917 =
        t === a.MAP ||
        t === a.ARRAY ||
        t === a.const_141 ||
        t === a.RECTANGLE),
      (this.var_2847 = s));
  }
  get key() {
    return this._key;
  }
  get value() {
    return this._value;
  }
  get type() {
    return this._type;
  }
  get valid() {
    return this.var_3258;
  }
  get range() {
    return this.var_2847;
  }
  withNameSpace(e) {
    return new a(`${e}:${this._key}`, this._value, this._type, this.var_3258, this.var_2847);
  }
  withoutNameSpace() {
    return new a(
      this._key.replace(/.*:/, ""),
      this._value,
      this._type,
      this.var_3258,
      this.var_2847,
    );
  }
  withValue(e) {
    let r = !0;
    switch (this._type) {
      case a.const_77:
      case a.const_131:
        r = Number(this._value) >>> 0 !== Number(e) >>> 0;
        break;
      case a.INT:
        r = (Number(this._value) | 0) !== (Number(e) | 0);
        break;
      case a.NUMBER:
        r = Number(this._value) !== Number(e);
        break;
      case a.BOOLEAN:
        r = !!this._value != !!e;
        break;
      case a.STRING:
        r = String(this._value) !== String(e);
        break;
      case a.ARRAY: {
        let t = this._value,
          i = e;
        if (t && i && t.length === i.length) {
          r = !1;
          for (let s = 0; s < i.length; s++)
            if (t[s] !== i[s]) {
              r = !0;
              break;
            }
        }
        break;
      }
    }
    return r ? new a(this._key, e, this.type, !0, this.var_2847) : this;
  }
  toString() {
    switch (this._type) {
      case a.const_131:
        return `0x${(Number(this._value) >>> 0).toString(16)}`;
      case a.BOOLEAN:
        return this._value ? "true" : "false";
      case a.const_141: {
        let e = this._value;
        return `Point(${e.x}, ${e.y})`;
      }
      case a.RECTANGLE: {
        let e = this._value;
        return `Rectangle(${e.x}, ${e.y}, ${e.width}, ${e.height})`;
      }
      default:
        return String(this.value);
    }
  }
  toXMLString() {
    let e = "";
    switch (this._type) {
      case a.MAP: {
        let r = this._value;
        e = `<var key="${this._key}">\r<value>\r<${this._type}>\r`;
        for (let t = 0; t < r.length; t++) {
          let i = r.getKey(t),
            s = r.getWithIndex(t);
          e += `<var key="${String(i)}" value="${s}" type="${_iad1dc21ca35e21(s)}" />\r`;
        }
        e += `</${this._type}>\r</value>\r</var>`;
        break;
      }
      case a.ARRAY: {
        let r = this._value;
        e = `<var key="${this._key}">\r<value>\r<${this._type}>\r`;
        for (let t = 0; t < r.length; t++)
          e += `<var key="${String(t)}" value="${r[t]}" type="${_iad1dc21ca35e21(r[t])}" />\r`;
        e += `</${this._type}>\r</value>\r</var>`;
        break;
      }
      case a.const_141: {
        let r = this._value;
        ((e = `<var key="${this._key}">\r<value>\r<${this._type}>\r`),
          (e += `<var key="x" value="${r.x}" type="${a.INT}" />\r`),
          (e += `<var key="y" value="${r.y}" type="${a.INT}" />\r`),
          (e += `</${this._type}>\r</value>\r</var>`));
        break;
      }
      case a.RECTANGLE: {
        let r = this._value;
        ((e = `<var key="${this._key}">\r<value>\r<${this._type}>\r`),
          (e += `<var key="x" value="${r.x}" type="${a.INT}" />\r`),
          (e += `<var key="y" value="${r.y}" type="${a.INT}" />\r`),
          (e += `<var key="width" value="${r.width}" type="${a.INT}" />\r`),
          (e += `<var key="height" value="${r.height}" type="${a.INT}" />\r`),
          (e += `</${this._type}>\r</value>\r</var>`));
        break;
      }
      case a.const_131:
        e = `<var key="${this._key}" value="0x${(Number(this._value) >>> 0).toString(16)}" type="${this._type}" />`;
        break;
      default:
        e = `<var key="${this._key}" value="${this._value}" type="${this._type}" />`;
        break;
    }
    return e;
  }
}
