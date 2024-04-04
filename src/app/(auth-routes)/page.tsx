"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import login from '../../../assets/login.svg'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

    const handleSubmit = async (event: SyntheticEvent) => {
      event.preventDefault()

      const result = await signIn('credentials', {
        email: email,
        password: password,
        redirect: false
      })

      if (result?.error) {
        console.log(result)
        return
      }
      
      router.replace('/dashboard')
    }

    return (
      <section className="h-screen bg-[#242424]">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="mb-12 md:mb-0 md:w-6/12 lg:w-6/12">
                        <Image 
                        src={login}
                        alt="login"
                        width={500}
                        height={200}
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
                                placeholder='Digite seu e-mail..'
                                autoComplete="email"
                                className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b text-gray-200"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                id="password"
                                placeholder='Digite sua senha..'
                                autoComplete="current-password"
                                className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b text-gray-200"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="w-full">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-emerald-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black"
                                >
                                    Logar
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
                                onClick={() => router.push('/register')}
                                className="inline-block w-full rounded bg-fuchsia-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black"
                            >
                                Cadastre-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

