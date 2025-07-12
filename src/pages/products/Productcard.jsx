import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/carts/cartSlice';

const Productcard = ({ product }) => {
    const { id, name, image, price, category, date, description} = product || {};
    // console.log(product)

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <div className="card bg-white/80 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt={name} 
                    className=' object-contain w-100 h-80'/>
            </figure>
            <div className="card-body text-black">
                <h2 className="card-title">{name} <span className=' italic text-red-500'>{category}</span></h2>
                <div className=' shadow p-2'>
                    <p className='rounded p-2 bg-whiteborder border-red-300 inline-block'><span className=' rounded p-2 bg-gradient-to-r from-pink-600 via-pink-200 to-yellow-300 '>arrived: {date}</span></p>
                </div>
                <p className=' font-semibold text-lg text-gray-700'>{description}</p>
                <div className="card-actions justify-between items-center">
                    <p className='text-lg font-semibold text-gray-800'>${price}</p>
                    <button
                    onClick={handleAddToCart}
                    className="btn bg-indigo-600 text-white">Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Productcard