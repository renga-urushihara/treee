import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Content from "../Layout/Content";
import Dir from "./Dir";
import { dirNodes } from "./state";

function Explore() {
  const nodes = useRecoilValue(dirNodes);

  return (
    <Content>
      <Root>
        {nodes
          .filter((dir) => dir.isRoot)
          .map((dir) => (
            <Dir key={dir.id.toString() + nodes.length.toString()} item={dir} />
          ))}
      </Root>
    </Content>
  );
}

const Root = styled.div`
  display: block;
  width: 100%;
  margin-left: 10px;
`;

export default Explore;
