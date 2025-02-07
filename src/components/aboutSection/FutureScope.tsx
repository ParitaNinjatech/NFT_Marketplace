import { TeamWork, Artist, NFT,World } from "../../assets"

function FutureScope() {
    return (
        <div className="container mx-auto px-4 py-8">

            <h1 className='text-3xl font-bold text-gray-800 mb-4'>Future Scope</h1>
            <p className='mb-10 text-gray-600 text-center'>We believe in the long-term potential of NFTs, and our vision for the platform is ever-evolving. Over the next few years, we aim to introduce new features and partnerships that will help shape the future of the NFT ecosystem.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
                <div className="bg-white rounded-lg  row-span-2 shadow-md  p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={TeamWork} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4 ">Enhanced User Experience</h3>
                    <p className="text-gray-600 text-center">We are continuously working on improving the platform's interface and usability to ensure a seamless experience for users at every stage of the NFT journey.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={Artist} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4  ">Collaborations with Major Artists</h3>
                    <p className="text-gray-600 text-center">We aim to collaborate with globally renowned artists and creators to bring exclusive and high-quality digital art to the marketplace.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={NFT} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4  ">Advanced NFT Features</h3>
                    <p className="text-gray-600 text-center">We plan to implement advanced features like fractionalized ownership, NFT lending, and more, allowing for new ways of interacting with NFTs.</p>
                </div>
                <div className="bg-white rounded-lg row-span-2 shadow-md p-4 border border-purple-400 hover:scale-105 transition duration-1500"
                    style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>
                    <img src={World} className="w-18 h-18 ml-[40%] mt-8" alt="" />
                    <h3 className="text-xl font-semibold mb-2 text-center mt-4  ">Global Expansion</h3>
                    <p className="text-gray-600 text-center">As the NFT space continues to grow, we plan to expand our platform to support multiple languages and offer a truly global marketplace.</p>
                </div>
            </div>
        </div>
    )
}

export default FutureScope;
