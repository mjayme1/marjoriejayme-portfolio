import { Container } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer>
            <h2 className="visually-hidden">Footer</h2>
            <Container className="border-top border-2 p-md-0 border-dark mt-5">
                <Row className="py-5">
                    <Col xs={12} md={6}>
                        <p className="mb-0 py-lg-4 d-flex d-md-block gap-2 justify-content-center align-items-center">
                            <span className="copyright d-md-block">
                                &copy; 2023
                            </span>
                            <span className="developed d-md-block">
                                Developed by Marjorie Jayme
                            </span>
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="d-flex align-items-center justify-content-center gap-3 pt-5 pt-md-0 py-lg-4 justify-content-md-end">
                            <img
                                src="/assets/logo-react.svg"
                                className="bg-dark rounded-3 p-2"
                                alt="WordPress Logo"
                                style={{ width: "30px" }}
                            />
                            <span className="mb-0">React JS</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
