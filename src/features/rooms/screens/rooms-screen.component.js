import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchRooms } from "../roomsSlice";

import Card from "../../../common/card/card.component";
import RoomCardPlaceholder from "../components/room-card-placeholder/room-card-placeholder.component";
import { RoomsContainer } from "./rooms-screen.styles";

const RoomsScreen = () => {
  let categoryId = useParams().id - "0";

  const dispatch = useDispatch();
  const allRooms = useSelector((state) => state.rooms.rooms);
  const roomsStatus = useSelector((state) => state.rooms.status);
  const error = useSelector((state) => state.rooms.error);
  const { fetchedCategories } = useSelector((state) => state.rooms);

  const isInit = useRef(true);

  useEffect(() => {
    if (roomsStatus === "idle") {
      console.log("idle fetched room!!");
      dispatch(fetchRooms(categoryId));
    }
  }, [categoryId, roomsStatus, dispatch]);

  useEffect(() => {
    if (isInit.current) isInit.current = false;
    else {
      const everFetched = fetchedCategories.find(
        (category) => category.id === categoryId
      );
      if (!everFetched) {
        dispatch(fetchRooms(categoryId));
      }
    }
  }, [categoryId, dispatch, fetchedCategories]);

  let content;

  if (roomsStatus === "loading") {
    content = [...Array(10)].map(() => <RoomCardPlaceholder />);
  } else if (roomsStatus === "succeeded") {
    const filteredRooms = allRooms.filter(
      (room) => room.category === categoryId
    );

    content = filteredRooms.map((room) => <Card key={room.id} room={room} />);
  } else if (roomsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <RoomsContainer>{content}</RoomsContainer>
    </>
  );
};

export default RoomsScreen;
