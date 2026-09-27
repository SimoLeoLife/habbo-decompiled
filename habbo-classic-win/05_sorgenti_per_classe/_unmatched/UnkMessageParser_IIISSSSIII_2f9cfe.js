// Extracted from HabboAirLauncher.deobf.js, line 94361.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2f9cfefc9eab42

class {
    static {
      n(this, "UnkMessageParser_IIISSSSIII_2f9cfe");
    }
    static {
      eNr(this, "UnkMessageParser_IIISSSSIII_2f9cfe");
    }
    _r50170be80a69f8 = null;
    parse(e) {
      return (
        (this._r50170be80a69f8 = new class_3308()),
        (this._r50170be80a69f8._r57a9ad0f50f00a = e.readInteger() === 1),
        (this._r50170be80a69f8._rf742cf771d167a = e.readInteger()),
        (this._r50170be80a69f8.id = e.readInteger()),
        (this._r50170be80a69f8.ownerName = e.readString()),
        (this._r50170be80a69f8.type = e.readString()),
        (this._r50170be80a69f8.name = e.readString()),
        (this._r50170be80a69f8.description = e.readString()),
        (this._r50170be80a69f8._rd8567b4c1730f0 = e.readInteger() === 1),
        (this._r50170be80a69f8._rbfd77bfb985c45 = e.readInteger() === 1),
        (this._r50170be80a69f8._rdae22844561a78 = e.readInteger() === 1),
        !0
      );
    }
    flush() {
      return ((this._r50170be80a69f8 = null), !0);
    }
    get _r1ab5c9b07d1bac() {
      return this._r50170be80a69f8;
    }
  }
