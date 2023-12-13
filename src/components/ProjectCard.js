import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

export default function ProjectCard({ project }) {
    return (
        <div
            className="project animate__animated animate__fadeInUp"
            key={project.id}
        >
            <Row className="justify-content-between">
                <Col xs={12} lg={6} className="project_col__imagefeatured">
                    <Link to={`/work/${project.slug}`}>
                        <div className="project__imagefeatured shadow-sm">
                            <div className="d-block">
                                <img
                                    src={project.imagefeatured}
                                    alt={project.title}
                                    style={{ height: "100%" }}
                                />
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xs={12} lg={5} className="project_col__details">
                    <div className="d-flex flex-column align-items-start h-100">
                        <Link to={`/work/${project.slug}`}>
                            <h3>
                                {project.id < 10 ? "0" : ""}
                                {project.id} / {project.title}
                            </h3>
                        </Link>
                        <p className="mt-3 mb-5">{project.shortdescription}</p>
                        <ul>
                            {project.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <Link
                            to={`/work/${project.slug}`}
                            className="project__more d-inline-block border-bottom border-1 border-dark mt-4 mt-lg-auto"
                        >
                            <span className="d-flex align-items-center gap-2">
                                <span>More about the project</span>
                                <img
                                    src="/assets/right-up-arrow.svg"
                                    alt="Up Arrow"
                                    style={{ width: "20px" }}
                                />
                            </span>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
