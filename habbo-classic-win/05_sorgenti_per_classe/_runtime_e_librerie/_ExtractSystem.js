// Estratto da HabboAirLauncher.deobf.js, riga 13279.

class Bje {
        static {
          n(this, "_ExtractSystem");
        }
        constructor(e) {
          this._renderer = e;
        }
        _normalizeOptions(e, r = {}) {
          return e instanceof Ii || e instanceof Texture ? { target: e, ...r } : { ...r, ...e };
        }
        async image(e) {
          let r = yt.get().createImage();
          return ((r.src = await this.base64(e)), r);
        }
        async base64(e) {
          e = this._normalizeOptions(e, Bje.defaultImageOptions);
          let { format: r, quality: t } = e,
            i = this.canvas(e);
          if (i.toBlob !== void 0)
            return new Promise((s, o) => {
              i.toBlob(
                (d) => {
                  if (!d) {
                    o(new Error("ICanvas.toBlob failed!"));
                    return;
                  }
                  let c = new FileReader();
                  ((c.onload = () => s(c.result)), (c.onerror = o), c.readAsDataURL(d));
                },
                FSe[r],
                t,
              );
            });
          if (i.toDataURL !== void 0) return i.toDataURL(FSe[r], t);
          if (i.convertToBlob !== void 0) {
            let s = await i.convertToBlob({ type: FSe[r], quality: t });
            return new Promise((o, d) => {
              let c = new FileReader();
              ((c.onload = () => o(c.result)), (c.onerror = d), c.readAsDataURL(s));
            });
          }
          throw new Error(
            "Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented",
          );
        }
        canvas(e) {
          e = this._normalizeOptions(e);
          let r = e.target,
            t = this._renderer;
          if (r instanceof Texture) return t.texture.generateCanvas(r);
          let i = t.textureGenerator.generateTexture(e),
            s = t.texture.generateCanvas(i);
          return (i.destroy(!0), s);
        }
        pixels(e) {
          e = this._normalizeOptions(e);
          let r = e.target,
            t = this._renderer,
            i = r instanceof Texture ? r : t.textureGenerator.generateTexture(e),
            s = t.texture.getPixels(i);
          return (r instanceof Ii && i.destroy(!0), s);
        }
        texture(e) {
          return (
            (e = this._normalizeOptions(e)),
            e.target instanceof Texture ? e.target : this._renderer.textureGenerator.generateTexture(e)
          );
        }
        download(e) {
          e = this._normalizeOptions(e);
          let r = this.canvas(e),
            t = document.createElement("a");
          ((t.download = e.filename ?? "image.png"),
            (t.href = r.toDataURL("image/png")),
            document.body.appendChild(t),
            t.click(),
            document.body.removeChild(t));
        }
        log(e) {
          let r = e.width ?? 200;
          e = this._normalizeOptions(e);
          let i = this.canvas(e).toDataURL(),
            s = [
              "font-size: 1px;",
              `padding: ${r}px 300px;`,
              `background: url(${i}) no-repeat;`,
              "background-size: contain;",
            ].join(" ");
        }
        destroy() {
          this._renderer = null;
        }
      }
