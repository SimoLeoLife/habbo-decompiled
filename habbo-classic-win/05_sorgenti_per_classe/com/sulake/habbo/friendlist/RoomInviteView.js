// Estratto da HabboAirLauncher.deobf.js, riga 215586.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/RoomInviteView.as
// Nome offuscato: _i85b8bb13c55f88

class extends jm {
  static {
    n(this, "RoomInviteView");
  }
  _selected;
  _inputMessage = null;
  constructor(e) {
    (super(e, "room_invite_confirm"), (this._selected = e.categories._r9a803fab68a4db()));
  }
  dispose() {
    ((this._selected = []), (this._inputMessage = null), super.dispose());
  }
  setupContent(e) {
    (this.host?._r43eae9731f5b27("friendlist.invite.summary", "count", `${this._selected.length}`),
      (this._inputMessage = e.findChildByName("message_input")),
      this._inputMessage != null &&
        this._inputMessage.addEventListener(sr.const_1081, this._re8ab4e87b30416));
    let r = e.findChildByName("cancel"),
      t = e.findChildByName("ok");
    (r != null && (r.procedure = this.onClose.bind(this)),
      t != null && (t.procedure = this.onInvite.bind(this)));
  }
  onInvite(e, r) {
    e.type === u.CLICK && (this.sendMsg(), this.dispose());
  }
  _re8ab4e87b30416 = n((...e) => {
    this.onMessageInput(e[0]);
  }, "_re8ab4e87b30416");
  onMessageInput(e) {
    if (e.keyCode === 13) {
      this.sendMsg();
      return;
    }
    let r = this._inputMessage?.text ?? "";
    r.length > 120 && this._inputMessage != null && (this._inputMessage.text = r.substring(0, 120));
  }
  sendMsg() {
    let e = this._inputMessage?.text ?? "";
    if (e === "") {
      this.host?._r3651220a1507f2(
        "${friendlist.invite.emptyalert.title}",
        "${friendlist.invite.emptyalert.text}",
      );
      return;
    }
    let r = new class_3524(e);
    for (let t of this._selected) r.addInvitedFriend(t.id);
    (this.host?._r53c67dcfbf0024(), this.host?.send(r), this.dispose());
  }
  get host() {
    return this.friendList;
  }
}
