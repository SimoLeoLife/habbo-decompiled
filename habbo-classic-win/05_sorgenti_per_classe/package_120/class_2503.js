// Extracted from HabboAirLauncher.deobf.js, line 90502.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_120/class_2503.as
// Obfuscated name: _i1c6800f22ab9d7

class {
    static {
      n(this, "class_2503");
    }
    static {
      LTr(this, "class_2503");
    }
    id;
    name;
    figureData;
    level;
    rarityLevel;
    constructor(e) {
      ((this.id = e.readInteger()),
        (this.name = e.readString()),
        (this.figureData = new class_3800_(e)),
        (this.level = e.readInteger()),
        (this.rarityLevel = e.readInteger()));
    }
    get typeId() {
      return this.figureData.typeId;
    }
    get paletteId() {
      return this.figureData.paletteId;
    }
    get color() {
      return this.figureData.color;
    }
    get breedId() {
      return this.figureData.breedId;
    }
    get customPartCount() {
      return this.figureData.customPartCount;
    }
    get figureString() {
      return this.figureData.figureString;
    }
  }
