import axios from "axios"
import React from "react"

// const products = [
//     {
//         id: 1,
//         name: 'Earthen Bottle',
//         href: '#',
//         price: '$48',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
//         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//         id: 2,
//         name: 'Nomad Tumbler',
//         href: '#',
//         price: '$35',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
//         imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//         id: 3,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//         id: 4,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//         id: 5,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//         id: 6,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//         id: 7,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
//     {
//         id: 8,
//         name: 'Focus Paper Refill',
//         href: '#',
//         price: '$89',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//     },
// ]

export default function ProductList({ data }) {
    console.log(data);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {/* {products.map((product) => (
                        <a key={product.id} href={""} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.image}
                                    alt={"product.imageAlt"}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const products = await axios.get('https://fakestoreapi.com/products')
    const data = products.data
    return {
        props: {
            data
        }
    }
}