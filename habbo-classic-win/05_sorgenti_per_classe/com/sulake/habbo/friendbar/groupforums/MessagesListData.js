// Extracted from HabboAirLauncher.deobf.js, line 205921.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/MessagesListData.as
// Obfuscated name: _i1d5ba45ef85773

class {
  static {
    n(this, "MessagesListData");
  }
  var_2523 = 0;
  var_402 = 0;
  _totalMessages = 0;
  _messages = [];
  _r9ef0f93d617079 = new B();
  constructor(e, r, t, i) {
    ((this.var_2523 = e),
      (this.var_402 = t),
      (this._totalMessages = r),
      (this._messages = i));
    for (let s of i) this._r9ef0f93d617079.add(s.messageId, s);
  }
  get threadId() {
    return this.var_2523;
  }
  get startIndex() {
    return this.var_402;
  }
  get totalMessages() {
    return this._totalMessages;
  }
  get messages() {
    return this._messages;
  }
  get _raabad92eda9b39() {
    return this._r9ef0f93d617079;
  }
  get size() {
    return this._messages.length;
  }
}
