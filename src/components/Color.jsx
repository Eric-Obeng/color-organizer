/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

const Color = ({ id, title, color, rating, onRemove = f => f, onRate = f => f }) => {
  return (
    <section className="stars-div">
      <div className="title">
        <h1>{title}</h1>
        <button onClick={() => onRemove(id)} title="remove color">
          <FaTrash />
        </button>
      </div>

      <div style={{ height: 35, backgroundColor: color }} />
      <StarRating 
        selectedStars={rating} 
        onRate={rating => onRate(id, rating)}
      />
    </section>
  );
};

export default Color;
