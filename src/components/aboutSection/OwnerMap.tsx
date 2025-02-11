
function OwnerMap() {
    return (
        <div className="container mx-auto px-4 py-8">

            <h1 className='text-3xl font-bold text-gray-800 mb-10 outfit-bold'>Contact Our NFT Marketplace Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                {[
                    {
                        title: "Phone",
                        description:
                            "For immediate assistance, reach out to our customer support team at our NFT Marketplace.",
                        icon: "📞",
                        data: "+1 (555) 987 6543",
                    },
                    {
                        title: "Email",
                        description:
                            "Have any questions or need support? Contact us via email for any inquiries.",
                        icon: "📧",
                        data: "support@nftmarketplace.com",
                    },
                    {
                        title: "Location",
                        description:
                            "Our main office is located at the heart of the digital revolution, focusing on the future of NFTs.",
                        icon: "📍",
                        data: "456 Crypto Avenue, Blockchain City, Decentralized Country",
                    },
                ].map((info, index) => (
                    <div
                        key={index}
                        className="bg-white  rounded-lg  row-span-2 shadow-md  p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                        style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>

                        <div className="text-blue-600 text-4xl mb-4 text-center">{info.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 text-center outfit-bold">{info.title}</h3>
                        <p className="text-gray-600 mt-2 text-md text-center outfit-light">{info.description}</p>
                        <p className="text-blue-600 mt-2 text-md font-semibold text-center outfit-light">{info.data}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OwnerMap
