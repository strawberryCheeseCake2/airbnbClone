import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 1rem 1.5rem 3rem 1.5rem;
  max-width: 25rem;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  //justify-content: center;
`;

export const CardInfoContainer = styled.div`
  width: 100%;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
`;

export const CardImgContainer = styled.div`
  width: 25rem;
  height: 24rem;
  position: relative;
  border-radius: 1.2rem;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const CardExcerpt = styled.p`
  font-size: 1.2rem;
`;
