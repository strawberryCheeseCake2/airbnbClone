import { React, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchRooms } from '../roomsSlice';

import Card from '../../../common/card/card.component';
import RoomCardPlaceholder from '../components/room-card-placeholder/room-card-placeholder.component';
import { RoomsContainer } from './rooms-screen.styles';

const RoomsScreen = () => {
  let categoryId = useParams().id - '0';

  const dispatch = useDispatch();
  const allRooms = useSelector(state => state.rooms.rooms);
  const roomsStatus = useSelector(state => state.rooms.status);
  const error = useSelector(state => state.rooms.error);
  const { fetchedCategories } = useSelector(state => state.rooms);

  const isInit = useRef(true);

  // useEffect(() => {
  //   //setCategoryChanged(true);
  //   console.log("changed!")
  // }, [clickedIconId])

  useEffect(() => {
    if (roomsStatus === "idle") {
      console.log("idle fetched room!!")
      dispatch(fetchRooms(categoryId));
      //setCategoryChanged(false)
    }
  }, [categoryId, roomsStatus, dispatch]);

  useEffect(() => {
    if (isInit.current) isInit.current = false;
    else {
      const everFetched = fetchedCategories.find((category) => category.id === categoryId);
      if (!everFetched) {
        dispatch(fetchRooms(categoryId));
      }
    }   
  }, [categoryId, dispatch, fetchedCategories]);
  // useEffect(() => {
  //   const fetchedCategory = fetchedCategories.find((category) => category === categoryId);
  //   // console.log(fetchedCategories)
  //   // console.log(fetchedCategory)
  //   if (roomsStatus === "idle" || (isCategoryChanged && !fetchedCategory)) {
  //     setCategoryChanged(false);

  //     console.log("fetched room!!")
  //     console.log(roomsStatus)
  //     console.log(fetchedCategories)
  //     console.log(isCategoryChanged)
  //     console.log(fetchedCategory)
  //     dispatch(fetchRooms(categoryId));
  //   }
  // }, [categoryId, roomsStatus, dispatch, isCategoryChanged, fetchedCategories, clickedIconId]);

  let content;
 
  if (roomsStatus === 'loading') {
    
    content = [...Array(10)].map(() => <RoomCardPlaceholder />);
  } else if (roomsStatus === 'succeeded') {
    const filteredRooms = allRooms.filter(room => room.category === categoryId);

    content = filteredRooms.map((room) => (
        <Card key={room.id} room={room} />
      )
    )
  } else if (roomsStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <>
      <RoomsContainer>
        {content}
      </RoomsContainer>
    </>
  )
}

export default RoomsScreen