import Header from '@/components/header.jsx'
import Hero from '@/components/hero'
import ProductList from '@/components/product_list'
import ProductPromo from '@/components/product_promo';
import axios from 'axios';
import React from 'react'

export default function index({ data }) {
  return (
    <div>
      <Header />
      <Hero />
      {/* <ProductPromo /> */}
      <ProductList products={data} />
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
