"use client"

import register from '../../../assets/register.svg'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Register = () => {

    const router = useRouter(); 

    const form = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Campo Obrigatório'),
            name: Yup.string().required('Campo obrigatório'),
            password: Yup.string().required('Campo obrigatório')
        }),
        onSubmit: (values: any) => {
            postCreateUser({
                email: values.email,
                name: values.name,
                password: values.password
            })
        }
    })

    const checkErrorInput = (nameField: any) => {
        const isChanged = nameField in form.touched
        const isInvalid = nameField in  form.errors
        const hasError = isChanged && isInvalid

        return hasError
    }

    const postCreateUser = async (data: any) => {
        try {
            const res = await axios.post(
                'https://api-dashboard-u4g5.onrender.com/auth/register',
                data
            )
            if (res.data.success) {
                console.log('Conta cadastrada com sucesso', {
                    position: 'top-right',
                    autoClose: 2000
                  })
    
            }
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <section className="bg-[#242424] w-screen h-screen">
      <div className='container h-full px-6 py-6'>
        <div className='flex h-full flex-wrap items-center justify-center lg:justify-between'>
            <div className='mb-12 md:mb-0 md:w-6/12 lg:w-6/12'> 
                <Image 
                    src={register} 
                    alt="register" 
                    width={700}
                    priority
                />
            </div>
        <div className=' md:w-6/12 lg:ml-6 lg:w-5/12'>
            <form onSubmit={form.handleSubmit}>
                <div className='flex flex-wrap items-center justify-center font-poppins mb-12'>
                    <h1 className='text-white text-4xl'>Cadastro</h1>
                </div>             
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    className={`mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b focus:outline-none text-gray-200 ${checkErrorInput('name') ? 'border-red-500 border-2' : ''}`}
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="Nome Completo" 
                />
                {typeof form.errors.name === 'string' && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.errors.name}
                    </p>
                )}  
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b focus:outline-none text-gray-200 ${checkErrorInput('email') ? 'border-red-500 border-2' : ''}`}
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder='Digite seu e-mail..'
                    autoComplete="email"
                />
                {typeof form.errors.email === 'string' && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.errors.email}
                    </p>
                )}
                <input
                    type="password"
                    name="password"
                    id="password"
                    className={`mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b focus:outline-none text-gray-200 ${checkErrorInput('password') ? 'border-red-500 border-2' : ''}`}
                    value={form.values.password}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder='Digite sua senha..'
                    autoComplete="current-password"
                />
                {typeof form.errors.password === 'string' && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.errors.password}
                    </p>
                )}
                <div className="w-full">
                    <button
                        type="submit"
                        className="inline-flex w-full h-11 relative items-center justify-center overflow-hidden font-medium transition-all bg-emerald-400 rounded group py-1.5 px-2.5"
                    >
                        <span className="w-full h-48 rounded bg-indigo-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-center font-bold uppercase text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white ">
                        Cadastrar
                        </span>
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
                                onClick={() => router.push('/')}
                                className="inline-flex w-full h-11 relative items-center justify-center overflow-hidden font-medium transition-all bg-fuchsia-400 rounded group py-1.5 px-2.5">
                                <span className="w-full h-48 rounded bg-indigo-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-center font-bold uppercase text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white ">
                                    Login   
                                </span>
                            </button>
                    </div>
                </div> 
            </div>      
      </div>
    </section>
  )
}

export default Register
