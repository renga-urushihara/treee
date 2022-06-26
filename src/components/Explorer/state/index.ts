import { atom } from "recoil";
import { DirNode } from "../types";

const DEFAULT_NODE: DirNode = {
  id: 0,
  name: "",
  isRoot: true,
  parent: undefined,
  children: [],
};

export const dirNodes = atom<DirNode[]>({
  key: "dirs",
  default: [DEFAULT_NODE],
});
