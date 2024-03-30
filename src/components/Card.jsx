import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SingleCard = ({ prod }) => {
  const { title, description, img } = prod;
  console.log(prod);
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="accent">buy now</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
