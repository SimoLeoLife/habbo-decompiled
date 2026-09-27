// Extracted from HabboAirLauncher.deobf.js, line 64799.

class a extends Array {
  static {
    n(this, "Sequence");
  }
  typeValue;
  lengthValue;
  constructor(e = 48, r = 0) {
    (super(), (this.typeValue = e), (this.lengthValue = r));
  }
  getLength() {
    return this.lengthValue;
  }
  getType() {
    return this.typeValue;
  }
  toDER() {
    let e = new re();
    for (let r = 0; r < this.length; r++) {
      let t = this[r];
      if (t == null) {
        (e.writeByte(5), e.writeByte(0));
        continue;
      }
      let i = t.toDER();
      if (i == null) throw new Error("DER encoding not implemented for a child value.");
      e.writeBytes(i);
    }
    return Gs._rf45cf4425c9470(this.typeValue, e);
  }
  toString() {
    let e = Gs.indent,
      r = [];
    Gs.indent += "    ";
    for (let t = 0; t < this.length; t++) {
      let i = this[t];
      if (i == null) continue;
      let s = !1;
      for (let o of Object.keys(this))
        if (o !== String(t) && this[o] === i) {
          (r.push(`${o}: ${i}`), (s = !0));
          break;
        }
      s || r.push(String(i));
    }
    return (
      (Gs.indent = e),
      `${Gs.indent}Sequence[${this.typeValue}][${this.lengthValue}][
${r.join(`
`)}
${e}]`
    );
  }
  findAttributeValue(e) {
    for (let r of this) {
      if (!(r instanceof a) || r.getType() !== 49) continue;
      let t = r[0];
      if (!(t instanceof a)) continue;
      let i = t[0];
      if (i instanceof UnkClass_7e089e && i.toString() === e) return t[1] ?? null;
    }
    return null;
  }
}
