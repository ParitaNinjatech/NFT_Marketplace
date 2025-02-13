import { useState, useEffect } from "react";
import { XCircleIcon, Circle } from "../../common";
import { CheckMark, Shield } from "../../assets/index";

import "./BuyProgressBar.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BuyingProgressBar = ({ onClose }: ModalProps) => {
    const [step, setStep] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (step === 4) {

            const timeout = setTimeout(() => {
                onClose();
            }, 10000);

            return () => clearTimeout(timeout);
        }
    }, [step, onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-gry-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center"
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
                <h2 className="text-lg font-semibold text-gray-800">Processing Your Purchase</h2>

                <div className="mt-4 space-y-4">
                    <div className="flex items-center space-x-2">
                        {step === 1 ? (
                            <span className="loader"></span>
                        ) : step > 1 ? (
                            <img src={CheckMark} alt="" className="w-8 h-8" />
                        ) : (
                            <Circle size={30} />
                        )}
                        <p className={`text-lg ${step >= 1 ? "text-gray-800" : "text-gray-500"}`}>
                            Verifying your payment details
                            <p className="text-sm text-gray-500">Please wait while we verify your information.</p>
                        </p>
                    </div>

                    <div className="flex items-center space-x-2">
                        {step === 2 ? (
                            <span className="loader"></span>
                        ) : step > 2 ? (
                            <img src={CheckMark} alt="" className="w-8 h-8" />
                        ) : (
                            <Circle size={30} />
                        )}
                        <p className={`text-md ${step >= 2 ? "text-gray-800" : "text-gray-500"}`}>
                            Processing your payment
                            <p className="text-sm text-gray-500">This may take a few minutes.</p>
                        </p>
                    </div>

                    <div className="flex items-center space-x-2">
                        {step === 3 ? (
                            <span className="loader"></span>
                        ) : step > 3 ? (
                            <img src={CheckMark} alt="" className="w-8 h-8" />
                        ) : (
                            <Circle size={30} />
                        )}
                        <p className={`text-md ${step >= 3 ? "text-gray-800" : "text-gray-500"}`}>
                            Confirming your purchase
                            <p className="text-sm text-gray-500">Please do not close this page.</p>
                        </p>
                    </div>

                    {step === 4 && (
                        <div className="flex mt-8 mb-10">
                            <img src={Shield} alt="" className="w-24 h-24 ml-24" />
                            <p className="text-md mt-8">All Transactions Completed!</p>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default BuyingProgressBar;
