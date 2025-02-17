import React, { useState } from 'react'
import { Cea1, Cea2, Cea3, Cea4, Cea5, Cea6, Cea7, Cea8, Cur1, Cur2, Cur3, Cur4, Cur5, Cur6, Cur7, Dollar, Ethereum, Team1, Team2, Team3, Team4, Team5, Team6, Team7, Team8 } from '../../assets';
import { PencilIcon, ArrowUpOnSquareIcon, ChevronUpDownIcon, TagIcon, LockOpenIcon } from '../../common';
import ListSectionModal from '../listSection/ListSectionModal';

const tabs = ['Vault / Crafted', 'On Stake'];

const nftData = [
    { id: 1, title: "Right Messages", price: "1.90 ", author: "Martina Brito", likes: 24, Creator: Team1, time: "2025-02-14T10:40:57", image: Cur1, category: "On sale", LastPrice: "1403.110" },
    { id: 2, title: "Brick-and-Mortar Travails", price: "0.45 ", author: "Han Chuwen", likes: 19, Creator: Cea1, time: "2025-02-14T06:41:10", image: Cur2, category: "On Auction", LastPrice: "1403.110" },
    { id: 3, title: "Free Way to Back Up", price: "0.53 ", author: "Langke Zambo", likes: 20, Creator: Cea2, time: "2025-02-14T15:32:10", image: Cur3, category: "On sale", LastPrice: "1403.110" },
    { id: 4, title: "Photography Art", price: "0.80 ", author: "John Doe", likes: 40, Creator: Cea3, time: "2025-02-14T05:10:25", image: Cur4, category: "Vault / Crafted", LastPrice: "1403.110" },
    { id: 5, title: "Digital Art Piece", price: "1.30 ", author: "Jane Smith", likes: 33, Creator: Cea4, time: "2025-02-14T12:00:10", image: Cur5, category: "On Stake", LastPrice: "1403.110" },
    { id: 6, title: "The Music Collection", price: "0.60 ", author: "Langke Zambo", likes: 22, Creator: Cea5, time: "2025-02-14T08:25:32", image: Cur6, category: "On sale", LastPrice: "1403.110" },
    { id: 7, title: "Domain NFT", price: "0.25 ", author: "Albert Ray", likes: 15, Creator: Cea6, time: "2025-02-14T14:22:58", image: Cur7, category: "Vault / Crafted", LastPrice: "1403.110" },
    { id: 8, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Cea7, time: "2025-02-14T11:11:30", image: Cea8, category: "On Stake", LastPrice: "1403.110" },
    { id: 9, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Cea8, time: "2025-02-14T11:11:30", image: Cea8, category: "On Auction", LastPrice: "1403.110" },
    { id: 10, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team2, time: "2025-02-14T11:11:30", image: Cea8, category: "On sale", LastPrice: "1403.110" },
    { id: 11, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team3, time: "2025-02-14T11:11:30", image: Cea8, category: "Vault / Crafted", LastPrice: "1403.110" },
    { id: 12, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team4, time: "2025-02-14T11:11:30", image: Cea8, category: "On Stake", LastPrice: "1403.110" },
    { id: 13, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team5, time: "2025-02-14T11:11:30", image: Cea8, category: "On Auction", LastPrice: "1403.110" },
    { id: 14, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team6, time: "2025-02-14T11:11:30", image: Cea8, category: "On sale", LastPrice: "1403.110" },
    { id: 15, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team7, time: "2025-02-14T11:11:30", image: Cea8, category: "On Stake", LastPrice: "1403.110" },
    { id: 16, title: "Ultimate Collectibles", price: "2.10 ", author: "Alex Miller", likes: 50, Creator: Team8, time: "2025-02-14T11:11:30", image: Cea8, category: "Vault / Crafted", LastPrice: "1403.110" },
];

function ProfileSection() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>('Vault / Crafted');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [hoveredNFTs, setHoveredNFTs] = useState<Set<number>>(new Set());
    const [isListingModal,setIsListingModal] = useState<boolean>(false);
    const itemsPerPage = 12;

    const filteredNFTs = nftData.filter(nft => {
        if (activeTab === "Vault / Crafted") {
            return nft.category === "Vault / Crafted" || nft.category === "On Auction" || nft.category === "On sale";
        } else if (activeTab === "On Stake") {
            return nft.category === "On Stake";
        }
        return false;
    });



    const sortedNFTs = filteredNFTs.sort((a, b) => {
        const dateA = new Date(a.time);
        const dateB = new Date(b.time);

        if (isAscending) {
            return dateA.getTime() - dateB.getTime();
        } else {
            return dateB.getTime() - dateA.getTime();
        }
    });

    const indexOfLastNFT = currentPage * itemsPerPage;
    const indexOfFirstNFT = indexOfLastNFT - itemsPerPage;
    const currentNFTs = sortedNFTs.slice(indexOfFirstNFT, indexOfLastNFT);

    const totalPages = Math.ceil(sortedNFTs.length / itemsPerPage);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
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

    return (
        <div className="container mx-auto mt-16">
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4 mb-6">

                <label htmlFor="image">
                    {
                        !selectedImage ? (
                            <div className="w-44 h-44 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex-shrink-0 relative">
                                <PencilIcon className="w-6 h-6 text-white absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        ) : (
                            <img
                                src={!selectedImage ? "UploadImage" : URL.createObjectURL(selectedImage)}
                                alt="Upload"
                                className={`object-cover ${selectedImage && "w-44 h-44 rounded-full"}`}
                            />
                        )
                    }

                </label>
                <input
                    onChange={handleFileChange}
                    type="file"
                    id="image"
                    hidden
                    required
                    accept="image/*"
                />
            </div>
            <div className="flex flex-col justify-center text-center sm:text-left">
                <div className="flex items-center justify-between sm:justify-start gap-[90%] text-black mt-2">
                    <h1 className="text-2xl font-bold outfit-bold">John Doe</h1>

                    <div
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <ArrowUpOnSquareIcon className="w-6 h-6 text-black" />

                        {isHovered && (
                            <div className="absolute left-1/2 ontfit-light transform -translate-x-1/2 mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xs rounded-md">
                                Please Share Profile
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start outfit-light text-sm text-gray-500 mt-2">
                    <img src={Ethereum} alt='Ethereum' className="mr-2 h-4 w-4" />
                    <span>0xf326...960B</span>
                    <span className="mx-2">|</span>
                    <span>Joined February 2025</span>

                </div>
            </div>

            <div className="flex flex-wrap justify-between  outfit-bold pb-3 mb-4 mt-8">
                <div className='flex flex-wrap gap-3  outfit-bold pb-3 mb-4 '>
                    {tabs.map((tab: any) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-md font-medium text-md ${activeTab === tab ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className='outfit-bold pb-3 mb-4 '>
                    <button
                        onClick={() => setIsAscending(!isAscending)}
                        className="px-4 py-2 bg-gray-200 rounded-md flex items-center hover:bg-gray-300"
                    >
                        <ChevronUpDownIcon className="mr-2 h-8 w-8" /> Sort by Date
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

                        </div>

                        <div className="p-4 ">

                            <h3 className="font-bold text-lg outfit-bold">{nft.title}</h3>

                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-700 text-md outfit-light">Price</p>
                                <p className="flex gap-2 text-gray-700 text-lg outfit-light"><img src={Dollar} alt={nft.title} className="w-5 h-5 mt-1" />{nft.price} ETH</p>
                            </div>
                        </div>

                        {hoveredNFTs.has(nft.id) && (
                            <div >

                                {
                                    nft.category === "Vault / Crafted" ? (
                                        <button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300" onClick={() => setIsListingModal(true)}>
                                            <TagIcon className="w-10 h-7 ml-3" />
                                            <span>Listing for sale</span>
                                        </button>
                                    ) : nft.category === "On sale" ? (
                                        <button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300">
                                            <PencilIcon className="w-10 h-7 ml-3" />
                                            <span>Edit Listing</span>
                                        </button>
                                    ) : nft.category === "On Auction" ? (
                                        <button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300">
                                            <PencilIcon className="w-10 h-7 ml-3" />
                                            <span>Edit Auction</span>
                                        </button>
                                    ) : (
                                        <button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300">
                                            <LockOpenIcon className="w-10 h-7 ml-3" />
                                            <span>UnStake NFT</span>
                                        </button>
                                    )
                                }
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
                isListingModal && <ListSectionModal isOpen={isListingModal} onClose={() => setIsListingModal(false)} saleType={''} />
            }

        </div>
    )
}


export default ProfileSection;
