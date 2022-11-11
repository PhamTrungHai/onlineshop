import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link href={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
          <Rating
            rating={product.rating}
            numbReviews={product.numbReviews}
          ></Rating>
          <Card.Text>{product.price} VND</Card.Text>
          <Button>Them vao gio hang</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Product;
