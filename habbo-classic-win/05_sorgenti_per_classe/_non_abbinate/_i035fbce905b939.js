// Estratto da HabboAirLauncher.deobf.js, riga 84423.

class {
    static {
      n(this, "_i035fbce905b939");
    }
    static {
      dxr(this, "_i035fbce905b939");
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
