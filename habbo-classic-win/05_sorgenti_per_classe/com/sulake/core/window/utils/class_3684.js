// Extracted from HabboAirLauncher.deobf.js, line 66833.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/class_3684.as
// Obfuscated name: _ifded3def1b2142

class {
  static {
    n(this, "class_3684");
  }
  static fillTables(e, r = null) {
    if (
      (e.set("default", class_1948.WINDOW_STATE_DEFAULT),
      e.set("active", class_1948.WINDOW_STATE_ACTIVE),
      e.set("focused", class_1948.const_138),
      e.set("hovering", class_1948.WINDOW_STATE_HOVERING),
      e.set("selected", class_1948.const_130),
      e.set("pressed", class_1948.const_92),
      e.set("disabled", class_1948.const_117),
      e.set("locked", class_1948.const_115),
      !!r)
    )
      for (let [t, i] of e.entries()) r.set(i, t);
  }
}
