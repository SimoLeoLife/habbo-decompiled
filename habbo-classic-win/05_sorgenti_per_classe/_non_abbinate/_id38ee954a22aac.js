// Estratto da HabboAirLauncher.deobf.js, riga 64882.

class {
  static {
    n(this, "_id38ee954a22aac");
  }
  date = null;
  typeValue;
  lengthValue;
  constructor(e, r) {
    ((this.typeValue = e), (this.lengthValue = r));
  }
  getLength() {
    return this.lengthValue;
  }
  getType() {
    return this.typeValue;
  }
  _rb8b37c93643ca8(e) {
    let r = Number.parseInt(e.substring(0, 2), 10);
    r += r < 50 ? 2e3 : 1900;
    let t = Number.parseInt(e.substring(2, 4), 10),
      i = Number.parseInt(e.substring(4, 6), 10),
      s = Number.parseInt(e.substring(6, 8), 10),
      o = Number.parseInt(e.substring(8, 10), 10);
    this.date = new Date(r, t - 1, i, s, o);
  }
  toDER() {
    return null;
  }
  toString() {
    return `${Gs.indent}UTCTime[${this.typeValue}][${this.lengthValue}][${this.date}]`;
  }
}
