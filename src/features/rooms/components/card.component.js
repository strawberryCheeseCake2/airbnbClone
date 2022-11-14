import { React, useState } from 'react'

import Like from "../../wishlists/components/like.component";

import { CardImg, CardContainer, CardImgContainer, CardInfoContainer, StyledLikeSvg, CardTitle, CardExcerpt } from './card.styles';

const Card = ({room}) => {
  const {id, location, price, src} = room;

  return (
    <>
      <CardContainer>
        <CardImgContainer>
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