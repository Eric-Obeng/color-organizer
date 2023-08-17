
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import "../App.css";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5, selectedStars = 0, onRate = f => f }) => {
  return (
    <div>

      <div className="stars" >
        {createArray(totalStars).map((n, i) => (
          <Star
            className="stars"
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>
      <h3>
        {selectedStars} of {totalStars} stars
      </h3>
    </div>
  );
};

export default StarRating;
