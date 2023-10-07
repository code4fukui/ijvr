import * as eg from "https://js.sabae.cc/egvr.js";

const ichigojamfont = await (await fetch("https://ichigojam.github.io/ichigojam-font/ichigojam-font.json")).json();

export const textIJ = (s, x, y, z, size = .1, color = "white", parent) => {
  const grp = eg.group(x, y, z);
  let ox = -(s.length * size * 8) / 2;
  for (let k = 0; k < s.length; k++) {
    const ptn = ichigojamfont[s.charCodeAt(k)];
    for (let j = 0; j < 16; j += 2) {
      const n = parseInt(ptn.substring(j, j + 2), 16);
      for (let i = 0; i < 8; i++) {
        const m = (n >> (7 - i)) & 1;
        if (m) {
          eg.box(ox + i * size, (7 - j / 2) * size, 0, size, color, grp);
        }
      }
    }
    ox += size * 8;
  }
  const p = parent === undefined ? eg.scene : parent;
  if (p) {
    p.appendChild(grp);
  }
  return grp;
};

export const scene = eg.scene;
export const box = eg.box;
export const sphere = eg.sphere;
export const line = eg.line;
export const model = eg.model;
export const text = eg.text;
export const image = eg.image;
export const sky = eg.sky;
export const hsl = eg.hsl;
export const camera = eg.camera;
export const group = eg.group;
export const sleep = eg.sleep;
export const isNear = eg.isNear;
export const cls = eg.cls;
