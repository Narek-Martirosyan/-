import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

export default function OneCard({ img, title, text, url }) {
    const navigate = useNavigate();
    return (
        <Card
            bg='dark'
            style={{ width: '18rem', boxShadow: '0 0 10px blue' }}
            className='p-2 my-3 mx-3'
            onClick={() => navigate(url)}
        >
            <Card.Img
                variant="top"
                src={img}
                style={{ boxShadow: '0 0 2px blue' }}
            />
            <Card.Body className='d-flex flex-column justify-content-end'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button
                    variant="outline-primary"
                    style={{ cursor: 'none' }}
                    onClick={() => navigate(url)}
                >Click to watch<ExitToAppIcon /></Button>
            </Card.Body>
        </Card>
    );
}
