// Estratto da HabboAirLauncher.deobf.js, riga 289820.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/number/class_4305.as
// Nome offuscato: _i37316aafb277bd

class {
  static {
    n(this, "class_4305");
  }
  static getRecolorableDesign(e) {
    let r = this.digit;
    switch (e) {
      case "blocky":
        return {
          design: e,
          _r2e102a5d3539e0: 22,
          _r3431a48c5cfd52: 3,
          _r473d221aaa099d: 0,
          _r5056930ad4f3d1: -6,
          digits: [
            r("0", 0, 13),
            r("1", 14, 9),
            r("2", 24, 13),
            r("3", 38, 13),
            r("4", 52, 13),
            r("5", 66, 13),
            r("6", 80, 13),
            r("7", 94, 13),
            r("8", 108, 13),
            r("9", 122, 13),
            r("-", 136, 13),
          ],
          layers: {
            numbers: "variablefx_number_blocky_numbers",
            darkening: "variablefx_number_blocky_darkening",
            lighting: "variablefx_number_blocky_lighting",
          },
        };
      case "shalimar":
        return {
          design: e,
          _r2e102a5d3539e0: 23,
          _r3431a48c5cfd52: 3,
          _r473d221aaa099d: 0,
          _r5056930ad4f3d1: -6,
          digits: [
            r("0", 0, 17),
            r("1", 18, 17),
            r("2", 36, 17),
            r("3", 54, 17),
            r("4", 72, 17),
            r("5", 90, 17),
            r("6", 108, 17),
            r("7", 126, 17),
            r("8", 144, 17),
            r("9", 162, 17),
            r("-", 180, 17),
          ],
          layers: {
            numbers: "variablefx_number_shalimar_numbers",
            _rcffab147cfe597: "variablefx_number_shalimar_number_lines",
            darkening: "variablefx_number_shalimar_darkening",
            lighting: "variablefx_number_shalimar_lighting",
          },
        };
      default:
        return null;
    }
  }
  static getBakedColorDesign(e) {
    let r = this.digit;
    return e !== "freeze_style"
      ? null
      : {
          design: e,
          _r2e102a5d3539e0: 21,
          _r3431a48c5cfd52: -4,
          _r473d221aaa099d: 0,
          _r5056930ad4f3d1: -1,
          digits: [
            r("0", 0, 16),
            r("1", 17, 13),
            r("2", 31, 16),
            r("3", 48, 16),
            r("4", 65, 16),
            r("5", 82, 16),
            r("6", 99, 16),
            r("7", 116, 16),
            r("8", 133, 16),
            r("9", 150, 16),
            r("-", 167, 16),
          ],
          _r83097e2b38c14d: { RED: 0, GREEN: 22, BLUE: 44, YELLOW: 66, WHITE: 88 },
        };
  }
  static digit(e, r, t) {
    return { sourceX: r, value: e, width: t };
  }
}
