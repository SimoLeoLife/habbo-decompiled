// Estratto da HabboAirLauncher.deobf.js, riga 49894.

class {
  static {
    n(this, "_ic7f867ad53849e");
  }
  static isDebugger = !1;
  static playerType = "Desktop";
  static get _r07af885b748f48() {
    return typeof screen < "u" && Number.isFinite(screen.width) && screen.width > 0 ? screen.width : 1920;
  }
  static get _rd4b507212bb7db() {
    return typeof screen < "u" && Number.isFinite(screen.height) && screen.height > 0 ? screen.height : 1080;
  }
  static get os() {
    return typeof navigator < "u"
      ? navigator.platform || navigator.userAgent || "unknown"
      : typeof process < "u"
        ? process.platform
        : "unknown";
  }
  static get version() {
    return "WEB 0,0,0,0";
  }
  static get _rfc02824d36aa13() {
    return new URLSearchParams({
      os: this.os,
      playerType: this.playerType,
      version: this.version,
      debugger: this.isDebugger ? "true" : "false",
      language: typeof navigator < "u" ? navigator.language : "unknown",
    }).toString();
  }
}
