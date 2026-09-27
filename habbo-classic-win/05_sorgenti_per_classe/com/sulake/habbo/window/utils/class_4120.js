// Estratto da HabboAirLauncher.deobf.js, riga 150779.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/class_4120.as
// Nome offuscato: _i78c0f2a03d4b42

class {
  static {
    n(this, "class_4120");
  }
  static categoryMapping(e, r) {
    return e === "S"
      ? 1
      : e === "I"
        ? r === 3001
          ? class_1901.WALL_PAPER
          : r === 3002
            ? class_1901.FLOOR
            : r === 4057
              ? class_1901.LANDSCAPE
              : 1
        : 1;
  }
  static createChatItemPreview(e, r, t = null) {
    let i = t ?? e.sessionDataManager?.userName ?? null,
      s = e._rafd5b9130c4bfd;
    return i != null ? (s?.createPreviewBitmap?.(i, r) ?? null) : null;
  }
}
