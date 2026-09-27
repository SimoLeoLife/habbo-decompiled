// Extracted from HabboAirLauncher.deobf.js, line 64770.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id41606a4305ad8

class {
  static {
    n(this, "UnkClass_d41606");
  }
  typeValue;
  lengthValue;
  stringValue = "";
  constructor(e, r) {
    ((this.typeValue = e), (this.lengthValue = r));
  }
  getLength() {
    return this.lengthValue;
  }
  getString() {
    return this.stringValue;
  }
  getType() {
    return this.typeValue;
  }
  setString(e) {
    this.stringValue = e;
  }
  toDER() {
    return null;
  }
  toString() {
    return `${Gs.indent}${this.stringValue}`;
  }
}
