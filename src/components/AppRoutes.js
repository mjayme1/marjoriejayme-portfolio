import { Routes, Route, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import LoadingScreen from "./LoadingScreen";
import Home from "../pages/Home";
import Work from "../pages/Work";
import About from "../pages/About";
import ProjectDetail from "../pages/ProjectDetail";

function usePageLoading() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);

        // Mimic a delay to see the loading screen.
        const timer = setTimeout(() => setLoading(false), 1500);

        return () => clearTimeout(timer);
    }, [location]);

    return loading;
}

export default function AppRoutes() {
    const loading = usePageLoading();

    return (
        <div id="portolio">
            {loading && <LoadingScreen />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/work/:slug" element={<ProjectDetail />} />
            </Routes>
        </div>
    );
}
