import { FacebookLogo, GoogleLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

export default function register() {
    return (
        <>
            <div className="flex h-screen justify-center content-center w-screen">
                <div className='hidden flex-1 md:flex md:justify-center md:items-center'>
                    <img src="https://cdn.discordapp.com/attachments/1008921423915532368/1103525691179421787/charlesdeluvio-XdjS0AzKzo0-unsplash.jpg" alt="WEB SHOP" className='w-screen h-screen' />

                </div>
                <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                            Sign up to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Fullname
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign up
                                </button>

                                <div className="mt-4 flex justify-center items-center">
                                    <div class="border grow h-0 border-gray-600"></div>
                                    <span className='px-2 grow-0 text-gray-600'>Or continue with</span>
                                    <div class="border grow h-0 border-gray-600"></div>
                                </div>

                                <div className="mt-4 w-full flex flex-col md:flex-row md:justify-evenly md:items-center">
                                    <button
                                        type="button"
                                        className="rounded-md bg-[#3b5998] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3b5998] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b5998] mb-2 md:mb-0 md:w-36 flex items-center justify-center"
                                    >
                                        <FacebookLogo size={24} /> <span> Facebook</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-md bg-[#FF3E30] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FF3E30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3E30] md:w-36 flex items-center justify-center"
                                    >
                                        <GoogleLogo size={24} /> <span> Google</span>
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className="mt-7 text-center text-sm text-gray-500 dark:text-white">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
