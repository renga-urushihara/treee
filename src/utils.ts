export function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function nodeMapper<T, E>(
  nodes: T[],
  mapper: (n: T) => E,
  flatten: (n: T) => T[] | undefined
) {
  function flat(n: T): T[] {
    const f: T[] = [n];
    const result = flatten(n);
    if (result === undefined) {
      return f;
    }
    return f.concat([...result].flatMap((n2) => flat(n2)));
  }
  return nodes.flatMap((n) => flat(n)).map(mapper);
}
