// Estratto da HabboAirLauncher.deobf.js, riga 64770.

class {
  static {
    n(this, "_id41606a4305ad8");
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
