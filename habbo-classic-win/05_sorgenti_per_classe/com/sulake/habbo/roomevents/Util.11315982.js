// Extracted from HabboAirLauncher.deobf.js, line 344641.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/Util.as
// Obfuscated name: _i46d934ddae6ccc

class a {
  static {
    n(this, "Util");
  }
  static VARIABLE_SYNTAX_MODE_PRETTIFY = 0;
  static VARIABLE_SYNTAX_MODE_NONE = 1;
  static _r46fbf8ff75b31b = 2147483647;
  static _re1bf2ea754577c = -2147483648;
  static _r95dd5e276dc45a(e, r) {
    (e.setParamFlag(class_2094._r26338c8d88c4e5, !0), (e.procedure = r));
  }
  static getLowestPoint(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t += 1) {
      let i = e.getChildAt(t);
      i != null && i.visible && i.height > 0 && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  static _r917e2ee41e1dce(e) {
    let r = 0;
    for (let t = 0; t < e.numListItems; t += 1) {
      let i = e.getListItemAt(t);
      i != null && i.visible && i.height > 0 && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  static hideChildren(e, r = !1) {
    for (let t = 0; t < e.numChildren; t += 1) {
      let i = e.getChildAt(t);
      i != null && ((r && i.name === "ruler") || (i.visible = !1));
    }
  }
  static showChildren(e) {
    for (let r = 0; r < e.numChildren; r += 1) e.getChildAt(r).visible = !0;
  }
  static moveChildrenToColumn(e, r, t, i) {
    for (let s of r) {
      let o = e.getChildByName(s);
      o != null && o.visible && o.height > 0 && ((o.y = t), (t += o.height + i));
    }
  }
  static moveAllChildrenToColumn(e, r, t) {
    for (let i = 0; i < e.numChildren; i += 1) {
      let s = e.getChildAt(i);
      s != null && s.visible && s.height > 0 && ((s.y = r), (r += s.height + t));
    }
  }
  static select(e, r) {
    r ? e.select() : e.unselect();
  }
  static flatVariableName(e) {
    return e.variableName.replace("@", "").replace("~", "").replace(/\./g, "_");
  }
  static splitName(e) {
    return e.variableName.split(".");
  }
  static variableValueWithString(e, r) {
    if (!e.hasValue) return null;
    if (r === a._r46fbf8ff75b31b || r === a._re1bf2ea754577c) return "Hidden";
    let i = a.getConnectedText(e, r);
    return `${r}${i == null ? "" : ` (${i})`}`;
  }
  static getConnectedText(e, r) {
    let t = e.textConnector;
    return t == null ? null : (t.getValue(r) ?? null);
  }
  static _r40dcacee965ab9(e, r, t = !1) {
    return a.getIntFromString(e.text, r, t);
  }
  static getIntFromString(e, r, t = !1) {
    if (t && e.indexOf("0b") === 0) return Number.parseInt(e.substring(2), 2);
    if (t && e.indexOf("0x") === 0) return Number.parseInt(e.substring(2), 16);
    let i = Number(e);
    return Number.isNaN(i) ? r : i | 0;
  }
  static _r42a38bf88649b5(e, r) {
    (e.push(r < 0 ? -1 : 0), e.push(r));
  }
  static _r16383aac6ed4bb(e) {
    return "color" in e && a.uint(e) ? ((e.color >>> 24) & 255) / 255 : e.blend;
  }
  static setBlend(e, r) {
    if ("color" in e && a.uint(e)) {
      let t = Math.max(0, Math.min(255, Math.trunc(r * 255)));
      e.color = (e.color & 16777215) | (t << 24);
    } else e.blend = r;
  }
  static disableSection(e, r = !0) {
    if (e.tags.indexOf("DO_NOT_DISABLE") !== -1) return;
    let t = -1;
    if (e.isEnabled() && r) {
      t = a._r16383aac6ed4bb(e);
      let o = `BLEND=${t}`;
      e.tags.indexOf(o) === -1 && e.tags.push(o);
    } else if (!e.isEnabled() && !r)
      for (let o of e.tags) o.indexOf("BLEND=") === 0 && (t = Number(o.substring(6)));
    let i = t === -1 ? a._r16383aac6ed4bb(e) : r ? t / 2 : t,
      s = e.tags.indexOf("#icon") !== -1;
    if (!a._r65ff884edeb0d9(e))
      if (a._ra185fd1172d8db(e) || a._r174073f892c83e(e) || a._r3cd914a4ce2444(e)) {
        if (a._r3b9d1db283323d(e)) for (let o of e.children) a.disableSection(o, r);
        else if (a._ra185fd1172d8db(e))
          for (let o = 0; o < e.numChildren; o += 1) {
            let d = e.getChildAt(o);
            d != null && a.disableSection(d, r);
          }
        (a._r693386423de72b(e) || a.uint(e)) && a.setBlend(e, i);
      } else s || a.setBlend(e, i);
    r ? e.disable() : e.enable();
  }
  static _r59051b680df50f(e, r) {
    let t = e.variableType === class_3973.INTERNAL,
      i = r.variableType === class_3973.INTERNAL;
    if (t && !i) return 1;
    if (i && !t) return -1;
    if (t) {
      let s = Number(e.variableId),
        o = Number(r.variableId);
      return s > o ? -1 : s === o ? 0 : 1;
    }
    return e.variableName.localeCompare(r.variableName);
  }
  static _r5c461577938819(e) {
    e.sort(a._r59051b680df50f);
  }
  static compareIntArrays(e, r) {
    if (e.length !== r.length) return !1;
    for (let t = 0; t < e.length; t += 1) if (e[t] !== r[t]) return !1;
    return !0;
  }
  static _r20e36218db9fd8(e, r) {
    for (let t of e) if (t.variableId === r) return t;
    return null;
  }
  static uintToHexColor(e) {
    let r = e.toString(16);
    for (; r.length < 6;) r = `0${r}`;
    return `#${r}`;
  }
  static snakeToTitle(e) {
    return e
      ? e
          .toLowerCase()
          .replace(/_/g, " ")
          .replace(/\b\w/g, (r) => r.toUpperCase())
      : "";
  }
  static _r5f42ff539f0f87(e, r) {
    let t = qn._r6ca1d657712155(e),
      i = t & 255;
    return ((i = Math.min(255, Math.trunc(i * r))), (t = (t & -256) | i), qn.hslToRGB(t));
  }
  static _ra185fd1172d8db(e) {
    return "numChildren" in e && "findChildByName" in e;
  }
  static _r174073f892c83e(e) {
    return "numListItems" in e && "getListItemAt" in e;
  }
  static _r3cd914a4ce2444(e) {
    return "getSelectableIndex" in e && "getSelected" in e;
  }
  static uint(e) {
    return "background" in e;
  }
  static _r693386423de72b(e) {
    return "findChildByTag" in e && "expandToAccommodateChildren" in e;
  }
  static _r65ff884edeb0d9(e) {
    return "enable" in e && "disable" in e && "caption" in e;
  }
  static _r3b9d1db283323d(e) {
    return "children" in e;
  }
}
