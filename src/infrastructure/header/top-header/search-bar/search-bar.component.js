import React from "react";

import {
  SearchBarContainer,
  SearchBarButton,
  SearchBarButtonIcon,
  SearchBarInput,
  SearchBarForm,
} from "./serarch-bar.styles";

const SearchBar = () => {
  return (
    <>
      <SearchBarContainer>
        <SearchBarForm id="form">
          <SearchBarInput
            type="search"
            id="query"
            name="q"
            placeholder="Where do you want to go?"
          />
          <SearchBarButton>
            <SearchBarButtonIcon
              width="32px"
              height="32px"
              viewBox="-13 6 22 22"
            />
          </SearchBarButton>
        </SearchBarForm>
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
