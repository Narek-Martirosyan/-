import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export function ArticlesCard({ title, text, url }) {
    const navigate = useNavigate();

    return (
        <Card
            bg='dark'
            style={{ width: '18rem', boxShadow: '0 0 10px blue' }}
            onClick={() => navigate(url)}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Card.Link onClick={() => navigate(url)}>Read article</Card.Link>
            </Card.Body>
        </Card>
    );
}
