import { useRecoilState } from "recoil";
import { nodeMapper, replaceItemAtIndex } from "../../utils";
import Block from "../utils/Block";
import Button from "../utils/Button";
import { FlexItem, FlexRaw } from "../utils/Flex";
import Input from "../utils/Input";
import { dirNodes } from "./state";
import { DirNode } from "./types";

type Props = {
  item: DirNode;
};

/**
 * warning! item should not use as data object.
 *          use `nodes[index]` value instead.
 */
function Dir({ item }: Props) {
  const [nodes, setNodes] = useRecoilState(dirNodes);

  const index = nodes.findIndex((node) => node.id === item.id);

  const c = nodes[index];

  const onClickAdd = () => {
    const newNode = {
      id: nodes[nodes.length - 1].id + 1,
      name: "",
      isRoot: false,
      parent: c,
      children: [],
    };
    setNodes((prev) => [
      ...replaceItemAtIndex(prev, index, {
        ...c,
        children: [...c.children, newNode],
      }),
      newNode,
    ]);
  };

  const onClickDelete = () => {
    const removeNodeIds = nodeMapper(
      [c],
      (n) => n.id,
      (n) => n.children
    );
    const parentNodes = nodeMapper(
      [c],
      (n) => n.id,
      (n) => (n.parent ? [n.parent] : undefined)
    );
    const newList = nodes
      .filter((node) => !removeNodeIds.includes(node.id))
      .map((n) => {
        if (parentNodes.includes(n.id)) {
          const newNode = { ...n };
          newNode.children = newNode.children.filter(
            (n) => !removeNodeIds.includes(n.id)
          );
          return newNode;
        }
        return n;
      });
    setNodes(newList);
  };

  return (
    <>
      <FlexRaw>
        <FlexItem flex="60%">
          <Input />
        </FlexItem>
        <FlexItem flex="10%">
          <Button onClick={onClickAdd}>＋</Button>
          {!c.isRoot && <Button onClick={onClickDelete}>×</Button>}
        </FlexItem>
      </FlexRaw>
      <Block padding="0px 0px 0px 8px">
        {c.children.map((i) => (
          <Dir
            key={item.id.toString() + i.id.toString() + nodes.length.toString()}
            item={i}
          />
        ))}
      </Block>
    </>
  );
}

export default Dir;
