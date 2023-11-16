import { Container } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

export default function Home() {
    const featuredProjects = projects.filter(
        (project) => project.id === 1 || project.id === 2 || project.id === 3
    );

    return (
        <div>
            <Header />

            <Container>
                <section className="banner">
                    <h2 className="visually-hidden">Introduction</h2>
                    <div className="banner_intro d-flex align-items-center justify-content-between position-relative">
                        <h3 className="lh-2 lh-md-1">
                            Hello, I'm
                            <br />
                            Marjorie Jayme.
                        </h3>
                        <a
                            href="#work"
                            className="banner_arrow-to-works mt-5 d-block"
                        >
                            <img
                                src="/assets/down-arrow.svg"
                                style={{ width: "40px", height: "40px" }}
                                alt="Down Arrow"
                            />
                        </a>
                        <div>
                            <pre className="d-block mb-0">&lt;mjayme&gt;</pre>
                            <p className="py-4 py-md-3 ps-4 ps-md-5 my-0 fw-normal lh-sm">
                                An enthusiastic Front-End Developer and UX/UI
                                Designer, leveraging versatile design and
                                technical skills, always excited to produce
                                beautiful web user interfaces. Has two years of
                                experience working in the field — analyzing and
                                translating project requirements, and designing
                                and developing software. Also brings in
                                education that complements skillset.
                            </p>
                            <pre className="d-block mb-0">&lt;/mjayme&gt;</pre>
                        </div>
                    </div>
                </section>
            </Container>

            <Container>
                <section className="projects" id="work">
                    <h2 className="visually-hidden">Featured Projects</h2>
                    <div>
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </Container>

            <Footer />
        </div>
    );
}
