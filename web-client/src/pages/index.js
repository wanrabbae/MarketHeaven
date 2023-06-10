import Cart from '@/components/cart';
import Header from '@/components/header.jsx'
import Hero from '@/components/hero'
import ProductList from '@/components/product_list'
import ProductPromo from '@/components/product_promo';
import axios from 'axios';
import React, { useState } from 'react'

export default function index({ data }) {
  // const [openCart, setOpenCart] = useState(true)
  return (
    <div>
      <Header />
      <Hero />
      {/* <ProductPromo /> */}
      <ProductList products={data} />
      {/* <Cart /> */}
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
