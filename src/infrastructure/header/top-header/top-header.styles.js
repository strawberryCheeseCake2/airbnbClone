import styled from "styled-components";

import { ReactComponent as Logo } from "../../../svgs/logo.svg";

export const TopHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem 1.5rem 5rem;
  border-bottom: 1px solid #ebecf0;
`;

export const AirbnbLogo = styled(Logo)`
  color: #ff5a60;
`;
