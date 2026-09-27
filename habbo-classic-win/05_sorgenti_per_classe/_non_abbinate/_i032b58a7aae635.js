// Estratto da HabboAirLauncher.deobf.js, riga 378319.

class a extends Sprite {
  static {
    n(this, "_i032b58a7aae635");
  }
  static _r6bb8a02ae01a94 = 30;
  constructor(e = null) {
    super();
    let r = new _i3a5c6f457acdad(_i4406f2f280a16f("splash_bg_png")),
      t = new _i3a5c6f457acdad(_i4406f2f280a16f(`userphoto_${1 + Math.floor(Math.random() * a._r6bb8a02ae01a94)}_png`)),
      i = new _i3a5c6f457acdad(_i4406f2f280a16f("splash_top_png"));
    ((t.x = 96), (t.y = 51), this.addChild(r), this.addChild(t), this.addChild(i));
  }
}
