import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import { Container, Row, Col, Table } from "react-bootstrap";

import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import projects from "../data/projects.json";

export default function ProjectDetail() {
    let { slug } = useParams();
    let project = projects.find((p) => p.slug === slug);

    useEffect(() => {
        initLightboxJS("8336-A753-B8AB-06E2", "individual");
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const descriptionParagraphs = project.longdescription.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/><br/></span>;
    });

    return (
        <>
            <Header />

            <Container>
                {project ? (
                    <div className="single-project">
                        <img
                            src={project.images[0].src}
                            alt={project.images[0].alt || project.title}
                            className="single-project_banner shadow-sm animate__animated animate__fadeIn"
                        />
                        <div className="single-project_details animate__animated animate__fadeIn">
                            <h2 className="display-3 text-uppercase border-bottom border-2 border-dark pb-2">
                                {project.id < 10 ? "0" : ""}
                                {project.id} / {project.title}
                            </h2>
                            <Row className="mt-5">
                                <Col xs={12} lg={5}>
                                    <h3 className="visually-hidden">
                                        Project Details
                                    </h3>
                                    <Table className="table-borderless mb-0">
                                        <tbody>
                                            <tr>
                                                <th
                                                    className="py-3 text-uppercase"
                                                    scope="row"
                                                >
                                                    Category
                                                </th>
                                                <td className="py-3">
                                                    <ul>
                                                        {project.categories.map(
                                                            (
                                                                category,
                                                                index
                                                            ) => (
                                                                <li key={index}>
                                                                    {category}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th
                                                    className="py-3 text-uppercase"
                                                    scope="row"
                                                >
                                                    Year
                                                </th>
                                                <td className="py-3">
                                                    {project.year}
                                                </td>
                                            </tr>

                                            <tr>
                                                <th
                                                    className="py-3 text-uppercase"
                                                    scope="row"
                                                >
                                                    Skills
                                                </th>
                                                <td className="py-3">
                                                    <ul>
                                                        {project.skills.map(
                                                            (skill, index) => (
                                                                <li key={index}>
                                                                    {skill}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>

                                            {project.files && (
                                                <tr>
                                                    <th
                                                        className="py-3 text-uppercase"
                                                        scope="row"
                                                    >
                                                        Assets
                                                    </th>
                                                    <td className="py-3">
                                                        <ul>
                                                            {project.files.map(
                                                                (
                                                                    file,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="d-flex align-items-center gap-1 mb-2"
                                                                    >
                                                                        <img
                                                                            src="/assets/attach-outline.svg"
                                                                            alt="Document Icon"
                                                                            style={{
                                                                                width: "18px",
                                                                                transform: "rotate(20deg)"
                                                                            }}
                                                                        />
                                                                        <Link
                                                                            to={
                                                                                file.file
                                                                            }
                                                                            target="_blank"
                                                                        >
                                                                            {
                                                                                file.title
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </Col>

                                <Col
                                    xs={12}
                                    lg={7}
                                    className="d-flex flex-column align-items-start pt-5 pt-sm-0"
                                >
                                    <h3 className="visually-hidden">
                                        Project Description
                                    </h3>
                                    <p className="pb-lg-3">
                                        {descriptionParagraphs}
                                    </p>
                                    {project.url && (
                                        <Link
                                        to={project.url}
                                        target="_blank"
                                        className="single-project_url d-inline-block border-bottom border-1 border-dark mt-4 mt-lg-auto"
                                        >
                                            <span className="d-flex align-items-center gap-2">
                                                <span>{project.calltoaction}</span>
                                                <img
                                                    src="/assets/right-up-arrow.svg"
                                                    alt="Up Arrow"
                                                    style={{ width: "20px" }}
                                                />
                                            </span>
                                        </Link>
                                        )
                                    }
                                </Col>
                            </Row>
                            <div>
                                <h3 className="visually-hidden">
                                    Project Images
                                </h3>
                                {project.id === 7 ? (
                                    <div className="single-project_lightbox grid">
                                        {project.images
                                            .slice(1)
                                            .map((image, index) => (
                                                <img
                                                    key={index}
                                                    className="w-full rounded mb-4"
                                                    src={image.src}
                                                    alt={image.alt}
                                                />
                                            ))}
                                    </div>
                                ) : (
                                    <SlideshowLightbox
                                        theme="lightbox"
                                        className="single-project_lightbox"
                                    >
                                        {project.images
                                            .slice(1)
                                            .map((image, index) => (
                                                <img
                                                    key={index}
                                                    className="w-full rounded mb-4 shadow-sm"
                                                    src={image.src}
                                                    alt={image.alt}
                                                />
                                            ))}
                                    </SlideshowLightbox>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Project not found</p>
                )}
            </Container>

            <Footer />
        </>
    );
}
