// Extracted from HabboAirLauncher.deobf.js, line 97524.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_144/class_3263.as
// Obfuscated name: _ide0ba6a93446c2

class {
    static {
      n(this, "class_3263");
    }
    static {
      wVr(this, "class_3263");
    }
    _id = -1;
    _startMessage = "";
    _endMessage = "";
    var_3070 = 0;
    _questionArray = null;
    var_341 = !1;
    get id() {
      return this._id;
    }
    get _ra570877b369758() {
      return this._startMessage;
    }
    get _rcc2456a2f18866() {
      return this._endMessage;
    }
    get _r7a88d9adae2ebc() {
      return this.var_3070;
    }
    get _r062fd979878425() {
      return this._questionArray;
    }
    get _rd4e9d9358ab72e() {
      return this.var_341;
    }
    flush() {
      return (
        (this._id = -1),
        (this._startMessage = ""),
        (this._endMessage = ""),
        (this.var_3070 = 0),
        (this._questionArray = null),
        !0
      );
    }
    parse(e) {
      ((this._id = e.readInteger()),
        (this._startMessage = e.readString()),
        (this._endMessage = e.readString()),
        (this.var_3070 = e.readInteger()),
        (this._questionArray = []));
      for (let r = 0; r < this.var_3070; r++) {
        let t = this.parseQuestion(e),
          i = e.readInteger();
        for (let s = 0; s < i; s++) t.children.push(this.parseQuestion(e));
        this._questionArray.push(t);
      }
      return ((this.var_341 = e.readBoolean()), !0);
    }
    parseQuestion(e) {
      let r = new class_4141();
      if (
        ((r._re812cd9299d86c = e.readInteger()),
        (r._highestAvailableQuestIndex = e.readInteger()),
        (r.questionType = e.readInteger()),
        (r.questionText = e.readString()),
        (r.questionCategory = e.readInteger()),
        (r.questionAnswerType = e.readInteger()),
        (r.questionAnswerCount = e.readInteger()),
        r.questionType === 1 || r.questionType === 2)
      )
        for (let t = 0; t < r.questionAnswerCount; t++)
          r.class_3951.push(new class_3951(e.readString(), e.readString(), e.readInteger()));
      return r;
    }
  }
