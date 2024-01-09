
import { Container, Card, Row } from 'react-bootstrap';
import fantasyBooks from './json/fantasy.json';

let fantasy = fantasyBooks;
console.log(fantasy);

export default function Fantasybooks() {
    return (
        <Container>
            <h2 className='text-center my-3'>Fantasy</h2>
            <Row className='gap-3 justify-content-between'>
                {fantasy.map((book => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.img} />
                        {/* <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body> */}
                    </Card>
                )))}
            </Row>

        </Container>
    );
}