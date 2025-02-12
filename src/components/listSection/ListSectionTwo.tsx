import { Link, XCircleIcon } from '../../common';
import { Cea1, Discord, FaceBook, Social, Telegram, Cilp } from '../../assets';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    saleType: string
}

function ListSectionTwo({ onClose, saleType }: ModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center outfit-bold"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] sm:h-[70%] lg:h-[60%] border border-gray-300 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-6 right-4 sm:top-16 sm:right-6 text-2xl font-bold"
                    onClick={onClose}
                >
                    <XCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </button>
                <img src={Cea1} alt="" className='w-[32%] h-[35%] ml-[35%] mt-6' />
                <h2 className="text-3xl  text-gray-800 text-center  mt-10">Your item has been Listed </h2>
                <h4 className='text-center text-gray-900 text-lg mt-6  flex items-center justify-center gap-2'><p className='text-purple-600'>My Panda</p> NFT from the <p className='text-purple-600'> My Collection</p> has been listed for Sale</h4>

                <h4 className='text-center text-gray-700 text-md mt-6  flex items-center justify-center gap-2'>SHARE TO...</h4>

                <div className='flex justify-center sm:justify-start gap-6 item-center ml-[30%] mt-8 '>
                    <img src={Social} className='w-8 h-8 cursor-pointer' alt="Social Media" />
                    <img src={Telegram} className='w-8 h-8 cursor-pointer' alt="Telegram" />
                    <img src={Cilp} className='w-8 h-8 cursor-pointer' alt="Youtube" />
                    <img src={Discord} className='w-8 h-8 cursor-pointer' alt="Discord" />
                    <img src={FaceBook} className='w-8 h-8 cursor-pointer' alt="Facebook" />
                </div>
                {
                    saleType === 'auction' ? (
                        <Link to={'/auction/1/'}>
                            <button
                                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 mt-6 mb-6 rounded-lg "

                            >
                                View Item
                            </button>
                        </Link>
                    ) : (
                        <Link to={'/listItem/1/'}>
                            <button
                                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 mt-6 mb-6 rounded-lg "

                            >
                                View Item
                            </button>
                        </Link>
                    )
                }

            </div>
        </div>
    )
}

export default ListSectionTwo;
