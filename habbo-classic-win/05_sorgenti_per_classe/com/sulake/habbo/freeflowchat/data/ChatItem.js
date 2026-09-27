// Extracted from HabboAirLauncher.deobf.js, line 200363.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/data/ChatItem.as
// Obfuscated name: _ia3aae74ed814ca

class {
  static {
    n(this, "ChatItem");
  }
  var_3436 = 0;
  _userId = 0;
  var_2440 = 0;
  _text = "";
  var_4535 = xr.CHAT_TYPE_SPEAK;
  var_2803 = null;
  _style = 0;
  _r67e3e19f44435c = null;
  _r23ef5cc06c4357 = null;
  _r7eac41e5bae9d3 = null;
  _rc70d9b2df888b6 = null;
  _rc4a1a73e01cfcb = null;
  var_645 = 0;
  _chatBubbleWidthOverride;
  constructor(e, r, t = null, i = 0, s = null, o = null, d = null, c = null) {
    ((this.var_3436 = r),
      (this._r67e3e19f44435c = t != null ? new k(t.x, t.y, t.z) : null),
      (this._userId = e.userId),
      (this.var_2440 = e.session != null ? e.session.roomId : 1),
      (this._text = e.text),
      (this.var_4535 = e.chatType),
      (this._style = e.style),
      (this.var_2803 = Array.isArray(e.links)
        ? e.links.map((f) => (Array.isArray(f) ? [...f] : f))
        : null),
      (this._r23ef5cc06c4357 = o),
      (this._r7eac41e5bae9d3 = s),
      (this._rc70d9b2df888b6 = d),
      (this._rc4a1a73e01cfcb = c),
      (this.var_645 = i),
      (this._chatBubbleWidthOverride = e._r16bf11e1236c9d));
  }
  get userId() {
    return this._userId;
  }
  get roomId() {
    return this.var_2440;
  }
  get text() {
    return this._text;
  }
  set text(e) {
    this._text = e;
  }
  get chatType() {
    return this.var_4535;
  }
  get links() {
    return this.var_2803;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    this._style = e;
  }
  get timeStamp() {
    return this.var_3436;
  }
  get _rfdeef2469c3edb() {
    return this._r67e3e19f44435c;
  }
  get _r7184740318e84f() {
    return this._r23ef5cc06c4357;
  }
  get _rc4683ef9b98824() {
    return this._r7eac41e5bae9d3;
  }
  get _r5306ecfa474f9d() {
    return this._rc70d9b2df888b6;
  }
  get _rb6ad58d3f7bd05() {
    return this._rc4a1a73e01cfcb;
  }
  get extraParam() {
    return this.var_645;
  }
  get _r16bf11e1236c9d() {
    return this._chatBubbleWidthOverride;
  }
}
