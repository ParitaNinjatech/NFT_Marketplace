import { useState } from "react";
import { UploadImage, Required } from "../../assets/index";
import { PencilIcon, TrashIcon, PlusIcon, Dialog } from "../../common/index";
import MintProgressBar from "../processBar/MintProgressBar";
import CreateSectionTwo from "./CreateSectionTwo";

interface Trait {
    id: number;
    key: string;
    value: string;
}

function CreateSectionOne() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [traits, setTraits] = useState<Trait[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [currentTrait, setCurrentTrait] = useState<Trait | null>(null);
    const [isProcess, setIsProcess] = useState<boolean>(false);
    const [mintingSuccess, setMintingSuccess] = useState<boolean | null>(null);

    const handleMintingComplete = (isSuccess: boolean) => {
        setMintingSuccess(isSuccess);
        console.log("Minting completed. Success:", isSuccess);
    };


    const openModal = (trait?: Trait) => {
        setCurrentTrait(trait || { id: Date.now(), key: "", value: "" });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentTrait(null);
    };

    const openDeleteModal = (trait: Trait) => {
        setCurrentTrait(trait);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setCurrentTrait(null);
    };

    const saveTrait = () => {
        if (currentTrait) {
            setTraits((prev) => {
                const exists = prev.some((t) => t.id === currentTrait.id);
                return exists
                    ? prev.map((t) => (t.id === currentTrait.id ? currentTrait : t))
                    : [...prev, currentTrait];
            });
        }
        closeModal();
    };

    const deleteTrait = () => {
        if (currentTrait) {
            setTraits((prev) => prev.filter((t) => t.id !== currentTrait.id));
        }
        closeDeleteModal();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    return (
        <div className="container mx-auto mt-16 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                <div>
                    <div className="border-2 border-dashed border-purple-500 h-[500px] w-full md:w-[90%] lg:w-[70%] flex flex-col items-center justify-center rounded-xl mb-4">
                        <label htmlFor="image">
                            <img
                                src={!selectedImage ? UploadImage : URL.createObjectURL(selectedImage)}
                                alt="Upload"
                                className={`object-cover ${selectedImage ? "w-full h-[490px]" : "w-24 h-24"}`}
                            />
                        </label>
                        <input
                            onChange={handleFileChange}
                            type="file"
                            id="image"
                            hidden
                            required
                            accept="image/*"
                        />
                        {!selectedImage && (
                            <>
                                <div className="text-gray-500 outfit-light text-sm mb-2">Drag and drop media</div>
                                <label htmlFor="image" className="outfit-light text-blue-500 underline cursor-pointer mb-2">
                                    Browse files
                                </label>
                                <p className="text-xs outfit-light text-gray-400 mt-2">Max size: 50MB (JPG, PNG, GIF, SVG, MP4)</p>
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <p className="text-lg font-semibold flex outfit-bold">NFT Title <img src={Required} alt="" className="w- h-2 ml-1 mt-1" /></p>
                    <input type="text" placeholder="Test NFT" className="outfit-light w-full sm:w-[80%] border border-gray-400 p-2 rounded-lg mt-2" />

                    <p className="text-lg font-semibold flex mt-6 outfit-bold">Category <img src={Required} alt="" className="w- h-2 ml-1 mt-1" /></p>
                    <select name="category" id="category" className="outfit-light w-full sm:w-[80%] border border-gray-400 p-2 rounded-lg mt-2">
                        <option value="">Select a Category</option>
                        <option value="Artwork">Artwork</option>
                        <option value="Collectibles">Collectibles</option>
                        <option value="Music">Music</option>
                        <option value="Videos & Animations">Videos & Animations</option>
                        <option value="Photography">Photography</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Virtual Real Estate">Virtual Real Estate</option>
                        <option value="In-Game Items">In-Game Items</option>
                        <option value="Metaverse">Metaverse</option>
                        <option value="Sports">Sports</option>
                        <option value="Profile Picture (PFP) Collections">Profile Picture (PFP) Collections</option>
                    </select>

                    <p className="text-lg font-semibold flex mt-6 outfit-bold">Description <img src={Required} alt="" className="w- h-2 ml-1 mt-1" /></p>
                    <textarea name="description" placeholder="message" id="description" rows={6} className="outfit-light w-full sm:w-[80%] border border-gray-400 p-2 rounded-lg mt-2" />

                    <p className="text-lg font-semibold flex mt-6 outfit-bold">Blockchain Network <img src={Required} alt="" className="w- h-2 ml-1 mt-1" /></p>
                    <select name="network" id="network" className="outfit-light w-full sm:w-[80%] border border-gray-400 p-2 rounded-lg mt-2">
                        <option value="">Select a Blockchain</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Binance Smart Chain">Binance Smart Chain(BNB)</option>
                        <option value="Polygon">Polygon</option>
                    </select>

                    <p className="text-lg font-semibold mt-6 outfit-bold">External Link (optional)</p>
                    <input type="text" placeholder="https://www.artstation.com/artist/johndoe" className="outfit-light w-full sm:w-[80%] border border-gray-400 p-2 rounded-lg mt-2" />

                    <h2 className="text-xl font-semibold mb-4 mt-6 outfit-bold">Traits</h2>
                    <p className="text-gray-600 text-md mb-4 w-[80%] outfit-light">
                        Traits describe attributes of your item. They appear as filters inside
                        your collection page and are also listed inside your item page.
                    </p>
                    <div className="space-y-2">
                        {traits.map((trait) => (
                            <div
                                key={trait.id}
                                className="flex justify-between items-center bg-purple-200 p-2 rounded-md w-full sm:w-[80%]"
                            >
                                <span>{trait.key} : {trait.value}</span>
                                <div className="flex space-x-2">
                                    <button onClick={() => openModal(trait)}>
                                        <PencilIcon className="h-5 w-5 text-blue-500 outfit-bold" />
                                    </button>
                                    <button onClick={() => openDeleteModal(trait)}>
                                        <TrashIcon className="h-5 w-5 text-red-500 outfit-bold" />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={() => openModal()}
                            className="flex items-center text-blue-600 mt-4 outfit-bold"
                        >
                            <PlusIcon className="h-5 w-5 mr-1" /> Add Trait
                        </button>
                    </div>

                    <Dialog open={isModalOpen} onClose={closeModal} className="outfit-bold fixed inset-0 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                            <h3 className="text-lg font-semibold mb-2">{currentTrait?.id ? "Edit Trait" : "Add Trait"}</h3>
                            <input
                                type="text"
                                placeholder="Key"
                                className="border p-2 w-full rounded mb-2"
                                value={currentTrait?.key || ""}
                                onChange={(e) => setCurrentTrait((prev) => prev ? { ...prev, key: e.target.value } : null)}
                            />
                            <input
                                type="text"
                                placeholder="Value"
                                className="border p-2 w-full rounded mb-2"
                                value={currentTrait?.value || ""}
                                onChange={(e) => setCurrentTrait((prev) => prev ? { ...prev, value: e.target.value } : null)}
                            />
                            <div className="flex justify-end space-x-2">
                                <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                                <button onClick={saveTrait} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
                            </div>
                        </div>
                    </Dialog>

                    <Dialog open={isDeleteModalOpen} onClose={closeDeleteModal} className="outfit-light fixed inset-0 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                            <h3 className="text-lg font-semibold mb-2">Confirm Delete</h3>
                            <p>Are you sure you want to delete this trait?</p>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button onClick={closeDeleteModal} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                                <button onClick={deleteTrait} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                            </div>
                        </div>
                    </Dialog>

                    <button className="outfit-bold bg-gradient-to-r from-purple-500 to-pink-400 text-white w-52 h-14 rounded-full mt-6 mb-4 ml-[65%] transform -translate-x-1/2" onClick={() => setIsProcess(true)}>
                        Create
                    </button>


                </div>
            </div>
            {
                mintingSuccess && (
                    <CreateSectionTwo isOpen={true} onClose={() => setMintingSuccess(false)} />
                )
            }

            {
                isProcess && (
                    <MintProgressBar isOpen={true} onClose={() => setIsProcess(false)} onMintComplete={handleMintingComplete} />
                )
            }
        </div>
    );
}

export default CreateSectionOne;
