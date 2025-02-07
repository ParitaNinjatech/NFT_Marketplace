import {
    FaceBook,
    Social,
    Telegram,
    Youtube,
    Discord
} from '../../assets/index';

function Footer() {
    return (
        <div className='m-4'>
            <div className="bg-gradient-to-r from-purple-300 to-pink-200 flex flex-col items-center rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {/* First Column */}
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2 text-center sm:text-left">NFT MarketPlace</h3>
                        <p className="text-gray-600 text-center sm:text-left">Experience a seamless, secure, and innovative NFT marketplace where creators and collectors can easily mint, trade, and explore a diverse range of digital assets.</p>

                        <br />
                        <h3 className="text-md text-purple-900 mb-2 text-center sm:text-left">Join Our Community</h3>
                        <div className='flex justify-center sm:justify-start gap-6'>
                            <img src={Social} className='w-8 h-8 cursor-pointer' alt="Social Media" />
                            <img src={Telegram} className='w-8 h-8 cursor-pointer' alt="Telegram" />
                            <img src={Youtube} className='w-8 h-8 cursor-pointer' alt="Youtube" />
                            <img src={Discord} className='w-8 h-8 cursor-pointer' alt="Discord" />
                            <img src={FaceBook} className='w-8 h-8 cursor-pointer' alt="Facebook" />
                        </div>
                        <p className='text-purple-900 mt-8 mb-1 text-center sm:text-left'>Copyright © 2025 NFT MarketPlace</p>
                    </div>

                    <div className="flex  justify-start md:justify-start gap-8 p-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">Explore</h3>
                            <p className="text-gray-600">Marketplace</p>
                            <p className="text-gray-600">Rankings</p>
                            <p className="text-gray-600">Creators</p>
                            <p className="text-gray-600">Collectors</p>
                            <p className="text-gray-600">Auctions</p>
                            <p className="text-gray-600">Staking</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">Resources</h3>
                            <p className="text-gray-600">Help</p>
                            <p className="text-gray-600">Contact</p>
                            <p className="text-gray-600">About Us</p>
                            <p className="text-gray-600">Terms of Service</p>
                            <p className="text-gray-600">Privacy Policy</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">Community</h3>
                            <p className="text-gray-600">Join Community</p>
                            <p className="text-gray-600">News & Blog</p>
                            <p className="text-gray-600">Events</p>
                            <p className="text-gray-600">Brand Assets</p>
                            <p className="text-gray-600">Press Contact</p>
                        </div>
                    </div>

                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">Contact Us</h3>
                        <p className="text-gray-600 text-center sm:text-left">Subscribe for our weekly updates and exclusive offers on NFTs.</p>

                        <br />
                        <div className='flex justify-center sm:justify-start gap-4'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-[250px] sm:w-[300px] p-2 border border-purple-800 rounded-lg"
                            />
                            <button className='bg-gradient-to-r from-purple-500 to-pink-400 text-white px-5 py-2 rounded-lg'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
