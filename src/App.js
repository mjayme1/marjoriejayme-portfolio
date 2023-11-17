import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
import "animate.css";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";

import "./fonts/SpaceGrotesk-Medium.ttf";
import "./fonts/SpaceGrotesk-Regular.ttf";
import "./fonts/SpaceGrotesk-SemiBold.ttf";
import "./fonts/ProductSans-Light.ttf";
import "./fonts/ProductSans-Regular.ttf";

export default function App() {
    return (
        <div id="portolio">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work/:slug" element={<ProjectDetail />} />
                </Routes>
            </Router>
        </div>
    );
}
