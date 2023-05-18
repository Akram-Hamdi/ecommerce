import Link from "next/link"
export default function Navbar() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl cursor-pointer">
                    <Link href={'/'}>
                        <span className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="my-auto"> Ecommerce</span>
                        </span>

                    </Link>
                    </span>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">Shop</a>
                    <a className="mr-5 hover:text-gray-900">Panier</a>
                    <a className="mr-5 hover:text-gray-900">Contact</a>
                    <input type="text" placeholder="Search..." style={{ border: '.5px solide' }} className='flex' />
                </nav>
                <span className="ml-3 cursor-pointer">
                    <Link href={'/login'}>
                        Login
                    </Link>
                </span>

                <span className="ml-3 cursor-pointer">
                    <Link href={'/register'}>
                        Sign up
                    </Link>
                </span>

            </div>
        </header>

    )
}
