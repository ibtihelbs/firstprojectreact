const SingleCard = ({ prod }) => {
  const { title, description, img } = prod;
  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleCard;
