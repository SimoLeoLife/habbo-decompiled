// Estratto da HabboAirLauncher.deobf.js, riga 111703.

class {
    static {
      n(this, "_i4e4f199a0f6cb8");
    }
    static {
      tst(this, "_i4e4f199a0f6cb8");
    }
    baseRoomId = 0;
    groupId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.baseRoomId = e.readInteger()), (this.groupId = e.readInteger()), !0);
    }
  }
