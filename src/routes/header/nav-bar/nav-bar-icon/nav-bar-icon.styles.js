import styled from "styled-components";

export const NavBarIconImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const NavBarIconContainer = styled.div`
  opacity: 0.4;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBarIconName = styled.p`
  color: black;
`;