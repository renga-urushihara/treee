import styled from "styled-components";

export const Flex = styled.div`
  display: Flex;
`;

export const FlexRaw = styled(Flex)`
  flex-direction: row;
`;

export const FlexItem = styled.div<{ flex: string }>`
  flex: ${(props) => props.flex};
`;
