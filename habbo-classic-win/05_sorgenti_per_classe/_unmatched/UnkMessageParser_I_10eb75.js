// Extracted from HabboAirLauncher.deobf.js, line 111627.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i10eb756466457e

class {
    static {
      n(this, "UnkMessageParser_I_10eb75");
    }
    static {
      Ynt(this, "UnkMessageParser_I_10eb75");
    }
    groupId = 0;
    requester = null;
    flush() {
      return ((this.requester = null), !0);
    }
    parse(e) {
      return ((this.groupId = e.readInteger()), (this.requester = new M7(e)), !0);
    }
  }
