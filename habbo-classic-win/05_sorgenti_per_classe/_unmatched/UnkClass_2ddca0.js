// Extracted from HabboAirLauncher.deobf.js, line 93414.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2ddca06535ac88

class {
    static {
      n(this, "UnkClass_2ddca0");
    }
    static {
      MDr(this, "UnkClass_2ddca0");
    }
    userId;
    userName;
    rooms = [];
    constructor(e) {
      ((this.userId = e.readInteger()), (this.userName = e.readString()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.rooms.push(new UnkClass_93a0b7(e));
    }
  }
