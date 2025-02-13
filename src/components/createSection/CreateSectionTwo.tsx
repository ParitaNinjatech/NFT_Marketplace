import { ArrowUpRightIcon, Link, XCircleIcon } from '../../common';
import { Cea1, Redirect } from '../../assets';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function CreateSectionTwo({ onClose }: ModalProps) {
    const  id :any = "3"
    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center outfit-bold"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] sm:h-[70%] lg:h-[50%] border border-gray-300 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-6 right-4 sm:top-16 sm:right-6 text-2xl font-bold"
                    onClick={onClose}
                >
                    <XCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </button>
                <img src={Cea1} alt="" className='w-[32%] h-[35%] ml-[35%]' />
                <h2 className="text-2xl  text-gray-800 text-center  mt-10">Your item has been Minted </h2>

                <div className='flex justify-center item-center mt-8 gap-6 ml-[30%]'>
                    <Link to={`/createdItem/${id}/sell`}>
                    <button className='bg-white to-pink-400 text-purple-600 w-40 h-14 rounded-full mt-6 mb-4 border border-purple-600 transform -translate-x-1/2'>List Item</button>
                    </Link>
                    <Link to={"/createItem/3"}>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-400 text-white w-40 h-14 rounded-full mt-6 mb-4 transform -translate-x-1/2 flex items-center justify-center gap-2">
                        View Item
                        <ArrowUpRightIcon className="w-5 h-5" />
                    </button>
                    </Link>
                </div>

                <h4 className='text-center text-gray-900 text-lg mt-6 underline flex items-center justify-center gap-2 hover:text-gray-600'>View on Polygonscan <img src={Redirect} alt='' className='w-4 h-4' /></h4>
            </div>
        </div>
    )
}

export default CreateSectionTwo;
