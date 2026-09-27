// Extracted from HabboAirLauncher.deobf.js, line 84423.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i035fbce905b939

class {
    static {
      n(this, "UnkMessageParser_B_035fbc");
    }
    static {
      dxr(this, "UnkMessageParser_B_035fbc");
    }
    _r4c4e7106bf91f9 = null;
    _r37c57aba47820f = !1;
    flush() {
      return !1;
    }
    parse(e) {
      return ((this._r4c4e7106bf91f9 = new GameLobbyPlayerData(e)), (this._r37c57aba47820f = e.readBoolean()), !0);
    }
    get user() {
      return this._r4c4e7106bf91f9;
    }
    get _rbb82161198afe4() {
      return this._r37c57aba47820f;
    }
  }
