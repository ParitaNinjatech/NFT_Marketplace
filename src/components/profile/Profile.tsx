import { useState } from 'react';
import {
    UserIcon,
    EyeIcon,
    Bars4Icon,
    XMarkIcon,
    Link,
} from "../../common/index";
import { Logo } from '../../assets';
import { ContactUs, ProfileSection } from '../index';

function Profile() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div className='m-4'>
            <div className="bg-gradient-to-r from-purple-300 to-pink-200 flex flex-col items-center rounded-2xl">
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
                        Profile Page
                    </h1>
                    <p className="outfit-light mt-4 text-gray-600 max-w-2xl">
                        Manage your account, create, list, and auction NFTs, and stake digital assets. Update your wallet address, username, and profile image for a seamless experience.
                    </p>
                </div>
            </div>

            <div>
                <ProfileSection />
            </div>

            {
                isModalOpen && (<ContactUs isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />)
            }
        </div>
    )
}

export default Profile
