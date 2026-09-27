// Extracted from HabboAirLauncher.deobf.js, line 143863.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/DefaultAttStruct.as
// Obfuscated name: _i8493eb3ae28b49

class a {
  static {
    n(this, "DefaultAttStruct");
  }
  static useRectLimits = !0;
  color = 16777215;
  background = !1;
  blend = 1;
  threshold = 10;
  width_min = Number.MIN_SAFE_INTEGER;
  width_max = Number.MAX_SAFE_INTEGER;
  height_min = Number.MIN_SAFE_INTEGER;
  height_max = Number.MAX_SAFE_INTEGER;
  hasRectLimits() {
    return (
      a.useRectLimits &&
      (this.width_min > Number.MIN_SAFE_INTEGER ||
        this.height_min > Number.MIN_SAFE_INTEGER ||
        this.width_max < Number.MAX_SAFE_INTEGER ||
        this.height_max < Number.MAX_SAFE_INTEGER)
    );
  }
}
