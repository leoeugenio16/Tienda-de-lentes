import LOGO from "../imagenes/TIPO_DE_LENTES/OZONO/LOGO ADENTRO.png";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ARTOZ7156 from "../imagenes/TIPO_DE_LENTES/OZONO/ARTOZ7156.png"
import ARTOZ7158 from "../imagenes/TIPO_DE_LENTES/OZONO/ARTOZ7158.png"
import ARTOZ7161 from "../imagenes/TIPO_DE_LENTES/OZONO/ARTOZ7161.png";
import ARTOZ414 from "../imagenes/TIPO_DE_LENTES/OZONO/ARTOZ414.png";
import ARTOZ9027 from "../imagenes/TIPO_DE_LENTES/OZONO/ARTOZ9027.png";
import ARTOZ7033 from "../imagenes/TIPO_DE_LENTES/OZONO/ARTOZ7033.png";
import Matt1201 from "../imagenes/TIPO_DE_LENTES/MATT/Matt - 1201.png";

const Ozono = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-logomatt" src={LOGO} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                ART.: OZ7156
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                ART.: OZ7158
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                ART.: OZ7161
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                ART.: OZ414
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                ART.: OZ9027
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                ART.: OZ7033
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={ARTOZ7156} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Armazon de metal con lentes Polarizados</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={ARTOZ7158} />
                    <Card.Body>
                      <Card.Title>MARRON</Card.Title>
                      <Card.Text>Armazon de metal con lentes Polarizados</Card.Text>
                    </Card.Body>
                  </Card>

                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={ARTOZ7161} />
                    <Card.Body>
                      <Card.Title>NEGROS</Card.Title>
                      <Card.Text>Armazon de metal con lentes Polarizados</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={ARTOZ414} />
                    <Card.Body>
                      <Card.Title>DORADO</Card.Title>
                      <Card.Text>Armazon de metal con lentes Polarizados</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img src={ARTOZ9027} />
                    <Card.Body>
                      <Card.Title>ROJOS</Card.Title>
                      <Card.Text>Armazon de metal con lentes Polarizados</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img  src={ARTOZ7033} />
                    <Card.Body>
                      <Card.Title>DORADO</Card.Title>
                      <Card.Text>Armazon de metal con lentes Polarizados</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Ozono;
