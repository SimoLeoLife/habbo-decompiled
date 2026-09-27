// Estratto da HabboAirLauncher.deobf.js, riga 85940.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_3154.as
// Nome offuscato: _i0b74b8fc3f10df

class a {
    static {
      n(this, "class_3154");
    }
    static {
      eEr(this, "class_3154");
    }
    var_2523 = 0;
    _rbc8b0c0a80bb98 = 0;
    _r94120e64827e4f = "";
    _ra13d2b8228fd74 = 0;
    _header = "";
    _rcaa67ca4589812 = 0;
    _r6f4e09e9f70ba2 = 0;
    var_2132 = 0;
    var_2374 = 0;
    var_2306 = "";
    var_2048 = 0;
    _state = 0;
    _rdfd7b82d4a20c1 = 0;
    _rf5c8e20f8b2839 = "";
    _rc9c7913494a525 = 0;
    _r56868e597ba085 = !1;
    _r7b729637c419cb = !1;
    static readFromMessage(e) {
      let r = new a();
      return (
        (r.threadId = e.readInteger()),
        (r.threadAuthorId = e.readInteger()),
        (r.threadAuthorName = e.readString()),
        (r.header = e.readString()),
        (r._rcbe5e510ab363e = e.readBoolean()),
        (r._r7732642648cab6 = e.readBoolean()),
        (r.creationTimeAsSecondsAgo = e.readInteger()),
        (r.nMessages = e.readInteger()),
        (r.nUnreadMessages = e.readInteger()),
        (r.lastMessageId = e.readInteger()),
        (r.lastMessageAuthorId = e.readInteger()),
        (r.lastMessageAuthorName = e.readString()),
        (r.lastMessageTimeAsSecondsAgo = e.readInteger()),
        (r.state = e.readByte()),
        (r.adminId = e.readInteger()),
        (r.adminName = e.readString()),
        (r.adminOperationTimeAsSecondsAgo = e.readInteger()),
        r
      );
    }
    get adminOperationTimeAsSecondsAgo() {
      return this._rc9c7913494a525;
    }
    set adminOperationTimeAsSecondsAgo(e) {
      this._rc9c7913494a525 = e;
    }
    get lastMessageTimeAsSecondsAgo() {
      return this.var_2048;
    }
    set lastMessageTimeAsSecondsAgo(e) {
      this.var_2048 = e;
    }
    get threadId() {
      return this.var_2523;
    }
    set threadId(e) {
      this.var_2523 = e;
    }
    get threadAuthorId() {
      return this._rbc8b0c0a80bb98;
    }
    set threadAuthorId(e) {
      this._rbc8b0c0a80bb98 = e;
    }
    get threadAuthorName() {
      return this._r94120e64827e4f;
    }
    set threadAuthorName(e) {
      this._r94120e64827e4f = e;
    }
    get creationTimeAsSecondsAgo() {
      return this._ra13d2b8228fd74;
    }
    set creationTimeAsSecondsAgo(e) {
      this._ra13d2b8228fd74 = e;
    }
    get header() {
      return this._header;
    }
    set header(e) {
      this._header = e;
    }
    get lastMessageId() {
      return this.var_2132;
    }
    set lastMessageId(e) {
      this.var_2132 = e;
    }
    get lastMessageAuthorId() {
      return this.var_2374;
    }
    set lastMessageAuthorId(e) {
      this.var_2374 = e;
    }
    get lastMessageAuthorName() {
      return this.var_2306;
    }
    set lastMessageAuthorName(e) {
      this.var_2306 = e;
    }
    get nMessages() {
      return this._rcaa67ca4589812;
    }
    set nMessages(e) {
      this._rcaa67ca4589812 = e;
    }
    get nUnreadMessages() {
      return this._r6f4e09e9f70ba2;
    }
    set nUnreadMessages(e) {
      this._r6f4e09e9f70ba2 = e;
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
    get _rcbe5e510ab363e() {
      return this._r56868e597ba085;
    }
    set _rcbe5e510ab363e(e) {
      this._r56868e597ba085 = e;
    }
    get _r7732642648cab6() {
      return this._r7b729637c419cb;
    }
    set _r7732642648cab6(e) {
      this._r7b729637c419cb = e;
    }
  }
