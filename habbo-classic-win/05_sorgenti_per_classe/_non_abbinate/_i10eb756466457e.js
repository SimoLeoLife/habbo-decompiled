// Estratto da HabboAirLauncher.deobf.js, riga 111627.

class {
    static {
      n(this, "_i10eb756466457e");
    }
    static {
      Ynt(this, "_i10eb756466457e");
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
