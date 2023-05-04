import Header from '@/components/header.jsx'
import Hero from '@/components/hero'
import ProductList from '@/components/product_list'
import React from 'react'

export default function index() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductList />
    </div>
  )
}
