export type DirNode = {
  id: number;
  name: string;
  parent: DirNode | undefined;
  isRoot: boolean;
  children: DirNode[];
};
