import { React, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchRooms } from '../roomsSlice';

import Card from '../components/card.component';
import { RoomsContainer } from './rooms-screen.styles';

const RoomsScreen = () => {
  let categoryId = useParams().id;

  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.rooms);
  const roomsStatus = useSelector(state => state.rooms.status);
  const error = useSelector(state => state.rooms.error);
  
  const isInit = useRef(true);
  const [isCategoryChanged, setCategoryChanged] = useState(false);

  useEffect(() => {
    if (isInit.current) isInit.current = false;
    else {
      setCategoryChanged(true);  
    }
    if (roomsStatus === "idle" || isCategoryChanged) {
      dispatch(fetchRooms(categoryId));
      setCategoryChanged(false);
    }
  }, [categoryId, roomsStatus, dispatch]);

  let content;
 
  if (roomsStatus === 'loading') {
    content = <h1>Loading</h1>
  } else if (roomsStatus === 'succeeded') {
    content = rooms.map((room) => (
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