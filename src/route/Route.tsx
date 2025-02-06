import { Home } from "../components/index";
import { Routes, Route, useLocation } from "../common/index";


export default function Router() {
    const location = useLocation();
    const noHeaderRoutes = ["/signup", "/login"];
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
            {/* {!noHeaderRoutes.includes(location.pathname) && <Footer />} */}

        </>
    )
}