// Estratto da HabboAirLauncher.deobf.js, riga 284773.

class {
  static {
    n(this, "_i3b0b1a104db30e");
  }
  static _r6fde9ac7c422ac = "health_points";
  static _r15f6a61625d9ea = "progress_bar";
  static _r291d821a1c8a67 = "levelling_progress";
  static _rf9b6e93d22ffa0 = "status_bar";
  static _rd1e8bd7655b6be = "boss_bar";
  static _ra1d170efe256aa = "number_display";
  static _r83e0ad2ab352d0 = 0;
  static _r8b993a26237d31 = 1;
  static _r09950f0f2ac684 = 2;
  static _r410243f6615947 = 3;
  static _r81c843ffd42bbd = 4;
  static _r45eac009b1fbcb = 5;
  static _rc27c946569881d = [0, 1, 2, 3, 4, 5];
  static _r08793f33cd1a60 = [
    -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100, 101, 102, 103, 104, 1e3, 1001,
    1002,
  ];
  static _r58f99779d9a341 = [-1, 0, 1, 2, 3, 4, 100];
  static _r47abea499b0b69 = [0, 1, 2, 3, 4, 10, 11, 12, 13, 20, 21, 100, 101, 200, 201];
  static _r3258853d89c51d() {
    return this._rc27c946569881d.concat();
  }
  static _rcad5aad2dbe1fe() {
    return this._r08793f33cd1a60.concat();
  }
  static _r423462f1426420() {
    return this._r58f99779d9a341.concat();
  }
  static _r3743c31bb2773e() {
    return this._r47abea499b0b69.concat();
  }
  static _r243bb8019f9336(e) {
    switch (e) {
      case this._r83e0ad2ab352d0:
        return this._r6fde9ac7c422ac;
      case this._r8b993a26237d31:
        return this._r15f6a61625d9ea;
      case this._r09950f0f2ac684:
        return this._r291d821a1c8a67;
      case this._r410243f6615947:
        return this._rf9b6e93d22ffa0;
      case this._r81c843ffd42bbd:
        return this._rd1e8bd7655b6be;
      case this._r45eac009b1fbcb:
        return this._ra1d170efe256aa;
      default:
        return null;
    }
  }
  static _r1506eb95c8b8df(e) {
    switch (e) {
      case this._r6fde9ac7c422ac:
        return this._r83e0ad2ab352d0;
      case this._r15f6a61625d9ea:
        return this._r8b993a26237d31;
      case this._r291d821a1c8a67:
        return this._r09950f0f2ac684;
      case this._rf9b6e93d22ffa0:
        return this._r410243f6615947;
      case this._rd1e8bd7655b6be:
        return this._r81c843ffd42bbd;
      case this._ra1d170efe256aa:
        return this._r45eac009b1fbcb;
      default:
        return -1;
    }
  }
  static _ra532a30dcc3450(e) {
    switch (e) {
      case -1:
        return class_3649.NOT_APPLICABLE;
      case 1:
        return class_3649.GREEN;
      case 2:
        return class_3649.LIME_GREEN;
      case 3:
        return class_3649.YELLOW;
      case 4:
        return class_3649.ORANGE;
      case 5:
        return class_3649.RED;
      case 6:
        return class_3649.CYAN;
      case 7:
        return class_3649.BLUE;
      case 8:
        return class_3649.PURPLE;
      case 9:
        return class_3649.PINK;
      case 10:
        return class_3649.BROWN;
      case 11:
        return class_3649.BEIGE;
      case 12:
        return class_3649.TEAL;
      case 13:
        return class_3649.INDIGO;
      case 14:
        return class_3649.MAGENTA;
      case 15:
        return class_3649.LIGHT_BLUE;
      case 16:
        return class_3649.FIRE_ORANGE;
      case 17:
        return class_3649.DARK_GREEN;
      case 18:
        return class_3649.DARK_BLUE;
      case 19:
        return class_3649.WHITE;
      case 100:
        return class_3649.BRONZE;
      case 101:
        return class_3649.SILVER;
      case 102:
        return class_3649.GOLD;
      case 103:
        return class_3649.DIAMOND;
      case 104:
        return class_3649.EMERALD;
      case 1e3:
        return class_3649.DYNAMIC_RED_TO_GREEN;
      case 1001:
        return class_3649.DYNAMIC_LEVELLING;
      case 1002:
        return class_3649.DYNAMIC_TEAM_COLOR;
      default:
        return class_3649.NOT_APPLICABLE;
    }
  }
  static _r5a9e777e5dc9ee(e) {
    switch (e) {
      case class_3649.NOT_APPLICABLE:
        return -1;
      case class_3649.GREEN:
        return 1;
      case class_3649.LIME_GREEN:
        return 2;
      case class_3649.YELLOW:
        return 3;
      case class_3649.ORANGE:
        return 4;
      case class_3649.RED:
        return 5;
      case class_3649.CYAN:
        return 6;
      case class_3649.BLUE:
        return 7;
      case class_3649.PURPLE:
        return 8;
      case class_3649.PINK:
        return 9;
      case class_3649.BROWN:
        return 10;
      case class_3649.BEIGE:
        return 11;
      case class_3649.TEAL:
        return 12;
      case class_3649.INDIGO:
        return 13;
      case class_3649.MAGENTA:
        return 14;
      case class_3649.LIGHT_BLUE:
        return 15;
      case class_3649.FIRE_ORANGE:
        return 16;
      case class_3649.DARK_GREEN:
        return 17;
      case class_3649.DARK_BLUE:
        return 18;
      case class_3649.WHITE:
        return 19;
      case class_3649.BRONZE:
        return 100;
      case class_3649.SILVER:
        return 101;
      case class_3649.GOLD:
        return 102;
      case class_3649.DIAMOND:
        return 103;
      case class_3649.EMERALD:
        return 104;
      case class_3649.DYNAMIC_RED_TO_GREEN:
        return 1e3;
      case class_3649.DYNAMIC_LEVELLING:
        return 1001;
      case class_3649.DYNAMIC_TEAM_COLOR:
        return 1002;
      default:
        return -1;
    }
  }
  static _rdd4e5a7f936bb0(e) {
    switch (e) {
      case -1:
        return VariableFxWidth.NOT_APPLICABLE;
      case 0:
        return VariableFxWidth.const_463;
      case 1:
        return VariableFxWidth.SMALL;
      case 2:
        return VariableFxWidth.MEDIUM;
      case 3:
        return VariableFxWidth.LARGE;
      case 4:
        return VariableFxWidth.EXTRA_LARGE;
      case 100:
        return VariableFxWidth.BIG_MAHOOSIVE_CHONKY;
      default:
        return VariableFxWidth.MEDIUM;
    }
  }
  static _r66b57669726ccd(e) {
    switch (e) {
      case VariableFxWidth.NOT_APPLICABLE:
        return -1;
      case VariableFxWidth.const_463:
        return 0;
      case VariableFxWidth.SMALL:
        return 1;
      case VariableFxWidth.MEDIUM:
        return 2;
      case VariableFxWidth.LARGE:
        return 3;
      case VariableFxWidth.EXTRA_LARGE:
        return 4;
      case VariableFxWidth.BIG_MAHOOSIVE_CHONKY:
        return 100;
      default:
        return 2;
    }
  }
  static _r28e293e1c3737e(e) {
    return class_2881.resolveById(e);
  }
  static _r8a2fb1cbf62267(e) {
    return class_2881._r92371a76009b62(e);
  }
}
