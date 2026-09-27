// Extracted from HabboAirLauncher.deobf.js, line 111703.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4e4f199a0f6cb8

class {
    static {
      n(this, "UnkMessageParser_II_4e4f19");
    }
    static {
      tst(this, "UnkMessageParser_II_4e4f19");
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
