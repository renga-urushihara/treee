import styled from "styled-components";

const Button = styled.button<{ size?: "small" | "large" }>`
  display: inline-block;
  background-color: #fff;
  border: solid #d6d6d6;
  border-radius: 5px;
  border-width: 1px 1px 3px;
  box-sizing: border-box;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  outline: none;
  padding: 1em;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: 0.1s ease-in-out;
  vertical-align: middle;
  line-height: 1.2;
  font-size: ${(props) => (props.size === "small" ? "12px" : "16px")};
  padding: 0.5em;
`;

export default Button;
