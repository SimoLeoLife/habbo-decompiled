// Extracted from HabboAirLauncher.deobf.js, line 93504.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2ada9ec6cc9d3a

class {
    static {
      n(this, "UnkClass_2ada9e");
    }
    static {
      LDr(this, "UnkClass_2ada9e");
    }
    userId;
    userName;
    rooms = [];
    constructor(e) {
      ((this.userId = e.readInteger()), (this.userName = e.readString()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.rooms.push(new class_4250(e));
    }
  }
