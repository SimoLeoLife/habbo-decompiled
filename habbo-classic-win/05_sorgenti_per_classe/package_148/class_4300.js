// Estratto da HabboAirLauncher.deobf.js, riga 106721.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_148/class_4300.as
// Nome offuscato: _icf0260337e22d0

class a {
    static {
      n(this, "class_4300");
    }
    static {
      sJr(this, "class_4300");
    }
    static const_174 = "ACH_AvatarLooks1";
    static const_352 = "ACH_EmailVerification1";
    static const_459 = "ACH_GuideAdvertisementReader1";
    static const_653 = "ACH_GuideGroupMember1";
    static const_643 = "ACH_HabboWayGraduate1";
    static ROOM_ENTRY_1 = "ACH_RoomEntry1";
    static ROOM_ENTRY_2 = "ACH_RoomEntry2";
    static const_655 = "ACH_SafetyQuizGraduate1";
    var_3332;
    var_3134;
    _badgeCode;
    _state;
    _rcafaa2bf09bfd5;
    var_5092;
    constructor(e) {
      ((this.var_3332 = e.readInteger()),
        (this.var_3134 = e.readInteger()),
        (this._badgeCode = e.readString()),
        (this._state = e.readInteger()),
        (this._rcafaa2bf09bfd5 = e.readInteger()),
        (this.var_5092 = e.readInteger()));
    }
    get state() {
      return this._state;
    }
    get achievementId() {
      return this.var_3332;
    }
    get _r5191ee4dc6b03d() {
      return this.var_3134;
    }
    get _rc9fc89e7eb27a7() {
      return this._badgeCode;
    }
    get _r901265a6ad395e() {
      return this._rcafaa2bf09bfd5;
    }
    get totalScore() {
      return this.var_5092;
    }
    hasProgressDisplay() {
      switch (this._rc9fc89e7eb27a7) {
        case a.const_643:
        case a.const_655:
        case a.const_352:
        case a.const_174:
          return !1;
        default:
          return !0;
      }
    }
  }
