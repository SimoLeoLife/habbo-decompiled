// Estratto da HabboAirLauncher.deobf.js, riga 284654.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/class_2881.as
// Nome offuscato: _ib05914d1a9d6c1

class {
  static {
    n(this, "class_2881");
  }
  static CLASSIC_PROGRESS = "classic_progress";
  static CLASSIC_MINI_PROGRESS = "classic_mini_progress";
  static BLOCK_PROGRESS = "block_progress";
  static STRIPED_PROGRESS = "striped_progress";
  static ARROW_PROGRESS = "arrow_progress";
  static HEALTH_PROGRESS = "health_progress";
  static MASKED_HEART_FILL = "masked_heart_fill";
  static STACKED_HEALTH_POINTS = "stacked_health_points";
  static THERMOMETER_HEALTH_POINTS = "thermometer_health_points";
  static LEVEL_WITH_PROGRESS = "level_with_progress";
  static LEVEL_WITH_BAR_AND_NUMERICAL_PROGRESS = "level_with_bar_and_numerical_progress";
  static BOSS_HEALTH_BAR = "boss_health_bar";
  static NUMERICAL_PROGRESS = "numerical_progress";
  static NUMBER_RECOLORABLE = "number_recolorable";
  static NUMBER_BAKED_COLORS = "number_baked_colors";
  static CLASSIC_PROGRESS_ID = 0;
  static CLASSIC_MINI_PROGRESS_ID = 1;
  static BLOCK_PROGRESS_ID = 2;
  static STRIPED_PROGRESS_ID = 3;
  static ARROW_PROGRESS_ID = 4;
  static const_1095 = 10;
  static MASKED_HEART_FILL_ID = 11;
  static STACKED_HEALTH_POINTS_ID = 12;
  static THERMOMETER_HEALTH_POINTS_ID = 13;
  static const_1180 = 20;
  static const_1145 = 21;
  static BOSS_HEALTH_BAR_ID = 100;
  static NUMERICAL_PROGRESS_ID = 101;
  static NUMBER_RECOLORABLE_ID = 200;
  static NUMBER_BAKED_COLORS_ID = 201;
  static _r92371a76009b62(e) {
    switch (e) {
      case this.CLASSIC_PROGRESS:
        return this.CLASSIC_PROGRESS_ID;
      case this.CLASSIC_MINI_PROGRESS:
        return this.CLASSIC_MINI_PROGRESS_ID;
      case this.BLOCK_PROGRESS:
        return this.BLOCK_PROGRESS_ID;
      case this.STRIPED_PROGRESS:
        return this.STRIPED_PROGRESS_ID;
      case this.ARROW_PROGRESS:
        return this.ARROW_PROGRESS_ID;
      case this.HEALTH_PROGRESS:
        return this.const_1095;
      case this.MASKED_HEART_FILL:
        return this.MASKED_HEART_FILL_ID;
      case this.STACKED_HEALTH_POINTS:
        return this.STACKED_HEALTH_POINTS_ID;
      case this.THERMOMETER_HEALTH_POINTS:
        return this.THERMOMETER_HEALTH_POINTS_ID;
      case this.LEVEL_WITH_PROGRESS:
        return this.const_1180;
      case this.LEVEL_WITH_BAR_AND_NUMERICAL_PROGRESS:
        return this.const_1145;
      case this.BOSS_HEALTH_BAR:
        return this.BOSS_HEALTH_BAR_ID;
      case this.NUMERICAL_PROGRESS:
        return this.NUMERICAL_PROGRESS_ID;
      case this.NUMBER_RECOLORABLE:
        return this.NUMBER_RECOLORABLE_ID;
      case this.NUMBER_BAKED_COLORS:
        return this.NUMBER_BAKED_COLORS_ID;
      default:
        return -1;
    }
  }
  static resolveById(e) {
    switch (e) {
      case this.CLASSIC_PROGRESS_ID:
        return this.CLASSIC_PROGRESS;
      case this.CLASSIC_MINI_PROGRESS_ID:
        return this.CLASSIC_MINI_PROGRESS;
      case this.BLOCK_PROGRESS_ID:
        return this.BLOCK_PROGRESS;
      case this.STRIPED_PROGRESS_ID:
        return this.STRIPED_PROGRESS;
      case this.ARROW_PROGRESS_ID:
        return this.ARROW_PROGRESS;
      case this.const_1095:
        return this.HEALTH_PROGRESS;
      case this.MASKED_HEART_FILL_ID:
        return this.MASKED_HEART_FILL;
      case this.STACKED_HEALTH_POINTS_ID:
        return this.STACKED_HEALTH_POINTS;
      case this.THERMOMETER_HEALTH_POINTS_ID:
        return this.THERMOMETER_HEALTH_POINTS;
      case this.const_1180:
        return this.LEVEL_WITH_PROGRESS;
      case this.const_1145:
        return this.LEVEL_WITH_BAR_AND_NUMERICAL_PROGRESS;
      case this.BOSS_HEALTH_BAR_ID:
        return this.BOSS_HEALTH_BAR;
      case this.NUMERICAL_PROGRESS_ID:
        return this.NUMERICAL_PROGRESS;
      case this.NUMBER_RECOLORABLE_ID:
        return this.NUMBER_RECOLORABLE;
      case this.NUMBER_BAKED_COLORS_ID:
        return this.NUMBER_BAKED_COLORS;
      default:
        return null;
    }
  }
}
