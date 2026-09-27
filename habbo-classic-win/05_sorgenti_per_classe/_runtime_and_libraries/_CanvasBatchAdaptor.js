// Extracted from HabboAirLauncher.deobf.js, line 21168.

class hv {
      static {
        n(this, "_CanvasBatchAdaptor");
      }
      static _getPatternRepeat(e, r) {
        let t = e && e !== "clamp-to-edge",
          i = r && r !== "clamp-to-edge";
        return t && i ? "repeat" : t ? "repeat-x" : i ? "repeat-y" : "no-repeat";
      }
      start(e, r, t) {}
      execute(e, r) {
        let t = r.elements;
        if (!t || !t.length) return;
        let i = e.renderer,
          s = i.canvasContext,
          o = s.activeContext;
        for (let d = 0; d < t.length; d++) {
          let c = t[d];
          if (!c.packAsQuad) continue;
          let f = c,
            l = f.texture,
            b = l ? La.getCanvasSource(l) : null;
          if (!b) continue;
          let _ = l.source.style,
            h = s.smoothProperty,
            p = _.scaleMode !== "nearest";
          (o[h] !== p && (o[h] = p), s.setBlendMode(r.blendMode));
          let m = i.globalUniforms.globalUniformData?.worldColor ?? 4294967295,
            v = f.color,
            w = ((m >>> 24) & 255) / 255,
            I = ((v >>> 24) & 255) / 255,
            C = i.filter?.alphaMultiplier ?? 1,
            W = w * I * C;
          if (W <= 0) continue;
          o.globalAlpha = W;
          let R = m & 16777215,
            T = v & 16777215,
            S = bgr2rgb(multiplyHexColors(T, R)),
            z = l.frame,
            K = _.addressModeU ?? _.addressMode,
            $ = _.addressModeV ?? _.addressMode,
            Y = hv._getPatternRepeat(K, $),
            oe = l.source._resolution ?? l.source.resolution ?? 1,
            be = f.renderable?.renderGroup?.isCachedAsTexture,
            ye = z.x * oe,
            ir = z.y * oe,
            pe = z.width * oe,
            lr = z.height * oe,
            wr = f.bounds,
            q = i.renderTarget.renderTarget.isRoot,
            de = wr.minX,
            Be = wr.minY,
            Ie = wr.maxX - wr.minX,
            ge = wr.maxY - wr.minY,
            rt = l.rotate,
            Kr = l.uvs,
            Ba = Math.min(Kr.x0, Kr.x1, Kr.x2, Kr.x3, Kr.y0, Kr.y1, Kr.y2, Kr.y3),
            Bn = Math.max(Kr.x0, Kr.x1, Kr.x2, Kr.x3, Kr.y0, Kr.y1, Kr.y2, Kr.y3),
            Zs = Y !== "no-repeat" && (Ba < 0 || Bn > 1),
            N5 = rt && !(!Zs && (S !== 16777215 || rt));
          N5
            ? (hv._tempPatternMatrix.copyFrom(f.transform),
              Ua.matrixAppendRotationInv(hv._tempPatternMatrix, rt, de, Be, Ie, ge),
              s.setContextTransform(hv._tempPatternMatrix, f.roundPixels === 1, void 0, be && q))
            : s.setContextTransform(f.transform, f.roundPixels === 1, void 0, be && q);
          let O5 = N5 ? 0 : de,
            v_ = N5 ? 0 : Be,
            H0 = Ie,
            V0 = ge;
          if (Zs) {
            let U0 = b,
              F5 = S !== 16777215 && !rt,
              q1 = z.width <= l.source.width && z.height <= l.source.height;
            F5 && q1 && (U0 = La.getTintedCanvas({ texture: l }, S));
            let wY = o.createPattern(U0, Y);
            if (!wY) continue;
            let kRe = H0,
              xFe = V0;
            if (kRe === 0 || xFe === 0) continue;
            let CFe = 1 / kRe,
              EFe = 1 / xFe,
              MFe = (Kr.x1 - Kr.x0) * CFe,
              WFe = (Kr.y1 - Kr.y0) * CFe,
              BFe = (Kr.x3 - Kr.x0) * EFe,
              AFe = (Kr.y3 - Kr.y0) * EFe,
              tnr = Kr.x0 - MFe * O5 - BFe * v_,
              anr = Kr.y0 - WFe * O5 - AFe * v_,
              TRe = l.source.pixelWidth,
              RRe = l.source.pixelHeight;
            (hv._tempPatternMatrix.set(MFe * TRe, WFe * RRe, BFe * TRe, AFe * RRe, tnr * TRe, anr * RRe),
              La.applyPatternTransform(wY, hv._tempPatternMatrix),
              (o.fillStyle = wY),
              o.fillRect(O5, v_, H0, V0));
          } else {
            let F5 = S !== 16777215 || rt ? La.getTintedCanvas({ texture: l }, S) : b,
              q1 = F5 !== b;
            o.drawImage(
              F5,
              q1 ? 0 : ye,
              q1 ? 0 : ir,
              q1 ? F5.width : pe,
              q1 ? F5.height : lr,
              O5,
              v_,
              H0,
              V0,
            );
          }
        }
      }
    }
