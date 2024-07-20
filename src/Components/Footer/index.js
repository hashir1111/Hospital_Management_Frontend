import { Container, Row, Col } from "reactstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
function Footer() {
  return (
    <footer>
      <Container fluid={true}>
        <Row>
          <Col sm="12" md="4">
            <h2>Contact Us</h2>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginRight: "5px" }}
                />
                XXXX-XXXXXXX
              </li>
              <li>
                <a href="https://gmail.com" style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faEnvelope} /> example@gmail.com
                </a>
              </li>
            </ul>
          </Col>

          <Col sm="12" md="4">
            <h2>Address</h2>
            <p>abc block, xyz street</p>
          </Col>
          <Col sm="12" md="4">
            <SocialIcon
              style={{ margin: "5px" }}
              url="https://facebook.com"
              fgColor="white"
            />
            <SocialIcon
              style={{ margin: "5px" }}
              url="https://twitter.com"
              fgColor="white"
            />
            <SocialIcon
              style={{ margin: "5px" }}
              url="https://linkedin.com"
              fgColor="white"
            />
            <SocialIcon
              style={{ margin: "5px" }}
              url="https://github.com/areebzeeshan"
              fgColor="white"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <p>©Copyright 2024 Global Hospitals</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
