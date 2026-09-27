// Estratto da HabboAirLauncher.deobf.js, riga 66268.

class extends Motion {
  static {
    n(this, "_ib89a7271eb572f");
  }
  constructor(e) {
    super(e);
  }
  tick(e) {
    (super.tick(e), this.target && !this.target.disposed && (this.target.dispose(), (this.target = null)));
  }
}
