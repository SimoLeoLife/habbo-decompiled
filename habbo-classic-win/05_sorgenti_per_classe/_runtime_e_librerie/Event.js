// Estratto da HabboAirLauncher.deobf.js, riga 28630.

class a {
  constructor(e = "", r = !1, t = !1) {
    this.type = e;
    this.bubbles = r;
    this.cancelable = t;
  }
  static {
    n(this, "Event");
  }
  static ACTIVATE = "activate";
  static ADDED = "added";
  static _scrollBar = "addedToStage";
  static ComponentDependency = "complete";
  static CONNECT = "connect";
  static _r8922581ea8bc6e = "close";
  static _ra3d93f66ba77c2 = "change";
  static CANCEL = "cancel";
  static OPEN = "open";
  static _re9c5159721d60d = "enterFrame";
  static _r6ae5d0b3fd884b = "exitFrame";
  static _r2722be7520587b = "frameRateChange";
  static MOUSE_LEAVE = "mouseLeave";
  static _r4b0396f57c9367 = "removedFromStage";
  static RESIZE = "resize";
  target = null;
  currentTarget = null;
  _defaultPrevented = !1;
  _propagationStopped = !1;
  _immediatePropagationStopped = !1;
  preventDefault() {
    this.cancelable && (this._defaultPrevented = !0);
  }
  isDefaultPrevented() {
    return this._defaultPrevented;
  }
  stopPropagation() {
    this._propagationStopped = !0;
  }
  stopImmediatePropagation() {
    ((this._immediatePropagationStopped = !0), (this._propagationStopped = !0));
  }
  get propagationStoppedFlag() {
    return this._propagationStopped;
  }
  get immediatePropagationStoppedFlag() {
    return this._immediatePropagationStopped;
  }
  clone() {
    return new a(this.type, this.bubbles, this.cancelable);
  }
}
