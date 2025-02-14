import { useState } from "react";
import { AdjustmentsHorizontalIcon, ChevronUpDownIcon, HeartIcon, WalletIcon } from "../../common/index";
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import {
    Cea8, Cur1, Cur2, Cur3, Cur4, Cur5, Cur6, Cur7, Cea1, Cea2, Cea3, Cea4, Cea5, Cea6, Cea7, Team1, Team2, Team3,
    Dollar, Team4, Team5, Team6, Team7, Team8, Ethereum,
    EndTime
} from "../../assets";
import { PlaceBid } from "../index"


const nftData = [
    { id: 1, title: "Right Messages", price: "1.90 ", author: "Martina Brito", likes: 24, Creator: Team1, time: "2025-02-14T10:40:57", image: Cur1, category: "Trending", LastPrice: "1403.110" },
    { id: 2, title: "Brick-and-Mortar Travails", price: "0.45 ", author: "Han Chuwen", likes: 19, Creator: Cea1, time: "2025-02-14T06:41:10", image: Cur2, category: "Collectibles", LastPrice: "1403.110" },
    { id: 3, title: "Free Way to Back Up", price: "0.53 ", author: "Langke Zambo", likes: 20, Creator: Cea2, time: "2025-02-14T15:32:10", image: Cur3, category: "Music", LastPrice: "1403.110" },
    { id: 4, title: "Photography Art", price: "0.80 ", author: "John Doe", likes: 40, Creator: Cea3, time: "2025-02-14T05:10:25", image: Cur4, category: "Photography", LastPrice: "1403.110" },
    { id: 5, title: "Digital Art Piece", price: "1.30 ", author: "Jane Smith", likes: 33, Creator: Cea4, time: "2025-02-14T12:00:10", image: Cur5, category: "Trending", LastPrice: "1403.110" },
    { id: 6, title: "The Music Collection", price: "0.60 ", author: "Langke Zambo", likes: 22, Creator: Cea5, time: "2025-02-14T08:25:32", image: Cur6, category: "Music", LastPrice: "1403.110" },
    { id: 7, title: "Domain NFT", price: "0.25 ", author: "Albert Ray", likes: 15, Creator: Cea6, time: "2025-02-14T14:22:58", image: Cur7, category: "Domain Names", LastPrice: "1403.110" },
    { id: 8, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Cea7, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 9, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Cea8, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 10, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team2, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 11, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team3, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 12, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team4, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 13, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team5, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 14, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team6, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 15, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team7, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
    { id: 16, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team8, time: "2025-02-14T11:11:30", image: Cea8, category: "Collectibles", LastPrice: "1403.110" },
];

const tabs = ["All", "Digital Art", "Collectibles", "Music & Audio", "Virtual Real Estate", "Gaming Assets"];

function AuctionSectionOne() {
    const [activeTab, setActiveTab] = useState<string>("All");
    const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
    const [favoriteNFTs, setFavoriteNFTs] = useState<Set<number>>(new Set());
    const [hoveredNFTs, setHoveredNFTs] = useState<Set<number>>(new Set());
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [isPlaceBid, setIsPlaceBid] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 12;

    const filteredNFTs = nftData.filter(nft =>
        nft &&
        (activeTab === "All" || nft.category === activeTab)
    );

    const sortedNFTs = filteredNFTs.sort((a, b) => {
        if (isAscending) {
            return a.likes - b.likes;
        } else {
            return b.likes - a.likes;
        }
    });

    const indexOfLastNFT = currentPage * itemsPerPage;
    const indexOfFirstNFT = indexOfLastNFT - itemsPerPage;
    const currentNFTs = sortedNFTs.slice(indexOfFirstNFT, indexOfLastNFT);

    const totalPages = Math.ceil(sortedNFTs.length / itemsPerPage);

    const toggleFavorite = (id: number) => {
        setFavoriteNFTs(prevFavorites => {
            const newFavorites = new Set(prevFavorites);
            if (newFavorites.has(id)) {
                newFavorites.delete(id);
            } else {
                newFavorites.add(id);
            }
            return newFavorites;
        });
    };

    const handleMouseEnter = (id: number) => {
        setHoveredNFTs(prev => new Set(prev.add(id)));
    };

    const handleMouseLeave = (id: number) => {
        setHoveredNFTs(prev => {
            const newHovered = new Set(prev);
            newHovered.delete(id);
            return newHovered;
        });
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
                {isFilterVisible && (
                    <div className="flex space-x-4 overflow-x-auto outfit-bold sm:overflow-visible mb-6 sm:mb-0">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-md font-medium text-md ${activeTab === tab ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                )}

                <div className="flex space-x-4 mt-4 sm:mt-0 ml-auto outfit-bold">
                    <button
                        onClick={() => setIsFilterVisible(!isFilterVisible)}
                        className="px-4 py-2 bg-gray-200 rounded-md flex items-center hover:bg-gray-300"
                    >
                        <AdjustmentsHorizontalIcon className="mr-2 h-8 w-8" /> Apply Filter
                    </button>

                    <button
                        onClick={() => setIsAscending(!isAscending)}
                        className="px-4 py-2 bg-gray-200 rounded-md flex items-center hover:bg-gray-300"
                    >
                        <ChevronUpDownIcon className="mr-2 h-8 w-8" /> Sort by
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
                {currentNFTs.map(nft => (
                    <div
                        key={nft.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden relative hover:scale-105 transition duration-300"
                        style={{
                            boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)",
                            minHeight: "400px",
                        }}
                        onMouseEnter={() => handleMouseEnter(nft.id)}
                        onMouseLeave={() => handleMouseLeave(nft.id)}
                    >
                        <div className="relative">
                            <img src={nft.image} alt={nft.title} className="w-full h-56 object-cover" />

                            <div className="absolute top-4 left-4 text-gray-600 bg-white rounded-full px-2 py-1">
                                <p className="flex items-center gap-1 outfit-light">
                                    {
                                        favoriteNFTs.has(nft.id) ? (
                                            <HeartSolidIcon
                                                className="h-5 w-5 text-red-500"
                                                onClick={() => toggleFavorite(nft.id)}
                                            />
                                        ) : (
                                            <HeartIcon
                                                className="h-5 w-5"
                                                onClick={() => toggleFavorite(nft.id)}
                                            />
                                        )
                                    }
                                    {nft.likes}
                                </p>
                            </div>
                        </div>

                        <div className="p-4 ">

                            <h3 className="font-bold text-lg outfit-bold">{nft.title}</h3>

                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-700 text-md outfit-light">Initial Bid</p>
                                <p className="flex gap-2 text-gray-700 text-md outfit-light"><img src={Ethereum} alt={nft.title} className="w-5 h-5 mt-1" />{nft.price}ETH</p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-700 text-md outfit-light">Bid Creator</p>
                                <p className="flex gap-2 text-gray-700 text-md outfit-light"><img src={nft.Creator} alt={nft.title} className="w-7 h-7 rounded-full " />{nft.author} </p>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <p className="text-gray-700 text-md outfit-light">Auction End </p>
                                <p className="flex gap-1 text-gray-700 text-md outfit-light"><img src={EndTime} alt={nft.title} className="w-7 h-7 " />{new Date(nft.time).toLocaleString()} </p>
                            </div>
                        </div>

                        {hoveredNFTs.has(nft.id) ? (
                            <div >
                                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300" onClick={() => setIsPlaceBid(true)}>
                                    <WalletIcon className="w-10 h-7 ml-3" />
                                    <span>Place bid</span>
                                </button>
                            </div>
                        ) : (
                            <div className="p-4 mt-2">
                                <div className="flex items-center justify-between ">
                                    <p className="text-gray-700 text-md outfit-light">Last Bid</p>
                                    <p className="flex gap-2 text-gray-700 text-md outfit-light"><img src={Dollar} alt={nft.title} className="w-5 h-5 mt-1" />{nft.LastPrice}</p>
                                </div>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-10 w-full">
                <p className="text-gray-600">
                    Showing {indexOfFirstNFT + 1}-
                    {Math.min(indexOfLastNFT, sortedNFTs.length)} of{" "}
                    {sortedNFTs.length}
                </p>

                <div className="flex space-x-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded ${currentPage === 1
                            ? "bg-gray-200 text-gray-400"
                            : "bg-gradient-to-r from-purple-500 to-pink-400 text-white"
                            }`}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages).keys()].map((page) => (
                        <button
                            key={page + 1}
                            onClick={() => handlePageChange(page + 1)}
                            className={`px-4 py-2 rounded ${currentPage === page + 1
                                ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white"
                                : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            {page + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded ${currentPage === totalPages
                            ? "bg-gray-200 text-gray-400"
                            : "bg-gradient-to-r from-purple-500 to-pink-400 text-white"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
            {
                isPlaceBid && <PlaceBid isOpen={isPlaceBid} onClose={() => setIsPlaceBid(false)} />
            }
        </div>

    )
}

export default AuctionSectionOne
