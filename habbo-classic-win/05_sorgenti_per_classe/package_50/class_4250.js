// Extracted from HabboAirLauncher.deobf.js, line 92416.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_50/class_4250.as
// Obfuscated name: _iaa10b0bbfa5c07

class {
    static {
      n(this, "class_4250");
    }
    static {
      uSr(this, "class_4250");
    }
    static const_263 = 4;
    static const_374 = 3;
    static const_886 = 2;
    static const_835 = 6;
    static const_708 = 1;
    static TYPE_SELFIE = 5;
    static const_290 = 0;
    _r2ff5e6a3f83ef0;
    _context = new Map();
    _r76c04e4c7c453d = [];
    constructor(e) {
      this._r2ff5e6a3f83ef0 = e.readByte();
      let r = e.readShort();
      for (let i = 0; i < r; i++) {
        let s = e.readString(),
          o = e.readByte();
        switch (o) {
          case 0:
            this._context.set(s, e.readBoolean());
            break;
          case 1:
            this._context.set(s, e.readInteger());
            break;
          case 2:
            this._context.set(s, e.readString());
            break;
          default:
            throw new Error(`Unknown data type ${o}`);
        }
      }
      let t = e.readShort();
      for (let i = 0; i < t; i++) this._r76c04e4c7c453d.push(new class_4238(e));
    }
    get _r0feaa9f3779ee1() {
      return this._r2ff5e6a3f83ef0;
    }
    get context() {
      return this._context;
    }
    get chatlog() {
      return this._r76c04e4c7c453d;
    }
    get roomId() {
      return this.getInt("roomId");
    }
    get roomName() {
      return String(this._context.get("roomName") ?? "");
    }
    get groupId() {
      return this.getInt("groupId");
    }
    get threadId() {
      return this.getInt("threadId");
    }
    get messageId() {
      return this.getInt("messageId");
    }
    get messageIndex() {
      return this.getInt("messageIndex");
    }
    get url() {
      return String(this._context.get("url") ?? "");
    }
    get extraDataId() {
      return String(this._context.get("extraDataId") ?? "");
    }
    getInt(e) {
      let r = this._context.get(e);
      return typeof r == "number" ? r : 0;
    }
  }
