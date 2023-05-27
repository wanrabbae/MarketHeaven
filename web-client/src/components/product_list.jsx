import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { ShoppingCart } from "@phosphor-icons/react"
import Link from "next/link"
import React from "react"

export default function ProductList({ products }) {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} href={"/products/product_overview"} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.image}
                                    alt={"product.imageAlt"}
                                    className="h-80 w-80 object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            <button className="p-2 bg-indigo-600 text-white ">
                                <ShoppingCartIcon color="white" />
                                <span>Add to Cart</span>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}