
const LoadingSideBar = () => {
  return (
    <aside className="bg-[#161717] text-gray-200 w-64 min-h-screen max-w-28 fixed left-0 top-0 z-50 ">
      <div className="p-4 animate-pulse ">
        <h2 className="text-xl font-semibold mb-4 nav-icon">
            <div 
                className="bg-gray-400 rounded-full w-20 h-20 mb-16"
            />
        </h2>
        <div className="flex justify-center">
            <ul className="flex flex-col items-center jus">
                <li className="mb-3 ">
                <div 
                className="bg-gray-400 rounded-full w-12 h-12 my-6"
            />
                </li>
                <li className="mb-3">
                <div 
                className="bg-gray-400 rounded-full w-12 h-12 my-6" 
            />
                </li>
                <li className="mb-3">
                <div 
                className="bg-gray-400 rounded-full w-12 h-12 my-6"
            />
                </li>
                <li className="mb-3">
                <div 
                className="bg-gray-400 rounded-full w-12 h-12 my-6"
            />
                </li>
            </ul>

        </div>
      </div>
    </aside>
  )
}

export default LoadingSideBar
