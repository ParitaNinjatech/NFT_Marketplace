import { Home, Footer, AboutUs, CreateNFT, ListSale, NFTDetails, NFTAuctionDetails ,NFTCreateDetails ,BuyNFT } from "../components/index";
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
                <Route path="/auction/:id" element={<NFTAuctionDetails />} />
                <Route path="/createItem/:id" element={<NFTCreateDetails />} />
                <Route path="/buyNFT" element={<NFTCreateDetails />} />


            </Routes>
            {!noHeaderRoutes.includes(location.pathname) && <Footer />}
        </>
    )
}