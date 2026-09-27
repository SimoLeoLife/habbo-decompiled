// Extracted from HabboAirLauncher.deobf.js, line 214251.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/onBoardingHcSteps/RandomAvatarCloudsAnimation.as
// Obfuscated name: _i287d60928f1c2a

class extends Sprite {
  static {
    n(this, "RandomAvatarCloudsAnimation");
  }
  _r52ee47f54ae9f5 = [_i7aee3baccc3600("c2_1_png"), _i7aee3baccc3600("c2_2_png"), _i7aee3baccc3600("c2_3_png"), _i7aee3baccc3600("c2_4_png")];
  _r8ba18fca26aa1f = [_i7aee3baccc3600("c1_1_png"), _i7aee3baccc3600("c1_2_png"), _i7aee3baccc3600("c1_3_png"), _i7aee3baccc3600("c1_4_png")];
  _r13a6d77e882af2 = [_i7aee3baccc3600("c3_1_png"), _i7aee3baccc3600("c3_2_png"), _i7aee3baccc3600("c3_3_png"), _i7aee3baccc3600("c3_4_png")];
  _red1d3acef92716 = [_i7aee3baccc3600("c4_1_png"), _i7aee3baccc3600("c4_2_png"), _i7aee3baccc3600("c4_3_png"), _i7aee3baccc3600("c4_4_png")];
  _r92c699930a2a2b = null;
  _r2147155a237e62 = 0;
  _r3144efde2c69dd = 0;
  _r6aface8b0b123e = null;
  _r6c8502bca464a1 = null;
  _r8e4be0d7060373 = null;
  _r44d474bdeae8eb = [-9, -8, -5, -3, 3, 5, 8, 9];
  _rff5ec517309130 = 0;
  constructor() {
    (super(), this.addEventListener(M.ADDED, this.ChatHistoryScrollBar));
  }
  startAnimation() {
    (this._rbc9a3e3bcbfc8a(),
      this._r92c699930a2a2b == null &&
        ((this._r92c699930a2a2b = new UnkEventDispatcherWrapperSubclass_05394e(80)),
        this._r92c699930a2a2b.addEventListener(DeBouncer.addEventListener, this._rdcbac53b295d9a)));
    let e = Math.round(Math.random() * (this._r44d474bdeae8eb.length - 1));
    ((this._rff5ec517309130 = this._r44d474bdeae8eb[e] ?? 0), this._r92c699930a2a2b.start());
  }
  _rbc9a3e3bcbfc8a() {
    this._r8e4be0d7060373 == null ||
      this._r6aface8b0b123e == null ||
      this._r6c8502bca464a1 == null ||
      ((this._r2147155a237e62 = 0),
      (this._r3144efde2c69dd = 0),
      this._rea7c21db5b44ca(this._r8e4be0d7060373, this._r13a6d77e882af2[0]),
      this._rea7c21db5b44ca(this._r6aface8b0b123e, this._r52ee47f54ae9f5[0]),
      this._rea7c21db5b44ca(this._r6c8502bca464a1, this._r8ba18fca26aa1f[0]),
      (this._r8e4be0d7060373.x = 75),
      (this._r8e4be0d7060373.y = 140),
      (this._r6aface8b0b123e.x = 30),
      (this._r6aface8b0b123e.y = 115),
      (this._r6c8502bca464a1.x = 85),
      (this._r6c8502bca464a1.y = 110),
      (this._r8e4be0d7060373.visible = !0),
      (this._r6aface8b0b123e.visible = !0),
      (this._r6c8502bca464a1.visible = !0));
  }
  _rea7c21db5b44ca(e, r) {
    for (; e.numChildren > 0;) e.removeChildAt(0);
    e.addChild(r);
  }
  ChatHistoryScrollBar = n((e) => {
    ((this._r8e4be0d7060373 = new Sprite()),
      (this._r6aface8b0b123e = new Sprite()),
      (this._r6c8502bca464a1 = new Sprite()),
      this.addChild(this._r8e4be0d7060373),
      this.addChild(this._r6aface8b0b123e),
      this.addChild(this._r6c8502bca464a1),
      this._rbc9a3e3bcbfc8a());
  }, "ChatHistoryScrollBar");
  _rdcbac53b295d9a = n((e) => {
    if (
      this._r92c699930a2a2b == null ||
      this._r8e4be0d7060373 == null ||
      this._r6aface8b0b123e == null ||
      this._r6c8502bca464a1 == null
    )
      return;
    (this._r2147155a237e62++,
      this._r2147155a237e62 > 2 && this._r2147155a237e62 < 5
        ? (this._r3144efde2c69dd = 1)
        : this._r2147155a237e62 > 4 && this._r2147155a237e62 < 7
          ? (this._r3144efde2c69dd = 2)
          : this._r2147155a237e62 > 6 && this._r2147155a237e62 < 9
            ? (this._r3144efde2c69dd = 3)
            : this._r2147155a237e62 >= 9 &&
              ((this._r8e4be0d7060373.visible = !1),
              (this._r6aface8b0b123e.visible = !1),
              (this._r6c8502bca464a1.visible = !1)),
      this._rea7c21db5b44ca(this._r8e4be0d7060373, this._r13a6d77e882af2[this._r3144efde2c69dd]),
      this._rea7c21db5b44ca(this._r6aface8b0b123e, this._r52ee47f54ae9f5[this._r3144efde2c69dd]),
      this._rea7c21db5b44ca(this._r6c8502bca464a1, this._r8ba18fca26aa1f[this._r3144efde2c69dd]),
      Math.round(Math.random() * 10) % 2 !== 0
        ? this._rea7c21db5b44ca(this._r6c8502bca464a1, this._red1d3acef92716[this._r3144efde2c69dd])
        : this._rea7c21db5b44ca(this._r8e4be0d7060373, this._red1d3acef92716[this._r3144efde2c69dd]),
      this._r2147155a237e62 <= 9 &&
        ((this._r6c8502bca464a1.x += 10 + Math.random() * 5),
        (this._r6c8502bca464a1.y -= this._rff5ec517309130),
        (this._r6aface8b0b123e.x -= 10 + Math.random() * 5),
        (this._r6aface8b0b123e.y -= this._rff5ec517309130),
        (this._r8e4be0d7060373.y += this._rff5ec517309130 * 1.3)));
  }, "_rdcbac53b295d9a");
}
