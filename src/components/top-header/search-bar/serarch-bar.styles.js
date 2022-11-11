import styled from "styled-components";

import { ReactComponent as SearchButtonIconSrc } from "../../../assets/search-icon.svg";

export const SearchBarContainer = styled.div`
  background-color: white;
  height: 3.5rem;
  width: 30rem;
  border: 1px solid #BEBEBE;
  border-radius: 50px;
  box-shadow: 0 0 10px 3px #EBECF0;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SearchBarButton = styled.button`
  background-color: #FF5A60;
  width: 2.7rem;
  height: 2.7rem;
  border: none;
  border-radius: 100%;
  margin-left: 1rem;
`;

export const SearchBarButtonIcon = styled(SearchButtonIconSrc)`
  color: white;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  border: none;
  margin-left: 1rem;
  &::placeholder {
    font-size: 1.1rem;
  };
`;

export const SearchBarForm = styled.form`
  flex: 1;
  display: flex;
  padding: 0.7rem;
`