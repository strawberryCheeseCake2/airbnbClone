import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import TopHeader from '../../../infrastructure/header/top-header/top-header.component';

import { fetchWishlist, 
  // toggleTriggerRerender
 } from '../wishlistSlice';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlistItems);
  const wishlistStatus = useSelector(state => state.wishlist.status);
  const { error } = useSelector(state => state.wishlist);
  
  const { shouldScreenRerender } = useSelector(state => state.wishlist);

  useEffect(() => {
    // if (wishlistStatus === "idle" || shouldScreenRerender) {
    if (wishlistStatus === "idle" ) {
      dispatch(fetchWishlist());
      //dispatch(toggleTriggerRerender());
    }
  }, [wishlistStatus, dispatch, wishlist, shouldScreenRerender]);

  let content;
 
  if (wishlistStatus === 'loading') {
    content = <h1>Loading</h1>
  } else if (wishlistStatus === 'succeeded') {
    content = wishlist.map((item) => (
        <div>
          <p>{item.location}</p>
        </div>
      )
    )
  } else if (wishlistStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <>
      <TopHeader />
      {content}
    </>
  )
}

export default WishlistScreen