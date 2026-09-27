// Estratto da HabboAirLauncher.deobf.js, riga 272470.

class a {
  constructor(e, r, t) {
    this.primaryColor = r;
    this.secondaryColor = t;
    for (e.position = 0; e.bytesAvailable >= 3;) {
      let i = e.readUnsignedByte(),
        s = e.readUnsignedByte(),
        o = e.readUnsignedByte();
      this._palette.push(((255 << 24) | (i << 16) | (s << 8) | o) >>> 0);
    }
    for (; this._palette.length < 256;) this._palette.push(0);
    for (; a.BLANK.length < 256;) a.BLANK.push(0);
  }
  static {
    n(this, "_i740cf002bbac06");
  }
  _palette = [];
  static BLANK = [];
  dispose() {
    this._palette = [];
  }
  colorizeBitmap(e) {
    let r = e.clone();
    (e.paletteMap(
      e,
      e.rect,
      new E(0, 0),
      a.BLANK,
      this._palette,
      a.BLANK,
      a.BLANK,
    ),
      e.copyChannel(r, e.rect, new E(0, 0), On.ALPHA, On.ALPHA),
      r.dispose());
  }
}
