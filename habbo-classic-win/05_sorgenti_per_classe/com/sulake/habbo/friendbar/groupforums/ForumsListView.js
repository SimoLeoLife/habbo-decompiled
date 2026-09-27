// Extracted from HabboAirLauncher.deobf.js, line 204909.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/ForumsListView.as
// Obfuscated name: _ia5ff58566a5229

class {
  static {
    n(this, "ForumsListView");
  }
  var_63;
  var_157;
  var_122;
  var_4246;
  _forums;
  constructor(e, r, t) {
    ((this.var_157 = e),
      (this.var_63 = this.var_157.controller),
      (this.var_122 = r),
      (this.var_4246 = this.var_63.windowManager.buildFromXML(
        this.var_63.assets.getAssetByName("groupforum_forum_list_item_xml")?.content,
      )),
      (this._forums = t));
  }
  update() {
    this.var_122.invalidate();
    for (let e = 0; e < this._forums.length; e++) {
      let r = this._forums[e],
        t = this.var_4246.clone();
      ((t.name = "forum_" + r.groupId), this.updateListItem(t, r, e), this.var_122.addListItem(t));
    }
    this.updateItemWidths();
  }
  updateListItem(e, r, t) {
    let i = e;
    i.color = (t + 1) % 2 ? 4293852927 : 4289914618;
    let s = r.unreadMessages,
      o = i.findChildByName("texts_container");
    o.id = r.groupId;
    let d = i.findChildByName("header");
    ((d.bold = s > 0),
      (d.text = r.name),
      (o = i.findChildByName("header_region")),
      (o.id = r.groupId),
      o.removeEventListener(u.CLICK, this._rcceb489aa9bf9f),
      o.addEventListener(u.CLICK, this._rcceb489aa9bf9f),
      (o = i.findChildByName("details")),
      (o.caption = this.var_63.localizationManager.getLocalizationWithParams(
        "groupforum.view.forum_details",
        "",
        "rating",
        String(r.leaderboardScore),
        "last_author_id",
        String(r.lastMessageAuthorId),
        "last_author_name",
        r.lastMessageAuthorName,
        "update_time",
        this.var_157.getAsDaysHoursMinutes(r.lastMessageTimeAsSecondsAgo),
      )),
      (o = i.findChildByName("unread_texts_container")),
      (o.id = r.groupId),
      (o = i.findChildByName("unread_region")),
      (o.id = r.groupId),
      o.removeEventListener(u.CLICK, this._rcceb489aa9bf9f),
      o.addEventListener(u.CLICK, this._rcceb489aa9bf9f),
      (d = i.findChildByName("messages1")),
      (d.bold = s > 0),
      (d.text = this.var_63.localizationManager.getLocalizationWithParams(
        "groupforum.view.thread_details1",
        "",
        "total_messages",
        String(r.totalMessages),
        "new_messages",
        String(s),
      )),
      (d = i.findChildByName("messages2")),
      (d.bold = s > 0),
      (d.text = this.var_63.localizationManager.getLocalizationWithParams(
        "groupforum.view.thread_details2",
        "",
        "total_messages",
        String(r.totalMessages),
        "new_messages",
        String(s),
      )));
    let f = i.findChildByName("group_icon").widget;
    ((f.badgeId = r.icon), (f.groupId = r.groupId), (f.type = Wo.GROUP));
  }
  updateItemWidths() {
    for (let e = 0; e < this.var_122.numListItems; e++)
      this.var_122.getListItemAt(e).width = this.var_122._rce8584c5e61b53.width - 2;
  }
  _rcceb489aa9bf9f = n((e) => {
    this.var_63.openGroupForum(e.target.id | 0);
  }, "_rcceb489aa9bf9f");
}
