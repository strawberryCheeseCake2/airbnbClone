import styled from "styled-components";
import { ReactComponent as UnfilledLike } from "../../svgs/like-icon-unfilled.svg";
import { ReactComponent as FilledLike } from "../../svgs/like-icon-filled.svg";

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