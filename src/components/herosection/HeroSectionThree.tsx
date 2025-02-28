import {
    Cea1,
    Cea2,
    Cea3,
    Cea4,
    Cea5,
    Cea6,
    Cea7,
    Cur1,
    Cur2,
    Cur3,
    Cur4,
    Cur5,
    Cur6
} from '../../assets';
import { ChevronDoubleDownIcon, Link } from "../../common/index"

function HeroSectionThree() {
    const nfts = [
        {
            name: "NFT One",
            floor: "0.31 ETH",
            image: Cur1,
        },
        {
            name: "NFT Two",
            floor: "0.04 ETH",
            image: Cur2,
        },
        {
            name: "NFT Three",
            floor: "0.51 ETH",
            image: Cur3,
        },
        {
            name: "NFT Four",
            floor: "0.18 ETH",
            image: Cur4,
        },
        {
            name: "NFT Five",
            floor: "< 0.01 ETH",
            image: Cur5,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cea1,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cea2,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cur6,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cea3,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cea4,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cea5,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cea6,
        },
        {
            name: "NFT Six",
            floor: "0.02 ETH",
            image: Cea7,
        },
    ];
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className='text-3xl font-bold outfit-bold text-gray-800 mb-10'>Discover NFTs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {nfts.map((nft: any, index: number) => (
                        <Link to={`/listItem/${index}`}>
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-115 transition duration-1500 sm:hover:scale-115 transition duration-1500 ">
                            <img
                                src={nft.image}
                                alt={nft.name}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold outfit-bold">{nft.name}</h3>
                                <p className="text-gray-500 text-md outfit-light">Price: {nft.floor}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
                <Link to="/buyNFT">
                <button className="flex outfit-bold text-md ml-[45%] gap-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold py-4 px-8 rounded-full mt-8 ">
                    <ChevronDoubleDownIcon className="w-6 h-6" /> View More
                </button>
                </Link>
            </div>
        </>
    )
}

export default HeroSectionThree;
