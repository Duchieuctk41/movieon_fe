import React  from "react";
import "./Rating.scss";
import {ratingApi} from "actions"
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSlice";

const Rating = ({movieId}) => {
  const [listRating, setListRating] = React.useState([1,2,3,4,5])
  const user = useSelector(selectCurrentUser);

const  handleClickRating = (e) => {
  const data = {
    "rating": e,
    "movie_id": movieId,
    "user_id": user.id,
  }
  console.log(data);
  ratingApi.createOrUpdateRating(data)
}

  return (
    <div className="rating">
      {listRating.map(element => <span key={element} onClick={()=>handleClickRating(element)}>{element}</span>)}
    </div>
      
  )
}

export default Rating;