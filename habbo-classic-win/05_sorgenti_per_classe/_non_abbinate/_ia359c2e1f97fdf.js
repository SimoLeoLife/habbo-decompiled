// Estratto da HabboAirLauncher.deobf.js, riga 67078.

class a {
  static {
    n(this, "_ia359c2e1f97fdf");
  }
  static isWindow(e) {
    if (e == null) return !1;
    let r = e;
    return typeof r.dispose == "function" && typeof r.name == "string";
  }
  static _ra185fd1172d8db(e) {
    if (e == null) return !1;
    let r = e;
    return (
      typeof r.addChild == "function" && typeof r.getChildAt == "function" && typeof r.numChildren == "number"
    );
  }
  static _rad8cb2b2a86b68(e) {
    return e != null && "text" in e;
  }
  static _rd11cefb8a367ec(e) {
    return a._rad8cb2b2a86b68(e);
  }
  static _r004e7ccfccdf21(e) {
    if (e == null) return !1;
    let r = e;
    return typeof r._r1c386c8571c5d9 == "function" && "text" in r;
  }
  static _r174073f892c83e(e) {
    if (e == null) return !1;
    let r = e;
    return (
      typeof r.addListItem == "function" &&
      typeof r.getListItemAt == "function" &&
      typeof r.removeListItemAt == "function"
    );
  }
  static _rc4f480c0c57ece(e) {
    if (e == null) return !1;
    let r = e;
    return (
      typeof r.addGridItem == "function" &&
      typeof r.getGridItemAt == "function" &&
      typeof r._r7f196c1ba1085e == "function"
    );
  }
  static _r937ebde9de31a2(e) {
    return a._r174073f892c83e(e) && "autoHideScrollBar" in e;
  }
  static _re7c01149f30b6b(e) {
    if (e == null) return !1;
    let r = e;
    return (
      typeof r.populate == "function" &&
      typeof r.enumerateSelection == "function" &&
      typeof r.openMenu == "function"
    );
  }
  static _r7e6bf2137f0a80(e) {
    if (e == null) return !1;
    let r = e;
    return (
      r.type === class_2090.const_1039 &&
      typeof r.select == "function" &&
      typeof r.unselect == "function"
    );
  }
  static _r65ff884edeb0d9(e) {
    return e != null && typeof e.enable == "function";
  }
  static _rf9eb212abb3de7(e) {
    if (e == null) return !1;
    let r = e;
    return (
      typeof r.select == "function" && typeof r.unselect == "function" && typeof r.selector < "u"
    );
  }
  static _r3cd914a4ce2444(e) {
    if (e == null) return !1;
    let r = e;
    return typeof r.getSelected == "function" && typeof r.setSelected == "function";
  }
  static _r313ecdbb7fc95a(e) {
    if (e == null) return !1;
    let r = e;
    return typeof r.getTabItemAt == "function" && typeof r._ra8b044f5467c44 == "function";
  }
  static _r4ae3c1ac72c38e(e) {
    if (e == null) return !1;
    let r = e;
    return typeof r.addChild == "function" && typeof r.addEventListener == "function";
  }
  static _r8033afab16dd6d(e) {
    return e != null && "widget" in e;
  }
  static _rac38b70f096b72(e) {
    return e != null && "helpPage" in e;
  }
  static _rd97ea536005b33(e) {
    if (e == null) return !1;
    let r = e;
    return "title" in r && "controls" in r;
  }
  static _r693386423de72b(e) {
    return e != null && "background" in e;
  }
  static _r874d0d52c3eed2(e) {
    return e != null && "bitmap" in e;
  }
  static _r056f44ba546e01(e) {
    return e != null && "assetUri" in e;
  }
  static _r628741f49accfc(e) {
    return e != null && "style" in e;
  }
}
