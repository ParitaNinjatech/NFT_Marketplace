import { useState } from 'react'
import { XCircleIcon } from '../../common'
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    saleType: string
}

function ListSectionModal({ onClose }: ModalProps) {
    const [saleType, setSaleType] = useState<string>("fixed");
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [nftPrice, setNFTPrice] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [loadingforLoader, setLoadingforLoader] = useState<boolean>(false);
    const [listingSuccess, setListingSuccess] = useState<boolean | null>(null);
    const handleListingComplete = (isSuccess: boolean) => {
        setListingSuccess(isSuccess);
        console.log("listing completed. Success:", isSuccess);
    };
    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center outfit-bold"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] sm:h-[70%] lg:h-[100%] border border-gray-300 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-6 right-4 sm:top-16 sm:right-6 text-2xl font-bold"
                    onClick={onClose}
                >
                    <XCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </button>
                <div className="p-4 w-full md:w-1/2 lg:w-full mt-1 mb-10  overflow-y-auto">
                    <h3 className="text-xl font-medium mb-6 outfit-bold">Choose a type of sale</h3>
                    <div className="border border-purple-400 p-4 rounded-lg" style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(255, 105, 180, 0.5), 0px 10px 50px 0px rgba(204, 153, 255, 0.3)" }}>

                        <div className="space-y-2 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer outfit-light text-lg">
                                <input
                                    type="radio"
                                    name="saleType"
                                    value="fixed"
                                    checked={saleType === "fixed"}
                                    onChange={() => setSaleType("fixed")}
                                />
                                <span>Fixed price</span>
                            </label>
                            <p className="text-md text-gray-500 ml-5  outfit-light">The item is listed at the price you set.</p>

                            <label className="flex items-center gap-2 cursor-pointer outfit-light text-lg">
                                <input
                                    type="radio"
                                    name="saleType"
                                    value="auction"
                                    checked={saleType === "auction"}
                                    onChange={() => setSaleType("auction")}
                                />
                                <span>Sell to highest bidder</span>
                            </label>
                            <p className="text-md outfit-light text-gray-500 ml-5">The item is listed for auction.</p>
                        </div>

                    </div>

                    {saleType == "fixed" ? (
                        <div>

                            <h3 className="text-xl font-medium outfit-bold mt-6">Set a price <span className="text-gray-800 cursor-help" onMouseEnter={() => setIsHovered(true)}

                                onMouseLeave={() => setIsHovered(false)}>ⓘ</span></h3>
                            {isHovered && (
                                <div className="absolute bg-gray-800 text-white text-xs p-2 rounded-lg mt-2 max-w-xs">
                                    You will not be able to change the price after listing. If you'd like to change the price, you will need to create a new listing.
                                </div>
                            )}
                            <div className="flex items-center border border-purple-400 p-3 rounded-lg space-x-2 mt-6">
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    className="flex-1 outline-none"
                                    value={nftPrice}
                                    onChange={(e) => setNFTPrice(Number(e.target.value))}
                                />
                                <select className="bg-white outfit-light">
                                    <option>ETH</option>
                                    <option>USDC</option>
                                </select>
                            </div>
                            {
                                nftPrice > 0 && (
                                    <p className="text-md outfit-light ">$1334</p>
                                )
                            }

                        </div>
                    ) : (
                        <div>
                            <h3 className="text-xl font-medium outfit-bold mt-6">Set a price</h3>
                            <p className="text-lg font-medium outfit-light mt-6">Starting a price</p>
                            <div className="flex items-center border border-purple-400 p-3 rounded-lg space-x-2 mt-6">
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    className="flex-1 outline-none"
                                    value={nftPrice}
                                    onChange={(e) => setNFTPrice(Number(e.target.value))}
                                />
                                <p className="mr-3">ETH</p>
                            </div>
                            {
                                nftPrice > 0 && (
                                    <p className="text-md outfit-light ">$1334</p>
                                )
                            }
                        </div>
                    )
                    }

                    {
                        saleType == "fixed" ? (
                            <div>
                                <h3 className="text-xl outfit-bold font-medium mt-6">Duration</h3>
                                <select className="border border-purple-400 p-3 rounded-lg w-full mt-6 outfit-light">
                                    <option>1 month</option>
                                    <option>3 months</option>
                                    <option>6 months</option>
                                </select>
                            </div>
                        ) : (
                            <div className="flex gap-33">
                                <div>
                                    <h3 className="text-xl outfit-bold font-medium mt-6">Start Date</h3>
                                    <input type="date" className="border border-purple-400 p-3 rounded-lg w-[110%] mt-6  outfit-light" />
                                </div>

                                <div>
                                    <h3 className="text-xl outfit-bold font-medium mt-6">End Date</h3>
                                    <input type="date" className="border border-purple-400 p-3 rounded-lg w-[110%] mt-6  outfit-light" />
                                </div>

                            </div>
                        )
                    }


                    <div>
                        <h3 className="border-collapse text-xl outfit-bold font-medium mt-8">Summary</h3>
                        <div className="border-b pb-2 space-y-2 text-lg mt-6">
                            <div className="flex justify-between  outfit-light">
                                <span>Listing price</span>
                                <span className="font-semibold">{nftPrice || "--"} ETH</span>
                            </div>
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
                            <span>{nftPrice || "--"} ETH</span>
                        </div>
                        {
                            nftPrice > 0 && (
                                <p className="text-md outfit-light text-end">$1334</p>
                            )
                        }
                        <button
                            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 mt-6 rounded-lg " onClick={() => setOpenModal(true)}

                        >
                            Complete listing
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListSectionModal
