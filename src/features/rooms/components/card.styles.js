import styled from "styled-components";
import { ReactComponent as UnfilledLike } from "../../../svgs/like-icon-unfilled.svg";
import { ReactComponent as FilledLike } from "../../../svgs/like-icon-filled.svg";

export const CardContainer = styled.div`
  margin: 1rem 1.5rem 3rem 1.5rem;
  max-width: 25rem;
`;

export const CardInfoContainer = styled.div`

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
  border-radius: 2rem;
  margin-bottom: 1.5rem;
`;

export const StyledUnfilledLikeSvg = styled(UnfilledLike)`
  color: #FF5A60;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  // &:first-child {
  //   stroke: white; !important
  // }
  cursor: pointer;
`;

export const StyledFilledLikeSvg = styled(FilledLike)`
  color: #FF5A60;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  // &:first-child {
  //   stroke: white; !important
  // }
  cursor: pointer;
`;

export const CardTitle = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const CardExcerpt = styled.p`
  font-size: 1.2rem;
`;