// Extracted from HabboAirLauncher.deobf.js, line 104363.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iba22775374452c

class {
    static {
      n(this, "UnkMessageParser_IIBB_ba2277");
    }
    static {
      QKr(this, "UnkMessageParser_IIBB_ba2277");
    }
    var_3632 = 0;
    var_3113 = 0;
    var_748 = null;
    _rbbde006e8290c5 = !1;
    var_4578 = !1;
    get roomIndex() {
      return this.var_3632;
    }
    get petId() {
      return this.var_3113;
    }
    get figureData() {
      return this.var_748;
    }
    get hasSaddle() {
      return this._rbbde006e8290c5;
    }
    get isRiding() {
      return this.var_4578;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3632 = e.readInteger()),
        (this.var_3113 = e.readInteger()),
        (this.var_748 = new class_3800_(e)),
        (this._rbbde006e8290c5 = e.readBoolean()),
        (this.var_4578 = e.readBoolean()),
        !0
      );
    }
  }
