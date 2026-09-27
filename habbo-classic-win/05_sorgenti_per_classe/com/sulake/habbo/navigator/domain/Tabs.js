// Estratto da HabboAirLauncher.deobf.js, riga 252591.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/domain/Tabs.as
// Nome offuscato: _i157d1c6d90ac28

class a {
    constructor(e) {
      this._navigator = e;
      (this._re842dacc40aa7f.push(
        new Tab(
          this._navigator,
          a.EventsTabPageDecorator,
          a.const_486,
          new EventsTabPageDecorator(this._navigator),
          lFe,
        ),
      ),
        this._re842dacc40aa7f.push(
          new Tab(
            this._navigator,
            a.CategoriesTabPageDecorator,
            a.SEARCHTYPE_CATEGORIES,
            new _ia602bb6d74ab39(this._navigator),
            hEt,
          ),
        ),
        this._re842dacc40aa7f.push(
          new Tab(
            this._navigator,
            a._r3788a24f86509c,
            a._r84d8927b802156,
            new RoomsTabPageDecorator(this._navigator),
            lFe,
          ),
        ),
        this._re842dacc40aa7f.push(
          new Tab(
            this._navigator,
            a.OfficialTabPageDecorator,
            a.SEARCHTYPE_OFFICIALROOMS,
            new _i2c32c6bac91913(this._navigator),
            uEt,
          ),
        ),
        this._re842dacc40aa7f.push(
          new Tab(
            this._navigator,
            a.MyRoomsTabPageDecorator,
            a._r8a4642632c386a,
            new nme(this._navigator),
            lFe,
          ),
        ),
        this._re842dacc40aa7f.push(
          new Tab(
            this._navigator,
            a._r54c62c548aaab8,
            a.SEARCHTYPE_TEXT_SEARCH,
            new SearchTabPageDecorator(this._navigator),
            _Et,
          ),
        ),
        this._r18cd8a1aeaed88(a.EventsTabPageDecorator));
    }
    static {
      n(this, "Tabs");
    }
    static EventsTabPageDecorator = 1;
    static _r3788a24f86509c = 2;
    static MyRoomsTabPageDecorator = 3;
    static OfficialTabPageDecorator = 4;
    static _r54c62c548aaab8 = 5;
    static CategoriesTabPageDecorator = 6;
    static _r5eecec5fcdbfe8 = {
      popular: a._r3788a24f86509c,
      official: a.OfficialTabPageDecorator,
      me: a.MyRoomsTabPageDecorator,
      events: a.EventsTabPageDecorator,
      search: a._r54c62c548aaab8,
      categories: a.CategoriesTabPageDecorator,
    };
    static _r84d8927b802156 = 1;
    static _r67c29729e7800e = 2;
    static _rd6fb6dfca67725 = 3;
    static _r9f66f4bb0f69b3 = 4;
    static _r8a4642632c386a = 5;
    static _r94854e4c2ed9da = 6;
    static const_200 = 7;
    static SEARCHTYPE_TEXT_SEARCH = 8;
    static SEARCHTYPE_TAG_SEARCH = 9;
    static SEARCHTYPE_ROOM_NAME_SEARCH = 10;
    static SEARCHTYPE_OFFICIALROOMS = 11;
    static const_1020 = 12;
    static SEARCHTYPE_GROUP_NAME_SEARCH = 13;
    static SEARCHTYPE_GUILD_BASES = 14;
    static SEARCHTYPE_COMPETITION_ROOMS = 15;
    static const_486 = 16;
    static const_1233 = 17;
    static const_1090 = 18;
    static SEARCHTYPE_MY_GUILD_BASES = 19;
    static SEARCHTYPE_BY_OWNER = 20;
    static SEARCHTYPE_CATEGORIES = 21;
    static SEARCHTYPE_RECOMMENDED_ROOMS = 22;
    static const_1369 = 23;
    _re842dacc40aa7f = [];
    _r6cd82153c02770() {
      return this.getSelected()?.id === a.OfficialTabPageDecorator;
    }
    get tabs() {
      return this._re842dacc40aa7f;
    }
    _r18cd8a1aeaed88(e) {
      let r = this._r554ac914236787(e);
      r != null && (this._r04ebb7fa4855c2(), (r.selected = !0));
    }
    getSelected() {
      for (let e of this._re842dacc40aa7f) if (e.selected) return e;
      return null;
    }
    _r554ac914236787(e) {
      for (let r of this._re842dacc40aa7f) if (r.id === e) return r;
      return null;
    }
    _r04ebb7fa4855c2() {
      for (let e of this._re842dacc40aa7f) e.selected = !1;
    }
    static tabIdFromName(e, r) {
      return a._r5eecec5fcdbfe8[e] ?? r;
    }
  }
