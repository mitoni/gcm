import { atom } from "recoil";

export const mouseAtom = atom({
  key: "mouse",
  default: {
    x: 0,
    y: 0,
    active: false,
  },
});
