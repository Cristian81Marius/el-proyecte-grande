import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function ChangedInfo() {
    const myImageStyle = { width: '500px', height: '800px' };
    const classImage = "d-block w-100 rounded"
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
        rounded={true}
          className={classImage}
          style={myImageStyle}
          src="https://blogs.biomedcentral.com/on-health/wp-content/uploads/sites/8/2019/03/AdobeStock_115660297-e1552318432884.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
        <Card
          bg='info'
          text="dark"
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>Lasa sanatatea celor bolnavi in seama noastra</Card.Title>
            <Card.Text>Asiguram servicii de calitate si seriozitate, cu sanatatea nu ne putem juca. </Card.Text>
          </Card.Body>
        </Card>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classImage}
          style={myImageStyle}
          src="https://eufordigital.eu/wp-content/uploads/2019/08/ehealth.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>

        <Card
          bg='info'
          text="dark"
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>Asigura-te ca cei care iti ofera sfaturi sunt profesionisti</Card.Title>
            <Card.Text>Medicii sunt specializati si dornici sa te indrume pentru a o lua pe drumul cel bun.
            Angajatii au dorinta de a te sprijini cand consideri ca ai nevoie de orice fel de ajutor</Card.Text>
          </Card.Body>
        </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classImage}
          style={myImageStyle}
          src="https://eqchomecare.com/wp-content/uploads/2021/05/inhomecare-post-eqc2-1170x585.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <Card
          bg='info'
          text="dark"
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>Impartaseste gandurile tale cu comunitatea noastra</Card.Title>
            <Card.Text>Fiecare abonat are posibilitatea de a socializa cu ceilalti utilizatori
            pentru un sprijin reciproc </Card.Text>
          </Card.Body>
        </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ChangedInfo;