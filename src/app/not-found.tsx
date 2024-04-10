import Image from "next/image"
import notFound from '../../assets/notFound.jpeg'
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="flex items-center  justify-center h-screen bg-[#2E2B3E]">
            
            <div className="flex flex-col items-center justify-center">
            <p className="font-poppins font-semibold text-2xl">Página não encontrada!</p>
            <Image 
            className="rounded-full hover:sepia hover:scale-95 duration-1000 cursor-pointer"
            src={notFound}
            alt="404"
            width={500}
            /> 
            <hr className="w-[50%] mb-8"/>
            <Link href="/dashboard" className="relative inline-flex h-11 items-center justify-center overflow-hidden font-medium transition-all bg-fuchsia-400 rounded group py-1.5 px-2.5">
                <span className="w-28 h-48 rounded bg-indigo-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative text-center font-bold uppercase text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white ">
                     Voltar  
                </span>
            </Link> 
            </div>
               
        </div>
    )
}

export default NotFound