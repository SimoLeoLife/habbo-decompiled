// Extracted from HabboAirLauncher.deobf.js, line 249183.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/IssueCategoryNames.as
// Obfuscated name: _i06a65cfb54e6aa

class {
  static {
    n(this, "IssueCategoryNames");
  }
  static var_161 = null;
  static setLocalizationManager(e) {
    this.var_161 = e;
  }
  static getSourceName(e) {
    switch (e) {
      case 1:
      case 2:
        return "Normal";
      case 3:
        return "Automatic";
      case 4:
        return "Automatic IM";
      case 5:
        return "Guide System";
      case 6:
        return "IM";
      case 7:
        return "Room";
      case 8:
        return "Panic";
      case 9:
        return "Guardian";
      case 10:
        return "Automatic Helper";
      case 11:
        return "Discussion";
      case 12:
        return "Selfie";
      case 14:
        return "Photo";
      case 15:
        return "Ambassador";
      default:
        return "Unknown";
    }
  }
  static getCategoryName(e) {
    if (this.var_161 != null) {
      let r = this.var_161.getLocalization(`help.cfh.topic.${e}`);
      if (!ua.isEmpty(r)) return r;
    }
    switch (e) {
      case 0:
        return "Automatic";
      case 101:
        return "Sex";
      case 102:
        return "PII";
      case 103:
        return "Scam";
      case 104:
        return "Bullying";
      case 105:
        return "Disruption";
      case 106:
        return "Other";
      case 111:
        return "Sex";
      case 112:
        return "Scam";
      case 113:
        return "Disruption";
      case 114:
        return "Other";
      case 121:
        return "Sex";
      case 122:
        return "PII";
      case 123:
        return "Bullying";
      case 124:
        return "Other";
      case 130:
        return "Hate";
      case 131:
        return "Violence";
      case 132:
        return "Sex";
      case 133:
        return "Illegal";
      case 134:
        return "PII";
      case 135:
        return "Copyright";
      case 136:
        return "Spam";
      case 1024:
        return "Guide";
      case 1025:
        return "Bullying";
      case 1026:
        return "Severe Alert";
      default:
        return "Unknown";
    }
  }
}
