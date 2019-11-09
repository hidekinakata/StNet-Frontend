import React, { Component } from "react";
// reactstrap components
import { Col, Container, Row } from "reactstrap";
// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        <div className="main-content">
          <AuthNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="9" md="9">
                    <img
                      className="w-50"
                      alt="..."
                      src={require("../assets/img/brand/logo.svg")}
                    />
                    <h2 className="text-lead text-light text-justify pt-4 rounded">
                      StudyNetwork é uma plataforma que tem o objetivo de
                      conectar as pessoas que buscam o conhecimento ou propagar
                      conhecimento de uma forma simples e efetiva! Se você
                      deseja encontrar pessoas com os mesmos interesses de
                      estudo que você, busca um professor particular ou até
                      mesmo deseja SER um professor particular, você está no
                      lugar certo.
                    </h2>
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
        </div>
        <AuthFooter />
      </>
    );
  }
}
