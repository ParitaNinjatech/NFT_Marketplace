import { XCircleIcon } from '../../common'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onStakeComplete: (isSuccess: boolean) => void;
}
function StakeNFTSectionModal({ isOpen, onClose , onStakeComplete }: ModalProps) {
    const handleListingComplete = (isSuccess: boolean) => {
        onStakeComplete(isSuccess);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center outfit-bold overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] sm:h-[70%] lg:h-[80%] border border-gray-300 shadow-lg overflow-y-auto max-h-full" // Added max-h-full and overflow-y-auto
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-6 right-4 sm:top-16 sm:right-6 text-2xl font-bold"
                    onClick={onClose}
                >
                    <XCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </button>
                <div className="p-4 w-full md:w-1/2 lg:w-full mt-1 mb-10 overflow-y-auto">

                    <div className="flex justify-between  outfit-light mb-6">
                        <h1 className='text-3xl font-bold outfit-bold'>Stake NFT</h1>
                    </div>


                    <div>
                        <h3 className="text-xl font-medium outfit-bold mt-6">Token Id</h3>
                        <div className="flex items-center border border-purple-400 p-3 rounded-lg space-x-2 mt-6">
                            <input
                                type="number"
                                placeholder="token id"
                                className="flex-1 outline-none"
                            />
                        </div>

                    </div>

                    <div>
                        <h3 className="text-xl font-medium outfit-bold mt-6">NFT Address</h3>
                        <div className="flex items-center border border-purple-400 p-3 rounded-lg space-x-2 mt-6">
                            <input
                                type="text"
                                placeholder="nft address"
                                className="flex-1 outline-none"
                            />

                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl outfit-bold font-medium mt-6">Duration</h3>
                        <select className="border border-purple-400 p-3 rounded-lg w-full mt-6 outfit-light">
                            <option>1 day</option>
                            <option>7 days</option>
                            <option>15 days</option>
                            <option>30 days</option>
                            <option>45 days</option>
                            <option>60 days</option>
                            <option>75 days</option>
                            <option>90 days</option>
                            <option>105 days</option>
                            <option>120 days</option>
                        </select>
                    </div>

                    <div>
                        <h3 className="border-collapse text-xl outfit-bold font-medium mt-8">Summary</h3>
                        <div className="border-b pb-2 space-y-2 text-lg mt-6">
                            <div className="flex justify-between outfit-light">
                                <span>NFT Platform fee</span>
                                <span className="font-semibold">2.5%</span>
                            </div>
                            <div className="flex justify-between outfit-light">
                                <span>
                                    Creator earnings <span className="text-gray-800 cursor-help">ⓘ</span>
                                </span>
                                <span className="font-semibold">0%</span>
                            </div>
                        </div>
                        <div className="flex justify-between font-semibold text-base mt-4">
                            <span>Total potential earnings</span>
                            <span>2 ETH</span>
                        </div>

                        <button
                            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 mt-6 rounded-lg " onClick={() => handleListingComplete(true)}
                        >
                            Stake NFT
                        </button>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default StakeNFTSectionModal
