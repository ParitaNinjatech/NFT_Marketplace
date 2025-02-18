import { useState } from 'react'
import { XCircleIcon } from '../../common';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    nftDetails?: any;
    onMintComplete: (isSuccess: boolean) => void;
    onSaleType: (saleType: string) => void;
    onCancelSale: (iscancel: boolean) => void;
}

function ListEditingModal({ onClose, nftDetails, onMintComplete, onSaleType, onCancelSale }: ModalProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [nftPrice, setNFTPrice] = useState<number>(0);

    const handleListingComplete = (isSuccess: boolean) => {
        onSaleType("fixed");
        onMintComplete(isSuccess);
        onClose();
    };

    const handleCancel = () => {
        onCancelSale(true);
        onClose();
    }
    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center outfit-bold overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] sm:h-[70%] lg:h-[53%] border border-gray-300 shadow-lg overflow-y-auto max-h-full" // Added max-h-full and overflow-y-auto
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
                        <h1 className='text-3xl font-bold outfit-bold'>Edit Listing</h1>
                    </div>

                    <div className="flex justify-between  outfit-light mb-6 mt-6">
                        <div className='flex gap-2'>
                            <img src={nftDetails?.image} alt="" className='w-24 h-24 rounded-full' />
                            <h3 className='text-lg font-bold outfit-bold mt-4 '>{nftDetails?.title || "--"}
                                <br />
                                <p className='text-md text-gray-600 outfit-light'>Expires in 28 days</p>
                            </h3>
                        </div>

                        <div className=''>
                            <h4 className="text-md text-gray-600 outfit-light">Listing Price</h4>
                            <p className="font-bold mt-2 text-md text-purple-600 outfit-bold text-end">{nftDetails?.price || "--"} ETH</p>
                            <p className="font-bold mt-2 text-sm text-gray-600 outfit-bold text-end">$12485.00</p>

                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-lg font-bold outfit-bold">Set new price</p>
                        <div className="border border-purple-600 rounded-md p-2 flex items-center mt-2">
                            <input
                                type="number"
                                placeholder="Price"
                                className="flex-1 outline-none text-md outfit-light"
                                value={nftPrice}
                                onChange={(e) => setNFTPrice(Number(e.target.value))}
                            />
                            <span className="ml-2 outfit-bold">ETH</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 mt-6">
                        <span className="text-lg font-bold outfit-bold ">Use previous listing expiration date</span>
                        <label className="relative inline-block w-10 h-6">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <span className="absolute inset-0 bg-gray-300 peer-checked:bg-blue-600 rounded-full cursor-pointer"></span>
                            <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>

                    <div>
                        {isChecked ? (
                            <p className="text-sm text-gray-500 mb-6">18 March 2025 at 12:18 PM</p>

                        ) : (
                            <>
                                {
                                    nftDetails?.category === "On sale" ? (
                                        <div className="flex gap-28">

                                            <div>
                                                <select className="border border-purple-400 p-3 rounded-lg w-[150%] mt-6 outfit-light">
                                                    <option>1 month</option>
                                                    <option>3 months</option>
                                                    <option>6 months</option>
                                                </select>
                                            </div>

                                            <div>
                                                <input type="date" className="border border-purple-400 p-3 rounded-lg w-[150%] mt-6  outfit-light" />
                                            </div>

                                        </div>
                                    ) : (
                                        <div className="flex gap-28">
                                            <div>
                                                <h3 className="text-md outfit-light font-medium mt-2">Start Date</h3>
                                                <input type="date" className="border border-purple-400 p-3 rounded-lg w-[110%] mt-6  outfit-light" />
                                            </div>

                                            <div>
                                                <h3 className="text-md outfit-light font-medium mt-2">End Date</h3>
                                                <input type="date" className="border border-purple-400 p-3 rounded-lg w-[110%] mt-6  outfit-light" />
                                            </div>

                                        </div>
                                    )
                                }
                            </>


                        )
                        }
                    </div>

                    <div className='flex mt-8 justify-between item-center'>
                        <button className='bg-red-100 text-center text-red-400 w-50 h-12 outfit-light rounded-xl hover:bg-red-200' onClick={() => handleCancel()}>
                            Cancel List
                        </button>

                        <button className='bg-gradient-to-r from-purple-500 to-pink-400 text-center text-white w-50 h-12 rounded-xl' onClick={() => handleListingComplete(true)}>
                            Confirm
                        </button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default ListEditingModal
