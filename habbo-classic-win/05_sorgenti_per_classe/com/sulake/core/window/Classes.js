// Extracted from HabboAirLauncher.deobf.js, line 141689.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/Classes.as
// Obfuscated name: _i72694c56ca5a76

class {
  static {
    n(this, "Classes");
  }
  static var_28 = null;
  static init() {
    this.var_28 == null &&
      (this.var_28 = new Map([
        [class_2090.const_333, st],
        [class_2090.const_450, ActivatorController],
        [class_2090.const_583, UnkClass_2ca70a],
        [class_2090.WINDOW_TYPE_BORDER, BorderController],
        [class_2090.WINDOW_TYPE_BOXSIZER, UnkContainerControllerSubclass_b61cf9],
        [class_2090.const_381, BubbleController],
        [class_2090.const_1028, st],
        [class_2090.WINDOW_TYPE_BUBBLE_POINTER_RIGHT, st],
        [class_2090.const_940, st],
        [class_2090.const_892, st],
        [class_2090.const_1305, kc],
        [class_2090.WINDOW_TYPE_BUTTON_THICK, kc],
        [class_2090.const_609, ISelectableWindow],
        [class_2090.WINDOW_TYPE_BUTTON_GROUP_CENTER, ISelectableWindow],
        [class_2090.WINDOW_TYPE_BUTTON_GROUP_RIGHT, ISelectableWindow],
        [class_2090.const_213, sf],
        [class_2090.WINDOW_TYPE_BITMAP_WRAPPER, class_2116],
        [class_2090.const_1039, rhe],
        [class_2090.WINDOW_TYPE_CONTAINER, ContainerController],
        [class_2090.const_675, ContainerButtonController],
        [class_2090.const_1381, UnkInterface_d7a996],
        [class_2090.WINDOW_TYPE_DISPLAY_OBJECT_WRAPPER, DisplayObjectWrapperController],
        [class_2090.WINDOW_TYPE_DRAGBAR, class_1936],
        [class_2090.WINDOW_TYPE_DROPMENU, ohe],
        [class_2090.const_696, UnkClass_976f61],
        [class_2090.WINDOW_TYPE_DROPLIST, class_2496],
        [class_2090.const_1042, DropListItemController],
        [class_2090.const_293, UnkClass_8b726c],
        [class_2090.WINDOW_TYPE_FRAME, oj],
        [class_2090.const_1362, Qb],
        [class_2090.WINDOW_TYPE_HEADER, fhe],
        [class_2090.WINDOW_TYPE_HTML, cj],
        [class_2090.const_1172, IconController],
        [class_2090.const_336, UnkInterface_0a87a0],
        [class_2090._r60db056b5bffe9, ItemListController],
        [class_2090.WINDOW_TYPE_ITEMLIST_HORIZONTAL, ItemListController],
        [class_2090._rb5e71f1a68d5e0, ItemListController],
        [class_2090.WINDOW_TYPE_ITEMGRID, ItemGridController],
        [class_2090.WINDOW_TYPE_ITEMGRID_HORIZONTAL, ItemGridController],
        [class_2090.WINDOW_TYPE_ITEMGRID_VERTICAL, ItemGridController],
        [class_2090.const_277, zhe],
        [class_2090.const_1191, TextLinkController],
        [class_2090.const_1114, UnkClass_264c01],
        [class_2090.const_326, Nhe],
        [class_2090.const_1384, E8],
        [class_2090.WINDOW_TYPE_SCALER, UnkInterface_7761fa],
        [class_2090.WINDOW_TYPE_SCROLLBAR_HORIZONTAL, mq],
        [class_2090.WINDOW_TYPE_SCROLLBAR_VERTICAL, mq],
        [class_2090.const_279, kc],
        [class_2090.const_879, kc],
        [class_2090.const_560, kc],
        [class_2090.WINDOW_TYPE_SCROLLBAR_SLIDER_BUTTON_RIGHT, kc],
        [class_2090.WINDOW_TYPE_SCROLLBAR_SLIDER_BAR_HORIZONTAL, class_1936],
        [class_2090.WINDOW_TYPE_SCROLLBAR_SLIDER_BAR_VERTICAL, class_1936],
        [class_2090.WINDOW_TYPE_SCROLLBAR_SLIDER_TRACK_HORIZONTAL, st],
        [class_2090.WINDOW_TYPE_SCROLLBAR_SLIDER_TRACK_VERTICAL, st],
        [class_2090.WINDOW_TYPE_SCROLLABLE_ITEMLIST_VERTICAL, UnkClass_d49a29],
        [class_2090.WINDOW_TYPE_SCROLLABLE_ITEMGRID_VERTICAL, UnkClass_4cc4da],
        [class_2090.WINDOW_TYPE_SELECTOR, UnkClass_590fab],
        [class_2090.WINDOW_TYPE_SELECTOR_LIST, UnkClass_de6bfb],
        [class_2090.WINDOW_TYPE_SHAPE_WRAPPER, n1],
        [class_2090.WINDOW_TYPE_STROKE, Xl],
        [class_2090.WINDOW_TYPE_STATIC_BITMAP_WRAPPER, StaticBitmapWrapperController],
        [class_2090.const_1271, Ghe],
        [class_2090.const_944, TabContainerButtonController],
        [class_2090.WINDOW_TYPE_TAB_CONTENT, ContainerController],
        [class_2090.const_706, jhe],
        [class_2090.WINDOW_TYPE_TAB_SELECTOR, UnkClass_de6bfb],
        [class_2090.const_849, r1],
        [class_2090.const_331, Tp],
        [class_2090.const_629, UnkClass_6ee1e1],
        [class_2090.WINDOW_TYPE_WIDGET, WidgetWindowController],
      ]));
  }
  static getWindowClassByType(e) {
    return this.var_28?.get(e) ?? null;
  }
}
