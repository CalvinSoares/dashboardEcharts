import LoadingHeader from "@/components/Header/LoadingHeader";

const Loading = () => {

    return (
        <div className="bg-[#242424] min-h-screen">
      <LoadingHeader />
      <div className="grid grid-cols-2 sm:grid-cols-2 xs:grid-rows-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center ml-28 gap-4 md:px-8 md:py-6 lg:px-20 lg:py-10">
        
        <div className="bg-gray-400 animate-pulse hover:scale-105 duration-200 ease-linear rounded-3xl mx-auto lg:h-40 lg:w-72 md:h-28 md:w-44 sm:h-24 sm:w-40 xs:h-24 xs:w-40 shadow flex flex-col items-center justify-center cursor-pointer">
          <div className="bg-gray-600 w-[40%] h-3 lg:mr-32 md:mr-24 sm:mr-16 xs:mr-16 mb-12  " />
          <ul className="flex items-center">
            <div className="bg-gray-600 rounded-full mr-6 lg:w-10 md:w-8 sm:w-6 xs:w-6 lg:h-10 md:h-8 sm:h-6 xs:h-6 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
              <div className="bg-gray-600 " />
            </div>
            <li className="text-black flex justify-between font-bold lg:text-3xl md:text-xl sm:text-lg xs:text-lg font-poppins">
              <div className="bg-gray-600 w-40 h-6"></div>
            </li>
          </ul>
        </div>
        <div className="bg-gray-400 animate-pulse hover:scale-105 duration-200 ease-linear rounded-3xl mx-auto lg:h-40 lg:w-72 md:h-28 md:w-44 sm:h-24 sm:w-40 xs:h-24 xs:w-40 shadow flex flex-col items-center justify-center cursor-pointer">
          <div className="bg-gray-600 w-[40%] h-3 lg:mr-32 md:mr-24 sm:mr-16 xs:mr-16 mb-12  " />
          <ul className="flex items-center">
            <div className="bg-gray-600 rounded-full mr-6 lg:w-10 md:w-8 sm:w-6 xs:w-6 lg:h-10 md:h-8 sm:h-6 xs:h-6 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
              <div className="bg-gray-600 " />
            </div>
            <li className="text-black flex justify-between font-bold lg:text-3xl md:text-xl sm:text-lg xs:text-lg font-poppins">
              <div className="bg-gray-600 w-40 h-6"></div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-400 animate-pulse hover:scale-105 duration-200 ease-linear rounded-3xl mx-auto lg:h-40 lg:w-72 md:h-28 md:w-44 sm:h-24 sm:w-40 xs:h-24 xs:w-40 shadow flex flex-col items-center justify-center cursor-pointer">
          <div className="bg-gray-600 w-[40%] h-3 lg:mr-32 md:mr-24 sm:mr-16 xs:mr-16 mb-12  " />
          <ul className="flex items-center">
            <div className="bg-gray-600 rounded-full mr-6 lg:w-10 md:w-8 sm:w-6 xs:w-6 lg:h-10 md:h-8 sm:h-6 xs:h-6 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
              <div className="bg-gray-600 " />
            </div>
            <li className="text-black flex justify-between font-bold lg:text-3xl md:text-xl sm:text-lg xs:text-lg font-poppins">
              <div className="bg-gray-600 w-40 h-6"></div>
            </li>
          </ul>
        </div>
        <div className="row-span-2 h-full animate-pulse">
          <div className="w-[100%] min-h-full bottom-12 rounded-md bg-gray-400" />
          
        </div>
        <div className="col-span-2 animate-pulse">
          <div className="min-w-full h-[300px] bg-gray-400 rounded-md" />
        </div>

        <div className="col-span-2 animate-pulse">
          <div className="min-w-full h-[300px] bg-gray-400 rounded-md" />
        </div>
        
      </div>
    </div>
    )
}

export default Loading;