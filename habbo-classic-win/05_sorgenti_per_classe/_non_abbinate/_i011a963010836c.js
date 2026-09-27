// Estratto da HabboAirLauncher.deobf.js, riga 74205.

class {
    static {
      n(this, "_i011a963010836c");
    }
    static {
      X2r(this, "_i011a963010836c");
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
