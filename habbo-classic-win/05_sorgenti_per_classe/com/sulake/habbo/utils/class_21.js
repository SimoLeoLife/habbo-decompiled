// Extracted from HabboAirLauncher.deobf.js, line 68235.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/class_21.as
// Obfuscated name: _i1f364b3a0afead

class a {
  static {
    n(this, "class_21");
  }
  static DEVICE_TYPE_DESKTOP = 2;
  static _rc7427a258add96 = 0;
  static _re0862f39183952 = 1;
  static PHONE_SCALE_FACTOR = 0.65;
  static _rc26123e930b904 = 0;
  static _rdfd895c3aafb81 = -1;
  static _r28c8e3b1e43659 = 1;
  static MAX_DYNAMIC_TEXTURE_DIMENSION_HD = 2048;
  static MAX_DYNAMIC_TEXTURE_DIMENSION_SD = 512;
  static _scale = 1;
  static _r9df599424438dc = a.DEVICE_TYPE_DESKTOP;
  static _initialized = !1;
  static _r1f0bcabd727119 = !1;
  static var_4574 = null;
  static _rb5c1c87ed3543e = a._rdfd895c3aafb81;
  static init() {
    a._initialized ||
      (a.initOs(),
      a.initScale(),
      a.initDeviceType(),
      a.initLowMem(),
      (a._initialized = !0));
  }
  static set nativeApplicationProxy(e) {
    a.var_4574 = e;
  }
  static get nativeApplicationProxy() {
    return a.var_4574;
  }
  static get _re97114380dfab6() {
    return Math.max(UnkClass_c7f867._r07af885b748f48, UnkClass_c7f867._rd4b507212bb7db) < 1600 ? !1 : a.scale > 0.75;
  }
  static get _r5171a487aad6f9() {
    return !a._re97114380dfab6 || a.isPhone();
  }
  static get _rb76918d6c2dc3e() {
    let e = Math.max(UnkClass_c7f867._r07af885b748f48, UnkClass_c7f867._rd4b507212bb7db),
      r = Math.max(1, Math.min(UnkClass_c7f867._r07af885b748f48, UnkClass_c7f867._rd4b507212bb7db));
    return e / r > 2;
  }
  static get _r499153643e71dc() {
    return a._re3f9e9a27da9be;
  }
  static get _re3f9e9a27da9be() {
    let e = Math.max(UnkClass_c7f867._r07af885b748f48, UnkClass_c7f867._rd4b507212bb7db),
      r = Math.min(UnkClass_c7f867._r07af885b748f48, UnkClass_c7f867._rd4b507212bb7db);
    return a.isIos() && e === 2436 && r === 1125;
  }
  static get _r952e7c9f4ea7d8() {
    return (a.init(), a._r1f0bcabd727119);
  }
  static _rdcc771d73438fc() {
    return a._re97114380dfab6 ? 2 : 1;
  }
  static get scale() {
    return (a.init(), a._scale);
  }
  static _r00ab90a64ef8f6(e) {
    let r = (e * a.scale) | 0;
    return ((r = (r | 1) - 1), r);
  }
  static get _r0661c722ba01f7() {
    return a._r952e7c9f4ea7d8 ? a.MAX_DYNAMIC_TEXTURE_DIMENSION_SD : a.MAX_DYNAMIC_TEXTURE_DIMENSION_HD;
  }
  static isAndroid() {
    return (a.init(), a._rb5c1c87ed3543e === a._rc26123e930b904);
  }
  static isIos() {
    return (a.init(), a._rb5c1c87ed3543e === a._r28c8e3b1e43659);
  }
  static isDesktop() {
    return (a.init(), a._rb5c1c87ed3543e === a._rdfd895c3aafb81);
  }
  static isPhone() {
    return (a.init(), a._r9df599424438dc === a._rc7427a258add96);
  }
  static platformId() {
    return (a.init(), a._rb5c1c87ed3543e);
  }
  static platformString() {
    switch (a.platformId()) {
      case a._r28c8e3b1e43659:
        return "ios";
      case a._rc26123e930b904:
        return "android";
      case a._rdfd895c3aafb81:
        return "desktop";
      default:
        return "unknown";
    }
  }
  static _rd1d94764d54bbd() {
    return (a.init(), a._r9df599424438dc);
  }
  static isIOSSimulator() {
    return a.isIos() && UnkClass_c7f867.os.includes("x86");
  }
  static getDeviceStringForLogging() {
    let e = "";
    return (
      a.isAndroid() ? (e += "ANDROID") : a.isIos() ? (e += "IOS") : (e += "FLASH"),
      (e += "."),
      a.isDesktop() ? (e += "UNKNOWN") : a.isPhone() ? (e += "PHONE") : (e += "TABLET"),
      e
    );
  }
  static initOs() {
    let e = typeof navigator > "u" ? "" : navigator.userAgent.toLowerCase(),
      r = UnkClass_c7f867.version.toLowerCase();
    if (r.includes("ios") || /(iphone|ipad|ipod|ios)/.test(e)) {
      a._rb5c1c87ed3543e = a._r28c8e3b1e43659;
      return;
    }
    if (r.includes("and") || /android/.test(e)) {
      a._rb5c1c87ed3543e = a._rc26123e930b904;
      return;
    }
    a._rb5c1c87ed3543e = a._rdfd895c3aafb81;
  }
  static initDeviceType() {
    let e =
      typeof window < "u" && Number.isFinite(window.devicePixelRatio)
        ? Math.max(1, window.devicePixelRatio)
        : 1;
    if (a._rb5c1c87ed3543e === a._rdfd895c3aafb81) {
      a._scale = 1;
      return;
    }
    a._scale = a._r9df599424438dc === a._rc7427a258add96 ? e * a.PHONE_SCALE_FACTOR : e;
  }
  static initScale() {
    if (a._rb5c1c87ed3543e === a._rdfd895c3aafb81) {
      a._r9df599424438dc = a.DEVICE_TYPE_DESKTOP;
      return;
    }
    let e = typeof screen > "u" ? 0 : Math.min(screen.width || 0, screen.height || 0);
    a._r9df599424438dc = e >= 768 ? a._re0862f39183952 : a._rc7427a258add96;
  }
  static initLowMem() {
    if (a._rb5c1c87ed3543e === a._r28c8e3b1e43659) {
      let e = [
          "iPhone4,1",
          "iPad2,1",
          "iPad2,2",
          "iPad2,3",
          "iPad2,4",
          "iPad2,5",
          "iPad2,6",
          "iPad2,7",
          "iPod5,1",
        ],
        r = UnkClass_c7f867.os;
      a._r1f0bcabd727119 = e.some((t) => r.includes(t));
      return;
    }
    a._r1f0bcabd727119 = !(Math.max(UnkClass_c7f867._r07af885b748f48, UnkClass_c7f867._rd4b507212bb7db) >= 1600 && a._scale > 0.75);
  }
}
