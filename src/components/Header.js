import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        if (navOpen) {
            document.body.classList.add("nav-open");
        } else {
            document.body.classList.remove("nav-open");
        }
    }, [navOpen]);

    return (
        <header className="header d-block d-md-flex align-items-sm-center py-5">
            <Container>
                <h1 className="visually-hidden">Marjorie Jayme Portfolio</h1>
                <div className="d-flex align-items-center justify-content-between flex-col flex-md-row w-100">
                    <Link to="/">
                        <img
                            src="/assets/mj-logo.png"
                            alt="Marjorie Jayme's Logo"
                            className="header_logo"
                        />
                    </Link>
                    <div
                        className="header_toggle-icon position-relative d-block d-md-none"
                        style={{ zIndex: 120 }}
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <img
                            src="/assets/toggle-icon.svg"
                            alt="Menu Toggle Icon"
                            style={{ width: "43px", height: "22px" }}
                        />
                    </div>
                    <nav
                        className={`header_sliding-nav text-center d-flex justify-content-center justify-content-md-end flex-column flex-md-row align-items-center ${
                            navOpen ? "active" : ""
                        }`}
                    >
                        <h2 className="visually-hidden">Navigation</h2>
                        <div style={{ width: "100%" }}>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/work">Work</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link
                                        to="/docs/Resume-MarjorieJayme.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
