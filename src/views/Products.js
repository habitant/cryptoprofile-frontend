import React from "react";
import Icon from "react-crypto-icons";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Products() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col>
                    <div className="card-image">
                        <img
                        alt="..."
                        src={
                            require("assets/img/products/beef.jpg")
                            .default
                        }
                        ></img>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="headers">
                      <p className="card-category">Телешко месо в собствен сос</p>
                      <p className="card-category">WOODS FOODS</p>
                      <Card.Title as="h4">530G</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-center">
                <hr></hr>
                <div className="stats">
                  <Button variant="info" className="btn-fill">$12 Buy</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col>
                    <div className="card-image">
                        <img
                        alt="..."
                        src={
                            require("assets/img/products/corn.png")
                            .default
                        }
                        ></img>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="headers">
                      <p className="card-category">Супер сладка царевица</p>
                      <p className="card-category">BONDUELLE</p>
                      <Card.Title as="h4">340G</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-center">
                <hr></hr>
                <div className="stats">
                  <Button variant="info" className="btn-fill">$2.4 Buy</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col>
                    <div className="card-image">
                        <img
                        alt="..."
                        src={
                            require("assets/img/products/tahan.png")
                            .default
                        }
                        ></img>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="headers">
                      <p className="card-category">Лешников тахан</p>
                      <p className="card-category">HARMONICA</p>
                      <Card.Title as="h4">250G</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-center">
                <hr></hr>
                <div className="stats">
                  <Button variant="info" className="btn-fill">$10 Buy</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col>
                    <div className="card-image">
                        <img
                        alt="..."
                        src={
                            require("assets/img/products/musli.png")
                            .default
                        }
                        ></img>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="headers">
                      <p className="card-category">Хрупкави мюсли</p>
                      <p className="card-category">ALNATURA</p>
                      <Card.Title as="h4">500G</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-center">
                <hr></hr>
                <div className="stats">
                  <Button variant="info" className="btn-fill">$2.8 Buy</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
