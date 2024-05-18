import { Link } from "react-router-dom";

const SingleCard = ({ prod }) => {
  const { title, description, img } = prod;
  return (
    <div>
      <Link to={`prod/${title}`}>
        <img src={img} alt={title} />
      </Link>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleCard;
