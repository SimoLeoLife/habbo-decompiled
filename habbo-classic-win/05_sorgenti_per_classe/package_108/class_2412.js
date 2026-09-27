// Extracted from HabboAirLauncher.deobf.js, line 86439.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_2412.as
// Obfuscated name: _if11af09ff475d3

class {
    static {
      n(this, "class_2412");
    }
    static {
      wEr(this, "class_2412");
    }
    _groupId = -1;
    var_2523 = -1;
    var_402 = -1;
    _amount = -1;
    _messages = [];
    get groupId() {
      return this._groupId;
    }
    get threadId() {
      return this.var_2523;
    }
    get startIndex() {
      return this.var_402;
    }
    get amount() {
      return this._amount;
    }
    get messages() {
      return this._messages;
    }
    flush() {
      return (
        (this._groupId = -1),
        (this.var_2523 = -1),
        (this.var_402 = -1),
        (this._amount = -1),
        (this._messages = []),
        !0
      );
    }
    parse(e) {
      ((this._groupId = e.readInteger()),
        (this.var_2523 = e.readInteger()),
        (this.var_402 = e.readInteger()),
        (this._amount = e.readInteger()));
      for (let r = 0; r < this._amount; r++) {
        let t = I9.readFromMessage(e);
        ((t.groupID = this._groupId),
          (t.threadId = this.var_2523),
          this._messages.push(t));
      }
      return !0;
    }
  }
