// Extracted from HabboAirLauncher.deobf.js, line 362590.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/AddonTypes.as
// Obfuscated name: _ia10fa2e70e5a60

class {
  static {
    n(this, "AddonTypes");
  }
  _types = [];
  constructor() {
    (this._types.push(new gBe()),
      this._types.push(new class_4185()),
      this._types.push(new class_3935()),
      this._types.push(new class_4013()),
      this._types.push(new NoMoveAnimation()),
      this._types.push(new class_3932()),
      this._types.push(new CarryUsers()),
      this._types.push(new AnimationTime()),
      this._types.push(new class_4298()),
      this._types.push(new class_3981()),
      this._types.push(new class_4101()),
      this._types.push(new class_4197()),
      this._types.push(new class_3902()),
      this._types.push(new OBe()),
      this._types.push(new SBe()),
      this._types.push(new UnkDefaultAddonTypeSubclass_8be684()),
      this._types.push(new VBe()),
      this._types.push(new class_4297()),
      this._types.push(new class_4234()),
      this._types.push(new class_3903()),
      this._types.push(new class_4094()),
      this._types.push(new class_4046()),
      this._types.push(new NBe()),
      this._types.push(new HBe()),
      this._types.push(new UnkSubclassOf_class_4106_6f1dbc()),
      this._types.push(new UnkSubclassOf_class_4106_68ed21()),
      this._types.push(new class_4184()),
      this._types.push(new class_4107()),
      this._types.push(new class_4178()),
      this._types.push(new class_4143()),
      this._types.push(new GlobalPlaceholderAddon()),
      this._types.push(new class_3957()),
      this._types.push(new iY()));
  }
  _r15cee347bb0477(e) {
    for (let r of this._types) if (r.code === e) return r;
    return null;
  }
  getKey() {
    return "addon";
  }
  _r58bebf6acaa0b3(e) {
    return e instanceof UnkSubclassOf_class_2396_e39e7d;
  }
}
