import { useState } from 'react';
import { Cea1, HandHeart } from '../../assets';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import {
    ClockIcon, EyeIcon, HeartIcon, PaperClipIcon, ShoppingCartIcon, SparklesIcon, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    ChevronDownIcon, Bars3BottomRightIcon,
    QrCodeIcon
} from '../../common';

function NFTDetailSectionOne() {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isTableVisible, setIsTableVisible] = useState<boolean>(false);
    const [isPriceVisible, setIsPriceVisible] = useState<boolean>(false);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);

    const handleToggleTable = () => {
        setIsTableVisible(!isTableVisible);
    };

    const dummyPriceData = [
        { date: "Jan", price: 0.005 },
        { date: "Feb", price: 0.0042 },
        { date: "Mar", price: 0.0038 },
        { date: "Apr", price: 0.0045 },
        { date: "May", price: 0.003 },
        { date: "Jun", price: 0.0029 },
    ];

    const listings = [
        { price: "0.0029", usd: "$7.62", qty: 2, diff: "0%", exp: "30 days", from: "Zenscientist" },
        { price: "0.0029", usd: "$7.62", qty: 3, diff: "0%", exp: "30 days", from: "7B81CE" },
        { price: "0.0029", usd: "$7.62", qty: 3, diff: "0%", exp: "7 days", from: "5x5x" },
        { price: "0.0029", usd: "$7.62", qty: 9, diff: "0%", exp: "30 days", from: "kruzin.eth" },
        { price: "0.0029", usd: "$7.62", qty: 35, diff: "0%", exp: "3 days", from: "Galasvita" },
        { price: "0.0029", usd: "$7.62", qty: 35, diff: "0%", exp: "3 days", from: "Galasvita" },
        { price: "0.0029", usd: "$7.62", qty: 35, diff: "0%", exp: "3 days", from: "Galasvita" },
        { price: "0.0029", usd: "$7.62", qty: 35, diff: "0%", exp: "3 days", from: "Galasvita" },
    ];

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="container mx-auto mt-16  flex flex-wrap justify-center gap-[10%]">
            <div className="w-full md:w-[45%] lg:w-[40%] h-auto flex flex-col items-center mb-10"
            >
                <div className="relative w-full border border-purple-300 shadow-xl p-4 rounded-lg relative" style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
                    <div className="absolute top-4 left-4">
                        <button
                            className="text-purple-500 hover:text-purple-700 focus:outline-none"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <PaperClipIcon className="w-8 h-8" />
                            {isHovered && (
                                <div className="absolute bg-purple-800 text-white text-xs p-2 rounded-lg mt-2 max-w-xs">
                                    Chain
                                </div>
                            )}
                        </button>
                    </div>

                    <div className="absolute top-4 right-4">
                        <button
                            onClick={handleToggleFavorite}
                            className="text-purple-500 hover:text-purple-700 focus:outline-none"
                        >
                            {isFavorite ? (
                                <HeartSolidIcon className="w-8 h-8" />
                            ) : (
                                <HeartIcon className="w-8 h-8" />
                            )}
                        </button>
                    </div>

                    <div>
                        <img
                            src={Cea1}
                            alt="NFT Preview"
                            className="w-full h-full object-cover mb-4 mt-10 rounded-lg"
                        />
                    </div>

                </div>

                <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
                    style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
                    <div className="border-b border-purple-400 flex items-center gap-[70%]">
                        <h2 className=" flex gap-2 text-xl text-gray-800 outfit-bold font-semibold mb-4"> <Bars3BottomRightIcon className='w-6 h-6' />Description</h2>
                    </div>

                    <div>
                        <h2 className="text-lg text-gray-800 outfit-light font-semibold mt-4">Here you can view the complete details of your NFT, including its attributes, owner, and current status. Stay informed about its market value and upcoming events. Check out more info about this unique digital collectible, and explore the possibilities of its future.</h2>

                    </div>

                </div>

                <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
                    style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
                    <div className="border-b border-purple-400 flex items-center gap-[80%]">
                        <h2 className=" flex gap-2 text-xl text-gray-800 outfit-bold font-semibold mb-4"> <QrCodeIcon className='w-6 h-6' />Details</h2>
                        <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsDescriptionVisible(!isDescriptionVisible)} />
                    </div>
                    {
                        isDescriptionVisible && (
                            <div className="pb-2 space-y-2 text-lg mt-6">
                                <div className="flex justify-between  outfit-light">
                                    <span>Contract Address</span>
                                    <span className="font-medium text-blue-600">0x25..9dcAD</span>
                                </div>
                                <div className="flex justify-between outfit-light">
                                    <span>Token ID </span>
                                    <span className="font-medium">102835...</span>
                                </div>
                                <div className="flex justify-between outfit-light">
                                    <span>
                                        Token Standard
                                    </span>
                                    <span className="font-medium">ERC-721</span>
                                </div>
                                <div className="flex justify-between outfit-light">
                                    <span>
                                        Chain
                                    </span>
                                    <span className="font-medium">Polygon</span>
                                </div>
                                <div className="flex justify-between outfit-light">
                                    <span>
                                        Creator Earnings
                                    </span>
                                    <span className="font-medium">6%</span>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[40%] mt-4 md:mt-0">
                <div>
                    <h3 className="text-3xl font-bold mb-2 outfit-bold">MyNFT</h3>
                    <p className="text-lg text-gray-800 outfit-light">Owned by <span className="text-purple-600">ERHFV</span></p>
                </div>

                <div className="flex gap-6 mt-6">
                    <p className="flex text-lg text-gray-800 outfit-light gap-2"><EyeIcon className="w-6 h-6 mt-1" />5 Views</p>
                    {isFavorite && (
                        <p className="flex text-lg text-gray-800 outfit-light gap-2 hover:text-gray-500">
                            <HeartIcon className="w-6 h-6 mt-1" />1 Favorite
                        </p>
                    )}
                    <p className="flex text-lg text-gray-800 outfit-light gap-2 hover:text-gray-500">
                        <SparklesIcon className="w-5 h-5 mt-1" /> My Collection
                    </p>
                </div>

                <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
                    style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
                    <div className="border-b border-purple-400">
                        <h2 className="flex text-xl text-gray-800 outfit-bold font-semibold mb-2 gap-2">
                            <ClockIcon className="w-5 h-5 mt-1 outfit-bold text-gray-800" />
                            Sale ends 13 April 2025 at 4:08 pm
                        </h2>
                    </div>

                    <div>
                        <h2 className="text-md text-gray-800 outfit-light font-semibold mt-4">Current Price</h2>
                        <div className="flex gap-2">
                            <h2 className="text-2xl text-gray-800 outfit-bold font-semibold mt-1">0.0033 ETH</h2>
                            <h2 className="text-sm text-gray-800 outfit-light font-semibold mt-3">$8.67</h2>
                        </div>

                        <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 rounded-lg flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300">
                            <span>Buy Now</span>
                            <ShoppingCartIcon className="w-10 h-7 ml-3" />
                        </button>

                        <div className="mt-6 flex gap-3">
                            <img src={HandHeart} alt="" className="w-10 h-10" />
                            <h2 className="text-md text-gray-800 outfit-light font-semibold">
                                Supports creator. This listing is paying the collection creator their suggested creator earnings.
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Price History Section */}
                <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
                    style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
                    <div className="border-b border-purple-400 flex items-center gap-[70%]">
                        <h2 className="text-xl text-gray-800 outfit-bold font-semibold mb-4"> 📈 Price History</h2>
                        <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsPriceVisible(!isPriceVisible)} />
                    </div>
                    {isPriceVisible && (
                        <div className="bg-gray-200 h-40 mt-6 rounded-lg p-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={dummyPriceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>

                {/* Listings Section */}
                <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
                    style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
                    <div className="border-b border-purple-400 flex items-center gap-[77%]">
                        <h2 className="text-xl text-gray-800 outfit-bold font-semibold mb-4">📊 Listings</h2>
                        <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={handleToggleTable} />
                    </div>

                    {isTableVisible && (
                        <div className="overflow-x-auto max-h-96 mt-4">
                            <table className="min-w-full table-auto">
                                <thead className="outfit-bold text-md">
                                    <tr>
                                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Price</th>
                                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Quantity</th>
                                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">From</th>
                                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Expiration</th>
                                    </tr>
                                </thead>
                                <tbody className="outfit-bold text-sm">
                                    {listings.map((listing, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.price} ETH</td>
                                            <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.qty}</td>
                                            <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.from}</td>
                                            <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.exp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[90%] mt-4 md:mt-0">
                
            </div>
        </div>
    );
}

export default NFTDetailSectionOne;
