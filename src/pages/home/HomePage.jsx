import React from 'react'
import { useSelector } from 'react-redux'
import Productcard from '../products/Productcard';
import AddPro from '../products/AddPro';

const HomePage = () => {

  const products = useSelector((state) => state.products);
  // console.log(products)

  //addProduct(data)

  return (
    <div className=' py-8 text-black '>
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-8'>
            <div className='col-span-2'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                  {
                    products.length ? products.map((product, index) => (
                      <Productcard 
                      key={index}
                      product={product}
                      />
                    )) : <p>No product found!!</p>
                  }
                </div>
            </div>


            <div>
              <AddPro />
            </div>
        </div>
    </div>
  )
}

export default HomePage