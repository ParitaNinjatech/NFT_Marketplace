import { useState } from "react";
import { Cea1, Cea2, Cea3, Cea4, Cea5, Cea6, Cea7, Cea8, Cur1, Cur2, Cur3, Cur4, Cur5, Cur6, Cur7, EndTime, Ethereum, Team1 } from "../../assets";
import { ChevronUpDownIcon, HeartIcon, LockClosedIcon } from "../../common/index";
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';


const nftStakeData: any = [
    {
        id: 1,
        title: "Right Messages",
        price: "1.90 ",
        author: "Martina Brito",
        Creator: Team1,
        image: Cur1,
        stakedSince: "2025-01-10",
        rewardRate: "5%",
        totalRewards: "0.15 ETH",
        claimableRewards: "0.05 ETH",
        status: "Staked",
        claimTime: "2025-03-10T12:00:00",
        likes : 76

    },
    {
        id: 2,
        title: "Brick-and-Mortar Travails",
        price: "0.45 ",
        author: "Han Chuwen",
        Creator: Cea1,
        image: Cur2,
        stakedSince: "2025-02-01",
        rewardRate: "3%",
        totalRewards: "0.08 ETH",
        claimableRewards: "0.03 ETH",
        status: "Staked",
        claimTime: "2025-03-01T14:45:00",
        likes : 56

    },
    {
        id: 3,
        title: "Free Way to Back Up",
        price: "0.53 ",
        author: "Langke Zambo",
        Creator: Cea2,
        image: Cur3,
        stakedSince: "2025-01-20",
        rewardRate: "4%",
        totalRewards: "0.12 ETH",
        claimableRewards: "0.04 ETH",
        status: "Staked",
        claimTime: "2025-03-10T12:00:00",
        likes : 52

    },
    {
        id: 4,
        title: "Photography Art",
        price: "0.80 ",
        author: "John Doe",
        Creator: Cea3,
        image: Cur4,
        stakedSince: "2025-01-25",
        rewardRate: "6%",
        totalRewards: "0.20 ETH",
        claimableRewards: "0.06 ETH",
        status: "Staked",
        claimTime: "2025-03-01T14:45:00",
        likes : 754

    },
    {
        id: 5,
        title: "Digital Art Piece",
        price: "1.30 ",
        author: "Jane Smith",
        Creator: Cea4,
        image: Cur5,
        stakedSince: "2025-02-10",
        rewardRate: "5%",
        totalRewards: "0.16 ETH",
        claimableRewards: "0.05 ETH",
        status: "Staked",
        claimTime: "2025-03-10T12:00:00",
        likes : 57410

    },
    {
        id: 6,
        title: "The Music Collection",
        price: "0.60 ",
        author: "Langke Zambo",
        Creator: Cea5,
        image: Cur6,
        stakedSince: "2025-01-18",
        rewardRate: "3%",
        totalRewards: "0.09 ETH",
        claimableRewards: "0.03 ETH",
        status: "Staked",
        claimTime: "2025-03-01T14:45:00",
        likes : 5602

    },
    {
        id: 7,
        title: "Domain NFT",
        price: "0.25 ",
        author: "Albert Ray",
        Creator: Cea6,
        image: Cur7,
        stakedSince: "2025-02-05",
        rewardRate: "4%",
        totalRewards: "0.10 ETH",
        claimableRewards: "0.03 ETH",
        status: "Staked",
        claimTime: "2025-03-10T12:00:00",
        likes : 564154

    },
    {
        id: 8,
        title: "Ultimate Collectibles",
        price: "2.10 ",
        author: "Alex Miller",
        Creator: Cea7,
        image: Cea8,
        stakedSince: "2025-01-30",
        rewardRate: "6%",
        totalRewards: "0.25 ETH",
        claimableRewards: "0.07 ETH",
        status: "Staked",
        claimTime: "2025-03-01T14:45:00",
        likes : 56154

    },
    {
        id: 9,
        title: "Abstract Reality",
        price: "1.50 ",
        author: "Sasha Green",
        Creator: Cea8,
        image: Cur7,
        stakedSince: "2025-02-15",
        rewardRate: "4%",
        totalRewards: "0.13 ETH",
        claimableRewards: "0.04 ETH",
        status: "Staked",
        claimTime: "2025-03-10T12:00:00",
        likes : 56214

    },
    {
        id: 10,
        title: "Surreal Dreams",
        price: "0.90 ",
        author: "Liam Walker",
        Creator: Cea8,
        image: Cur1,
        stakedSince: "2025-02-03",
        rewardRate: "5%",
        totalRewards: "0.20 ETH",
        claimableRewards: "0.06 ETH",
        status: "Staked",
        claimTime: "2025-03-01T14:45:00",
        likes : 56154784

    },
    {
        id: 11,
        title: "Digital Wonderland",
        price: "1.10 ",
        author: "Emily Foster",
        Creator: Team1,
        image: Cur1,
        stakedSince: "2025-01-28",
        rewardRate: "6%",
        totalRewards: "0.18 ETH",
        claimableRewards: "0.05 ETH",
        status: "Staked",
        claimTime: "2025-03-10T12:00:00",
        likes : 56548784

    },
    {
        id: 12,
        title: "Urban Vibes",
        price: "0.75 ",
        author: "Lucas Young",
        Creator: Cea1,
        image: Cur1,
        stakedSince: "2025-02-08",
        rewardRate: "3%",
        totalRewards: "0.07 ETH",
        claimableRewards: "0.02 ETH",
        status: "Staked",
        claimTime: "2025-03-01T14:45:00",
        likes : 5654541

    }
];

function StakeNFTSection() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [favoriteNFTs, setFavoriteNFTs] = useState<Set<number>>(new Set());
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [hoveredNFTs, setHoveredNFTs] = useState<Set<number>>(new Set());
    const itemsPerPage = 12;


    const sortedNFTs = nftStakeData.sort((a: any, b: any) => {
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



    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const toggleFavorite = (id: number) => {
        setFavoriteNFTs((prevFavorites) => {
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

    return (
        <div className="container mx-auto mt-16">
            <div className="flex gap-2 ">
                <button className='mt-4 ml-[77%] rounded-xl w-50 mt-4 gap-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-4 flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300'>
                    <LockClosedIcon className="w-6 h-6 font-semibold" /> Stake & Earn
                </button>

                <button
                    onClick={() => setIsAscending(!isAscending)}
                    className=" py-4 py-1 bg-gray-200 rounded-md  py-4 flex justify-center items-center rounded-xl w-50 mt-4"
                >
                    <ChevronUpDownIcon className="mr-2 h-8 w-8" /> Sort by
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
                {currentNFTs.map((nft: any) => (
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
                                <p className="text-gray-700 text-md outfit-light">Reward Rate</p>
                                <p className="flex gap-2 text-gray-700 text-md outfit-light">{nft.rewardRate}</p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-700 text-md outfit-light">Total Reward</p>
                                <p className="flex gap-2 text-gray-700 text-md outfit-light"> <img src={Ethereum} alt={nft.title} className="w-5 h-5 mt-1" />{nft.totalRewards}</p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-gray-700 text-md outfit-light">Claim Time </p>
                                <p className="flex gap-1 text-gray-700 text-md outfit-light"><img src={EndTime} alt={nft.title} className="w-7 h-7 " />{new Date(nft.claimTime).toLocaleString()} </p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-gray-700 text-md outfit-light">Status </p>
                                <p className="flex gap-1 text-purple-700 text-md outfit-light">{nft.status} </p>
                            </div>
                        </div>

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
        </div>
    )
}

export default StakeNFTSection;

