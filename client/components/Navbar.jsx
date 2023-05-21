import { AuthenticationContext } from "@/pages/_app"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
export default function Navbar() {
    const { AccessToken,setAccessToken, username , setUsername} = useContext(AuthenticationContext)
    const router = useRouter()
    const logout =()=>{
        fetch('/auth/logoutSession').then(res=>res.text()).then(data=>{
            setAccessToken(null)
            setUsername(null)
            router.push('/login')
        })
    }
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
                                    className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                <span className="my-auto ml-4">ITech</span>
                            </span>

                        </Link>
                    </span>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <span className="mr-5 hover:text-gray-900">
                        <Link href={'/'}>Home</Link>
                    </span>
                    <span className="mr-5 hover:text-gray-900">
                        <Link href={'/shop'}>Shop</Link>
                    </span>
                    <span className="mr-5 hover:text-gray-900">
                        <Link href={'/Cart'}>Cart</Link>
                    </span>
                    <span className="mr-5 hover:text-gray-900">
                        <Link href={'/personnel'}>Our Team</Link>
                    </span>
                    <span className="mr-5 hover:text-gray-900">
                        <Link href={'/contact'}>Contact</Link>
                    </span>
                    <input type="text" placeholder="Search..." style={{ border: '.5px solid' }} className='border-gray-500 p-1 rounded-md ' />
                </nav>
                {!AccessToken ?
                    <>
                        <span className="ml-3 mr-2 cursor-pointer">
                            <Link href={'/login'}>
                                Login
                            </Link>
                        </span>

                        <span className="ml-3 cursor-pointer">
                            <Link href={'/register'}>
                                Sign up
                            </Link>
                        </span>
                    </> :
                    <>
                        <span className="ml-3 mr-2 cursor-pointer">
                                {username}
                        </span>

                        <span className="ml-3 cursor-pointer">
                            <span onClick={logout}>
                            Log out
                            </span>
                        </span>
                    </>
                }
            </div>
        </header>

    )
}
