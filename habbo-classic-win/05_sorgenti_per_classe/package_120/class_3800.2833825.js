// Extracted from HabboAirLauncher.deobf.js, line 90469.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_120/class_3800.as
// Obfuscated name: _i7e7a88d357df66

class {
    static {
      n(this, "class_3800");
    }
    static {
      STr(this, "class_3800");
    }
    typeId;
    paletteId;
    color;
    breedId;
    customPartCount;
    customParts = [];
    constructor(e) {
      ((this.typeId = e.readInteger()),
        (this.paletteId = e.readInteger()),
        (this.color = e.readString()),
        (this.breedId = e.readInteger()),
        (this.customPartCount = e.readInteger()));
      for (let r = 0; r < this.customPartCount; r++)
        (this.customParts.push(e.readInteger()),
          this.customParts.push(e.readInteger()),
          this.customParts.push(e.readInteger()));
    }
    get figureString() {
      let e = `${this.typeId} ${this.paletteId} ${this.color}`;
      e += ` ${this.customPartCount}`;
      for (let r of this.customParts) e += ` ${r}`;
      return e;
    }
  }
