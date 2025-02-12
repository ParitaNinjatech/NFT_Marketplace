import { XCircleIcon } from '../../common';
import { Cea1 } from "../../assets"
import { useEffect } from 'react';
import "./ListProgressBar.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onMintComplete: (isSuccess: boolean) => void;
    loading: boolean;
    onCloseLoading: () => void;
}

function ListProgressBar({ loading, isOpen, onClose, onCloseLoading, onMintComplete }: ModalProps) {


    useEffect(() => {

        const isSuccess = true;
        const timeout = setTimeout(() => {
            onMintComplete(isSuccess);
            onClose();

        }, 10000);

        return () => clearTimeout(timeout);

    }, [loading, onMintComplete, onClose]);
    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] sm:h-[70%] lg:h-[40%] border border-gray-300 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-10 right-10 sm:top-16 sm:right-6 text-2xl font-bold"
                    onClick={onClose}
                >
                    <XCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </button>
                <h2 className="text-2xl font-semibold  outfit-bold">Approve listing</h2>
                <div className="flex items-center mt-4">
                    <div className="relative">
                        {loading && (
                            <div className="absolute inset-0 flex justify-center items-center  opacity-150">
                                <span className="ListProgressBar"></span>
                            </div>
                        )}
                        <img
                            src={Cea1}
                            alt="NFT"
                            className={`w-24 h-24 rounded-full ${isOpen ? 'opacity-100' : 'opacity-100'}`}
                            onLoad={onCloseLoading}
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
                <div className='border-t mt-8 border-gray-400'>
                    <p className="text-lg font-semibold mt-4 text-base outfit-bold">Go to your wallet</p>
                    <p className="text-md text-gray-500 outfit-light">
                        You'll be asked to review and confirm this listing from your wallet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ListProgressBar;
