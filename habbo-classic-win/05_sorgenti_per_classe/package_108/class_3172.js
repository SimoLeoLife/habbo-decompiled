// Extracted from HabboAirLauncher.deobf.js, line 85714.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_3172.as
// Obfuscated name: _id561c3894f2564

class a {
    static {
      n(this, "class_3172");
    }
    static {
      QCr(this, "class_3172");
    }
    _groupId = 0;
    _name = "";
    _description = "";
    _icon = "";
    var_1687 = 0;
    var_5779 = 0;
    _totalMessages = 0;
    var_712 = 0;
    var_2132 = 0;
    var_2374 = 0;
    var_2306 = "";
    var_2048 = 0;
    static readFromMessage(e) {
      return a.fillFromMessage(new a(), e);
    }
    static fillFromMessage(e, r) {
      return (
        (e._groupId = r.readInteger()),
        (e._name = r.readString()),
        (e._description = r.readString()),
        (e._icon = r.readString()),
        (e.var_1687 = r.readInteger()),
        (e.var_5779 = r.readInteger()),
        (e._totalMessages = r.readInteger()),
        (e.var_712 = r.readInteger()),
        (e.var_2132 = r.readInteger()),
        (e.var_2374 = r.readInteger()),
        (e.var_2306 = r.readString()),
        (e.var_2048 = r.readInteger()),
        e
      );
    }
    get groupId() {
      return this._groupId;
    }
    get name() {
      return this._name;
    }
    get description() {
      return this._description;
    }
    get icon() {
      return this._icon;
    }
    get _r36ae06f9111e67() {
      return this.var_1687;
    }
    get leaderboardScore() {
      return this.var_5779;
    }
    get totalMessages() {
      return this._totalMessages;
    }
    get unreadMessages() {
      return this.var_712;
    }
    get lastMessageId() {
      return this.var_2132;
    }
    get lastMessageAuthorId() {
      return this.var_2374;
    }
    get lastMessageAuthorName() {
      return this.var_2306;
    }
    get lastMessageTimeAsSecondsAgo() {
      return this.var_2048;
    }
    updateFrom(e) {
      ((this.var_1687 = e.var_1687),
        (this._totalMessages = e._totalMessages),
        (this.var_712 = e.var_712),
        (this.var_2374 = e.var_2374),
        (this.var_2306 = e.var_2306),
        (this.var_2132 = e.var_2132),
        (this.var_2048 = e.var_2048));
    }
    get lastReadMessageId() {
      return this._totalMessages - this.var_712;
    }
    set lastReadMessageId(e) {
      ((this.var_712 = this._totalMessages - e),
        this.var_712 < 0 && (this.var_712 = 0));
    }
    _rb055e13ada0832(e) {
      ((this.var_2374 = e.lastMessageAuthorId),
        (this.var_2306 = e.lastMessageAuthorName),
        (this.var_2132 = e.lastMessageId),
        (this.var_2048 = e.lastMessageTimeAsSecondsAgo),
        this.var_1687++,
        this._totalMessages++,
        (this.var_712 = 0));
    }
  }
