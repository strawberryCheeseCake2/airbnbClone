import styled from "styled-components";

export const RoomsContainer = styled.div`
  flex: 1;
  padding: 1.5rem 5rem 1.5rem 5rem;
  display: grid;

  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
