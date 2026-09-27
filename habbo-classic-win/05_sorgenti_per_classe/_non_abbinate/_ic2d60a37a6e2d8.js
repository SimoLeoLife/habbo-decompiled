// Estratto da HabboAirLauncher.deobf.js, riga 88075.

class {
    static {
      n(this, "_ic2d60a37a6e2d8");
    }
    static {
      QWr(this, "_ic2d60a37a6e2d8");
    }
    _type = 0;
    _r0c4a004ae123c4 = 0;
    _rf93abd1fb49c4e = !1;
    _r3157a744282a85 = null;
    _r1fe63a22363ccc = null;
    _description = null;
    _roomName = null;
    constructor(e) {
      switch (
        ((this._type = e.readInteger()),
        (this._r0c4a004ae123c4 = e.readInteger()),
        (this._rf93abd1fb49c4e = e.readBoolean()),
        this._type)
      ) {
        case _id64457360695fc._rb6595d1a1fe905:
        case _id64457360695fc._rba379f7c9c44bb:
          ((this._r3157a744282a85 = e.readString()), (this._r1fe63a22363ccc = e.readString()));
          return;
        case _id64457360695fc._r5ec251b1280db0:
          this._r8adee34c738777 ||
            ((this._r3157a744282a85 = e.readString()),
            (this._r1fe63a22363ccc = e.readString()),
            (this._roomName = e.readString()));
          return;
        case _id64457360695fc._r5c4ffc3b81a5d4:
          ((this._r3157a744282a85 = e.readString()),
            (this._r1fe63a22363ccc = e.readString()),
            (this._description = e.readString()));
          return;
      }
    }
    get type() {
      return this._type;
    }
    get _r83f0646adec737() {
      return this._r0c4a004ae123c4;
    }
    get _r8adee34c738777() {
      return this._rf93abd1fb49c4e;
    }
    get _rf9d7691c8d6183() {
      return this._r3157a744282a85;
    }
    get _r121475978b61a8() {
      return this._r1fe63a22363ccc;
    }
    get description() {
      return this._description;
    }
    get roomName() {
      return this._roomName;
    }
  }
