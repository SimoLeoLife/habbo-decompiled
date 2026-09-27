// Extracted from HabboAirLauncher.deobf.js, line 64862.

class extends T2 {
  static {
    n(this, "Set");
  }
  constructor(e = 49, r = 0) {
    super(e, r);
  }
  toString() {
    let e = Gs.indent;
    Gs.indent += "    ";
    let r = this.join(`
`);
    return (
      (Gs.indent = e),
      `${Gs.indent}Set[${this.typeValue}][${this.lengthValue}][
${r}
${e}]`
    );
  }
}
