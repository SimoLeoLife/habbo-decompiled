// Extracted from HabboAirLauncher.deobf.js, line 67233.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/enum/class_2567.as
// Obfuscated name: _ia4f76c78516068

class a {
  static {
    n(this, "class_2567");
  }
  static CARRY_OBJECT = "cri";
  static DANCE = "dance";
  static const_118 = "fx";
  static const_592 = "expression";
  static EXPRESSION_BLOW_A_KISS = "blow";
  static EXPRESSION_67 = "67";
  static const_636 = "cry";
  static const_1009 = "idle";
  static _r951881d2fcf861 = "dance";
  static EXPRESSION_LAUGH = "laugh";
  static const_405 = "respect";
  static EXPRESSION_RIDE_JUMP = "ridejump";
  static EXPRESSION_SNOWBOARD_OLLIE = "sbollie";
  static EXPRESSION_SNOWBORD_360 = "sb360";
  static EXPRESSION_WAVE = "wave";
  static GESTURE = "gest";
  static GESTURE_AGGRAVATED = "agr";
  static GESTURE_SAD = "sad";
  static GESTURE_SMILE = "sml";
  static GESTURE_SURPRISED = "srp";
  static GUIDE_STATUS = "guide";
  static MUTED = "muted";
  static PET_GESTURE_BLINK = "eyb";
  static PET_GESTURE_CRAZY = "crz";
  static PET_GESTURE_JOY = "joy";
  static PET_GESTURE_MISERABLE = "mis";
  static PET_GESTURE_PUZZLED = "puz";
  static PET_GESTURE_TONGUE = "tng";
  static PLAYING_GAME = "playing_game";
  static POSTURE = "posture";
  static POSTURE_FLOAT = "float";
  static POSTURE_LAY = "lay";
  static POSTURE_SIT = "sit";
  static POSTURE_SNOWWAR_DIE_BACK = "swdieback";
  static POSTURE_SNOWWAR_DIE_FRONT = "swdiefront";
  static POSTURE_SNOWWAR_PICK = "swpick";
  static POSTURE_SNOWWAR_RUN = "swrun";
  static POSTURE_SNOWWAR_THROW = "swthrow";
  static POSTURE_STAND = "std";
  static POSTURE_SWIM = "swim";
  static POSTURE_WALK = "mv";
  static SIGN = "sign";
  static SLEEP = "Sleep";
  static TALK = "talk";
  static TYPING = "typing";
  static USE_OBJECT = "usei";
  static const_523 = "vote";
  static _rc46a5c19ccb3ff(e) {
    switch (e) {
      case 1:
        return 5e3;
      case 2:
        return 1400;
      case 67:
        return 990;
      case 3:
        return 2e3;
      case 4:
        return 2e3;
      case 5:
        return 0;
      case 6:
        return 700;
      case 7:
        return 2e3;
      case 8:
        return 1500;
      case 9:
        return 1500;
      case 10:
        return 1500;
      default:
        return 0;
    }
  }
  static _r4d2294473a28c0(e) {
    return e === a.EXPRESSION_67 ? 67 : a._r855169c2216eee().indexOf(e);
  }
  static getGesture(e) {
    return e === 67 ? a.EXPRESSION_67 : (a._r855169c2216eee()[e] ?? "");
  }
  static _r45e4bbbe68f11d(e) {
    return a._r5b0eb46d28a139().indexOf(e);
  }
  static getExpression(e) {
    return a._r5b0eb46d28a139()[e] ?? "";
  }
  static _r5b0eb46d28a139() {
    return [
      "",
      a.GESTURE_SMILE,
      a.GESTURE_AGGRAVATED,
      a.GESTURE_SURPRISED,
      a.GESTURE_SAD,
      a.PET_GESTURE_JOY,
      a.PET_GESTURE_CRAZY,
      a.PET_GESTURE_TONGUE,
      a.PET_GESTURE_BLINK,
      a.PET_GESTURE_MISERABLE,
      a.PET_GESTURE_PUZZLED,
    ];
  }
  static _r855169c2216eee() {
    return [
      "",
      a.EXPRESSION_WAVE,
      a.EXPRESSION_BLOW_A_KISS,
      a.EXPRESSION_LAUGH,
      a.const_636,
      a.const_1009,
      a._r951881d2fcf861,
      a.const_405,
      a.EXPRESSION_SNOWBOARD_OLLIE,
      a.EXPRESSION_SNOWBORD_360,
      a.EXPRESSION_RIDE_JUMP,
    ];
  }
}
