import { ShieldCheckIcon ,Squares2X2Icon ,WalletIcon ,WrenchScrewdriverIcon,LockClosedIcon } from "../../common/index"
function HeroSectionFour() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-3xl font-bold outfit-bold text-gray-800 mb-10'>Why Choose Our NFT Platform?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        <div className="bg-white rounded-lg  row-span-2 shadow-md  p-4 border border-purple-400 hover:scale-105 transition duration-1500"
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
          <h3 className="text-xl font-semibold outfit-bold mb-2 flex items-center gap-2 "><ShieldCheckIcon className="h-6 w-6 text-pink-600"/>Why Choose Us ?</h3>
          <p className="text-gray-600 outfit-light text-md">Our platform offers a unique and seamless experience for NFT enthusiasts. We prioritize security, user-friendly interfaces, and cutting-edge features. With a wide range of NFT categories like Top Rated, Recently Created, Auctions, and Staking, we ensure that users can easily explore and engage with the NFT ecosystem. Our commitment to transparency, secure blockchain technology, and continuous innovation sets us apart, making our platform the ideal choice for creators and collectors alike. Join us today and be part of the future of digital assets!</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
          <h3 className="text-xl font-semibold outfit-bold mb-2 flex items-center gap-2"><Squares2X2Icon className="h-6 w-6 text-pink-600"/>Diverse NFT Categories</h3>
          <p className="text-gray-600 outfit-light text-md">Explore Top Rated, Recently Created, Auctions, and Staking NFTs in one place.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
          <h3 className="text-xl font-semibold outfit-bold mb-2 flex items-center gap-2"><WalletIcon className="h-6 w-6 text-pink-600"/>Seamless Wallet Integration</h3>
          <p className="text-gray-600 outfit-light text-md">Easily connect your wallet for secure and fast transactions.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
          <h3 className="text-xl font-semibold outfit-bold mb-2 flex items-center gap-2"><WrenchScrewdriverIcon className="h-6 w-6 text-pink-600"/>Multi-Action NFT Management</h3>
          <p className="text-gray-600 outfit-light text-md">Mint, list, auction, or stake NFTs all from a single platform.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
          style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
          <h3 className="text-xl font-semibold outfit-bold mb-2 flex items-center gap-2"><LockClosedIcon className="h-6 w-6 text-pink-600"/>Blockchain Security</h3>
          <p className="text-gray-600 outfit-light text-md">Enjoy secure, transparent transactions with industry-standard blockchain technology.</p>
        </div>

      </div>

    </div>
  )
}

export default HeroSectionFour;
