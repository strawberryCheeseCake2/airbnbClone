import React from "react";

import {
  RoomCardPlaceholderContainer,
  RoomCardPlaceholderDivImg,
  RoomCardPlaceholderDivLong,
  RoomCardPlaceholderDivShort,
} from "./room-card-placeholder.styles";

const RoomCardPlaceholder = () => {
  return (
    <>
      <RoomCardPlaceholderContainer>
        <RoomCardPlaceholderDivImg />
        <RoomCardPlaceholderDivLong />
        <RoomCardPlaceholderDivShort />
      </RoomCardPlaceholderContainer>
    </>
  );
};

export default RoomCardPlaceholder;
