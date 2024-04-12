"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import login from '../../../assets/login.svg'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

    const handleRegister = () => {
        toast.loading('Carregando...', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })

        router.push('/register');
    }

    const handleSubmit = async (event: SyntheticEvent) => {
      event.preventDefault()
      toast.loading('Carregando...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })

      const result = await signIn('credentials', {
        email: email,
        password: password,
        redirect: false
      })

      toast.dismiss()

      if (result && !result.error) {
        toast.success('🎉 Login bem-sucedido!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setTimeout(() => {
            router.replace('/dashboard');
        }, 500)
      } else {
        toast.error('Erro ao fazer login', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(result);
      }

    }

    return (
      <section className="h-screen bg-[#242424]">
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme= "dark"
            />
            <div className="container h-full px-6">
                <div className="flex h-full flex-wrap items-center justify-center">
                <div className="mb-12 md:mb-0 md:w-6/12 lg:w-6/12">
                        <Image 
                        src={login}
                        alt="login"
                        width={600}
                        priority
                        />
                    </div>
                    
                    <div className="md:w-6/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-wrap items-center justify-center font-poppins mb-12'>
                                <h1 className='text-white text-4xl'>Login</h1>
                            </div>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder='Digite seu e-mail..'
                                autoComplete="email"
                                className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b border-gray-200 focus:outline-none text-gray-200"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                id="password"
                                required
                                placeholder='Digite sua senha..'
                                autoComplete="current-password"
                                className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b border-gray-200 focus:outline-none text-gray-200"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="w-full">
                            <button
                                type="submit"
                                className="inline-flex w-full h-11 relative items-center justify-center overflow-hidden font-medium transition-all bg-emerald-400 rounded group py-1.5 px-2.5">
                                <span className="w-full h-48 rounded bg-indigo-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-center font-bold uppercase text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white ">Logar</span>
                            </button>
                            </div>
                        </form>
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>
                        <div className="w-full">
                            <button
                                onClick={handleRegister}
                                className="inline-flex w-full h-11 relative items-center justify-center overflow-hidden font-medium transition-all bg-fuchsia-400 rounded group py-1.5 px-2.5">
                                <span className="w-full h-48 rounded bg-indigo-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-center font-bold uppercase text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white ">Cadastre-se</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

