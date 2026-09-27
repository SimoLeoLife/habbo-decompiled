// Extracted from HabboAirLauncher.deobf.js, line 214205.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic3aafb30a3697a

class extends Button_ {
  static {
    n(this, "UnkButtonSubclass_c3aafb");
  }
  _icon = null;
  constructor(e, r, t, i = 16777215) {
    super("", new D(e, r, 50, 53), !1, t, i);
  }
  _r7a02db81c355d9(e) {
    ((this._icon = e), this.refresh());
  }
  get _r1cf71d729a17ce() {
    return this.renderFrame(4282078052);
  }
  get _r03727ccda69c03() {
    return this.renderFrame(4294967295);
  }
  get _rf36e19a817555b() {
    return this.renderFrame(4282078052);
  }
  get _rb3852998bf7e99() {
    return this.renderFrame(4286499566);
  }
  get _r438f7819e87dc6() {
    return this.renderFrame(4289253994);
  }
  renderFrame(e) {
    let r = new A(50, 53, !0, 0),
      t = new UnkClass_3a5c6f();
    return (
      r.fillRect(new D(0, 0, 50, 53), e),
      r.fillRect(new D(3, 3, 44, 47), 4279185998),
      this._icon != null &&
        r.copyPixels(
          this._icon,
          this._icon.rect,
          new E(Math.trunc((50 - this._icon.width) / 2), Math.trunc((53 - this._icon.height) / 2)),
          null,
          null,
          !0,
        ),
      (t.bitmapData = r),
      t
    );
  }
}
