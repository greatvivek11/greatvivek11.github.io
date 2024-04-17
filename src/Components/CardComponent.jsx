import { Card } from "react-bootstrap";
import '../styles/cardComponent.css';

function CardComponent(props) {
    const image = props.image;
    const imageSm = props.imageSm;
    const title = props.title;
    return (
        <Card className="card">
            <Card.Img className="cardImg" variant="top" src={image} srcSet={imageSm+' 480w,'+image+' 1080w'} alt="SkillImage"  />
            <Card.Body className="cardBody" >
                <Card.Title className="cardTitle">{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardComponent
