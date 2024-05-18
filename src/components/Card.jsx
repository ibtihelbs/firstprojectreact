import { Link } from "react-router-dom";

const SingleCard = ({ prod }) => {
  const { title, img } = prod;
  return (
    <div>
      <Link to={`prod/${title}`}>
        <img
          className="inline h-60 w-full object-cover"
          src={img}
          alt={title}
        />
      </Link>
      <div className="flex justify-between py-4">
        <h1>{title}</h1>
        <button className="bg-red-500 py-1 px-2 ">cart</button>
      </div>
    </div>
  );
};

export default SingleCard;
