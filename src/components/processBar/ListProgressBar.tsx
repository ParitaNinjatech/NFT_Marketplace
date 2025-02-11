import React from 'react'

function ListProgressBar() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-lg font-semibold">Approve listing</h2>
                <div className="flex items-center mt-4">
                    <img
                        src="https://via.placeholder.com/50" // Replace with actual NFT image
                        alt="NFT"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-3">
                        <p className="text-sm font-semibold">NFT1</p>
                        <p className="text-xs text-gray-500">My Panda</p>
                        <p className="text-xs text-gray-500">Chain: Amoy</p>
                    </div>
                    <div className="ml-auto text-right">
                        <p className="text-sm font-semibold">1 ETH</p>
                        <p className="text-xs text-gray-500">$2,675.80</p>
                    </div>
                </div>
                <p className="text-sm font-semibold mt-4">Go to your wallet</p>
                <p className="text-xs text-gray-500">
                    You'll be asked to review and confirm this listing from your wallet.
                </p>
                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 text-sm border rounded-lg mr-2">Cancel</button>
                    <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListProgressBar
