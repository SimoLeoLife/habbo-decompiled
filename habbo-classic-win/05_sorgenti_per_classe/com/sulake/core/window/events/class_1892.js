// Estratto da HabboAirLauncher.deobf.js, riga 65823.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/events/class_1892.as
// Nome offuscato: _ia2c5ee8f4842b0

class a {
  static {
    n(this, "class_1892");
  }
  static UNKNOWN = "";
  static const_413 = "WE_ACTIVATE";
  static const_768 = "WE_ACTIVATED";
  static const_204 = "WE_CANCEL";
  static WINDOW_EVENT_CHANGE = "WE_CHANGE";
  static const_251 = "WE_CHILD_ACTIVATED";
  static const_1024 = "WE_CHILD_ADDED";
  static const_1385 = "WE_CHILD_RELOCATED";
  static const_1333 = "WE_CHILD_REMOVED";
  static const_906 = "WE_CHILD_RESIZED";
  static const_342 = "WE_CHILD_VISIBILITY";
  static const_1386 = "WE_CLOSE";
  static const_1131 = "WE_CLOSED";
  static const_769 = "WE_COLLAPSE";
  static const_726 = "WE_DEACTIVATE";
  static const_210 = "WE_DEACTIVATED";
  static const_712 = "WE_DESTROY";
  static const_953 = "WE_DESTROYED";
  static const_155 = "WE_DISABLE";
  static const_1057 = "WE_DISABLED";
  static const_294 = "WE_ENABLE";
  static const_1331 = "WE_ENABLED";
  static const_1199 = "WE_EXPANDED";
  static WINDOW_EVENT_FOCUS = "WE_FOCUS";
  static const_962 = "WE_FOCUSED";
  static WINDOW_EVENT_LOCK = "WE_LOCK";
  static const_697 = "WE_LOCKED";
  static const_341 = "WE_MAXIMIZE";
  static const_569 = "WE_MAXIMIZED";
  static const_1276 = "WE_MINIMIZE";
  static const_622 = "WE_MINIMIZED";
  static const_1300 = "WE_OK";
  static const_922 = "WE_OPEN";
  static const_817 = "WE_OPENED";
  static const_828 = "WE_PARENT_ACTIVATED";
  static const_541 = "WE_PARENT_ADDED";
  static const_1019 = "WE_PARENT_RELOCATED";
  static const_1004 = "WE_PARENT_REMOVED";
  static const_411 = "WE_PARENT_RESIZED";
  static const_848 = "WE_RELOCATE";
  static const_475 = "WE_RELOCATED";
  static const_1204 = "WE_RESIZE";
  static const_755 = "WE_RESIZED";
  static WINDOW_EVENT_RESTORE = "WE_RESTORE";
  static const_813 = "WE_RESTORED";
  static const_362 = "WE_SCROLL";
  static const_587 = "WE_SELECT";
  static const_238 = "WE_SELECTED";
  static WINDOW_EVENT_UNFOCUS = "WE_UNFOCUS";
  static const_1200 = "WE_UNFOCUSED";
  static WINDOW_EVENT_UNLOCK = "WE_UNLOCK";
  static const_914 = "WE_UNLOCKED";
  static const_774 = "WE_UNSELECT";
  static const_1217 = "WE_UNSELECTED";
  static var_3507 = [];
  static _r0c5800f193c7a3 = 0;
  static _r279ce960e1c84a = 0;
  _type = a.UNKNOWN;
  _window = null;
  var_1451 = null;
  var_1232 = !1;
  _cancelable = !1;
  var_119 = !1;
  _pool = a.var_3507;
  get type() {
    return this._type;
  }
  get target() {
    return this._window;
  }
  get window() {
    return this._window;
  }
  get related() {
    return this.var_1451;
  }
  get cancelable() {
    return this._cancelable;
  }
  static allocate(e, r, t, i = !1) {
    let s = a.var_3507.pop() ?? new a();
    return (
      (s._type = e),
      (s._window = r),
      (s.var_1451 = t),
      (s._cancelable = i),
      (s.var_119 = !1),
      (s.var_1232 = !1),
      (s._pool = a.var_3507),
      s
    );
  }
  recycle() {
    if (this.var_119) throw new Error("Event already recycled!");
    ((this._window = null),
      (this.var_1451 = null),
      (this.var_119 = !0),
      (this.var_1232 = !1),
      this._pool.push(this));
  }
  clone() {
    return a.allocate(this._type, this.window, this.related, this.cancelable);
  }
  preventDefault() {
    this.preventWindowOperation();
  }
  isDefaultPrevented() {
    return this.var_1232;
  }
  preventWindowOperation() {
    if (!this.cancelable) throw new Error("Attempted to prevent window operation that is not cancelable!");
    this.var_1232 = !0;
  }
  isWindowOperationPrevented() {
    return this.var_1232;
  }
  stopPropagation() {
    this.var_1232 = !0;
  }
  stopImmediatePropagation() {
    this.var_1232 = !0;
  }
  toString() {
    return `WindowEvent { type: ${this._type} cancelable: ${this._cancelable} window: ${this._window} }`;
  }
}
