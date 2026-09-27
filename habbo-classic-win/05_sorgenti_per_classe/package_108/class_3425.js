// Estratto da HabboAirLauncher.deobf.js, riga 86208.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_3425.as
// Nome offuscato: _ic8cc70c9fce24b

class a {
    static {
      n(this, "class_3425");
    }
    static {
      fEr(this, "class_3425");
    }
    _groupId = 0;
    var_3514 = 0;
    var_5206 = 0;
    _rfc561bdc988fa8 = 0;
    var_2523 = 0;
    _creationTime = 0;
    var_1022 = "";
    _r765efc2681b819 = "";
    _rc7dbfcce975297 = "";
    _state = 0;
    _rdfd7b82d4a20c1 = 0;
    _rf5c8e20f8b2839 = "";
    _r436b39d686daf1 = 0;
    _r4387338eea6d1e = 0;
    static readFromMessage(e) {
      let r = new a();
      return (
        (r.messageId = e.readInteger()),
        (r.messageIndex = e.readInteger()),
        (r.authorId = e.readInteger()),
        (r.authorName = e.readString()),
        (r.authorFigure = e.readString()),
        (r.creationTimeAsSecondsAgo = e.readInteger()),
        (r.messageText = e.readString()),
        (r.state = e.readByte()),
        (r.adminId = e.readInteger()),
        (r.adminName = e.readString()),
        (r.adminOperationTimeAsSeccondsAgo = e.readInteger()),
        (r.authorPostCount = e.readInteger()),
        r
      );
    }
    get state() {
      return this._state;
    }
    set state(e) {
      this._state = e;
    }
    get adminId() {
      return this._rdfd7b82d4a20c1;
    }
    set adminId(e) {
      this._rdfd7b82d4a20c1 = e;
    }
    get adminName() {
      return this._rf5c8e20f8b2839;
    }
    set adminName(e) {
      this._rf5c8e20f8b2839 = e;
    }
    get adminOperationTimeAsSeccondsAgo() {
      return this._r436b39d686daf1;
    }
    set adminOperationTimeAsSeccondsAgo(e) {
      this._r436b39d686daf1 = e;
    }
    get _r658046a8e21ea9() {
      return this.var_3514;
    }
    set _r658046a8e21ea9(e) {
      this.var_3514 = e;
    }
    get creationTime() {
      return this._creationTime;
    }
    set creationTime(e) {
      this._creationTime = e;
    }
    get authorName() {
      return this._r765efc2681b819;
    }
    set authorName(e) {
      this._r765efc2681b819 = e;
    }
    get authorFigure() {
      return this._rc7dbfcce975297;
    }
    set authorFigure(e) {
      this._rc7dbfcce975297 = e;
    }
    get threadId() {
      return this.var_2523;
    }
    set threadId(e) {
      this.var_2523 = e;
    }
    get messageId() {
      return this.var_3514;
    }
    set messageId(e) {
      this.var_3514 = e;
    }
    get messageIndex() {
      return this.var_5206;
    }
    set messageIndex(e) {
      this.var_5206 = e;
    }
    set groupID(e) {
      this._groupId = e;
    }
    get groupId() {
      return this._groupId;
    }
    get authorId() {
      return this._rfc561bdc988fa8;
    }
    set authorId(e) {
      this._rfc561bdc988fa8 = e;
    }
    get creationTimeAsSecondsAgo() {
      return this._creationTime;
    }
    set creationTimeAsSecondsAgo(e) {
      this._creationTime = e;
    }
    get messageText() {
      return this.var_1022;
    }
    set messageText(e) {
      this.var_1022 = e;
    }
    get authorPostCount() {
      return this._r4387338eea6d1e;
    }
    set authorPostCount(e) {
      this._r4387338eea6d1e = e;
    }
  }
