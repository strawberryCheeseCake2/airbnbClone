import { React } from 'react'

import Like from "../like/like.component";

import { CardImg, CardContainer, CardImgContainer, CardInfoContainer, CardTitle, CardExcerpt } from './card.styles';

const Card = ({room, cardSize}) => {
  const { location, price, src } = room;

  return (
    <>
      <CardContainer>
        <CardImgContainer style={cardSize}>
          <CardImg alt={`${location} placeholder`} src={src}/>
          <Like item={room}/>
        </CardImgContainer>
        <CardInfoContainer>
          <CardTitle>{location}</CardTitle>
          <CardExcerpt>${price}</CardExcerpt>
        </CardInfoContainer>
      </CardContainer>
    </>
  )
}

export default Card