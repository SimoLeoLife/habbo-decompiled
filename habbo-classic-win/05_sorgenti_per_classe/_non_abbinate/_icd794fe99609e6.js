// Estratto da HabboAirLauncher.deobf.js, riga 134705.

class extends WindowMouseOperator {
  static {
    n(this, "_icd794fe99609e6");
  }
  _r26472e59a5f6fc;
  _r45d118723f7445;
  get _re5287150058685() {
    return this._r26472e59a5f6fc;
  }
  get _rddbed4d6ddc699() {
    return this._r45d118723f7445;
  }
  set _rddbed4d6ddc699(e) {
    this._r45d118723f7445 = e;
  }
  constructor(e) {
    (super(e), (this._r26472e59a5f6fc = []), (this._r45d118723f7445 = class_2125.EVENT_INSIDE_STAGE));
  }
  end(e) {
    return ((this._r26472e59a5f6fc.length = 0), super.end(e));
  }
  handler = n((...e) => {
    let r = e[0];
    if (
      !(
        !this._working ||
        this._window === null ||
        this._window.disposed ||
        r == null
      ) &&
      !(this._r26472e59a5f6fc.indexOf(r.type) < 0)
    ) {
      if (r instanceof u) {
        let t = this._window.hitTestGlobalPoint(new E(r.stageX, r.stageY));
        if (
          (this._r45d118723f7445 === class_2125.const_1351 && !t) ||
          (this._r45d118723f7445 === class_2125.const_1160 && t)
        )
          return;
      }
      this._window.update(null, r);
    }
  }, "handler");
  operate(e, r) {}
}
