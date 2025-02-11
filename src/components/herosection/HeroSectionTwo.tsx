import {
    Cea1,
    Cea2,
    Cea3,
    Cea4,
    Cea5,
    Cea6,
    Cea7,
    Cea8
} from '../../assets';

function HeroSectionTwo() {
    const creators = [
        {
            name: "Creator One",
            totalSales: "1,500 ETH",
            items: "320 Items",
            image: Cea1,
        },
        {
            name: "Creator Two",
            totalSales: "750 ETH",
            items: "210 Items",
            image: Cea2,
        },
        {
            name: "Creator Three",
            totalSales: "1,200 ETH",
            items: "150 Items",
            image: Cea3,
        },
        {
            name: "Creator Four",
            totalSales: "900 ETH",
            items: "180 Items",
            image: Cea4,
        },
        {
            name: "Creator Five",
            totalSales: "500 ETH",
            items: "100 Items",
            image: Cea5,
        },
        {
            name: "Creator Six",
            totalSales: "2,000 ETH",
            items: "500 Items",
            image: Cea6,
        },
        {
            name: "Creator Seven",
            totalSales: "2,000 ETH",
            items: "500 Items",
            image: Cea7,
        }, {
            name: "Creator Eight",
            totalSales: "2,000 ETH",
            items: "500 Items",
            image: Cea8,
        },
        {
            name: "Creator Nine",
            totalSales: "2,000 ETH",
            items: "500 Items",
            image: Cea7,
        }, {
            name: "Creator Ten",
            totalSales: "2,000 ETH",
            items: "500 Items",
            image: Cea8,
        },
        {
            name: "Creator Eleven",
            totalSales: "2,000 ETH",
            items: "500 Items",
            image: Cea7,
        }, {
            name: "Creator Twelve",
            totalSales: "2,000 ETH",
            items: "500 Items",
            image: Cea8,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold outfit-bold text-gray-800 mb-10'>Top Creators</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {creators.map((creator: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-115 transition duration-1500">
                        <img
                            src={creator.image}
                            alt={creator.name}
                            className="w-40 h-40 rounded-full object-cover ml-12 "
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold outfit-bold text-center">{creator.name}</h3>
                            <p className="text-gray-500 text-md text-center outfit-light">Total Sales: {creator.totalSales}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeroSectionTwo;
