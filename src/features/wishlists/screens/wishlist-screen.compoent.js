import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchWishlist, } from '../wishlistSlice';

import TopHeader from '../../../infrastructure/header/top-header/top-header.component';
import Card from '../../../common/card/card.component';

import { WishlistScreenContainer, WishlistCardListContainer, WishlistMapContainer } from './wishlist-screen.styles';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlistItems);
  const wishlistStatus = useSelector(state => state.wishlist.status);
  const { error } = useSelector(state => state.wishlist);

  useEffect(() => {
    if (wishlistStatus === "idle" ) {
      dispatch(fetchWishlist());
    }
  }, [wishlistStatus, dispatch, wishlist]);

  let content;
 
  if (wishlistStatus === 'loading') {
    content = <h1>Loading</h1>
  } else if (wishlistStatus === 'succeeded') {
    content = wishlist.map((item) => (
        <Card room={item} cardSize={{width: "27rem", height: "26rem"}}/>
      )
    )
  } else if (wishlistStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <>
      <TopHeader />
      <WishlistScreenContainer>
        <WishlistCardListContainer>
          {content}
        </WishlistCardListContainer>
        <WishlistMapContainer>

        </WishlistMapContainer>
      </WishlistScreenContainer>
    </>
  )
}

export default WishlistScreen