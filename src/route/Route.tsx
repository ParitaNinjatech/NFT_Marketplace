import { Home, Footer, AboutUs, CreateNFT, ListSale, NFTDetails } from "../components/index";
import { Routes, Route, useLocation } from "../common/index";

export default function Router() {
    const location = useLocation();
    const noHeaderRoutes = ["/signup", "/login"];
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/createNFT" element={<CreateNFT />} />
                <Route path="/createdItem/:id/sell" element={<ListSale />} />
                <Route path="/listItem/:id" element={<NFTDetails />} />

            </Routes>
            {!noHeaderRoutes.includes(location.pathname) && <Footer />}
        </>
    )
}