import { Cea1 } from "../../assets";
import { XCircleIcon, WalletIcon } from "../../common";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function PlaceBid({ onClose }: ModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] sm:h-[70%] lg:h-[57%] border border-gray-300 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-6 right-4 sm:top-16 sm:right-6 text-2xl font-bold"
                    onClick={onClose}
                >
                    <XCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </button>
                <h2 className="text-2xl font-semibold  outfit-bold">Place Bid</h2>
                <div className="flex items-center mt-4">
                    <div className="relative">

                        <img
                            src={Cea1}
                            alt="NFT"
                            className={`w-24 h-24 rounded-full`}

                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-lg font-semibold  outfit-bold">NFT1</p>
                        <p className="text-md text-gray-500 outfit-light">My Panda</p>
                        <p className="text-md text-gray-500 outfit-light">Chain: Amoy</p>
                    </div>
                    <div className="ml-auto text-right">
                        <p className="text-lg font-semibold  outfit-bold">1 ETH</p>
                        <p className="text-md text-gray-500 outfit-light">$2,675.80</p>
                    </div>
                </div>

                <div className="bg-gray-200 flex items-center mt-6">
                    <div className="ml-3 mt-4">
                        <p className="flex text-lg gap-3  text-gray-800 outfit-bold"><WalletIcon className="w-6 h-6 text-bold" />Balance</p>
                        <p className="text-lg  text-gray-800  mt-2 outfit-bold">Floor Price</p>
                        <p className="text-lg text-gray-800  mt-2 outfit-bold">Best Offer</p>
                    </div>
                    <div className="ml-auto mr-4 mt-4 text-right">
                        <p className="text-lg text-gray-800  outfit-bold">1 ETH</p>
                        <p className="text-lg text-gray-800  mt-2 outfit-bold">0.149 ETH</p>
                        <p className="text-lg text-gray-800  mt-2 outfit-bold">0.149 ETH</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-medium outfit-bold mt-6">Make a Bid</h3>
                    <div className="flex items-center border border-purple-400 p-3 rounded-lg space-x-2 mt-6">
                        <input
                            type="number"
                            placeholder="Amount"
                            className="flex-1 outline-none"

                        />
                        <p className="mr-3">ETH</p>
                    </div>
                </div>

                <div>
                    <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 rounded-lg flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300" >
                        Make Bid
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlaceBid
