import { Container } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <div>
            <Header />

            <Container>
                <div className="title my-5 text-center">
                    <h2 className="text-uppercase animate__animated animate__fadeInUp animate__fast">
                        About
                    </h2>
                </div>
                <Row>
                    <Col xs={12} md={10} lg={9} className="mx-auto">
                        <div className="about">
                            <div className="animate__animated animate__fadeInUp animate__fast">
                                <img
                                    src="/assets/me.jpg"
                                    alt="Marjorie Jayme"
                                    className="about_my-image w-100"
                                />
                            </div>

                            <div className="about_description animate__animated animate__fadeInUp">
                                <p>
                                    Hello there! I'm a passionate developer who
                                    thrives on creative challenges. With over
                                    two years of experience in front-end
                                    development, I've honed various skills and
                                    strives to continually learn. A couple of
                                    months ago, I completed my studies in the
                                    Web Design and Development program at NAIT,
                                    where I have maintained a 4.0 GPA. I'm
                                    currently working as a Front-End Developer
                                    for eMotors Direct based in Edmonton.
                                </p>

                                <p>
                                    I believe my passion for creativity and
                                    attention to detail allow me to produce
                                    visually appealing and well-crafted
                                    projects. Whether it's designing engaging
                                    user interfaces, developing dynamic websites
                                    and applications, or creating any digital
                                    asset, I consistently push myself to learn
                                    and innovate.
                                </p>

                                <p>
                                    Outside of work, I love taking photos and
                                    videos of just about anything. Currently,
                                    I'm taking great interest in street
                                    photography. I'm also a big fan of hitting
                                    the trails on a bike, listening to
                                    contemporary jazz music, and spending
                                    quality time with some awesome people in my
                                    life.
                                </p>

                                <p>
                                    If you want to collaborate on a project or
                                    just want a chat, feel free to get in touch!
                                </p>

                                {/* <Link
                                    to="mailto:marjorieann1999@gmail.com"
                                    className="about_contact-links d-inline-flex mt-5 text-decoration-underline"
                                >
                                    <span className="d-flex align-items-center gap-1">
                                        <span>Email Me</span>
                                        <img
                                            src="/assets/right-up-arrow-blue.svg"
                                            alt="Right Up Arrow"
                                            style={{ width: "20px" }}
                                        />
                                    </span>
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/in/marjorieannjayme/"
                                    className="about_contact-links d-inline-flex mt-5 ms-5 text-decoration-underline"
                                    target="_blank"
                                >
                                    <span className="d-flex align-items-center gap-1">
                                        <span>LinkedIn Profile</span>
                                        <img
                                            src="/assets/right-up-arrow-blue.svg"
                                            alt="Email Icon"
                                            style={{ width: "20px" }}
                                        />
                                    </span>
                                </Link> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}
