// Extracted from HabboAirLauncher.deobf.js, line 33105.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4210dc3239901d

class {
  constructor(e = 1, r = 1, t = 1, i = 1, s = 0, o = 0, d = 0, c = 0) {
    this.redMultiplier = e;
    this.greenMultiplier = r;
    this.blueMultiplier = t;
    this.alphaMultiplier = i;
    this.redOffset = s;
    this.greenOffset = o;
    this.blueOffset = d;
    this.alphaOffset = c;
  }
  static {
    n(this, "UnkClass_4210dc");
  }
  get color() {
    return ((this.redOffset & 255) << 16) | ((this.greenOffset & 255) << 8) | (this.blueOffset & 255);
  }
  set color(e) {
    ((this.redMultiplier = 0),
      (this.greenMultiplier = 0),
      (this.blueMultiplier = 0),
      (this.redOffset = (e >>> 16) & 255),
      (this.greenOffset = (e >>> 8) & 255),
      (this.blueOffset = e & 255));
  }
  concat(e) {
    ((this.redMultiplier *= e.redMultiplier),
      (this.greenMultiplier *= e.greenMultiplier),
      (this.blueMultiplier *= e.blueMultiplier),
      (this.alphaMultiplier *= e.alphaMultiplier),
      (this.redOffset += e.redOffset),
      (this.greenOffset += e.greenOffset),
      (this.blueOffset += e.blueOffset),
      (this.alphaOffset += e.alphaOffset));
  }
}
