// Extracted from HabboAirLauncher.deobf.js, line 45505.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if7e6bd9fbfb93a

class {
  static {
    n(this, "UnkClass_f7e6bd");
  }
  static get revision() {
    return INe;
  }
  static supports(e, r = "") {
    let t = _ida028ba87c6650(e);
    if (
      !t ||
      !Number.isSafeInteger(e.fontSize) ||
      e.fontSize <= 0 ||
      e.fontSize > 256 ||
      e.letterSpacing !== 0 ||
      !Number.isFinite(e.thickness) ||
      !Number.isFinite(e.sharpness) ||
      (e.antiAliasType !== "normal" && (e.antiAliasType !== "advanced" || e.gridFitType !== "pixel")) ||
      !["none", "pixel", "subpixel"].includes(e.gridFitType) ||
      (e.antiAliasType === "normal" && !t.font.fontKey.toLowerCase().includes("volter"))
    )
      return !1;
    for (let i = 0; i < r.length; i++) {
      let s = t.font.swfGlyphs.get(r.charCodeAt(i));
      if (!s || (s.hasInk && !t.font.profile.glyphs.has(r.charCodeAt(i)))) return !1;
    }
    return !0;
  }
  static measure(e, r) {
    if (!this.supports(r, e)) return null;
    let t = _ida028ba87c6650(r).font;
    return (r.antiAliasType === "normal" ? layoutNormalText : layoutNativeText)(t, e, r.fontSize, r.kerning).textWidth;
  }
  static _r90ee472f62f1e0(e, r) {
    if (!this.supports(r, e)) return null;
    let t = _ida028ba87c6650(r).font,
      i = (r.antiAliasType === "normal" ? layoutNormalText : layoutNativeText)(t, e, r.fontSize, r.kerning);
    return [...i.placements.map((s) => Math.floor(s.penX * 20) / 20), i.textWidth];
  }
  static metrics(e) {
    if (!this.supports(e)) return null;
    let r = _ida028ba87c6650(e).font.swfFont,
      t = Math.floor(((r.metrics.ascent * e.fontSize) / r.emSquare) * 20) / 20,
      i = Math.floor(((r.metrics.descent * e.fontSize) / r.emSquare) * 20) / 20,
      s = e.antiAliasType === "normal" && e.stageQuality !== "low" ? Math.round((t + 2) * 4) / 4 : roundTiesEven(t + 2);
    return { ascent: t, descent: i, lineGap: 0, lineHeight: t + i + e.leading, baseline: s - 2 };
  }
  static _rff2380c6592875(e) {
    return !e.italic || !this.supports(e)
      ? 0
      : e.antiAliasType === "advanced"
        ? Math.floor((e.fontSize * Math.fround(0.28) + Math.fround(1.04)) * 20) / 20
        : e.stageQuality === "low" && !_ida028ba87c6650(e).font.swfFont.flags?.italic
          ? Math.floor(e.fontSize * 0.8) / 2
          : 0;
  }
  static render(e, r) {
    if (!this.supports(r, e)) return null;
    let t = this.measure(e, r);
    if (t > 16384 || (t + 128) * (r.fontSize * 2 + 8) > 2 * 1024 * 1024) return null;
    let i = _ida028ba87c6650(r);
    return i.renderer.render(e, { ..._i34b6517314a3c4(r), rasterCache: i.rasterCache });
  }
  static _re8a0a4624d00b0(e, r, t) {
    let i = _ida028ba87c6650(r);
    i.renderer.render(e, { ..._i34b6517314a3c4(r), target: t, rasterCache: i.rasterCache });
  }
  static premultiply(e) {
    for (let r = 0; r < e.length; r += 4) {
      let t = e[r + 3];
      if (t !== 255) {
        if (t === 0) {
          e[r] = e[r + 1] = e[r + 2] = 0;
          continue;
        }
        ((e[r] = Math.round((e[r] * t) / 255)),
          (e[r + 1] = Math.round((e[r + 1] * t) / 255)),
          (e[r + 2] = Math.round((e[r + 2] * t) / 255)));
      }
    }
  }
  static _r02cbff7ef0bf66(e) {
    for (let r = 0; r < e.length; r += 4) {
      let t = e[r + 3];
      if (t !== 255) {
        if (t === 0) {
          e[r] = e[r + 1] = e[r + 2] = 0;
          continue;
        }
        ((e[r] = Math.min(255, Math.round((e[r] * 255) / t))),
          (e[r + 1] = Math.min(255, Math.round((e[r + 1] * 255) / t))),
          (e[r + 2] = Math.min(255, Math.round((e[r + 2] * 255) / t))));
      }
    }
  }
  static draw(e, r, t, i, s) {
    if (!this.supports(s, r)) return !1;
    if (!r) return !0;
    let o = JSON.stringify([INe, s, r]),
      d = f2.get(o);
    if (d) f2.delete(o);
    else {
      let c = this.render(r, s);
      if (!c) return !1;
      let f = _i295affcc6e4d03(c.width, c.height),
        l = _i5183d3213c4d99(f);
      if (!f || !l) return !1;
      let b = l.createImageData(c.width, c.height);
      (b.data.set(c.retainedPixels),
        this._r02cbff7ef0bf66(b.data),
        l.putImageData(b, 0, 0),
        (d = { surface: f, baseline: c.baseline, bytes: c.width * c.height * 4 }),
        (Pae += d.bytes));
    }
    for (
      f2.set(o, d), e.drawImage(d.surface, Math.round(t - 2), Math.round(i - d.baseline));
      Pae > S0r || f2.size > D0r;
    ) {
      let c = f2.entries().next().value;
      if (!c) break;
      (f2.delete(c[0]), (Pae -= c[1].bytes), (c[1].surface.width = c[1].surface.height = 1));
    }
    return !0;
  }
}
