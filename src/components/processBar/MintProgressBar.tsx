import { useState, useEffect } from "react";
import { XCircleIcon, Circle } from "../../common";
import { CheckMark, Shield } from "../../assets/index";
import { CreateSectionTwo } from "../index"
import "./MintProgressBar.css"


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMintComplete: (isSuccess: boolean) => void;
}

const MintingProgressBar = ({ onClose, onMintComplete }: ModalProps) => {
  const [step, setStep] = useState(1);
  const [openModal, setOpenModal] = useState<boolean>(false)


  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step === 4) {
      const isSuccess = true;

      onMintComplete(isSuccess);
      const timeout = setTimeout(() => {
        onClose();

      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [step, onMintComplete, onClose]);
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
        <h2 className="text-lg font-semibold text-gray-800">Creating your item</h2>

        <div className="mt-4 space-y-4">
          <div className="flex items-center space-x-2">
            {step == 1 ? (
              <span className="loader"></span>

            ) : step > 1 ? (
              <img src={CheckMark} alt="" className="w-8 h-8" />
            ) : (
              <Circle size={30} />

            )}
            <p className={`text-lg ${step >= 1 ? "text-gray-800" : "text-gray-500"}`}>
              Uploading to decentralized server
              <p className="text-sm text-gray-500">This may take a few minutes. </p>
            </p>
          </div>


          <div className="flex items-center space-x-2">
            {step == 2 ? (
              <span className="loader"></span>
            ) : step > 2 ? (
              <img src={CheckMark} alt="" className="w-8 h-8" />
            ) : (
              <Circle size={30} />
            )}
            <p className={`text-md ${step >= 2 ? "text-gray-800" : "text-gray-500"}`}>
              Go to your wallet to approve this transaction
              <p className="text-sm text-gray-500 ">A blockchain transaction is required to mint NFT. </p>
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {step == 3 ? (
              <span className="loader"></span>
            ) : step > 3 ? (
              <img src={CheckMark} alt="" className="w-8 h-8" />
            ) : (
              <Circle size={30} />
            )}
            <p className={`text-md ${step >= 3 ? "text-gray-800" : "text-gray-500"}`}>
              Minting your item
              <p className="text-sm text-gray-500 ">Please stay on this page and keep this browser tab open. </p>
            </p>
          </div>

          {
            step == 4 && (
              <div className="flex mt-8 mb-10">
                <img src={Shield} alt="" className="w-24 h-24 ml-24" />
                <p className="text-md mt-8">All Transactions Done!</p>

              </div>
            )
          }
        </div>
      </div>
      {
        openModal && (
          <CreateSectionTwo isOpen={openModal} onClose={() => setOpenModal(false)} />
        )

      }
    </div>

  );
};

export default MintingProgressBar;

