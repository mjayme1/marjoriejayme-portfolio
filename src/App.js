import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";

import AppRoutes from "./components/AppRoutes";

import "./fonts/SpaceGrotesk-Medium.ttf";
import "./fonts/SpaceGrotesk-Regular.ttf";
import "./fonts/SpaceGrotesk-SemiBold.ttf";
import "./fonts/ProductSans-Light.ttf";
import "./fonts/ProductSans-Regular.ttf";

export default function App() {
    return (
        <div id="portolio">
            <Router>
                <AppRoutes />
            </Router>
        </div>
    );
}
