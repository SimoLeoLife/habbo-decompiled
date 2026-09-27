// Extracted from HabboAirLauncher.deobf.js, line 378319.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i032b58a7aae635

class a extends Sprite {
  static {
    n(this, "UnkSpriteSubclass_032b58");
  }
  static _r6bb8a02ae01a94 = 30;
  constructor(e = null) {
    super();
    let r = new UnkClass_3a5c6f(_i4406f2f280a16f("splash_bg_png")),
      t = new UnkClass_3a5c6f(_i4406f2f280a16f(`userphoto_${1 + Math.floor(Math.random() * a._r6bb8a02ae01a94)}_png`)),
      i = new UnkClass_3a5c6f(_i4406f2f280a16f("splash_top_png"));
    ((t.x = 96), (t.y = 51), this.addChild(r), this.addChild(t), this.addChild(i));
  }
}
