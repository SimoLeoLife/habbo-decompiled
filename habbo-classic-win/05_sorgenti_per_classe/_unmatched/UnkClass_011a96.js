// Extracted from HabboAirLauncher.deobf.js, line 74205.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i011a963010836c

class {
    static {
      n(this, "UnkClass_011a96");
    }
    static {
      X2r(this, "UnkClass_011a96");
    }
    images;
    texts;
    constructor(e) {
      ((this.images = []), (this.texts = []));
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.images.push(e.readString());
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this.texts.push(e.readString());
    }
  }
