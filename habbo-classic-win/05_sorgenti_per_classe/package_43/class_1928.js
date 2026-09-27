// Extracted from HabboAirLauncher.deobf.js, line 97880.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_43/class_1928.as
// Obfuscated name: _i948ed14432710e

class {
    static {
      n(this, "class_1928");
    }
    static {
      jVr(this, "class_1928");
    }
    _ref047be92111d7 = 0;
    _r70a2e859308b8c = 0;
    _r5451642dd14a88 = 0;
    _r07c440668653aa = !1;
    var_3720 = !1;
    var_3748 = !1;
    var_810 = 0;
    var_2068 = 0;
    var_3214 = !1;
    var_3418 = !1;
    _playTestMode = !1;
    var_3466 = !1;
    var_3647 = !1;
    var_2313 = "";
    var_2187 = 0;
    _chatMode = at._rea4a9248715b7b;
    _chatBubbleWidth = at._r95dc862ed837a8;
    var_1330 = at._rdac9c2703bca2d;
    _onlineIndicatorPreference = 0;
    get _rb9df644ab4c279() {
      return this._ref047be92111d7;
    }
    get _r3ebcfbd6f36b12() {
      return this._r70a2e859308b8c;
    }
    get _r8f5b65d437e79d() {
      return this._r5451642dd14a88;
    }
    get _r9bf68a790217c3() {
      return this._r07c440668653aa;
    }
    get _r7ca08e3e642ebb() {
      return this.var_3720;
    }
    get _r3e8ffcb5b14b1e() {
      return this.var_3748;
    }
    get uiFlags() {
      return this.var_810;
    }
    get _rd00b498733a8a7() {
      return this.var_2068;
    }
    get _r62e1bd3b7b027a() {
      return this.var_3214;
    }
    get wiredInspectButton() {
      return this.var_3418;
    }
    get playTestMode() {
      return this._playTestMode;
    }
    get _r7722c9aa63290b() {
      return this.var_3466;
    }
    get _r64205135e7d200() {
      return this.var_3647;
    }
    get _r359f8956d08409() {
      return this.var_2313;
    }
    get _r71c3c442d30f9e() {
      return this.var_2187;
    }
    get _r1209c95b94b7ec() {
      return this._chatMode;
    }
    get _rfb3688c161b4cf() {
      return this._chatBubbleWidth;
    }
    get _rfae93ad34d06f6() {
      return this.var_1330;
    }
    get _r8f46066f5e1ab2() {
      return this._onlineIndicatorPreference;
    }
    flush() {
      return (
        (this._r07c440668653aa = !1),
        (this.var_3748 = !1),
        (this.var_810 = 0),
        (this.var_2068 = 0),
        (this.var_3214 = !1),
        (this.var_3418 = !1),
        (this._playTestMode = !1),
        (this.var_3466 = !1),
        (this.var_3647 = !1),
        (this.var_2313 = ""),
        (this.var_2187 = 0),
        (this._chatMode = at._rea4a9248715b7b),
        (this._chatBubbleWidth = at._r95dc862ed837a8),
        (this.var_1330 = at._rdac9c2703bca2d),
        (this._onlineIndicatorPreference = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this._r5451642dd14a88 = e.readInteger()),
        (this._r70a2e859308b8c = e.readInteger()),
        (this._ref047be92111d7 = e.readInteger()),
        (this._r07c440668653aa = e.readBoolean()),
        (this.var_3720 = e.readBoolean()),
        (this.var_3748 = e.readBoolean()),
        (this.var_810 = e.readInteger()),
        (this.var_2068 = e.readInteger()),
        (this.var_3214 = e.readBoolean()),
        (this.var_3418 = e.readBoolean()),
        (this._playTestMode = e.readBoolean()),
        e.readInteger(),
        (this.var_3466 = e.readBoolean()),
        e.bytesAvailable > 0 && (this.var_3647 = e.readBoolean()),
        e.bytesAvailable > 0 ? (this.var_2313 = e.readString()) : (this.var_2313 = ""),
        e.bytesAvailable > 0 ? (this.var_2187 = e.readInteger()) : (this.var_2187 = 0),
        e.bytesAvailable > 0
          ? ((this._chatMode = e.readInteger()),
            (this._r07c440668653aa = this._chatMode !== at._rea4a9248715b7b))
          : (this._chatMode = at._rea4a9248715b7b),
        e.bytesAvailable > 0
          ? (this._chatBubbleWidth = e.readInteger())
          : (this._chatBubbleWidth = at._r95dc862ed837a8),
        e.bytesAvailable > 0
          ? (this.var_1330 = e.readInteger())
          : (this.var_1330 = at._rdac9c2703bca2d),
        e.bytesAvailable > 0 ? (this._onlineIndicatorPreference = e.readInteger()) : (this._onlineIndicatorPreference = 0),
        !0
      );
    }
  }
