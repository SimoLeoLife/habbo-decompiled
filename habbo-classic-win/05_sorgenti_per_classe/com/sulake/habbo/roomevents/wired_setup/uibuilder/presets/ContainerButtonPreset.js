// Extracted from HabboAirLauncher.deobf.js, line 345794.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/ContainerButtonPreset.as
// Obfuscated name: _i312c70e3770868

class extends PaddedContainerPreset {
  static {
    n(this, "ContainerButtonPreset");
  }
  _onClick = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, ...r) {
    let t = r[0] ?? null,
      i = r[1] ?? !0;
    (super._re7a03a855dfd32(
      e,
      this.var_40._r4f913423e4e30d,
      this.var_40._rd0f2f1fb2e65b0,
      this.var_40._r4f913423e4e30d,
      this.var_40._rd0f2f1fb2e65b0,
      this.var_40.createContainerButton(),
      i,
    ),
      (this._onClick = t),
      this.button.addEventListener(u.CLICK, this._r6665063fd39a04));
  }
  _r6665063fd39a04 = n((...e) => {
    this._onClick?.();
  }, "_r6665063fd39a04");
  get button() {
    return this._window;
  }
}
