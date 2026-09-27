// Estratto da HabboAirLauncher.deobf.js, riga 93504.

class {
    static {
      n(this, "_i2ada9ec6cc9d3a");
    }
    static {
      LDr(this, "_i2ada9ec6cc9d3a");
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
