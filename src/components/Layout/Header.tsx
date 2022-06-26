import styled from "styled-components";

type Props = {
  title: string;
};

function Header({ title }: Props) {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default Header;
