import { Create, Hammer, Wallet, Grid, Shield } from "../../assets"

function FeaturesList() {
    return (
        <div className="container mx-auto px-4 py-8">

            <h1 className='text-3xl font-bold text-gray-800 mb-10 outfit-bold'>Key Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
                <div className="bg-white rounded-lg  row-span-2 shadow-md  p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Wallet} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4 outfit-bold">Seamless Wallet Integration</h3>
                    <p className="text-gray-600 text-center text-md outfit-light">Connect your digital wallet with ease to begin trading, bidding, and minting NFTs.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Grid} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4  outfit-bold">Wide Variety of NFTs</h3>
                    <p className="text-gray-600 text-center text-md outfit-light">Explore a diverse range of NFTs, from digital art to collectibles, gaming assets, and beyond.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Shield} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4 outfit-bold ">Secure Transactions</h3>
                    <p className="text-gray-600 text-center text-md outfit-light">Every transaction on the platform is powered by blockchain technology, ensuring transparency and security.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Hammer} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4 outfit-bold ">Auction and Staking Options</h3>
                    <p className="text-gray-600 text-center text-md outfit-light">Not just for buying and selling, our platform allows users to participate in auctions and stake their NFTs for rewards.</p>
                </div>

                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Create} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4 outfit-bold ">Easy Minting Process</h3>
                    <p className="text-gray-600 text-center text-md outfit-light">Creators can easily mint their NFTs, set prices, and put them up for sale, all with a few clicks.</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesList
