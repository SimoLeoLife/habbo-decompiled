// Estratto da HabboAirLauncher.deobf.js, riga 161271.

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(t, i, s);
    this.id = r;
  }
  static {
    n(this, "_idd32139e158d6b");
  }
  static _r18420565440e28 = "RWPUW_QUESTION_ANSWERED";
  static FINISHED = "RWPUW_QUESION_FINSIHED";
  static _rc081ce8a57e812 = "RWPUW_NEW_QUESTION";
  _r145756ee730438 = null;
  _r78eb984551f0ac = -1;
  _re812cd9299d86c = -1;
  duration = -1;
  question = null;
  userId = -1;
  value;
  answerCounts;
}
