import styled from "styled-components";

export const WishlistScreenContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const WishlistCardListContainer = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1.5rem 3rem 1.5rem 3rem;
  justify-items: center;
`;

export const WishlistMapContainer = styled.div`
  flex: 4;
  background-color: white;
`;