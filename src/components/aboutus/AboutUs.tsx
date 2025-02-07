import { useState } from 'react';
import { Logo } from '../../assets';
import {
    UserIcon,
    EyeIcon,
    Cog6ToothIcon,
    ArrowLeftStartOnRectangleIcon,
    BookOpenIcon,
    QuestionMarkCircleIcon,
    Bars4Icon,
    XMarkIcon,
    Link,
} from "../../common/index";
import { PlatformOverview, TeamOverview, FutureScope } from "../../components"


function AboutUs() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='m-4'>
            <div className="bg-gradient-to-r from-purple-300 to-pink-200 flex flex-col items-center rounded-2xl">
                <nav className="bg-white m-5 rounded-l-full rounded-r-full flex justify-between items-center p-3 w-[90%] sm:w-[85%] md:w-[80%]">
                    <Link to="/" >
                        <div className="flex items-center space-x-2">
                            <img src={Logo} alt="NFT Logo" className="h-8" />
                            <span className="text-purple-700 font-bold text-lg">NFT</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <a href="#">Create NFT</a>
                        <a href="#">Buy NFT</a>
                        <a href="#">Auction NFT</a>
                        <a href="#">Stake NFT</a>
                        <a href="/aboutUs">About Us</a>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4 items-center">
                        <button className="border border-purple-600 text-purple-600 p-2 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-400 p-3 rounded-full'></div>
                        </button>

                        <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hidden sm:block">
                            Wallet Connect
                        </button>

                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hidden sm:block">
                            Contact us →
                        </button>

                        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <XMarkIcon className='h-6' /> : <Bars4Icon className='h-6' />}
                        </button>
                    </div>
                </nav>

                {isOpen && (
                    <div className="md:hidden flex flex-col items-start bg-white p-5 rounded-lg shadow-lg absolute top-[130px] left-[53%] w-[35%]">
                        <a href="#" className="block py-2">Create NFT</a>
                        <a href="#" className="block py-2">Buy NFT</a>
                        <a href="#" className="block py-2">Auction NFT</a>
                        <a href="#" className="block py-2">Stake NFT</a>
                        <a href="/aboutUs" className="block py-2">About Us</a>
                    </div>
                )}

                {isMenuOpen && (
                    <div className="flex flex-col items-start bg-white p-2 rounded-lg shadow-lg absolute top-[103px] lg:right-[27%] lg:w-[9%] sm:w-[25%] sm:right-[47%] sm:top-[120px]">
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <UserIcon className="h-5 w-5 text-gray-600" />
                                <span>Profile</span>
                            </li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <EyeIcon className="h-5 w-5 text-gray-600" />
                                <span>Watchlist</span>
                            </li>
                            <li className="border-t border-gray-300 my-2"></li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <Cog6ToothIcon className="h-5 w-5 text-gray-600" />
                                <span>Settings</span>
                            </li>
                            <li className="border-t border-gray-300 my-2"></li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-gray-600" />
                                <span>Log Out</span>
                            </li>
                            <li className="border-t border-gray-300 my-2"></li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <BookOpenIcon className="h-5 w-5 text-gray-600" />
                                <span>Learn</span>
                            </li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600" />
                                <span>Help Center</span>
                            </li>
                            <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                                <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600" />
                                <span>Support</span>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="flex flex-col items-center justify-center text-center mt-10 px-4 mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                        About Us
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl">
                        Welcome to our NFT Marketplace – a revolutionary platform designed for creators, collectors, and enthusiasts alike. Our goal is to bridge the gap between digital art and blockchain technology, providing a seamless space for minting, trading, and exploring NFTs. Below is a detailed overview of who we are, our vision, and what makes us unique.
                    </p>
                </div>
            </div>

            <div>
                <PlatformOverview />
            </div>

            <div>
                <TeamOverview />
            </div>

            <div><FutureScope /></div>
        </div>
    )
}

export default AboutUs
