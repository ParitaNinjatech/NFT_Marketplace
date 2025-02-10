import { XCircleIcon } from "../../common/index";
import { Required } from "../../assets/index"
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
function ContactUs({ onClose }: ModalProps) {
    return (

        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] sm:h-[100%] lg:h-[70%] border border-gray-300 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-6 right-4 sm:top-16 sm:right-6 text-2xl font-bold"
                    onClick={onClose}
                >
                    <XCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
                </button>
                <h2 className="text-2xl text-purple-600 text-center">Contact Us</h2>
                <p className="flex mt-8 text-semibold text-lg">Email <img src={Required} alt="" className="w-2 h-2 mt-1 ml-1" /> </p>
                <input type="text" placeholder="demo@gmail.com" className="w-full border border-gray-300 p-2 rounded-lg mt-2" />
                <p className="flex mt-6 text-semibold text-lg">First Name <img src={Required} alt="" className="w-2 h-2 mt-1 ml-1" /> </p>
                <input type="text" placeholder="John" className="w-full border border-gray-300 p-2 rounded-lg mt-2" />
                <p className="flex mt-6 text-semibold text-lg">Last Name <img src={Required} alt="" className="w-2 h-2 mt-1 ml-1" /> </p>
                <input type="text" placeholder="Doe" className="w-full border border-gray-300 p-2 rounded-lg mt-2" />
                <p className="flex mt-6 text-semibold text-lg">How can we help you? <img src={Required} alt="" className="w-2 h-2 mt-1 ml-1" /> </p>
                <textarea rows={4} placeholder="Enter your message" className="w-full border border-gray-300 p-2 rounded-lg mt-2" />
                <div className="flex gap-2">

                    <input type="checkbox" className=" w-4 h-4 mt-2" /> <p className=" text-semibold text-md mt-1">I agree to the terms and conditions</p>
                    <img src={Required} alt="" className="w-2 h-2 mt-2 " />
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-400 text-white w-full h-14 rounded-full mt-6 mb-4">
                    Submit
                </button>
            </div>
        </div>

    )
}

export default ContactUs
