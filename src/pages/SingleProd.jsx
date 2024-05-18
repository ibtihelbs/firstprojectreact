import { useParams } from "react-router-dom";

const SingleProd = () => {
  const param = useParams();
  const id = param.id;
  return <div>SinglePage {id}</div>;
};

export default SingleProd;
