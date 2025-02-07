import { NFTHome } from "../../assets"

function PlatformOverview() {
    return (
        <div className="container mx-auto px-4 py-8 mt-8  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10%] lg:gap-[15%] w-full">
                {/* First Column */}
                <div className="p-4">
                <h1 className='text-3xl font-bold text-gray-800 mb-10'>Overview</h1>
                    <p className="text-gray-600 text-center sm:text-left">Our NFT Marketplace offers a secure, transparent, and user-friendly environment for creators and collectors to engage with digital assets. With a focus on simplicity, security, and innovation, we aim to become a global hub for the creation, buying, selling, and trading of NFTs.</p>
                    <br />
                    <br />
                    <p className="text-gray-600 text-center sm:text-left">We ensure an intuitive experience that makes the process of minting and managing NFTs easier for creators while offering a vast selection of digital art for collectors to discover and enjoy. Our platform leverages cutting-edge blockchain technology to ensure a decentralized and trustworthy space for all users.</p>

                </div>

                <div>
                   <img src={NFTHome} alt="" className="w-[70%] h-[90%]"/>
                </div>

            </div>
        </div>
    )
}

export default PlatformOverview
