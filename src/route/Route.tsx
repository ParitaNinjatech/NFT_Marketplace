import { Home, Footer , AboutUs} from "../components/index";
import { Routes, Route, useLocation } from "../common/index";


export default function Router() {
    const location = useLocation();
    const noHeaderRoutes = ["/signup", "/login"];
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />

            </Routes>
            {!noHeaderRoutes.includes(location.pathname) && <Footer />}

        </>
    )
}