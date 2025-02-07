import { Wallet, NFTArt, Upload } from "../../assets/index";
function HeroSectionFive() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='text-3xl font-bold text-gray-800 mb-10'>How To Become a Creator</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                <div className="bg-white rounded-lg  row-span-2 shadow-md  p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Wallet} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4 ">Connect your wallet</h3>
                    <p className="text-gray-600 text-center">Easily connect your wallet to our platform. Once connected, you can seamlessly trade, sell, and buy NFTs with secure blockchain
                        technology.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={NFTArt} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4  ">Create Your NFT</h3>
                    <p className="text-gray-600 text-center">Bring your creativity to life! Create, mint, and personalize your own NFTs on our platform. With our simple and seamless process,
                        you'll have your own digital asset in no time.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Upload} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4  ">Upload your NFT</h3>
                    <p className="text-gray-600 text-center">Once your NFT is ready, upload it to our platform to make it available for sale or auction. You can easily manage your assets and
                        engage with the growing NFT marketplace.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionFive
