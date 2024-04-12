
import { IoIosArrowDown } from "react-icons/io";

const LoadingHeader = () => {

  return (
    <nav className="p-2 pt-6 bg-[#242424] animate-pulse" >
        <div className="lg:flex md:flex sm:flex items-center justify-between">
            <div className="pl-36 flex items-center justify-center">
            <div className="h-12 w-48 flex items-center bg-[#333333] rounded-3xl px-4 py-2">
            </div>
            </div>
            <div className="">
                <div className="bg-gray-400 w-40 h-4" />
            </div>           
            <div className="flex items-center">

                    <div className="lg:flex lg:flex-col md:hidden sm:hidden xs:hidden">
                        <div className="bg-gray-400 w-20 h-2" />
                        <div className="bg-gray-400 w-20 h-2 mt-2"/>             
                    </div>
      
                <div className="lg:pl-0 md:pl-0 sm:pl-52 xs:pl-52 flex m-2 items-center justify-center relative ">
                    <div
                      className="w-12 h-12 rounded-full bg-gray-400" 
                    />
                    <IoIosArrowDown 
                    className="text-white ml-2 cursor-pointer" 
                    size={20}
                    /> 
                </div>      
                               
            </div>
        </div>
    </nav>
  )
}

export default LoadingHeader
