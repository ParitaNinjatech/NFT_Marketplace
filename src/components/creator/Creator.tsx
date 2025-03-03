import { useState } from 'react'
import { Bars4Icon, EyeIcon, Link, UserIcon, XMarkIcon, MapPinIcon, LinkIcon, CalendarDaysIcon } from '../../common';
import { Logo, Artist } from '../../assets';

function Creator() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState("created");
    const tabs = ['Created', 'Total On Sale', 'Total On Auction'];

    return (
        <div className='m-4'>
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-300 to-pink-200 flex flex-col items-center rounded-2xl relative h-[35vh]">
                <nav className="bg-white m-5 rounded-l-full rounded-r-full flex justify-between items-center p-3 w-[90%] sm:w-[85%] md:w-[80%]">
                    <Link to="/" >
                        <div className="flex items-center space-x-2">
                            <img src={Logo} alt="NFT Logo" className="h-8" />
                            <span className="text-purple-700 font-bold text-lg outfit-bold">NFT</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex space-x-6 text-gray-700 font-medium outfit-bold">
                        <a href="/createNFT">Create NFT</a>
                        <a href="/buyNFT">Buy NFT</a>
                        <a href="/auctionNFT">Auction NFT</a>
                        <a href="/stakeNFT">Stake NFT</a>
                        <a href="/aboutUs">About Us</a>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4 items-center outfit-bold">
                        <button className="border border-purple-600 text-purple-600 p-2 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-400 p-3 rounded-full'></div>
                        </button>

                        <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hidden sm:block">
                            Wallet Connect
                        </button>

                        <button className=" bg-gradient-to-r from-purple-500 to-pink-400 text-white px-5 py-2 rounded-lg hidden sm:block" onClick={() => setIsModalOpen(true)}>
                            Contact Us
                        </button>

                        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <XMarkIcon className='h-6' /> : <Bars4Icon className='h-6' />}
                        </button>
                    </div>
                </nav>

                {isOpen && (
                    <div className="md:hidden outfit-bold flex flex-col items-start bg-white p-5 rounded-lg shadow-lg absolute top-[130px] left-[53%] w-[35%]">
                        <a href="/createNFT" className="block py-2">Create NFT</a>
                        <a href="/buyNFT" className="block py-2">Buy NFT</a>
                        <a href="/auctionNFT" className="block py-2">Auction NFT</a>
                        <a href="/stakeNFT" className="block py-2">Stake NFT</a>
                        <a href="/aboutUs" className="block py-2">About Us</a>
                    </div>
                )}

                {isMenuOpen && (
                    <div className="flex flex-col outfit-bold items-start bg-white p-2 rounded-lg shadow-lg absolute top-[103px] lg:right-[27%] lg:w-[8%] sm:w-[25%] sm:right-[47%] sm:top-[120px]">
                        <ul className="space-y-2">
                            <Link to="/profile">
                                <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                    <UserIcon className="h-5 w-5 text-gray-600" />
                                    <span>Profile</span>
                                </li>
                            </Link>
                            <li className="border-t border-gray-300 my-2"></li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <EyeIcon className="h-5 w-5 text-gray-600" />
                                <span>Watchlist</span>
                            </li>
                        </ul>
                    </div>


                )}

                <div className="flex flex-col items-center justify-center text-center mt-10 px-4 mb-10">
                    <h1 className="text-2xl outfit-bold md:text-5xl font-bold text-gray-900">
                        Creator Profile
                    </h1>
                </div>
            </div>

            {/* Profile Section */}
            <div className="relative -mt-16 sm:-mt-10 flex flex-col items-center text-center">
                <img
                    src={Artist}
                    alt="Creator"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-purple-600"
                />
                <h1 className="text-2xl md:text-2xl font-bold mt-2 outfit-bold">Stive Machman</h1>
                <p className="text-purple-400 text-md md:text-base outfit-bold">@stive.lio</p>
                <p className="text-gray-400 text-md md:text-base max-w-xs md:max-w-md mt-2 outfit-light">
                    My name is Justin Baker & changed my occupation after five years of
                    working in sales. I still like drawing.
                </p>

                <div className="flex items-center gap-6 text-gray-400 text-md mt-4 outfit-light">
                    <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4 text-gray-800" /> Bran Street, New York, USA
                    </div>
                    <div className="flex items-center gap-1">
                        <LinkIcon className="h-4 w-4 text-gray-800" />  <a href="#" className="text-blue-400">bit.ly/yte89k6</a>
                    </div>
                    <div className="flex items-center gap-1">
                        <CalendarDaysIcon className="h-4 w-4 text-gray-800" />  Joined March 2010
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-6 flex justify-center gap-6 text-center">
                <div>
                    <p className="text-xl font-semibold outfit-bold">820</p>
                    <p className="text-gray-400 text-md outfit-light">Created</p>
                </div>
                <div>
                    <p className="text-xl font-semibold outfit-bold">879,502</p>
                    <p className="text-gray-400 text-md outfit-light">Likes</p>
                </div>
                <div>
                    <p className="text-xl font-semibold outfit-bold">879,632</p>
                    <p className="text-gray-400 text-md outfit-light">Followers</p>
                </div>
                <div>
                    <p className="text-xl font-semibold outfit-bold">87,775</p>
                    <p className="text-gray-400 text-md outfit-light">Following</p>
                </div>
            </div>

            {/* NFT Collection Section */}
            <div className="container mx-auto mt-16">
                <div className="mt-8">
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



                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="bg-[#1A0B2E] p-4 rounded-lg hover:shadow-lg transition"
                            >
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="NFT Item"
                                    className="w-full rounded-lg"
                                />
                                <p className="mt-2 font-semibold">{activeTab === "created" ? "Created NFT" : "Owned NFT"} Name</p>
                                <p className="text-gray-400 text-sm">Current Bid</p>
                                <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg w-full">
                                    Place Bid
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Creator
