// Extracted from HabboAirLauncher.deobf.js, line 132365.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib8dc6c9897c3cb

class a extends SelectableController {
  static {
    n(this, "UnkSelectableControllerSubclass_b8dc6c");
  }
  static TEXT_FIELD_NAME = "_CAPTION_TEXT";
  get caption() {
    return super.caption;
  }
  set caption(e) {
    super.caption = e;
    let r = this.getChildByName(a.TEXT_FIELD_NAME);
    r !== null && (r.caption = this.caption);
  }
  update(e, r) {
    if (e === this)
      switch (r.type) {
        case u.DOWN:
          this.isSelected && r.preventWindowOperation();
          break;
        case u.UP:
          this.isSelected ? this.unselect() : this.select();
          break;
      }
    return super.update(e, r);
  }
}
