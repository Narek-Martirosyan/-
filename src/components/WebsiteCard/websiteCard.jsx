import Card from 'react-bootstrap/Card';
import "./websiteCard.scss";

export const WebsiteCard = ({ img, title, text, url }) => {

    return (
        <Card className="bg-dark text-white mb-4" onClick={() => window.location.href = url}>
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}
