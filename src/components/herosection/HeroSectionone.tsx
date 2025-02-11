import {
  Cur1,
  Cur2,
  Cur3,
  Cur4,
  Cur5,
  Cur6
} from '../../assets';
import { ArrowUpRightIcon, Link } from "../../common/index";

function HeroSectionone() {
  const collections = [
    {
      name: "Azuki Elementals",
      floor: "0.31 ETH",
      volume: "66K ETH",
      image: Cur1,
    },
    {
      name: "Skyborne - Genesis Imm...",
      floor: "0.04 ETH",
      volume: "1,237 ETH",
      image: Cur2,
    },
    {
      name: "Cool Cats",
      floor: "0.51 ETH",
      volume: "155K ETH",
      image: Cur3,
    },
    {
      name: "Nifty Island: Legendary P...",
      floor: "0.18 ETH",
      volume: "2,317 ETH",
      image: Cur4,
    },
    {
      name: "Parallel Alpha",
      floor: "< 0.01 ETH",
      volume: "81K ETH",
      image: Cur5,
    },
    {
      name: "The Ancients of Holdara",
      floor: "0.02 ETH",
      volume: "17 ETH",
      image: Cur6,
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold text-gray-800 mb-10 outfit-bold'>Top Collections</h1>
          <Link to="/explore">
            <button className='flex items-center justify-center gap-2 border border-purple-600 text-purple-700 text-lg font-bold w-30 h-15 rounded-lg outfit-bold'>View All<ArrowUpRightIcon className='w-4 h-4' /></button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {collections.map((collection: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-115 transition duration-1500">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold outfit-bold">{collection.name}</h3>
                <p className="text-gray-500 text-md outfit-light">Floor: {collection.floor}</p>
                <p className="text-gray-500 text-md outfit-light">Total volume: {collection.volume}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSectionone
