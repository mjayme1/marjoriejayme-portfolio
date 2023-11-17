import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="visually-hidden">Footer</h2>
            <Container className="border-top border-2 p-md-0 border-dark mt-lg-5">
                <Row className="py-5 align-items-center">
                    <Col xs={12} md={6}>
                        <p className="mb-0 py-lg-4 d-flex d-md-block gap-2 justify-content-center align-items-center">
                            <span className="copyright d-md-block">
                                &copy; 2023
                            </span>
                            <span className="developer d-md-block">
                                Developed by Marjorie Jayme
                            </span>
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="socials d-flex align-items-center justify-content-center gap-5 pt-5 py-lg-4 justify-content-md-end">
                            <Link
                                to="mailto:marjorieann1999@gmail.com"
                                className="d-flex gap-1 mb-0"
                            >
                                <img
                                    src="/assets/at-outline.svg"
                                    alt="Email Logo"
                                    style={{ width: "31px" }}
                                />
                                <span>Email</span>
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/marjorieannjayme/"
                                target="_blank"
                                className="d-flex gap-1 mb-0"
                            >
                                <img
                                    src="/assets/logo-linkedin.svg"
                                    alt="LinkedIn Logo"
                                    style={{ width: "26px" }}
                                />
                                <span>LinkedIn</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
