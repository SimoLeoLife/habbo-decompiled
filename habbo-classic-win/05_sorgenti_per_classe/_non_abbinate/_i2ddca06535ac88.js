// Estratto da HabboAirLauncher.deobf.js, riga 93414.

class {
    static {
      n(this, "_i2ddca06535ac88");
    }
    static {
      MDr(this, "_i2ddca06535ac88");
    }
    userId;
    userName;
    rooms = [];
    constructor(e) {
      ((this.userId = e.readInteger()), (this.userName = e.readString()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.rooms.push(new _i93a0b7a99dfe3a(e));
    }
  }
