import React, { Component } from "react";
// reactstrap components
import { Col, Container, Row } from "reactstrap";
// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";

export default class page404_ extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.classList.add("bg-default");
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  render() {
    return (
      <>
        <div className="main-content h-100vh">
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="9" md="9">
                    <h1
                      className="font-weight-bold text-white text-center"
                      style={{ "font-size": "500%" }}
                    >
                      404
                    </h1>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="9" md="9">
                    <h1
                      className="font-weight-bold text-white text-center"
                      style={{ "font-size": "200%" }}
                    >
                      Not Found
                    </h1>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          <AuthFooter />
        </div>
      </>
    );
  }
}
