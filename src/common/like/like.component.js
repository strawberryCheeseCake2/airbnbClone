import { React, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledUnfilledLikeSvg as Unfilled,
  StyledFilledLikeSvg as Filled,
} from "./like.styles";
import {
  fetchWishlist,
  addNewItemToWishlist,
  removeItemFromWishlist,
  deletedItemFromWishlist,
  // toggleTriggerRerender
} from "../../features/wishlists/wishlistSlice";

const Like = ({ item }) => {
  const { id } = item;
  const itemId = id;

  const [isItemInWishlist, setIsItemInWishlist] = useState(false);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const [removeRequestStatus, setRemoveRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const wishlistStatus = useSelector((state) => state.wishlist.status);

  useEffect(() => {
    if (wishlistStatus === "idle") {
      dispatch(fetchWishlist());
      //console.log(wishlistItems) -> why empty array?
    }
  }, [wishlistStatus, dispatch, wishlistItems]);

  useEffect(() => {
    const foundItem = wishlistItems.find(
      (itemInList) => itemInList.id === itemId
    );

    if (foundItem) {
      // console.log(wishlistItems)
      // console.log(`found item! : ${foundItem.id} Fill Heart!`)
      setIsItemInWishlist(true);
    } else setIsItemInWishlist(false);
  }, [itemId, wishlistItems]);

  const onLikeClickAdd = async () => {
    try {
      setAddRequestStatus("pending");
      await dispatch(addNewItemToWishlist(item)).unwrap();
      setIsItemInWishlist(true);
    } catch (err) {
      console.error("Failed to save the post: ", err);
    } finally {
      setAddRequestStatus("idle");

      //dispatch(toggleTriggerRerender());
    }
  };

  const onLikeClickDelete = async () => {
    try {
      setRemoveRequestStatus("pending");
      await dispatch(removeItemFromWishlist(item)).unwrap();
      dispatch(deletedItemFromWishlist(item.id)); // why not refetch automatically?
      setIsItemInWishlist(false);
    } catch (err) {
      console.error("Failed to delete the item: ", err);
    } finally {
      setAddRequestStatus("idle");

      //dispatch(toggleTriggerRerender());
    }
  };

  return (
    <>
      {/* <StyledikeSvg onClick={onLikeClick}/> */}
      {isItemInWishlist ? (
        <Filled onClick={onLikeClickDelete} />
      ) : (
        <Unfilled onClick={onLikeClickAdd} />
      )}
    </>
  );
};

export default Like;
