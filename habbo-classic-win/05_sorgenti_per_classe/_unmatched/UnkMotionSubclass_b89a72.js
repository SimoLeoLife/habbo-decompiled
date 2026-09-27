// Extracted from HabboAirLauncher.deobf.js, line 66268.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib89a7271eb572f

class extends Motion {
  static {
    n(this, "UnkMotionSubclass_b89a72");
  }
  constructor(e) {
    super(e);
  }
  tick(e) {
    (super.tick(e), this.target && !this.target.disposed && (this.target.dispose(), (this.target = null)));
  }
}
