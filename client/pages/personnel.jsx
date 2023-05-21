import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
export default function Products({ data }) {
    const colors = ['red', 'blue', 'orange', 'grey', 'green'];
    const sizes = ['SM', 'S', 'M', 'ML', 'X'];

    const router = useRouter();

    const handleDeletePersonnel = async (personnelId) => {
        try {
            await axios.delete(`http://localhost:5000/api/deletePersonnel/${personnelId}`);
            router.push('/personnel');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <br />
            <div className="container mx-auto my-4">
                <div className="flex justify-center">
                    <Link href="/AddPersonnel">
                        <button className="group rounded-2xl h-12 w-48 bg-blue-500 font-bold text-lg
                         text-white relative overflow-hidden " type="submit">
                            + Add Personnel
                            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {Object.keys(data).map((title, i) => {
                            const personnel = data[title];
                            return (
                                <div
                                    key={i}
                                    className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded cursor-pointer hover:scale-105 hover:shadow-lg mr-5"
                                >
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={personnel.image}
                                        />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                            {personnel.department}
                                        </h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">
                                            {personnel.name}
                                        </h2>
                                        <div>
                                            <p className="mt-1">${personnel.salary}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            onClick={() => handleDeletePersonnel(personnel._id)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </section>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:5000/api/getPersonnel');
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                data: {},
            },
        };
    }
}