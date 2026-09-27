// Extracted from HabboAirLauncher.deobf.js, line 250898.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/new_mod_tool_tabs/class_2978.as
// Obfuscated name: _ic172ef504726ec

class extends class_2456 {
  static {
    n(this, "class_2978");
  }
  constructor(e, r) {
    (super(e, r), this.sendHotelAlertButton.addEventListener(u.CLICK, this.onSendClicked));
  }
  onSendClicked = n(() => {
    (this.tool.windowManager._r3651220a1507f2(
      "${notifications.broadcast.title}",
      "",
      this.hotelAlertInput.text,
      "",
      "",
      null,
      class_3852.FRANK_NEUTRAL,
    ),
      (this.hotelAlertInput.text = ""),
      this.tool._r43032a825e00cd(1));
  }, "onSendClicked");
  get hotelAlertInput() {
    return this.window.findChildByName("hotel_alert_input");
  }
  get sendHotelAlertButton() {
    return this.window.findChildByName("send_hotel_alert_btn");
  }
}
