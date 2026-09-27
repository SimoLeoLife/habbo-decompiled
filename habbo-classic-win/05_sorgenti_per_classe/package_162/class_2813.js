// Extracted from HabboAirLauncher.deobf.js, line 99731.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_162/class_2813.as
// Obfuscated name: _i0f31cb3a1e15ab

class {
    static {
      n(this, "class_2813");
    }
    static {
      wjr(this, "class_2813");
    }
    _userId = 0;
    _text = "";
    var_2803 = null;
    var_3186 = 0;
    var_3420 = -1;
    var_3616 = 0;
    var_3654 = -1;
    _chatBubbleWidthOverride = at.const_1293;
    get userId() {
      return this._userId;
    }
    get text() {
      return this._text;
    }
    get links() {
      return this.var_2803;
    }
    get gesture() {
      return this.var_3186;
    }
    get _re835377b790ff1() {
      return this.var_3420;
    }
    get styleId() {
      return this.var_3616;
    }
    get _r1bacab45db7211() {
      return this.var_3654;
    }
    get _r16bf11e1236c9d() {
      return this._chatBubbleWidthOverride;
    }
    flush() {
      return (
        (this._userId = 0),
        (this._text = ""),
        (this.var_3186 = 0),
        (this.var_2803 = null),
        (this.var_3420 = -1),
        (this.var_3616 = 0),
        (this.var_3654 = -1),
        (this._chatBubbleWidthOverride = at.const_1293),
        !0
      );
    }
    parse(e) {
      if (!e) return !1;
      ((this._userId = e.readInteger()),
        (this._text = e.readString()),
        (this.var_3186 = e.readInteger()),
        (this.var_3616 = e.readInteger()));
      let r = e.readInteger();
      if (r > 0) {
        this.var_2803 = [];
        for (let t = 0; t < r; t++)
          this.var_2803.push([e.readString(), e.readString(), e.readBoolean()]);
      }
      return (
        (this.var_3420 = e.readInteger()),
        e.bytesAvailable && (this.var_3654 = e.readInteger()),
        e.bytesAvailable && (this._chatBubbleWidthOverride = e.readInteger()),
        !0
      );
    }
  }
