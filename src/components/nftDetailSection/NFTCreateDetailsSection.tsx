import { useState } from 'react';
import { AirDrop, Cea1, BlankFile, Offers } from '../../assets';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import {
  ClockIcon, EyeIcon, HeartIcon, PaperClipIcon, ShoppingCartIcon, SparklesIcon, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ChevronDownIcon, Bars3BottomRightIcon,
  QrCodeIcon,
  TagIcon, ArrowsRightLeftIcon, ChevronUpIcon,
  Bars3BottomLeftIcon,
  Link
} from '../../common';


interface Activity {
  event: string;
  price?: string;
  from: string;
  to?: string;
  date: string;
}

const getIcon = (event: string) => {
  switch (event) {
    case "List":
      return <TagIcon className="text-gray-500 w-4 h-4" />;
    case "Transfer":
      return <ArrowsRightLeftIcon className="text-gray-500 w-4 h-4" />;
    case "Sale":
      return <ShoppingCartIcon className="text-gray-500 w-4 h-4" />;
    case "AirDrop":
      return <img src={AirDrop} alt='' className="text-gray-500 w-4 h-4" />;
    case "Mint":
      return <SparklesIcon className="text-gray-500 w-4 h-4" />;
    default:
      return null;
  }
};

function NFTCreateDetailsSection() {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTableVisible, setIsTableVisible] = useState<boolean>(false);
  const [isPriceVisible, setIsPriceVisible] = useState<boolean>(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);
  const [isItemVisible, setIsItemVisible] = useState<boolean>(false);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [isOffersVisible, setIsOffersVisible] = useState<boolean>(false);
  const [search, setSearch] = useState("");


  const handleToggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };


  const copyAddress = (address: any) => {
    navigator.clipboard.writeText(address)

  };

  const copyTokenId = (tokenId: any) => {
    navigator.clipboard.writeText(tokenId)

  };


  const dummyPriceData: any[] | undefined = [
  ];

  const listings: any[] | undefined = [];
  const offerList: any[] | undefined = [];


  const activities: Activity[] = [

    { event: "Mint", from: "E31ED8", to: "odysseyfuckmarket.eth", date: "19h ago" },


  ];
  const filteredActivities = activities.filter(
    (activity) =>
      activity.event.toLowerCase().includes(search.toLowerCase()) ||
      activity.from.toLowerCase().includes(search.toLowerCase()) ||
      (activity.to && activity.to.toLowerCase().includes(search.toLowerCase()))
  );

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="container mx-auto mt-16  flex flex-wrap justify-center gap-[10%]">
      <div className="w-full md:w-[45%] lg:w-[40%] h-auto flex flex-col items-center mb-3"
      >
        <div className="relative w-full border border-purple-300 shadow-xl p-4 rounded-lg relative" style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
          <div className="absolute top-4 left-4">
            <button
              className="text-purple-500 hover:text-purple-700 focus:outline-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <PaperClipIcon className="w-8 h-8" />
              {isHovered && (
                <div className="absolute bg-purple-800 text-white text-xs p-2 rounded-lg mt-2 max-w-xs">
                  Chain
                </div>
              )}
            </button>
          </div>

          <div className="absolute top-4 right-4">
            <button
              onClick={handleToggleFavorite}
              className="text-purple-500 hover:text-purple-700 focus:outline-none"
            >
              {isFavorite ? (
                <HeartSolidIcon className="w-8 h-8" />
              ) : (
                <HeartIcon className="w-8 h-8" />
              )}
            </button>
          </div>

          <div>
            <img
              src={Cea1}
              alt="NFT Preview"
              className="w-full h-full object-cover mb-4 mt-10 rounded-lg"
            />
          </div>

        </div>

        <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
          <div className="border-b border-purple-400 flex items-center gap-[70%]">
            <h2 className=" flex gap-2 text-xl text-gray-800 outfit-bold font-semibold mb-4"> <Bars3BottomRightIcon className='w-6 h-6' />Description</h2>
          </div>

          <div>
            <h2 className="text-lg text-gray-800 outfit-light font-semibold mt-4">Here you can view the complete details of your NFT, including its attributes, owner, and current status. Stay informed about its market value and upcoming events. Check out more info about this unique digital collectible, and explore the possibilities of its future.</h2>

          </div>

        </div>

        <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
          <div className="border-b border-purple-400 flex items-center gap-[80%]">
            <h2 className=" flex gap-2 text-xl text-gray-800 outfit-bold font-semibold mb-4"> <QrCodeIcon className='w-6 h-6' />Details</h2>
            {
              !isDescriptionVisible ? (
                <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsDescriptionVisible(!isDescriptionVisible)} />

              ) : (
                <ChevronUpIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsDescriptionVisible(!isDescriptionVisible)} />

              )
            }
          </div>
          {
            isDescriptionVisible && (
              <div className="pb-2 space-y-2 text-lg mt-6">
                <div className="flex justify-between outfit-light">
                  <span>Contract Address</span>
                  <span
                    className="font-medium text-blue-600 cursor-pointer"
                    onClick={() => copyAddress("0x25..9dcAD")}
                  >
                    0x25..9dcAD
                  </span>
                </div>

                <div className="flex justify-between outfit-light">
                  <span>Token ID </span>
                  <span
                    className="font-medium cursor-pointer"
                    onClick={() => copyTokenId("102835...")}
                  >
                    102835...
                  </span>
                </div>
                <div className="flex justify-between outfit-light">
                  <span>
                    Token Standard
                  </span>
                  <span className="font-medium">ERC-721</span>
                </div>
                <div className="flex justify-between outfit-light">
                  <span>
                    Chain
                  </span>
                  <span className="font-medium">Polygon</span>
                </div>

                <div className="flex justify-between outfit-light">
                  <span>
                    Last Update
                  </span>
                  <span className="font-medium">8 months ago</span>
                </div>

                <div className="flex justify-between outfit-light">
                  <span>
                    Creator Earnings
                  </span>
                  <span className="font-medium">6%</span>
                </div>
              </div>
            )
          }


        </div>
      </div>

      <div className="w-full md:w-[45%] lg:w-[40%] mt-4 md:mt-0">
        <div className='mb-4'>
          <Link to={`/createdItem/3/sell`}>
            <button className="w-32 ml-[77%] mt-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 rounded-lg flex justify-center items-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300">
              List for sale</button>
          </Link>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2 outfit-bold">MyNFT</h3>
          <p className="text-lg text-gray-800 outfit-light">Owned by <span className="text-purple-600">ERHFV</span></p>
        </div>

        <div className="flex gap-6 mt-6">
          <p className="flex text-lg text-gray-800 outfit-light gap-2"><EyeIcon className="w-6 h-6 mt-1" />5 Views</p>
          {isFavorite && (
            <p className="flex text-lg text-gray-800 outfit-light gap-2 hover:text-gray-500">
              <HeartIcon className="w-6 h-6 mt-1" />1 Favorite
            </p>
          )}
          <p className="flex text-lg text-gray-800 outfit-light gap-2 hover:text-gray-500">
            <SparklesIcon className="w-5 h-5 mt-1" /> My Collection
          </p>
        </div>



        {/* Price History Section */}
        <div className="border border-purple-400 p-6 rounded-lg mt-10 w-full"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
          <div className="border-b border-purple-400 flex items-center gap-[70%]">
            <h2 className="text-xl text-gray-800 outfit-bold font-semibold mb-4"> 📈 Price History</h2>
            {
              !isPriceVisible ? (

                <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsPriceVisible(!isPriceVisible)} />
              ) : (
                <ChevronUpIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsPriceVisible(!isPriceVisible)} />

              )
            }
          </div>
          {isPriceVisible && (
            <div className="bg-gray-200 h-40 mt-6 rounded-lg p-4">
              {
                dummyPriceData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dummyPriceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className='h-40'>
                    <ClockIcon className='w-10 h-10 mt-4 ml-63' />
                    <h3 className='outfit-light text-lg text-gray-800 text-center mt-4'>No events have occurred yet</h3>
                    <p className='text-gray-700 text-md outfit-light text-center'>Check back later</p>
                  </div>
                )
              }

            </div>
          )}
        </div>

        {/* Listings Section */}
        <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
          <div className="border-b border-purple-400 flex items-center gap-[77%]">
            <h2 className="text-xl text-gray-800 outfit-bold font-semibold mb-4">📊 Listings</h2>
            {
              !isTableVisible ? (

                <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={handleToggleTable} />
              ) : (
                <ChevronUpIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={handleToggleTable} />

              )
            }
          </div>

          {isTableVisible && (
            <div className="overflow-x-auto max-h-96 mt-4">
              {
                listings.length > 0 ? (
                  <table className="min-w-full table-auto">
                    <thead className="outfit-bold text-lg">
                      <tr>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Price</th>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Quantity</th>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">From</th>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Expiration</th>
                      </tr>
                    </thead>

                    <tbody className="outfit-bold text-md">
                      {listings.map((listing, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.price} ETH</td>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.qty}</td>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.from}</td>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.exp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className='h-30'>
                    <img src={BlankFile} alt="" className='w-10 h-10 mt-10 ml-65' />
                    <h3 className='outfit-light text-xl text-center mt-4'>No listings yet</h3>
                  </div>
                )
              }

            </div>
          )}
        </div>


        <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
          <div className="border-b border-purple-400 flex items-center gap-[77%]">
            <h2 className=" flex gap-2 text-xl text-gray-800 outfit-bold font-semibold mb-4"> <Bars3BottomLeftIcon className='w-6 h-6' />Offers</h2>            {
              !isOffersVisible ? (

                <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsOffersVisible(!isOffersVisible)} />
              ) : (
                <ChevronUpIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsOffersVisible(!isOffersVisible)} />

              )
            }
          </div>

          {isOffersVisible && (
            <div className="overflow-x-auto max-h-96 mt-4">
              {
                offerList.length > 0 ? (
                  <table className="min-w-full table-auto">
                    <thead className="outfit-bold text-lg">
                      <tr>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Price</th>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Quantity</th>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">From</th>
                        <th className="px-4 py-2 border-b border-purple-400 text-left text-gray-700">Expiration</th>
                      </tr>
                    </thead>

                    <tbody className="outfit-bold text-md">
                      {offerList.map((listing, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.price} ETH</td>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.qty}</td>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.from}</td>
                          <td className="px-4 py-2 border-b border-purple-400 text-gray-800">{listing.exp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className='h-30'>
                    <img src={Offers} alt="" className='w-10 h-10 mt-10 ml-65' />
                    <h3 className='outfit-light text-xl text-center mt-4'>No offers yet</h3>
                  </div>
                )
              }

            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-[45%] lg:w-[90%]  md:mt-0 mb-6">
        <div className="border border-purple-400 p-6 rounded-lg mt-8 w-full"
          style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 1px 10px rgba(255, 105, 180, 0.5), 0px 10px 50px rgba(204, 153, 255, 0.3)" }}>
          <div className="border-b border-purple-400 flex mb-4 items-center gap-[85%]">
            <h2 className="text-xl text-gray-800 outfit-bold font-semibold mb-3 flex items-center gap-4">
              <span>🔄 Item Activity</span>
            </h2>
            {
              !isItemVisible ? (

                <ChevronDownIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsItemVisible(!isItemVisible)} />
              ) : (
                <ChevronUpIcon className="w-6 h-6 text-purple-500 cursor-pointer font-semibold" onClick={() => setIsItemVisible(!isItemVisible)} />

              )
            }
          </div>


          {
            isItemVisible && (
              <>
                <div className="relative">
                  <button
                    onClick={() => setIsFilterVisible(!isFilterVisible)}
                    className="w-full outfit-bold border flex justify-between text-lg text-start border-purple-400 rounded-md p-2 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Filter Options
                    {
                      !isFilterVisible ? (
                        <ChevronDownIcon className='w-5 h-5 mr-8 mt-1 text-purple-500 cursor-pointer font-semibold' />
                      ) : (
                        <ChevronUpIcon className='w-5 h-5 mr-8 mt-1 text-purple-500 cursor-pointer font-semibold' />

                      )
                    }
                  </button>

                  {isFilterVisible && (
                    <div className="absolute left-0 top-12 w-full border border-purple-400 bg-white p-4 rounded-md shadow-lg">
                      <div>
                        <div className="flex flex-col mt-2 text-lg outfit-bold text-gray-600 ">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="Transfer"
                              checked={search === "Transfer"}
                              onChange={(e) => setSearch(e.target.value)}
                              className="mr-2"
                            />
                            Transfer
                          </label>
                          <label className="flex items-center mt-3">
                            <input
                              type="radio"
                              value="Sale"
                              checked={search === "Sale"}
                              onChange={(e) => setSearch(e.target.value)}
                              className="mr-2"
                            />
                            Sale
                          </label>
                          <label className="flex items-center mt-3">
                            <input
                              type="radio"
                              value="List"
                              checked={search === "List"}
                              onChange={(e) => setSearch(e.target.value)}
                              className="mr-2"
                            />
                            List
                          </label>
                          <label className="flex items-center mt-3">
                            <input
                              type="radio"
                              value="AirDrop"
                              checked={search === "AirDrop"}
                              onChange={(e) => setSearch(e.target.value)}
                              className="mr-2"
                            />
                            AirDrop
                          </label>
                          <label className="flex items-center mt-3">
                            <input
                              type="radio"
                              value="Mint"
                              checked={search === "Mint"}
                              onChange={(e) => setSearch(e.target.value)}
                              className="mr-2"
                            />
                            Mint
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse   text-left">
                    <thead className='outfit-bold text-lg'>
                      <tr className="border-b border-purple-400 text-gray-600">
                        <th className="py-2">Event</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">From</th>
                        <th className="py-2">To</th>
                        <th className="py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody className='outfit-bold text-md'>
                      {filteredActivities.map((activity, index) => (
                        <tr key={index} className="border-b border-purple-400 hover:bg-gray-100">
                          <td className="py-2 flex items-center gap-2">{getIcon(activity.event)} {activity.event}</td>
                          <td className="py-2 font-semibold">{activity.price || "-"}</td>
                          <td className="py-2 text-blue-600 cursor-pointer">{activity.from}</td>
                          <td className="py-2 text-blue-600 cursor-pointer">{activity.to || "-"}</td>
                          <td className="py-2 text-gray-500">{activity.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )
          }


        </div>
      </div>
    </div>
  )
}

export default NFTCreateDetailsSection
