// Estratto da HabboAirLauncher.deobf.js, riga 158274.

class extends ue {
  static {
    n(this, "_ie8793fd7065da0");
  }
  _r15378d13850124 = [];
  constructor(e, r = 0) {
    (super(e, r), this.registerUpdateReceiver(this, 0));
  }
  dispose() {
    this.removeUpdateReceiver(this);
    for (let e of this._r15378d13850124) e.dispose?.();
    ((this._r15378d13850124 = []), super.dispose());
  }
  createConnection(e = null) {
    let r = new _1e(this, e);
    return (this._r15378d13850124.push(r), r);
  }
  update(e) {
    for (let r = 0; r < this._r15378d13850124.length;) {
      let t = this._r15378d13850124[r];
      if ((t.processReceivedData(), this.disposed)) return;
      t.disposed ? this._r15378d13850124.splice(r, 1) : (r += 1);
    }
  }
}
