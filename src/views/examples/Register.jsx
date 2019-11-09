import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import {Link} from "react-router-dom";
import {PasswordMeter} from "password-meter";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      //password
      visible: "password",
      passwordVisible: 'fas fa-eye-slash',
      passwordStatus: '---------',
      strengColor: "text-info"
    }


    this.passVisHandleDown = this.passVisHandleDown.bind(this);
    this.passVisHandleUp = this.passVisHandleUp.bind(this);
    this.passStrongHandle = this.passStrongHandle.bind(this);
  }

  passVisHandleDown() {
    this.setState({
      visible: "text",
      passwordVisible: 'fas fa-eye'
    })
  }

  passVisHandleUp() {
    this.setState({
      visible: "password",
      passwordVisible: 'fas fa-eye-slash',

    })
  }

  passStrongHandle(e) {
    const passMeter = new PasswordMeter({
      minLength: {value: 8, message: "A senha precisa ter no mínimo 8 caracteres"}
    }, {
      "0": "-",
      "40": ["Muito fraca", "text-danger"],    // 001 <= x <  040
      "80": ["Fraca", "text-warning"],        // 040 <= x <  080
      "120": ["Média", "text-yellow"],     // 080 <= x <  120
      "180": ["Forte", "text-success"],     // 120 <= x <  180
      "200": ["Muito Forte", "text-success"], // 180 <= x <  200
      "_": ["Perfeita!", "text-success"]       //        x >= 200
    });

    const result = passMeter.getResult(e.target.value);
    if (result.errors) {
      this.setState({
        passwordStatus: result.errors[0],
        strengColor: "text-danger"
      })
    } else {
      this.setState({
        passwordStatus: result.status[0],
        strengColor: result.status[1]
      })
    }
  }

  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-1">
              <Link to="/">
                <img
                  className="w-100 px-7 py-5"
                  alt="..."
                  src={require("../../assets/img/brand/logo.svg")}
                />
              </Link>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h2><span className="text-orange">Cadastre-se</span> com seus dados</h2>
              </div>
              <Form role="form">
                <FormGroup>
                  <Row className="mb-0">
                    <Col className="mb-0">
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Nome" type="text"/>
                      </InputGroup>
                    </Col>
                    <Col className="mb-0">
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Sobrenome" type="text"/>
                      </InputGroup>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Senha" type={this.state.visible} minLength={8} onKeyUp={this.passStrongHandle}/>
                    <InputGroupAddon onMouseDown={this.passVisHandleDown} onMouseUp={this.passVisHandleUp}
                                     addonType="append">
                      <InputGroupText>
                        <i className={this.state.passwordVisible}/>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
                <div className="text-muted font-italic">
                  <small>
                    Status da senha:{" "}
                    <span className={this.state.strengColor + " font-weight-700"}>{this.state.passwordStatus}</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          Aceito os{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Termos e Condições
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="info" type="submit">
                    Criar conta
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
