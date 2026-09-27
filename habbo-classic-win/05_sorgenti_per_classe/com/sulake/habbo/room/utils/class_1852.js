// Extracted from HabboAirLauncher.deobf.js, line 294661.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/utils/class_1852.as
// Obfuscated name: _i42d3ba6ab25577

class a {
  static {
    n(this, "class_1852");
  }
  static MANNEQUIN_MAGIC_X_OFFSET = 1;
  static MANNEQUIN_MAGIC_Y_OFFSET = -16;
  static AVATAR_WATER_EFFECT_MAGIC_Y_OFFSET = -52;
  static MAX_EXTERNAL_IMAGE_COUNT = 30;
  _re2f997a9fa2b04 = Number.NaN;
  _re966814484ec5c = 0;
  externalImageCount = 0;
  getFurniData(e, r, t, i) {
    let s = [],
      o = t,
      d = r.getSortableSpriteList(),
      c = o._r72017f94b908da?.(t.activeRoomId, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? [];
    for (let f of c) {
      if (f.getId() === i) continue;
      let b = f.getVisualization()?.getSpriteList() ?? null;
      if (b == null) continue;
      let _ = 0,
        h = 0;
      for (let m of d)
        if (m.name === `avatar_${f.getId()}`) {
          ((_ = m.z), (h = m.y + m.height - r.geometry.scale / 4));
          break;
        }
      let p = t.getRoomObjectScreenLocation(
        t.activeRoomId,
        f.getId(),
        RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
        r.getId(),
      );
      if (p != null) {
        h === 0 && (h = p.y);
        for (let m of b)
          ((m.x += p.x - r.screenOffsetX),
            (m.y += h),
            (m.z += _),
            (m.name.indexOf("h_std_fx29_") === 0 || m.name.indexOf("h_std_fx185_") === 0) &&
              (m.y += a.AVATAR_WATER_EFFECT_MAGIC_Y_OFFSET),
            d.push(m));
      }
    }
    ((d = this.addMannequinSprites(d, o)), d.sort(a._rcb1380717c0581));
    for (let f of d)
      f.name != null &&
        f.name.length > 0 &&
        f.name.indexOf("tile_cursor_") !== 0 &&
        a.isSpriteInViewPort(f, e, r) &&
        (i < 0 || f.objectId !== i) &&
        (s.push(this.getSpriteDataObject(f, e, r, o)),
        Number.isNaN(this._re2f997a9fa2b04) && (this._re2f997a9fa2b04 = f.z),
        this._re966814484ec5c++);
    return JSON.stringify(s);
  }
  addMannequinSprites(e, r) {
    let t = [];
    for (let i of e)
      if (i.objectType === "boutique_mannequin1" && i.name.indexOf("mannequin_") === 0) {
        let s = r._ra1f5cb56d0c2d8(r.activeRoomId, i.objectId, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
        if (s != null) {
          let o = s.getVisualization()?.getSpriteList() ?? null;
          if (o != null)
            for (let d of o)
              ((d.x += i.x + i.width / 2 + a.MANNEQUIN_MAGIC_X_OFFSET),
                (d.y += i.y + i.height + a.MANNEQUIN_MAGIC_Y_OFFSET),
                (d.z += i.z),
                t.push(d));
        }
      } else t.push(i);
    return t;
  }
  getRoomRenderingModifiers(e) {
    return JSON.stringify({});
  }
  getSpriteDataObject(e, r, t, i) {
    let s = { name: e.name, x: e.x - r.x + t.screenOffsetX, y: e.y - r.y + t.screenOffsetY, z: e.z },
      o = e.name,
      d = null;
    if (e.name.indexOf("@") !== -1) {
      let f = e.name.split("@");
      ((o = f[0]), (d = f[1] ?? null));
    }
    if (d != null && e.objectType) {
      let b =
        ((i._rd0c2eb43bcc755?._rded86a5ccab725(e.objectType) ?? null)?._rfe7eb06cea0213(d) ?? null)
          ?.attribute("source")
          .toString() ?? "";
      b && (s.paletteSourceName = b);
    }
    let c = i.configuration?.getProperty("image.library.url") ?? "";
    if (((o = o.replace("%image.library.url%", c)), o.indexOf("%group.badge.url%") !== -1)) {
      let f = a._r219baf21929b32(i.configuration?.getProperty("group.badge.url") ?? "");
      ((o = o.replace("%group.badge.url%", "")), (o = f.replace("%imagerdata%", o)));
    }
    return (
      (s.name = o),
      e.alpha && String(e.alpha) !== "255" && (s.alpha = e.alpha),
      e.flipH && (s.flipH = e.flipH),
      e.skew && (s.skew = e.skew),
      e.frame && (s.frame = e.frame),
      e.color && e.color.length > 0 && (s.color = Number.parseInt(e.color, 10)),
      e.blendMode && e.blendMode !== "normal" && (s.blendMode = e.blendMode),
      o.indexOf("http") === 0 &&
        ((s.width = e.width),
        (s.height = e.height),
        this.externalImageCount++,
        this.externalImageCount > a.MAX_EXTERNAL_IMAGE_COUNT && (s.name = "box")),
      e.posture && (s.posture = e.posture),
      s
    );
  }
  static _rcb1380717c0581(e, r) {
    return e.z < r.z ? 1 : (e.z > r.z, -1);
  }
  static isSpriteInViewPort(e, r, t) {
    return new D(e.x + t.screenOffsetX, e.y + t.screenOffsetY, e.width, e.height).intersects(r);
  }
  static _r219baf21929b32(e) {
    return e.replace(/\.gif(?=([?#].*)?$)/i, ".png");
  }
  makeBackgroundPlane(e, r, t) {
    let i = a.sortQuadPoints(new E(0, 0), new E(e.width, 0), new E(0, e.height), new E(e.width, e.height)),
      s;
    (t.length > 0
      ? ((s = t[0].z), Number.isNaN(this._re2f997a9fa2b04) || (s = Math.max(this._re2f997a9fa2b04, s)))
      : (s = Number.isNaN(this._re2f997a9fa2b04) ? 0 : this._re2f997a9fa2b04),
      (s += this._re966814484ec5c * 1.776104 + t.length * 2.31743));
    let o = new class_2481(null, r);
    return ((o.cornerPoints = i), (o.z = s), o);
  }
  _r32da55131530f4(e, r) {
    let t = new B(),
      i = 1;
    Number.isNaN(this._re2f997a9fa2b04) || (i += this._re2f997a9fa2b04);
    for (let d of e) t.add(d.uniqueId, { plane: d, z: i });
    let s = [...r.getPlaneSortableSprites()];
    (s.sort((d, c) => d.z - c.z), s.reverse());
    let o = [];
    for (let d of s) {
      let c = t.remove(d.sprite?.planeId ?? -1) ?? null;
      c != null && ((c.z = d.z), o.push(c));
    }
    return o.concat(t.getValues());
  }
  getRoomPlanes(e, r, t, i) {
    let s = [],
      d = t._ra1f5cb56d0c2d8(t.activeRoomId, -1, RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM)?.getVisualization();
    if (d != null) {
      let c = r.geometry,
        f = this._r32da55131530f4(d._ra883d98bc9c1f4, r),
        l = class_14.instance?.dispatchEvent?.stage ?? null,
        b = l?.stageWidth != null ? l.stageWidth / 2 : 0,
        _ = l?._rcc0ac91bd808af != null ? l._rcc0ac91bd808af / 2 : 0;
      for (let h of f) {
        let p = h.plane,
          m = [],
          v = p.location,
          w = p.rightSide,
          I = p.getScreenPoint;
        if (v == null || w == null || I == null) continue;
        let C = v,
          W = w,
          R = I,
          T = k.sum(C, W),
          S = k.sum(C, R),
          z = T != null ? k.sum(T, R) : null;
        if (T == null || S == null || z == null) continue;
        let K = c._r2c974b4bf77b84(C),
          $ = c._r2c974b4bf77b84(T),
          Y = c._r2c974b4bf77b84(S),
          oe = c._r2c974b4bf77b84(z);
        if (K == null || $ == null || Y == null || oe == null) continue;
        m.push(K, $, Y, oe);
        let be = 0,
          ye = 0;
        for (let pe of m)
          (pe.offset(b, _),
            pe.offset(r.screenOffsetX, r.screenOffsetY),
            pe.offset(-e.x, -e.y),
            pe.x < 0 ? be-- : pe.x >= e.width && be++,
            pe.y < 0 ? ye-- : pe.y >= e.height && ye++);
        if (Math.abs(be) === 4 || Math.abs(ye) === 4) continue;
        let ir = a.sortQuadPoints(K, $, Y, oe);
        for (let pe of p.getDrawingDatas(c)) ((pe.cornerPoints = ir), (pe.z = h.z), s.push(pe));
      }
      s.unshift(this.makeBackgroundPlane(e, i, s));
    }
    return s;
  }
  static sortQuadPoints(e, r, t, i) {
    let s = [e, r, t, i];
    return (
      e.x === r.x
        ? ((s[1] = t), (s[2] = r))
        : e.x === t.x
          ? ((s[1] = r), (s[2] = t))
          : (r.x < e.x && r.y > e.y) || (r.x > e.x && r.y < e.y)
            ? ((s[1] = t), (s[2] = r))
            : ((s[1] = r), (s[2] = t)),
      (s[3] = i),
      s[0].x < s[1].x && (([s[0], s[1]] = [s[1], s[0]]), ([s[2], s[3]] = [s[3], s[2]])),
      s[0].y < s[2].y && (([s[0], s[2]] = [s[2], s[0]]), ([s[1], s[3]] = [s[3], s[1]])),
      s
    );
  }
}
