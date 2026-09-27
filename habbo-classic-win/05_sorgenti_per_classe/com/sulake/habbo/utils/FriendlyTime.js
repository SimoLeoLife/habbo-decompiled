// Estratto da HabboAirLauncher.deobf.js, riga 67798.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/FriendlyTime.as
// Nome offuscato: _i3a4999cedfaea6

class a {
  static {
    n(this, "FriendlyTime");
  }
  static const_199 = 60;
  static _r6798ce18871852 = 60 * a.const_199;
  static _ra891521eabc11c = 24 * a._r6798ce18871852;
  static _r888516de4bdbcb = 7 * a._ra891521eabc11c;
  static _r416a392553d0b8 = 30 * a._ra891521eabc11c;
  static _re682f53a25ac4f = 365 * a._ra891521eabc11c;
  static getFriendlyTime(e, r, t = "", i = 3) {
    return r > i * a._re682f53a25ac4f
      ? a.getLocalization(e, `friendlytime.years${t}`, Math.round(r / a._re682f53a25ac4f))
      : r > i * a._r416a392553d0b8
        ? a.getLocalization(e, `friendlytime.months${t}`, Math.round(r / a._r416a392553d0b8))
        : r > i * a._ra891521eabc11c
          ? a.getLocalization(e, `friendlytime.days${t}`, Math.round(r / a._ra891521eabc11c))
          : r > i * a._r6798ce18871852
            ? a.getLocalization(e, `friendlytime.hours${t}`, Math.round(r / a._r6798ce18871852))
            : r > i * a.const_199
              ? a.getLocalization(e, `friendlytime.minutes${t}`, Math.round(r / a.const_199))
              : a.getLocalization(e, `friendlytime.seconds${t}`, Math.round(r));
  }
  static getShortFriendlyTime(e, r, t = "", i = 3) {
    return r > i * a._re682f53a25ac4f
      ? a.getLocalization(e, `friendlytime.years.short${t}`, Math.round(r / a._re682f53a25ac4f))
      : r > i * a._r416a392553d0b8
        ? a.getLocalization(e, `friendlytime.months.short${t}`, Math.round(r / a._r416a392553d0b8))
        : r > i * a._ra891521eabc11c
          ? a.getLocalization(e, `friendlytime.days.short${t}`, Math.round(r / a._ra891521eabc11c))
          : r > i * a._r6798ce18871852
            ? a.getLocalization(e, `friendlytime.hours.short${t}`, Math.round(r / a._r6798ce18871852))
            : r > i * a.const_199
              ? a.getLocalization(e, `friendlytime.minutes.short${t}`, Math.round(r / a.const_199))
              : a.getLocalization(e, `friendlytime.seconds.short${t}`, Math.round(r));
  }
  static getLocalization(e, r, t) {
    return e.getLocalizationWithParams(r, r, "amount", t.toString());
  }
}
