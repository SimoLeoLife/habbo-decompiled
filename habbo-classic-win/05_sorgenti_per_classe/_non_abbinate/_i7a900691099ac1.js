// Estratto da HabboAirLauncher.deobf.js, riga 60385.

class a {
  constructor(e, r) {
    this._key = e;
    this._value = r;
    a._initialized && class_14.error("LogLevel is a Core-level Class only!", !0);
  }
  static {
    n(this, "_i7a900691099ac1");
  }
  static _initialized = !1;
  static OFF = new a("OFF", 1);
  static DEBUG = new a("DEBUG", 2);
  static INFO = new a("INFO", 4);
  static WARN = new a("WARN", 8);
  static ERROR = new a("ERROR", 16);
  static FATAL = new a("FATAL", 32);
  static ALL = new a("ALL", a.DEBUG.value | a.INFO.value | a.WARN.value | a.ERROR.value | a.FATAL.value);
  static {
    this._initialized = !0;
  }
  get value() {
    return this._value;
  }
  get key() {
    return this._key;
  }
  static _rbada9003a1431d(e) {
    switch (e.toUpperCase()) {
      case a.OFF.key:
        return a.OFF;
      case a.DEBUG.key:
        return a.DEBUG;
      case a.INFO.key:
        return a.INFO;
      case a.WARN.key:
        return a.WARN;
      case a.ERROR.key:
        return a.ERROR;
      case a.FATAL.key:
        return a.FATAL;
      case a.ALL.key:
        return a.ALL;
      default:
        return a.OFF;
    }
  }
}
