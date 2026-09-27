// Extracted from HabboAirLauncher.deobf.js, line 158630.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/events/GameChatEvent.as
// Obfuscated name: _i9f2aa15e5c932b

class extends M {
  constructor(r, t, i, s, o, d, c, f, l, b, _ = !1, h = !1) {
    super(r, _, h);
    this._userId = t;
    this.var_1065 = i;
    this.var_5098 = s;
    this._color = o;
    this.var_1129 = d;
    this.var_106 = c;
    this._name = f;
    this.var_4647 = l;
    this.var_1798 = b;
  }
  static {
    n(this, "GameChatEvent");
  }
  static GAME_CHAT = "gce_game_chat";
  get userId() {
    return this._userId;
  }
  get message() {
    return this.var_1065;
  }
  get _reac49ef537f57e() {
    return this.var_5098;
  }
  get color() {
    return this._color;
  }
  get figure() {
    return this.var_1129;
  }
  get gender() {
    return this.var_106;
  }
  get name() {
    return this._name;
  }
  get teamId() {
    return this.var_4647;
  }
  get notify() {
    return this.var_1798;
  }
}
