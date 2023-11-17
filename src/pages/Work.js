import { Container } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

import projects from "../data/projects.json";

export default function Work() {
    return (
        <div>
            <Header />

            <Container>
                <div className="title my-5 text-center animate__animated animate__fadeInUp">
                    <h2 className="text-uppercase">Work</h2>
                </div>

                <div className="works">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Container>

            <Footer />
        </div>
    );
}
