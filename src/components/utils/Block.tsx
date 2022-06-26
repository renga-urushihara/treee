import styled, { CSSProperties } from "styled-components";

type CSS = CSSProperties;

const Block = styled.div<{ margin?: CSS["margin"]; padding?: CSS["padding"] }>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export default Block;
