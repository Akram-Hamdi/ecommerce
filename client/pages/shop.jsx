import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

export default function Products({ data }) {
    const colors = ['red', 'blue', 'orange', 'grey', 'green'];
    const sizes = ['SM', 'S', 'M', 'ML', 'X'];

    const router = useRouter();

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/deleteProduct/${productId}`);
            router.push('/shop');
        } catch (error) {
            console.error(error);
        }
    };

    // const handleModifyProduct = async (productId) => {
    //     try {
    //         await axios.put(`http://localhost:5000/api/modifyProduct/${productId}`, updatedProductData);
    //         router.push('/shop');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    return (
        <>
            <div className="container mx-auto my-4">
                <div className="flex justify-center">
                    <Link href="/addProducts">
                        <button className="group rounded-2xl h-12 w-48 bg-blue-500 font-bold text-lg
                         text-white relative overflow-hidden " type="submit">
                            + Add Products
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
                            const product = data[title];
                            return (
                                <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded cursor-pointer hover:scale-105 hover:shadow-lg mr-5">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={product.image}
                                        />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                            {product.category}
                                        </h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">
                                            {product.title}
                                        </h2>
                                        <div className="flex">
                                            {colors.map((e, index) =>
                                                product.color.includes(e) ? (
                                                    <div
                                                        key={index}
                                                        className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                                                        style={{ backgroundColor: e }}
                                                    ></div>
                                                ) : (
                                                    ''
                                                )
                                            )}
                                        </div>
                                        <div>
                                            <p className="mt-1">${product.price}</p>
                                            <span>Qty: {product.qty}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Link href={`/modifyProduct?productId=${product._id}`}>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                Modify
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteProduct(product._id)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Delete
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
        const res = await fetch('http://localhost:5000/api/getProducts');
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