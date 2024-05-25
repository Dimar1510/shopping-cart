import { useEffect, useState } from 'react';
import FilterSelector from './FilterSelector';

export default function Filter({setSort, allProducts, setProducts, products, filter, setFilter, sort}) {
  
  
  const flavors = new Set()
  for (let product of allProducts) {
    for (let flavor of product.flavor_profile) {
        flavors.add(flavor)
    }
  }
  const categories = [...flavors]


  

  useEffect(()=> {
    if (filter.length === 0) {
      setProducts([...allProducts])
      return
    }
    const tempProducts = []
    for (let item of filter) {
      tempProducts.push(...allProducts.filter(p => p.flavor_profile.includes(item) && !tempProducts.some(e => e.id === p.id)))
      
    }
    setProducts([...tempProducts])
    setSort('default')
    setSort(sort)
  }, [filter])


  
  useEffect(()=>{
    console.log(products)
  },[products])
  


  return (
    <FilterSelector 
      categories={categories} 
      filter={filter} 
      setFilter={setFilter}
      title={'flavor'}
    />
  );
}